"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Compass,
  MapPin,
} from "lucide-react";

const experienceAreas = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Concept development, space planning and the creation of functional, visually refined interior environments.",
    icon: Building2,
    numberColor: "text-[#A96F4F]",
    iconBg: "bg-[#9A7052]",
  },
  {
    number: "02",
    title: "Design Development",
    description:
      "Material selection, FF&E coordination, specifications, BOQs, BIM/CAD documentation and visualization.",
    icon: Compass,
    numberColor: "text-[#8A634E]",
    iconBg: "bg-[#79553F]",
  },
  {
    number: "03",
    title: "Project Delivery",
    description:
      "Design coordination, fit-out execution and supporting projects from early concepts through completion.",
    icon: BriefcaseBusiness,
    numberColor: "text-[#B07B59]",
    iconBg: "bg-[#6B4937]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#E6D8CA] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[38rem] w-[38rem] rounded-full bg-[#9A7052]/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#79553F]/15 blur-3xl"
      />

      <div className="pointer-events-none absolute left-0 top-0 h-[38rem] w-[45%] bg-[#D4BFAE]/60" />

      <div className="pointer-events-none absolute right-[7%] top-[22%] hidden h-80 w-80 rounded-full border-[2px] border-[#9A7052]/20 lg:block" />

      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[6%] top-[18rem] hidden text-4xl text-[#9A7052]/50 lg:block"
      >
        ✦
      </motion.div>

      <div className="relative mx-auto max-w-[1450px]">

        {/* ================= HEADER ================= */}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-5">
              <span className="text-4xl font-semibold tracking-[0.08em] text-[#8A6048] sm:text-5xl">
                02
              </span>

              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                }}
                className="h-[2px] w-16 origin-left bg-[#9A7052]"
              />

              <span className="text-xl font-bold tracking-[0.28em] text-[#382A22] sm:text-2xl">
                EXPERIENCE
              </span>
            </div>

            <h2
              className="mt-7 max-w-4xl text-5xl leading-[1.02] text-[#332A25] sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Experience shaped by
              <span className="block text-[#7B523B]">
                design and delivery.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-l-[3px] border-[#9A7052] pl-6"
          >
            <p className="max-w-xl text-lg leading-8 text-[#55463D] lg:ml-auto lg:text-xl lg:leading-9">
              A career built across diverse interior environments,
              combining creative design thinking with technical
              coordination and project execution.
            </p>
          </motion.div>
        </div>

        {/* ================= EXPERIENCE NUMBERS ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {/* CARD 01 */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.25 },
            }}
            className="relative overflow-hidden rounded-[2rem] border border-[#BFA895] bg-[#D8C2B0] p-8 shadow-[0_12px_30px_rgba(70,45,30,0.10)] transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(70,45,30,0.18)] sm:p-10"
          >
            <span
              className="absolute right-7 top-4 text-7xl leading-none text-[#8A6048]/20"
              style={{ fontFamily: "Georgia, serif" }}
            >
              01
            </span>

            <p className="relative text-6xl font-semibold tracking-tight text-[#332A25] sm:text-7xl">
              23+
            </p>

            <p className="relative mt-5 text-xl font-semibold text-[#40332C]">
              Years of Experience
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mt-4 h-[2px] bg-[#8A6048]"
            />

            <p className="relative mt-5 max-w-sm text-base leading-7 text-[#614E42]">
              A long-standing career in interior design, architectural
              projects and project delivery.
            </p>
          </motion.div>

          {/* CARD 02 */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.25 },
            }}
            className="relative overflow-hidden rounded-[2rem] border border-[#AD907B] bg-[#C9AD98] p-8 shadow-[0_12px_30px_rgba(70,45,30,0.10)] transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(70,45,30,0.18)] sm:p-10"
          >
            <span
              className="absolute right-7 top-4 text-7xl leading-none text-[#6F4936]/20"
              style={{ fontFamily: "Georgia, serif" }}
            >
              02
            </span>

            <p className="relative text-6xl font-semibold tracking-tight text-[#332A25] sm:text-7xl">
              11+
            </p>

            <p className="relative mt-5 text-xl font-semibold text-[#40332C]">
              Years in the GCC
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="relative mt-4 h-[2px] bg-[#79553F]"
            />

            <p className="relative mt-5 max-w-sm text-base leading-7 text-[#5D493D]">
              Extensive regional experience across projects in the UAE
              and the wider GCC design environment.
            </p>
          </motion.div>

          {/* CARD 03 */}

          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.25 },
            }}
            className="relative overflow-hidden rounded-[2rem] bg-[#382A22] p-8 text-[#F4E9DF] shadow-[0_18px_40px_rgba(55,40,32,0.22)] transition-shadow duration-300 hover:shadow-[0_28px_55px_rgba(55,40,32,0.3)] sm:p-10"
          >
            <span
              className="absolute right-7 top-4 text-7xl leading-none text-[#D0A882]/25"
              style={{ fontFamily: "Georgia, serif" }}
            >
              03
            </span>

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin
                size={30}
                className="absolute bottom-8 right-8 text-[#CFA67F]"
              />
            </motion.div>

            <p
              className="relative text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              UAE
              <span className="block text-[#D1A882]">
                & Maldives
              </span>
            </p>

            <p className="relative mt-7 text-xl font-semibold">
              International Exposure
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 56 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative mt-4 h-[2px] bg-[#CFA67F]"
            />

            <p className="relative mt-5 max-w-sm text-base leading-7 text-[#D9C6B7]">
              Experience working across different locations, sectors
              and project requirements.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= PROFESSIONAL EXPERTISE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 rounded-[2.5rem] border border-[#A98B76] bg-[#BFA18B] px-6 py-12 shadow-[0_18px_45px_rgba(70,45,30,0.15)] sm:px-10 sm:py-16 lg:px-14"
        >
          <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-[#5E3927]">
                PROFESSIONAL EXPERTISE
              </p>

              <h3
                className="mt-4 text-4xl leading-tight text-[#2F211B] sm:text-5xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                From concept
                <span className="text-[#6F432E]">
                  {" "}to completion.
                </span>
              </h3>
            </div>

            <div className="border-l-[3px] border-[#6F4936] pl-6">
              <p className="max-w-md text-lg leading-8 text-[#49352B]">
                Bringing together creativity, technical understanding and
                coordination throughout every stage of the design process.
              </p>
            </div>
          </div>

          {/* ================= EXPERTISE CARDS ================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid gap-5 lg:grid-cols-3"
          >
            {experienceAreas.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.015,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#A98B76] bg-[#E8D9CC] p-8 shadow-sm transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(70,45,30,0.22)] sm:p-9"
                >
                  {/* Soft hover glow */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#A96F4F]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.12,
                        rotate: 8,
                      }}
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${item.iconBg} text-[#F5EDE5] shadow-lg`}
                    >
                      <Icon size={27} strokeWidth={1.6} />
                    </motion.div>

                    <span
                      className={`text-3xl font-semibold tracking-wide ${item.numberColor}`}
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.number}
                    </span>
                  </div>

                  <h4
                    className="relative mt-10 text-3xl leading-tight text-[#332A25]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h4>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 56 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5,
                      duration: 0.6,
                    }}
                    className="relative mt-5 h-[2px] bg-[#79553F]"
                  />

                  <p className="relative mt-6 text-base leading-8 text-[#5F4B3F]">
                    {item.description}
                  </p>

                  <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-[#6F432E]">
                    Professional Expertise

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-[#382A22] px-8 py-12 shadow-[0_20px_50px_rgba(55,40,32,0.20)] sm:px-12 sm:py-14"
        >
          {/* Ambient decorative circle */}
          <motion.div
            animate={{
              rotate: [0, 8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border-[30px] border-[#A4775A]/20"
          />

          <div className="pointer-events-none absolute bottom-0 left-[35%] h-32 w-32 rounded-t-full bg-[#9A7052]/10" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
            >
              <p className="text-sm font-bold tracking-[0.22em] text-[#CFA67F]">
                DESIGN APPROACH
              </p>

              <h3
                className="mt-5 max-w-4xl text-3xl leading-tight text-[#F5EDE5] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Every successful space begins with a
                <span className="text-[#D1A882]">
                  {" "}strong concept
                </span>{" "}
                and ends with careful execution.
              </h3>
            </motion.div>

            <motion.a
              href="#projects"
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#CFA67F] px-7 py-4 text-base font-semibold text-[#382A22] shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              Explore Projects

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}