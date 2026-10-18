import Hero from "@/components/division/core/Hero";
import Stats from "@/components/division/core/Stats";
import Programs from "@/components/division/core/Programs";
import Timeline from "@/components/division/core/Timeline";
import OrganizationChart from "@/components/division/core/OrganizationChart";
import Team from "@/components/division/core/Team";
import CTA from "@/components/division/core/CTA";

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