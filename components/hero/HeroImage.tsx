"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex items-center justify-center"
    >
      {/* Glow */}
      <div className="absolute h-[480px] w-[480px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Main Card */}
      <div className="relative rounded-[30px] border border-violet-500/40 bg-[#0d1222]/80 p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(139,92,246,.35)]">

        {/* Top Border */}
        <div className="absolute -top-[2px] left-8 h-[2px] w-40 rounded-full bg-violet-500" />

        {/* Image */}
        <Image
          src="/images/profile.png"
          alt="MD Jakir Hosen"
          width={420}
          height={520}
          priority
          className="rounded-2xl object-cover"
        />

        {/* Freelance Badge */}
        <div className="absolute bottom-8 right-5 flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-[#0b1325]/90 px-5 py-3 backdrop-blur-xl">

          <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <div>
            <p className="text-sm font-semibold text-white">
              Available for
            </p>

            <p className="text-sm text-gray-300">
              Freelance
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}