"use client";

import { useSession, signOut } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const [isCheckingSession, setIsCheckingSession] = useState(true); // ✅ Track session loading


  useEffect(() => {
    console.log("Session Data:", session);

    if (!session.isPending) {
      if (!session.data) {
        router.push("/auth/sign-in");
      } else {
        setIsCheckingSession(false); // ✅ Session is stable, stop checking
      }
    }
  }, [session, router]);

  // ✅ Show loading state while fetching session
  if (session.isPending || isCheckingSession) {
    return <p>Loading session...</p>;
  }

  // ✅ Prevent crash if session data is null
  if (!session.data) {
    return <p>Redirecting...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
      <p>Hello,{session.data.user?.name}  👋</p>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}
