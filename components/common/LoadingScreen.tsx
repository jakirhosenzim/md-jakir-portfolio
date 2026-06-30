"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#070B16]"
        >
          <div className="flex flex-col items-center">

            <motion.h1
              initial={{ scale: .8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: .8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-6xl font-black"
            >
              <span className="text-violet-500">&lt;/&gt;</span>{" "}
              JAKIR
            </motion.h1>

            <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
              />

            </div>

            <p className="mt-6 text-gray-400">
              Loading Portfolio...
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}