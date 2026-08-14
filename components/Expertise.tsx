"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building2,
  LayoutPanelTop,
  Lightbulb,
  Palette,
  Armchair,
  ClipboardCheck,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "Architectural Planning",
    description:
      "Developing architectural plans, floor layouts and spatial solutions based on project requirements and design intent.",
    icon: Building2,
    color: "bg-[#E4D0BE]",
  },
  {
    number: "02",
    title: "Space Planning",
    description:
      "Creating efficient and functional layouts by carefully considering circulation, usability and spatial requirements.",
    icon: LayoutPanelTop,
    color: "bg-[#D8BFA9]",
  },
  {
    number: "03",
    title: "Concept Development",
    description:
      "Transforming project requirements and ideas into clear design concepts and creative directions.",
    icon: Lightbulb,
    color: "bg-[#CDB097]",
  },
  {
    number: "04",
    title: "Interior Design",
    description:
      "Creating thoughtful interior environments that balance aesthetics, functionality and user experience.",
    icon: Palette,
    color: "bg-[#E0C9B1]",
  },
  {
    number: "05",
    title: "Materials & FF&E",
    description:
      "Selecting materials, finishes, furniture, fixtures and equipment to support the overall design vision.",
    icon: Armchair,
    color: "bg-[#D3B79F]",
  },
  {
    number: "06",
    title: "Project Coordination",
    description:
      "Coordinating design requirements, documentation and project information from concept development through execution.",
    icon: ClipboardCheck,
    color: "bg-[#DFCDBD]",
  },
];

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="relative overflow-hidden bg-[#E6D8CA] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-[40rem] w-[45%] bg-[#D4BFAE]/60 transition-all duration-[1800ms] ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-32 opacity-0"
          }`}
        />

        <div
          className={`absolute -right-40 top-20 h-[38rem] w-[38rem] rounded-full bg-[#9A7052]/25 blur-3xl transition-all duration-[2000ms] ${
            visible
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0"
          }`}
        />

        <div
          className={`absolute -left-40 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[#79553F]/20 blur-3xl transition-all duration-[2200ms] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-40 opacity-0"
          }`}
        />

        <div
          className={`absolute right-[5%] top-[18%] hidden h-80 w-80 rounded-full border-[2px] border-[#9A7052]/20 transition-all duration-[2500ms] lg:block ${
            visible ? "rotate-0 scale-100" : "rotate-45 scale-50"
          }`}
        />

        {/* Floating glow */}
        <div className="animate-[pulse_5s_ease-in-out_infinite] absolute right-[18%] top-[8%] h-24 w-24 rounded-full bg-[#C18B68]/20 blur-2xl" />

        <div className="animate-[pulse_6s_ease-in-out_infinite] absolute bottom-[18%] left-[18%] h-20 w-20 rounded-full bg-[#6F4936]/15 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1450px]">
        {/* HEADER */}
        <div
          className={`grid gap-10 transition-all duration-1000 lg:grid-cols-[1.15fr_0.85fr] lg:items-end ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div>
            <div className="flex items-center gap-5">
              <span className="text-4xl font-semibold tracking-[0.08em] text-[#8A6048] sm:text-5xl">
                04
              </span>

              <span
                className={`h-[2px] bg-[#9A7052] transition-all delay-300 duration-1000 ${
                  visible ? "w-16" : "w-0"
                }`}
              />

              <span className="text-xl font-bold tracking-[0.28em] text-[#382A22] sm:text-2xl">
                EXPERTISE
              </span>
            </div>

            <h2
              className="mt-7 max-w-5xl text-5xl leading-[1.02] text-[#332A25] sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Expertise shaped
              <span className="block text-[#7B523B]">
                through experience.
              </span>
            </h2>
          </div>

          <div className="border-l-[3px] border-[#9A7052] pl-6">
            <p className="max-w-xl text-lg leading-8 text-[#55463D] lg:ml-auto lg:text-xl lg:leading-9">
              Professional expertise spanning architectural planning,
              interior design, creative development and project
              coordination.
            </p>
          </div>
        </div>

        {/* EXPERTISE AREA */}
        <div
          className={`mt-20 rounded-[2.5rem] border border-[#A98B76] bg-[#BFA18B] px-6 py-12 shadow-[0_18px_45px_rgba(70,45,30,0.15)] transition-all delay-200 duration-[1200ms] sm:px-10 sm:py-16 lg:px-14 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          {/* INTRO */}
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-base font-bold tracking-[0.22em] text-[#5E3927]">
                DESIGN EXPERTISE
              </p>

              <h3
                className="mt-4 text-4xl leading-tight text-[#2F211B] sm:text-5xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Knowledge shaped
                <span className="text-[#6F432E]"> by experience.</span>
              </h3>
            </div>

            <p className="max-w-md border-l-[3px] border-[#6F4936] pl-6 text-lg leading-8 text-[#49352B]">
              Bringing together creative thinking, technical knowledge
              and practical experience to develop spaces that are both
              visually refined and highly functional.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`group relative overflow-hidden rounded-[2rem] border border-[#A98B76] ${
                    item.color
                  } p-8 shadow-[0_15px_35px_rgba(70,45,30,0.12)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(70,45,30,0.25)] sm:p-10 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${350 + index * 120}ms`,
                  }}
                >
                  {/* CARD GLOW */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#8A6048]/20" />

                  {/* BOTTOM SHINE */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-0 bg-[#5E3927] transition-all duration-700 group-hover:w-full" />

                  {/* NUMBER */}
                  <div className="absolute right-7 top-6 flex h-14 min-w-14 items-center justify-center rounded-full bg-[#382A22] px-3 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span
                      className="text-xl font-semibold tracking-wide text-[#F5E8DD]"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* ICON */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#6B4630] text-[#F5EDE5] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:bg-[#382A22]">
                    <div className="absolute inset-0 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-125" />

                    <Icon
                      size={34}
                      strokeWidth={1.6}
                      className="relative z-10"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="mt-10 text-3xl leading-tight text-[#332A25] transition-transform duration-500 group-hover:translate-x-1 sm:text-[2rem]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* ANIMATED LINE */}
                  <div className="mt-5 h-[2px] w-16 overflow-hidden bg-[#79553F]/30">
                    <div className="h-full w-0 bg-[#5E3927] transition-all duration-700 group-hover:w-full" />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-6 text-[17px] leading-8 text-[#523F34] transition-all duration-500 group-hover:text-[#382A22] sm:text-lg sm:leading-9">
                    {item.description}
                  </p>

                  {/* HOVER SPARK */}
                  <div className="pointer-events-none absolute bottom-7 right-8 h-2 w-2 rounded-full bg-[#FFF7EF] opacity-0 shadow-[0_0_20px_5px_rgba(255,247,239,0.7)] transition-all duration-500 group-hover:animate-ping group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM FEATURE */}
        <div
          className={`relative mt-24 overflow-hidden rounded-[2.5rem] bg-[#382A22] px-8 py-12 shadow-[0_20px_50px_rgba(55,40,32,0.20)] transition-all duration-[1200ms] sm:px-12 sm:py-14 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border-[30px] border-[#A4775A]/20 animate-[spin_25s_linear_infinite]" />

          <div className="pointer-events-none absolute bottom-0 left-[35%] h-32 w-32 rounded-t-full bg-[#9A7052]/10 transition-transform duration-1000 hover:scale-125" />

          <div className="absolute left-[55%] top-10 h-3 w-3 animate-pulse rounded-full bg-[#CFA67F] shadow-[0_0_25px_8px_rgba(207,166,127,0.35)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-base font-bold tracking-[0.22em] text-[#CFA67F]">
                PROFESSIONAL APPROACH
              </p>

              <h3
                className="mt-5 max-w-4xl text-3xl leading-tight text-[#F5EDE5] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                From the first plan to the
                <span className="text-[#D1A882]"> final space.</span>
              </h3>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-[#A4775A]/30 bg-[#5A4033]/60 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#CFA67F]/60 sm:p-9">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#CFA67F]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <p className="relative text-lg leading-8 text-[#E2D2C4] sm:text-xl sm:leading-9">
                Bringing together architectural planning, creative
                design, technical understanding and coordination to
                transform concepts into completed spaces.
              </p>

              <div className="relative mt-7 flex items-center gap-3 text-[#D1A882]">
                <span className="h-3.5 w-3.5 animate-pulse rounded-full bg-[#CFA67F] shadow-[0_0_15px_4px_rgba(207,166,127,0.4)]" />

                <span className="text-base font-semibold tracking-wide">
                  Plan → Design → Build
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}