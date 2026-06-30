"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ImageUpload from "@/components/dashboard/ImageUpload";

export default function EditProject() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    github: "",
    demo: "",
    featured: false,
  });

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    const res = await fetch("/api/projects");
    const data = await res.json();

    const project = data.projects.find(
      (p: any) => p.id === Number(id)
    );

    if (project) {
      setForm(project);
    }
  }

  async function updateProject(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/projects", {
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
      router.push("/dashboard/projects");
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-bold text-white">
          Edit Project
        </h1>

        <form
          onSubmit={updateProject}
          className="space-y-5"
        >
                      <input
            placeholder="Title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Category"
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
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

          <ImageUpload
            value={form.image}
            onChange={(url) =>
              setForm({
                ...form,
                image: url,
              })
            }
          />

          <input
            placeholder="GitHub Link"
            value={form.github}
            onChange={(e) =>
              setForm({
                ...form,
                github: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Live Demo"
            value={form.demo}
            onChange={(e) =>
              setForm({
                ...form,
                demo: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />
                    <label className="flex items-center gap-3 text-white">

            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                setForm({
                  ...form,
                  featured: e.target.checked,
                })
              }
            />

            Featured Project

          </label>

          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white hover:bg-violet-700"
          >
            Update Project
          </button>

        </form>

      </div>

    </main>
  );
}