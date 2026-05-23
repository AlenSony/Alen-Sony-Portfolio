import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Splash({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DURATION = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DURATION);
      // ease-out curve
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 280);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      initial={{ y: 0, scale: 1, opacity: 1 }}
      exit={{
        y: "-100%",
        scale: 0.96,
        opacity: 0.9,
        filter: "blur(8px)",
        transition: { duration: 0.85, ease: [0.85, 0, 0.15, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
      }}
    >
      {/* pulsing red dot */}
      <div className="relative">
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "var(--signal)", filter: "blur(14px)" }}
          animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.9, 1.3, 0.9] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="block rounded-full relative"
          style={{
            width: 18,
            height: 18,
            background: "var(--signal)",
            boxShadow: "0 0 30px var(--signal)",
          }}
          animate={{ scale: [1, 0.82, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* percentage */}
      <div
        className="font-dot mt-10 text-5xl sm:text-6xl tabular-nums text-foreground"
        aria-live="polite"
      >
        {String(pct).padStart(2, "0")}%
      </div>

      {/* progress bar */}
      <div className="mt-5 w-40 h-px bg-white/10 overflow-hidden">
        <div
          className="h-full bg-white/70 transition-[width] duration-100"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* micro copy */}
      <div className="mt-6 font-mono text-[11px] tracking-[0.3em] lowercase text-muted-foreground">
        good things take time...
      </div>

      {/* corner ticks */}
      <div className="pointer-events-none absolute inset-6 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
        <span>// boot</span>
        <span>sys.alen_sony</span>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
        <span>v1.0.0</span>
        <span className="flex items-center gap-2">
          <span className="signal-dot" /> link
        </span>
      </div>
    </motion.div>
  );
}