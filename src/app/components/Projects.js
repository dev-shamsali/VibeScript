'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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
      gradient: 'from-emerald-400 to-green-600',
    },
    {
      title: 'Flex Fix Gym',
      desc: 'A dynamic gym website built to increase memberships with clear CTAs, class schedules, and modern branding.',
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Arna Skin Care',
      desc: 'A premium skincare brand website focused on product storytelling, conversions, and a seamless shopping experience.',
      gradient: 'from-emerald-300 to-green-500',
      center: true,
    },
  ]

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 left-12 w-96 h-96 bg-emerald-500/20 blur-[160px] rounded-full"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-[28rem] h-[28rem] bg-green-400/20 blur-[180px] rounded-full"
          animate={{ y: [0, 35, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Our{' '}
          <span className="gradient-text">
            Projects
          </span>
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 place-items-center"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
              className={`
                group relative w-full
                rounded-3xl p-[1px]
                ${project.center ? 'md:col-span-2 max-w-xl' : ''}
              `}
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-30`}
              />

              {/* Glass Card */}
              <div
                className="
                  relative rounded-3xl p-8 h-full
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-500
                  group-hover:border-emerald-400/50
                  group-hover:shadow-[0_0_50px_rgba(16,185,129,0.25)]
                "
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <p className="text-sm text-emerald-300 mb-7 font-medium">
                  Built by the VibeScript Team
                </p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    inline-flex items-center gap-2
                    px-6 py-2 rounded-full
                    bg-white/10 hover:bg-emerald-600
                    transition-all text-white
                  "
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <div className="flex justify-center mt-20">
          <button
            className="
              px-10 py-4 rounded-full
              bg-white/10 hover:bg-emerald-600
              text-white flex items-center gap-2
              transition-all text-lg font-semibold
            "
          >
            View More Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
