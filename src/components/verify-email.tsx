"use client";
import { useState } from 'react';
import { authClient } from '@/src/lib/auth-client';
import { useRouter } from 'next/navigation';


export default function VerifyEmail() {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("otp-email");
    const { error } = await authClient.signIn.emailOtp({ email, otp: code });
    if (error) {
      alert('Invalid code. Please try again.');
    } else {
      alert('Email verified successfully!');
      router.push('/auth/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Verification Code:
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </label>
      <button type="submit">Verify Email</button>
    </form>
  );
}
