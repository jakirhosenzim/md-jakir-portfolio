"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";

const experience = [
  {
    icon: Briefcase,
    title: "IT Officer",
    company: "One General Hospital",
    date: "2025 - Present",
    description:
      "Managing IT infrastructure, Networking, CCTV Systems, Access Control, Website & Technical Support.",
  },
  {
    icon: Briefcase,
    title: "Web Team Executive",
    company: "Computer Vision BD",
    date: "2024 - 2025",
    description:
      "Website Management, Data Entry, Technical Support and Client Management.",
  },
  {
    icon: GraduationCap,
    title: "Call Center",
    company: "Karigory Patshala",
    date: "2023",
    description:
      "all service provider.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="container py-24"
    >
      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black">
          My{" "}
          <span className="gradient-text">
            Experience
          </span>
        </h2>

        <p className="mt-4 text-gray-400">
          Education & Professional Journey
        </p>

      </div>

      <div className="relative mx-auto max-w-5xl">

        <div className="absolute left-6 top-0 h-full w-[2px] bg-violet-500/30" />

        <div className="space-y-10">

          {experience.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.2,
                }}
                className="relative ml-16 rounded-[30px] glass p-8 card-hover"
              >

                <div className="absolute -left-[58px] top-10 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 shadow-[0_0_25px_rgba(139,92,246,.4)]">

                  <Icon size={22} />

                </div>

                <div className="mb-3 flex items-center gap-2 text-violet-400">

                  <Calendar size={18} />

                  <span>{item.date}</span>

                </div>

                <h3 className="text-2xl font-bold">

                  {item.title}

                </h3>

                <h4 className="mt-2 text-lg text-violet-300">

                  {item.company}

                </h4>

                <p className="mt-5 leading-8 text-gray-400">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}