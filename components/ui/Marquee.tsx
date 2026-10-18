import { type CSSProperties, type ReactNode } from "react";

interface MarqueeProps {
    children: ReactNode;
    /** Durasi satu putaran penuh, dalam detik. */
    speed?: number;
    /** Jarak antar item, dalam px. */
    gap?: number;
    className?: string;
}

export default function Marquee({ children, speed = 30, gap = 40, className = "" }: MarqueeProps) {
    const trackStyle = {
        "--marquee-duration": `${speed}s`,
        "--marquee-gap": `${gap}px`,
    } as CSSProperties;

    return (
        <div
            role="region"
            aria-label="Running text"
            className={`relative w-full overflow-hidden bg-amber-600 text-white py-5 ${className}`}
        >
            {/* Fade kiri — warna disamakan dengan background marquee agar tidak terlihat sambungannya */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-amber-600 to-transparent z-10 sm:w-24" />

            {/* Fade kanan */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-amber-600 to-transparent z-10 sm:w-24" />

            <div className="animate-marquee flex w-max will-change-transform" style={trackStyle}>
                <div className="flex shrink-0 items-center" style={{ gap: "var(--marquee-gap)" }}>
                    {children}
                </div>

                {/* duplicate — closes the loop at -50%, disembunyikan dari assistive tech agar tidak dibaca dua kali */}
                <div className="flex shrink-0 items-center" style={{ gap: "var(--marquee-gap)" }} aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
}