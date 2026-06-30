"use client";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B16]">

      <div className="container py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-black">

              <span className="text-violet-500">&lt;/&gt;</span>{" "}
              JAKIR

            </h2>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">

              Passionate IT Professional specializing in
              Networking, Graphics Design,
              Video Editing and Modern
              Web Development

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Quick Links
            </h3>

            <div className="grid gap-4 text-gray-400">

              {[
                "Home",
                "About",
                "Skills",
                "Services",
                "Portfolio",
                "Experience",
                "Contact",
              ].map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-violet-400"
                >

                  {item}

                </a>

              ))}

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Follow Me
            </h3>

            <div className="flex gap-4">

              {[
                FaFacebookF,
                FaGithub,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, index) => (

                <button
                  key={index}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:bg-violet-600"
                >

                  <Icon size={20} />

                </button>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">

          © 2026 MD Jakir Hosen. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}