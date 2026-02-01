"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = ["home", "about", "projects", "services", "contact"];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ⬇️ Taller navbar so logo breathes */}
          <div className="h-16 flex items-center justify-between">

            {/* LOGO — REAL SIZE, SHARP */}
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/logo.png"
                alt="VibeScript Logo"
                width={180}      // ✅ real size (NO scale)
                height={200}
                priority
                className="object-contain"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition ${activeSection === item
                    ? "text-emerald-400 font-medium"
                    : "text-slate-300 hover:text-white"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER (LEFT) ================= */}
      <div
        className={`fixed inset-0 z-50 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-slate-950/95 backdrop-blur-xl
          border-r border-white/10 transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="h-20 flex items-center justify-between px-4 border-b border-white/10">
            <Image
              src="/logo.png"
              alt="VibeScript Logo"
              width={88}
              height={88}
              className="object-contain"
            />
            <button onClick={() => setMenuOpen(false)}>
              <X className="text-white" />
            </button>
          </div>

          {/* Drawer Menu */}
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-6 py-4 text-left capitalize text-slate-300 hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
