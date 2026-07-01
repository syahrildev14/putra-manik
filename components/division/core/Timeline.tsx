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
                        Perjalanan Program Divisi Inti
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Setiap kegiatan dirancang secara terstruktur agar
                        organisasi terus berkembang sepanjang tahun.
                    </p>

                </div>

                {/* Watermark */}

                <div className="pointer-events-none absolute left-1/2 top-48 -translate-x-1/2 text-[220px] font-black text-white/[0.03]">
                    2026
                </div>

                {/* Timeline */}

                <div className="relative mt-28 overflow-x-auto pb-10">

                    {/* Line */}

                    <div className="absolute left-0 top-12 h-1 w-full rounded-full bg-slate-800">

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary via-amber-500 to-amber-100"
                        />

                    </div>

                    <div className="relative flex min-w-[1200px] justify-between gap-8">

                        {timeline.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={item.month}
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * .2,
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="relative w-64"
                                >

                                    {/* Dot */}

                                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-950 bg-gradient-to-br from-primary to-amber-300 shadow-2xl">

                                        <Icon
                                            className="text-white"
                                            size={34}
                                        />

                                    </div>

                                    {/* Card */}

                                    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                                        <span className="rounded-full px-4 py-2 text-sm border-amber-300/50 bg-amber-300/10 text-amber-300">

                                            {item.month}

                                        </span>

                                        <h3 className="mt-6 text-2xl font-bold text-white">

                                            {item.title}

                                        </h3>

                                        <p className="mt-4 leading-8 text-slate-400">

                                            {item.description}

                                        </p>

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
