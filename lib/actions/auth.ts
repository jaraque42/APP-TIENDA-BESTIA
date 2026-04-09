"use server";

import { db } from "@/db";
import { users, carts } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password) {
    throw new Error("Missing required fields");
  }

  // Check if user exists
  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const [newUser] = await db.insert(users).values({
    name,
    email,
    password: hashedPassword,
  }).returning();

  if (newUser) {
    await db.insert(carts).values({
      userId: newUser.id,
    });
  }

  redirect("/login");
}
