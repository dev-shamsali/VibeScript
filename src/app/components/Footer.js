'use client'

import { Phone, Mail } from 'lucide-react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* FOOTER */}
      <footer className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Grid */}
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-extrabold gradient-text mb-4">
                VibeScript
              </h3>
              <p className="text-slate-400 leading-relaxed">
                We design, build, and scale modern digital products that help
                businesses grow with confidence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'about', 'projects', 'services', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-slate-400 hover:text-emerald-400 transition-colors capitalize"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-slate-400">
                <p>Web & SaaS Development</p>
                <p>Cloud & DevOps</p>
                <p>Backend & APIs</p>
                <p>Performance & Security</p>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/vibescript.tech?igsh=MXkybDd0MWs0cHpmdQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-900/70 border border-emerald-500/20
                  hover:bg-emerald-500/10 hover:border-emerald-400 transition-all"
                >
                  <FaInstagram className="w-5 h-5 text-emerald-300" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919226539203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-900/70 border border-emerald-500/20
                  hover:bg-emerald-500/10 hover:border-emerald-400 transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 text-emerald-300" />
                </a>

                {/* Email */}
                <a
                  href="mailto:info.vibescript@gmail.com"
                  className="p-3 rounded-full bg-slate-900/70 border border-emerald-500/20
                  hover:bg-emerald-500/10 hover:border-emerald-400 transition-all"
                >
                  <Mail className="w-5 h-5 text-emerald-300" />
                </a>

              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} VibeScript. All rights reserved.
          </div>
        </div>
      </footer>

      {/* 📞 FIXED CALL BUTTON (BOTTOM-LEFT) */}
      <a
        href="tel:+919226539203"
        className="
          fixed bottom-6 left-6 z-50
          w-14 h-14 rounded-full
          bg-emerald-500 text-white
          flex items-center justify-center
          shadow-[0_0_25px_rgba(16,185,129,0.6)]
          hover:scale-110 transition-transform
        "
        aria-label="Call VibeScript"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  )
}
