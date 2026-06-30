"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Star } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Purple Glow */}
      <div className="absolute h-[750px] w-[750px] rounded-full bg-violet-600/20 blur-[190px]" />

      {/* Blue Glow */}
      <div className="absolute bottom-10 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[120px]" />

      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="relative"
      >

        {/* Neon Border */}

        <div className="relative rounded-[42px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px] shadow-[0_0_70px_rgba(139,92,246,.45)]">

          <div className="rounded-[40px] bg-[#0B1020] p-4">

            {/* Top Light */}

            <div className="absolute left-10 top-0 h-[3px] w-36 rounded-full bg-violet-500 shadow-[0_0_30px_#a855f7]" />

            {/* Corner */}

            <div className="absolute right-7 top-7 h-12 w-12 rounded-full border border-violet-400/50" />

            <div className="overflow-hidden rounded-[32px]">

              <Image
                src="/images/profile.png"
                alt="Jakir"
                width={560}
                height={720}
                priority
                className="transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

        {/* Experience */}

        <motion.div
          animate={{
            x: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute -left-14 top-12 hidden rounded-2xl border border-white/10 bg-[#111827]/90 px-6 py-4 backdrop-blur-xl xl:block"
        >
          <div className="flex items-center gap-3">

            <Sparkles className="text-yellow-400" />

            <div>

              <h2 className="text-4xl font-black text-violet-400">
                4+
              </h2>

              <p className="text-sm text-gray-400">
                Years Experience
              </p>

            </div>

          </div>
        </motion.div>

        {/* Status */}

        <motion.div
          animate={{
            x: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute -right-10 bottom-12 rounded-2xl border border-white/10 bg-[#111827]/90 px-6 py-4 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">

            <CheckCircle2
              size={24}
              className="text-green-500"
            />

            <div>

              <p className="text-xs text-gray-400">
                Available For
              </p>

              <p className="font-semibold">
                Full-Time
              </p>

            </div>

          </div>
        </motion.div>

        {/* Rating */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute -left-10 bottom-16 hidden rounded-2xl border border-white/10 bg-[#111827]/90 px-5 py-4 backdrop-blur-xl lg:block"
        >
          <div className="flex items-center gap-3">

            <Star className="fill-yellow-400 text-yellow-400" />

            <div>

              <h3 className="font-bold">
                5.0 Rating
              </h3>

              <p className="text-xs text-gray-400">
                Client Reviews
              </p>

            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}