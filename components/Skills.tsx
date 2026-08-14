"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Ruler,
  Box,
  Presentation,
  FileText,
  PenTool,
  ArrowUpRight,
} from "lucide-react";

const skills = [
  {
    number: "01",
    title: "AutoCAD",
    description:
      "Creating precise architectural and interior design drawings, layouts and documentation.",
    icon: Ruler,
    color: "bg-[#E4D0BE]",
    numberColor: "text-[#8A5A3C]",
  },
  {
    number: "02",
    title: "Architectural Drafting",
    description:
      "Creating floor plans, layouts, elevations and detailed technical drawings for architectural and interior projects.",
    icon: PenTool,
    color: "bg-[#D8BFA9]",
    numberColor: "text-[#75462F]",
  },
  {
    number: "03",
    title: "BIM / CAD",
    description:
      "Developing coordinated drawings and technical documentation to support design development and project execution.",
    icon: Box,
    color: "bg-[#CDB097]",
    numberColor: "text-[#633B29]",
  },
  {
    number: "04",
    title: "3D Visualization",
    description:
      "Communicating architectural and interior concepts through visual representations and design development.",
    icon: Monitor,
    color: "bg-[#E0C9B1]",
    numberColor: "text-[#805038]",
  },
  {
    number: "05",
    title: "BOQ Preparation",
    description:
      "Preparing quantities, specifications and supporting documentation for project planning and execution.",
    icon: FileText,
    color: "bg-[#D3B79F]",
    numberColor: "text-[#6B402C]",
  },
  {
    number: "06",
    title: "Design Presentation",
    description:
      "Presenting concepts, materials, plans and design ideas clearly and professionally.",
    icon: Presentation,
    color: "bg-[#DFCDBD]",
    numberColor: "text-[#7A4B34]",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#E6D8CA] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* ================= BACKGROUND DESIGN ================= */}

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, 18, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-0 h-[40rem] w-[45%] bg-[#D4BFAE]/60"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[38rem] w-[38rem] rounded-full bg-[#9A7052]/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#79553F]/15 blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [0, 8, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[5%] top-[18%] hidden h-80 w-80 rounded-full border-[2px] border-[#9A7052]/20 lg:block"
      />

      {/* Small luxury sparkle */}
      <motion.div
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[20%] hidden text-3xl text-[#8A6048]/50 lg:block"
      >
        ✦
      </motion.div>

      <div className="relative mx-auto max-w-[1450px]">

        {/* ================= SECTION HEADER ================= */}

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
                03
              </span>

              <motion.span
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="h-[2px] w-16 origin-left bg-[#9A7052]"
              />

              <span className="text-xl font-bold tracking-[0.28em] text-[#382A22] sm:text-2xl">
                SKILLS
              </span>

            </div>

            <h2
              className="mt-7 max-w-5xl text-5xl leading-[1.02] text-[#332A25] sm:text-6xl xl:text-7xl"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Tools that turn
              <span className="block text-[#7B523B]">
                ideas into plans.
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
              Technical and creative skills used to develop architectural
              drawings, interior concepts, documentation and visual
              presentations.
            </p>
          </motion.div>

        </div>

        {/* ================= SKILLS AREA ================= */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 rounded-[2.5rem] border border-[#A98B76] bg-[#BFA18B] px-6 py-12 shadow-[0_18px_45px_rgba(70,45,30,0.15)] sm:px-10 sm:py-16 lg:px-14"
        >

          {/* Skills intro */}

          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >
              <p className="text-base font-bold tracking-[0.22em] text-[#5E3927]">
                TECHNICAL EXPERTISE
              </p>

              <h3
                className="mt-4 text-4xl leading-tight text-[#2F211B] sm:text-5xl"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                Precision meets
                <span className="text-[#6F432E]">
                  {" "}creative thinking.
                </span>
              </h3>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="max-w-md border-l-[3px] border-[#6F4936] pl-6 text-lg leading-8 text-[#49352B]"
            >
              Combining technical knowledge and creative visualization
              to develop interiors from the earliest concept through
              detailed execution.
            </motion.p>

          </div>

          {/* ================= SKILLS GRID ================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={container}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >

            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.number}
                  variants={fadeUp}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className={`group relative overflow-hidden rounded-[2rem] border border-[#A98B76] ${skill.color} p-8 shadow-[0_15px_35px_rgba(70,45,30,0.12)] transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(70,45,30,0.22)] sm:p-10`}
                >

                  {/* Soft luxury hover glow */}

                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#9A7052]/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="absolute right-7 top-6 flex h-14 min-w-14 items-center justify-center rounded-full bg-[#382A22] px-3 shadow-md"
                  >
                    <span
                      className="text-xl font-semibold tracking-wide text-[#F5E8DD]"
                      style={{
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      {skill.number}
                    </span>
                  </motion.div>

                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#6B4630] text-[#F5EDE5] shadow-lg"
                  >
                    <Icon size={34} strokeWidth={1.6} />
                  </motion.div>

                  {/* TITLE */}

                  <h3
                    className="relative mt-10 text-3xl leading-tight text-[#332A25] sm:text-[2rem]"
                    style={{
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {skill.title}
                  </h3>

                  {/* Animated Line */}

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: 64,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                    }}
                    className="relative mt-5 h-[2px] bg-[#79553F]"
                  />

                  {/* DESCRIPTION */}

                  <p className="relative mt-6 text-[17px] leading-8 text-[#523F34] sm:text-lg sm:leading-9">
                    {skill.description}
                  </p>

                  {/* Bottom accent */}

                  <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-[#6F432E]">
                    Technical Skill

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

        {/* ================= BOTTOM FEATURE ================= */}

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

          {/* Decorative circle */}

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
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >
              <p className="text-base font-bold tracking-[0.22em] text-[#CFA67F]">
                TECHNICAL FOUNDATION
              </p>

              <h3
                className="mt-5 max-w-4xl text-3xl leading-tight text-[#F5EDE5] sm:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                From architectural plans to
                <span className="text-[#D1A882]">
                  {" "}finished spaces.
                </span>
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#D9C6B7] sm:text-xl sm:leading-9">
                Combining technical precision with creative thinking to
                transform concepts into carefully executed interior spaces.
              </p>
            </motion.div>

            {/* Floating Arrow */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.12,
                rotate: 8,
              }}
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#CFA67F] shadow-lg"
            >
              <ArrowUpRight
                size={32}
                className="text-[#382A22]"
              />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}