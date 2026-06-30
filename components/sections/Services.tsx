"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Network,
  Camera,
  Shield,
  PenTool,
  Video,
  Code2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "IT Support",
    desc: "Professional IT support & troubleshooting.",
    icon: Monitor,
  },
  {
    title: "Networking",
    desc: "Router, Switch, LAN & WiFi configuration.",
    icon: Network,
  },
  {
    title: "CCTV System",
    desc: "IP Camera, DVR & NVR installation.",
    icon: Camera,
  },
  {
    title: "Access Control",
    desc: "Biometric & Door Access Solution.",
    icon: Shield,
  },
  {
    title: "Graphics Design",
    desc: "Poster, Banner & Branding Design.",
    icon: PenTool,
  },
  {
    title: "Video Editing",
    desc: "YouTube, Shorts & Motion Graphics.",
    icon: Video,
  },
  {
    title: "Web Development",
    desc: "Modern Next.js Portfolio Website.",
    icon: Code2,
  },
];

export default function Services() {
  return (
    <section id="services" className="container py-24">

      <div className="mb-14 text-center">

        <h2 className="text-5xl font-black">
          My <span className="gradient-text">Services</span>
        </h2>

        <p className="mt-4 text-gray-400">
          What I Can Do For You
        </p>

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
              }}
              className="glass card-hover rounded-[30px] p-7"
            >

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-500/10">

                <Icon
                  size={40}
                  className="text-violet-400"
                />

              </div>

              <h3 className="text-2xl font-bold">

                {service.title}

              </h3>

              <p className="mt-5 leading-8 text-gray-400">

                {service.desc}

              </p>

              <button className="mt-8 flex items-center gap-2 text-violet-400 transition hover:gap-4">

                Learn More

                <ArrowRight size={18} />

              </button>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}