"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080B14] pt-28"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">

        {/* LEFT */}
        <div className="max-w-xl">

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-400">
            Welcome to my portfolio website
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            MD
            <span className="text-violet-500"> JAKIR </span>
            HOSEN
          </h1>

          <div className="mt-5 text-2xl font-semibold text-gray-300">

            <TypeAnimation
              sequence={[
                "IT Support Specialist",
                2000,
                "Graphics Designer",
                2000,
                "Video Editor",
                2000,
                "Web Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="mt-6 leading-8 text-gray-400">
            Passionate IT professional specializing in networking,
            graphics design, video editing and modern web development.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
              Download CV
              <FaDownload />
            </button>

            <button className="rounded-xl border border-violet-500 px-8 py-4 font-semibold text-white transition hover:bg-violet-600">
              Hire Me
            </button>

          </div>

          <div className="mt-10 flex gap-4">

            <a className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-violet-600">
              <FaFacebookF />
            </a>

            <a className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-violet-600">
              <FaGithub />
            </a>

            <a className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-violet-600">
              <FaLinkedinIn />
            </a>

            <a className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-violet-600">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
        >

          <div className="absolute inset-0 rounded-[40px] bg-violet-600/20 blur-3xl" />

          <div className="relative rounded-[35px] border border-violet-500/30 bg-[#11182d] p-5">

            <Image
              src="/images/profile.png"
              alt="Jakir"
              width={420}
              height={520}
              priority
              className="rounded-[25px]"
            />

            <div className="absolute bottom-8 right-8 rounded-xl bg-[#08101f] px-5 py-3">

              <p className="text-sm text-gray-400">
                Available For
              </p>

              <p className="font-bold text-green-400">
                Freelance
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}