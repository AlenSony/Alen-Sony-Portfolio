const entries = [
  {
    date: "2025 · Q2",
    tag: "MAJOR PROJECT",
    title: "RailSeat — Phase III: Payment + Tickets",
    body: "Integrated Razorpay live mode, wrote idempotent webhook handlers, generated PDF tickets via pdfkit, passed guide review with system design alterations to seat allocation engine.",
  },
  {
    date: "2025 · Q1",
    tag: "MAJOR PROJECT",
    title: "RailSeat — Phase II: Admin Control Plane",
    body: "Designed admin dashboard, role-based access, and audit logs. Guide review #2 — refactored ORM relationships and normalized booking schema.",
  },
  {
    date: "2024 · Q4",
    tag: "SYSTEMS",
    title: "Network Protocols in C",
    body: "Implemented Stop-and-Wait, Go-Back-N, and Selective Repeat ARQ from scratch. Built Dijkstra-based routing simulation for coursework.",
  },
  {
    date: "2024 · Q3",
    tag: "AI / CV",
    title: "Vision Guard v0.1",
    body: "Trained YOLOv8 detector for phones & faces, wired to a Tkinter overlay that triggers screen blur on detection. Runs fully offline.",
  },
  {
    date: "2024 · Q2",
    tag: "AUTOMATION",
    title: "DealHunt — multi-store scraper",
    body: "Built resilient scrapers with anti-bot rotation, normalized product schema, and n8n flows for hourly aggregation.",
  },
  {
    date: "2023",
    tag: "OSS",
    title: "Open-source contributions",
    body: "Patches across Node tooling and Python scraping libraries. Issue triage in n8n community nodes.",
  },
];

export function LogsView() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-dot text-3xl sm:text-5xl uppercase">Logs</h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          experience / milestones
        </span>
      </div>

      <div className="widget p-6 sm:p-10">
        <ol className="relative border-l border-border ml-2">
          {entries.map((e, i) => (
            <li key={i} className="pl-6 pb-8 last:pb-0 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground" />
              {i === 0 && (
                <span className="absolute -left-[10px] top-0 signal-dot" />
              )}
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                <span>{e.date}</span>
                <span className="chip !py-0.5 !px-2 !text-[10px]">{e.tag}</span>
              </div>
              <h3 className="font-dot uppercase text-xl sm:text-2xl mt-2">
                {e.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {e.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}