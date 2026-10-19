
"use client";

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
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#0c0c0c] px-6 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/40">
              Selected work / 2025–2026
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Projects<span className="text-white/30">.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/50">
              A selection of projects exploring intelligent systems,
              backend engineering, and practical software development.
            </p>
          </div>

          <span className="font-mono text-xs text-white/40">
            04 PROJECTS
          </span>
        </motion.div>

        {/* Featured project */}
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 border-y border-white/10 py-7 sm:py-9"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs text-white/35">
                  01
                </span>
                <span className="h-px w-6 bg-white/20" />
                <span className="text-xs text-white/50">
                  Major Project
                </span>
              </div>

              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                {projects[0].title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                {projects[0].summary}
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                {projects[0].description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden text-xs text-white/30 md:block">
              FEATURED
            </span>
          </div>
        </motion.article>

        {/* Remaining projects */}
        <div className="divide-y divide-white/10">
          {projects.slice(1).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              className="group grid gap-4 py-7 sm:py-8 md:grid-cols-[56px_1fr_auto] md:gap-6"
            >
              <span className="pt-1 font-mono text-xs text-white/30">
                {project.number}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-white/75">
                    {project.title}
                  </h3>

                  <span className="text-xs text-white/35">
                    {project.category}
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/60">
                  {project.summary}
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="hidden text-white/30 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70 md:block"
              />
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
          <p className="text-xs text-white/35">
            Designed and built with curiosity.
          </p>

          <span className="font-mono text-xs text-white/30">
            01 — 04
          </span>
        </div>
      </div>
    </section>
  );
}
