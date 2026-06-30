"use client";

import { useState } from "react";

export default function AdminProfile() {
  const [form, setForm] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  async function save(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/admin/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Profile Updated");
    } else {
      alert(data.message);
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-black text-white">
          Admin Profile
        </h1>

        <form
          onSubmit={save}
          className="space-y-5"
        >

          <input
            placeholder="Username"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            value={form.username}
            onChange={(e)=>
              setForm({
                ...form,
                username:e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Current Password"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            value={form.currentPassword}
            onChange={(e)=>
              setForm({
                ...form,
                currentPassword:e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            value={form.newPassword}
            onChange={(e)=>
              setForm({
                ...form,
                newPassword:e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            value={form.confirmPassword}
            onChange={(e)=>
              setForm({
                ...form,
                confirmPassword:e.target.value,
              })
            }
          />

          <button className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white">
            Update Profile
          </button>

        </form>

      </div>

    </main>
  );
}