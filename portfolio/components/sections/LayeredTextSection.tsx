"use client";

import { LayeredText } from "@/components/ui/layered-text";

export default function LayeredTextSection() {
  return (
    <section
      id="manifesto"
      className="relative min-h-screen flex items-center justify-center bg-background"
    >
      <LayeredText
        lines={[
          { top: "\u00A0", bottom: "CREATIVE" },
          { top: "CREATIVE", bottom: "SOLUTIONS" },
          { top: "SOLUTIONS", bottom: "THROUGH" },
          { top: "THROUGH", bottom: "MODERN" },
          { top: "MODERN", bottom: "TECHNOLOGY" },
          { top: "TECHNOLOGY", bottom: "\u00A0" },
        ]}
        fontSize="clamp(48px, 10vw, 100px)"
        fontSizeMd="clamp(32px, 8vw, 60px)"
        lineHeight={80}
        lineHeightMd={50}
        className="text-foreground"
      />
    </section>
  );
}
