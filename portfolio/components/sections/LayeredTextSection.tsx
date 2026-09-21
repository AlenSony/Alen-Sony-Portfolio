"use client";

import { LayeredText } from "@/components/ui/layered-text";

export default function LayeredTextSection() {
  return (
    <section
      id="manifesto"
      className="relative flex min-h-[62dvh] items-center justify-center overflow-hidden border-y border-white/5 bg-[#0a0a0b] px-6 py-14 sm:min-h-[68dvh] sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(720px_360px_at_50%_30%,rgba(255,255,255,0.045),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] grid-lines" />
      <div className="relative w-full max-w-[1320px]">
        <p className="eyebrow text-center">Manifesto — hover to reveal</p>
        <div className="mt-6">
          <LayeredText
            lines={[
              { top: "\u00A0", bottom: "CREATIVE" },
              { top: "CREATIVE", bottom: "SOLUTIONS" },
              { top: "SOLUTIONS", bottom: "THROUGH" },
              { top: "THROUGH", bottom: "MODERN" },
              { top: "MODERN", bottom: "TECHNOLOGY" },
              { top: "TECHNOLOGY", bottom: "\u00A0" },
            ]}
            fontSize="clamp(44px, 9vw, 88px)"
            fontSizeMd="clamp(28px, 8vw, 52px)"
            lineHeight={72}
            lineHeightMd={46}
            className="text-[#f5f3ef]"
          />
        </div>
      </div>
    </section>
  );
}
