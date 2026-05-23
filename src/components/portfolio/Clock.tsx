import { useEffect, useState } from "react";

// 5x7 dot-matrix patterns for digits 0-9
const DIGITS: Record<string, number[][]> = {
  "0": [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,1,1],
    [1,0,1,0,1],
    [1,1,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  "1": [
    [0,0,1,0,0],
    [0,1,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0],
  ],
  "2": [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,1,1,1,1],
  ],
  "3": [
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,1,1,1,0],
  ],
  "4": [
    [0,0,0,1,0],
    [0,0,1,1,0],
    [0,1,0,1,0],
    [1,0,0,1,0],
    [1,1,1,1,1],
    [0,0,0,1,0],
    [0,0,0,1,0],
  ],
  "5": [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  "6": [
    [0,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  "7": [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
  ],
  "8": [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  "9": [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,1,1,1,0],
  ],
  ":": [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
  ],
};

function DotMatrixDigit({
  char,
  size = 4,
  gap = 2,
}: {
  char: string;
  size?: number;
  gap?: number;
}) {
  const grid = DIGITS[char] ?? DIGITS["0"];
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(5, ${size}px)`,
        gridTemplateRows: `repeat(7, ${size}px)`,
        gap: `${gap}px`,
      }}
    >
      {grid.flat().map((on, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-200 ${
            on ? "bg-foreground shadow-[0_0_6px_rgba(255,255,255,0.5)]" : "bg-foreground/[0.06]"
          }`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

function DotMatrixSeparator({ size = 4, gap = 2 }: { size?: number; gap?: number }) {
  const grid = DIGITS[":"];
  return (
    <div
      className="grid self-center"
      style={{
        gridTemplateColumns: `repeat(5, ${size}px)`,
        gridTemplateRows: `repeat(7, ${size}px)`,
        gap: `${gap}px`,
      }}
    >
      {grid.flat().map((on, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-200 ${
            on ? "bg-foreground" : "bg-transparent"
          }`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

export function Clock() {
  const [now, setNow] = useState(new Date());
  const [colonOn, setColonOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setColonOn((p) => !p), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const date = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
  });

  const dotSize = 5;
  const dotGap = 2.5;

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex items-start gap-2 sm:gap-3">
        {/* Hours */}
        <div className="flex gap-1">
          <DotMatrixDigit char={hh[0]} size={dotSize} gap={dotGap} />
          <DotMatrixDigit char={hh[1]} size={dotSize} gap={dotGap} />
        </div>

        {/* Colon */}
        <div className="flex flex-col justify-center h-full pt-1">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(2, ${dotSize}px)`,
              gridTemplateRows: `repeat(7, ${dotSize}px)`,
              gap: `${dotGap}px`,
            }}
          >
            {Array.from({ length: 14 }).map((_, i) => {
              const row = Math.floor(i / 2);
              const isColonDot = row === 2 || row === 4;
              return (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-150 ${
                    isColonDot && colonOn
                      ? "bg-foreground shadow-[0_0_4px_rgba(255,255,255,0.4)]"
                      : "bg-foreground/[0.04]"
                  }`}
                  style={{ width: dotSize, height: dotSize }}
                />
              );
            })}
          </div>
        </div>

        {/* Minutes */}
        <div className="flex gap-1">
          <DotMatrixDigit char={mm[0]} size={dotSize} gap={dotGap} />
          <DotMatrixDigit char={mm[1]} size={dotSize} gap={dotGap} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>{date}</span>
        <span className="opacity-60">·</span>
        <div className="flex items-center gap-0.5">
          <DotMatrixDigit char={ss[0]} size={3} gap={1.5} />
          <DotMatrixDigit char={ss[1]} size={3} gap={1.5} />
        </div>
      </div>
    </div>
  );
}
