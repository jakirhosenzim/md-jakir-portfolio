"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Skill = {
  id: number;
  name: string;
  percent: number;
  icon: string;
};

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    loadSkills();
  }, []);

  async function loadSkills() {
    const res = await fetch("/api/skills");
    const data = await res.json();

    if (data.success) {
      setSkills(data.skills);
    }
  }

  async function deleteSkill(id: number) {
    if (!confirm("Delete this skill?")) return;

    await fetch("/api/skills", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadSkills();
  }

  return (
    <main className="min-h-screen">

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-black text-white">
          Skills
        </h1>

        <Link
          href="/dashboard/skills/new"
          className="rounded-xl bg-violet-600 px-6 py-3 text-white"
        >
          Add Skill
        </Link>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-5 text-left text-white">Skill</th>

              <th className="p-5 text-left text-white">Percentage</th>

              <th className="p-5 text-left text-white">Icon</th>

              <th className="p-5 text-left text-white">Action</th>

            </tr>

          </thead>

          <tbody>

            {skills.map((skill) => (

              <tr
                key={skill.id}
                className="border-t border-white/10"
              >

                <td className="p-5 text-white">
                  {skill.name}
                </td>

                <td className="p-5 text-cyan-400">
                  {skill.percent}%
                </td>

                <td className="p-5 text-gray-300">
                  {skill.icon}
                </td>

                <td className="space-x-3 p-5">

                  <Link
                    href={`/dashboard/skills/edit/${skill.id}`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteSkill(skill.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {skills.length === 0 && (

              <tr>

                <td
                  colSpan={4}
                  className="p-10 text-center text-gray-400"
                >
                  No Skills Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
          </main>
  );
}