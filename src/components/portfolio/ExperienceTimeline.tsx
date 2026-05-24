const experiences = [
  {
    role: "Project Intern",
    company: "FOCES CEC",
    type: "Part-time",
    duration: "Aug 2025 – Dec 2025 · 5 mos",
    focus: null,
    certificate: null,
  },
  {
    role: "Back End Developer",
    company: "Prodigy InfoTech",
    type: "Internship · Remote — Kerala, India",
    duration: "Aug 2025 – Sep 2025 · 2 mos",
    focus: "Back-End Web Development, Back-end Operations.",
    certificate: { label: "Certificate.pdf", href: "/Certificate.pdf" },
  },
  {
    role: "Web Developer",
    company: "Cognifyz Technologies",
    type: "Internship · Remote — Kerala, India",
    duration: "Jun 2025 – Jul 2025 · 2 mos",
    focus:
      "Web Development Intern (HTML, Cascading Style Sheets (CSS), and core frontend technologies).",
    certificate: { label: "Alen Sony (3).pdf", href: "/Alen%20Sony%20(3).pdf" },
  },
] as const;

export function ExperienceTimeline() {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-dot text-3xl sm:text-5xl uppercase">Experience</h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          {experiences.length} roles
        </span>
      </div>

      <div className="widget p-6 sm:p-10">
        <ol className="relative border-l border-border ml-2">
          {experiences.map((e, i) => (
            <li key={`${e.company}-${e.duration}`} className="pl-6 pb-8 last:pb-0 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-foreground" />
              {i === 0 && <span className="absolute -left-[10px] top-0 signal-dot" />}
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                <span>{e.duration}</span>
                <span className="chip !py-0.5 !px-2 !text-[10px]">{e.type}</span>
              </div>
              <h3 className="font-dot uppercase text-xl sm:text-2xl mt-2">
                {e.role}
                <span className="text-muted-foreground"> · </span>
                {e.company}
              </h3>
              {e.focus && (
                <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {e.focus}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
