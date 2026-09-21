"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HomeSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#08080a]"
    >
      {/* — Minimal background — */}
      <div className="absolute inset-0 bg-[#08080a]" aria-hidden />
      {/* Hairline grid — barely there */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />
      {/* Soft radial — just to lift the center, no aurora */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 420px at 55% 38%, rgba(255,255,255,0.045), transparent 68%)",
        }}
        aria-hidden
      />

      {/* Top hairline — minimal, only on lg */}
      <div className="relative z-10 hidden border-b border-white/[0.06] lg:block">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/30 uppercase">
            Alen Sony — Portfolio
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-white/30 uppercase">
            Chengannur, IN · B.Tech 2023—2027
          </span>
        </div>
      </div>

      {/* Main */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-[1180px] gap-14 px-6 py-16 lg:grid-cols-[1.22fr_0.78fr] lg:items-center lg:gap-10 lg:py-10">
          {/* Left — type-first */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={reduceMotion ? false : { scaleX: 0 }}
                animate={reduceMotion ? undefined : { scaleX: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-px w-8 origin-left bg-white/20"
              />
              <span className="font-mono text-[10px] tracking-[0.24em] text-white/40 uppercase">
                Available for internships — 2026
              </span>
              <span className="hidden h-1.5 w-1.5 rounded-full bg-emerald-400 sm:inline-block" />
            </motion.div>

            {/* Headline — minimal, generous white space */}
            <motion.h1
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? undefined : "visible"}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.06, delayChildren: 0.08 },
                      },
                    }
              }
              className="mt-7 text-[clamp(46px,8.8vw,88px)] font-light leading-[0.88] tracking-[-0.05em] text-[#f5f3ef]"
            >
              <motion.span
                variants={
                  reduceMotion
                    ? undefined
                    : {
                        hidden: { y: 18, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                        },
                      }
                }
                className="block font-extralight tracking-[-0.06em]"
              >
                Alen
              </motion.span>
              <motion.span
                variants={
                  reduceMotion
                    ? undefined
                    : {
                        hidden: { y: 18, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                        },
                      }
                }
                className="block font-semibold tracking-[-0.05em] text-white"
              >
                Sony
              </motion.span>
            </motion.h1>

            {/* Thin rule */}
            <motion.div
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="mt-6 h-px w-[56px] origin-left bg-white/15"
            />

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
              className="mt-6 font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase"
            >
              Full-Stack Developer — Systems · Interfaces · Agents
            </motion.p>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              className="mt-5 max-w-[52ch] text-[15px] leading-7 text-white/60 sm:text-[16px] sm:leading-7"
            >
              I build fast, reliable products — from real-time seat maps and spatial routing
              to multi-agent logistics. Clean architecture, quiet interfaces, shipped.
            </motion.p>

            {/* CTAs — minimal */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em] text-black transition-colors hover:bg-white/90 active:scale-[0.98]"
              >
                View work
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alensonythottathil2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-medium tracking-[-0.01em] text-white/80 transition-colors hover:border-white/25 hover:text-white active:scale-[0.98]"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Meta links — muted */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-wide text-white/30"
            >
              <a href="https://github.com/AlenSony" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                GitHub
              </a>
              <span className="h-1 w-1 rounded-full bg-white/15" />
              <a href="https://www.linkedin.com/in/alen-sony-71438732b/" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                LinkedIn
              </a>
              <span className="h-1 w-1 rounded-full bg-white/15" />
              <span>alensonythottathil2005@gmail.com</span>
            </motion.div>
          </div>

          {/* Right — one quiet card, air */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="relative lg:pl-6"
          >
            {/* Faint vertical rule — desktop only */}
            <div className="pointer-events-none absolute left-0 top-2 hidden h-[88%] w-px bg-white/[0.06] lg:block" aria-hidden />

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              {/* subtle top label */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
                  Now
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-white/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium leading-6 text-white">
                  Full-Stack Developer Intern
                </p>
                <p className="font-mono text-[11px] tracking-wide text-white/45">
                  Platano Learn — Dec 2025 → Present
                </p>
              </div>

              <div className="mt-6 h-px bg-white/10" />

              {/* Minimal stats — tabular, quiet */}
              <dl className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { k: "Projects", v: "04" },
                  { k: "Stack", v: "15+" },
                  { k: "Internships", v: "04" },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <dt className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase">
                      {s.k}
                    </dt>
                    <dd className="mt-1 font-mono text-[17px] font-light tracking-tight text-white tabular-nums">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <p className="font-mono text-[10px] tracking-[0.14em] text-white/30 uppercase">
                  Focus
                </p>
                <p className="mt-1.5 font-mono text-[11px] leading-5 text-white/60">
                  React · Next.js · Supabase · Express · MongoDB · Postgres
                </p>
              </div>

              <a
                href="#tech-stack"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white px-4 py-2.5 text-xs font-medium tracking-wide text-black transition-colors hover:bg-white/90"
              >
                Explore stack <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Caption under card */}
            <p className="mt-3 hidden font-mono text-[10px] tracking-[0.16em] text-white/20 uppercase sm:block">
              Minimal dossier — 01 · 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom — whisper, not a bar */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/25 uppercase">
            Scroll — Manifesto &amp; work
          </span>
          <motion.span
            animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={
              reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
            }
            className="hidden h-6 w-px bg-white/15 sm:block"
            aria-hidden
          />
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/25 uppercase">
            01 / 06
          </span>
        </div>
      </div>
    </section>
  );
}
