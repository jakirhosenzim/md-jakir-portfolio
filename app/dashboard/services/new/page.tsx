"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddServicePage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    icon: "",
  });

  async function saveService(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/dashboard/services");
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-bold text-white">
          Add Service
        </h1>

        <form
          onSubmit={saveService}
          className="space-y-5"
        >
                      <input
            type="text"
            placeholder="Service Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <textarea
            rows={5}
            placeholder="Service Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            type="text"
            placeholder="Icon (Example: FaCode)"
            value={form.icon}
            onChange={(e) =>
              setForm({
                ...form,
                icon: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white hover:bg-violet-700"
          >
            Save Service
          </button>

        </form>

      </div>

    </main>
  );
}