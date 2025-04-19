"use client";

import { useState, FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { signIn, successCallbackURL } from "@/src/lib/auth-client";
import { sendEmailOtp } from "@/app/actions/send-email-otp";
import { Button } from "@/src/components/button";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await sendEmailOtp(formData);

    if (result && result.error) {
      setErrorMessage(result.error);
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="grid gap-4">
        {/* Display error message if any */}
        {errorMessage && <div>{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              "Continue"
            )}
          </Button>
        </form>

        <div className="text-center">--- or continue with ---</div>

        <div
          className={cn(
            "w-full gap-2 flex items-center",
            "justify-between flex-col"
          )}
        >
          <Button
            variant="outline"
            className="w-full"
            onClick={async () => {
              await signIn.social({
                provider: "google",
                callbackURL: successCallbackURL,
              });
            }}
          >
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={async () => {
              await signIn.social({
                provider: "apple",
                callbackURL: successCallbackURL,
              });
            }}
          >
            Continue with Apple
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={async () => {
              await signIn.social({
                provider: "microsoft",
                callbackURL: successCallbackURL,
              });
            }}
          >
            Continue with Microsoft
          </Button>
        </div>
      </div>
    </div>
  );
}
