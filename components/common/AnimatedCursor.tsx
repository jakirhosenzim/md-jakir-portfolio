"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      document.querySelectorAll("a,button").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 1,
        y: mouse.y - 1,
        scale: hover ? 1.08 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 35,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[999999]"
    >
            <motion.svg
        width="18"
        height="26"
        viewBox="0 0 24 34"
        animate={{
          filter: hover
            ? "drop-shadow(0 0 8px rgba(168,85,247,.6))"
            : "drop-shadow(0 0 4px rgba(168,85,247,.3))",
        }}
      >
        <defs>
          <linearGradient
            id="glassArrow"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <path
          d="M2 2 L2 29 L8 22 L12 32 L16 30 L12 20 L22 20 Z"
          fill="url(#glassArrow)"
          stroke="rgba(255,255,255,.9)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />

        <path
          d="M5 5 L5 20"
          stroke="rgba(255,255,255,.45)"
          strokeWidth="0.7"
        />
      </motion.svg>
          </motion.div>
  );
}