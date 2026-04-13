"use server";


import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateProfile(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const fullName = formData.get("fullName") as string;
  const address = formData.get("address") as string;

  if (!fullName || !address) {
    throw new Error("Missing fields");
  }

  await db.update(users)
    .set({ fullName, address })
    .where(eq(users.id, parseInt(session.user.id)));

  revalidatePath("/profile");
  redirect("/profile?updated=true");
}

export async function getUserProfile() {
  const session = await auth();
  if (!session?.user?.id) {
    return null;
  }

  const [user] = await db
    .select({
      id: users.id,
      fullName: users.fullName,
      address: users.address,
    })
    .from(users)
    .where(eq(users.id, parseInt(session.user.id)))
    .limit(1);

  return user || null;
}

