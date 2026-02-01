'use client'

import { Mail, PhoneCall, MapPin } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 left-10 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/20 blur-3xl rounded-full"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="
            max-w-3xl mx-auto
            bg-slate-900/60 border border-emerald-500/20
            rounded-3xl p-10 md:p-14
            backdrop-blur-xl
            shadow-[0_0_45px_rgba(16,185,129,0.25)]
          "
        >
          {/* Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-3 gap-8 text-center mb-14"
          >
            {/* EMAIL */}
            <motion.a
              variants={fadeUp}
              href="mailto:info.vibescript@gmail.com"
              className="group block"
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
              <p className="text-slate-300 group-hover:text-emerald-300 transition-colors">
                info.vibescript@gmail.com
              </p>
            </motion.a>

            {/* PHONE */}
            <motion.a
              variants={fadeUp}
              href="tel:+919226539203"
              className="group block"
            >
              <PhoneCall className="w-8 h-8 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
              <p className="text-slate-300 group-hover:text-emerald-300 transition-colors">
                +91 92265 39203
              </p>
            </motion.a>

            {/* LOCATION */}
            <motion.div variants={fadeUp}>
              <MapPin className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
              <p className="text-slate-300">Mumbai · Remote</p>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="flex justify-center gap-6"
          >
            {/* Instagram */}
            <motion.a
              variants={fadeUp}
              href="https://www.instagram.com/vibescript.tech?igsh=MXkybDd0MWs0cHpmdQ=="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-14 h-14 rounded-full
                bg-white/5 backdrop-blur-xl
                border border-emerald-500/30
                flex items-center justify-center
                hover:border-emerald-400
                hover:bg-emerald-500/10
                hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
                transition-all
              "
            >
              <FaInstagram className="w-6 h-6 text-emerald-300" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/919226539203"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-14 h-14 rounded-full
                bg-white/5 backdrop-blur-xl
                border border-emerald-500/30
                flex items-center justify-center
                hover:border-emerald-400
                hover:bg-emerald-500/10
                hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
                transition-all
              "
            >
              <FaWhatsapp className="w-6 h-6 text-emerald-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
