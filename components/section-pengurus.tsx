"use client"

import { useState } from "react"
import Image from "next/image"

import humasy1 from "@/app/images/humasy/humasy.png"
import humasy2 from "@/app/images/humasy/humasy.png"
import humasy3 from "@/app/images/humasy/humasy.png"
import humasy4 from "@/app/images/humasy/humasy.png"
import humasy5 from "@/app/images/humasy/humasy.png"

export default function Section() {
  const data = [
    {
      nama: "Muhammad Ma’arif",
      divisi: "Ketua Karang Taruna",
      dusun: "Juwok",
      rw: "02",
      rt: "06",
      image: humasy1,
    },
    {
      nama: "Novallino Setyanto Nugroho",
      divisi: "Wakil Ketua Karang Taruna",
      dusun: "Gambang",
      rw: "01",
      rt: "03",
      image: humasy2,
    },
    {
      nama: "Hafitzh Aththorriq",
      divisi: "Sekretaris 1 Karang Taruna",
      dusun: "Gambang",
      rw: "04",
      rt: "02",
      image: humasy3,
    },
    {
      nama: "Fransisca Arly Rahmadhani",
      divisi: "Sekeretaris 2 Karang Taruna",
      dusun: "Pojok",
      rw: "03",
      rt: "01",
      image: humasy4,
    },
    {
      nama: "Nabila Azzahra",
      divisi: "Bendahara Karang Taruna",
      dusun: "Keturus",
      rw: "03",
      rt: "01",
      image: humasy4,
    },
    {
      nama: "Syahril Caesa Mahira",
      divisi: "Koor. Divisi Humas",
      dusun: "Gambang",
      rw: "06",
      rt: "02",
      image: humasy5,
    },
    {
      nama: "Muhammad Novan Ferdiyan",
      divisi: "Koor. Divisi Media",
      dusun: "Pojok",
      rw: "05",
      rt: "04",
      image: humasy5,
    },
  ]

  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const current = data[active]

  const handleSelect = (index: number) => {
    if (index === active) return
    setVisible(false)
    setTimeout(() => {
      setActive(index)
      setVisible(true)
    }, 180)
  }

  return (
    <section className="relative w-full overflow-hidden text-white y-24 md:py-0 md:min-h-screen">
      {/* subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:26px_26px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 md:min-h-screen flex items-center">
        <div className="grid md:grid-cols-[64px_1fr_1fr] gap-10 md:gap-16 items-center w-full">
          {/* INDEX RAIL — desktop only */}
          <div className="hidden md:flex flex-col gap-1 border-r border-primary/10 dark:border-white/10 pr-6">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Lihat pengurus ${i + 1}`}
                className={`text-left font-mono text-xs tracking-widest py-2 transition-colors duration-300 ${active === i
                    ? "text-amber-600 dark:text-amber-400 font-semibold"
                    : "text-primary/30 dark:text-white/25 hover:text-primary/60 dark:hover:text-white/50"
                  }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* LEFT CONTENT */}
          <div
            className={`space-y-7 transition-all duration-300 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              Struktur Organisasi
            </span>

            <div className="space-y-2">
              <h2 className="font-serif text-4xl md:text-6xl font-medium leading-[1.05] tracking-tight">
                {current.nama}
              </h2>
              <p className="text-sm uppercase tracking-[0.22em] text-primary/50 dark:text-white/50">
                {current.divisi}
              </p>
            </div>

            <div className="h-px w-16 bg-primary/20 dark:bg-white/20" />

            <div className="flex gap-8 md:gap-12">
              {[
                ["Dusun", current.dusun],
                ["RW", current.rw],
                ["RT", current.rt],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/40 dark:text-white/40 mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-semibold">{val}</p>
                </div>
              ))}
            </div>

            {/* THUMBNAIL NAV — mobile only */}
            <div className="flex gap-3 pt-6 md:hidden">
              {data.map((m, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  aria-label={`Lihat pengurus ${i + 1}`}
                  className={`relative w-11 h-11 rounded-full overflow-hidden ring-2 transition-all duration-300 ${active === i
                      ? "ring-amber-500 opacity-100"
                      : "ring-transparent opacity-40"
                    }`}
                >
                  <Image src={m.image} alt="" fill sizes="44px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <span
              aria-hidden
              className="absolute -top-8 right-0 md:-top-12 md:right-6 font-serif text-[9rem] md:text-[13rem] leading-none text-primary/[0.06] dark:text-white/[0.07] select-none"
            >
              {String(active + 1).padStart(2, "0")}
            </span>

            <div
              className={`relative transition-all duration-300 ease-out ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
                }`}
            >
              <div className="relative w-[260px] h-[340px] md:w-[380px] md:h-[480px] overflow-hidden rounded-sm shadow-xl shadow-black/10">
                <Image
                  src={current.image}
                  alt={current.nama}
                  fill
                  sizes="(max-width: 768px) 260px, 380px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-amber-500/40 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}