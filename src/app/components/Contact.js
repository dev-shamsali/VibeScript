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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-20"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            max-w-4xl mx-auto
            rounded-3xl p-10 md:p-14
            bg-white/5 backdrop-blur-xl
            border border-white/10
            transition-all duration-500
            hover:border-emerald-400/40
            hover:shadow-[0_0_45px_rgba(16,185,129,0.25)]
          "
        >
          {/* Contact Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mb-14"
          >
            {/* Email */}
            <motion.a
              variants={fadeUp}
              href="mailto:info.vibescript@gmail.com"
              className="group"
            >
              <Mail className="w-7 h-7 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
              <p className="text-slate-300 group-hover:text-emerald-300 transition-colors">
                info.vibescript@gmail.com
              </p>
            </motion.a>

            {/* Phone */}
            <motion.a
              variants={fadeUp}
              href="tel:+919226539203"
              className="group"
            >
              <PhoneCall className="w-7 h-7 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
              <p className="text-slate-300 group-hover:text-emerald-300 transition-colors">
                +91 92265 39203
              </p>
            </motion.a>

            {/* Location */}
            <motion.div variants={fadeUp}>
              <MapPin className="w-7 h-7 mx-auto mb-3 text-emerald-400" />
              <p className="text-slate-300">Mumbai · Remote</p>
            </motion.div>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {/* Instagram */}
            <motion.a
              variants={fadeUp}
              href="https://www.instagram.com/vibescript.tech"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="
                w-14 h-14 rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-emerald-400
                hover:border-emerald-400/40
                hover:bg-white/10
                transition-all
              "
            >
              <FaInstagram className="w-6 h-6" />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={fadeUp}
              href="https://wa.me/919226539203"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="
                w-14 h-14 rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                text-emerald-400
                hover:border-emerald-400/40
                hover:bg-white/10
                transition-all
              "
            >
              <FaWhatsapp className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
