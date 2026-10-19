"use client";

import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { instrumentSerif } from "@/lib/fonts";
import { motion, useReducedMotion } from "framer-motion";

const skills = [
  { name: "Python", slugs: ["python"], group: "Languages & systems" },
  { name: "C / Systems", slugs: ["c"], group: "Languages & systems" },
  { name: "OpenCV / YOLO", slugs: ["opencv", "ultralytics"], group: "Languages & systems" },

  { name: "React", slugs: ["react"], group: "Frontend" },
  { name: "Next.js", slugs: ["nextdotjs"], group: "Frontend" },
  { name: "Tailwind CSS", slugs: ["tailwindcss"], group: "Frontend" },

  { name: "Node.js", slugs: ["nodedotjs"], group: "Backend & data" },
  { name: "Express.js", slugs: ["express"], group: "Backend & data" },
  { name: "Sequelize", slugs: ["sequelize"], group: "Backend & data" },
  { name: "PostgreSQL", slugs: ["postgresql"], group: "Backend & data" },
  { name: "MongoDB", slugs: ["mongodb"], group: "Backend & data" },
  { name: "Supabase", slugs: ["supabase"], group: "Backend & data" },

  { name: "Docker", slugs: ["docker"], group: "Tooling" },
  { name: "Git", slugs: ["git"], group: "Tooling" },
  { name: "Shopify", slugs: ["shopify"], group: "Tooling" },
] as const;

const groups = [
  "Frontend",
  "Backend & data",
  "Languages & systems",
  "Tooling",
] as const;

const skillSlugs = skills.flatMap((skill) => skill.slugs);

const EASE = [0.16, 1, 0.3, 1] as const;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[13px] leading-none text-white/70 transition-colors duration-300 hover:border-white/30 hover:text-white">
      {children}
    </span>
  );
}

export default function SkillsSection() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a] px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* ── Left: heading + grouped skills ── */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5"
          >
            <h2
              className={`${instrumentSerif.className} text-balance uppercase text-white`}
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              Skills &amp; Tools
            </h2>

            <div className="mt-10 space-y-6">
              {groups.map((group) => (
                <div key={group}>
                  <h3
                    className={`${instrumentSerif.className} mb-3 text-lg text-white/45`}
                  >
                    {group}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {skills
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <li key={s.name}>
                          <Chip>{s.name}</Chip>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: orb in a panel that matches the hero card ── */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="relative lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.05] bg-[#131313]">
              {/* soft centre glow behind the orb */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side_at_50%_50%,rgba(255,255,255,0.07),transparent_75%)]"
              />

              {reducedMotion ? (
                <div className="relative flex flex-wrap justify-center gap-2.5 p-8 sm:p-12">
                  {skills.map((skill) => (
                    <Chip key={skill.name}>{skill.name}</Chip>
                  ))}
                </div>
              ) : (
                <div className="relative flex min-h-[360px] items-center justify-center px-2 py-8 sm:min-h-[460px] sm:px-6 lg:min-h-[540px]">
                  <div className="w-full max-w-[520px]">
                    <IconCloud iconSlugs={skillSlugs} />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}