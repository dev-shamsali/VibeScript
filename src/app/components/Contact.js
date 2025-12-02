'use client'

import { useState } from 'react'
import { Send, Mail, PhoneCall, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      "service_k91zghi",      
      "template_9gjzeyx",   
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "kLDj4C60s-KChJqA-"      
    )
    .then(() => {
      alert("Message sent successfully!")
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLoading(false)
    })
    .catch((error) => {
      console.error("EmailJS Error:", error)
      alert("Failed to send message. Try again later.")
      setLoading(false)
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-linear-to-b from-[#040B16] to-[#020617]"
    >
      {/* Floating Blue Flame Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#00A8FF]/15 blur-3xl rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-[#005DFF]/25 blur-3xl rounded-full"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Get In{" "}
          <span className="bg-linear-to-r from-[#00A8FF] via-[#24C9FF] to-[#005DFF] bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        {/* Contact Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl 
          shadow-[0_0_30px_rgba(0,168,255,0.15)]"
        >
          {/* Contact Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="grid sm:grid-cols-3 gap-6 mb-12 text-center"
          >
            <motion.div variants={fadeUp}>
              <Mail className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-slate-300">voronix.solution@gmail.com</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <PhoneCall className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-slate-300">+91 92265 39203</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <MapPin className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <p className="text-slate-300">Mumbai · Remote</p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            {/* Name + Email */}
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white 
                focus:outline-none focus:ring-2 focus:ring-[#00A8FF] transition-all"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white
                focus:outline-none focus:ring-2 focus:ring-[#00A8FF] transition-all"
              />
            </motion.div>

            {/* Subject */}
            <motion.div variants={fadeUp}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white 
                focus:outline-none focus:ring-2 focus:ring-[#00A8FF] transition-all"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white 
                focus:outline-none focus:ring-2 focus:ring-[#00A8FF] transition-all resize-none"
              />
            </motion.div>

            {/* Button */}
            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-linear-to-r from-[#00A8FF] to-[#005DFF] rounded-lg font-semibold text-white
              hover:shadow-[0_0_20px_#009DFF80] transition-all duration-300 flex items-center justify-center gap-2
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
