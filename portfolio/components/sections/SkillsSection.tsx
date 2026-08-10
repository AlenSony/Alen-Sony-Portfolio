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
    <section id="tech-stack" className="py-32 px-0 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center flex flex-col items-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">
            Skills & Tools
          </h2>
          <div className="w-16 h-[2px] bg-foreground" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mx-auto flex w-full max-w-2xl items-center justify-center overflow-hidden px-8 pb-16 pt-6 md:px-16 md:pb-20 md:pt-8"
        >
          {reducedMotion ? (
            <div className="flex flex-wrap justify-center gap-3 py-8">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded border border-border bg-surface-elevated px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground-muted"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          ) : (
            <div className="relative flex size-full min-h-[320px] md:min-h-[400px] items-center justify-center">
              <IconCloud iconSlugs={skillSlugs} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
