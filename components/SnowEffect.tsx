"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function SnowEffect() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const flakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,

        // Posisi horizontal awal
        left: Math.random() * 100,

        // Ukuran serpihan
        size: Math.random() * 8 + 5, // 5 - 13 px

        // Sangat lambat
        duration: Math.random() * 30 + 30, // 30 - 60 detik

        // Mulai secara acak
        delay: Math.random() * 30,

        // Gerakan horizontal yang lembut
        drift: Math.random() * 120 - 60,

        // Transparansi
        opacity: Math.random() * 0.4 + 0.3,

        // Rotasi awal
        rotate: Math.random() * 360,

        // Sedikit variasi ukuran
        scale: Math.random() * 0.5 + 0.8,

        // Sedikit blur agar lebih natural
        blur: Math.random() * 1.2,
    }));

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {flakes.map((flake) => (
                <motion.span
                    key={flake.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${flake.left}%`,
                        width: "2px",
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        borderRadius: "2px",
                        transform: `rotate(${flake.rotate}deg)`,
                    }}
                    initial={{
                        y: -20,
                        x: 0,
                    }}
                    animate={{
                        y: "110vh",
                        x: [0, flake.drift, -flake.drift / 2, 0],
                    }}
                    transition={{
                        duration: flake.duration,
                        delay: flake.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}