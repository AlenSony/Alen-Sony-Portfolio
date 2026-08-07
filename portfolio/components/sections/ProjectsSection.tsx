"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Logistics Platform",
    description: "An advanced backend system utilizing a multi-agent framework to solve complex logistics problems, automate workflows, and handle intelligent routing.",
    tags: ["Python", "Multi-Agent Systems", "AI", "Route Optimization"],
  },
  {
    title: "RailSeat Booking System",
    description: "Features an interactive real-time seat configuration map, auto-generation booking algorithm, pdfkit pipelines, and secure Razorpay integration.",
    tags: ["React", "Express.js", "Razorpay", "PDFKit"],
  },
  {
    title: "PharmaNear Tracker",
    description: "Built a dual-interface real-time medicine locator that maps physical stock distributions directly onto client maps with low-latency spatial routing logic.",
    tags: ["Node.js", "MongoDB", "Maps API", "WebSockets"],
  },
  {
    title: "Novara E-Commerce",
    description: "Built a modern tech e-commerce experience implementing JWT session authorization and Bcrypt credential hashing.",
    tags: ["Next.js", "JWT", "Bcrypt", "PostgreSQL"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 bg-surface relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">
            // Selected Work · {String(projects.length).padStart(2, "0")} entries
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">
            Projects
          </h2>
          <div className="w-16 h-[2px] bg-foreground" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative border border-border bg-background p-8 hover:border-foreground transition-colors duration-300 flex flex-col h-full"
            >
              {/* Corner brackets echoing the hero's HUD framing — appear on hover */}
              <span className="absolute -top-px -left-px w-4 h-4 border-t border-l border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:underline underline-offset-4 decoration-2 decoration-foreground">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground/50 shrink-0 ml-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-foreground-muted mb-8 leading-relaxed font-light text-sm md:text-base">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1.5 border border-border text-muted-foreground group-hover:text-foreground group-hover:border-foreground/40 transition-colors duration-300 text-[10px] font-mono uppercase font-bold tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}