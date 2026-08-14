"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Armchair, Compass } from "lucide-react";

/* ================= ANIMATION SETTINGS ================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e9e1d5] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#9b765b]/15 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#b89a82]/20 blur-3xl"
      />

      {/* Large decorative circle */}
      <div className="pointer-events-none absolute left-[-13rem] top-[20rem] h-[28rem] w-[28rem] rounded-full bg-[#a97858]/20" />

      {/* Decorative arch */}
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-[26rem] w-[26rem] rounded-full border border-[#8b6b54]/20" />

      {/* Decorative dots */}
      <div className="pointer-events-none absolute bottom-24 left-[7%] hidden grid-cols-4 gap-4 opacity-50 lg:grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#795842]"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1450px]">

        {/* ================= HEADER ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          variants={fadeUp}
          className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-14"
        >
          {/* Left spacer */}
          <div className="hidden lg:block" />

          {/* Header */}
          <div>
            {/* ABOUT */}
            <div className="flex items-center gap-5">
              <span className="text-3xl font-semibold tracking-[0.08em] text-[#9a7052] sm:text-4xl">
                01
              </span>

              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="h-px w-16 origin-left bg-[#9a7052]/70"
              />

              <span className="text-2xl font-semibold tracking-[0.3em] text-[#3a302b] sm:text-3xl">
                ABOUT
              </span>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

              {/* Main Heading */}
              <h2
                className="text-5xl leading-[1.02] text-[#332a25] sm:text-6xl xl:text-7xl"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                Designing spaces
                <br />

                with{" "}
                <span className="text-[#8a6147]">
                  purpose.
                </span>
              </h2>

              {/* Description */}
              <div className="border-l-2 border-[#9a7052] pl-6">
                <p className="text-base leading-7 text-[#554a43] sm:text-lg lg:text-xl lg:leading-8">
                  A thoughtful approach to interior design, combining
                  creative direction, functionality and the experience
                  of a space to create meaningful environments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

          {/* ================= LEFT PROFILE ================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            variants={fadeLeft}
            className="relative mx-auto w-full max-w-[500px]"
          >
            {/* Background shape */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-10 top-20 h-72 w-72 rounded-[45%] bg-[#a97c5c]/15 sm:h-80 sm:w-80"
            />

            {/* Decorative curved border */}
            <div className="absolute -right-5 top-24 hidden h-64 w-24 rounded-r-[4rem] border-b border-r border-t border-[#8b6b54]/30 lg:block" />

            {/* PROFILE IMAGE */}
            <div className="relative h-[480px] overflow-hidden rounded-[3rem] border-[7px] border-[#f7f2eb] shadow-[0_25px_60px_rgba(69,50,38,0.18)] sm:h-[580px]">
              <Image
                src="/smija.jpeg"
                alt="Smija Pamparackal Soman"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241b17]/65 via-transparent to-transparent" />

              {/* Text */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                }}
                className="absolute bottom-28 left-8 sm:left-12"
              >
                <p
                  className="text-3xl italic leading-tight text-[#f7f1e8] sm:text-5xl"
                  style={{
                    fontFamily: "Georgia, serif",
                  }}
                >
                  Designing
                  <br />
                  Meaningful Spaces
                </p>
              </motion.div>
            </div>

            {/* ================= IDENTITY CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="relative z-10 -mt-20 ml-auto mr-[-0.5rem] w-[90%] rounded-[1.8rem] border border-[#cdbbaa] bg-[#f4eee6]/95 p-5 shadow-[0_18px_40px_rgba(76,56,43,0.16)] backdrop-blur-xl sm:mr-[-2rem] sm:p-7"
            >
              <div className="flex items-center gap-4 sm:gap-5">

                {/* S Box */}
                <motion.div
                  whileHover={{
                    scale: 1.06,
                    rotate: 3,
                  }}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#352820] text-2xl font-semibold text-[#f5eee6] shadow-lg"
                >
                  S
                </motion.div>

                <div>
                  <p className="text-[10px] font-bold tracking-[0.16em] text-[#6d5140] sm:text-sm">
                    SMIJA PAMPARACKAL SOMAN
                  </p>

                  <p className="mt-2 text-base text-[#40352e] sm:text-xl">
                    Senior Interior Designer
                  </p>

                  <div className="mt-3 h-px w-20 bg-[#8b6249]" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <div className="pb-4">

            {/* ================= APPROACH + EXPERIENCE ================= */}

            <div className="grid gap-5 md:grid-cols-2">

              {/* APPROACH */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                variants={fadeRight}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-[2rem] border border-[#cdbbaa] bg-[#f3ece4]/80 p-7 shadow-[0_12px_30px_rgba(81,60,44,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_45px_rgba(81,60,44,0.16)] sm:p-8"
              >
                <div className="flex items-center gap-5">

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#79553f] text-[#f5eee6] shadow-lg"
                  >
                    <Compass
                      size={24}
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  <div>
                    <p className="text-sm font-bold tracking-[0.18em] text-[#42352e]">
                      THE APPROACH
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.7,
                        duration: 0.6,
                      }}
                      className="mt-3 h-px bg-[#9b765b]"
                    />
                  </div>
                </div>

                <p className="mt-7 text-base leading-8 text-[#5c4e45] sm:text-lg">
                  Every project begins by understanding the purpose of the
                  space. From there, concepts develop through planning,
                  materials, finishes and careful coordination.
                </p>
              </motion.div>

              {/* EXPERIENCE */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                variants={fadeRight}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-[2rem] border border-[#cdbbaa] bg-[#f3ece4]/80 p-7 shadow-[0_12px_30px_rgba(81,60,44,0.08)] transition-shadow duration-300 hover:shadow-[0_25px_45px_rgba(81,60,44,0.16)] sm:p-8"
              >
                <div className="flex items-center gap-5">

                  <motion.div
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#79553f] text-[#f5eee6] shadow-lg"
                  >
                    <Armchair
                      size={24}
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  <div>
                    <p className="text-sm font-bold tracking-[0.18em] text-[#42352e]">
                      THE EXPERIENCE
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.85,
                        duration: 0.6,
                      }}
                      className="mt-3 h-px bg-[#9b765b]"
                    />
                  </div>
                </div>

                <p className="mt-7 text-base leading-8 text-[#5c4e45] sm:text-lg">
                  Experience across hospitality, residential, commercial,
                  F&amp;B and healthcare projects brings a broad understanding
                  of different design and functional requirements.
                </p>
              </motion.div>
            </div>

            {/* ================= DESIGN PHILOSOPHY ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 overflow-hidden rounded-[2rem] bg-[#382a22] shadow-[0_20px_45px_rgba(55,40,32,0.2)]"
            >
              <div className="grid min-h-[250px] md:grid-cols-[0.38fr_0.62fr]">

                {/* Interior Image */}

                <div className="relative min-h-[250px] overflow-hidden">
                  <Image
                    src="/hero-interior.png"
                    alt="Interior design project"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#382a22]/20 to-[#382a22]" />
                </div>

                {/* Philosophy Content */}

                <div className="flex flex-col justify-center p-7 sm:p-10">

                  <div className="flex items-center gap-4">

                    <motion.div
                      whileHover={{
                        rotate: 12,
                        scale: 1.08,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9a7052] text-[#f7efe7] shadow-lg"
                    >
                      ✦
                    </motion.div>

                    <p className="text-xs font-bold tracking-[0.24em] text-[#cfaf93]">
                      DESIGN PHILOSOPHY
                    </p>
                  </div>

                  <h3
                    className="mt-6 text-3xl leading-tight text-[#f5eee6] sm:text-4xl"
                    style={{
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Creative thinking,
                    <span className="text-[#d1a882]">
                      {" "}carefully executed.
                    </span>
                  </h3>

                  <p className="mt-5 max-w-lg text-base leading-7 text-[#d8c9bc] sm:text-lg">
                    Blending aesthetics with functionality to create spaces
                    that feel complete, purposeful and refined.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ================= STATISTICS ================= */}

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
                delay: 0.2,
              }}
              className="mt-9 grid grid-cols-3 border-t border-[#bfae9d] pt-7 sm:pt-8"
            >
              {/* 20+ */}

              <motion.div
                whileHover={{ y: -5 }}
                className="border-r border-[#bfae9d] pr-3 sm:pr-6"
              >
                <p className="text-3xl font-bold text-[#342b26] sm:text-5xl">
                  20+
                </p>

                <p className="mt-2 text-[9px] font-bold tracking-[0.15em] text-[#725a49] sm:text-xs sm:tracking-[0.18em]">
                  YEARS EXPERIENCE
                </p>

                <div className="mt-4 h-px w-8 bg-[#8d674e] sm:w-10" />
              </motion.div>

              {/* 12 */}

              <motion.div
                whileHover={{ y: -5 }}
                className="border-r border-[#bfae9d] px-3 sm:px-7"
              >
                <p className="text-3xl font-bold text-[#342b26] sm:text-5xl">
                  12
                </p>

                <p className="mt-2 text-[9px] font-bold tracking-[0.15em] text-[#725a49] sm:text-xs sm:tracking-[0.18em]">
                  YEARS IN GCC
                </p>

                <div className="mt-4 h-px w-8 bg-[#8d674e] sm:w-10" />
              </motion.div>

              {/* 5+ */}

              <motion.div
                whileHover={{ y: -5 }}
                className="pl-3 sm:pl-7"
              >
                <p className="text-3xl font-bold text-[#342b26] sm:text-5xl">
                  5+
                </p>

                <p className="mt-2 text-[9px] font-bold tracking-[0.15em] text-[#725a49] sm:text-xs sm:tracking-[0.18em]">
                  DESIGN SECTORS
                </p>

                <div className="mt-4 h-px w-8 bg-[#8d674e] sm:w-10" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}