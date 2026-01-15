"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="hidden md:block">
          <h1 className="text-[#1877f2] text-6xl font-bold mb-4">facebook</h1>
          <p className="text-[24px] text-gray-800 leading-8">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              name="email"
              placeholder="Email address or phone number"
              className="fb-input mb-3"
              onChange={handleChange}
              required
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="fb-input mb-3"
              onChange={handleChange}
              required
            />

            <button className="fb-btn">Log in</button>

            <div className="text-center mt-4">
              <Link href="/forget" className="text-[#1877f2] text-sm">
                Forgotten password?
              </Link>
            </div>

            <hr className="my-6" />

            <div className="flex justify-center">
              <Link href="/signup" className="fb-create-btn">
                Create new account
              </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
