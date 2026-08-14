"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Building2,
  Hotel,
  Utensils,
  Store,
  Landmark,
} from "lucide-react";

const projects = [
  {
    id: "jumeirah-mina-al-salam",
    number: "01",
    title: "Jumeirah Mina A'Salam Hotel",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Luxury hospitality refurbishment including guest rooms, suites and carefully coordinated interior design development.",
    accent: "bg-[#8B6248]",
    Icon: Hotel,
  },
  {
    id: "jumeirah-malikiya",
    number: "02",
    title: "Jumeirah Malakiya Villas & Landscape",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Refurbishment of luxury villas, landscape areas and public spaces with coordinated design development and delivery.",
    accent: "bg-[#A97958]",
    Icon: Hotel,
  },
  {
    id: "jumeirah-dar-al-masyaf",
    number: "03",
    title: "Jumeirah Dar Al Masyaf Hotel",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Guest room, suite and public-area refurbishment developed through detailed coordination and interior design planning.",
    accent: "bg-[#6F4B38]",
    Icon: Hotel,
  },
  {
    id: "jumeirah-emirates-towers",
    number: "04",
    title: "Jumeirah Emirates Towers",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Interior refurbishment and design coordination across guest rooms, suites and important public spaces.",
    accent: "bg-[#9A7052]",
    Icon: Building2,
  },
  {
    id: "jumeirah-living",
    number: "05",
    title: "Jumeirah Living Tower",
    category: "Residential",
    location: "Dubai, UAE",
    description:
      "Refurbishment across reception, coffee lounge, all-day dining, lounge and gym facilities.",
    accent: "bg-[#79513B]",
    Icon: Building2,
  },
  {
    id: "jumeirah-beit-al-bahar",
    number: "06",
    title: "Jumeirah Beit Al Bahar",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Luxury villa refurbishment including interiors, landscape and public areas from design development through delivery.",
    accent: "bg-[#A87A5C]",
    Icon: Hotel,
  },
  {
    id: "jumeirah-maldives",
    number: "07",
    title: "Jumeirah Hotels – Maldives",
    category: "Hospitality",
    location: "Maldives",
    description:
      "Refurbishment of one, two and three-bedroom villas, royal villas, landscape and public areas.",
    accent: "bg-[#705040]",
    Icon: Hotel,
  },
  {
    id: "delano-sky-villa",
    number: "08",
    title: "Delano Sky Villa",
    category: "Residential",
    location: "Bluewaters Island, Dubai",
    description:
      "Luxury residential design development focused on refined interiors, detailing and coordinated execution.",
    accent: "bg-[#9D6D4D]",
    Icon: Building2,
  },
  {
    id: "hyatt-hotel",
    number: "09",
    title: "Hyatt Hotel Dubai",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Guest room and public-area renovation developed through interior design coordination and project delivery.",
    accent: "bg-[#7C5842]",
    Icon: Hotel,
  },
  {
    id: "all-day-dining",
    number: "10",
    title: "All Day Dining",
    category: "F&B",
    location: "Dubai, UAE",
    description:
      "Hospitality dining environment developed around atmosphere, functionality and coordinated fit-out execution.",
    accent: "bg-[#A87552]",
    Icon: Utensils,
  },
  {
    id: "vault-restaurant",
    number: "11",
    title: "The Vault Restaurant",
    category: "F&B",
    location: "Business Bay, Dubai",
    description:
      "Restaurant interior design and delivery with a focus on concept development, materials and site coordination.",
    accent: "bg-[#684535]",
    Icon: Utensils,
  },
  {
    id: "azizi-office",
    number: "12",
    title: "Azizi Development Office",
    category: "Commercial",
    location: "Conrad Hotel, Dubai",
    description:
      "Office renovation developed from the initial client brief through interior design coordination and completion.",
    accent: "bg-[#956B50]",
    Icon: Building2,
  },
  {
    id: "marriott-hotel",
    number: "13",
    title: "Marriott Hotel Dubai",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Hospitality design and refurbishment work supported through technical coordination and project delivery.",
    accent: "bg-[#76503D]",
    Icon: Hotel,
  },
  {
    id: "mysk-by-palm",
    number: "14",
    title: "Mysk by Palm",
    category: "Hospitality",
    location: "Dubai, UAE",
    description:
      "Interior design coordination for hospitality spaces with attention to functionality, finishes and execution.",
    accent: "bg-[#A47859]",
    Icon: Hotel,
  },
  {
    id: "opus-rooftop",
    number: "15",
    title: "Rooftop Restaurant",
    category: "F&B",
    location: "Opus Tower, Dubai",
    description:
      "A rooftop dining experience shaped through concept development, interior detailing and coordinated delivery.",
    accent: "bg-[#6B4736]",
    Icon: Utensils,
  },
  {
    id: "rivoli-showroom",
    number: "16",
    title: "Rivoli Showroom",
    category: "Retail",
    location: "Dubai Outlet Village",
    description:
      "Retail showroom enhancement focused on interior detailing, design development and practical execution.",
    accent: "bg-[#9B7154]",
    Icon: Store,
  },
  {
    id: "chic-boy",
    number: "17",
    title: "Chic Boy Restaurant",
    category: "F&B",
    location: "Al Ghurair Mall, Dubai",
    description:
      "Restaurant fit-out developed through coordinated design, materials, detailing and project execution.",
    accent: "bg-[#744B38]",
    Icon: Utensils,
  },
  {
    id: "italian-restaurant",
    number: "18",
    title: "Italian Restaurant",
    category: "F&B",
    location: "Maldives",
    description:
      "A restaurant interior designed to create a refined dining atmosphere while supporting functionality and guest experience.",
    accent: "bg-[#A47755]",
    Icon: Utensils,
  },
  {
    id: "barefoot-restaurant",
    number: "19",
    title: "Barefoot Restaurant",
    category: "F&B",
    location: "Maldives",
    description:
      "A relaxed hospitality dining environment developed around atmosphere, materials and spatial experience.",
    accent: "bg-[#6E4A38]",
    Icon: Utensils,
  },
  {
    id: "al-nasr-stadium",
    number: "20",
    title: "Al Nasr Stadium",
    category: "Architectural",
    location: "Dubai, UAE",
    description:
      "Architectural and technical coordination for stadium facilities, seating, offices and supporting spaces.",
    accent: "bg-[#90654C]",
    Icon: Landmark,
  },
  {
    id: "al-ahli-stadium",
    number: "21",
    title: "Al Ahli Stadium",
    category: "Architectural",
    location: "Dubai, UAE",
    description:
      "Architectural documentation and coordination for the Humaid Al Tayer Stadium development.",
    accent: "bg-[#704938]",
    Icon: Landmark,
  },
  {
    id: "dubai-ladies-horse-club",
    number: "22",
    title: "Dubai Ladies Horse Club",
    category: "Architectural",
    location: "Dubai, UAE",
    description:
      "Architectural design documentation and multidisciplinary coordination supporting project development.",
    accent: "bg-[#A17455]",
    Icon: Landmark,
  },
  {
    id: "g6-residential",
    number: "23",
    title: "G+6 Residential Complex",
    category: "Residential",
    location: "Al Fahidi, Dubai",
    description:
      "Residential architectural development supported through CAD documentation and coordinated design information.",
    accent: "bg-[#684737]",
    Icon: Building2,
  },
  {
    id: "al-raha-apartments",
    number: "24",
    title: "Al Raha Apartments",
    category: "Residential",
    location: "Abu Dhabi, UAE",
    description:
      "Architectural and BIM documentation developed for coordinated authority submissions and construction packages.",
    accent: "bg-[#94684E]",
    Icon: Building2,
  },
  {
    id: "shamsa-tower",
    number: "25",
    title: "Shamsa Residential Tower",
    category: "Residential",
    location: "Abu Dhabi, UAE",
    description:
      "Residential tower documentation developed through coordinated architectural and BIM design processes.",
    accent: "bg-[#714A38]",
    Icon: Building2,
  },
  {
    id: "dharmaki-palace",
    number: "26",
    title: "Dharmaki Palace",
    category: "Architectural",
    location: "Abu Dhabi, UAE",
    description:
      "Architectural and technical documentation with coordinated tender drawings and BIM development.",
    accent: "bg-[#A07659]",
    Icon: Landmark,
  },
];

