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
    show: { transition: { staggerChildren: 0.15 } },
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
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Our <span className="gradient-text">Services</span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => {
            const Icon = service.icon

            return (
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
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 mb-6 rounded-xl
                    bg-emerald-500/15
                    flex items-center justify-center
                    text-emerald-400
                  "
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
