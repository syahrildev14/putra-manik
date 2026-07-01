"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import imageHero from "@/app/images/hero.png"; // sesuaikan path gambar kamu


const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};


export default function Hero() {
  
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center px-6 md:px-14">

      {/* ===== TOP ===== */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .4 }}
        className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/50">
          ORGANISASI KEPEMUDAAN
        </p>

        <div className="mt-2 flex items-center justify-center gap-3">
          <div className="h-px w-10 md:w-20 bg-white/20" />
          <span className="text-lg md:text-3xl font-light">SINCE 2021</span>
          <div className="h-px w-10 md:w-20 bg-white/20" />
        </div>
      </motion.div>

      {/* ===== LEFT TEXT (Desktop Only) ===== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .6 }}
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2"
      >
        <h1 className="leading-none">
          <span className="block text-7xl xl:text-8xl font-black">
            KARANG
          </span>

          <span className="block text-7xl xl:text-8xl font-black text-white/15">
            TARUNA
          </span>
        </h1>

        <div className="mt-10 w-24 h-px bg-white/20" />

        <p className="mt-6 max-w-xs leading-8 text-white/60">
          Wadah generasi muda untuk berkarya, berkolaborasi, serta
          memberikan kontribusi nyata bagi masyarakat.
        </p>
      </motion.div>

      {/* ===== HERO IMAGE ===== */}
      <motion.div
        className="relative z-20 flex items-center justify-center"
        initial={{ opacity: 0, scale: .85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: .9,
          ease: [0.22, 1, 0.36, 1],
          delay: .3,
        }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={imageHero}
            alt="Hero"
            width={1800}
            height={1800}
            className="w-[150vw] md:w-[40vw] h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Circle */}
        <motion.div
          aria-hidden
          className="absolute -z-10 h-[110%] w-[110%] rounded-full border border-dashed border-white/20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* ===== RIGHT TEXT (Desktop Only) ===== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .7 }}
        className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 text-right z-50"
      >
        <h2 className="text-5xl xl:text-6xl font-light tracking-[0.2em]">
          PEMUDA
        </h2>

        <p className="mt-4 uppercase tracking-[0.45em] text-sm text-white/45">
          BERKARYA
        </p>

        <div className="mt-10 ml-auto w-24 h-px bg-white/20" />

        <div className="mt-6 space-y-3 text-white/60">
          <p>Gotong Royong</p>
          <p>Kreatif</p>
          <p>Mandiri</p>
          <p>Peduli Sosial</p>
        </div>
      </motion.div>

      {/* ===== MOBILE TITLE ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .6 }}
        className="lg:hidden absolute bottom-28 left-1/2 -translate-x-1/2 text-center z-50"
      >
        <h1 className="text-4xl font-black">
          KARANG TARUNA
        </h1>

        <p className="mt-3 text-sm text-white/60 max-w-xs">
          Berkarya • Berkolaborasi • Mengabdi
        </p>
      </motion.div>

      {/* ===== BOTTOM ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .8 }}
        className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2 w-full bg-white/10 backdrop-blur-2xl p-3"
      >
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/45">

          <span>GOTONG ROYONG</span>

          <span>•</span>

          <span>KEPEMUDAAN</span>

          <span>•</span>

          <span>KREATIF</span>

          <span>•</span>

          <span>BERDAYA</span>

        </div>
      </motion.div>

    </div>
  );
}
