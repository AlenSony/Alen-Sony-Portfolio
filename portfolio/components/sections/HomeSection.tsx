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

      <div className="mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col justify-between px-4 pt-20 sm:px-8 sm:pt-24 lg:px-14 lg:pt-12">
        {/* Main composition wrapper */}
        <div className="relative my-auto flex flex-1 flex-col justify-center py-4 lg:py-6">
          {/* Editorial Stage */}
          <div className="relative flex flex-col">
            {/* Soft Stone Background Box (Clips the image inside it) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[115px] overflow-hidden rounded-t-[28px] bg-[#f5f4f1] sm:top-[145px] sm:rounded-t-[32px] lg:top-[130px] lg:rounded-[28px]">
              {/* Portrait strictly bounded inside the grey box */}
              <motion.div
                {...reveal(0.30)}
                className="relative ml-auto hidden h-full w-[51%] max-w-[660px] lg:block"
              >
                <Image
                  src={HERO_IMAGE.src}
                  alt="Portrait of Alen Sony"
                  fill
                  priority
                  sizes="54vw"
                  className="object-cover object-bottom"
                  style={{
                    objectPosition: HERO_IMAGE.objectPosition,
                    filter: "grayscale(1) contrast(1.08)",
                  }}
                />
              </motion.div>
            </div>

            {/* Foreground Content */}
            <div className="relative z-20 flex flex-col justify-between px-5 pt-2 sm:px-10 lg:min-h-[580px] lg:pb-12 lg:pl-12 lg:pr-12">
              {/* Top: Intro + Giant Name (straddles the top edge of the grey box) */}
              <div>
                <motion.div
                  {...reveal(0.1)}
                  className="mb-2 flex items-baseline gap-3 sm:mb-3"
                >
                  <p
                    className={`${instrumentSerif.className} text-xl text-black/75 sm:text-2xl`}
                  >
                    Hey, I am
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-black/40 lg:hidden">
                    · Full-Stack Developer
                  </span>
                </motion.div>

                <motion.div {...reveal(0.18)}>
                  <p
                    className={`${instrumentSerif.className} select-none uppercase leading-[0.78] tracking-[-0.06em] text-black`}
                    style={{
                      fontSize: "clamp(4.75rem, 11.5vw, 10.75rem)",
                    }}
                  >
                    ALEN
                    <br />
                    SONY
                  </p>
                </motion.div>
              </div>

              {/* Mobile / Tablet Portrait (Rendered inside the grey box flow on smaller screens) */}
              <motion.div
                {...reveal(0.28)}
                className="pointer-events-none relative mx-auto mt-6 h-[340px] w-full max-w-[420px] overflow-hidden rounded-[20px] sm:h-[400px] lg:hidden"
              >
                <Image
                  src={HERO_IMAGE.src}
                  alt="Portrait of Alen Sony"
                  fill
                  priority
                  sizes="90vw"
                  className="object-cover object-bottom"
                  style={{
                    objectPosition: HERO_IMAGE.objectPosition,
                    filter: "grayscale(1) contrast(1.08)",
                  }}
                />
              </motion.div>

              {/* Bottom: Description and CTA */}
              <div className="mt-8 pb-8 sm:mt-10 sm:pb-10 lg:mt-16 lg:max-w-[420px] lg:pb-0">
                <motion.p
                  {...reveal(0.38)}
                  className={`${instrumentSerif.className} text-[1.4rem] leading-[1.3] text-black/85 sm:text-2xl lg:text-[1.65rem]`}
                >
                  A Full-Stack Developer crafting reliable products and
                  thoughtful interfaces for the modern web.
                </motion.p>

                <motion.p
                  {...reveal(0.45)}
                  className="mt-3.5 max-w-[340px] text-sm leading-relaxed text-black/60"
                >
                  From real-time systems to multi-agent applications, I build
                  software with a focus on performance and clean architecture.
                </motion.p>

                <motion.div {...reveal(0.52)} className="mt-7">
                  <button
                    type="button"
                    onClick={scrollToProjects}
                    className="group inline-flex items-center gap-3 rounded-full border border-black/20 bg-white/70 px-6 py-3 text-sm font-medium text-black backdrop-blur-sm transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
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
        </div>

        {/* Minimal footer */}
        <motion.footer
          {...reveal(0.6)}
          className="relative z-30 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-black/10 py-5"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-black/60">
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

          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40">
            Portfolio · 2026
          </span>
        </motion.footer>
      </div>
    </section>
  );
}