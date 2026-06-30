"use client";

import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="max-w-[640px]">

      {/* Badge */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="inline-flex items-center gap-3 rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-3 backdrop-blur-xl"
      >
        <span className="h-3 w-3 animate-pulse rounded-full bg-green-500"></span>

        <span className="text-sm uppercase tracking-[3px] text-violet-300">
          Available For Freelance
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .2 }}
        className="mt-8 text-[72px] font-black leading-[1.05] drop-shadow-[0_0_40px_rgba(139,92,246,.35)] xl:text-[108px]"
      >
        HI, I'M

        <br />

        <span className="text-white">
          MD JAKIR
        </span>

        <br />

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          HOSEN
        </span>

      </motion.h1>

      {/* Type Animation */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
        className="mt-7 text-[34px] font-semibold text-gray-300"
      >
        <TypeAnimation
          sequence={[
            "IT OFFICER",
            2000,
            "NETWORK ENGINEER",
            2000,
            "DATA MANAGEMENT",
            2000,
            "GRAPHICS DESIGNER",
            2000,
            "VIDEO EDITOR",
            2000,
            "WEB DEVELOPER",
            2000,
          ]}
          speed={45}
          repeat={Infinity}
        />
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8 }}
        className="mt-8 max-w-xl text-lg leading-9 text-gray-400"
      >
        Experienced IT Officer specializing in Networking,
        CCTV Systems, Access Control, Graphics Design,
        Video Editing and Modern Web Development.
      </motion.p>

      {/* Buttons */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
  className="mt-12 flex flex-wrap gap-5"
>

  <a
    href="/resume.pdf"
    download
    className="group flex items-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-violet-700"
  >
    Download CV

    <FaDownload className="transition group-hover:translate-y-1" />

  </a>

  <a
    href="#contact"
    className="rounded-2xl border border-violet-500/40 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:border-violet-400 hover:bg-violet-600"
  >
    Hire Me
  </a>

</motion.div>

      {/* Social */}

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="mt-12 flex gap-5"
>

  <a
    href="https://www.facebook.com/mdjakirhosenzim1"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-600"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="https://github.com/jakirhosenzim"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-600"
  >
    <FaGithub size={20} />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-600"
  >
    <FaLinkedinIn size={20} />
  </a>

  <a
    href="https://www.youtube.com/@mdjakirhosenzim"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl transition hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-600"
  >
    <FaYoutube size={20} />
  </a>

</motion.div>

      {/* Stats */}

      <div className="mt-14 grid grid-cols-3 gap-5">

        <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-5 backdrop-blur-xl">
          <h2 className="text-3xl font-black text-violet-400">
            4+
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Years Experience
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-5 backdrop-blur-xl">
          <h2 className="text-3xl font-black text-violet-400">
            2000+
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Projects
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-5 backdrop-blur-xl">
          <h2 className="text-3xl font-black text-violet-400">
            100+
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Happy Clients
          </p>
        </div>

      </div>

    </div>
  );
}