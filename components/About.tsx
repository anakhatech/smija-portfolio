import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Decorative background */}
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#FFD6E0]/40 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#DCD6FF]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#FF8A65]" />

              <p className="text-sm font-bold tracking-[0.25em] text-[#A67C72]">
                01 — ABOUT
              </p>
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-[#5B4B4B] sm:text-6xl lg:text-7xl">
              Designing interiors where
              <span className="text-[#FF8A65]"> creativity </span>
              meets functionality.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-9 text-[#7A6460] lg:ml-auto lg:text-xl">
            A design-led approach focused on thoughtful planning,
            material selection, spatial experience and the details
            that bring an interior space together.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* LEFT PHOTO */}
          <div className="relative min-h-[600px] overflow-hidden rounded-[3rem] bg-[#FFD6E0]">
            
            {/* Professional Photo */}
            <Image
              src="/smija.jpeg"
              alt="Smija Pamparackal Soman"
              fill
              className="object-cover"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B4B4B]/50 via-transparent to-transparent" />

    

            {/* Bottom Photo Card */}
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-white/90 p-7 shadow-xl backdrop-blur-md">
              <p className="text-xs font-bold tracking-[0.2em] text-[#A67C72]">
                SENIOR INTERIOR DESIGNER
              </p>

              <p className="mt-3 text-2xl font-semibold leading-snug text-[#5B4B4B]">
                Smija Pamparackal Soman
              </p>

              <p className="mt-3 text-base leading-7 text-[#7A6460]">
                Designing thoughtful, functional and visually refined
                interior spaces.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-2xl leading-10 text-[#6F5D59] sm:text-3xl">
                With extensive professional experience in interior
                design, the work spans concept development, space
                planning, material selection, FF&E specification and
                project coordination.
              </p>

              <div className="mt-12 space-y-6 text-lg leading-9 text-[#8A7470]">
                <p>
                  Each project begins by understanding the space and
                  its purpose. The design process then develops through
                  planning, visual concepts, finishes, materials and
                  detailed coordination.
                </p>

                <p>
                  Experience across hospitality, residential,
                  commercial, F&B and healthcare environments brings
                  a broad understanding of different spatial and
                  functional requirements.
                </p>
              </div>
            </div>

            {/* HIGHLIGHT CARDS */}
            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              <div className="rounded-3xl bg-[#FFD6E0] p-7 transition-transform duration-300 hover:-translate-y-2">
                <p className="text-xl font-semibold text-[#5B4B4B]">
                  Creative
                </p>

                <p className="mt-4 text-sm leading-7 text-[#8A5E68]">
                  Developing interior concepts with a clear visual
                  identity and strong design direction.
                </p>
              </div>

              <div className="rounded-3xl bg-[#DCD6FF] p-7 transition-transform duration-300 hover:-translate-y-2">
                <p className="text-xl font-semibold text-[#5B4B4B]">
                  Detailed
                </p>

                <p className="mt-4 text-sm leading-7 text-[#766A9C]">
                  Careful coordination of materials, finishes,
                  specifications and technical requirements.
                </p>
              </div>

              <div className="rounded-3xl bg-[#BFE3FF] p-7 transition-transform duration-300 hover:-translate-y-2">
                <p className="text-xl font-semibold text-[#5B4B4B]">
                  Functional
                </p>

                <p className="mt-4 text-sm leading-7 text-[#63879D]">
                  Creating spaces that balance visual appeal,
                  usability and human needs.
                </p>
              </div>
            </div>

            {/* EXPERIENCE STRIP */}
            <div className="mt-10 flex flex-col justify-between gap-6 rounded-3xl border border-[#F3E2DD] bg-[#FFF9F5] p-7 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#A67C72]">
                  PROFESSIONAL EXPERIENCE
                </p>

                <p className="mt-3 text-xl font-semibold text-[#5B4B4B]">
                  20+ years in design and project delivery
                </p>
              </div>

              <a
                href="#experience"
                className="group flex w-fit items-center gap-3 rounded-full bg-[#FF8A65] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                View Experience

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}