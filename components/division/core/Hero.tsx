"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="mb-5 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-300"
                >
                    DIVISI INTI
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1 }}
                    className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl"
                >
                    Menggerakkan
                    <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                        {" "}Organisasi{" "}
                    </span>
                    dengan Kepemimpinan Modern
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="mt-8 max-w-2xl text-lg leading-8 text-slate-300"
                >
                    Divisi Inti menjadi pusat koordinasi seluruh kegiatan
                    Karang Taruna, memastikan setiap program berjalan
                    efektif, terarah, dan memberikan manfaat nyata
                    bagi masyarakat.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .3 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <button className="group flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-white transition hover:bg-indigo-500">

                        Lihat Pengurus

                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />

                    </button>

                    <button className="rounded-xl border border-slate-700 px-7 py-4 text-white transition hover:border-indigo-500 hover:bg-slate-900">
                        Program Kerja
                    </button>
                </motion.div>

                {/* Floating Cards */}

                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                    }}
                    className="mt-24 grid w-full max-w-5xl gap-6 md:grid-cols-3"
                >

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                        <h3 className="text-4xl font-bold text-white">
                            12
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Pengurus Inti
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                        <h3 className="text-4xl font-bold text-white">
                            18
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Program Kerja
                        </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                        <h3 className="text-4xl font-bold text-white">
                            150+
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Anggota Aktif
                        </p>

                    </div>

                </motion.div>

            </div>

            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ChevronDown
                    className="text-slate-500"
                    size={36}
                />
            </motion.div>

        </section>
    );
}