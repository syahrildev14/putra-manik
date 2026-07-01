"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  AreaChart,
  Area,
} from "recharts";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

type RingkasanItem = {
  nilai: number;
  suffix?: string;
  label: string;
};

const RINGKASAN: RingkasanItem[] = [
  { nilai: 120, suffix: "+", label: "Anggota Aktif" },
  { nilai: 35, label: "Program Tahunan" },
  { nilai: 12, label: "RT Terjangkau" },
  { nilai: 8, label: "Tahun Berdiri" },
];

// Jumlah anggota baru per tahun
const PERTUMBUHAN_ANGGOTA = [
  { tahun: "2019", anggota: 18 },
  { tahun: "2020", anggota: 26 },
  { tahun: "2021", anggota: 34 },
  { tahun: "2022", anggota: 58 },
  { tahun: "2023", anggota: 81 },
  { tahun: "2024", anggota: 102 },
  { tahun: "2025", anggota: 120 },
];

// Komposisi kegiatan per bidang
const KEGIATAN_PER_BIDANG = [
  { bidang: "Sosial", jumlah: 12 },
  { bidang: "Olahraga", jumlah: 9 },
  { bidang: "Budaya", jumlah: 7 },
  { bidang: "Kewirausahaan", jumlah: 5 },
  { bidang: "Lingkungan", jumlah: 2 },
];

const WARNA = {
  terakota: "#C1440E",
  kuning: "#E8A33D",
  krem: "#FBF4E9",
  gelap: "#23211D",
  redup: "#5C584F",
};

const BAR_COLORS = ["#C1440E", "#D6691E", "#E8A33D", "#EFC07A", "#F4D9A8"];

/* ------------------------------------------------------------------ */
/* ANIMASI                                                             */
/* ------------------------------------------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ------------------------------------------------------------------ */
/* TOOLTIP KUSTOM                                                      */
/* ------------------------------------------------------------------ */

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[#23211D]/10 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-semibold text-[#23211D]">{label}</p>
      <p className="text-xs text-[#C1440E]">{payload[0].value} orang/kegiatan</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* KOMPONEN UTAMA                                                      */
/* ------------------------------------------------------------------ */

export default function DataStatistik() {
  const [tabAktif, setTabAktif] = useState<"pertumbuhan" | "bidang">("pertumbuhan");

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border  border-amber-300/50 bg-amber-300/10 text-amber-300 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
            Data &amp; Pencapaian
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
            Jejak nyata Karang Taruna dalam angka
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
            Setiap angka adalah cerita tentang konsistensi dan semangat
            pemuda dalam membangun lingkungan.
          </p>
        </motion.div>

        {/* Ringkasan angka besar */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {RINGKASAN.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/40 bg-white/10 backdrop-blur-2xl px-4 py-6 text-center transition-colors duration-300"
            >
              <span className="font-serif text-3xl font-bold text-white sm:text-4xl">
                {item.nilai}
                {item.suffix ?? ""}
              </span>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Panel chart */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 rounded-3xl border border-white/40 bg-white/10 backdrop-blur-2xl p-6 sm:p-8"
        >
          {/* Tab switcher */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-serif text-xl font-semibold text-white">
              {tabAktif === "pertumbuhan"
                ? "Pertumbuhan Anggota (2019–2025)"
                : "Sebaran Kegiatan per Bidang"}
            </h3>

            <div className="relative flex w-fit rounded-full border border-[#23211D]/10 bg-[#FBF4E9] p-1">
              {(
                [
                  { key: "pertumbuhan", label: "Pertumbuhan" },
                  { key: "bidang", label: "Per Bidang" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setTabAktif(tab.key)}
                  className="relative z-10 px-4 py-1.5 text-xs font-semibold transition-colors duration-300"
                  style={{
                    color: tabAktif === tab.key ? WARNA.krem : WARNA.redup,
                  }}
                >
                  {tabAktif === tab.key && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[#23211D]"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Chart area */}
          <motion.div
            key={tabAktif}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-72 w-full sm:h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              {tabAktif === "pertumbuhan" ? (
                <AreaChart data={PERTUMBUHAN_ANGGOTA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>

                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#fff" strokeOpacity={0.06} vertical={false} />
                  <XAxis
                    dataKey="tahun"
                    tick={{ fill: WARNA.redup, fontSize: 12 }}
                    axisLine={{ stroke: "#fff", strokeOpacity: 0.1 }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: WARNA.redup, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<ChartTooltip />} cursor={{ stroke: WARNA.terakota, strokeOpacity: 0.2 }} />
                  <Line
                    type="monotone"
                    dataKey="anggota"
                    stroke={WARNA.terakota}
                    strokeWidth={3}
                    dot={{ r: 4, fill: WARNA.terakota, strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                    isAnimationActive
                    animationDuration={1200}
                    animationEasing="ease-out"
                  />

                  <Area
                    type="monotone"
                    dataKey="anggota"
                    stroke="none"
                    fill="url(#areaGradient)"
                  />

                  <Line
                    type="monotone"
                    dataKey="anggota"
                    stroke="url(#lineGradient)"
                    strokeWidth={4}
                    dot={{
                      r: 5,
                      fill: "#FFFFFF",
                      stroke: "#2563EB",
                      strokeWidth: 3,
                    }}
                    activeDot={{
                      r: 7,
                      fill: "#2563EB",
                      stroke: "#FFFFFF",
                      strokeWidth: 3,
                    }}
                  />
                </AreaChart>
              ) : (
                <BarChart data={KEGIATAN_PER_BIDANG} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid stroke="#fff" strokeOpacity={0.06} vertical={false} />
                  <XAxis
                    dataKey="bidang"
                    tick={{ fill: WARNA.redup, fontSize: 12 }}
                    axisLine={{ stroke: "#fff", strokeOpacity: 0.1 }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: WARNA.redup, fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<ChartTooltip />} cursor={{ fill: WARNA.terakota, fillOpacity: 0.06 }} />
                  <Bar
                    dataKey="jumlah"
                    radius={[8, 8, 0, 0]}
                    isAnimationActive
                    animationDuration={1000}
                    animationEasing="ease-out"
                  >
                    {KEGIATAN_PER_BIDANG.map((_, i) => (
                      <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
