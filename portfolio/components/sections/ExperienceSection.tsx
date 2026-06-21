"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaShoePrints } from "react-icons/fa";

const experiences = [
  {
    company: "Cognifyz Technologies",
    role: "Web Development Intern",
    period: "June 2025 - July 2025",
    description: "Optimized backend logic and user interfaces during daily feature sprints.",
  },
  {
    company: "Prodigy InfoTech",
    role: "Web Development Intern",
    period: "August 2025 - September 2025",
    description: "Executed backend software engineering objectives under standard engineering structures.",
  },
  {
    company: "FOCES",
    role: "Project Intern",
    period: "August 2025 - December 2025",
    description: "Engineered backend architecture for PharmaNear, integrating map-based routing services using Express.js and MongoDB.",
  },
  {
    company: "Platano Learn",
    role: "Full-Stack Developer Intern",
    period: "December 2025 - Present",
    description: "Optimized React component lifecycle management and streamlined frontend API consumption layers using Supabase.",
  },
];

// --- Footstep trail generation -------------------------------------------
// Seeded PRNG so the "random" placement is identical on server and client
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type FootstepConfig = {
  id: number;
  t: number;
  xPct: number;
  yPct: number;
  rotation: number;
  xOffset: number;
  yOffset: number;
  scale: number;
};

const STEPS_PER_SECTION = 6;

