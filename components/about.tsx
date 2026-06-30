"use client";

import { useEffect, useState } from "react";

type AboutData = {
  about: string;
  phone: string;
  email: string;
  location: string;
  facebook: string;
  github: string;
  linkedin: string;
  youtube: string;
};

export default function About() {
  const [data, setData] = useState<AboutData>({
    about: "",
    phone: "",
    email: "",
    location: "",
    facebook: "",
    github: "",
    linkedin: "",
    youtube: "",
  });

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/public/about");
      const json = await res.json();

      if (json.success) {
        setData(json);
      }
    }

    load();
  }, []);
    return (
    <section
      id="about"
      className="bg-[#0B1020] py-24 text-white"
    >
      <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2">

        <div>

          <span className="text-violet-400">
            ABOUT ME
          </span>

          <h2 className="mt-4 text-5xl font-black">
            Who I Am
          </h2>

          <p className="mt-8 leading-8 text-gray-300">
            {data.about}
          </p>

        </div>

        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8">

          <div>
            <span className="text-gray-400">
              Phone
            </span>

            <h3 className="mt-2 text-xl font-semibold">
              {data.phone}
            </h3>
          </div>

          <div>
            <span className="text-gray-400">
              Email
            </span>

            <h3 className="mt-2 text-xl font-semibold">
              {data.email}
            </h3>
          </div>

          <div>
            <span className="text-gray-400">
              Location
            </span>

            <h3 className="mt-2 text-xl font-semibold">
              {data.location}
            </h3>
          </div>

          <div className="flex gap-4 pt-6">

            <a
              href={data.facebook}
              target="_blank"
              className="rounded-xl bg-violet-600 px-4 py-3"
            >
              Facebook
            </a>

            <a
              href={data.github}
              target="_blank"
              className="rounded-xl bg-violet-600 px-4 py-3"
            >
              GitHub
            </a>

            <a
              href={data.linkedin}
              target="_blank"
              className="rounded-xl bg-violet-600 px-4 py-3"
            >
              LinkedIn
            </a>

            <a
              href={data.youtube}
              target="_blank"
              className="rounded-xl bg-violet-600 px-4 py-3"
            >
              YouTube
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}