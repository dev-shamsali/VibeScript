'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  }

  const projects = [
    {
      title: 'Shams Portfolio',
      desc: 'A high-performance personal portfolio showcasing projects, skills, and experience with a clean modern UI.',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Flex Fix Gym',
      desc: 'A dynamic gym website built to increase memberships with clear CTAs, class schedules, and modern branding.',
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Arna Skin Care',
      desc: 'A premium skincare brand website focused on product storytelling, conversions, and a seamless shopping experience.',
      gradient: 'from-emerald-400 to-green-500',
      center: true,
    },
  ]

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Floating Accent Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 left-10 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/20 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Our{' '}
          <span className="gradient-text">
            Projects
          </span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 place-items-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative bg-slate-900/60 rounded-2xl
              border border-emerald-500/20 overflow-hidden
              transition-all duration-500
              hover:border-emerald-400/50
              hover:shadow-[0_0_45px_rgba(16,185,129,0.25)]
              backdrop-blur-xl
              ${project.center ? 'md:col-span-2 max-w-xl' : ''}`}
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient}
                opacity-10 group-hover:opacity-20 transition-opacity`}
              />

              <motion.div
                className="relative z-10 p-8"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <p className="text-sm text-emerald-300 mb-6 font-medium">
                  Built by the VibeScript Team
                </p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full
                  bg-slate-800 hover:bg-emerald-600
                  transition-colors inline-flex items-center gap-2
                  text-white"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <div className="flex justify-center mt-16">
          <button
            className="px-9 py-4 rounded-full
            bg-slate-800 hover:bg-emerald-600
            text-white flex items-center gap-2
            transition-all text-lg font-medium"
          >
            View More Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
