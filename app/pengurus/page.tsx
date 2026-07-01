"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/division/core/Hero";
import Stats from "@/components/division/core/Stats";
import About from "@/components/division/core/About";
import Programs from "@/components/division/core/Programs";
import Timeline from "@/components/division/core/Timeline";
import OrganizationChart from "@/components/division/core/OrganizationChart";
import Team from "@/components/division/core/Team";
import CTA from "@/components/division/core/CTA";

import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function DivisiIntiPage() {
    const [progress, setProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setProgress((scrollTop / height) * 100);

            setShowButton(scrollTop > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="relative overflow-x-hidden text-white">

            {/* Scroll Progress */}
            <motion.div
                className="fixed left-0 top-0 z-[999] h-1 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500"
                style={{
                    width: `${progress}%`,
                }}
            />

            {/* Hero */}

            <Hero />

            {/* Content */}

            <div className="relative z-10">

                <Stats />

                <About />

                <Programs />

                <Timeline />

                <OrganizationChart />

                <Team />

                <CTA />

            </div>

            {/* Back To Top */}

            <AnimatePresence>

                {showButton && (

                    <motion.button
                        initial={{
                            opacity: 0,
                            scale: .8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: .8,
                        }}
                        whileHover={{
                            y: -4,
                        }}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        className="fixed bottom-8 right-8 z-50 rounded-2xl bg-primary p-4 shadow-2xl transition hover:bg-indigo-500"
                    >

                        <ChevronUp
                            size={22}
                            className="text-white"
                        />

                    </motion.button>

                )}

            </AnimatePresence>

        </main>
    );
}