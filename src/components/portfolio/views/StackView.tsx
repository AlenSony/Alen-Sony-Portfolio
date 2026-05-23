const groups = [
  {
    code: "01",
    title: "Full-Stack Web",
    items: ["React", "Node.js", "PostgreSQL", "Sequelize ORM", "RESTful APIs"],
  },
  {
    code: "02",
    title: "Scraping & Automation",
    items: ["Custom Scrapers", "Data Parsing", "Extraction Pipelines", "n8n", "Python"],
  },
  {
    code: "03",
    title: "Systems & Networking",
    items: [
      "C Programming",
      "Stop-and-Wait",
      "Go-Back-N",
      "Selective Repeat",
      "Dijkstra's Algorithm",
    ],
  },
  {
    code: "04",
    title: "AI & Vision",
    items: ["YOLOv8", "OpenCV", "Local LLMs", "Ollama", "Tkinter"],
  },
  {
    code: "05",
    title: "Tools & Deployments",
    items: ["Razorpay", "pdfkit", "Git", "Linux", "Docker basics"],
  },
];

export function StackView() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-dot text-3xl sm:text-5xl uppercase">Core Stack</h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          {groups.length} modules
        </span>
      </div>
      <div className="grid grid-cols-12 gap-3 sm:gap-4">
        {groups.map((g, i) => (
          <div
            key={g.code}
            className={`widget widget-hover p-6 col-span-12 sm:col-span-6 ${
              i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-dot text-sm text-muted-foreground">{g.code}</span>
              <span className="signal-dot opacity-70" />
            </div>
            <h3 className="font-dot uppercase text-2xl mt-2">{g.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="chip">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}