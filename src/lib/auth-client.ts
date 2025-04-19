import { emailOTPClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8000/account/auth",
  plugins: [emailOTPClient()],
});

export const { signIn, signOut, useSession, emailOtp, getSession } = authClient;
export const successCallbackURL = 'http://localhost:3000/dashboard';
// export const errorCallbackURL = 'http://localhost:3000';
