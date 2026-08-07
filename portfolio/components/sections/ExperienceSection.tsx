"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Platano Learn",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - Present",
    description: "Optimized React component lifecycle management and streamlined frontend API consumption layers using Supabase.",
  },
  {
    company: "FOCES",
    role: "Project Intern",
    period: "Aug 2025 - Dec 2025",
    description: "Engineered backend architecture for PharmaNear, integrating map-based routing services using Express.js and MongoDB.",
  },
  {
    company: "Prodigy InfoTech",
    role: "Web Development Intern",
    period: "Aug 2025 - Sep 2025",
    description: "Executed backend software engineering objectives under standard engineering structures.",
  },
  {
    company: "Cognifyz Technologies",
    role: "Web Development Intern",
    period: "Jun 2025 - Jul 2025",
    description: "Optimized backend logic and user interfaces during daily feature sprints.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">Experience</h2>
          <div className="w-16 h-[2px] bg-foreground" />
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 relative pl-8 md:pl-12 last:mb-0"
            >
              <div className="absolute w-4 h-4 bg-background border-2 border-foreground rounded-full -left-[9px] top-1" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">{exp.company}</h3>
                <span className="text-xs font-bold tracking-widest text-foreground-faint uppercase mt-1 md:mt-0">{exp.period}</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground-muted mb-4">{exp.role}</h4>
              <p className="text-foreground-muted leading-relaxed font-light text-sm md:text-base">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
