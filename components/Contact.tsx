import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF9F5] px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* Background decorations */}
      <div className="absolute -left-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#FFD6E0]/30 blur-3xl" />

      <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[#BFE3FF]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded-full bg-[#FF8A65]" />

              <p className="text-base font-bold tracking-[0.25em] text-[#A67C72]">
                06 — CONTACT
              </p>
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[#5B4B4B] sm:text-6xl lg:text-7xl">
              Let&apos;s create
              <span className="block text-[#FF8A65]">
                something meaningful.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-9 text-[#7A6460] lg:ml-auto">
            Have a project, collaboration or opportunity in mind?
            Let&apos;s connect and discuss how ideas can become
            thoughtfully designed spaces.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* LEFT SIDE */}
          <div className="rounded-[2.5rem] bg-[#5B4B4B] p-8 sm:p-12">
            <p className="text-sm font-bold tracking-[0.22em] text-[#FFB59E]">
              GET IN TOUCH
            </p>

            <h3 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let&apos;s talk about your next project.
            </h3>

            <div className="mt-12 space-y-6">

              {/* EMAIL */}
              <a
                href="mailto:smijavijayan1@gmail.com"
                className="group flex items-center gap-5 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF8A65]">
                  <Mail size={22} className="text-white" />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-[#FFB59E]">
                    EMAIL
                  </p>

                  <p className="mt-1 text-base text-white">
                    smijavijayan1@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="ml-auto shrink-0 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* PHONE */}
              <a
                href="tel:+971555823354"
                className="group flex items-center gap-5 rounded-2xl bg-white/10 p-5 transition hover:bg-white/15"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#BFE3FF]">
                  <Phone size={22} className="text-[#63879D]" />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-[#BFE3FF]">
                    PHONE
                  </p>

                  <p className="mt-1 text-base text-white">
                    +971-55-582-3354
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="ml-auto shrink-0 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-5 rounded-2xl bg-white/10 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#DCD6FF]">
                  <MapPin size={22} className="text-[#766A9C]" />
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-[#DCD6FF]">
                    LOCATION
                  </p>

                  <p className="mt-1 text-base text-white">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <div className="rounded-[2.5rem] border border-[#F1E2DD] bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-bold tracking-[0.22em] text-[#A67C72]">
              SEND A MESSAGE
            </p>

            <h3 className="mt-5 text-4xl font-semibold text-[#5B4B4B]">
              Start a conversation.
            </h3>

            <form className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#5B4B4B]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#EADDD8] bg-[#FFF9F5] px-5 py-4 outline-none transition focus:border-[#FF8A65]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#5B4B4B]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#EADDD8] bg-[#FFF9F5] px-5 py-4 outline-none transition focus:border-[#FF8A65]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5B4B4B]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-[#EADDD8] bg-[#FFF9F5] px-5 py-4 outline-none transition focus:border-[#FF8A65]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#5B4B4B]">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell me about your project or enquiry..."
                  className="w-full resize-none rounded-xl border border-[#EADDD8] bg-[#FFF9F5] px-5 py-4 outline-none transition focus:border-[#FF8A65]"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 rounded-full bg-[#FF8A65] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}