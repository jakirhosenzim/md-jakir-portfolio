"use client";

import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-5">
      <a
        href="/resume/Resume.pdf"
        download
        className="group flex items-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700"
      >
        Download CV
        <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
      </a>

      <a
        href="#contact"
        className="group flex items-center gap-3 rounded-xl border border-violet-500 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-violet-600"
      >
        Hire Me
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}