'use client'

import { Code2, Globe, Shield, Rocket, Cpu, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
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
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          About{' '}
          <span className="gradient-text">
            VibeScript
          </span>
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-center text-slate-300 max-w-3xl mx-auto mb-18 text-lg leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          At VibeScript, we blend strategy, modern engineering, and clean design to
          build digital products that scale. From high-performance websites to
          secure SaaS platforms, we focus on reliability, speed, and long-term
          growth for our clients.
        </motion.p>

        {/* About Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {sections.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative bg-slate-900/60 border border-emerald-500/20
              rounded-2xl p-8 transition-all duration-500
              hover:border-emerald-400/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-600/10
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                <h3 className="text-2xl font-semibold mb-3 text-white">
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
          className="text-3xl font-bold text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          What{' '}
          <span className="gradient-text">
            We Do
          </span>
        </motion.h3>

        {/* Capabilities Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-slate-900/60 border border-emerald-500/20
              rounded-2xl p-6 text-center transition-all
              hover:border-emerald-400/50 hover:bg-slate-900/80"
            >
              <cap.icon className="w-10 h-10 mx-auto mb-3 text-emerald-300" />
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
