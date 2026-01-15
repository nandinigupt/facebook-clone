"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (res.ok) {
      alert("Account created successfully");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold">Sign Up</h2>
        <p className="text-gray-500 text-sm mb-4">It’s quick and easy.</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <input
              name="firstName"
              placeholder="First name"
              className="fb-input"
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Surname"
              className="fb-input"
              onChange={handleChange}
              required
            />
          </div>

          <input
            name="email"
            placeholder="Mobile number or email"
            className="fb-input mb-3"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="New password"
            className="fb-input mb-4"
            onChange={handleChange}
            required
          />

          <button className="fb-create-btn w-full">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
