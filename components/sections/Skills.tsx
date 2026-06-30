"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  PenTool,
  Video,
  Network,
  Code2,
  Cctv,
} from "lucide-react";

const skills = [
  {
    title: "IT Support",
    icon: Monitor,
    value: 95,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Networking",
    icon: Network,
    value: 93,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "CCNA",
    icon: Cctv,
    value: 97,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Graphics Design",
    icon: PenTool,
    value: 90,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Video Editing",
    icon: Video,
    value: 92,
    color: "from-pink-500 to-violet-500",
  },
  {
    title: "Web Development",
    icon: Code2,
    value: 88,
    color: "from-emerald-500 to-cyan-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-24">

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black">
          My <span className="gradient-text">Skills</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Technologies & Professional Experience
        </p>

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

        {skills.map((skill, index) => {

          const Icon = skill.icon;

          return (

            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              className="glass card-hover rounded-[28px] p-7"
            >

              <div className="mb-8 flex justify-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10">

                  <Icon
                    size={38}
                    className="text-violet-400"
                  />

                </div>

              </div>

              <h3 className="text-center text-2xl font-bold">

                {skill.title}

              </h3>

              <div className="mt-8">

                <div className="mb-3 flex justify-between">

                  <span>Skill</span>

                  <span className="font-bold">
                    {skill.value}%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.value}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />

                </div>

              </div>

              <div className="mt-8 text-center">

                <button className="rounded-xl border border-violet-500/30 px-5 py-2 text-sm transition hover:bg-violet-600">

                  View Details

                </button>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}