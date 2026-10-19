import type { Metadata } from "next";
import Hero from "@/components/division/core/Hero";
import Stats from "@/components/division/core/Stats";
import Programs from "@/components/division/core/Programs";
import Timeline from "@/components/division/core/Timeline";
import OrganizationChart from "@/components/division/core/OrganizationChart";
import Team from "@/components/division/core/Team";
import CTA from "@/components/division/core/CTA";

export const metadata: Metadata = {
  title: "Pengurus dan Struktur Organisasi",
  description:
    "Struktur organisasi, program kerja, dan jajaran pengurus Karang Taruna Putra Manik Desa Plumbon Gambang, Kec. Gudo, Kabupaten Jombang.",
  alternates: {
    canonical: "/pengurus",
  },
  openGraph: {
    title: "Pengurus dan Struktur Organisasi Karang Taruna Putra Manik",
    description:
      "Kenali jajaran pengurus dan struktur organisasi Karang Taruna Putra Manik.",
    url: "/pengurus",
  },
};

export default function DivisiIntiPage() {
    return (
        <main className="relative overflow-x-hidden text-white">

            {/* Hero */}

            <Hero />

            {/* Content */}

            <div className="relative z-10">

                <Stats />

                <Programs />

                <Timeline />

                <OrganizationChart />

                <Team />

                <CTA />

            </div>

        </main>
    );
}