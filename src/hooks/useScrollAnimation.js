'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ----------------------------------------------------
   GSAP Scroll Animation Hook (Premium)
----------------------------------------------------- */

export default function useGsapScrollAnimation({
  selector = '.gsap-fade-up',
  y = 80,
  opacity = 0,
  stagger = 0.15,
  start = 'top 80%',
  once = true,
} = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        y,
        opacity,
        stagger,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start,
          once,
        },
      })
    })

    return () => ctx.revert()
  }, [selector, y, opacity, stagger, start, once])
}
