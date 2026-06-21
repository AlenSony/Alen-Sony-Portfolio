"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Shuffle from "../ui/Shuffle";

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
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full h-full flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            style={{ filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.7))' }}
            className="lacquer-regular text-5xl sm:text-6xl md:text-8xl tracking-tighter mb-4 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent pb-2"
          >
            Alen Sony
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-8 relative"
          >
            <Shuffle
              text="Full-Stack Developer"
              tag="h2"
              className="lacquer-regular text-2xl sm:text-4xl md:text-5xl text-white tracking-widest text-center"
              style={{ 
                WebkitTextStroke: '2px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.9))'
              }}
              shuffleDirection="up"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              textAlign="center"
            />
          </motion.div>

          {/* Spinning text content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="z-20 scale-90 sm:scale-100 flex justify-center"
          >
            <div className="card !p-0">
              <div className="loader drop-shadow-md">
                <p className="mr-3 whitespace-nowrap">I work with</p>
                <div className="words">
                  <span className="word">Backend</span>
                  <span className="word">Frontend</span>
                  <span className="word">Automation</span>
                  <span className="word">LLM</span>
                  <span className="word">Agents</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold drop-shadow-md">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-[2px] h-8 bg-white/80 rounded-full shadow-lg"></div>
        </motion.div>
      </motion.div>

    </section>
  );
}
