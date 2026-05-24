import { Splash } from "@/components/portfolio/Splash";
import { HomeView } from "@/components/portfolio/views/HomeView";
import { ProjectsView } from "@/components/portfolio/views/ProjectsView";
import { StackView } from "@/components/portfolio/views/StackView";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alen Sony — Full-Stack & Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Alen Sony, full-stack & systems engineer. Scalable web systems, scrapers, network protocols in C, and local computer vision.",
      },
      { property: "og:title", content: "Alen Sony — Full-Stack & Systems Engineer" },
      {
        property: "og:description",
        content:
          "Scalable web systems, scrapers, network protocols, and local AI. Built in the dark.",
      },
    ],
  }),
  component: Index,
});

const TABS = [
  { id: "home", label: "Home", code: "00" },
  { id: "stack", label: "Stack", code: "01" },
  { id: "projects", label: "Work", code: "02" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const views: Record<TabId, React.ComponentType> = {
  home: HomeView,
  stack: StackView,
  projects: ProjectsView,
};

function Index() {
  const [tab, setTab] = useState<TabId>("home");
  const [dir, setDir] = useState<1 | -1>(1);
  const [booting, setBooting] = useState(true);

  const switchTo = (next: TabId) => {
    if (next === tab) return;
    const ci = TABS.findIndex((t) => t.id === tab);
    const ni = TABS.findIndex((t) => t.id === next);
    setDir(ni > ci ? 1 : -1);
    setTab(next);
  };

  const ActiveView = views[tab];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {booting && <Splash key="splash" onDone={() => setBooting(false)} />}
      </AnimatePresence>
      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-foreground/40 flex items-center justify-center">
              <span className="signal-dot" />
            </div>
            <div className="font-dot text-lg uppercase leading-none">
              Alen Sony<span className="text-[color:var(--signal)]">.</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {TABS.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => switchTo(t.id)}
                  className={`relative px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.25em] transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-foreground/40 bg-foreground/5"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <span className="font-dot text-[10px] opacity-60">{t.code}</span>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="signal-dot" /> online
          </div>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden border-t border-border overflow-x-auto">
          <div className="flex min-w-max px-2">
            {TABS.map((t) => {
              const active = t.id === tab;
              return (
                <button
                  key={t.id}
                  onClick={() => switchTo(t.id)}
                  className={`px-3 py-3 font-mono text-[11px] uppercase tracking-[0.25em] ${
                    active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-dot text-[10px] opacity-60 mr-1">{t.code}</span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto">
        {/* Stacked card stage */}
        <div className="relative" style={{ perspective: "1600px" }}>
          <AnimatePresence mode="popLayout" custom={dir} initial={false}>
            <motion.section
              key={tab}
              custom={dir}
              initial={{
                y: dir === 1 ? "60%" : "-30%",
                opacity: 0,
                scale: 0.94,
                rotateX: dir === 1 ? -6 : 6,
                filter: "blur(6px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              exit={{
                y: dir === 1 ? "-22%" : "55%",
                opacity: 0,
                scale: 0.96,
                rotateX: dir === 1 ? 6 : -6,
                filter: "blur(6px)",
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "center top" }}
              className="relative"
            >
              <div className="m-3 sm:m-6 widget overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                <ViewHeader tab={tab} />
                <ActiveView />
              </div>
            </motion.section>
          </AnimatePresence>
        </div>

        <footer className="px-6 py-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="font-dot text-base text-foreground/60">// end of transmission</span>
          <div className="mt-2 opacity-60">© 2026 · built in the dark</div>
        </footer>
      </main>
    </div>
  );
}

function ViewHeader({ tab }: { tab: TabId }) {
  const meta = TABS.find((t) => t.id === tab)!;
  const activeDot = TABS.findIndex((t) => t.id === tab);

  return (
    <div className="flex items-center justify-between px-6 sm:px-8 pt-5 pb-2 border-b border-border dot-grid-bg">
      <div className="flex items-center gap-3">
        <span className="font-dot text-xs text-muted-foreground">{meta.code}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          /{meta.id}
        </span>
      </div>
      <div className="flex items-center gap-1.5" aria-label={`Page ${activeDot + 1} of ${TABS.length}`}>
        {TABS.map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === activeDot ? "bg-[color:var(--signal)]" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
