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
        colorTwo="#333333"
        ringCount={5}
        speed={0.4}
        attenuation={14}
        lineThickness={1.2}
        baseRadius={0.35}
        radiusStep={0.1}
        scaleRate={0.06}
        opacity={0.18}
        blur={3}
        noiseAmount={0.04}
        followMouse={true}
        mouseInfluence={0.05}
        parallax={0.015}
        clickBurst={false}
      />
    </div>
  );
}
