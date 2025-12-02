'use client'

import { ArrowRight, Sparkles, Code2, ShieldCheck, Rocket } from 'lucide-react'
import { useCallback } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#020b24] to-[#050816] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Blue Flame Glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-32 -left-10 w-64 h-64 rounded-full bg-[#00A8FF]/20 blur-3xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.6 }}
          className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-[#24C9FF]/20 blur-3xl animate-float"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >

            {/* Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9 }
                }
              }}
            >
              <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
                Igniting Digital
              </span>
              <br />
              <span className="text-white">Experiences for Your Business</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              We help brands grow by crafting modern, high-quality digital solutions 
              that elevate user experience, strengthen identity, and unlock real business results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-[#00A8FF] to-[#005DFF] font-semibold text-sm sm:text-base shadow-lg shadow-blue-700/40 hover:shadow-blue-500/60 transition-transform"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-blue-500/40 bg-blue-500/5 text-sm sm:text-base text-blue-100 hover:bg-blue-500/10 hover:border-blue-400 transition-colors"
              >
                Let&apos;s Collaborate
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT INFO PANEL */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute -inset-1 bg-linear-to-tr from-[#00A8FF]/20 via-transparent to-[#005DFF]/40 blur-2xl opacity-70" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.9)]">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Studio Status</p>
                  <p className="text-lg font-semibold text-sky-100">Accepting Projects</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-linear-to-tr from-[#00A8FF] to-[#005DFF] flex items-center justify-center shadow-lg shadow-blue-700/50">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="rounded-2xl bg-slate-900/60 border border-blue-500/20 p-4 space-y-2">
                  <Code2 className="w-5 h-5 text-blue-300" />
                  <p className="text-xs text-slate-400">Focus</p>
                  <p className="text-sm font-medium text-slate-100">Digital Solutions</p>
                </div>

                <div className="rounded-2xl bg-slate-900/60 border border-cyan-500/20 p-4 space-y-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-300" />
                  <p className="text-xs text-slate-400">Approach</p>
                  <p className="text-sm font-medium text-slate-100">Reliability First</p>
                </div>

                <div className="rounded-2xl bg-slate-900/60 border border-sky-500/20 p-4 space-y-2">
                  <Sparkles className="w-5 h-5 text-sky-300" />
                  <p className="text-xs text-slate-400">Style</p>
                  <p className="text-sm font-medium text-slate-100">Modern & Creative</p>
                </div>
              </div>

              <div className="mt-2 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
                <p>Helping businesses grow through modern digital experiences.</p>
                <p className="text-blue-300 font-medium">VORONIX Solutions · 2025</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

