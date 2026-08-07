"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-32 px-6 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <span className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase mb-4">
            // Career History · {String(experiences.length).padStart(2, "0")} entries
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">Experience</h2>
          <div className="w-16 h-[2px] bg-foreground" />
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto py-10">
          {/* Track Line - Left on mobile, Center on desktop */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-border" />
          
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-foreground origin-top"
            style={{ scaleY }}
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 z-20 top-0 md:top-auto">
                    <div className="absolute w-3 h-3 rounded-full border-2 border-border bg-background" />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1.3 }}
                      viewport={{ once: false, margin: "0px 0px -50% 0px" }}
                      transition={{ duration: 0.3, ease: "backOut" }}
                      className="absolute w-3 h-3 rounded-full bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    />
                  </div>

                  {/* Desktop Empty Space (Alternating) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-1/2 pl-14 md:pl-0 pt-1 md:pt-0 ${
                      isEven ? 'md:pr-16 md:text-right order-1' : 'md:pl-16 md:text-left order-2'
                    }`}
                  >
                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-3`}>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight group-hover:underline underline-offset-4 decoration-2 decoration-foreground/30 transition-all">{exp.company}</h3>
                      <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase mt-2 opacity-70">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground-muted mb-4 inline-block px-3 py-1 border border-border group-hover:border-foreground/40 transition-colors">{exp.role}</h4>
                    <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
                      {exp.description}
                    </p>
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
