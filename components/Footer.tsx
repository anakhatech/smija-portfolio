import { ArrowUpRight, Mail, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#5B4B4B] px-6 pt-20 lg:px-10">
      {/* Decorative background */}
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#FF8A65]/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#DCD6FF]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-14 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-[#FFB59E]">
              SMIJA PAMPARACKAL SOMAN
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
              Designing spaces
              <span className="block text-[#FFB59E]">
                with purpose.
              </span>
            </h2>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#FF8A65] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Let&apos;s Work Together

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-3">
            <p className="text-sm font-bold tracking-[0.2em] text-[#FFB59E]">
              EXPLORE
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/10 pb-3 text-base text-white/75 transition hover:text-white"
                >
                  {link.name}

                  <ArrowUpRight
                    size={16}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>

            {/* Contact mini links */}
            <div className="mt-10 space-y-4">
              <a
                href="mailto:smijavijayan1@gmail.com"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Mail size={17} className="text-[#FFB59E]" />
                smijavijayan1@gmail.com
              </a>

              <a
                href="tel:+971555823354"
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Phone size={17} className="text-[#FFB59E]" />
                +971-55-582-3354
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Smija Pamparackal Soman. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition hover:text-[#FFB59E]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}