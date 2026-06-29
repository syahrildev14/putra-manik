"use client";

import { motion } from "framer-motion";
import {
    Facebook,
    Instagram,
    Mail,
} from "lucide-react";
import Img1 from "@/app/images/humasy/humasy.png";

const leaders = {
    chief: {
        name: "Ahmad Fauzi",
        role: "Ketua",
        image: Img1,
    },

    vice: {
        name: "Rizki Pratama",
        role: "Wakil Ketua",
        image: Img1,
    },

    secretary: {
        name: "Siti Aulia",
        role: "Sekretaris",
        image: Img1,
    },

    treasurer: {
        name: "Nur Hidayat",
        role: "Bendahara",
        image: Img1,
    },
};

const coordinators = [
    {
        name: "Rama",
        division: "Media",
        image: Img1,
    },
    {
        name: "Fajar",
        division: "Humas",
        image: Img1,
    },
    {
        name: "Dimas",
        division: "Sosial",
        image: Img1,
    },
];

function LeaderCard({
    name,
    role,
    image,
}: {
    name: string;
    role: string;
    image: string;
}) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-violet-500/0 to-cyan-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-indigo-500/10 group-hover:via-violet-500/10 group-hover:to-cyan-500/10" />

            <div className="relative text-center">

                <img
                    src={image}
                    alt={name}
                    className="mx-auto h-32 w-32 rounded-full object-cover transition duration-500 group-hover:scale-110"
                />

                <h3 className="mt-6 text-2xl font-bold text-white">
                    {name}
                </h3>

                <p className="mt-2 text-indigo-400">
                    {role}
                </p>

                <div className="mt-6 flex justify-center gap-3">

                    <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-indigo-600">
                        <Instagram size={18} />
                    </button>

                    <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-indigo-600">
                        <Facebook size={18} />
                    </button>

                    <button className="rounded-xl bg-slate-800 p-3 transition hover:bg-indigo-600">
                        <Mail size={18} />
                    </button>

                </div>

            </div>
        </motion.div>
    );
}

export default function OrganizationChart() {
    return (
        <section className="py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-20 text-center">

                    <span className="text-sm uppercase tracking-[0.3em] text-indigo-400">
                        Struktur Organisasi
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Tim Kepemimpinan
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        Divisi Inti dipimpin oleh pengurus yang bertanggung jawab
                        dalam mengarahkan seluruh kegiatan organisasi agar berjalan
                        efektif, kolaboratif, dan berkelanjutan.
                    </p>

                </div>

                {/* Ketua */}
                <div className="mx-auto max-w-sm">
                    <LeaderCard {...leaders.chief} />
                </div>

                {/* Line */}
                <div className="mx-auto h-20 w-px bg-gradient-to-b from-indigo-500 to-slate-700" />

                {/* Wakil & Sekretaris */}
                <div className="grid gap-10 md:grid-cols-2">
                    <LeaderCard {...leaders.vice} />
                    <LeaderCard {...leaders.secretary} />
                </div>

                {/* Line */}
                <div className="mx-auto h-20 w-px bg-gradient-to-b from-indigo-500 to-slate-700" />

                {/* Bendahara */}
                <div className="mx-auto max-w-sm">
                    <LeaderCard {...leaders.treasurer} />
                </div>

                {/* Koordinator */}
                <div className="mt-28">

                    <h3 className="mb-12 text-center text-3xl font-bold text-white">
                        Koordinator Divisi
                    </h3>

                    <div className="grid gap-8 md:grid-cols-3">

                        {coordinators.map((item) => (

                            <motion.div
                                key={item.name}
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                            >

                                <img
                                    src={item.image}
                                    className="mx-auto h-24 w-24 rounded-full object-cover"
                                    alt={item.name}
                                />

                                <h4 className="mt-5 text-center text-xl font-semibold text-white">
                                    {item.name}
                                </h4>

                                <p className="text-center text-indigo-400">
                                    {item.division}
                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}