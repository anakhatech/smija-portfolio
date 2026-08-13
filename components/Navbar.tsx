"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#FFF9F5]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between rounded-2xl border border-[#FFD6E0] bg-white/80 px-5 shadow-[0_8px_30px_rgba(255,181,158,0.12)]">

            {/* LOGO */}
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFB59E] text-base font-semibold text-white">
                S
              </div>

              <div className="leading-tight">
                <h1 className="text-sm font-bold tracking-[0.14em] text-[#5B4B4B] sm:text-base">
                  SMIJA
                </h1>

                <p className="mt-1 text-[8px] font-medium tracking-[0.12em] text-[#A67C72] sm:text-[9px]">
                  SENIOR INTERIOR DESIGNER
                </p>
              </div>
            </a>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-[#7A6460] transition-all duration-300 hover:bg-[#FFD6E0] hover:text-[#5B4B4B]"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CONTACT BUTTON */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-full bg-[#FF8A65] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFB59E] md:block"
              >
                LET&apos;S TALK
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCD6FF] text-[#6D5FA6] transition-all duration-300 hover:bg-[#BFE3FF] xl:hidden"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE / TABLET MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFF9F5] px-6 pt-28 xl:hidden">
          <div className="mx-auto max-w-2xl">

            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF8A65]">
              Navigation
            </p>

            <nav className="border-t border-[#FFD6E0]">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-[#FFD6E0] py-5 text-2xl font-semibold text-[#5B4B4B] transition-colors hover:text-[#FF8A65]"
                >
                  {link.name}

                  <span className="rounded-full bg-[#BFE3FF] px-3 py-1 text-xs font-medium text-[#6B8CA3]">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-8 rounded-3xl bg-[#FFD6E0] p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#A67C72]">
                Smija Pamparackal Soman
              </p>

              <p className="mt-2 text-lg font-semibold text-[#5B4B4B]">
                Senior Interior Designer
              </p>

              <p className="mt-2 text-sm leading-6 text-[#7A6460]">
                20 years of design experience, including 12 years in the GCC.
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}