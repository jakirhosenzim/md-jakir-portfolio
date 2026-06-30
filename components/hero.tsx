"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Settings = {
  heroTitle: string;
  heroSubtitle: string;
  resume: string;
};

export default function Hero() {
  const [settings, setSettings] = useState<Settings>({
    heroTitle: "",
    heroSubtitle: "",
    resume: "",
  });

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/public/settings");
      const data = await res.json();

      if (data.success) {
        setSettings(data.settings);
      }
    }

    load();
  }, []);
    return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080B14] text-white"
    >
      <div className="container mx-auto grid items-center gap-12 px-6 pt-24 lg:grid-cols-2">

        <div>

          <span className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            Welcome To My Portfolio
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            {settings.heroTitle}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            {settings.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700"
            >
              Hire Me
            </a>

            <a
              href={settings.resume || "#"}
              download
              className="rounded-xl border border-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-600"
            >
              Download CV
            </a>

          </div>

        </div>
                <div className="relative flex justify-center">

          <div className="relative h-[450px] w-[450px]">

            <Image
              src="/images/profile.png"
              alt="MD Jakir Hosen"
              fill
              priority
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
}