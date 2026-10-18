"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[999] h-1 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
      style={{ width: `${progress}%` }}
    />
  );
}
