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
import { useState } from "react";


const members = [
    {
        id: 7,
        name: "Muhammad Ruchul Khaqqil Maskun",
        role: "Anggota",
        division: "Divisi Humas",
        image: Img1,
        bio: "...",
    },
    {
        id: 8,
        name: "Muhammad Ifan Dwi Wicaksono",
        role: "Anggota",
        division: "Divisi Humas",
        image: Img1,
        bio: "Memimpin organisasi dan mengarahkan seluruh program kerja.",
    },
    {
        id: 9,
        name: "Husni Cahyadi",
        role: "Anggota",
        division: "Divisi Humas",
        image: Img1,
        bio: "Membantu koordinasi antar divisi.",
    },
    {
        id: 10,
        name: "Ujang Keju",
        role: "Anggota",
        division: "Divisi Humas",
        image: Img1,
        bio: "Mengelola administrasi organisasi.",
    },
   
    {
        id: 12,
        name: "Fajar Kurniawan",
        role: "Anggota",
        division: "Divisi Media",
        image: Img1,
        bio: "Mengelola keuangan organisasi.",
    },
    {
        id: 13,
        name: "Early Abiyan A.S.",
        role: "Anggota",
        division: "Divisi Media",
        image: Img1,
        bio: "...",
    },
    {
        id: 14,
        name: "Flora & Fauna",
        role: "Anggota",
        division: "Divisi Media",
        image: Img1,
        bio: "...",
    },
];

export default function Team() {
    const [selectedDivision, setSelectedDivision] = useState("Semua");

    const filteredMembers =
        selectedDivision === "Semua"
            ? members
            : members.filter(
                (member) => member.division === selectedDivision
            );

    const divisions = [
        "Semua",
        "Divisi Humas",
        "Divisi Media",
    ];

    return (
        <section className="relative overflow-hidden py-28">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[0.35em] text-primary">
                        Meet Our Team
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Pengurus Karang Taruna
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        Orang-orang yang berkomitmen mengembangkan
                        Karang Taruna melalui kepemimpinan,
                        kolaborasi, dan inovasi.
                    </p>

                </div>

                {/* Filter */}
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {divisions.map((item) => (
                        <button
                            key={item}
                            onClick={() => setSelectedDivision(item)}
                            className={`rounded-full px-6 py-3 transition ${selectedDivision === item
                                ? "bg-primary text-white"
                                : "border border-white/10 bg-white/5 text-white hover:bg-primary"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Team Grid */}

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {filteredMembers.map((member, index) => (

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

                                <span className="rounded-full border-amber-300/50 bg-amber-300/10 text-amber-300 px-4 py-2 text-sm">
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
                                    <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-primary w-full flex items-center justify-center gap-2">

                                        <Instagram size={18} />
                                        Instagram
                                    </button>
                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}