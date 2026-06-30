"use client";

import { useEffect, useState } from "react";

type Skill = {
  id: number;
  name: string;
  percent: number;
  icon: string;
};

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/public/skills");
      const data = await res.json();

      if (data.success) {
        setSkills(data.skills);
      }
    }

    load();
  }, []);
    return (
    <section
      id="skills"
      className="bg-[#080B14] py-24 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">

          <span className="text-violet-400">
            MY SKILLS
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Professional Skills
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill) => (

            <div
              key={skill.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >

              <div className="mb-4 flex items-center justify-between">

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <span className="text-violet-400">
                  {skill.percent}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-violet-600 transition-all duration-700"
                  style={{
                    width: `${skill.percent}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}