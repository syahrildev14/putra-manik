"use client"

import { useEffect, useState } from "react"
import { ReactLenis, useLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function GsapScrollSync() {
  const lenis = useLenis(() => ScrollTrigger.update())

  useEffect(() => {
    if (!lenis) return
    const activeLenis = lenis

    function onTick(time: number) {
      activeLenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
    }
  }, [lenis])

  return null
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setEnabled(!query.matches)

    function handleChange(event: MediaQueryListEvent) {
      setEnabled(!event.matches)
    }

    query.addEventListener("change", handleChange)
    return () => query.removeEventListener("change", handleChange)
  }, [])

  if (!enabled) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      <GsapScrollSync />
      {children}
    </ReactLenis>
  )
}
