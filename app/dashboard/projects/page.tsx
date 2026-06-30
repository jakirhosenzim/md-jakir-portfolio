"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured: boolean;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const res = await fetch("/api/projects");
    const data = await res.json();

    if (data.success) {
      setProjects(data.projects);
    }
  }

  async function deleteProject(id: number) {
    if (!confirm("Delete this project?")) return;

    await fetch("/api/projects", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    loadProjects();
  }

  return (
    <main className="min-h-screen">

      <div className="mb-10 flex items-center justify-between">

        <h1 className="text-4xl font-black text-white">
          Projects
        </h1>

        <Link
          href="/dashboard/projects/new"
          className="rounded-xl bg-violet-600 px-6 py-3 text-white"
        >
          Add Project
        </Link>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-5 text-left text-white">Image</th>

              <th className="p-5 text-left text-white">Title</th>

              <th className="p-5 text-left text-white">Category</th>

              <th className="p-5 text-left text-white">Featured</th>

              <th className="p-5 text-left text-white">Action</th>

            </tr>

          </thead>

          <tbody>

            {projects.map((project) => (

              <tr
                key={project.id}
                className="border-t border-white/10"
              >

                <td className="p-5">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-16 w-24 rounded-lg object-cover"
                  />

                </td>

                <td className="p-5 text-white">

                  {project.title}

                </td>

                <td className="p-5 text-gray-300">

                  {project.category}

                </td>

                <td className="p-5">

                  {project.featured ? (
                    <span className="rounded bg-green-600 px-3 py-1 text-white">
                      Yes
                    </span>
                  ) : (
                    <span className="rounded bg-gray-600 px-3 py-1 text-white">
                      No
                    </span>
                  )}

                </td>

                <td className="space-x-3 p-5">
                                    <Link
                    href={`/dashboard/projects/edit/${project.id}`}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {projects.length === 0 && (

              <tr>

                <td
                  colSpan={5}
                  className="p-10 text-center text-gray-400"
                >
                  No Projects Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>
          </main>
  );
}