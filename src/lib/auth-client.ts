import { emailOTPClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL: process.env.NEXT_PUBLIC_APP_URL, //baseURL: "http://localhost:3000"  the base url of your auth server
  baseURL: "http://localhost:8000/account/better-auth",
  plugins: [emailOTPClient()],
});

export const { signIn, signOut, useSession, emailOtp, getSession } = authClient;
