"use client";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const submitEmail = async () => {
    const res = await fetch("http://localhost:5000/api/auth/forgetPassword/forget", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setToken(data.resetToken);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={submitEmail}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Get Reset Token
        </button>

        {token && (
          <p className="mt-3 text-sm break-all">
            Reset Token: <b>{token}</b>
          </p>
        )}
      </div>
    </div>
  );
}
