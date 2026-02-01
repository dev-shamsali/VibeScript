"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * 🔹 Brand Config (easy future updates)
 */
const BRAND_NAME = "VibeScript";
const BRAND_GRADIENT = "from-emerald-400 to-green-600";
const ACTIVE_COLOR = "text-emerald-400";
const HOVER_COLOR = "hover:text-white";

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setAboutOpen(false);
  };

  const navItems = [
    { name: "home" },
    { name: "about", dropdown: true },
    { name: "projects" },
    { name: "services" },
    { name: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO + BRAND */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/logo.png"
              alt="VibeScript Logo"
              width={56}
              height={56}
              className="drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] object-contain"
            />

            <span
              className={`text-xl font-bold bg-gradient-to-r ${BRAND_GRADIENT} bg-clip-text text-transparent`}
            >
              {BRAND_NAME}
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setAboutOpen((p) => !p)}
                      className={`capitalize flex items-center gap-1 transition-all ${activeSection === item.name
                        ? `${ACTIVE_COLOR} font-semibold`
                        : `text-slate-300 ${HOVER_COLOR}`
                        }`}
                    >
                      About
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {aboutOpen && (
                      <div className="absolute left-0 mt-2 w-44 bg-slate-900 border border-slate-700 rounded-lg shadow-lg">
                        {[
                          ["about", "Who We Are"],
                          ["mission", "Our Mission"],
                          ["vision", "Vision & Values"],
                        ].map(([id, label]) => (
                          <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="block w-full text-left px-4 py-2 text-slate-200 hover:bg-slate-800"
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.name)}
                    className={`capitalize transition-all ${activeSection === item.name
                      ? `${ACTIVE_COLOR} font-semibold`
                      : `text-slate-300 ${HOVER_COLOR}`
                      }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-slate-900 border-t border-slate-800 transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        {navItems.map((item) => (
          <div key={item.name} className="border-b border-slate-800">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => setAboutOpen((p) => !p)}
                  className="w-full px-4 py-3 flex justify-between text-slate-300"
                >
                  About
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {aboutOpen && (
                  <div className="bg-slate-800/60">
                    {[
                      ["about", "Who We Are"],
                      ["mission", "Our Mission"],
                      ["vision", "Vision & Values"],
                    ].map(([id, label]) => (
                      <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className="block w-full px-6 py-3 text-slate-200 hover:bg-slate-700"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => scrollToSection(item.name)}
                className="block w-full px-4 py-3 capitalize text-slate-300 hover:bg-slate-800"
              >
                {item.name}
              </button>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
