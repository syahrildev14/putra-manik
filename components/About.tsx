"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

/**
 * Komponen "About" — Karang Taruna Landing Page
 * Stack: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion
 *
 * Cara pakai:
 * 1. Pastikan project sudah punya Tailwind CSS & framer-motion (`npm i framer-motion`)
 * 2. Import dan render <About /> di page.tsx kamu
 */

type Pilar = {
  no: string;
  judul: string;
  deskripsi: string;
};

const PILAR_DATA: Pilar[] = [
  {
    no: "01",
    judul: "Solidaritas Pemuda",
    deskripsi:
      "Merajut kebersamaan antarpemuda RW melalui kegiatan sosial, olahraga, dan gotong royong rutin.",
  },
  {
    no: "02",
    judul: "Pemberdayaan Lokal",
    deskripsi:
      "Mendorong pelatihan keterampilan dan kewirausahaan agar pemuda desa naik kelas secara ekonomi.",
  },
  {
    no: "03",
    judul: "Pelestarian Budaya",
    deskripsi:
      "Menjaga tradisi dan kearifan lokal tetap hidup lewat seni, budaya, dan perayaan adat setempat.",
  },
];

const STATISTIK = [
  { angka: "14+", label: "Anggota Aktif" },
  { angka: "10", label: "Program Tahunan" },
  { angka: "15", label: "RT Terjangkau" },
  { angka: "2018", label: "Tahun Berdiri" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const markGlowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.4, 0.15]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section
      ref={sectionRef}
      id="tentang"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Aksen "tanda kurung api" raksasa di latar — merujuk obor/semangat pemuda */}
      <motion.svg
        aria-hidden
        style={{ opacity: markGlowOpacity, rotate: markRotate }}
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[480px] text-[#C1440E]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 10C60 50 40 90 60 130C75 158 110 165 130 145C148 127 145 100 125 90C135 110 125 130 105 130C80 130 65 100 85 65C95 47 110 35 100 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </motion.svg>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Kolom kiri: eyebrow + judul + lambang nomor besar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/10 text-amber-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            Tentang Kami
          </span>

          <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
            Wadah pemuda yang{" "}
            <span className="relative inline-block text-primary">
              tumbuh bersama
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-3 w-full text-amber-300"
              >
                <motion.path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                />
              </svg>
            </span>{" "}
            di desa kita.
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white">
            Karang Taruna adalah organisasi sosial kepemudaan yang lahir dari, oleh,
            dan untuk masyarakat desa. Kami percaya setiap anak muda punya peran
            dalam membangun lingkungan yang lebih hangat, mandiri, dan berdaya.
          </p>

          <motion.a
            href="/profile"
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-white"
          >
            Lihat program kami
            <span aria-hidden>&rarr;</span>
          </motion.a>
        </motion.div>

        {/* Kolom kanan: pilar nilai + statistik */}
        <div className="flex flex-col gap-6">
          {PILAR_DATA.map((pilar, i) => (
            <motion.div
              key={pilar.no}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -4 }}
              className="group flex gap-5 rounded-2xl border border-[#23211D]/8 bg-white/70 p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-colors duration-300 hover:border-[#C1440E]/30 hover:bg-white"
            >
              <span className="font-serif text-3xl font-bold text-[#E8A33D] transition-colors duration-300 group-hover:text-[#C1440E]">
                {pilar.no}
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#23211D]">
                  {pilar.judul}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5C584F]">
                  {pilar.deskripsi}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Statistik */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#23211D]/8 sm:grid-cols-4"
          >
            {STATISTIK.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 bg-[#23211D] px-4 py-7 text-center"
              >
                <span className="font-serif text-2xl font-bold text-[#FBF4E9] sm:text-3xl">
                  {s.angka}
                </span>
                <span className="text-[11px] uppercase tracking-wide text-[#FBF4E9]/60">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
