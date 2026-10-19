
"use client";

import { instrumentSerif } from "@/lib/fonts";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HERO_IMAGE = {
  src: "/background.jpeg",
  objectPosition: "50% 35%",
};

const EASE = [0.16, 1, 0.3, 1] as const;

export default function HomeSection() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            ease: EASE,
            delay,
          },
        };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-white text-black"
    >
      <h1 className="sr-only">Alen Sony — Full-Stack Developer</h1>

      <div className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col px-5 pt-20 sm:px-10 sm:pt-24 lg:px-16 lg:pt-16">
        {/* Main composition */}
        <div className="relative flex flex-1 flex-col">
          {/* Intro */}
          <motion.div
            {...reveal(0.1)}
            className="relative z-30 pl-2 sm:pl-8 lg:pl-[8%]"
          >
            <p
              className={`${instrumentSerif.className} text-xl text-black/75 sm:text-2xl`}
            >
              Hey, I am
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-black/40 lg:hidden">
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Main panel */}
          <div className="relative mt-6 flex flex-1 flex-col lg:mt-0 lg:min-h-[570px]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 top-[22%] rounded-t-[24px] bg-[#f5f4f1] sm:rounded-t-[30px] lg:top-[31%] lg:rounded-[22px]"
            />

            {/* Name */}
            <motion.div
              {...reveal(0.18)}
              className="relative z-20 pl-2 sm:pl-8 lg:absolute lg:left-[6%] lg:top-[-1%] lg:pl-0"
            >
              <p
                className={`${instrumentSerif.className} uppercase leading-[0.76] tracking-[-0.065em] text-black`}
                style={{
                  fontSize: "clamp(5.2rem, 13.2vw, 11.5rem)",
                }}
              >
                ALEN
                <br />
                SONY
              </p>
            </motion.div>

            {/* Portrait */}
            <motion.div
              {...reveal(0.28)}
              className="pointer-events-none relative z-10 mx-auto mt-5 h-[350px] w-full max-w-[440px] sm:h-[450px] lg:absolute lg:bottom-0 lg:right-[-1%] lg:mx-0 lg:mt-0 lg:h-[112%] lg:w-[48%] lg:max-w-[650px]"
            >
              <Image
                src={HERO_IMAGE.src}
                alt="Portrait of Alen Sony"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 48vw"
                className="object-contain object-bottom lg:object-cover"
                style={{
                  objectPosition: HERO_IMAGE.objectPosition,
                  filter: "grayscale(1) contrast(1.08)",
                }}
              />
            </motion.div>

            {/* Description and CTA */}
            <div className="relative z-20 mt-auto px-2 pb-8 sm:px-8 sm:pb-10 lg:absolute lg:bottom-[7%] lg:left-[6%] lg:max-w-[390px] lg:px-0 lg:pb-0">
              <motion.p
                {...reveal(0.38)}
                className={`${instrumentSerif.className} max-w-[320px] text-[1.35rem] leading-[1.35] text-black/80 sm:text-2xl lg:text-[1.55rem]`}
              >
                A Full-Stack Developer crafting reliable products and
                thoughtful interfaces for the modern web.
              </motion.p>

              <motion.p
                {...reveal(0.45)}
                className="mt-4 max-w-[310px] text-sm leading-6 text-black/55"
              >
                From real-time systems to multi-agent applications,
                I build software with a focus on performance and
                clean architecture.
              </motion.p>

              <motion.div {...reveal(0.52)} className="mt-7">
                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="group inline-flex items-center gap-3 rounded-full border border-black/20 px-5 py-3 text-sm text-black transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  See My Projects
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Minimal footer */}
        <motion.footer
          {...reveal(0.6)}
          className="relative z-30 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-black/10 py-5"
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-black/55">
            <a
              href="https://github.com/AlenSony"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/alen-sony-71438732b/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:alensonythottathil2005@gmail.com"
              className="transition-colors hover:text-black"
            >
              Email ↗
            </a>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/35">
            Portfolio · 2026
          </span>
        </motion.footer>
      </div>
    </section>
  );
}
