"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Experience = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    loadExperiences();
  }, []);

  async function loadExperiences() {
    const res = await fetch("/api/experience");
    const data = await res.json();

    if (data.success) {
      setExperiences(data.experiences);
    }
  }

  async function deleteExperience(id: number) {
    if (!confirm("Delete this experience?")) return;

    await fetch("/api/experience", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadExperiences();
  }

  return (
    <main className="min-h-screen">

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-black text-white">
          Experience
        </h1>

        <Link
          href="/dashboard/experience/new"
          className="rounded-xl bg-violet-600 px-6 py-3 text-white"
        >
          Add Experience
        </Link>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-5 text-left text-white">Company</th>

              <th className="p-5 text-left text-white">Position</th>

              <th className="p-5 text-left text-white">Duration</th>

              <th className="p-5 text-left text-white">Action</th>

            </tr>

          </thead>

          <tbody>

            {experiences.map((exp) => (

              <tr
                key={exp.id}
                className="border-t border-white/10"
              >

                <td className="p-5 text-white">
                  {exp.company}
                </td>

                <td className="p-5 text-cyan-400">
                  {exp.position}
                </td>

                <td className="p-5 text-gray-300">
                  {exp.startDate} - {exp.endDate}
                </td>

                <td className="space-x-3 p-5">

                  <Link
                    href={`/dashboard/experience/edit/${exp.id}`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteExperience(exp.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {experiences.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="p-10 text-center text-gray-400"
                >
                  No Experience Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
          </main>
  );
}