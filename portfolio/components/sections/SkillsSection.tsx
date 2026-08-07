"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiC,
  SiDocker,
  SiExpress,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSequelize,
  SiShopify,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Sequelize", icon: SiSequelize },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Supabase", icon: SiSupabase },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "C / Systems", icon: SiC },
  { name: "Shopify", icon: SiShopify },
];

export default function SkillsSection() {
  const reducedMotion = useReducedMotion() ?? false;
  
  // Duplicate skills to create a seamless infinite scroll (4 copies)
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="tech-stack" className="py-32 px-0 bg-background relative overflow-hidden border-t border-border">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center flex flex-col items-center relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">Skills & Tools</h2>
          <div className="w-16 h-[2px] bg-foreground" />
        </motion.div>
      </div>

      {/* Infinite scrolling carousel */}
      <div 
        className="relative w-full flex overflow-hidden pb-12"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <motion.div
          animate={reducedMotion ? undefined : { x: ["0%", "-25%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-4 md:gap-6 w-max pl-4 md:pl-6"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 md:p-6 border border-border bg-surface hover:bg-foreground hover:text-background transition-colors duration-300 w-28 h-28 md:w-36 md:h-36 group cursor-default shrink-0"
            >
              <skill.icon className="w-8 h-8 md:w-12 md:h-12 mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