function Footstep({
  drawT,
  step,
  revealWindow,
}: {
  drawT: MotionValue<number>;
  step: FootstepConfig;
  revealWindow: number;
}) {
  const start = step.t - revealWindow;
  const opacity = useTransform(drawT, [start, step.t], [0, 1]);
  const scale = useTransform(drawT, [start, step.t], [0.35, step.scale]);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${step.yPct}%`,
        left: `${step.xPct}%`,
        x: "-50%",
        y: "-50%",
        scale,
        opacity,
      }}
      className="text-[var(--accent)] text-xs md:text-sm pointer-events-none"
    >
      <motion.div
        style={{
          rotate: step.rotation,
          x: step.xOffset,
          y: step.yOffset,
        }}
      >
        <FaShoePrints />
      </motion.div>
    </motion.div>
  );
}

function ExperienceCard({
  exp,
  index,
  N,
  xPct,
  yPct,
  isLeftNode,
  pathDrawProgress,
}: {
  exp: typeof experiences[0];
  index: number;
  N: number;
  xPct: number;
  yPct: number;
  isLeftNode: boolean;
  pathDrawProgress: MotionValue<number>;
}) {
  const t = index / (N - 1);
  const opacity = useTransform(pathDrawProgress, [Math.max(0, t - 0.1), t], [0.2, 1]);
  const scale = useTransform(pathDrawProgress, [Math.max(0, t - 0.1), t], [0.8, 1]);

  return (
    <div
      className="absolute w-full flex items-center z-10"
      style={{ top: `${yPct}%`, transform: "translateY(-50%)" }}
    >
      <div
        className="absolute flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-[var(--background)] neo-shadow rounded-full border-4 border-white"
        style={{ left: `${xPct}%`, transform: "translateX(-50%)" }}
      >
        <motion.div
          style={{ opacity, scale }}
          className="text-[var(--accent)] text-xs md:text-base"
        >
          <FaShoePrints className={index % 2 === 0 ? "rotate-12" : "-rotate-12"} />
        </motion.div>
      </div>

      <div className={`w-full flex ${isLeftNode ? "justify-end" : "justify-start"}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeftNode ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02 }}
          className={`w-[80%] md:w-[42%] cursor-default`}
        >
          <div className="p-6 md:p-8 rounded-3xl bg-[var(--background)] neo-shadow neo-shadow-hover relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1">
              {exp.company}
            </h3>
            <h4 className="text-[var(--accent)] font-semibold mb-2">{exp.role}</h4>
            <p className="text-xs font-medium text-gray-500 mb-4 tracking-wider uppercase">
              {exp.period}
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {exp.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDims = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const maxProgress = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > maxProgress.get()) {
      maxProgress.set(latest);
    }
  });

  // Map the section scroll 10% -> 90% into drawing progress 0 -> 1
  const pathDrawProgress = useTransform(maxProgress, [0.1, 0.9], [0, 1]);

  const N = experiences.length;
  const isMobile = dimensions.width < 768;
  const center_X = isMobile ? 15 : 50;
  const amplitude_X = isMobile ? 8 : 25;

  const getX = useCallback(
    (t: number) => center_X + amplitude_X * Math.sin(t * Math.PI * (N - 1) - Math.PI / 2),
    [center_X, amplitude_X, N]
  );
  const getY = useCallback((t: number) => 10 + t * 80, []);

  // Generate SVG path string
  const pathD = useMemo(() => {
    if (!mounted) return "";
    const points = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      points.push(`${i === 0 ? "M" : "L"} ${getX(t)} ${getY(t)}`);
    }
    return points.join(" ");
  }, [mounted, getX, getY]);

  // Generate mathematical Footsteps
  const footsteps = useMemo(() => {
    if (!mounted || dimensions.width === 0) return [];

    const rand = mulberry32(1337);
    const total = N * STEPS_PER_SECTION;
    const steps: FootstepConfig[] = [];

    for (let i = 0; i < total; i++) {
      const baseT = i / (total - 1);
      const tJitter = (rand() - 0.5) * (0.8 / total);
      const t = Math.min(0.99, Math.max(0.01, baseT + tJitter));
      const isLeftFoot = i % 2 === 0;

      // Derivatives to calculate tangent rotation accurately mapped to screen aspect ratio
      const dX_dt = amplitude_X * Math.PI * (N - 1) * Math.cos(t * Math.PI * (N - 1) - Math.PI / 2);
      const dY_dt = 80;
      const dx_px = dX_dt * (dimensions.width / 100);
      const dy_px = dY_dt * (dimensions.height / 100);

      const angleRad = Math.atan2(dy_px, dx_px);
      const rotation = (angleRad * 180) / Math.PI - 90; // Icon naturally points UP (-90 deg)

      const baseOffset = isLeftFoot ? -16 : 16;
      const offsetJitter = (rand() - 0.5) * 8;

      steps.push({
        id: i,
        t,
        xPct: getX(t),
        yPct: getY(t),
        rotation: rotation + (rand() - 0.5) * 15,
        xOffset: baseOffset + offsetJitter,
        yOffset: (rand() - 0.5) * 10,
        scale: 0.7 + rand() * 0.3,
      });
    }
    return steps;
  }, [mounted, dimensions, getX, getY, amplitude_X, N]);

  const revealWindow = (1 / (N * STEPS_PER_SECTION)) * 1.4;

  return (
    <section id="experience" className="py-24 relative bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">Experience</h2>
          
        </motion.div>

        {/* Absolute massive wrapper to allow scroll S-Curve space */}
        <div ref={containerRef} className="relative w-full h-[200vh] md:h-[250vh]">
          {mounted && (
            <>
              {/* Animated SVG background path */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d={pathD}
                  fill="none"
                  stroke="#d1c9bf"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                  className="opacity-60"
                />
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="4"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: pathDrawProgress }}
                  className="drop-shadow-[0_0_8px_rgba(65,91,6,0.6)]"
                />
              </svg>

              {/* Mapped Footsteps overlay */}
              <div className="absolute inset-0 z-[5] pointer-events-none">
                {footsteps.map((step) => (
                  <Footstep key={step.id} drawT={pathDrawProgress} step={step} revealWindow={revealWindow} />
                ))}
              </div>

              {/* Node and Card Overlays */}
              {experiences.map((exp, index) => {
                const t = index / (N - 1);
                const xPct = getX(t);
                const yPct = getY(t);
                const isLeftNode = xPct < 50;

                return (
                  <ExperienceCard
                    key={index}
                    exp={exp}
                    index={index}
                    N={N}
                    xPct={xPct}
                    yPct={yPct}
                    isLeftNode={isLeftNode}
                    pathDrawProgress={pathDrawProgress}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
}