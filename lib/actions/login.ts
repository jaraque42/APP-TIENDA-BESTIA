"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function login(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  try {
    await signIn("credentials", { ...data, redirectTo: "/profile" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
