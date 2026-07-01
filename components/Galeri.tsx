"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

import img1 from "@/app/images/1.webp"
import img2 from "@/app/images/2.webp"
import img3 from "@/app/images/1.webp"
import img4 from "@/app/images/2.webp"
import img5 from "@/app/images/1.webp"
import img6 from "@/app/images/2.webp"
import img7 from "@/app/images/1.webp"
import img8 from "@/app/images/2.webp"
import img9 from "@/app/images/1.webp"
import img10 from "@/app/images/2.webp"
import img11 from "@/app/images/1.webp"
import img12 from "@/app/images/2.webp"

const images = [img1, img2, img3, img4, img5, img6,img7, img8, img9, img10, img11, img12]

// Pola bento — ukuran tile bervariasi, mengulang tiap 6 item
const spans = [
  "md:col-span-2 md:row-span-2",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "",
]

export default function SectionGaleri() {
  const [selected, setSelected] = useState<number | null>(null)

  const close = () => setSelected(null)
  const prev = () =>
    setSelected((s) => (s === null ? null : (s - 1 + images.length) % images.length))
  const next = () =>
    setSelected((s) => (s === null ? null : (s + 1) % images.length))

  // Keyboard navigation + lock scroll saat lightbox terbuka
  useEffect(() => {
    if (selected === null) return

    document.body.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [selected])

  return (
    <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 text-white overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-14 space-y-4">
        <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-amber-600 text-amber-400">
          Dokumentasi Kegiatan
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
          Galeri Putra Manik
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed text-primary/60 text-white/50">
          Dokumentasi kegiatan Karang Taruna dalam berbagai kegiatan sosial,
          kepemudaan, dan kemasyarakatan.
        </p>
      </div>

      {/* GRID GALERI — bento layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[190px] gap-3 md:gap-4 md:[grid-auto-flow:dense]">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            aria-label={`Buka foto ${i + 1}`}
            className={`group relative overflow-hidden rounded-sm border border-primary/10 border-white/10 hover:border-amber-500/40 transition-colors duration-300 ${spans[i % spans.length]}`}
          >
            <Image
              src={img}
              alt={`Dokumentasi kegiatan ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* overlay hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <span className="absolute bottom-3 left-3 font-mono text-[11px] text-white/90 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
              <ZoomIn size={15} className="text-white" />
            </span>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          {/* counter */}
          <span className="absolute top-6 left-6 font-mono text-xs tracking-[0.2em] text-white/60">
            {String(selected + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>

          <button
            onClick={close}
            aria-label="Tutup"
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-3 md:left-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-amber-500/50 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Foto berikutnya"
            className="absolute right-3 md:right-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-amber-500/50 transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative w-[88%] max-w-4xl h-[65vh] md:h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={selected}
              src={images[selected]}
              alt={`Preview dokumentasi ${selected + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
