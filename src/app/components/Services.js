'use client'

import { Code, Palette, Rocket, Database, Globe, ShieldCheck, Server } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } }
  }

  const services = [
    { 
      icon: Code, 
      title: "Full Stack Development", 
      desc: "High-performance, scalable, and modern web applications crafted with precision and engineering excellence." 
    },
    { 
      icon: Database, 
      title: "Backend Engineering", 
      desc: "Secure, cloud-ready, and optimized backend systems designed for reliability and long-term performance." 
    },
    { 
      icon: Server, 
      title: "Deployment & DevOps",   // UPDATED
      desc: "Automated deployments, CI/CD pipelines, cloud infrastructure, and seamless production delivery." 
    },
    { 
      icon: Globe, 
      title: "API Development", 
      desc: "High-speed, well-structured REST & GraphQL API systems built for smooth cross-platform integration." 
    },
    { 
      icon: ShieldCheck, 
      title: "Security & Compliance", 
      desc: "Advanced authentication, authorization, and cybersecurity practices to protect mission-critical systems." 
    },
    { 
      icon: Rocket, 
      title: "Performance Optimization", 
      desc: "Speed tuning, SEO enhancements, caching strategies, and system improvements for enterprise-grade apps." 
    }
  ]

  return (
    <section id="services" className="py-24 bg-linear-to-b from-[#020617] to-[#040B16] relative overflow-hidden">

      {/* Floating Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#00A8FF]/25 blur-3xl rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-[#005DFF]/30 blur-3xl rounded-full"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="
                  group relative p-8 rounded-2xl bg-slate-900/70 border border-slate-800
                  transition-all duration-500 hover:shadow-[0_0_40px_#00A8FF45] 
                  hover:border-blue-500/40 backdrop-blur-xl
                "
              >

                {/* Hologram Glow */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-[#00A8FF]/10 to-[#005DFF]/10 opacity-0 
                  group-hover:opacity-100 rounded-2xl transition-opacity duration-500"
                />

                <div className="relative z-10 text-center">

                  {/* Icon Box */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    className="
                      w-20 h-20 mx-auto mb-6 rounded-2xl 
                      bg-linear-to-tr from-[#00A8FF] to-[#005DFF] 
                      flex items-center justify-center
                      shadow-[0_0_18px_#00A8FF80]
                    "
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
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
