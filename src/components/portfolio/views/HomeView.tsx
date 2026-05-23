import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Clock } from "../Clock";

export function HomeView() {
  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-6">
      {/* Greeting / name */}
      <div className="widget col-span-12 md:col-span-8 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            // operator
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            v1.0 · IN/REMOTE
          </span>
        </div>
        <h1 className="font-dot mt-4 text-4xl sm:text-6xl md:text-7xl leading-[1.05] uppercase">
          Hello,
          <br />
          <span className="text-foreground">I build systems</span>
          <br />
          <span className="text-muted-foreground">that don't break.</span>
        </h1>
        <p className="mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          Full-Stack & Systems Engineer. I write the web, the scrapers, the
          protocols, and the local AI that watches over them.
        </p>
      </div>

      {/* Clock widget */}
      <div className="widget col-span-12 md:col-span-4 p-6 flex flex-col justify-between min-h-[220px]">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          local time
        </span>
        <Clock />
      </div>

      {/* Status */}
      <div className="widget col-span-12 md:col-span-5 p-6 flex flex-col justify-between min-h-[160px]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            status
          </span>
          <div className="flex items-center gap-2">
            <span className="signal-dot" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--signal)]">
              live
            </span>
          </div>
        </div>
        <p className="font-dot text-xl sm:text-2xl leading-snug uppercase">
          Building scalable systems,
          <br /> scrapers & local AI.
        </p>
      </div>

      {/* Now playing / stats */}
      <div className="widget col-span-6 md:col-span-3 p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          shipped
        </span>
        <div className="font-dot text-5xl mt-3">12+</div>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
          production systems
        </div>
      </div>

      <div className="widget col-span-6 md:col-span-4 p-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          stack
        </span>
        <div className="font-dot text-2xl mt-3 leading-tight">
          REACT · NODE · C
          <br />
          PYTHON · POSTGRES
        </div>
      </div>

      {/* Social links */}
      <div className="widget col-span-6 md:col-span-3 p-6 flex flex-col justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          channels
        </span>
        <div className="flex gap-3 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="widget col-span-6 md:col-span-9 p-6 flex items-center justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            next
          </span>
          <div className="font-dot text-xl sm:text-2xl mt-2">
            Open to engineering roles & contract work
          </div>
        </div>
        <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
      </div>
    </div>
  );
}