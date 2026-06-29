"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
    Users,
    CalendarDays,
    BriefcaseBusiness,
    Award,
} from "lucide-react";

const stats = [
    {
        title: "Pengurus Inti",
        value: 12,
        suffix: "",
        icon: Users,
        color: "from-indigo-500 to-violet-500",
    },
    {
        title: "Program Kerja",
        value: 18,
        suffix: "",
        icon: BriefcaseBusiness,
        color: "from-cyan-500 to-sky-500",
    },
    {
        title: "Anggota Aktif",
        value: 150,
        suffix: "+",
        icon: Award,
        color: "from-emerald-500 to-teal-500",
    },
    {
        title: "Agenda Tahunan",
        value: 24,
        suffix: "",
        icon: CalendarDays,
        color: "from-orange-500 to-amber-500",
    },
];

export default function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden py-24"
        >
            {/* Glow Background */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="font-medium uppercase tracking-[0.3em] text-indigo-400">
                        Statistik
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                        Divisi Inti Dalam Angka
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Setiap angka mencerminkan dedikasi, kolaborasi,
                        dan semangat pengurus dalam membangun organisasi
                        yang aktif, profesional, dan berdampak.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                animate={
                                    inView
                                        ? {
                                            opacity: 1,
                                            y: 0,
                                        }
                                        : {}
                                }
                                transition={{
                                    duration: .6,
                                    delay: index * .15,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
                            >
                                {/* Gradient Border */}
                                <div
                                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 blur-xl transition duration-500 group-hover:opacity-30`}
                                />

                                <div className="relative">

                                    {/* Icon */}
                                    <div
                                        className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                                    >
                                        <Icon
                                            className="text-white"
                                            size={30}
                                        />
                                    </div>

                                    {/* Number */}
                                    <h3 className="text-5xl font-black text-white">

                                        {inView && (
                                            <CountUp
                                                end={item.value}
                                                duration={2}
                                            />
                                        )}

                                        {item.suffix}

                                    </h3>

                                    {/* Title */}
                                    <p className="mt-4 text-lg text-slate-300">
                                        {item.title}
                                    </p>

                                    {/* Line */}
                                    <div className="mt-8 h-1 overflow-hidden rounded-full bg-slate-800">

                                        <motion.div
                                            initial={{
                                                width: 0,
                                            }}
                                            animate={
                                                inView
                                                    ? {
                                                        width: "100%",
                                                    }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 1.2,
                                                delay: index * .2,
                                            }}
                                            className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                                        />

                                    </div>

                                </div>

                            </motion.div>

                        );
                    })}

                </div>

                {/* Bottom Section */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={
                        inView
                            ? {
                                opacity: 1,
                                y: 0,
                            }
                            : {}
                    }
                    transition={{
                        delay: .8,
                    }}
                    className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
                >

                    <div className="grid gap-10 md:grid-cols-3">

                        <div>
                            <h4 className="text-3xl font-bold text-white">
                                Kepemimpinan yang Terukur
                            </h4>

                            <p className="mt-4 leading-8 text-slate-400">
                                Divisi Inti menjadi pusat koordinasi
                                seluruh kegiatan Karang Taruna melalui
                                perencanaan, evaluasi, dan pengambilan
                                keputusan secara kolaboratif.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-slate-900/60 p-6">

                            <p className="text-sm uppercase tracking-widest text-slate-500">
                                Fokus Utama
                            </p>

                            <ul className="mt-6 space-y-4 text-slate-300">
                                <li>✓ Kepemimpinan Organisasi</li>
                                <li>✓ Pengembangan SDM</li>
                                <li>✓ Manajemen Program</li>
                                <li>✓ Kolaborasi Antar Divisi</li>
                            </ul>

                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6">

                            <p className="text-sm uppercase tracking-widest text-white/70">
                                Target Tahun Ini
                            </p>

                            <h3 className="mt-4 text-5xl font-black text-white">
                                100%
                            </h3>

                            <p className="mt-4 text-white/80">
                                Seluruh program kerja terlaksana tepat
                                waktu dengan kolaborasi aktif seluruh
                                pengurus.
                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}