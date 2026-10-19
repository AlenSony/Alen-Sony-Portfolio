"use client";

import { instrumentSerif } from "@/lib/fonts";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI-Based Personalized Financial Advisor",
    summary:
      "A multi-agent system for expense analysis, risk profiling, and personalized financial guidance.",
    description:
      "Combines deterministic Python/ML analysis with LLM reasoning for expense categorization, anomaly detection, market monitoring, and investment recommendations.",
    tags: ["Flutter", "FastAPI", "LangGraph", "CrewAI"],
    category: "Major Project",
    number: "01",
    featured: true,
  },
  {
    title: "RailSeat Booking System",
    summary: "Interactive railway seat booking and allocation.",
    description:
      "Real-time seat selection, booking workflows, PDF ticket generation, and Razorpay payment integration.",
    tags: ["React", "Express.js", "Razorpay", "PDFKit"],
    category: "Full Stack",
    number: "02",
  },
  {
    title: "PharmaNear Tracker",
    summary: "A real-time medicine availability locator.",
    description:
      "Maps medicine stock availability using location-based discovery and spatial routing.",
    tags: ["Node.js", "MongoDB", "Maps API", "WebSockets"],
    category: "Full Stack",
    number: "03",
  },
  {
    title: "Novara E-Commerce",
    summary: "A modern e-commerce application.",
    description:
      "A technology-focused online store with JWT authentication, password hashing, and MongoDB integration.",
    tags: ["Next.js", "JWT", "Bcrypt", "MongoDB"],
    category: "Full Stack",
    number: "04",
  },
];

export default function ProjectsSection() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative flex min-h-dvh w-full flex-col justify-between border-t border-white/10 bg-[#0c0c0c] px-5 py-8 text-white sm:px-10 lg:h-dvh lg:overflow-hidden lg:px-14 lg:py-10"
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col justify-between">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Selected work / 2025–2026
            </p>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <h2
                className={`${instrumentSerif.className} text-4xl tracking-tight text-white sm:text-5xl`}
              >
                Projects<span className="text-white/30">.</span>
              </h2>
              <p className="max-w-md text-xs leading-relaxed text-white/50 sm:text-sm">
                Intelligent systems, backend engineering, and practical full-stack
                software.
              </p>
            </div>
          </div>

          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
            04 PROJECTS
          </span>
        </motion.div>

        {/* Main 12-Column Split Grid (Fits inside 100vh on desktop) */}
        <div className="my-auto grid grid-cols-1 gap-6 py-5 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          {/* Left Column: Featured Project Card */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-white/40">
                    {featured.number}
                  </span>
                  <span className="h-px w-5 bg-white/20" />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                    {featured.category}
                  </span>
                </div>

                <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/70">
                  Featured
                </span>
              </div>

              <h3
                className={`${instrumentSerif.className} text-2xl leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-[2.1rem]`}
              >
                {featured.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-relaxed text-white/75">
                {featured.summary}
              </p>

              <p className="mt-2.5 text-xs leading-relaxed text-white/45 sm:text-sm">
                {featured.description}
              </p>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.article>

          {/* Right Column: Remaining 3 Projects */}
          <div className="flex flex-col justify-between divide-y divide-white/10 lg:col-span-7">
            {others.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="group grid grid-cols-1 gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[36px_1fr_auto] sm:items-start sm:gap-4 lg:py-4"
              >
                <span className="pt-1 font-mono text-xs text-white/30">
                  {project.number}
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-medium tracking-tight text-white transition-colors group-hover:text-white/75 sm:text-xl">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/50">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">
                    {project.summary}{" "}
                    <span className="hidden text-white/40 xl:inline">
                      — {project.description}
                    </span>
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden pt-1 sm:block">
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="text-white/30 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <p className="text-xs text-white/35">
            Designed and built with curiosity.
          </p>

          <span className="font-mono text-[11px] tracking-[0.16em] text-white/35">
            01 — 04
          </span>
        </div>
      </div>
    </section>
  );
}