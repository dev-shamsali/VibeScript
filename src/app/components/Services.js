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
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/20 blur-[160px] rounded-full"
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
        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Our{' '}
          <span className="gradient-text">
            Services
          </span>
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
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
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="group relative rounded-3xl p-[1px]"
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400 to-green-600 opacity-30" />

                {/* Glass Card */}
                <div
                  className="
                    relative h-full rounded-3xl p-8
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    transition-all duration-500
                    group-hover:border-emerald-400/50
                    group-hover:shadow-[0_0_55px_rgba(16,185,129,0.25)]
                  "
                >
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 160, damping: 10 }}
                      className="
                        w-20 h-20 mx-auto mb-6 rounded-2xl
                        bg-gradient-to-tr from-emerald-500 to-green-600
                        flex items-center justify-center
                        shadow-[0_0_26px_rgba(16,185,129,0.6)]
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
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
