import { Variants } from "framer-motion";

/* ============================
   Fade Up
============================ */

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/* ============================
   Fade In
============================ */

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
};

/* ============================
   Scale
============================ */

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/* ============================
   Card
============================ */

export const cardReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 70,
        scale: 0.95,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

/* ============================
   Stagger Container
============================ */

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

/* ============================
   Text
============================ */

export const textReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

/* ============================
   Hover Card
============================ */

export const hoverCard = {
    y: -10,
    transition: {
        duration: 0.3,
    },
};

/* ============================
   Hover Image
============================ */

export const hoverImage = {
    scale: 1.08,
    transition: {
        duration: 0.5,
    },
};

/* ============================
   Viewport
============================ */

export const viewport = {
    once: true,
    amount: 0.25,
};