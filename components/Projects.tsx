import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const projects = [
  {
    id: "project-1",
    number: "01",
    title: "Hospitality Design",
    category: "Hospitality",
    location: "Selected Project",
    description:
      "A thoughtfully designed hospitality environment focused on comfort, atmosphere and user experience.",
    image: "/project-1.jpg",
    color: "bg-[#FFD6E0]",
  },
  {
    id: "project-2",
    number: "02",
    title: "Residential Interior",
    category: "Residential",
    location: "Selected Project",
    description:
      "A refined residential space combining functionality, comfort and a strong visual identity.",
    image: "/project-2.jpg",
    color: "bg-[#DCD6FF]",
  },
  {
    id: "project-3",
    number: "03",
    title: "Commercial Space",
    category: "Commercial",
    location: "Selected Project",
    description:
      "A functional commercial environment developed around spatial planning and practical design solutions.",
    image: "/project-3.jpg",
    color: "bg-[#BFE3FF]",
  },
  {
    id: "project-4",
    number: "04",
    title: "Food & Beverage",
    category: "F&B",
    location: "Selected Project",
    description:
      "An interior experience designed to support atmosphere, functionality and the identity of the space.",
    image: "/project-4.jpg",
    color: "bg-[#FFE5B4]",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-40 h-[32rem] w-[32rem] rounded-full bg-[#FFD6E0]/30 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[30rem] w-[30rem] rounded-full bg-[#BFE3FF]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-[#FF8A65]" />

              <p className="text-base font-bold tracking-[0.25em] text-[#A67C72]">
                05 — SELECTED PROJECTS
              </p>
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[#5B4B4B] sm:text-6xl lg:text-7xl">
              Spaces designed to
              <span className="block text-[#FF8A65]">
                be experienced.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-9 text-[#7A6460] lg:ml-auto">
            A selection of architectural and interior design work
            across different sectors, shaped by creativity,
            functionality and careful attention to detail.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2.5rem] border border-[#F1E2DD] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div
                className={`relative h-[380px] overflow-hidden ${project.color}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Number */}
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-2 text-sm font-bold text-[#5B4B4B] backdrop-blur-md">
                  {project.number}
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6 rounded-full bg-[#FF8A65] px-5 py-2 text-sm font-semibold text-white">
                  {project.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-3xl font-semibold text-[#5B4B4B] sm:text-4xl">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-base text-[#A67C72]">
                      <MapPin size={18} />
                      {project.location}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFD6E0] text-[#E98263] transition-all duration-300 group-hover:bg-[#FF8A65] group-hover:text-white"
                  >
                    <ArrowUpRight size={23} />
                  </Link>
                </div>

                <p className="mt-7 text-lg leading-8 text-[#7A6460]">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="mt-8 inline-flex items-center gap-3 text-base font-semibold text-[#FF8A65]"
                >
                  View Project
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-20 rounded-[2.5rem] bg-[#FFF1EB] p-8 sm:p-12">
          <p className="text-sm font-bold tracking-[0.22em] text-[#A67C72]">
            PORTFOLIO
          </p>

          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h3 className="max-w-4xl text-4xl font-semibold leading-tight text-[#5B4B4B] sm:text-5xl">
              Every project begins with a
              <span className="text-[#FF8A65]"> unique story.</span>
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