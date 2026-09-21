"use client";

import { motion } from "framer-motion";

const projects = [
  {
  title: "AI-Based Personalized Financial Advisor",
  summary: "Multi-agent system for expense analysis, risk profiling, and personalized investment guidance.",
  description:
    "A multi-agent financial advisory app with specialized agents for expense categorization, risk profiling, anomaly detection, market monitoring, and investment and loan recommendations. Deterministic Python/ML handles categorization and anomaly detection, while LLM reasoning is reserved for synthesis and explanation.",
  tags: ["Flutter", "FastAPI", "LangGraph", "CrewAI", "Multi-Agent Systems"],
  featured: true,
  meta: "Case 01 — Major Project",
},
  {
    title: "RailSeat Booking System",
    summary: "Interactive real-time seat map with booking, PDF pipelines, and payments.",
    description:
      "Features an interactive real-time seat configuration map, auto-generation booking algorithm, PDF pipelines, and secure Razorpay integration.",
    tags: ["React", "Express.js", "Razorpay", "PDFKit"],
    featured: false,
    meta: "Case 02 — Shipped",
  },
  {
    title: "PharmaNear Tracker",
    summary: "Dual-interface medicine locator with low-latency spatial routing.",
    description:
      "A dual-interface real-time medicine locator that maps physical stock distributions directly onto client maps with low-latency spatial routing logic.",
    tags: ["Node.js", "MongoDB", "Maps API", "WebSockets"],
    featured: false,
    meta: "Case 03 — Shipped",
  },
  {
    title: "Novara E-Commerce",
    summary: "Modern store with JWT auth and hardened credential flow.",
    description:
      "A modern tech e-commerce experience implementing JWT session authorization and Bcrypt.",
    tags: ["Next.js", "JWT", "Bcrypt", "MongoDB"],
    featured: false,
    meta: "Case 04 — Shipped",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-white/5 bg-[#0c0c0d] px-6 py-20 sm:py-28">
      {/* Ambient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_75%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] grid-lines" />

      <div className="container relative mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="eyebrow">Selected work — 04 cases · systems &amp; interfaces</p>
            <h2 className="mt-3 text-[clamp(30px,5vw,52px)] font-black tracking-[-0.05em] text-[#f5f3ef]">Projects</h2>
            <p className="mt-3 max-w-[52ch] text-[14px] leading-6 text-white/55 sm:text-[15px]">
              A compact dossier of shipped systems — each one an exercise in reliability, speed, and craft. The first
              is the current focus.
            </p>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <span className="h-px w-12 bg-white/10" />
            <span className="font-mono text-[11px] tracking-[0.18em] text-white/35 uppercase">Index 02</span>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Featured */}
          {projects
            .filter((p) => p.featured)
            .map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.6 }}
                className="group relative flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.06] backdrop-blur-xl lg:col-span-7 spotlight-card"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-60" />
                <div className="relative flex h-full flex-col p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-white/60 uppercase">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                      Featured
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.16em] text-white/35 uppercase">{project.meta}</span>
                  </div>
                  <h3 className="mt-6 text-[28px] font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[32px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-white/70">{project.summary}</p>
                  <p className="mt-3 text-sm leading-6 text-white/50">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.12em] text-white/70 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-3 pt-8 font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">
                    <span className="h-px w-8 bg-white/15" />
                    Multi-agent · 2025–2026
                  </div>
                </div>
              </motion.article>
            ))}

          {/* Stack column — two cards */}
          <div className="grid gap-6 lg:col-span-5">
            {projects
              .filter((p) => !p.featured)
              .slice(0, 2)
              .map((project, idx) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="group relative flex flex-col overflow-hidden rounded-[18px] border border-white/5 bg-[#141416] p-6 spotlight-card sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase">{project.meta}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold leading-tight tracking-[-0.03em] text-white">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest text-white/55 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
          </div>

          {/* Full-width fourth */}
          {projects
            .filter((p) => !p.featured)
            .slice(2)
            .map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="group relative overflow-hidden rounded-[18px] border border-white/5 bg-[#141416] p-6 sm:p-7 lg:col-span-12 spotlight-card"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase">{project.meta}</span>
                    <h3 className="mt-2 text-[22px] font-bold tracking-[-0.03em] text-white">{project.title}</h3>
                    <p className="mt-2 max-w-[70ch] text-sm leading-6 text-white/55">{project.description}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2 lg:max-w-[320px] lg:justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-white/55 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
