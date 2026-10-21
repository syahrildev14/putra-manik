"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import {
  cardReveal,
  hoverCard,
  staggerContainer,
  textReveal,
  viewport,
} from "@/lib/framer"

const EASE = [0.22, 1, 0.36, 1] as const

export function FadeUpOnMount({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleInOnMount({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealParagraph({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={textReveal}
      className={className}
    >
      {children}
    </motion.p>
  )
}

export function RevealStaggerGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealCard({
  children,
  index,
}: {
  children: ReactNode
  index: number
}) {
  return (
    <motion.div custom={index} variants={cardReveal} whileHover={hoverCard}>
      {children}
    </motion.div>
  )
}
