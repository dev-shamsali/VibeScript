'use client'

import { Code2, Globe, Shield, Rocket, Cpu, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18 },
    },
  }

  const sections = [
    {
      title: 'Who We Are',
      icon: Users,
      desc: 'VibeScript is a modern digital solutions studio focused on building fast, scalable, and secure web platforms for startups and growing businesses.',
    },
    {
      title: 'Our Mission',
      icon: Rocket,
      desc: 'To transform ideas into high-performance digital products through clean engineering, modern UX, and scalable architectures.',
    },
    {
      title: 'Our Vision',
      icon: Globe,
      desc: 'To become a trusted technology partner delivering world-class digital products across industries and global markets.',
    },
  ]

  const capabilities = [
    { name: 'Full-Stack Development', icon: Code2 },
    { name: 'Cloud & DevOps', icon: Cpu },
    { name: 'Security & Reliability', icon: Shield },
    { name: 'Performance Optimization', icon: Rocket },
  ]

  return (
    <section id="about" className="relative py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          About{' '}
          <span className="gradient-text">
            VibeScript
          </span>
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-center text-slate-300 max-w-3xl mx-auto mb-20 text-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          At VibeScript, we blend strategy, modern engineering, and clean design to
          build digital products that scale. From high-performance websites to
          secure SaaS platforms, we focus on reliability, speed, and long-term
          growth for our clients.
        </motion.p>

        {/* About Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="
                group relative
                rounded-3xl p-8
                bg-white/5 backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:border-emerald-400/50
                hover:shadow-[0_0_45px_rgba(16,185,129,0.25)]
              "
            >
              {/* Glow Overlay */}
              <div className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-br from-emerald-500/10 to-green-600/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              " />

              <div className="relative z-10 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-5 text-emerald-400 drop-shadow-[0_0_14px_rgba(16,185,129,0.6)]" />
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities Title */}
        <motion.h3
          className="text-3xl font-bold text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          What{' '}
          <span className="gradient-text">
            We Do
          </span>
        </motion.h3>

        {/* Capabilities Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="
                rounded-2xl p-6 text-center
                bg-white/5 backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:border-emerald-400/40
              "
            >
              <cap.icon className="w-10 h-10 mx-auto mb-4 text-emerald-300" />
              <p className="text-slate-200 font-medium">
                {cap.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
