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
    color: "bg-[#FFD6E0]",
    iconColor: "text-[#E98263]",
  },
  {
    number: "02",
    title: "Space Planning",
    description:
      "Creating efficient and functional layouts by carefully considering circulation, usability and spatial requirements.",
    icon: LayoutPanelTop,
    color: "bg-[#DCD6FF]",
    iconColor: "text-[#766A9C]",
  },
  {
    number: "03",
    title: "Concept Development",
    description:
      "Transforming project requirements and ideas into clear design concepts and creative directions.",
    icon: Lightbulb,
    color: "bg-[#BFE3FF]",
    iconColor: "text-[#63879D]",
  },
  {
    number: "04",
    title: "Interior Design",
    description:
      "Creating thoughtful interior environments that balance aesthetics, functionality and user experience.",
    icon: Palette,
    color: "bg-[#FFE5B4]",
    iconColor: "text-[#B8862C]",
  },
  {
    number: "05",
    title: "Materials & FF&E",
    description:
      "Selecting materials, finishes, furniture, fixtures and equipment to support the overall design vision.",
    icon: Armchair,
    color: "bg-[#CFF3E5]",
    iconColor: "text-[#4C987B]",
  },
  {
    number: "06",
    title: "Project Coordination",
    description:
      "Coordinating design requirements, documentation and project information from concept development through execution.",
    icon: ClipboardCheck,
    color: "bg-[#FFDDEB]",
    iconColor: "text-[#B45D7B]",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-[#FFF9F5] px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#DCD6FF]/30 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#FFD6E0]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-[#FF8A65]" />

              <p className="text-base font-bold tracking-[0.25em] text-[#A67C72]">
                04 — EXPERTISE
              </p>
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[#5B4B4B] sm:text-6xl lg:text-7xl">
              Expertise shaped
              <span className="block text-[#FF8A65]">
                through experience.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-9 text-[#7A6460] lg:ml-auto">
            Professional expertise spanning architectural planning,
            interior design, creative development and project
            coordination.
          </p>
        </div>

        {/* EXPERTISE GRID */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9"
              >
                <span className="absolute right-7 top-5 text-6xl font-bold text-[#F5ECE8]">
                  {item.number}
                </span>

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${item.color}`}
                >
                  <Icon size={34} className={item.iconColor} />
                </div>

                <h3 className="mt-10 text-3xl font-semibold text-[#5B4B4B]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#7A6460]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM FEATURE */}
        <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#5B4B4B] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] text-[#FFB59E]">
                PROFESSIONAL APPROACH
              </p>

              <h3 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                From the first plan to the
                <span className="text-[#FFB59E]">
                  {" "}final space.
                </span>
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-7 backdrop-blur-md">
              <p className="text-lg leading-8 text-white/80">
                Bringing together architectural planning, creative
                design, technical understanding and coordination to
                transform concepts into completed spaces.
              </p>

              <div className="mt-6 flex items-center gap-3 text-[#FFB59E]">
                <span className="h-3 w-3 rounded-full bg-[#FF8A65]" />

                <span className="text-sm font-semibold">
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