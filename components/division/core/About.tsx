"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Target,
    Users,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Kepemimpinan Visioner",
        description:
            "Mengarahkan organisasi dengan visi yang jelas serta mampu mengambil keputusan secara tepat dan bertanggung jawab.",
    },
    {
        icon: Users,
        title: "Kolaborasi Tim",
        description:
            "Membangun komunikasi yang baik antar divisi sehingga setiap program dapat berjalan secara efektif.",
    },
    {
        icon: ShieldCheck,
        title: "Integritas",
        description:
            "Menjunjung tinggi transparansi, profesionalisme, dan rasa tanggung jawab dalam setiap kegiatan.",
    },
    {
        icon: Sparkles,
        title: "Inovasi",
        description:
            "Selalu menghadirkan ide-ide baru untuk meningkatkan kualitas organisasi dan pelayanan kepada masyarakat.",
    },
];

export default function About() {
    return (
        <section className="relative overflow-hidden py-28">

            {/* Background */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <p className="uppercase tracking-[0.3em] text-primary">
                            Tentang Divisi
                        </p>

                        <h2 className="mt-5 text-5xl font-bold leading-tight text-white">
                            Penggerak Utama
                            <span className="bg-gradient-to-r from-primary to-amber-300 bg-clip-text text-transparent">
                                {" "}Karang Taruna
                            </span>
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-400">
                            Divisi Inti merupakan pusat koordinasi organisasi
                            yang bertugas mengelola kepemimpinan, menyusun
                            strategi, mengawasi jalannya program kerja,
                            serta memastikan seluruh divisi dapat
                            berkolaborasi secara optimal.
                        </p>

                        <p className="mt-6 text-lg leading-9 text-slate-400">
                            Dengan semangat gotong royong, Divisi Inti
                            menjadi motor penggerak yang menghubungkan
                            ide, aksi, dan inovasi demi menciptakan
                            organisasi yang profesional dan berdampak
                            bagi masyarakat.
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-5">

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                                <h3 className="text-4xl font-black text-white">
                                    100+
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Program Terealisasi
                                </p>

                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                                <h3 className="text-4xl font-black text-white">
                                    5+
                                </h3>

                                <p className="mt-2 text-slate-400">
                                    Tahun Mengabdi
                                </p>

                            </div>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="relative"
                    >

                        {/* Image */}

                        <div className="relative overflow-hidden rounded-[32px] border border-white/10">

                            <Image
                                src="/images/division/core-team.jpg"
                                alt="Divisi Inti"
                                width={700}
                                height={700}
                                className="h-[650px] w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                        </div>

                        {/* Floating Card */}

                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                            }}
                            className="absolute -bottom-10 left-10 rounded-3xl border border-white/10 bg-slate-900/80 p-8 backdrop-blur-xl"
                        >

                            <p className="text-sm uppercase tracking-widest text-indigo-400">
                                Motto
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white">
                                Bersama Berkarya,
                                Bersama Membangun
                            </h3>

                        </motion.div>

                    </motion.div>

                </div>

                {/* FEATURES */}

                <div className="mt-32 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
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
                                    y: -8,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-amber-300">

                                    <Icon
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-5 leading-8 text-slate-400">
                                    {item.description}
                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}