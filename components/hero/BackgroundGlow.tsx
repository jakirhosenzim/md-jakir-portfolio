"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      {/* Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-600 blur-[160px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-0 top-60 h-[450px] w-[450px] rounded-full bg-cyan-500 blur-[180px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-500 blur-[150px]"
      />
    </>
  );
}