"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (!data.success) {
      alert(data.message);
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070B16]">
      <form
        onSubmit={login}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Admin Login
        </h1>
                <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-5 w-full rounded-xl border border-white/10 bg-[#0d1323] p-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-xl border border-white/10 bg-[#0d1323] p-4 text-white outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "Please wait..." : "Login"}
        </button>

      </form>
    </main>
  );
}