import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, G as Github, L as Linkedin, F as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Splash({ onDone }) {
  const [pct, setPct] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const DURATION = 1800;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 2);
      setPct(Math.floor(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(onDone, 280);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { y: 0, scale: 1, opacity: 1 },
      exit: {
        y: "-100%",
        scale: 0.96,
        opacity: 0.9,
        filter: "blur(8px)",
        transition: { duration: 0.85, ease: [0.85, 0, 0.15, 1] }
      },
      className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black",
      style: {
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "4px 4px"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "absolute inset-0 rounded-full",
              style: { background: "var(--signal)", filter: "blur(14px)" },
              animate: { opacity: [0.35, 0.9, 0.35], scale: [0.9, 1.3, 0.9] },
              transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "block rounded-full relative",
              style: {
                width: 18,
                height: 18,
                background: "var(--signal)",
                boxShadow: "0 0 30px var(--signal)"
              },
              animate: { scale: [1, 0.82, 1] },
              transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "font-dot mt-10 text-5xl sm:text-6xl tabular-nums text-foreground",
            "aria-live": "polite",
            children: [
              String(pct).padStart(2, "0"),
              "%"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 w-40 h-px bg-white/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full bg-white/70 transition-[width] duration-100",
            style: { width: `${pct}%` }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-mono text-[11px] tracking-[0.3em] lowercase text-muted-foreground", children: "good things take time..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-6 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "// boot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "sys.alen_sony" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "v1.0.0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "signal-dot" }),
            " link"
          ] })
        ] })
      ]
    }
  );
}
const DIGITS = {
  "0": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  "1": [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0]
  ],
  "2": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
  ],
  "3": [
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0]
  ],
  "4": [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0]
  ],
  "5": [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  "6": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  "7": [
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]
  ],
  "8": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  "9": [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  ":": [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
  ]
};
function DotMatrixDigit({
  char,
  size = 4,
  gap = 2
}) {
  const grid = DIGITS[char] ?? DIGITS["0"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid",
      style: {
        gridTemplateColumns: `repeat(5, ${size}px)`,
        gridTemplateRows: `repeat(7, ${size}px)`,
        gap: `${gap}px`
      },
      children: grid.flat().map((on, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `rounded-full transition-all duration-200 ${on ? "bg-foreground shadow-[0_0_6px_rgba(255,255,255,0.5)]" : "bg-foreground/[0.06]"}`,
          style: { width: size, height: size }
        },
        i
      ))
    }
  );
}
function Clock() {
  const [now, setNow] = reactExports.useState(/* @__PURE__ */ new Date());
  const [colonOn, setColonOn] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const id = setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    const id = setInterval(() => setColonOn((p) => !p), 1e3);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const date = now.toLocaleDateString(void 0, {
    weekday: "short",
    month: "short",
    day: "2-digit"
  });
  const dotSize = 5;
  const dotGap = 2.5;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 sm:gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrixDigit, { char: hh[0], size: dotSize, gap: dotGap }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrixDigit, { char: hh[1], size: dotSize, gap: dotGap })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center h-full pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid",
          style: {
            gridTemplateColumns: `repeat(2, ${dotSize}px)`,
            gridTemplateRows: `repeat(7, ${dotSize}px)`,
            gap: `${dotGap}px`
          },
          children: Array.from({ length: 14 }).map((_, i) => {
            const row = Math.floor(i / 2);
            const isColonDot = row === 2 || row === 4;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `rounded-full transition-all duration-150 ${isColonDot && colonOn ? "bg-foreground shadow-[0_0_4px_rgba(255,255,255,0.4)]" : "bg-foreground/[0.04]"}`,
                style: { width: dotSize, height: dotSize }
              },
              i
            );
          })
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrixDigit, { char: mm[0], size: dotSize, gap: dotGap }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrixDigit, { char: mm[1], size: dotSize, gap: dotGap })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: date }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "·" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrixDigit, { char: ss[0], size: 3, gap: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrixDigit, { char: ss[1], size: 3, gap: 1.5 })
      ] })
    ] })
  ] });
}
function HomeView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-3 sm:gap-4 p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-12 md:col-span-8 p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "// identity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "v1.0 · IN/REMOTE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-dot mt-4 text-4xl sm:text-6xl md:text-7xl leading-[1.05] uppercase tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Alen Sony" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-sm sm:text-base uppercase tracking-[0.2em] text-muted-foreground", children: "— Full-Stack & Systems Engineer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-12 md:col-span-4 p-6 flex flex-col justify-between min-h-[220px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "local time" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-12 md:col-span-5 p-6 flex flex-col justify-between min-h-[160px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "signal-dot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--signal)]", children: "live" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-dot text-xl sm:text-2xl leading-snug uppercase", children: [
        "Building scalable systems,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " scrapers & local AI."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-6 md:col-span-3 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "Currently Working With" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-dot text-2xl mt-3 leading-tight", children: "Automations and LLMs" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-6 md:col-span-4 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-dot text-2xl mt-3 leading-tight", children: [
        "REACT · NODE · C",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "PYTHON · POSTGRES"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-6 md:col-span-3 p-6 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "channels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://github.com/AlenSony",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "GitHub",
            className: "w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.linkedin.com/in/alen-sony-71438732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "LinkedIn",
            className: "w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "widget col-span-6 md:col-span-9 p-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "next" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-dot text-xl sm:text-2xl mt-2", children: "Automating the future, one step at a time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-6 h-6 text-muted-foreground" })
    ] })
  ] });
}
const projects = [
  {
    id: "01",
    name: "RailSeat",
    tagline: "Railway reservation & ops platform",
    description: "Large-scale reservation system with secure Razorpay payments, automated seat generation, admin control panel, intuitive train search, and pdfkit ticket generation.",
    tags: ["React", "Node.js", "PostgreSQL", "Razorpay", "pdfkit"],
    accent: true
  },
  {
    id: "02",
    name: "PharmaNear",
    tagline: "Pharmacy locator app",
    description: "Pharmacy locator app with Google Maps API, search functionality, and location-based services.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Node-Geocoder"],
    accent: true
  },
  {
    id: "03",
    name: "DealHunt",
    tagline: "Internet-wide deal scraper",
    description: "Dynamically scrapes multi-store e-commerce data, parses real-time prices, filters scam listings, and aggregates the best deals into a single, focused interface.",
    tags: ["Python", "Scrapers", "n8n", "Data Pipelines"]
  },
  {
    id: "04",
    name: "Vision Guard",
    tagline: "Local privacy CV agent",
    description: "Runs locally with YOLOv8 + OpenCV. Detects phones & onlookers via webcam and instantly triggers screen-blurring to prevent physical capture of digital content.",
    tags: ["YOLOv8", "OpenCV", "Python", "Tkinter"]
  }
];
function ProjectsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-dot text-3xl sm:text-5xl uppercase", children: "Selected Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "03 / featured" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-12 gap-3 sm:gap-4", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: `widget widget-hover p-6 sm:p-8 col-span-12 ${i === 0 ? "md:col-span-12" : "md:col-span-6"} flex flex-col`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
                "Project / ",
                p.id
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-dot text-3xl sm:text-4xl uppercase mt-2", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `font-mono text-xs mt-1 tracking-wider uppercase ${p.accent ? "text-[color:var(--signal)]" : "text-muted-foreground"}`,
                  children: p.tagline
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-6 h-6 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground leading-relaxed max-w-prose", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: t }, t)) })
        ]
      },
      p.id
    )) })
  ] });
}
const experiences = [
  {
    role: "Project Intern",
    company: "FOCES CEC",
    type: "Part-time",
    duration: "Aug 2025 – Dec 2025 · 5 mos",
    focus: null,
    certificate: null
  },
  {
    role: "Back End Developer",
    company: "Prodigy InfoTech",
    type: "Internship · Remote — Kerala, India",
    duration: "Aug 2025 – Sep 2025 · 2 mos",
    focus: "Back-End Web Development, Back-end Operations.",
    certificate: { label: "Certificate.pdf", href: "/Certificate.pdf" }
  },
  {
    role: "Web Developer",
    company: "Cognifyz Technologies",
    type: "Internship · Remote — Kerala, India",
    duration: "Jun 2025 – Jul 2025 · 2 mos",
    focus: "Web Development Intern (HTML, Cascading Style Sheets (CSS), and core frontend technologies).",
    certificate: { label: "Alen Sony (3).pdf", href: "/Alen%20Sony%20(3).pdf" }
  }
];
function ExperienceTimeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 sm:mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-dot text-3xl sm:text-5xl uppercase", children: "Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
        experiences.length,
        " roles"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "widget p-6 sm:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative border-l border-border ml-2", children: experiences.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "pl-6 pb-8 last:pb-0 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground" }),
      i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[10px] top-0 signal-dot" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: e.duration }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip !py-0.5 !px-2 !text-[10px]", children: e.type })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-dot uppercase text-xl sm:text-2xl mt-2", children: [
        e.role,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: " · " }),
        e.company
      ] }),
      e.focus && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed", children: e.focus }),
      e.certificate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: e.certificate.href,
          target: "_blank",
          rel: "noreferrer",
          className: "wire-btn mt-4 inline-flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3.5 h-3.5" }),
            e.certificate.label
          ]
        }
      )
    ] }, `${e.company}-${e.duration}`)) }) })
  ] });
}
const groups = [
  {
    code: "01",
    title: "Full-Stack Web",
    items: ["React", "Node.js", "PostgreSQL", "Sequelize ORM", "RESTful APIs"]
  },
  {
    code: "02",
    title: "Scraping & Automation",
    items: ["Custom Scrapers", "Data Parsing", "Extraction Pipelines", "n8n", "Python"]
  },
  {
    code: "03",
    title: "Systems & Networking",
    items: ["Network Protocols", "Data Structures", "Socket Programming"]
  },
  {
    code: "04",
    title: "AI & Vision",
    items: ["YOLOv8", "OpenCV", "Local LLMs", "Ollama", "Tkinter"]
  },
  {
    code: "05",
    title: "Tools & Deployments",
    items: ["Razorpay", "pdfkit", "Git", "Linux", "Docker basics"]
  }
];
function StackView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-dot text-3xl sm:text-5xl uppercase", children: "Core Stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
        groups.length,
        " modules"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-12 gap-3 sm:gap-4", children: groups.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `widget widget-hover p-6 col-span-12 sm:col-span-6 ${i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-dot text-sm text-muted-foreground", children: g.code }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "signal-dot opacity-70" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-dot uppercase text-2xl mt-2", children: g.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: it }, it)) })
        ]
      },
      g.code
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExperienceTimeline, {})
  ] });
}
const TABS = [{
  id: "home",
  label: "Home",
  code: "00"
}, {
  id: "stack",
  label: "Stack",
  code: "01"
}, {
  id: "projects",
  label: "Work",
  code: "02"
}];
const views = {
  home: HomeView,
  stack: StackView,
  projects: ProjectsView
};
function Index() {
  const [tab, setTab] = reactExports.useState("home");
  const [dir, setDir] = reactExports.useState(1);
  const [booting, setBooting] = reactExports.useState(true);
  const switchTo = (next) => {
    if (next === tab) return;
    const ci = TABS.findIndex((t) => t.id === tab);
    const ni = TABS.findIndex((t) => t.id === next);
    setDir(ni > ci ? 1 : -1);
    setTab(next);
  };
  const ActiveView = views[tab];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: booting && /* @__PURE__ */ jsxRuntimeExports.jsx(Splash, { onDone: () => setBooting(false) }, "splash") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 backdrop-blur-md bg-black/60 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border border-foreground/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "signal-dot" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-dot text-lg uppercase leading-none", children: [
            "Alen Sony",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--signal)]", children: "." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: TABS.map((t) => {
          const active = t.id === tab;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => switchTo(t.id), className: `relative px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.25em] transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
            active && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "nav-pill", className: "absolute inset-0 rounded-full border border-foreground/40 bg-foreground/5", transition: {
              type: "spring",
              stiffness: 380,
              damping: 32
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-dot text-[10px] opacity-60", children: t.code }),
              t.label
            ] })
          ] }, t.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "signal-dot" }),
          " online"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-w-max px-2", children: TABS.map((t) => {
        const active = t.id === tab;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => switchTo(t.id), className: `px-3 py-3 font-mono text-[11px] uppercase tracking-[0.25em] ${active ? "text-foreground" : "text-muted-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-dot text-[10px] opacity-60 mr-1", children: t.code }),
          t.label
        ] }, t.id);
      }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", style: {
        perspective: "1600px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", custom: dir, initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.section, { custom: dir, initial: {
        y: dir === 1 ? "60%" : "-30%",
        opacity: 0,
        scale: 0.94,
        rotateX: dir === 1 ? -6 : 6,
        filter: "blur(6px)"
      }, animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)"
      }, exit: {
        y: dir === 1 ? "-22%" : "55%",
        opacity: 0,
        scale: 0.96,
        rotateX: dir === 1 ? 6 : -6,
        filter: "blur(6px)"
      }, transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1]
      }, style: {
        transformOrigin: "center top"
      }, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-3 sm:m-6 widget overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ViewHeader, { tab }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActiveView, {})
      ] }) }, tab) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "px-6 py-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-dot text-base text-foreground/60", children: "// end of transmission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 opacity-60", children: "© 2026 · built in the dark" })
      ] })
    ] })
  ] });
}
function ViewHeader({
  tab
}) {
  const meta = TABS.find((t) => t.id === tab);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 sm:px-8 pt-5 pb-2 border-b border-border dot-grid-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-dot text-xs text-muted-foreground", children: meta.code }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground", children: [
        "/",
        meta.id
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[color:var(--signal)]" })
    ] })
  ] });
}
export {
  Index as component
};
