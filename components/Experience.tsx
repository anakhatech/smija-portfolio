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
    color: "bg-[#FFD6E0]",
    iconColor: "text-[#E98263]",
  },
  {
    number: "02",
    title: "Design Development",
    description:
      "Material selection, FF&E coordination, specifications, BOQs, BIM/CAD documentation and visualization.",
    icon: Compass,
    color: "bg-[#DCD6FF]",
    iconColor: "text-[#8273B7]",
  },
  {
    number: "03",
    title: "Project Delivery",
    description:
      "Design coordination, fit-out execution and supporting projects from early concepts through completion.",
    icon: BriefcaseBusiness,
    color: "bg-[#BFE3FF]",
    iconColor: "text-[#5D94B8]",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#FFF9F5] px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background decoration */}
      <div className="absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-[#FFD6E0]/40 blur-3xl" />

      <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[#BFE3FF]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#FF8A65]" />

              <p className="text-sm font-bold tracking-[0.25em] text-[#A67C72]">
                02 — EXPERIENCE
              </p>
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-[#5B4B4B] sm:text-6xl lg:text-7xl">
              Experience shaped by
              <span className="block text-[#FF8A65]">
                design and delivery.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-9 text-[#7A6460] lg:ml-auto lg:text-xl">
            A career built across diverse interior environments,
            combining creative design thinking with technical
            coordination and project execution.
          </p>
        </div>

        {/* Main experience numbers */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {/* 23 Years */}
          <div className="rounded-[2rem] bg-[#FFD6E0] p-8 sm:p-10">
            <p className="text-6xl font-semibold tracking-tight text-[#5B4B4B] sm:text-7xl">
              23+
            </p>

            <p className="mt-4 text-lg font-semibold text-[#5B4B4B]">
              Years of Experience
            </p>

            <p className="mt-3 text-base leading-7 text-[#8A5E68]">
              A long-standing career in interior design, architectural
              projects and project delivery.
            </p>
          </div>

          {/* GCC */}
          <div className="rounded-[2rem] bg-[#DCD6FF] p-8 sm:p-10">
            <p className="text-6xl font-semibold tracking-tight text-[#5B4B4B] sm:text-7xl">
              11+
            </p>

            <p className="mt-4 text-lg font-semibold text-[#5B4B4B]">
              Years in the GCC
            </p>

            <p className="mt-3 text-base leading-7 text-[#766A9C]">
              Extensive regional experience across projects in the UAE
              and the wider GCC design environment.
            </p>
          </div>

          {/* Locations */}
          <div className="rounded-[2rem] bg-[#BFE3FF] p-8 sm:p-10">
            <div className="flex items-start justify-between">
              <p className="text-4xl font-semibold tracking-tight text-[#5B4B4B] sm:text-5xl">
                UAE
                <span className="block">& Maldives</span>
              </p>

              <MapPin className="text-[#5D94B8]" size={28} />
            </div>

            <p className="mt-6 text-lg font-semibold text-[#5B4B4B]">
              International Exposure
            </p>

            <p className="mt-3 text-base leading-7 text-[#63879D]">
              Experience working across different locations, sectors
              and project requirements.
            </p>
          </div>
        </div>

        {/* Experience expertise */}
        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-[#A67C72]">
                PROFESSIONAL JOURNEY
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-[#5B4B4B] sm:text-4xl">
                From concept to completion.
              </h3>
            </div>

            <p className="max-w-md text-base leading-7 text-[#7A6460]">
              Bringing together creativity, technical understanding and
              coordination throughout the design process.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {experienceAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-[2rem] border border-[#F0DFD8] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                    >
                      <Icon size={28} className={item.iconColor} />
                    </div>

                    <span className="text-sm font-bold text-[#B69D97]">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-10 text-2xl font-semibold text-[#5B4B4B]">
                    {item.title}
                  </h4>

                  <p className="mt-5 text-base leading-8 text-[#7A6460]">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#FF8A65]">
                    Professional Expertise

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 rounded-[2.5rem] bg-[#5B4B4B] px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-[#FFB59E]">
              DESIGN APPROACH
            </p>

            <h3 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Every successful space begins with a strong concept and
              ends with careful execution.
            </h3>
          </div>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#FF8A65] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:mt-0"
          >
            Explore Projects
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}