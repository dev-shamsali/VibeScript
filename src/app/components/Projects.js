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
    show: { transition: { staggerChildren: 0.15 } },
  }

  const projects = [
    {
      title: 'Developer Portfolio',
      tag: 'Portfolio',
      desc: 'A high-performance personal portfolio showcasing projects, skills, and experience.',
      url: 'https://shamsali.vercel.app/',
    },
    {
      title: 'Flex Fire Gym',
      tag: 'Business Website',
      desc: 'A conversion-focused gym website with strong CTAs, schedules, and modern branding.',
      url: 'https://flex-fire-gym.vercel.app/',
    },
    {
      title: 'Arna Skin Care',
      tag: 'E-Commerce',
      desc: 'A premium skincare brand website focused on storytelling and product conversion.',
      url: 'https://arnaskincare.in/',
    },
    {
      title: 'Bulk Message Transfer SaaS',
      tag: 'SaaS Platform',
      desc: 'A WhatsApp bulk message transfer SaaS built for automation, speed, and scale.',
      url: 'https://bulk-transfer-wapp.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Our <span className="gradient-text">Projects</span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                relative h-full rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                p-8
                transition-all duration-500
                hover:border-emerald-400/40
                hover:shadow-[0_0_45px_rgba(16,185,129,0.25)]
              "
            >
              {/* Tag */}
              <span className="
                inline-block mb-4 px-4 py-1 rounded-full
                text-xs font-semibold
                bg-emerald-500/15 text-emerald-300
              ">
                {project.tag}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-8">
                {project.desc}
              </p>

              {/* CTA */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-full
                  bg-emerald-600/90 hover:bg-emerald-600
                  text-white font-medium
                  transition-all
                "
              >
                View Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
