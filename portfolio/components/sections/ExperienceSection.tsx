"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Platano Learn",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 — Present",
    description: "Optimized React component lifecycle and streamlined frontend API consumption layers using Supabase.",
    location: "Remote",
  },
  {
    company: "FOCES",
    role: "Project Intern",
    period: "Aug 2025 — Dec 2025",
    description: "Engineered backend architecture for PharmaNear, integrating map-based routing services with Express & MongoDB.",
    location: "Chengannur",
  },
  {
    company: "Prodigy InfoTech",
    role: "Web Development Intern",
    period: "Aug 2025 — Sep 2025",
    description: "Executed backend software engineering objectives under standard engineering structures.",
    location: "Remote",
  },
  {
    company: "Cognifyz Technologies",
    role: "Web Development Intern",
    period: "Jun 2025 — Jul 2025",
    description: "Optimized backend logic and user interfaces during daily feature sprints.",
    location: "Remote",
  },
];

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 40%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/5 bg-[#0a0a0b] px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_380px_at_20%_12%,rgba(255,255,255,0.05),transparent_65%)]" />

      <div className="container relative mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="eyebrow">Career history — 04 entries · most recent first</p>
            <h2 className="mt-3 text-[clamp(30px,5vw,52px)] font-black tracking-[-0.05em] text-[#f5f3ef]">Experience</h2>
          </div>
          <p className="max-w-[42ch] text-sm leading-6 text-white/50">
            Hands-on internships focused on shipping — from component performance to backend routing and production workflows.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mx-auto mt-12 max-w-5xl py-6">
          {/* Track */}
          <div className="absolute bottom-0 left-[14px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
          <motion.div
            className="absolute bottom-0 left-[14px] top-0 w-px origin-top bg-[#f5f3ef] md:left-1/2 md:-translate-x-px"
            style={{ scaleY }}
          />

          <div className="flex flex-col gap-10 md:gap-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.company} className="relative flex flex-col md:flex-row md:items-stretch">
                  {/* Dot */}
                  <div className="absolute left-[14px] top-2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center md:left-1/2 md:top-7">
                    <span className="absolute h-6 w-6 rounded-full border border-white/10 bg-[#0a0a0b]" />
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "0px 0px -30% 0px" }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="relative h-2.5 w-2.5 rounded-full bg-[#f5f3ef] shadow-[0_0_14px_rgba(245,243,239,0.35)]"
                    />
                  </div>

                  <div className={`hidden w-1/2 md:block ${isEven ? "order-2" : "order-1"}`} />

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full pl-10 md:w-1/2 md:pl-0 ${isEven ? "md:order-1 md:pr-10 md:text-right" : "md:order-2 md:pl-10 md:text-left"}`}
                  >
                    <div className={`spotlight-card rounded-2xl border border-white/5 bg-[#141416] p-6 text-left sm:p-7 ${isEven ? "md:items-end" : ""}`}>
                      <div className={`flex flex-wrap items-start justify-between gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <h3 className="text-[18px] font-bold tracking-[-0.03em] text-white sm:text-[20px]">{exp.company}</h3>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/55 uppercase">
                          {exp.period}
                        </span>
                      </div>
                      <div className={`mt-3 flex flex-wrap items-center gap-2 ${isEven ? "md:justify-end" : ""}`}>
                        <span className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.14em] text-white/60 uppercase">
                          {exp.role}
                        </span>
                        <span className="font-mono text-[10px] tracking-wide text-white/30">{exp.location}</span>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/55">{exp.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
