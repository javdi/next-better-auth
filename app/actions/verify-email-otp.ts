"use server";

import { signIn } from "@/src/lib/auth-client";
import { redirect } from "next/navigation";

export async function verifyEmailOtp(formData: FormData) {
  const { error, data } = await signIn.emailOtp({
    email: formData.get("email")?.toString() as string,
    otp: formData.get("otp")?.toString() as string,
  });

  if (error) {
    return { error: JSON.stringify(error) };
  }

  // Redirect to the dashboard upon successful verification
  console.warn("verifyEmailOtp", data);
  redirect("/auth/dashboard");
}
