"use client";

import MagicRings from "./MagicRings";

export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      <MagicRings
        color="#ffffff"
        colorTwo="#2a2a2e"
        ringCount={4}
        speed={0.28}
        attenuation={16}
        lineThickness={1}
        baseRadius={0.38}
        radiusStep={0.12}
        scaleRate={0.05}
        opacity={0.07}
        blur={4}
        noiseAmount={0.025}
        followMouse={true}
        mouseInfluence={0.03}
        parallax={0.01}
        clickBurst={false}
      />
    </div>
  );
}
