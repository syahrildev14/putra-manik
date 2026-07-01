"use client";

import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";
import Madun from "@/app/images/team/madun.png";
import Kone from "@/app/images/team/kone.png";
import Hafid from "@/app/images/team/hafid.png";
import Nabila from "@/app/images/team/nabila.png";
import Pengki from "@/app/images/team/pengki.png";
import Aril from "@/app/images/team/aril.png";

type Person = {
    name: string;
    role: string;
    desc: string;
    image: StaticImageData;
};

const leaders: Record<"chief" | "vice" | "secretary" | "treasurer", Person> = {
    chief: {
        name: "Muhammad Ma'arif",
        role: "Ketua",
        desc: "Memimpin arah strategis organisasi dan memastikan setiap program berjalan selaras dengan visi bersama.",
        image: Madun,
    },
    vice: {
        name: "Novallino Setyanto Nugroho",
        role: "Wakil Ketua",
        desc: "Mendampingi ketua dalam pengambilan keputusan serta menjaga koordinasi antar divisi tetap solid.",
        image: Kone,
    },
    secretary: {
        name: "Hafitzh Aththorriq",
        role: "Sekretaris",
        desc: "Mengelola administrasi, dokumentasi, dan komunikasi internal agar setiap kegiatan tercatat rapi.",
        image: Hafid,
    },
    treasurer: {
        name: "Nabila Azzahra",
        role: "Bendahara",
        desc: "Bertanggung jawab atas pengelolaan keuangan organisasi secara transparan dan akuntabel.",
        image: Nabila,
    },
};

const coordinators: Person[] = [
    {
        name: "Muhammad Novan Ferdiyan",
        role: "Media",
        desc: "Mengarahkan strategi konten dan publikasi digital untuk memperkuat citra organisasi.",
        image: Pengki,
    },
    {
        name: "Syahril Caesa Mahira",
        role: "Humas",
        desc: "Membangun dan menjaga relasi dengan mitra, komunitas, serta pemangku kepentingan eksternal.",
        image: Aril,
    },
];

/** Thin vertical connector that draws itself in on scroll. */
function VStem({ className = "" }: { className?: string }) {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className={`w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent ${className}`}
        />
    );
}

function PersonCard({
    name,
    role,
    desc,
    image,
    size = "md",
    index = 0,
}: Person & { size?: "lg" | "md"; index?: number }) {
    const imgHeight = size === "lg" ? "h-96" : "h-72";

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-colors duration-500 hover:border-primary/40"
        >
            {/* Image */}
            <div className={`relative ${imgHeight} overflow-hidden`}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top grayscale-[15%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                {/* Social icons — revealed on hover */}
                <div className="absolute bottom-4 right-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {[Instagram, Facebook, Mail].map((Icon, i) => (
                        <button
                            key={i}
                            aria-label="Sosial media"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-slate-950"
                        >
                            <Icon size={15} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {role}
                    </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight text-white">
                    {name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}

export default function OrganizationChart() {
    return (
        <section className="py-28">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-24 text-center">
                    <span className="text-sm uppercase tracking-[0.3em] text-primary">
                        Struktur Organisasi
                    </span>
                    <h2 className="mt-4 font-serif text-5xl font-bold text-white">
                        Tim Kepemimpinan
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        Divisi Inti dipimpin oleh pengurus yang bertanggung jawab
                        dalam mengarahkan seluruh kegiatan organisasi agar berjalan
                        efektif, kolaboratif, dan berkelanjutan.
                    </p>
                </div>

                {/* Hierarchy tree */}
                <div className="mx-auto max-w-4xl">
                    {/* Ketua */}
                    <div className="mx-auto max-w-sm">
                        <PersonCard {...leaders.chief} size="lg" />
                    </div>

                    {/* Connector: Ketua -> (Wakil, Sekretaris) */}
                    <div className="relative mx-auto hidden h-16 max-w-2xl md:block">
                        <VStem className="absolute left-1/2 top-0 h-8 -translate-x-1/2" />
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                            className="absolute left-1/4 right-1/4 top-8 h-px origin-center bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                        />
                        <VStem className="absolute left-1/4 top-8 h-8" />
                        <VStem className="absolute right-1/4 top-8 h-8" />
                    </div>
                    <VStem className="mx-auto h-10 md:hidden" />

                    {/* Wakil & Sekretaris */}
                    <div className="grid gap-10 md:grid-cols-2">
                        <PersonCard {...leaders.vice} index={0} />
                        <PersonCard {...leaders.secretary} index={1} />
                    </div>

                    {/* Connector: (Wakil, Sekretaris) -> Bendahara */}
                    <VStem className="mx-auto h-16" />

                    {/* Bendahara */}
                    <div className="mx-auto max-w-sm">
                        <PersonCard {...leaders.treasurer} size="lg" />
                    </div>
                </div>

                {/* Koordinator */}
                <div className="mt-32">
                    <div className="mb-12 text-center">
                        <span className="text-sm uppercase tracking-[0.3em] text-primary">
                            Divisi Pendukung
                        </span>
                        <h3 className="mt-3 font-serif text-3xl font-bold text-white">
                            Koordinator Divisi
                        </h3>
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                        {coordinators.map((item, i) => (
                            <PersonCard key={item.name} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
