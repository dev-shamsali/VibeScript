'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } }
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A modern online shopping experience featuring seamless checkout, real-time updates, and intuitive navigation.",
      points: ["Secure Checkout", "Modern Product UI", "Real-Time Inventory"],
      gradient: "from-[#00A8FF] to-[#005DFF]"
    },
    {
      title: "Design System Library",
      desc: "A reusable design ecosystem that ensures brand consistency and accelerates product development.",
      points: ["Reusable Components", "Brand Consistency", "Faster Development"],
      gradient: "from-[#24C9FF] to-[#0099FF]"
    },
    {
      title: "Analytics Dashboard",
      desc: "A powerful analytics suite offering real-time insights, performance metrics, and decision-making data.",
      points: ["Interactive Charts", "Live Metrics", "Data Visualization"],
      gradient: "from-[#005DFF] to-[#00C9FF]"
    },
    {
      title: "Social Engagement Platform",
      desc: "A community-driven social app enabling posts, interactions, messaging, and real-time engagement.",
      points: ["User Feed", "Messaging", "Community Interaction"],
      gradient: "from-[#008CFF] to-[#00E0FF]"
    }
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-linear-to-b from-[#020617]/80 to-[#040B16]/90">

      {/* Floating Blue Flame Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-16 left-10 w-72 h-72 bg-[#00A8FF]/15 blur-3xl rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#005DFF]/20 blur-3xl rounded-full"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}   // Soft scale effect
              whileTap={{ scale: 0.98 }}     // Tap response
              className="group relative bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden 
              transition-all duration-500 hover:shadow-[0_0_40px_#00A8FF40] hover:border-blue-500/40
              backdrop-blur-xl"
            >

              {/* Glow Overlay */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
              />

              {/* Content */}
              <motion.div
                className="relative z-10 p-8"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-5 leading-relaxed">{project.desc}</p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.points.map((point, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm text-white bg-linear-to-r ${project.gradient}`}
                    >
                      {point}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-blue-300 mb-5 font-medium">
                  Built by the VORONIX Engineering Team
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors 
                  inline-flex items-center gap-2 text-white cursor-pointer"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
