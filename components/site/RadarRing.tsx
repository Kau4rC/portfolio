import { cn } from "@/lib/cn";

const radii = [184, 144, 104, 64];
const ticks = Array.from({ length: 48 }, (_, index) => index * 7.5);

export function RadarRing({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative aspect-square w-full max-w-[26rem]", className)}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full text-accent" fill="none">
        <circle
          cx="200"
          cy="200"
          r="196"
          stroke="currentColor"
          strokeOpacity="0.2"
        />

        {radii.map((radius) => (
          <circle
            key={radius}
            cx="200"
            cy="200"
            r={radius}
            stroke="currentColor"
            strokeOpacity="0.22"
          />
        ))}

        <path d="M200 4v392M4 200h392" stroke="currentColor" strokeOpacity="0.14" />

        {ticks.map((angle) => {
          const radians = (angle * Math.PI) / 180;
          const inner = angle % 90 === 0 ? 184 : 190;

          return (
            <line
              key={angle}
              x1={200 + Math.cos(radians) * inner}
              y1={200 + Math.sin(radians) * inner}
              x2={200 + Math.cos(radians) * 196}
              y2={200 + Math.sin(radians) * 196}
              stroke="currentColor"
              strokeOpacity={angle % 90 === 0 ? 0.6 : 0.28}
            />
          );
        })}

        <g className="radar-sweep">
          <path
            d="M200 200 200 16 A184 184 0 0 1 330 70 Z"
            fill="currentColor"
            fillOpacity="0.07"
          />
          <path
            d="M200 200 200 16"
            stroke="currentColor"
            strokeOpacity="0.45"
          />
        </g>

        <circle cx="200" cy="200" r="8" stroke="currentColor" strokeOpacity="0.5" />
        <circle cx="200" cy="200" r="3" fill="currentColor" />
      </svg>

      <span className="absolute inset-x-0 bottom-1 text-center font-mono text-xs uppercase tracking-hud text-faint">
        CCNA · CyberOps
      </span>
    </div>
  );
}
