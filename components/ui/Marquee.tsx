"use client";

import { motion } from "framer-motion";

export default function Marquee({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full overflow-hidden bg-primary text-white py-5">

            {/* Fade kiri */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

            {/* Fade kanan */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                }}
            >
                <div className="flex shrink-0 items-center gap-8">
                    {children}
                </div>

                {/* duplicate */}
                <div className="flex shrink-0 items-center gap-8">
                    {children}
                </div>

                {/* duplicate */}
                <div className="flex shrink-0 items-center gap-8">
                    {children}
                </div>

                {/* duplicate */}
                <div className="flex shrink-0 items-center gap-8">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}