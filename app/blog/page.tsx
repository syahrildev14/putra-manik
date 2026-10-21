"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useMemo, useState } from "react"

import { categories, posts } from "@/app/blog/blog-data"
import { cardReveal, fadeIn, hoverCard, staggerContainer } from "@/lib/framer"

const EASE = [0.22, 1, 0.36, 1] as const

export default function BlogPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua")

  const featured = posts.find((p) => p.featured) ?? posts[0]

  const rest = useMemo(() => {
    const others = posts.filter((p) => p.slug !== featured.slug)
    if (active === "Semua") return others
    return others.filter((p) => p.category === active)
  }, [active, featured.slug])

  return (
    <main className="text-white">
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-10 pb-20 md:pb-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 md:mb-20 space-y-4"
        >
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-amber-600 text-amber-400">
            Blog & Artikel
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
            Cerita dari Kartar Manik
          </h1>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-primary/60 text-white/50">
            Dokumentasi, cerita, dan perkembangan kegiatan Karang Taruna
            Putra Manik dalam membangun desa dan generasi muda.
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          whileHover={{ y: -6 }}
          className="mb-16 md:mb-20"
        >
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-6 md:gap-10 rounded-sm border border-primary/10 border-white/10 hover:border-amber-500/40 transition-colors duration-300 overflow-hidden"
          >
            <div className="relative h-64 md:h-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-4 p-6 md:p-10 md:pl-0">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary/40 text-white/40">
                <span className="text-amber-600 text-amber-400">Artikel utama</span>
                <span>&middot;</span>
                <span>{featured.category}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight">
                {featured.title}
              </h2>

              <p className="text-sm leading-relaxed text-primary/60 text-white/50">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-3 font-mono text-[11px] text-primary/40 text-white/40 pt-2">
                <span>{featured.date}</span>
                <span>&middot;</span>
                <span>{featured.readTime} baca</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] border transition-colors duration-300 ${
                  isActive
                    ? "border-transparent text-amber-600 text-amber-400"
                    : "border-primary/15 border-white/15 text-primary/50 text-white/50 hover:border-primary/30 hover:border-white/30"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-full border border-amber-500 bg-amber-500/5"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            )
          })}
        </div>

        {/* Grid posts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((post, index) => (
              <motion.div
                key={post.slug}
                custom={index}
                variants={cardReveal}
                whileHover={hoverCard}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full overflow-hidden rounded-sm border border-primary/10 border-white/10 hover:border-amber-500/40 transition-colors duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-600 text-amber-400">
                      {post.category}
                    </span>

                    <h3 className="font-serif text-xl font-medium leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-primary/60 text-white/50 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 font-mono text-[10px] text-primary/40 text-white/40 pt-1">
                      <span>{post.date}</span>
                      <span>&middot;</span>
                      <span>{post.readTime} baca</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {rest.length === 0 && (
              <motion.p
                variants={fadeIn}
                className="col-span-full text-center text-sm text-primary/50 text-white/40 py-16"
              >
                Belum ada artikel untuk kategori ini.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  )
}
