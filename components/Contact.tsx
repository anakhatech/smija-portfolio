"use client";

import { useEffect, useRef, useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#e8ded0] px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className={`absolute -left-48 bottom-0 h-[38rem] w-[38rem] rounded-full bg-[#9a7052]/20 blur-3xl transition-all duration-[2000ms] ${
          visible
            ? "translate-x-0 opacity-100"
            : "-translate-x-40 opacity-0"
        }`}
      />

      <div
        className={`absolute -right-48 top-0 h-[36rem] w-[36rem] rounded-full bg-[#6f4b38]/15 blur-3xl transition-all duration-[2200ms] ${
          visible
            ? "translate-x-0 opacity-100"
            : "translate-x-40 opacity-0"
        }`}
      />

      {/* Floating luxury circles */}

      <div
        className={`pointer-events-none absolute right-[8%] top-[12%] hidden h-80 w-80 rounded-full border border-[#9a7052]/20 transition-all duration-[2500ms] lg:block ${
          visible
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-45 scale-50 opacity-0"
        }`}
      />

     

      {/* Floating glow */}

      <div className="pointer-events-none absolute right-[20%] top-[18%] h-24 w-24 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-[#cfa67f]/15 blur-2xl" />

      <div className="pointer-events-none absolute bottom-[20%] left-[20%] h-20 w-20 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#79513b]/15 blur-2xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <div
          className={`grid gap-10 transition-all duration-[1200ms] lg:grid-cols-[1fr_0.8fr] lg:items-end ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div>
            {/* SECTION NUMBER */}

            <div className="mb-7 flex items-center gap-5">
              <span className="text-4xl font-semibold tracking-[0.08em] text-[#8A6048] sm:text-5xl">
                06
              </span>

              <span
                className={`h-[2px] bg-[#9A7052] transition-all delay-300 duration-1000 ${
                  visible ? "w-16" : "w-0"
                }`}
              />

              <span className="text-xl font-bold tracking-[0.28em] text-[#382A22] sm:text-2xl">
                CONTACT
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="max-w-5xl text-5xl leading-[1.02] text-[#332A25] sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Let&apos;s create
              <span className="block text-[#7B523B]">
                something meaningful.
              </span>
            </h2>
          </div>

          {/* HEADER DESCRIPTION */}

          <div
            className={`border-l-[3px] border-[#9A7052] pl-6 transition-all delay-300 duration-[1200ms ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <p className="max-w-xl text-xl leading-9 text-[#6b5548] lg:ml-auto">
              Have a project, collaboration or opportunity in mind?
              Let&apos;s connect and discuss how ideas can become
              thoughtfully designed spaces.
            </p>
          </div>
        </div>

        {/* ================= CONTACT CONTENT ================= */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= LEFT SIDE ================= */}

          <div
            className={`relative overflow-hidden rounded-[2.5rem] bg-[#382a22] p-8 shadow-2xl transition-all duration-[1300ms] sm:p-12 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{
              transitionDelay: "200ms",
            }}
          >
            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#cfaf93]/20 animate-[spin_30s_linear_infinite]" />

            <div className="pointer-events-none absolute -right-10 top-16 h-48 w-48 rounded-full border border-[#cfaf93]/20 animate-[spin_20s_linear_infinite_reverse]" />

            {/* Glow */}

            <div className="pointer-events-none absolute bottom-10 left-10 h-32 w-32 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#9a7052]/10 blur-3xl" />

            <div className="relative">

              {/* SMALL TITLE */}

              <div
                className={`flex items-center gap-4 transition-all duration-1000 ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: "500ms",
                }}
              >
                <div className="h-px w-10 bg-[#cfaf93]" />

                <p className="text-sm font-bold tracking-[0.22em] text-[#cfaf93]">
                  GET IN TOUCH
                </p>
              </div>

              {/* TITLE */}

              <h3
                className={`mt-7 max-w-lg text-4xl font-semibold leading-tight text-[#f7efe7] transition-all duration-[1200ms] sm:text-5xl ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  fontFamily: "Georgia, serif",
                  transitionDelay: "600ms",
                }}
              >
                Let&apos;s talk about your
                <span className="text-[#cfaf93]">
                  {" "}next project.
                </span>
              </h3>

              {/* CONTACT CARDS */}

              <div className="mt-12 space-y-5">

                {/* EMAIL */}

                <a
                  href="mailto:smijavijayan1@gmail.com"
                  className={`group flex items-center gap-5 rounded-2xl border border-[#cfaf93]/20 bg-white/5 p-5 transition-all duration-700 hover:-translate-y-2 hover:border-[#cfaf93]/50 hover:bg-white/10 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "700ms",
                  }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#9a7052] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Mail
                      size={22}
                      className="text-[#f7efe7]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.16em] text-[#cfaf93]">
                      EMAIL
                    </p>

                    <p className="mt-1 break-all text-base text-[#f7efe7]">
                      smijavijayan1@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="ml-auto shrink-0 text-[#cfaf93] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                {/* PHONE */}

                <a
                  href="tel:+971555823354"
                  className={`group flex items-center gap-5 rounded-2xl border border-[#cfaf93]/20 bg-white/5 p-5 transition-all duration-700 hover:-translate-y-2 hover:border-[#cfaf93]/50 hover:bg-white/10 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "850ms",
                  }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#79513b] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Phone
                      size={22}
                      className="text-[#f7efe7]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-[#cfaf93]">
                      PHONE
                    </p>

                    <p className="mt-1 text-base text-[#f7efe7]">
                      +971-55-582-3354
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="ml-auto shrink-0 text-[#cfaf93] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                {/* LOCATION */}

                <div
                  className={`group flex items-center gap-5 rounded-2xl border border-[#cfaf93]/20 bg-white/5 p-5 transition-all duration-700 hover:-translate-y-2 hover:border-[#cfaf93]/50 hover:bg-white/10 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "1000ms",
                  }}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#a87959] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <MapPin
                      size={22}
                      className="text-[#f7efe7]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold tracking-[0.16em] text-[#cfaf93]">
                      LOCATION
                    </p>

                    <p className="mt-1 text-base text-[#f7efe7]">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* AVAILABILITY */}

              <div
                className={`mt-12 flex items-center gap-3 transition-all duration-1000 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: "1150ms",
                }}
              >
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#cfaf93] shadow-[0_0_15px_4px_rgba(207,175,147,0.35)]" />

                <span className="text-xs font-bold tracking-[0.2em] text-[#cfaf93]">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE FORM ================= */}

          <div
            className={`rounded-[2.5rem] border border-[#c9ad97] bg-[#f5eee5]/90 p-8 shadow-[0_20px_60px_rgba(67,43,30,0.10)] transition-all duration-[1300ms] sm:p-12 ${
              visible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            style={{
              transitionDelay: "250ms",
            }}
          >

            {/* FORM HEADER */}

            <div
              className={`flex items-center gap-4 transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "500ms",
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8b6248] text-[#f7efe7] shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-6">
                <Send size={19} />
              </div>

              <p className="text-sm font-bold tracking-[0.22em] text-[#8b6248]">
                SEND A MESSAGE
              </p>
            </div>

            <h3
              className={`mt-7 text-4xl font-semibold text-[#382a22] transition-all duration-1000 sm:text-5xl ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                fontFamily: "Georgia, serif",
                transitionDelay: "600ms",
              }}
            >
              Start a conversation.
            </h3>

            <p
              className={`mt-4 max-w-xl text-base leading-7 text-[#6b5548] transition-all duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: "700ms",
              }}
            >
              Share a few details about your project or enquiry and
              let&apos;s explore how we can work together.
            </p>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              <div className="grid gap-6 sm:grid-cols-2">

                {/* NAME */}

                <div
                  className={`transition-all duration-700 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "800ms",
                  }}
                >
                  <label className="mb-3 block text-xs font-bold tracking-[0.14em] text-[#79513b]">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[#cdb5a2] bg-[#e8ded0]/60 px-5 py-4 text-[#382a22] outline-none transition-all duration-300 placeholder:text-[#9b8273] focus:-translate-y-1 focus:border-[#8b6248] focus:ring-2 focus:ring-[#9a7052]/15"
                  />
                </div>

                {/* EMAIL */}

                <div
                  className={`transition-all duration-700 ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: "900ms",
                  }}
                >
                  <label className="mb-3 block text-xs font-bold tracking-[0.14em] text-[#79513b]">
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[#cdb5a2] bg-[#e8ded0]/60 px-5 py-4 text-[#382a22] outline-none transition-all duration-300 placeholder:text-[#9b8273] focus:-translate-y-1 focus:border-[#8b6248] focus:ring-2 focus:ring-[#9a7052]/15"
                  />
                </div>
              </div>

              {/* SUBJECT */}

              <div
                className={`transition-all duration-700 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: "1000ms",
                }}
              >
                <label className="mb-3 block text-xs font-bold tracking-[0.14em] text-[#79513b]">
                  SUBJECT
                </label>

                <input
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#cdb5a2] bg-[#e8ded0]/60 px-5 py-4 text-[#382a22] outline-none transition-all duration-300 placeholder:text-[#9b8273] focus:-translate-y-1 focus:border-[#8b6248] focus:ring-2 focus:ring-[#9a7052]/15"
                />
              </div>

              {/* MESSAGE */}

              <div
                className={`transition-all duration-700 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: "1100ms",
                }}
              >
                <label className="mb-3 block text-xs font-bold tracking-[0.14em] text-[#79513b]">
                  MESSAGE
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project or enquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-none rounded-xl border border-[#cdb5a2] bg-[#e8ded0]/60 px-5 py-4 text-[#382a22] outline-none transition-all duration-300 placeholder:text-[#9b8273] focus:-translate-y-1 focus:border-[#8b6248] focus:ring-2 focus:ring-[#9a7052]/15"
                />
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className={`group mt-3 flex items-center gap-3 rounded-full bg-[#382a22] px-8 py-4 text-sm font-bold tracking-[0.08em] text-[#f7efe7] transition-all duration-500 hover:-translate-y-2 hover:bg-[#79513b] hover:shadow-[0_20px_40px_rgba(56,42,34,0.25)] ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: "1200ms",
                }}
              >
                SEND MESSAGE

                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div
          className={`mt-20 border-t border-[#b99c86]/60 pt-10 transition-all duration-[1200ms] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          style={{
            transitionDelay: "700ms",
          }}
        >
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <p
              className="max-w-3xl text-2xl leading-relaxed text-[#5a4032] sm:text-3xl"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Great spaces begin with a conversation,
              <span className="text-[#9a7052]">
                {" "}and every conversation begins with an idea.
              </span>
            </p>

            </div>
          </div>
        </div>
    </section>
  );
}