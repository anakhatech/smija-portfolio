"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8 xl:px-10"
      >
        <div className="mx-auto w-full max-w-[1700px]">
          <div
            className="
              flex h-[76px] items-center justify-between
              rounded-2xl
              border border-[#D8B9A8]
              bg-[#F7F0EB]/95
              px-5
              shadow-[0_12px_40px_rgba(42,31,27,0.12)]
              backdrop-blur-xl

              sm:h-[84px]
              sm:px-7

              lg:h-[92px]
              lg:px-10

              xl:h-[96px]
              xl:px-12
            "
          >
            {/* LOGO */}
            <motion.a
              href="#home"
              onClick={closeMenu}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex shrink-0 items-center gap-3 sm:gap-4"
            >
              {/* ANIMATED S LOGO */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.4,
                  y: -35,
                  rotate: -10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                  rotate: 0,
                }}
                transition={{
                  opacity: {
                    duration: 0.4,
                    delay: 0.35,
                  },
                  scale: {
                    type: "spring",
                    stiffness: 400,
                    damping: 14,
                    delay: 0.35,
                  },
                  y: {
                    duration: 0.7,
                    delay: 0.35,
                    ease: "easeOut",
                  },
                  rotate: {
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    delay: 0.35,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  rotate: 4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-2xl
                  bg-[#2A1F1B]
                  text-lg font-semibold
                  text-[#F7F0EB]
                  shadow-[0_10px_25px_rgba(42,31,27,0.22)]

                  sm:h-14 sm:w-14
                  sm:text-xl

                  lg:h-16 lg:w-16
                  lg:text-2xl
                "
              >
                S
              </motion.div>

              {/* NAME */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="leading-tight"
              >
                <h1
                  className="
                    text-lg
                    font-bold
                    tracking-[0.18em]
                    text-[#2A1F1B]

                    sm:text-xl
                    lg:text-2xl
                  "
                >
                  SMIJA
                </h1>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    tracking-[0.15em]
                    text-[#8B6655]

                    sm:text-[9px]
                    lg:text-[10px]
                  "
                >
                  SENIOR INTERIOR DESIGNER
                </p>
              </motion.div>
            </motion.a>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="
                hidden
                items-center

                xl:flex
                xl:gap-2

                2xl:gap-3
              "
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.06,
                  }}
                  whileHover={{ y: -2 }}
                  className="
                    group
                    relative
                    rounded-full

                    px-4 py-3

                    text-[15px]
                    font-medium
                    text-[#3B2720]

                    transition-all
                    duration-300

                    hover:bg-[#E3CDBE]
                    hover:text-[#2A1F1B]

                    2xl:px-5
                    2xl:text-base
                  "
                >
                  {link.name}

                  {/* Animated underline */}
                  <span
                    className="
                      absolute bottom-2 left-1/2
                      h-[2px] w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#8B6655]
                      transition-all duration-300
                      group-hover:w-6
                    "
                  />
                </motion.a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex shrink-0 items-center gap-3">
              {/* LET'S TALK */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  hidden
                  rounded-full

                  bg-[#4A332A]

                  px-7 py-3.5

                  text-sm
                  font-semibold
                  tracking-[0.06em]

                  text-[#F7F0EB]

                  shadow-[0_8px_20px_rgba(42,31,27,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#6B4F43]

                  lg:block
                "
              >
                LET&apos;S TALK
              </motion.a>

              {/* MOBILE MENU BUTTON */}
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="
                  flex
                  h-12 w-12
                  items-center justify-center

                  rounded-2xl

                  border border-[#D8B9A8]

                  bg-[#EFE4DC]

                  text-[#2A1F1B]

                  transition-all
                  duration-300

                  hover:bg-[#D8B9A8]

                  xl:hidden

                  sm:h-14
                  sm:w-14
                "
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={25} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={25} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE / TABLET MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed inset-0 z-40
              overflow-y-auto

              bg-[#F7F0EB]

              px-5
              pb-10
              pt-28

              sm:px-8
              sm:pt-32

              lg:px-16

              xl:hidden
            "
          >
            <div className="mx-auto w-full max-w-5xl">
              {/* MENU LINKS */}
              <nav className="border-t border-[#D8B9A8]">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ x: 10 }}
                    className="
                      group

                      flex
                      items-center
                      justify-between

                      border-b
                      border-[#D8B9A8]

                      py-6

                      text-3xl
                      font-semibold
                      tracking-tight

                      text-[#2A1F1B]

                      transition-all
                      duration-300

                      hover:text-[#4A332A]

                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {link.name}

                    <motion.span
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-11 w-11
                        items-center
                        justify-center

                        rounded-full

                        border
                        border-[#D8B9A8]

                        bg-[#EFE4DC]

                        text-sm
                        font-medium

                        text-[#8B6655]

                        transition-all
                        duration-300

                        group-hover:bg-[#4A332A]
                        group-hover:text-[#F7F0EB]
                      "
                    >
                      0{index + 1}
                    </motion.span>
                  </motion.a>
                ))}
              </nav>

              {/* PROFILE CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-10
                  rounded-[2rem]
                  border
                  border-[#D8B9A8]
                  bg-[#EFE4DC]
                  p-7
                  shadow-[0_15px_40px_rgba(42,31,27,0.10)]
                  sm:p-10
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#8B6655]
                  "
                >
                  Smija Pamparackal Soman
                </p>

                <p
                  className="
                    mt-4
                    text-2xl
                    font-semibold
                    text-[#2A1F1B]
                    sm:text-3xl
                  "
                >
                  Senior Interior Designer
                </p>

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-base
                    leading-8
                    text-[#6B4F43]
                    sm:text-lg
                    sm:leading-9
                  "
                >
                  20+ years of design experience, including 12 years
                  in the GCC.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}