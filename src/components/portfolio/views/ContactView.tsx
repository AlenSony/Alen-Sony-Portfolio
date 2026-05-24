import { CONTACT_EMAIL } from "@/lib/contact";
import { Check, Copy, Send } from "lucide-react";
import React, { useState } from "react";

export function ContactView() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Extract values to plug into your backend handling / n8n workflow / Formspree here
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Transmission initialized:", data);

    // Trigger Success State
    setSent(true);

    // Reset form fields smoothly
    form.reset();

    setTimeout(() => setSent(false), 2400);
  };

  return (
    <div className="p-4 sm:p-6 grid grid-cols-12 gap-3 sm:gap-4 text-foreground bg-background">
      {/* Left Bento Box Widget */}
      <div className="widget col-span-12 md:col-span-5 p-6 sm:p-8 flex flex-col justify-between min-h-[360px] rounded-2xl border border-border bg-card/50 backdrop-blur-md">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground opacity-60">
            channel
          </span>
          <h2 className="font-dot text-3xl sm:text-5xl uppercase mt-3 tracking-tight">
            Let's talk.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed opacity-80">
            Got a system to build, a scraper to tame, or a quiet ML idea? Drop a line. I reply
            within 24 hours.
          </p>
        </div>

        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground opacity-60 mb-2">
            direct
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="w-full flex items-center justify-between border border-border bg-background/40 backdrop-blur-sm rounded-xl px-4 py-3 hover:border-foreground/40 hover:bg-background/80 transition-all duration-200 group"
          >
            <span className="font-mono text-sm tracking-tight">{CONTACT_EMAIL}</span>
            <span
              className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-200 ${
                copied
                  ? "text-red-500 font-bold"
                  : "text-muted-foreground opacity-70 group-hover:opacity-100"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span className="font-mono">OK</span>
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

      {/* Right Form Box Widget */}
      <form
        onSubmit={handleSubmit}
        className="widget col-span-12 md:col-span-7 p-6 sm:p-8 flex flex-col gap-4 rounded-2xl border border-border bg-card/50 backdrop-blur-md"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground opacity-60">
            transmit
          </span>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground opacity-80">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> secure
          </div>
        </div>

        <Field label="Name" name="name" placeholder="Ada Lovelace" />
        <Field label="Email" name="email" type="email" placeholder="ada@analytic.engine" />

        <label className="block">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground opacity-60 mb-2">
            Message
          </div>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="What are you building?"
            className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/60 focus:bg-background/80 transition-all resize-none placeholder:opacity-40"
          />
        </label>

        <button
          type="submit"
          disabled={sent}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] border border-border rounded-xl px-5 py-3 mt-2 self-start hover:bg-foreground hover:text-background disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-foreground transition-all duration-200"
        >
          {sent ? (
            <>
              <Check className="w-3.5 h-3.5 text-red-500 stroke-[2.5]" /> sent
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

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, type = "text", placeholder }: FieldProps) {
  return (
    <label className="block">
      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground opacity-60 mb-2">
        {label}
      </div>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-foreground/60 focus:bg-background/80 transition-all placeholder:opacity-40"
      />
    </label>
  );
}
