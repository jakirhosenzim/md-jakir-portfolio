"use client";

import { useEffect, useState } from "react";
import {
  FolderKanban,
  Mail,
  Eye,
  Users,
} from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    projects: 0,
    messages: 0,
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const visitor = await fetch("/api/visitor");
    const visitorData = await visitor.json();

    const project = await fetch("/api/projects");
    const projectData = await project.json();

    setStats({
      total: visitorData.total,
      today: visitorData.today,
      projects: projectData.projects?.length || 0,
      messages: 0,
    });
  }

  const cards = [
    {
      title: "Today's Visitors",
      value: stats.today,
      icon: Eye,
      color: "bg-violet-600",
    },
    {
      title: "Total Visitors",
      value: stats.total,
      icon: Users,
      color: "bg-cyan-600",
    },
    {
      title: "Projects",
      value: stats.projects,
      icon: FolderKanban,
      color: "bg-pink-600",
    },
    {
      title: "Messages",
      value: stats.messages,
      icon: Mail,
      color: "bg-green-600",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <h1 className="mb-10 text-5xl font-black text-white">
        Dashboard
      </h1>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className={`${card.color} rounded-3xl p-8`}
            >

              <Icon
                size={40}
                className="mb-6 text-white"
              />

              <h2 className="text-5xl font-black text-white">
                {card.value}
              </h2>

              <p className="mt-3 text-white/80">
                {card.title}
              </p>

            </div>

          );

        })}

      </div>

    </main>
  );
}