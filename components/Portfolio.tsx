"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo: string;
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/public/projects");
      const data = await res.json();

      if (data.success) {
        setProjects(data.projects);
      }
    }

    load();
  }, []);
    return (
    <section
      id="portfolio"
      className="bg-[#080B14] py-24 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">

          <span className="text-violet-400">
            MY WORK
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Featured Projects
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:border-violet-500"
            >

              <div className="relative h-60 w-full">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <span className="text-violet-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-6 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-xl bg-violet-600 px-5 py-3 text-white"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="rounded-xl border border-violet-500 px-5 py-3 text-white"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}