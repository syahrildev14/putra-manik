"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Users, Sparkles } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden py-32">

            {/* Aurora Background */}

            <div className="absolute inset-0 overflow-hidden">

                <motion.div
                    animate={{
                        x: [-80, 80, -80],
                        y: [-40, 40, -40],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-10 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[140px]"
                />

                <motion.div
                    animate={{
                        x: [80, -80, 80],
                        y: [40, -40, 40],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[140px]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:70px_70px]" />

            </div>

            <div className="relative mx-auto max-w-7xl px-6">

                <motion.div
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
                    className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl lg:p-20"
                >

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2">

                                <Sparkles
                                    size={16}
                                    className="text-indigo-300"
                                />

                                <span className="text-sm text-indigo-300">
                                    Mari Berkarya Bersama
                                </span>

                            </div>

                            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">

                                Siap Menjadi
                                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                    {" "}Bagian{" "}
                                </span>

                                dari Perubahan?

                            </h2>

                            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-300">

                                Divisi Inti membuka ruang kolaborasi bagi
                                pemuda yang memiliki semangat kepemimpinan,
                                inovasi, dan kepedulian terhadap masyarakat.

                            </p>

                            {/* Button */}

                            <div className="mt-12 flex flex-wrap gap-5">

                                <button className="group flex items-center gap-3 rounded-2xl bg-indigo-600 px-8 py-5 text-white transition hover:bg-indigo-500">

                                    Gabung Sekarang

                                    <ArrowRight
                                        size={20}
                                        className="transition group-hover:translate-x-1"
                                    />

                                </button>

                                <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-white transition hover:border-indigo-500 hover:bg-white/10">

                                    <Phone size={18} />

                                    Hubungi Kami

                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="grid gap-6">

                            <motion.div
                                whileHover={{
                                    scale: 1.03,
                                }}
                                className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-violet-600/20 p-8 backdrop-blur-xl"
                            >

                                <Users
                                    size={42}
                                    className="text-indigo-300"
                                />

                                <h3 className="mt-6 text-5xl font-black text-white">
                                    150+
                                </h3>

                                <p className="mt-3 text-slate-300">
                                    Pemuda Aktif Berkolaborasi
                                </p>

                            </motion.div>

                            <div className="grid grid-cols-2 gap-6">

                                <motion.div
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                                >

                                    <h4 className="text-4xl font-black text-white">
                                        18
                                    </h4>

                                    <p className="mt-2 text-slate-400">
                                        Program Aktif
                                    </p>

                                </motion.div>

                                <motion.div
                                    whileHover={{
                                        y: -6,
                                    }}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                                >

                                    <h4 className="text-4xl font-black text-white">
                                        12
                                    </h4>

                                    <p className="mt-2 text-slate-400">
                                        Pengurus Inti
                                    </p>

                                </motion.div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}