"use client";

import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "-0.05em" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em" }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-foreground uppercase"
          >
            Alen Sony
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl sm:text-2xl md:text-3xl text-foreground-muted font-light uppercase tracking-widest"
          >
            Full-Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 px-8 py-3 border border-border rounded-none bg-surface-elevated text-xs sm:text-sm font-bold tracking-widest uppercase flex gap-4 text-foreground-muted hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <span>Backend</span>
            <span>&bull;</span>
            <span>Frontend</span>
            <span>&bull;</span>
            <span>AI Agents</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-foreground-faint z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-foreground-faint" />
        </motion.div>
      </motion.div>
    </section>
  );
}