export default function Projects() {
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
      { threshold: 0.08 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-[#E8DED0] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* LUXURY ANIMATED BACKGROUND */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-48 top-20 h-[38rem] w-[38rem] rounded-full bg-[#B68B68]/20 blur-3xl transition-all duration-[2200ms] ${
            visible
              ? "translate-x-0 opacity-100"
              : "-translate-x-40 opacity-0"
          }`}
        />

        <div
          className={`absolute -right-48 bottom-20 h-[40rem] w-[40rem] rounded-full bg-[#76513D]/20 blur-3xl transition-all duration-[2400ms] ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          }`}
        />

        <div
          className={`absolute right-[8%] top-[12%] hidden h-80 w-80 rounded-full border border-[#9A7052]/20 transition-all duration-[2500ms] lg:block ${
            visible ? "scale-100 rotate-0" : "scale-50 rotate-45"
          }`}
        />

        <div className="absolute right-[15%] top-[8%] h-24 w-24 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-[#C18B68]/20 blur-2xl" />

        <div className="absolute bottom-[20%] left-[12%] h-20 w-20 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#6F4936]/15 blur-2xl" />
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
                05
              </span>

              <span
                className={`h-[2px] bg-[#9A7052] transition-all delay-300 duration-1000 ${
                  visible ? "w-16" : "w-0"
                }`}
              />

              <span className="text-xl font-bold tracking-[0.28em] text-[#382A22] sm:text-2xl">
                PROJECTS
              </span>
            </div>

            <h2
              className="mt-7 max-w-5xl text-5xl leading-[1.02] text-[#332A25] sm:text-6xl xl:text-7xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Spaces shaped through
              <span className="block text-[#7B523B]">
                design and experience.
              </span>
            </h2>
          </div>

          <div className="border-l-[3px] border-[#9A7052] pl-6">
            <p className="max-w-xl text-lg leading-8 text-[#55463D] lg:ml-auto lg:text-xl lg:leading-9">
              A portfolio spanning hospitality, residential, commercial,
              retail, food and beverage, and architectural developments
              across the UAE and Maldives.
            </p>
          </div>
        </div>

        {/* PROJECT COUNT */}

        <div
          className={`mt-16 flex flex-wrap items-center gap-8 border-y border-[#B99C86]/50 py-8 transition-all delay-200 duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <p
              className="text-5xl font-semibold text-[#382A22] sm:text-6xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              26
            </p>

            <p className="mt-2 text-xs font-bold tracking-[0.22em] text-[#8B6248]">
              PROJECTS
            </p>
          </div>

          <div className="h-14 w-px bg-[#B99C86]/60" />

          <p className="max-w-2xl text-base leading-7 text-[#6F584A] sm:text-lg">
            From luxury hotels and restaurants to residential towers,
            retail spaces and large-scale architectural developments.
          </p>
        </div>

        {/* PROJECT GRID */}

        <div className="mt-20 grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.Icon;

            return (
              <article
                key={project.id}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#C9AD97] bg-[#F5EEE5]/95 p-7 shadow-[0_18px_50px_rgba(67,43,30,0.10)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(67,43,30,0.22)] sm:p-10 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: `${350 + Math.min(index, 10) * 100}ms`,
                }}
              >
                {/* BACKGROUND GLOW */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8A6048]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#8A6048]/20" />

                {/* BOTTOM ANIMATED LINE */}

                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#6F4936] transition-all duration-700 group-hover:w-full" />

                {/* LARGE NUMBER */}

                <span
                  className="pointer-events-none absolute right-7 top-3 text-[7rem] font-semibold leading-none text-[#8B6248]/10 transition-all duration-700 group-hover:scale-110 group-hover:text-[#8B6248]/15"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {project.number}
                </span>

                {/* TOP */}

                <div className="relative flex items-start justify-between gap-5">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-110 ${project.accent}`}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 ${project.accent}`}
                  >
                    <ArrowUpRight size={23} />
                  </div>
                </div>

                {/* CATEGORY + NUMBER */}

                <div className="relative mt-10 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#8A6048]">
                    {project.category.toUpperCase()}
                  </span>

                  <span
                    className="text-xl font-semibold text-[#5E3927]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {project.number}
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className="relative mt-5 max-w-xl text-3xl leading-tight text-[#332A25] transition-transform duration-500 group-hover:translate-x-2 sm:text-[2rem]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {project.title}
                </h3>

                {/* LOCATION */}

                <div className="relative mt-5 flex items-center gap-2 text-sm font-medium text-[#8B6248]">
                  <MapPin size={17} />
                  <span>{project.location}</span>
                </div>

                {/* ANIMATED LINE */}

                <div className="relative mt-7 h-[2px] w-16 overflow-hidden bg-[#79553F]/25">
                  <div className="h-full w-0 bg-[#5E3927] transition-all duration-700 group-hover:w-full" />
                </div>

                {/* DESCRIPTION */}

                <p className="relative mt-6 max-w-xl text-base leading-8 text-[#6B5548] transition-colors duration-500 group-hover:text-[#382A22] sm:text-lg sm:leading-9">
                  {project.description}
                </p>

                {/* FOOTER */}

                <div className="relative mt-8 flex items-center gap-3 text-sm font-bold tracking-[0.12em] text-[#79513B]">
                  <span>PROJECT PORTFOLIO</span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-2"
                  />
                </div>

                {/* SMALL LIGHT */}

                <div className="pointer-events-none absolute bottom-8 right-8 h-2.5 w-2.5 rounded-full bg-[#FFF7EF] opacity-0 shadow-[0_0_20px_5px_rgba(255,247,239,0.7)] transition-all duration-500 group-hover:animate-ping group-hover:opacity-100" />
              </article>
            );
          })}
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
          {/* ANIMATED DECORATION */}

          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 animate-[spin_25s_linear_infinite] rounded-full border-[30px] border-[#A4775A]/20" />

          <div className="pointer-events-none absolute bottom-0 left-[35%] h-32 w-32 rounded-t-full bg-[#9A7052]/10" />

          <div className="absolute left-[55%] top-10 h-3 w-3 animate-pulse rounded-full bg-[#CFA67F] shadow-[0_0_25px_8px_rgba(207,166,127,0.35)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-base font-bold tracking-[0.22em] text-[#CFA67F]">
                COMPLETE PORTFOLIO
              </p>

              <h3
                className="mt-5 max-w-4xl text-3xl leading-tight text-[#F5EDE5] sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Every project begins with an idea
                <span className="text-[#D1A882]">
                  {" "}
                  and evolves into a space with purpose.
                </span>
              </h3>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-[#A4775A]/30 bg-[#5A4033]/60 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#CFA67F]/60 sm:p-9">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#CFA67F]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <p className="relative text-lg leading-8 text-[#E2D2C4] sm:text-xl sm:leading-9">
                A diverse portfolio built through design development,
                technical expertise, coordination and careful project
                execution.
              </p>

              <div className="relative mt-7 flex items-center gap-3 text-[#D1A882]">
                <span className="h-3.5 w-3.5 animate-pulse rounded-full bg-[#CFA67F] shadow-[0_0_15px_4px_rgba(207,166,127,0.4)]" />

                <span className="text-base font-semibold tracking-wide">
                  CONCEPT → DESIGN → DELIVERY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}