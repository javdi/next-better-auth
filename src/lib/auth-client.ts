import { emailOTPClient, magicLinkClient, multiSessionClient } from "better-auth/client/plugins";
import {
    createAuthClient
} from "better-auth/react";


export const authClient = createAuthClient({
    // baseURL: process.env.NEXT_PUBLIC_APP_URL, //baseURL: "http://localhost:3000"  the base url of your auth server
    baseURL: "http://localhost:8000/api/auth",
    // plugins: [
    //     emailOTPClient()
    // ],
    plugins: [magicLinkClient(), emailOTPClient(), multiSessionClient()],
})

export const {
    signIn,
    signOut,
    signUp,
    useSession,
    emailOtp
} = authClient;

// export const { signIn, signUp, useSession } = createAuthClient()
