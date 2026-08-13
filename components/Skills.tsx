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
    color: "bg-[#FFD6E0]",
    iconColor: "text-[#E98263]",
  },
  {
    number: "02",
    title: "Architectural Drafting",
    description:
      "Creating floor plans, layouts, elevations and detailed technical drawings for architectural and interior projects.",
    icon: PenTool,
    color: "bg-[#DCD6FF]",
    iconColor: "text-[#766A9C]",
  },
  {
    number: "03",
    title: "BIM / CAD",
    description:
      "Developing coordinated drawings and technical documentation to support design development and project execution.",
    icon: Box,
    color: "bg-[#BFE3FF]",
    iconColor: "text-[#63879D]",
  },
  {
    number: "04",
    title: "3D Visualization",
    description:
      "Communicating architectural and interior concepts through visual representations and design development.",
    icon: Monitor,
    color: "bg-[#FFE5B4]",
    iconColor: "text-[#B8862C]",
  },
  {
    number: "05",
    title: "BOQ Preparation",
    description:
      "Preparing quantities, specifications and supporting documentation for project planning and execution.",
    icon: FileText,
    color: "bg-[#FFDDEB]",
    iconColor: "text-[#B45D7B]",
  },
  {
    number: "06",
    title: "Design Presentation",
    description:
      "Presenting concepts, materials, plans and design ideas clearly and professionally.",
    icon: Presentation,
    color: "bg-[#CFF3E5]",
    iconColor: "text-[#4C987B]",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#BFE3FF]/30 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#FFD6E0]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-[#FF8A65]" />

              <p className="text-base font-bold tracking-[0.25em] text-[#A67C72]">
                03 — SKILLS
              </p>
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[#5B4B4B] sm:text-6xl lg:text-7xl">
              Tools that turn
              <span className="block text-[#FF8A65]">
                ideas into plans.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-9 text-[#7A6460] lg:ml-auto">
            Technical and creative skills used to develop architectural
            drawings, interior concepts, documentation and visual
            presentations.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.number}
                className="group relative overflow-hidden rounded-[2.5rem] border border-[#F1E2DD] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9"
              >
                <span className="absolute right-7 top-5 text-6xl font-bold text-[#F6EEEB]">
                  {skill.number}
                </span>

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-[1.5rem] ${skill.color}`}
                >
                  <Icon size={34} className={skill.iconColor} />
                </div>

                <h3 className="mt-10 text-3xl font-semibold text-[#5B4B4B]">
                  {skill.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-[#7A6460]">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM FEATURE */}
        <div className="mt-20 rounded-[2.5rem] bg-[#FFF1EB] p-8 sm:p-12">
          <p className="text-sm font-bold tracking-[0.22em] text-[#A67C72]">
            TECHNICAL FOUNDATION
          </p>

          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="max-w-4xl text-4xl font-semibold leading-tight text-[#5B4B4B] sm:text-5xl">
              From architectural plans to
              <span className="text-[#FF8A65]">
                {" "}finished spaces.
              </span>
            </h3>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#FF8A65]">
              <ArrowUpRight size={30} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}