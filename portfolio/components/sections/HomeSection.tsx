"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full relative"
        >
          <Image 
            src="/Gemini_Generated_Image_3w51ed3w51ed3w51%20copy.png"
            alt="Watercolor Background"
            fill
            priority
            className="object-cover opacity-100 object-center"
          />
        </motion.div>
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/60 via-transparent to-transparent"></div>
      </div>

      {/* Content Layer - Just Name & Title */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-xl"
        >

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-black mb-2 drop-shadow-lg"
          >
            Alen Sony
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E3A1A] tracking-wide mb-10 drop-shadow-md"
          >
            Full-Stack Developer
          </motion.h2>

        </motion.div>
      </div>

      {/* Spinning text content above scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-full flex justify-center scale-75 sm:scale-90 md:scale-100"
      >
        <div className="card">
          <div className="loader">
            <p className="mr-3 whitespace-nowrap">l work with</p>
            <div className="words">
              <span className="word">LLM</span>
              <span className="word">Frontend</span>
              <span className="word">Automation</span>
              <span className="word">Backend</span>
              <span className="word">Agents</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/80 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-[2px] h-8 bg-[#1E3A1A] rounded-full"></div>
        </motion.div>
      </motion.div>

    </section>
  );
}
