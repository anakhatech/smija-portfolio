"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#382A22] px-6 pt-24 lg:px-10">
      
      {/* ANIMATED BACKGROUND DECORATIONS */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#9A7052]/25 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 top-0 h-[24rem] w-[24rem] rounded-full bg-[#CFA67F]/10 blur-3xl"
      />

      {/* SUBTLE DECORATIVE CIRCLE */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* TOP */}

        <div className="grid gap-16 pb-20 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT SIDE */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* NAME */}

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-3 w-3 rounded-full bg-[#CFA67F]"
              />

              <p className="text-base font-bold tracking-[0.22em] text-[#CFA67F]">
                SMIJA PAMPARACKAL SOMAN
              </p>
            </motion.div>

            {/* HEADING */}

            <motion.div variants={fadeUp} className="overflow-hidden">
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.05] text-[#F7EFE7] sm:text-6xl lg:text-7xl"
              >
                Designing spaces
                <span className="block text-[#CFA67F]">
                  with purpose.
                </span>
              </motion.h2>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-lg leading-8 text-[#D8C5B8]"
            >
              Creating thoughtful interiors where creativity,
              functionality and attention to detail come together.
            </motion.p>

            {/* BUTTON */}

            <motion.div variants={fadeUp}>
              <motion.a
                href="#contact"
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#9A7052] px-8 py-4 text-base font-semibold text-[#F7EFE7] transition-colors duration-300 hover:bg-[#CFA67F] hover:text-[#382A22] hover:shadow-xl"
              >
                Let&apos;s Work Together

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            className="lg:pt-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* EXPLORE */}

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="h-3 w-3 rounded-full bg-[#CFA67F]"
              />

              <p className="text-base font-bold tracking-[0.2em] text-[#CFA67F]">
                EXPLORE
              </p>
            </motion.div>

            {/* NAVIGATION */}

            <motion.div
              variants={staggerContainer}
              className="mt-8 grid grid-cols-2 gap-x-10 gap-y-5"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                  }}
                  className="group flex items-center justify-between border-b border-[#F7EFE7]/10 pb-3 text-base text-[#E6D8CF] transition duration-300 hover:border-[#CFA67F]/50 hover:text-[#CFA67F]"
                >
                  {link.name}

                  <ArrowUpRight
                    size={17}
                    className="opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* CONTACT DETAILS */}

            <motion.div
              variants={fadeUp}
              className="mt-12 border-t border-[#F7EFE7]/10 pt-8"
            >
              <p className="mb-5 text-sm font-bold tracking-[0.18em] text-[#A98770]">
                GET IN TOUCH
              </p>

              <div className="space-y-5">

                {/* EMAIL */}

                <motion.a
                  href="mailto:smijavijayan1@gmail.com"
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 text-base text-[#E6D8CF] transition hover:text-[#CFA67F]"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9A7052]/40 transition group-hover:bg-[#9A7052]"
                  >
                    <Mail size={18} className="text-[#CFA67F]" />
                  </motion.div>

                  <span>
                    smijavijayan1@gmail.com
                  </span>
                </motion.a>

                {/* PHONE */}

                <motion.a
                  href="tel:+971555823354"
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-4 text-base text-[#E6D8CF] transition hover:text-[#CFA67F]"
                >
                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9A7052]/40 transition group-hover:bg-[#9A7052]"
                  >
                    <Phone size={18} className="text-[#CFA67F]" />
                  </motion.div>

                  <span>
                    +971-55-582-3354
                  </span>
                </motion.a>

              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-5 border-t border-[#F7EFE7]/10 py-8 text-sm text-[#BFAEA3] sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} Smija Pamparackal Soman. All rights reserved.
          </p>

          <motion.a
            href="#home"
            whileHover={{
              y: -3,
            }}
            className="group flex items-center gap-2 font-medium transition hover:text-[#CFA67F]"
          >
            Back to top

            <motion.span
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↑
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}