import { ArrowUpRight, Play, Code2 } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "RailSeat",
    tagline: "Railway reservation & ops platform",
    description:
      "Large-scale reservation system with secure Razorpay payments, automated seat generation, admin control panel, intuitive train search, and pdfkit ticket generation.",
    tags: ["React", "Node.js", "PostgreSQL", "Razorpay", "pdfkit"],
    accent: true,
  },
  {
    id: "02",
    name: "DealHunt",
    tagline: "Internet-wide deal scraper",
    description:
      "Dynamically scrapes multi-store e-commerce data, parses real-time prices, filters scam listings, and aggregates the best deals into a single, focused interface.",
    tags: ["Python", "Scrapers", "n8n", "Data Pipelines"],
  },
  {
    id: "03",
    name: "Vision Guard",
    tagline: "Local privacy CV agent",
    description:
      "Runs locally with YOLOv8 + OpenCV. Detects phones & onlookers via webcam and instantly triggers screen-blurring to prevent physical capture of digital content.",
    tags: ["YOLOv8", "OpenCV", "Python", "Tkinter"],
  },
];

export function ProjectsView() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-dot text-3xl sm:text-5xl uppercase">Selected Work</h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          03 / featured
        </span>
      </div>
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`widget widget-hover p-6 sm:p-8 col-span-12 ${
              i === 0 ? "md:col-span-12" : "md:col-span-6"
            } flex flex-col`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Project / {p.id}
                </div>
                <h3 className="font-dot text-3xl sm:text-4xl uppercase mt-2">
                  {p.name}
                </h3>
                <div
                  className={`font-mono text-xs mt-1 tracking-wider uppercase ${
                    p.accent ? "text-[color:var(--signal)]" : "text-muted-foreground"
                  }`}
                >
                  {p.tagline}
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-prose">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <button className="wire-btn signal">
                <Play className="w-3.5 h-3.5" /> Demo
              </button>
              <button className="wire-btn">
                <Code2 className="w-3.5 h-3.5" /> Source
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}