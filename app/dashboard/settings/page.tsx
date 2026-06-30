"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [form, setForm] = useState({
    heroTitle: "",
    heroSubtitle: "",
    about: "",
    phone: "",
    email: "",
    location: "",
    facebook: "",
    github: "",
    linkedin: "",
    youtube: "",
    resume: "",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    const res = await fetch("/api/public/settings");
    const data = await res.json();

    if (data.success) {
      setForm(data.settings);
    }
  }

  async function saveSettings(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Settings Updated");
    }
  }

  return (
    <main className="min-h-screen bg-[#070B16] p-10">

      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8">

        <h1 className="mb-8 text-4xl font-black text-white">
          Website Settings
        </h1>

        <form
          onSubmit={saveSettings}
          className="space-y-5"
        >
                    <input
            placeholder="Hero Title"
            value={form.heroTitle}
            onChange={(e) =>
              setForm({
                ...form,
                heroTitle: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Hero Subtitle"
            value={form.heroSubtitle}
            onChange={(e) =>
              setForm({
                ...form,
                heroSubtitle: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <textarea
            rows={5}
            placeholder="About"
            value={form.about}
            onChange={(e) =>
              setForm({
                ...form,
                about: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />
                    <input
            placeholder="Facebook URL"
            value={form.facebook}
            onChange={(e) =>
              setForm({
                ...form,
                facebook: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="GitHub URL"
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
            placeholder="LinkedIn URL"
            value={form.linkedin}
            onChange={(e) =>
              setForm({
                ...form,
                linkedin: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="YouTube URL"
            value={form.youtube}
            onChange={(e) =>
              setForm({
                ...form,
                youtube: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <input
            placeholder="Resume URL"
            value={form.resume}
            onChange={(e) =>
              setForm({
                ...form,
                resume: e.target.value,
              })
            }
            className="w-full rounded-xl bg-[#0d1323] p-4 text-white"
          />

          <button
            type="submit"
            className="rounded-xl bg-violet-600 px-8 py-4 font-bold text-white hover:bg-violet-700"
          >
            Save Settings
          </button>

        </form>

      </div>

    </main>
  );
}