"use client"

import Link from "next/link"
import { Camera, ArrowLeft, Crown, Handshake, Image, Video, Brush, Pencil } from "lucide-react"

const programs = [
    {
        tag: "Rutin",
        title: "Pengelolaan Media Sosial",
        desc: "Publikasi konten informatif dan kreatif di Instagram, TikTok, dan YouTube setiap minggu.",
    },
    {
        tag: "Event",
        title: "Dokumentasi Kegiatan",
        desc: "Foto dan video profesional setiap kegiatan organisasi sebagai arsip dan bahan publikasi.",
    },
    {
        tag: "Kreatif",
        title: "Desain Materi Promosi",
        desc: "Produksi poster, banner, dan materi visual untuk seluruh kegiatan dan kampanye organisasi.",
    },
    {
        tag: "Digital",
        title: "Website & Blog Organisasi",
        desc: "Pengelolaan website resmi beserta penulisan artikel dan blog tentang kegiatan kepemudaan.",
    },
]

const keahlian = [
    { Icon: Image, label: "Fotografer", peran: "Dokumentasi visual" },
    { Icon: Video, label: "Videografer", peran: "Produksi & editing video" },
    { Icon: Brush, label: "Desainer", peran: "Grafis & identitas visual" },
    { Icon: Pencil, label: "Penulis Konten", peran: "Copywriting & artikel" },
]

export default function DivisiMediaPage() {
    return (
        <div className="min-h-screen text-primary dark:text-primary">

            {/* Hero */}
            <section className="relative px-6 md:px-14 pt-20 pb-14 overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-10 right-10 w-60 h-60 bg-blue-400/8 rounded-full blur-[80px] pointer-events-none" />

                <div className="max-w-3xl relative z-10">
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-sky-400/12 border border-sky-400/25 flex items-center justify-center">
                            <Camera size={24} className="text-sky-400" />
                        </div>
                        <div>
                            <p className="text-[11px] tracking-[0.18em] uppercase text-white/30 mb-1">Divisi</p>
                            <h1 className="text-3xl font-medium tracking-tight">Divisi Media</h1>
                        </div>
                    </div>

                    <p className="text-black dark:text-white text-base leading-relaxed max-w-xl">
                        Suara dan wajah Kartar Manik. Divisi media mengelola konten, dokumentasi, desain grafis, serta kehadiran digital organisasi di berbagai platform.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 md:px-14 pb-12">
                <div className="grid grid-cols-3 gap-3 max-w-lg">
                    {[
                        { num: "8", label: "Anggota aktif" },
                        { num: "240+", label: "Konten dipublikasi" },
                        { num: "4", label: "Platform dikelola" },
                    ].map((s) => (
                        <div key={s.label} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:border-white/15 transition-colors">
                            <div className="text-2xl font-medium text-sky-400 mb-1">{s.num}</div>
                            <div className="text-xs text-white/35">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Program Kerja */}
            <section className="px-6 md:px-14 pb-14">
                <p className="text-[11px] tracking-[0.14em] uppercase text-white/30 mb-5">Program Kerja</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                    {programs.map((p) => (
                        <div key={p.title} className="bg-white/[0.03] border border-sky-400/20 rounded-xl p-5 hover:border-sky-400/40 hover:-translate-y-0.5 transition-all duration-200">
                            <span className="inline-block text-[10px] tracking-[0.1em] uppercase text-sky-400 border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 rounded-full mb-3">
                                {p.tag}
                            </span>
                            <h3 className="text-sm font-medium mb-2">{p.title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bidang Keahlian */}
            <section className="px-6 md:px-14 pb-16">
                <p className="text-[11px] tracking-[0.14em] uppercase text-white/30 mb-5">Bidang Keahlian</p>
                <div className="flex flex-wrap gap-3 max-w-3xl">
                    {keahlian.map(({ Icon, label, peran }) => (
                        <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 flex-1 min-w-[150px] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200">
                            <div className="w-9 h-9 rounded-full bg-sky-400/12 text-sky-400 flex items-center justify-center mb-3">
                                <Icon size={16} />
                            </div>
                            <div className="text-sm font-medium mb-0.5">{label}</div>
                            <div className="text-xs text-white/35">{peran}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divisi Lain */}
            <section className="px-6 md:px-14 pb-20 border-t border-white/[0.06] pt-12">
                <p className="text-[11px] tracking-[0.14em] uppercase text-white/30 mb-6">Divisi Lainnya</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                    <Link href="/divisi/inti" className="flex-1 flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:border-violet-400/30 hover:bg-white/[0.05] transition-all duration-200 group">
                        <div className="w-9 h-9 rounded-lg bg-violet-400/12 border border-violet-400/20 flex items-center justify-center">
                            <Crown size={16} className="text-violet-400" />
                        </div>
                        <div>
                            <div className="text-sm font-medium group-hover:text-violet-400 transition-colors">Pengurus Inti</div>
                            <div className="text-xs text-white/35">Kepemimpinan & strategi</div>
                        </div>
                    </Link>
                    <Link href="/divisi/humasy" className="flex-1 flex items-center gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:border-emerald-400/30 hover:bg-white/[0.05] transition-all duration-200 group">
                        <div className="w-9 h-9 rounded-lg bg-emerald-400/12 border border-emerald-400/20 flex items-center justify-center">
                            <Handshake size={16} className="text-emerald-400" />
                        </div>
                        <div>
                            <div className="text-sm font-medium group-hover:text-emerald-400 transition-colors">Divisi Humasy</div>
                            <div className="text-xs text-white/35">Hubungan masyarakat</div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}
