"use client";

import { motion } from "framer-motion";

const coursework = [
  "Data Structures", "Algorithms", "Database Management Systems", 
  "Web Technologies", "Systems Programming", "Network Protocols"
];

export default function EducationSection() {
  return (
    <section id="education" className="py-32 px-6 bg-surface relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">Education</h2>
          <div className="w-16 h-[2px] bg-foreground" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="border border-border bg-background p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6 border-b border-border pb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                Bachelor of Technology
              </h3>
              <p className="text-foreground-muted font-light">
                College of Engineering, Chengannur
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block border border-foreground px-4 py-1 text-xs font-bold tracking-widest uppercase text-foreground">
                2023 &mdash; 2027
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground-muted mb-6">Core Coursework</h4>
            <div className="flex flex-wrap gap-3">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="bg-surface border border-border px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
