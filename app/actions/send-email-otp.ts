"use server";

import { emailOtp } from "@/src/lib/auth-client";
import { redirect } from "next/navigation";

export async function sendEmailOtp(formData: FormData) {
  const { error, data } = await emailOtp.sendVerificationOtp({
    email: formData.get("email")?.toString() as string,
    type: "sign-in",
  });

  if (error) {
    return { error: JSON.stringify(error) };
  }

  // On success, perform a redirect
  console.warn("sendEmailOtp", data);
  redirect("/auth/verify-email");
}
