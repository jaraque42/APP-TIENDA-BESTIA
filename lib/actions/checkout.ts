"use server";

import { db } from "@/db";
import { orders, orderItems, users } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

interface CheckoutItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

export async function createOrder(items: CheckoutItem[], totalAmount: number) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("UNAUTHORIZED: Debe iniciar sesión para procesar un pedido.");
  }

  const userId = parseInt(session.user.id, 10);

  // Fetch the user to get their shipping address
  const [currentUser] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (!currentUser) {
    throw new Error("USER_NOT_FOUND");
  }

  if (!currentUser.address) {
    throw new Error("MISSING_ADDRESS: Por favor, complete su dirección de envío en su perfil.");
  }

  try {
    // 1. Insert Order
    const [newOrder] = await db.insert(orders).values({
      userId: userId,
      totalAmount: Math.round(totalAmount * 100), // store as cents
      shippingAddress: currentUser.address,
      status: "processing",
    }).returning();

    // 2. Insert Order Items
    const itemsToInsert = items.map((item) => ({
      orderId: newOrder.id,
      productId: item.id,
      name: item.name,
      price: Math.round(item.price * 100), // store as cents
      quantity: item.quantity,
      size: item.size || null,
      color: item.color || null,
    }));

    await db.insert(orderItems).values(itemsToInsert);

    return { 
      success: true, 
      orderId: `BST-ORD-${newOrder.id.toString().padStart(6, '0')}` 
    };

  } catch (error) {
    console.error("Order Creation Error:", error);
    throw new Error("PROCESS_ERROR: Hubo un error al generar su manifiesto de entrega.");
  }
}
