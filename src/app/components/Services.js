'use client'

import {
  Code,
  Database,
  Server,
  Globe,
  ShieldCheck,
  Rocket,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
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

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      desc: 'Scalable, high-performance web applications built with modern frameworks and clean architecture.',
    },
    {
      icon: Database,
      title: 'Backend Engineering',
      desc: 'Secure, cloud-ready backend systems designed for reliability, scalability, and long-term growth.',
    },
    {
      icon: Server,
      title: 'Deployment & DevOps',
      desc: 'CI/CD pipelines, cloud infrastructure, automated deployments, and production-grade environments.',
    },
    {
      icon: Globe,
      title: 'API Development',
      desc: 'Fast, structured REST & GraphQL APIs built for seamless integration across platforms.',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      desc: 'Authentication, authorization, and security best practices to protect critical systems.',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      desc: 'Speed optimization, SEO improvements, caching strategies, and system tuning.',
    },
  ]

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Floating Accent Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-400/20 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Our{' '}
          <span className="gradient-text">
            Services
          </span>
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                className="
                  group relative p-8 rounded-2xl
                  bg-slate-900/70 border border-emerald-500/20
                  transition-all duration-500
                  hover:border-emerald-400/50
                  hover:shadow-[0_0_45px_rgba(16,185,129,0.25)]
                  backdrop-blur-xl
                "
              >
                {/* Gradient Hover Glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-emerald-500/10 to-green-600/10
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                    className="
                      w-20 h-20 mx-auto mb-6 rounded-2xl
                      bg-gradient-to-tr from-emerald-500 to-green-600
                      flex items-center justify-center
                      shadow-[0_0_22px_rgba(16,185,129,0.6)]
                    "
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
