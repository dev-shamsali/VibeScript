"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

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
          {/* LOGO + Brand */}
          <div
            className="flex items-center cursor-pointer justify-center"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className="drop-shadow-[0_0_10px_#00A8FF]"
            />

            <span className="text-xl font-bold bg-linear-to-r from-[#00A8FF] to-[#005DFF] bg-clip-text text-transparent pt-2">
              Voronix Solution
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {/* If item has dropdown */}
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setAboutOpen((prev) => !prev)}
                      className={`capitalize flex items-center gap-1 transition-all duration-300 ${
                        activeSection === item.name
                          ? "text-blue-400 font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      About
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          aboutOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {aboutOpen && (
                      <div className="absolute left-0 mt-2 w-44 bg-slate-900 border border-slate-700 rounded-lg shadow-lg animate-fade-in">
                        <button
                          onClick={() => scrollToSection("about")}
                          className="block w-full text-left px-4 py-2 hover:bg-slate-800 transition-colors text-slate-200"
                        >
                          Who We Are
                        </button>
                        <button
                          onClick={() => scrollToSection("mission")}
                          className="block w-full text-left px-4 py-2 hover:bg-slate-800 transition-colors text-slate-200"
                        >
                          Our Mission
                        </button>
                        <button
                          onClick={() => scrollToSection("vision")}
                          className="block w-full text-left px-4 py-2 hover:bg-slate-800 transition-colors text-slate-200"
                        >
                          Vision & Values
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.name)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === item.name
                        ? "text-blue-400 font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-slide-down">
          {/* Normal Items */}
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-800">
              {/* If About has dropdown */}
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setAboutOpen((prev) => !prev)}
                    className="w-full px-4 py-3 text-left flex justify-between items-center capitalize text-slate-300"
                  >
                    About
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile About Dropdown */}
                  {aboutOpen && (
                    <div className="bg-slate-800/60">
                      <button
                        onClick={() => scrollToSection("about")}
                        className="block w-full text-left px-6 py-3 text-slate-200 hover:bg-slate-700"
                      >
                        Who We Are
                      </button>
                      <button
                        onClick={() => scrollToSection("mission")}
                        className="block w-full text-left px-6 py-3 text-slate-200 hover:bg-slate-700"
                      >
                        Our Mission
                      </button>
                      <button
                        onClick={() => scrollToSection("vision")}
                        className="block w-full text-left px-6 py-3 text-slate-200 hover:bg-slate-700"
                      >
                        Vision & Values
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => scrollToSection(item.name)}
                  className="block w-full text-left px-4 py-3 capitalize text-slate-300 hover:bg-slate-800"
                >
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
