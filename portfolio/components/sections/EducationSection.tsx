"use client";

import { motion } from "framer-motion";

const coursework = [
  "Data Structures",
  "Algorithms",
  "Database Management Systems",
  "Web Technologies",
  "Systems Programming",
  "Network Protocols",
];

export default function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden border-t border-white/5 bg-[#0c0c0d] px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_340px_at_85%_20%,rgba(255,255,255,0.05),transparent_65%)]" />

      <div className="container relative mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow">Education — 2023 → 2027 · Chengannur</p>
          <h2 className="mt-3 text-[clamp(30px,5vw,52px)] font-black tracking-[-0.05em] text-[#f5f3ef]">Education</h2>
          <p className="mx-auto mt-3 max-w-[56ch] text-sm leading-6 text-white/50">
            Undergraduate foundation with a practical, ship-first emphasis across systems, data, and the web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[20px] border border-white/10 bg-[#141416] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start md:justify-between md:p-10">
            <div className="min-w-0">
              <h3 className="text-[22px] font-black tracking-[-0.04em] text-white sm:text-[26px]">Bachelor of Technology</h3>
              <p className="mt-1.5 text-sm font-medium text-white/60">College of Engineering, Chengannur</p>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-white/35">Computer Science &amp; Engineering · Full-time</p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white px-4 py-2 font-mono text-xs font-bold tracking-[0.16em] text-black uppercase">
                2023 — 2027
              </span>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.02] px-6 py-6 sm:px-8 md:px-10">
            <h4 className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase">Core coursework</h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-[11px] font-semibold tracking-wide text-white/70 transition-colors hover:border-white/15 hover:bg-white/[0.07] hover:text-white"
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
