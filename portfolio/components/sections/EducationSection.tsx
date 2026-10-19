"use client";

import { instrumentSerif } from "@/lib/fonts";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";

const coursework = [
  { code: "01", title: "Data Structures", domain: "Core CS" },
  { code: "02", title: "Algorithms", domain: "Computation" },
  { code: "03", title: "Database Management Systems", domain: "Data Architecture" },
  { code: "04", title: "Web Technologies", domain: "Full-Stack" },
  { code: "05", title: "Systems Programming", domain: "Low-Level / OS" },
  { code: "06", title: "Network Protocols", domain: "Distributed Systems" },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-black/10 bg-white px-5 py-16 text-black sm:px-10 sm:py-24 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/45">
              Academic Foundation / 2023–2027
            </p>
            <h2
              className={`${instrumentSerif.className} mt-2 text-5xl tracking-tight text-black sm:text-6xl`}
            >
              Education<span className="text-black/30">.</span>
            </h2>
          </div>

          <p className="max-w-[44ch] text-xs leading-relaxed text-black/60 sm:text-sm">
            Undergraduate engineering foundation with a practical, ship-first
            emphasis across systems, data architecture, and the modern web.
          </p>
        </motion.div>

        {/* Main 12-Column Architectural Bento */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-8">
          {/* Left Column: Primary Degree Dossier Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-[28px] bg-[#f5f4f1] p-7 sm:p-10 lg:col-span-7"
          >
            <div>
              {/* Top Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-black uppercase">
                  <GraduationCap size={14} className="text-black/70" />
                  2023 — 2027
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-black/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  Final Year · B.Tech
                </span>
              </div>

              {/* Degree & Institution */}
              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-black/45">
                  Bachelor of Technology
                </p>
                <h3
                  className={`${instrumentSerif.className} mt-2 text-3xl leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[2.75rem]`}
                >
                  Computer Science &amp; Engineering
                </h3>
                <p className="mt-3 text-base font-medium text-black/75 sm:text-lg">
                  College of Engineering, Chengannur
                </p>
              </div>
            </div>

            {/* Bottom Ledger Details */}
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Location
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-black/75">
                  <MapPin size={13} className="text-black/45" />
                  Chengannur, Kerala
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Program Mode
                </p>
                <p className="mt-1 text-xs font-medium text-black/75">
                  Full-Time · Honours Track
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">
                  Primary Focus
                </p>
                <p className="mt-1 text-xs font-medium text-black/75">
                  Systems, AI &amp; Web Engineering
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Indexed Core Coursework Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-[28px] border border-black/10 bg-white p-6 sm:p-8 lg:col-span-5"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-4">
              <div className="flex items-center gap-2">
                <BookOpen size={15} className="text-black/50" />
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/60">
                  Core Coursework
                </h4>
              </div>
              <span className="font-mono text-[11px] text-black/40">
                06 SUBJECTS
              </span>
            </div>

            <div className="my-auto grid grid-cols-1 gap-2.5 py-5 sm:grid-cols-2">
              {coursework.map((course) => (
                <div
                  key={course.title}
                  className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-[#f5f4f1]/50 p-4 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-black/35 transition-colors group-hover:text-white/50">
                      {course.code}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-black/40 transition-colors group-hover:text-white/60">
                      {course.domain}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold leading-snug tracking-tight text-black transition-colors group-hover:text-white sm:text-sm">
                    {course.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-black/10 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/40">
                Theory + Lab Practicum
              </span>
              <span className="font-mono text-[10px] text-black/40">
                CSE · CEC
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}