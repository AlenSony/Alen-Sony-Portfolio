"use client";

import { motion } from "framer-motion";
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
  SiTailwindcss
} from "react-icons/si";

const techs = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "OpenCV / YOLO", icon: SiOpencv, color: "#5C3EE6" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "C / Systems", icon: SiC, color: "#A8B9CC" },
  { name: "Shopify", icon: SiShopify, color: "#96BF48" },
];

export default function TechStackSection() {
  // Split the array into two rows for dynamic visual weight
  const row1 = techs.slice(0, 8);
  const row2 = techs.slice(8);

  // Duplicate the arrays 4 times to ensure they easily fill up ultrawide monitors before looping.
  // Shifting by -25% moves exactly 1 original array length, causing a perfect seamless loop.
  const dupRow1 = [...row1, ...row1, ...row1, ...row1];
  const dupRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="tech-stack" className="py-24 bg-[var(--background)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">Tech Stack</h2>
          <p className="mt-4 text-lg text-gray-600">The tools I use to build scalable systems</p>
        </motion.div>
      </div>

      {/* Marquee Wrapper with Edge Fades */}
      <div 
        className="relative w-full flex flex-col gap-8 pb-12 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        {/* Row 1: Left to Right */}
        <motion.div
          animate={{ x: ["-25%", "0%"] }} // start shifted left, move right to 0%
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-4 md:gap-8 w-max pl-4"
        >
          {dupRow1.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center w-24 h-24 md:w-36 md:h-36 bg-[var(--background)] neo-shadow rounded-2xl md:rounded-3xl group cursor-pointer shrink-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100 neo-shadow-pressed z-0"></div>
              <div className="relative z-10 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                <tech.icon className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2 md:mt-4 text-[10px] md:text-sm font-bold text-[var(--foreground)] opacity-70 group-hover:opacity-100 relative z-10 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Row 2: Right to Left */}
        <motion.div
          animate={{ x: ["0%", "-25%"] }} // start at 0%, move left to -25%
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex gap-4 md:gap-8 w-max pr-4"
        >
          {dupRow2.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center w-24 h-24 md:w-36 md:h-36 bg-[var(--background)] neo-shadow rounded-2xl md:rounded-3xl group cursor-pointer shrink-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100 neo-shadow-pressed z-0"></div>
              <div className="relative z-10 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                <tech.icon className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="mt-2 md:mt-4 text-[10px] md:text-sm font-bold text-[var(--foreground)] opacity-70 group-hover:opacity-100 relative z-10 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}