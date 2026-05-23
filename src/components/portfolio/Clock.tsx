import { useEffect, useState } from "react";

export function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const date = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });
  return (
    <div className="flex flex-col items-start">
      <div className="font-dot text-foreground leading-none text-[18vw] sm:text-[10rem] md:text-[12rem] tracking-tight">
        <span>{hh}</span>
        <span className="opacity-40">:</span>
        <span>{mm}</span>
      </div>
      <div className="mt-2 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span>{date}</span>
        <span className="opacity-60">·</span>
        <span className="font-dot text-base text-foreground/80">{ss}</span>
      </div>
    </div>
  );
}