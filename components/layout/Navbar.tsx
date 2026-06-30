"use client";

import { useEffect, useState } from "react";
import { Menu, X, Moon } from "lucide-react";

const links = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Portfolio",
  "Experience",
  "Resume",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">

      <div className="container mx-auto px-6">

        <nav
          className={`mt-5 flex h-20 items-center justify-between rounded-2xl border border-white/10 px-8 transition-all duration-300 ${
            scrolled
              ? "bg-[#0B1020]/90 backdrop-blur-2xl shadow-[0_0_30px_rgba(139,92,246,.18)]"
              : "bg-[#0B1020]/70 backdrop-blur-xl"
          }`}
        >

          <a
            href="#home"
            className="text-4xl font-black"
          >
            <span className="text-violet-500">&lt;/&gt;</span>{" "}
            JAKIR
          </a>

          <div className="hidden items-center gap-10 lg:flex">
                        {links.map((item) => {

              if (item === "Resume") {
                return (
                  <a
                    key={item}
                    href="/resume.pdf"
                    download
                    className="text-sm font-semibold text-gray-400 transition hover:text-white"
                  >
                    Resume
                  </a>
                );
              }

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActive(item)}
                  className={`relative text-sm font-semibold transition ${
                    active === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}

                  {active === item && (
                    <span className="absolute -bottom-3 left-0 h-[2px] w-full rounded-full bg-violet-500" />
                  )}
                </a>
              );

            })}
          </div>

          <div className="hidden items-center gap-4 lg:flex">

            <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:border-violet-500">
              <Moon size={18} />
            </button>

            <a
              href="#contact"
              className="rounded-xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-700"
            >
              Hire Me
            </a>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </nav>
                {open && (

          <div className="mt-3 rounded-2xl border border-white/10 bg-[#0B1020]/95 p-6 backdrop-blur-xl lg:hidden">

            <div className="flex flex-col gap-5">

              {links.map((item) => {

                if (item === "Resume") {
                  return (
                    <a
                      key={item}
                      href="/resume.pdf"
                      download
                      onClick={() => setOpen(false)}
                      className="font-semibold"
                    >
                      Resume
                    </a>
                  );
                }

                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActive(item);
                      setOpen(false);
                    }}
                    className="font-semibold"
                  >
                    {item}
                  </a>
                );

              })}

            </div>

          </div>

        )}

      </div>

    </header>
  );
}