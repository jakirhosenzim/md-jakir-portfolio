"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = [
  "All",
  "Graphics",
  "Video",
  "Web",
];

const projects = [
  {
    title: "Hospital Banner",
    category: "Graphics",
    image: "/portfolio/banner.png",
  },
  {
    title: "YouTube Thumbnail",
    category: "Graphics",
    image: "/portfolio/thumb.jpg",
  },
  {
    title: "Hospital Promo",
    category: "Video",
    image: "/portfolio/promo.jpg",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    image: "/portfolio/web.jpg",
  },
  {
    title: "Business Card",
    category: "Graphics",
    image: "/portfolio/card.jpg",
  },
  {
    title: "Logo Design",
    category: "Graphics",
    image: "/portfolio/logo.jpg",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="container py-24">

      <div className="mb-12 flex flex-col items-center">

        <h2 className="text-4xl font-bold">
          My <span className="text-violet-400">Portfolio</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-xl px-6 py-3 transition ${
                active === item
                  ? "bg-violet-600 text-white"
                  : "glass text-gray-300"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((project) => (
          <div
            key={project.title}
            className="glass card-hover overflow-hidden rounded-2xl"
          >

            <div className="relative h-64">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {project.category}
              </p>

              <button className="mt-5 flex items-center gap-2 text-violet-400">
                View Project
                <ExternalLink size={18}/>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}