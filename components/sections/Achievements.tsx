"use client";

import {
  Trophy,
  FolderOpen,
  Users,
  Briefcase,
  Heart,
} from "lucide-react";

const achievements = [
  {
    icon: FolderOpen,
    value: "2000+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients",
  },
  {
    icon: Briefcase,
    value: "4+",
    label: "Years Experience",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Client Satisfaction",
  },
];

export default function Achievements() {
  return (
    <section className="container py-20">
      <div className="glass rounded-3xl p-8">

        <div className="mb-10 flex items-center gap-3">
          <Trophy className="text-violet-400" />
          <h2 className="text-3xl font-bold">
            Achievements
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition hover:border-violet-500 hover:-translate-y-2"
              >
                <Icon
                  size={40}
                  className="mx-auto mb-5 text-violet-400"
                />

                <h3 className="text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}