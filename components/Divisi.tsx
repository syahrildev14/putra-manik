"use client";


import Image, { StaticImageData } from "next/image"
import img1 from "@/app/images/1.webp"
import { motion } from "framer-motion";
import {
  cardReveal,
  textReveal,
  staggerContainer,
  hoverCard,
  viewport,
} from "@/lib/framer";



interface Division {
  label: string;
  badge: string;
  title: string;
  desc: string;
  image: StaticImageData;
}

export default function Section() {
  const divisions: Division[] = [
    {
      label: "Pengurus Utama",
      badge: "Kartar Manik",
      title: "Pengurus Utama",
      desc: "Pengurus Utama bertanggung jawab dalam memimpin organisasi, menyusun program kerja, mengoordinasikan seluruh divisi, serta memastikan setiap kegiatan Karang Taruna berjalan sesuai visi, misi, dan tujuan organisasi.",
      image: img1,
    },
    {
      label: "Humasy",
      badge: "Kartar Manik",
      title: "Divisi Humasy",
      desc: "Divisi Humasy berperan membangun komunikasi yang baik dengan masyarakat, pemerintah desa, serta mitra organisasi. Divisi ini juga bertugas mengelola hubungan masyarakat, publikasi kegiatan, dan menjaga citra positif Karang Taruna.",
      image: img1,
    },
    {
      label: "Media",
      badge: "Kartar Manik",
      title: "Divisi Media",
      desc: "Divisi Media bertanggung jawab mendokumentasikan setiap kegiatan, mengelola media sosial, membuat konten informasi dan promosi, serta menyebarluaskan berbagai aktivitas Karang Taruna kepada masyarakat secara kreatif dan informatif.",
      image: img1,
    },
  ];

  return (
    <section className="py-20 md:py-28 min-h-screen flex items-center text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16 md:mb-20 space-y-4"
        >
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-amber-600 text-amber-400">
            Struktur Organisasi
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            Divisi Kami
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed text-white/60 text-white/50">
            Kami adalah organisasi kepemudaan yang berkomitmen membangun
            generasi muda yang aktif, kreatif, dan peduli terhadap lingkungan
            serta masyarakat sekitar.
          </p>
      </motion.div>

      {/* Mobile: Stack Layout */}
      <div className="flex flex-col gap-14 md:hidden">
        {divisions.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-amber-600 text-amber-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl font-medium">{d.label}</h3>
            </div>
            <DivisionCard division={d} index={i} />
          </div>
        ))}
      </div>

      {/* Desktop: Timeline Layout */}
      <div className="relative space-y-28 hidden md:block">
        {/* Garis tengah */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/15 via-white/90 to-transparent" />

        {divisions.map((d, i) => {
          const cardOnLeft = i % 2 === 0
          return (
            <div key={i} className="relative grid grid-cols-2 items-center gap-x-4">
              {cardOnLeft ? (
                <>
                  <div className="pr-16 flex justify-end">
                    <DivisionCard division={d} index={i} />
                  </div>
                  <div className="pl-16 space-y-2">
                    <span className="font-mono text-xs tracking-[0.3em] text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="pr-16 flex flex-col items-end text-right space-y-2">
                    <span className="font-mono text-xs tracking-[0.3em] text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="pl-16">
                    <DivisionCard division={d} index={i} />
                  </div>
                </>
              )}

              {/* Dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-500 ring-[6px] ring-white ring-neutral-950" />
            </div>
          )
        })}
      </div>
    </div>
    </section >
  )
}

function DivisionCard({ division, index }: { division: Division; index: number }) {
  return (
    <motion.div variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      custom={index}
      whileHover={hoverCard} className="group relative w-full max-w-sm overflow-hidden rounded-sm border border-primary/10 border-white/10 bg-black/30 bg-neutral-900 transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={division.image}
          alt={division.title}
          fill
          sizes="384px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-600 text-amber-400">
            {division.badge}
          </span>
          <span className="font-mono text-[10px] text-white/30 text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h4 className="font-serif text-2xl font-medium">{division.title}</h4>

        <p className="text-sm leading-relaxed text-white/60 text-white/50">
          {division.desc}
        </p>

      </div>
    </motion.div>
  )
}