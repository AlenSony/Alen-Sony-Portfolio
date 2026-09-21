"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-[#08080a] px-6 py-20 sm:py-28">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.14]" aria-hidden>
        <video
          src="/peeps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-1/2 top-1/2 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/75 to-[#08080a]/40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(820px_420px_at_50%_85%,rgba(255,255,255,0.06),transparent_65%)]" />

      <div className="container relative z-10 mx-auto max-w-[1080px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow">Contact — let&apos;s build something useful</p>
          <h2 className="mt-3 text-[clamp(30px,5.5vw,54px)] font-black tracking-[-0.05em] text-[#f5f3ef]">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-7 text-white/60 sm:text-base">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll
            get back to you as soon as I can.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alensonythottathil2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-[#f5f3ef] px-8 py-3.5 text-sm font-bold tracking-[0.14em] text-[#0a0a0b] uppercase transition-all hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] active:scale-[0.98] sm:w-auto"
            >
              Say hello <span aria-hidden>→</span>
            </a>
            <a
              href="https://github.com/AlenSony"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center border border-white/15 bg-white/[0.06] px-8 py-3.5 text-sm font-bold tracking-[0.14em] text-white uppercase backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/AlenSony"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/alen-sony-71438732b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/alensony05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/10 hover:text-white"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alensonythottathil2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-md transition-colors hover:border-white/15 hover:bg-white/10 hover:text-white"
            >
              <MdMail size={18} />
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] tracking-wide text-white/35">
            alensonythottathil2005@gmail.com · Usually replies within a day
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-4 font-mono text-[10px] tracking-[0.2em] text-white/25 uppercase">
          <span className="h-px w-8 bg-white/10" />
          <span>© {new Date().getFullYear()} Alen Sony</span>
          <span className="h-px w-8 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
