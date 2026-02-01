'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Code2, ShieldCheck, Rocket } from 'lucide-react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef(null)
  const glowLeft = useRef(null)
  const glowRight = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* --------------------------------
         HERO INTRO TIMELINE (CINEMATIC)
      --------------------------------- */
      const tl = gsap.timeline({ delay: 0.2 })

      tl.from('.hero-title-line', {
        y: 120,
        opacity: 0,
        stagger: 0.15,
        ease: 'power4.out',
        duration: 1.2,
      })
        .from(
          '.hero-subtitle',
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .from(
          '.hero-cta',
          {
            scale: 0.9,
            opacity: 0,
            ease: 'back.out(1.6)',
            duration: 0.9,
          },
          '-=0.4'
        )
        .from(
          '.hero-panel',
          {
            x: 120,
            opacity: 0,
            duration: 1.3,
            ease: 'power4.out',
          },
          '-=0.6'
        )

      /* --------------------------------
         FLOATING GLOWS (SUBTLE PARALLAX)
      --------------------------------- */
      gsap.to(glowLeft.current, {
        y: 70,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: 'sine.inOut',
      })

      gsap.to(glowRight.current, {
        y: -80,
        repeat: -1,
        yoyo: true,
        duration: 9,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden"
    >
      {/* Accent Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={glowLeft}
          className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-emerald-500/25 blur-[140px]"
        />
        <div
          ref={glowRight}
          className="absolute bottom-0 -right-32 w-[32rem] h-[32rem] rounded-full bg-green-400/20 blur-[160px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.6fr,1fr] gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1]">
              <span className="hero-title-line gradient-text block">
                Build Digital Products
              </span>
              <span className="hero-title-line text-white block">
                That Actually Scale
              </span>
            </h1>

            <p className="hero-subtitle text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              VibeScript is a digital solutions studio helping startups and businesses
              build scalable platforms, high-performance websites, and modern SaaS products.
            </p>

            <div className="hero-cta flex flex-wrap gap-5 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="
                  inline-flex items-center gap-2 px-9 py-4 rounded-full
                  bg-gradient-to-r from-emerald-500 to-green-600
                  font-semibold text-sm sm:text-base text-white
                  shadow-2xl shadow-emerald-600/40
                  hover:shadow-emerald-500/70
                  transition-all hover:scale-105 active:scale-95
                "
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="
                  inline-flex items-center gap-2 px-9 py-4 rounded-full
                  border border-emerald-500/40 bg-emerald-500/10
                  text-sm sm:text-base text-emerald-100
                  hover:bg-emerald-500/20 hover:border-emerald-400
                  transition-all
                "
              >
                Let&apos;s Collaborate
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hero-panel relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-400/30 via-transparent to-green-600/50 blur-2xl opacity-80" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">

              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Studio Status
                  </p>
                  <p className="text-lg font-semibold text-emerald-100">
                    Accepting Projects
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-600/50">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 mb-7">
                <InfoCard icon={<Code2 />} title="Focus" value="Web & SaaS" />
                <InfoCard icon={<ShieldCheck />} title="Approach" value="Secure & Scalable" />
                <InfoCard icon={<Sparkles />} title="Style" value="Clean UI/UX" />
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between text-xs sm:text-sm text-slate-300">
                <p>Engineering growth-driven digital products.</p>
                <p className="text-emerald-300 font-medium">
                  VibeScript · 2025
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* --------------------------------
   INFO CARD
--------------------------------- */
function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-slate-900/70 border border-emerald-500/20 p-4 space-y-2">
      <div className="text-emerald-300">{icon}</div>
      <p className="text-xs text-slate-400">{title}</p>
      <p className="text-sm font-medium text-slate-100">{value}</p>
    </div>
  )
}
