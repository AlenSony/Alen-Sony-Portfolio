import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Clock } from "../Clock";

export function HomeView() {
  return (
    <div className="grid grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-6">
      {/* Greeting / name */}
      <div className="widget col-span-12 md:col-span-8 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            // identity
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            v1.0 · IN/REMOTE
          </span>
        </div>
        <h1 className="font-dot mt-4 text-4xl sm:text-6xl md:text-7xl leading-[1.05] uppercase tracking-tight">
          <span className="text-foreground">Alen Sony</span>
        </h1>
        <p className="mt-3 font-mono text-sm sm:text-base uppercase tracking-[0.2em] text-muted-foreground">
          — Full-Stack &amp; Systems Engineer
        </p>
        <p className="mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"></p>
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
          Currently Working With
        </span>
        <div className="font-dot text-2xl mt-3 leading-tight">Automations and LLMs</div>
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
            href="https://github.com/AlenSony"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/alen-sony-71438732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
            Automating the future, one step at a time.
          </div>
        </div>
        <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
      </div>
    </div>
  );
}
