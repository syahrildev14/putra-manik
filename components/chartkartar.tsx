"use client"

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    BarChart,
    Bar
} from "recharts"

const kegiatanData = [
    { bulan: "Jan", kegiatan: 3 },
    { bulan: "Feb", kegiatan: 5 },
    { bulan: "Mar", kegiatan: 2 },
    { bulan: "Apr", kegiatan: 6 },
    { bulan: "Mei", kegiatan: 4 },
    { bulan: "Jun", kegiatan: 7 },
]

const anggotaTahunan = [
    { tahun: "2020", laki: 15, perempuan: 10 },
    { tahun: "2021", laki: 14, perempuan: 5 },
    { tahun: "2022", laki: 16, perempuan: 8 },
    { tahun: "2023", laki: 10, perempuan: 8 },
    { tahun: "2024", laki: 25, perempuan: 20 },
]

const genderData = [
    { name: "Laki-laki", value: 40 },
    { name: "Perempuan", value: 35 },
]

const COLORS = ["#2563eb", "#ec4899"]

export default function DashboardChart() {
    return (
        <div className="grid md:grid-cols-2 gap-8 relative z-50">

            {/* LINE CHART */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm border border-gray-300 p-6 flex flex-col h-[320px]">
                <h2 className="text-xl font-semibold mb-4">
                    Perkembangan Anggota per Tahun
                </h2>

                <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={anggotaTahunan}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="tahun" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Line
                                type="monotone"
                                dataKey="laki"
                                stroke="#2563eb"
                                strokeWidth={3}
                                name="Laki-laki"
                            />

                            <Line
                                type="monotone"
                                dataKey="perempuan"
                                stroke="#ec4899"
                                strokeWidth={3}
                                name="Perempuan"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>


            {/* PIE CHART */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm border border-gray-300 p-6 flex flex-col h-[320px]">
                <h2 className="text-xl font-semibold mb-4">
                    Total Laki-laki & Perempuan Tahun 2026
                </h2>

                <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={genderData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                label
                            >
                                {genderData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>


            {/* BAR CHART */}
            <div className="md:col-span-2 rounded-3xl bg-white/10 backdrop-blur-sm border border-gray-300 p-6 flex flex-col h-[340px]">
                <h2 className="text-xl font-semibold mb-4">
                    Jumlah Kegiatan per Bulan
                </h2>

                <div className="flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={kegiatanData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="bulan" />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Bar
                                dataKey="kegiatan"
                                fill="#6366f1"
                                radius={[6, 6, 0, 0]}
                                name="Jumlah Kegiatan"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    )
}
