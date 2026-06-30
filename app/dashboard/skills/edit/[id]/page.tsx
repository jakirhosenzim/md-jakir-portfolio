"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditSkillPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    percent: 0,
    icon: "",
  });

  useEffect(() => {
    loadSkill();
  }, []);

  async function loadSkill() {
    const res = await fetch("/api/skills");
    const data = await res.json();

    const skill = data.skills.find(
      (s: any) => s.id === Number(id)
    );

    if (skill) {
      setForm(skill);
    }
  }

  async function updateSkill(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/skills", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Number(id),
        ...form,
      }),
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
          Edit Skill
        </h1>

        <form
          onSubmit={updateSkill}
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
            placeholder="Icon (Example: FaReact)"
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
            Update Skill
          </button>

        </form>

      </div>

    </main>
  );
}