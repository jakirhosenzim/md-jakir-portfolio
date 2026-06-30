"use client";

import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">

        <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

        <span className="text-sm tracking-wider text-violet-300">
          AVAILABLE FOR FREELANCE
        </span>

      </div>

      {/* Title */}

      <h1 className="mt-8 text-6xl font-black leading-tight xl:text-7xl">

        HI, I'M

        <br />

        <span className="text-white">
          MD JAKIR
        </span>

        <br />

        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          HOSEN
        </span>

      </h1>

      {/* Type */}

      <div className="mt-6 text-3xl font-semibold text-gray-300">

        <TypeAnimation
          sequence={[
            "IT SUPPORT SPECIALIST",
            2000,
            "GRAPHICS DESIGNER",
            2000,
            "VIDEO EDITOR",
            2000,
            "WEB DEVELOPER",
            2000,
          ]}
          speed={40}
          repeat={Infinity}
        />

      </div>

      {/* Description */}

      <p className="mt-8 max-w-xl leading-8 text-gray-400">

        Passionate IT professional specializing in
        Networking, CCTV, Access Control,
        Graphics Design, Video Editing
        and Modern Web Development.

      </p>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700">

          <span className="flex items-center gap-3">

            Download CV

            <FaDownload />

          </span>

        </button>

        <button className="rounded-2xl border border-violet-500 px-8 py-4 font-semibold transition hover:bg-violet-600">

          Hire Me

        </button>

      </div>

      {/* Social */}

      <div className="mt-12 flex gap-4">

        {[
          FaFacebookF,
          FaGithub,
          FaLinkedinIn,
          FaYoutube,
        ].map((Icon, index) => (

          <button
            key={index}
            className="glass flex h-14 w-14 items-center justify-center rounded-2xl transition hover:border-violet-500 hover:bg-violet-600"
          >

            <Icon size={20} />

          </button>

        ))}

      </div>

    </div>
  );
}