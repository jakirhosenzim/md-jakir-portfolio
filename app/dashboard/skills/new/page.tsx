"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddSkillPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    percent: 0,
    icon: "",
  });

  async function saveSkill(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      router.push("/dashboard/skills");
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-bold text-white">
          Add Skill
        </h1>

        <form
          onSubmit={saveSkill}
          className="space-y-5"
        >
                      <input
            type="text"
            placeholder="Skill Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            type="number"
            placeholder="Percentage"
            value={form.percent}
            onChange={(e) =>
              setForm({
                ...form,
                percent: Number(e.target.value),
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            type="text"
            placeholder="Icon (e.g. FaReact)"
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
            Save Skill
          </button>

        </form>

      </div>

    </main>
  );
}