"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#EAE3D9] pt-24 sm:pt-28"
    >
      {/* ================= BACKGROUND DESIGN ================= */}

      {/* Soft warm brown glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full bg-[#B89B83]/30 blur-3xl"
      />

      {/* Light beige glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        className="absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full bg-[#D7C7B8]/50 blur-3xl"
      />

      {/* Soft darker area */}
      <div className="absolute bottom-[-10rem] left-[25%] h-[30rem] w-[30rem] rounded-full bg-[#6E5A4C]/10 blur-3xl" />

      {/* Decorative outlined circle */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[42%] h-28 w-28 rounded-full border-[14px] border-[#8C715E]/15"
      />

      {/* Small architectural shape */}
      <motion.div
        animate={{
          y: [0, 14, 0],
          rotate: [12, 18, 12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[48%] top-28 h-28 w-28 rotate-12 rounded-[2rem] bg-[#A9856D]/15"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1500px] items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16 xl:px-20">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10">

          {/* Professional Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 inline-flex items-center rounded-full border border-[#B9A795] bg-[#F4EFE8]/80 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#4B3A30] sm:text-sm">
              SENIOR INTERIOR DESIGNER
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 text-base font-bold tracking-[0.14em] text-[#4A403A] sm:text-lg lg:text-xl"
          >
            SMIJA PAMPARACKAL SOMAN
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl text-[3.5rem] font-semibold leading-[0.94] tracking-tight text-[#302A26] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
          >
            Designing spaces
            <span className="block text-[#8A6B56]">
              with purpose.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-2xl text-base leading-8 text-[#5F554E] sm:text-lg sm:leading-9 lg:text-xl"
          >
            Senior Interior Designer with extensive experience in concept
            development, space planning, material selection, FF&E
            specification and project coordination across diverse interior
            design projects.
          </motion.p>

          {/* Design Sectors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.95,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {[
              "Hospitality",
              "Residential",
              "Commercial",
              "F&B",
              "Healthcare",
            ].map((sector, index) => (
              <motion.span
                key={sector}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1 + index * 0.08,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                className="cursor-default rounded-full border border-[#C9BAAA] bg-[#F5F0E9]/75 px-4 py-2 text-xs font-semibold text-[#554940] shadow-sm transition-all duration-300 hover:bg-[#7A5C49] hover:text-white"
              >
                {sector}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 rounded-full bg-[#352A24] px-7 py-4 text-sm font-semibold text-[#F8F4EE] shadow-lg shadow-[#352A24]/15 transition-all duration-300 hover:bg-[#795B48]"
            >
              View Projects

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 rounded-full border border-[#A9927E] bg-[#F4EFE8]/70 px-7 py-4 text-sm font-semibold text-[#453A33] transition-all duration-300 hover:bg-[#D9CABC]"
            >
              Explore Profile

              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </motion.a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4"
          >
            {/* Experience */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-[#CFC2B5] bg-[#F3EEE7]/80 p-4 shadow-sm transition-shadow hover:shadow-lg sm:p-5"
            >
              <p className="text-2xl font-semibold text-[#352A24] sm:text-3xl">
                20+
              </p>

              <p className="mt-2 text-[8px] font-bold tracking-[0.1em] text-[#70645C] sm:text-[9px]">
                YEARS EXPERIENCE
              </p>
            </motion.div>

            {/* GCC */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-[#BFAE9E] bg-[#D9CCBF]/75 p-4 shadow-sm transition-shadow hover:shadow-lg sm:p-5"
            >
              <p className="text-2xl font-semibold text-[#4A3A30] sm:text-3xl">
                12
              </p>

              <p className="mt-2 text-[8px] font-bold tracking-[0.1em] text-[#706055] sm:text-[9px]">
                YEARS IN GCC
              </p>
            </motion.div>

            {/* Sectors */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-[#BEB5AC] bg-[#D8D2CB]/75 p-4 shadow-sm transition-shadow hover:shadow-lg sm:p-5"
            >
              <p className="text-2xl font-semibold text-[#3E3935] sm:text-3xl">
                5+
              </p>

              <p className="mt-2 text-[8px] font-bold tracking-[0.1em] text-[#69635E] sm:text-[9px]">
                DESIGN SECTORS
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex min-h-[500px] items-center justify-center sm:min-h-[580px] lg:min-h-[680px]"
        >
          {/* Small brown architectural background */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[4%] top-[10%] h-[74%] w-[76%] rounded-[3rem] bg-[#6A5142]/95"
          />

          {/* Soft light frame behind image */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[10%] top-[15%] h-[68%] w-[72%] rounded-[2.5rem] border border-[#BFAE9E]/60 bg-[#CDBEAF]/35"
          />

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5 }}
            className="relative z-10 h-[440px] w-[82%] max-w-[500px] overflow-hidden rounded-[2.5rem] border-[7px] border-[#EEE7DE] shadow-[0_18px_40px_rgba(53,42,36,0.18)] sm:h-[520px] lg:h-[590px]"
          >
            <Image
              src="/hero-interior.png"
              alt="Modern luxury interior design"
              fill
              priority
              sizes="(max-width: 1024px) 82vw, 500px"
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2F2722]/20 via-transparent to-transparent" />
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -25, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="absolute left-[2%] top-[12%] z-20 rounded-2xl border border-[#CDBEAF] bg-[#F5F0E9]/95 px-5 py-4 shadow-md backdrop-blur-md sm:left-0 lg:-left-4"
          >
            <p className="text-[8px] font-bold tracking-[0.2em] text-[#8A6B56]">
              BASED IN
            </p>

            <p className="mt-1 text-sm font-bold text-[#352A24] sm:text-base">
              Dubai, UAE
            </p>
          </motion.div>

          {/* Small Design Approach Badge */}
          <motion.div
            initial={{ opacity: 0, x: 25, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="absolute bottom-[8%] right-[4%] z-20 rounded-2xl bg-[#352A24] px-5 py-4 shadow-lg sm:right-0 lg:-right-2"
          >
            <p className="text-[8px] font-bold tracking-[0.18em] text-[#C5A88F]">
              DESIGN APPROACH
            </p>

            <p className="mt-2 text-sm font-semibold leading-6 text-[#F7F2EB] sm:text-base">
              Concept to
              <br />
              completion.
            </p>
          </motion.div>

          {/* Small decorative accent */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[4%] left-[8%] h-16 w-16 rounded-[1.5rem] border border-[#A98B76]/30 bg-[#B6957D]/30"
          />
        </motion.div>
      </div>
    </section>
  );
}