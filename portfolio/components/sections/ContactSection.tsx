"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden border-t border-border">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <video 
          src="/peeps.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>

      {/* Optional gradient to fade the bottom into the background color if needed */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">Contact</h2>
          <div className="w-16 h-[2px] bg-foreground mb-12" />
          
          <p className="text-foreground-muted text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:contact@example.com"
            className="inline-block bg-foreground text-background font-bold tracking-widest uppercase text-sm px-10 py-4 hover:bg-transparent hover:text-foreground border-2 border-foreground transition-colors duration-300 mb-20"
          >
            Say Hello
          </a>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/AlenSony" className="p-3 border border-border hover:border-foreground text-foreground-muted hover:text-foreground transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alen-sony-71438732b/" className="p-3 border border-border hover:border-foreground text-foreground-muted hover:text-foreground transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/alensony05" className="p-3 border border-border hover:border-foreground text-foreground-muted hover:text-foreground transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="mailto:alensonythottathil2005@gmail.com" className="p-3 border border-border hover:border-foreground text-foreground-muted hover:text-foreground transition-colors duration-300">
              <MdMail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
