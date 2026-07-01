"use client";

import { motion } from "framer-motion";
import {
    CalendarRange,
    Users,
    BriefcaseBusiness,
    GraduationCap,
    Handshake,
    ArrowRight,
} from "lucide-react";

const programs = [
    {
        icon: CalendarRange,
        title: "Rapat Koordinasi",
        description:
            "Rapat rutin bulanan untuk menyusun strategi, mengevaluasi program, serta memperkuat koordinasi antar divisi.",
        color: "from-indigo-500 to-violet-500",
    },
    {
        icon: GraduationCap,
        title: "Pengembangan SDM",
        description:
            "Pelatihan kepemimpinan, public speaking, administrasi organisasi, dan peningkatan kapasitas anggota.",
        color: "from-sky-500 to-cyan-500",
    },
    {
        icon: BriefcaseBusiness,
        title: "Monitoring Program",
        description:
            "Melakukan monitoring dan evaluasi terhadap seluruh program kerja agar berjalan tepat sasaran.",
        color: "from-emerald-500 to-green-500",
    },
    {
        icon: Handshake,
        title: "Kolaborasi",
        description:
            "Menjalin kerja sama dengan pemerintah desa, komunitas, UMKM, dan organisasi kepemudaan lainnya.",
        color: "from-orange-500 to-amber-500",
    },
];


export default function Programs() {
    return (
        <section className="relative overflow-hidden py-28">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <p className="uppercase tracking-[0.35em] text-primary">
                        Program Kerja
                    </p>

                    <h2 className="mt-5 text-5xl font-bold text-white">
                        Fokus Utama Divisi Inti
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Setiap program dirancang untuk memperkuat organisasi,
                        meningkatkan kualitas kepemimpinan, serta membangun
                        kolaborasi yang berkelanjutan.
                    </p>

                </div>

                {/* Grid */}

                <div className="mt-20 grid gap-8 lg:grid-cols-2">

                    {programs.map((program, index) => {

                        const Icon = program.icon;

                        return (

                            <motion.div
                                key={program.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * .15,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                            >

                                {/* Hover Glow */}

                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
                                />

                                <div className="relative">

                                    <div
                                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${program.color}`}
                                    >
                                        <Icon
                                            className="text-white"
                                            size={30}
                                        />
                                    </div>

                                    <h3 className="mt-8 text-3xl font-bold text-white">
                                        {program.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-400">
                                        {program.description}
                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Highlight */}

                <motion.div
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
                    className="mt-24 rounded-[32px] border border-white/10 bg-gradient-to-r from-white/30 via-primary to-primary/20 p-10 backdrop-blur-xl"
                >

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        <div>

                            <p className="uppercase tracking-[0.3em] text-white">
                                Tujuan Besar
                            </p>

                            <h3 className="mt-4 text-4xl font-bold text-white">
                                Menjadi Penggerak Organisasi
                                yang Adaptif dan Profesional
                            </h3>

                        </div>

                        <p className="text-lg leading-9 text-slate-300">
                            Divisi Inti tidak hanya mengelola administrasi,
                            tetapi juga menjadi pusat pengambilan keputusan,
                            pengembangan sumber daya manusia, serta
                            penggerak inovasi demi terciptanya organisasi
                            yang modern dan berdampak bagi masyarakat.
                        </p>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}