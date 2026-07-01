"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden">

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="mb-5 rounded-full border px-5 py-2 text-sm border-amber-300/50 bg-amber-300/10 text-amber-300"
                >
                    Social Youth Empowerment
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1 }}
                    className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl"
                >
                    Menggerakkan
                    <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent">
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