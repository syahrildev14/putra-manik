"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    Users,
    BriefcaseBusiness,
    GraduationCap,
    Handshake,
} from "lucide-react";

const timeline = [
    {
        month: "Januari",
        title: "Rapat Kerja Tahunan",
        description:
            "Menyusun program kerja dan target organisasi selama satu tahun.",
        icon: Calendar,
    },
    {
        month: "Maret",
        title: "Pelatihan Kepemimpinan",
        description:
            "Peningkatan kapasitas pengurus melalui pelatihan leadership.",
        icon: GraduationCap,
    },
    {
        month: "Juni",
        title: "Kolaborasi Desa",
        description:
            "Berkolaborasi dengan pemerintah desa dan masyarakat.",
        icon: Handshake,
    },
    {
        month: "September",
        title: "Evaluasi Tengah Tahun",
        description:
            "Monitoring seluruh program kerja yang telah berjalan.",
        icon: BriefcaseBusiness,
    },
    {
        month: "Desember",
        title: "Musyawarah Akhir Tahun",
        description:
            "Evaluasi akhir dan penyusunan rekomendasi untuk periode berikutnya.",
        icon: Users,
    },
];

export default function Timeline() {
    return (
        <section className="relative overflow-hidden py-28">

            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <p className="uppercase tracking-[0.35em] text-primary">
                        Timeline
                    </p>

                    <h2 className="mt-5 text-5xl font-bold text-white">
                        Perjalanan Program
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Setiap kegiatan dirancang secara terstruktur agar
                        organisasi terus berkembang sepanjang tahun.
                    </p>

                </div>

                {/* Watermark */}

                <div className="pointer-events-none absolute left-1/2 top-40 -translate-x-1/2 text-[180px] font-black text-white/[0.03] md:text-[220px]">
                    2026
                </div>

                {/* Timeline */}

                <div className="relative mx-auto mt-20 max-w-3xl">

                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800 md:left-1/2">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{ transformOrigin: "top" }}
                            className="h-full w-full bg-gradient-to-b from-primary via-amber-500 to-amber-100"
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-10 md:space-y-4">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.month}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className={`relative flex md:items-center md:py-6 ${
                                        isEven ? "md:justify-start" : "md:justify-end"
                                    }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-6 top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-primary to-amber-300 shadow-lg shadow-amber-500/20 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                                        <Icon className="text-white" size={20} />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`w-full pl-16 md:w-[calc(50%-2.5rem)] md:pl-0 ${
                                            isEven ? "md:pr-10 md:text-right" : "md:pl-10"
                                        }`}
                                    >
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-amber-300/40">
                                            <span className="inline-block rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-1 text-xs font-medium tracking-wide text-amber-300">
                                                {item.month}
                                            </span>

                                            <h3 className="mt-4 text-xl font-bold text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-slate-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>

        </section>
    );
}
