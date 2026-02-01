'use client'

import { IoLogoWhatsapp } from 'react-icons/io5'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919226539203" // ← replace with your real number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-tr from-emerald-500 to-green-600
        text-white
        shadow-[0_10px_30px_rgba(16,185,129,0.45)]
        hover:shadow-[0_15px_40px_rgba(16,185,129,0.65)]
        flex items-center justify-center
        backdrop-blur-md
      "
      aria-label="Chat on WhatsApp"
    >
      <IoLogoWhatsapp className="w-7 h-7" />
    </motion.a>
  )
}
