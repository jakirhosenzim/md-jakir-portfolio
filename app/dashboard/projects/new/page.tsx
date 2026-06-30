"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/dashboard/ImageUpload";

export default function AddProject() {
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

  async function saveProject(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      router.push(
        "/dashboard/projects"
      );
    } else {
      alert("Failed");
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-bold text-white">
          Add Project
        </h1>

        <form
          onSubmit={saveProject}
          className="space-y-5"
        >

          <input
            placeholder="Title"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
          />

          <input
            placeholder="Category"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            rows={5}
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                description:
                  e.target.value,
              })
            }
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
            placeholder="Github Link"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                github: e.target.value,
              })
            }
          />

          <input
            placeholder="Live Demo"
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                demo: e.target.value,
              })
            }
          />

          <label className="flex items-center gap-3 text-white">

            <input
              type="checkbox"
              onChange={(e) =>
                setForm({
                  ...form,
                  featured:
                    e.target.checked,
                })
              }
            />

            Featured Project

          </label>

          <button className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white">
            Save Project
          </button>

        </form>

      </div>

    </main>
  );
}