"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

const skills = [
  { name: "Python", slugs: ["python"] },
  { name: "React", slugs: ["react"] },
  { name: "Next.js", slugs: ["nextdotjs"] },
  { name: "Node.js", slugs: ["nodedotjs"] },
  { name: "Express.js", slugs: ["express"] },
  { name: "Sequelize", slugs: ["sequelize"] },
  { name: "PostgreSQL", slugs: ["postgresql"] },
  { name: "MongoDB", slugs: ["mongodb"] },
  { name: "Supabase", slugs: ["supabase"] },
  { name: "Tailwind CSS", slugs: ["tailwindcss"] },
  { name: "OpenCV / YOLO", slugs: ["opencv", "ultralytics"] },
  { name: "Docker", slugs: ["docker"] },
  { name: "Git", slugs: ["git"] },
  { name: "C / Systems", slugs: ["c"] },
  { name: "Shopify", slugs: ["shopify"] },
] as const;

const skillSlugs = skills.flatMap((skill) => skill.slugs);

export default function SkillsSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section id="tech-stack" className="relative overflow-hidden border-t border-white/5 bg-[#0c0c0d] px-6 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(760px_380px_at_80%_35%,rgba(255,255,255,0.05),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] grid-lines" />

      <div className="container relative mx-auto max-w-[1320px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5"
          >
            <p className="eyebrow">Tech stack — 15 tools · product-grade</p>
            <h2 className="mt-3 text-[clamp(30px,5vw,48px)] font-black tracking-[-0.05em] text-[#f5f3ef]">
              Skills &amp; Tools
            </h2>
            <p className="mt-4 max-w-[42ch] text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
              A lean, shipping-oriented stack — from systems and data to interfaces. The cloud is interactive on
              desktop; on mobile it degrades to a tidy, readable grid.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skills.slice(0, 7).map((s) => (
                <span
                  key={s.name}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-white/60"
                >
                  {s.name}
                </span>
              ))}
              <span className="rounded-full border border-white/10 bg-white px-3 py-1.5 font-mono text-[11px] font-bold tracking-widest text-black uppercase">
                + {skills.length - 7} more
              </span>
            </div>

            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <span className="h-px w-10 bg-white/10" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/30 uppercase">Drag the orb · hover to inspect</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-7"
          >
            <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#141416] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">Interactive orb</span>
                <span className="font-mono text-[10px] tracking-wide text-white/30">15 icons · auto-rotation</span>
              </div>

              {reducedMotion ? (
                <div className="flex flex-wrap justify-center gap-2.5 p-6 sm:p-8">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold tracking-wide text-white/75"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="relative flex min-h-[340px] items-center justify-center px-2 py-6 sm:min-h-[420px] sm:px-4 sm:py-8">
                  <IconCloud iconSlugs={skillSlugs} />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
