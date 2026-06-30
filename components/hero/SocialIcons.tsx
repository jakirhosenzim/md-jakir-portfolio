"use client";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaFacebookF />,
    link: "https://facebook.com",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/8801732537388",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com",
  },
  {
    icon: <FaYoutube />,
    link: "https://youtube.com",
  },
];

export default function SocialIcons() {
  return (
    <div className="mt-10 flex items-center gap-4">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,.5)]"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}