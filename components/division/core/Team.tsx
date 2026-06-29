"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Instagram,
    Mail,
    Phone,
    Search,
} from "lucide-react";
import Img1 from "@/app/images/humasy/humasy.png";


const members = [
    {
        id: 1,
        name: "Ahmad Fauzi",
        role: "Ketua",
        image: Img1,
        bio: "Memimpin organisasi dan mengarahkan seluruh program kerja.",
    },
    {
        id: 2,
        name: "Rizki Pratama",
        role: "Wakil Ketua",
        image: Img1,
        bio: "Membantu koordinasi antar divisi.",
    },
    {
        id: 3,
        name: "Siti Aulia",
        role: "Sekretaris",
        image: Img1,
        bio: "Mengelola administrasi organisasi.",
    },
    {
        id: 4,
        name: "Nur Hidayat",
        role: "Bendahara",
        image: Img1,
        bio: "Mengelola keuangan organisasi.",
    },
];

export default function Team() {
    return (
        <section className="relative overflow-hidden py-28">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[0.35em] text-indigo-400">
                        Meet Our Team
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Pengurus Divisi Inti
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        Orang-orang yang berkomitmen mengembangkan
                        Karang Taruna melalui kepemimpinan,
                        kolaborasi, dan inovasi.
                    </p>

                </div>

                {/* Search */}

                <div className="mx-auto mt-14 max-w-xl">

                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

                        <Search
                            size={20}
                            className="text-slate-400"
                        />

                        <input
                            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
                            placeholder="Cari anggota..."
                        />

                    </div>

                </div>

                {/* Filter */}

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                    {[
                        "Semua",
                        "Ketua",
                        "Wakil",
                        "Sekretaris",
                        "Bendahara",
                    ].map((item) => (

                        <button
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-indigo-500 hover:bg-indigo-600"
                        >
                            {item}
                        </button>

                    ))}

                </div>

                {/* Team Grid */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {members.map((member, index) => (

                        <motion.div
                            key={member.id}
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
                                delay: index * .1,
                            }}
                            whileHover={{
                                y: -12,
                            }}
                            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                        >

                            {/* Image */}

                            <div className="relative h-80 overflow-hidden">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <span className="rounded-full bg-indigo-600/20 px-4 py-2 text-sm text-indigo-300">
                                    {member.role}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-white">
                                    {member.name}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {member.bio}
                                </p>

                                {/* Social */}

                                <div className="mt-8 flex justify-between">

                                    <div className="flex gap-3">

                                        <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-indigo-600">
                                            <Instagram size={18} />
                                        </button>

                                        <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-indigo-600">
                                            <Mail size={18} />
                                        </button>

                                        <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-indigo-600">
                                            <Phone size={18} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}