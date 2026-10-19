"use client";

import { instrumentSerif } from "@/lib/fonts";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    index: "01",
    company: "Platano Learn",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 — Present",
    description:
      "Optimized React component lifecycle and streamlined frontend API consumption layers using Supabase.",
    location: "Remote",
    current: true,
    skills: ["React", "Supabase", "TypeScript", "API Optimization"],
  },
  {
    index: "02",
    company: "FOCES",
    role: "Project Intern",
    period: "Aug 2025 — Dec 2025",
    description:
      "Engineered backend architecture for PharmaNear, integrating map-based routing services with Express & MongoDB.",
    location: "Chengannur",
    current: false,
    skills: ["Express.js", "MongoDB", "Spatial Routing", "REST APIs"],
  },
  {
    index: "03",
    company: "Prodigy InfoTech",
    role: "Web Development Intern",
    period: "Aug 2025 — Sep 2025",
    description:
      "Executed backend software engineering objectives under standard engineering structures.",
    location: "Remote",
    current: false,
    skills: ["Node.js", "Backend Architecture", "RESTful Services"],
  },
  {
    index: "04",
    company: "Cognifyz Technologies",
    role: "Web Development Intern",
    period: "Jun 2025 — Jul 2025",
    description:
      "Optimized backend logic and user interfaces during daily feature sprints.",
    location: "Remote",
    current: false,
    skills: ["Full-Stack", "UI Optimization", "Agile Sprints"],
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 35%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-black/10 bg-white px-5 py-16 text-black sm:px-10 sm:py-24 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Sticky Editorial Header & Summary Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-24"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/45">
                Career history / 2025–2026
              </p>

              <h2
                className={`${instrumentSerif.className} mt-2 text-5xl tracking-tight text-black sm:text-6xl`}
              >
                Experience<span className="text-black/30">.</span>
              </h2>

              <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-black/60">
                Hands-on internships focused on shipping — from component
                lifecycle performance to spatial backend routing and production
                workflows.
              </p>

              {/* Editorial Bento Summary Box */}
              <div className="mt-8 rounded-[22px] bg-[#f5f4f1] p-6">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/45">
                    Current Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[10px] font-medium text-black">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
                    Active Role
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p
                      className={`${instrumentSerif.className} text-3xl text-black`}
                    >
                      04
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-black/45">
                      Internships
                    </p>
                  </div>
                  <div>
                    <p
                      className={`${instrumentSerif.className} text-3xl text-black`}
                    >
                      Full-Stack
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-black/45">
                      Primary Focus
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Scroll-Animated Experience Ledger */}
          <div ref={containerRef} className="relative lg:col-span-8">
            {/* Static Hairline Track */}
            <div className="absolute bottom-4 left-[15px] top-4 w-px bg-black/10 sm:left-[23px]" />

            {/* Spring-Animated Progress Track */}
            <motion.div
              className="absolute bottom-4 left-[15px] top-4 w-px origin-top bg-black sm:left-[23px]"
              style={{ scaleY }}
            />

            <div className="flex flex-col gap-5">
              {experiences.map((exp, idx) => (
                <motion.article
                  key={exp.company}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative pl-10 sm:pl-14"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[15px] top-8 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center sm:left-[23px]">
                    <span className="absolute h-5 w-5 rounded-full border border-black/15 bg-white transition-transform duration-300 group-hover:scale-110 group-hover:border-black" />
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "0px 0px -25% 0px" }}
                      transition={{ duration: 0.3 }}
                      className={`relative h-2 w-2 rounded-full ${
                        exp.current ? "bg-black" : "bg-black/60"
                      }`}
                    />
                  </div>

                  {/* Interactive Ledger Card */}
                  <div className="rounded-[24px] border border-black/[0.08] bg-[#f5f4f1]/65 p-6 transition-all duration-300 group-hover:border-black/20 group-hover:bg-white group-hover:shadow-[0_12px_36px_-12px_rgba(0,0,0,0.07)] sm:p-7">
                    {/* Top Row: Index + Period + Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-black/40">
                          {exp.index}
                        </span>
                        <span className="h-px w-4 bg-black/20" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/65">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="rounded-full bg-black px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white">
                            Current
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-1 font-mono text-[11px] text-black/45">
                        <MapPin size={12} className="text-black/35" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Middle Row: Role & Company */}
                    <div className="mt-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <div>
                        <h3
                          className={`${instrumentSerif.className} text-2xl tracking-tight text-black sm:text-[1.75rem]`}
                        >
                          {exp.company}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.12em] text-black/55">
                          {exp.role}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="hidden text-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black sm:block"
                      />
                    </div>

                    {/* Description */}
                    <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-black/65">
                      {exp.description}
                    </p>

                    {/* Bottom Row: Tech / Focus Pills */}
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-black/[0.07] pt-4">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-black/10 bg-white px-3 py-1 font-mono text-[11px] text-black/65 transition-colors group-hover:border-black/15"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}