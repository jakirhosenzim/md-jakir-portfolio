"use client";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Particles from "@/components/common/Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070B16] pt-32"
    >
      <Particles />

      {/* Background Glow */}
      <div className="absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-violet-600/20 blur-[180px]" />

      <div className="absolute -right-64 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,.12),transparent_70%)]" />

      <div className="container relative z-10 mx-auto max-w-[1500px] px-6">

        <div className="grid min-h-[88vh] items-center gap-32 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >
            <HeroContent />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >
            <HeroImage />
          </motion.div>

        </div>

      </div>
    </section>
  );
}