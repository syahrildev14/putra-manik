"use client"


import medusa from "@/app/images/medusa.png"
import Image from "next/image"
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Medusa = () => {

    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        tl.from(".title-reveal", {
            yPercent: 120,
            duration: 1.2,
            stagger: 0.18,
            ease: "power4.out",
        });

        tl.from(
            ".hero-image",
            {
                opacity: 0,
                scale: 0.85,
                y: 60,
                duration: 1,
                ease: "power3.out",
            },
            "-=0.8"
        );

        gsap.to(".hero-image", {
            y: -20,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    }, { scope: sectionRef });



    return (
        <div>
            <div
                ref={sectionRef}
                className="relative flex justify-center items-center mt-20 overflow-hidden"
            >
                {/* TEXT BELAKANG */}
                <div className="absolute z-0 text-center select-none pointer-events-none leading-[0.8] uppercase font-extrabold text-gray-300">

                    <div className="overflow-hidden">
                        <h1 className="title-reveal text-[8rem] sm:text-[14rem] md:text-[22rem]">
                            KARANG
                        </h1>
                    </div>

                    <div className="overflow-hidden">
                        <h1 className="title-reveal text-[8rem] sm:text-[14rem] md:text-[22rem]">
                            TARUNA
                        </h1>
                    </div>

                </div>

                {/* IMAGE */}
                <Image
                    src={medusa}
                    alt="medusa"
                    className="hero-image relative z-10 max-w-[200px] sm:max-w-xs md:max-w-none"
                />
            </div>
        </div>
    )
}

export default Medusa
