"use client";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Ambient background — pure grayscale glow + grid, no color tint */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-foreground/[0.06] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      {/* Corner brackets — HUD / viewfinder framing, the signature device */}
      <div className="absolute inset-6 sm:inset-10 pointer-events-none z-10">
        {[
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((pos, i) => (
          <motion.div
            key={pos}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
            className={`absolute w-6 h-6 sm:w-8 sm:h-8 border-foreground/25 ${pos}`}
          />
        ))}

        {/* Coordinate-style labels, echoing dev/console vernacular */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute top-0 left-8 sm:left-10 -translate-y-1/2 bg-background px-2 text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase"
        >
          
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-0 right-8 sm:right-10 translate-y-1/2 bg-background px-2 text-[10px] font-mono tracking-widest text-muted-foreground/50 uppercase"
        >
          India / Remote
        </motion.span>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-7"
        >
          {/* Status eyebrow — replaces decorative label with something that reads true */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-muted-foreground uppercase"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground/70" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Main Title — flat foreground, terminal cursor as the signature flourish */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "-0.05em", y: 20 }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", y: 0 }}
            transition={{ delay: 0.25, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-foreground uppercase select-none inline-flex items-baseline"
          >
            Alen Sony
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ delay: 1.4, duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              className="ml-2 sm:ml-3 inline-block w-[0.5ch] h-[0.7em] bg-foreground/70 translate-y-1"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="text-lg sm:text-2xl md:text-3xl text-muted-foreground font-light uppercase tracking-[0.25em]"
          >
            Full-Stack Developer
          </motion.p>

          {/* Tech stack — bracketed console tags instead of a glass pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {["Backend", "Frontend", "AI Agents"].map((tag) => (
              <span
                key={tag}
                className="group font-mono text-[11px] sm:text-xs tracking-widest uppercase text-muted-foreground/70 border border-border/60 px-3.5 py-2 hover:text-foreground hover:border-foreground/40 transition-colors duration-300"
              >
                <span className="text-muted-foreground/40 group-hover:text-foreground/50 transition-colors">[</span>
                {" "}{tag}{" "}
                <span className="text-muted-foreground/40 group-hover:text-foreground/50 transition-colors">]</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground/60 z-20"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-bold">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 bg-muted-foreground/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}