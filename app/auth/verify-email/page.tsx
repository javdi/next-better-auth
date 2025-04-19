"use client";

import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/src/components/button";
import { Loader2 } from "lucide-react";
import { signIn, successCallbackURL } from "@/src/lib/auth-client";
import { redirect } from "next/navigation";

export default function VerifyEmailPage() {
  // We use a mounted state to ensure we only render when on the client.
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Retrieve the stored email from localStorage (browser-only API)
    const storedEmail = localStorage.getItem("otp-email") || "";
    setEmail(storedEmail);
  }, []);

  // Until the component mounts on the client, render nothing.
  if (!isMounted) {
    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const result = await signIn.emailOtp({
      email: formData.get("email")?.toString() as string,
      otp: formData.get("otp")?.toString() as string,
    });
    if (result) {
      if ("error" in result && result.error !== null) {
        setErrorMessage(JSON.stringify(result.error));
      } else {
        redirect(successCallbackURL);
      }
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* Display error message if any */}
      {errorMessage && <div>{errorMessage}</div>}

      {/* Disabled input box to show the user's email */}
      <div className="grid gap-2">
        <input
          className="input bg-gray-100"
          id="email"
          name="email"
          type="email"
          value={email}
          readOnly
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="code" className="mt-6">
          Verification code sent to your inbox
        </label>
        <input
          className="input"
          type="text"
          id="otp"
          name="otp"
          placeholder="Enter code"
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? <Loader2 size={16} className="animate-spin" /> : "Continue"}
      </Button>
    </form>
  );
}
