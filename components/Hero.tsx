import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF1E8] pt-24"
    >
      {/* LARGE COLOUR BLOCKS */}
      <div className="absolute left-0 top-0 h-[65%] w-[32%] bg-[#F7C6C7]" />

      <div className="absolute right-0 top-0 h-[48%] w-[42%] bg-[#CDB4DB]" />

      <div className="absolute bottom-0 right-[18%] h-[30%] w-[25%] rounded-t-[8rem] bg-[#B8D8E8]" />

      {/* Decorative shapes */}
      <div className="absolute left-[28%] top-32 h-28 w-28 rounded-full bg-[#F9D976]" />

      <div className="absolute bottom-16 left-[8%] h-20 w-20 rotate-12 rounded-[1.5rem] bg-[#C9D8C0]" />

      <div className="absolute right-[5%] top-[38%] h-24 w-24 rounded-full border-[14px] border-[#E76F51]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* Tag */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-[#3D2C2E] px-5 py-2.5 shadow-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F9D976]" />

            <span className="text-[10px] font-bold tracking-[0.18em] text-white">
              SENIOR INTERIOR DESIGNER
            </span>
          </div>

          {/* Name */}
          <p className="mb-5 text-xs font-bold tracking-[0.25em] text-[#7B4E52]">
            SMIJA PAMPARACKAL SOMAN
          </p>

          {/* Main heading */}
          <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-tight text-[#3D2C2E] sm:text-7xl lg:text-8xl">
            Designing
            <span className="block text-[#E76F51]">
              meaningful spaces.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-[#5F4A4C] sm:text-lg">
            Senior Interior Designer with extensive experience in
            concept development, space planning, material selection,
            FF&E specification and project coordination across diverse
            interior design projects.
          </p>

          {/* Design sectors */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              { name: "Hospitality", color: "bg-[#F9D976]" },
              { name: "Residential", color: "bg-[#C9D8C0]" },
              { name: "Commercial", color: "bg-[#B8D8E8]" },
              { name: "F&B", color: "bg-[#CDB4DB]" },
              { name: "Healthcare", color: "bg-[#FFD6A5]" },
            ].map((sector) => (
              <span
                key={sector.name}
                className={`${sector.color} rounded-full px-4 py-2 text-xs font-bold text-[#3D2C2E] shadow-sm`}
              >
                {sector.name}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-full bg-[#E76F51] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#E76F51]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#3D2C2E]"
            >
              View Selected Work

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#about"
              className="flex items-center gap-3 rounded-full border-2 border-[#3D2C2E] bg-[#FFF1E8] px-7 py-4 text-sm font-bold text-[#3D2C2E] transition-all duration-300 hover:bg-[#F9D976]"
            >
              Explore Profile
              <ArrowDownRight size={18} />
            </a>
          </div>

          {/* Statistics */}
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-[1.5rem] bg-[#F9D976] p-5 shadow-md">
              <p className="text-3xl font-bold text-[#3D2C2E]">
                20+
              </p>

              <p className="mt-2 text-[9px] font-bold tracking-wide text-[#5F4A4C]">
                YEARS EXPERIENCE
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#CDB4DB] p-5 shadow-md">
              <p className="text-3xl font-bold text-[#3D2C2E]">
                12
              </p>

              <p className="mt-2 text-[9px] font-bold tracking-wide text-[#5F4A4C]">
                YEARS IN GCC
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#B8D8E8] p-5 shadow-md">
              <p className="text-3xl font-bold text-[#3D2C2E]">
                5+
              </p>

              <p className="mt-2 text-[9px] font-bold tracking-wide text-[#5F4A4C]">
                DESIGN SECTORS
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[650px]">

          {/* Yellow background block behind image */}
          <div className="absolute right-0 top-12 h-[72%] w-[85%] rounded-[4rem] bg-[#F9D976]" />

          {/* Main image */}
          <div className="relative h-[470px] w-full max-w-md overflow-hidden rounded-[3rem] border-[10px] border-[#FFF1E8] shadow-[0_30px_70px_rgba(61,44,46,0.25)] lg:h-[570px]">
            <Image
              src="/hero-interior.png"
              alt="Modern luxury interior design"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2C2E]/25 via-transparent to-transparent" />
          </div>

          {/* Location card */}
          <div className="absolute left-0 top-12 rounded-[1.5rem] bg-[#C9D8C0] p-5 shadow-xl lg:-left-6">
            <p className="text-[9px] font-bold tracking-[0.18em] text-[#5A6B54]">
              BASED IN
            </p>

            <p className="mt-1 text-base font-bold text-[#3D2C2E]">
              Dubai, UAE
            </p>
          </div>

          {/* Portfolio card */}
          <div className="absolute bottom-7 left-0 rounded-[1.5rem] bg-[#3D2C2E] p-6 shadow-xl sm:left-5">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#F9D976]">
              INTERIOR DESIGN PORTFOLIO
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              From concept to completion.
            </p>
          </div>

          {/* Coral accent */}
          <div className="absolute bottom-4 right-0 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#E76F51] shadow-xl lg:-right-4">
            <ArrowDownRight size={32} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}