"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <>
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-violet-400"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.4,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </>
  );
}