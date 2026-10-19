"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const { scrollYProgress } = useScroll();

  // Muluskan indikator progress scroll menggunakan spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });

  // Hitung SVG stroke-dashoffset berdasarkan progress scroll (keliling lingkaran r=18 adalah 113.1)
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [113.1, 0]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowButton(window.scrollY > 400);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-900/80 p-0 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-slate-900 hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)]"
        >
          {/* Progress Circle SVG */}
          <svg className="absolute h-full w-full -rotate-90 p-1" viewBox="0 0 44 44">
            {/* Background Circle */}
            <circle
              cx="22"
              cy="22"
              r="18"
              className="stroke-white/10"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Animated Progress Circle */}
            <motion.circle
              cx="22"
              cy="22"
              r="18"
              className="stroke-primary"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: "113.1",
                strokeDashoffset,
              }}
            />
          </svg>

          {/* Icon with Subtle Hover Translate */}
          <ChevronUp
            size={22}
            className="z-10 text-slate-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-primary"
          />

          {/* Soft Background Glow on Hover */}
          <span className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}