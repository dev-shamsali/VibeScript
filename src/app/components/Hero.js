'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Code2, ShieldCheck, Rocket } from 'lucide-react'
import gsap from 'gsap'

/* --------------------------------
   PARTICLE BACKGROUND (DENSE + CLEAN)
--------------------------------- */
function HeroParticles() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const ctaRects = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w, h
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      ctaRects.current = Array.from(
        document.querySelectorAll('.hero-cta button')
      ).map((el) => el.getBoundingClientRect())
    }

    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 220
    const CURSOR_RADIUS = 110
    const CTA_RADIUS = 180

    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => {
      const x = Math.random() * w
      const y = Math.random() * h
      return {
        x,
        y,
        ox: x,
        oy: y,
        vx: 0,
        vy: 0,
        r: Math.random() * 1.4 + 0.5,
        a: Math.random() * 0.35 + 0.15,
      }
    })

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const onLeave = () => {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    const animate = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        let fx = 0
        let fy = 0

        // Cursor repulsion
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.hypot(dx, dy)

        if (dist < CURSOR_RADIUS) {
          const force = (CURSOR_RADIUS - dist) / CURSOR_RADIUS
          const angle = Math.atan2(dy, dx)
          fx += Math.cos(angle) * force * 0.12
          fy += Math.sin(angle) * force * 0.12
        }

        // CTA repulsion (stronger)
        for (const rect of ctaRects.current) {
          const cx = rect.left + rect.width / 2
          const cy = rect.top + rect.height / 2
          const dx2 = p.x - cx
          const dy2 = p.y - cy
          const d2 = Math.hypot(dx2, dy2)

          if (d2 < CTA_RADIUS) {
            const force2 = (CTA_RADIUS - d2) / CTA_RADIUS
            const angle2 = Math.atan2(dy2, dx2)
            fx += Math.cos(angle2) * force2 * 0.22
            fy += Math.sin(angle2) * force2 * 0.22
          }
        }

        // Spring back
        p.vx += (p.ox - p.x) * 0.002
        p.vy += (p.oy - p.y) * 0.002

        p.vx += fx
        p.vy += fy

        p.vx *= 0.92
        p.vy *= 0.92

        p.x += p.vx
        p.y += p.vy

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148,163,184,${p.a})` // slate dots (no green glow)
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 })

      tl.from('.hero-title-line', {
        y: 120,
        opacity: 0,
        stagger: 0.15,
        ease: 'power4.out',
        duration: 1.2,
      })
        .from('.hero-subtitle', {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-cta', {
          scale: 0.9,
          opacity: 0,
          ease: 'back.out(1.6)',
          duration: 0.9,
        }, '-=0.4')
        .from('.hero-panel', {
          x: 120,
          opacity: 0,
          duration: 1.3,
          ease: 'power4.out',
        }, '-=0.6')
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
      <HeroParticles />

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
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full
                bg-gradient-to-r from-emerald-500 to-green-600
                font-semibold text-white shadow-xl
                hover:scale-105 transition-all"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full
                border border-emerald-500/40 bg-white/5 backdrop-blur-md
                text-emerald-100 hover:bg-white/10 transition-all"
              >
                Let&apos;s Collaborate
              </button>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hero-panel relative mb-16">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_30px_80px_rgba(0,0,0,0.75)]">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Studio Status
                  </p>
                  <p className="text-lg font-semibold text-emerald-100">
                    Accepting Projects
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 mb-7">
                <InfoCard icon={<Code2 />} title="Focus" value="Web & SaaS" />
                <InfoCard icon={<ShieldCheck />} title="Approach" value="Secure & Scalable" />
                <InfoCard icon={<Sparkles />} title="Style" value="Clean UI/UX" />
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between text-xs text-slate-300">
                <p>Engineering growth-driven digital products.</p>
                <p className="text-emerald-300 font-medium">VibeScript · 2025</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-emerald-500/20 p-4 space-y-2">
      <div className="text-emerald-300">{icon}</div>
      <p className="text-xs text-slate-400">{title}</p>
      <p className="text-sm font-medium text-slate-100">{value}</p>
    </div>
  )
}
