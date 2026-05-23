import { useState } from "react";
import { Copy, Check, Send } from "lucide-react";

const EMAIL = "hello@operator.dev";

export function ContactView() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <div className="p-4 sm:p-6 grid grid-cols-12 gap-3 sm:gap-4">
      <div className="widget col-span-12 md:col-span-5 p-6 sm:p-8 flex flex-col justify-between min-h-[360px]">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            channel
          </span>
          <h2 className="font-dot text-3xl sm:text-5xl uppercase mt-3">
            Let's talk.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Got a system to build, a scraper to tame, or a quiet ML idea?
            Drop a line. I reply within 24 hours.
          </p>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
            direct
          </div>
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-between widget !rounded-xl px-4 py-3 hover:border-foreground/30 transition-colors"
          >
            <span className="font-mono text-sm">{EMAIL}</span>
            <span
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] ${
                copied ? "text-[color:var(--signal)]" : "text-muted-foreground"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> <span className="font-dot text-base">OK</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> copy
                </>
              )}
            </span>
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="widget col-span-12 md:col-span-7 p-6 sm:p-8 flex flex-col gap-4"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            transmit
          </span>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="signal-dot" /> secure
          </div>
        </div>

        <Field label="Name" name="name" placeholder="Ada Lovelace" />
        <Field label="Email" name="email" type="email" placeholder="ada@analytic.engine" />

        <label className="block">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
            Message
          </div>
          <textarea
            required
            rows={5}
            placeholder="What are you building?"
            className="w-full bg-transparent border border-border rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/60 transition-colors resize-none"
          />
        </label>

        <button type="submit" className="wire-btn signal self-start mt-2">
          {sent ? (
            <>
              <Check className="w-3.5 h-3.5" /> sent
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" /> transmit
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
      </div>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border border-border rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/60 transition-colors"
      />
    </label>
  );
}