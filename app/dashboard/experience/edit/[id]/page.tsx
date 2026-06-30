"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditExperiencePage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    loadExperience();
  }, []);

  async function loadExperience() {
    const res = await fetch("/api/experience");
    const data = await res.json();

    const experience = data.experiences.find(
      (e: any) => e.id === Number(id)
    );

    if (experience) {
      setForm(experience);
    }
  }

  async function updateExperience(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/experience", {
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
      router.push("/dashboard/experience");
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-bold text-white">
          Edit Experience
        </h1>

        <form
          onSubmit={updateExperience}
          className="space-y-5"
        >
                      <input
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            type="text"
            placeholder="Position"
            value={form.position}
            onChange={(e) =>
              setForm({
                ...form,
                position: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            type="text"
            placeholder="Start Date"
            value={form.startDate}
            onChange={(e) =>
              setForm({
                ...form,
                startDate: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            type="text"
            placeholder="End Date"
            value={form.endDate}
            onChange={(e) =>
              setForm({
                ...form,
                endDate: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <textarea
            rows={5}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white hover:bg-violet-700"
          >
            Update Experience
          </button>

        </form>

      </div>

    </main>
  );
}