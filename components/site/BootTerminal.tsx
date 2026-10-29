import type { CSSProperties } from "react";
import { MonoLabel } from "@/components/hud";
import { cn } from "@/lib/cn";

type TerminalLine = {
  text: string;
  width: string;
  delay: string;
  duration: string;
};

type TypeStyle = CSSProperties & {
  "--type-width": string;
  "--type-delay": string;
  "--type-duration": string;
};

const lines: TerminalLine[] = [
  { text: "> boot: portfolio", width: "18ch", delay: "0.1s", duration: "0.5s" },
  { text: "> user: julz cortes", width: "20ch", delay: "0.45s", duration: "0.55s" },
  {
    text: "> role: full-stack developer",
    width: "29ch",
    delay: "0.85s",
    duration: "0.65s",
  },
  { text: "> ready", width: "8ch", delay: "1.4s", duration: "0.35s" },
];

function styleFor(line: TerminalLine): TypeStyle {
  return {
    "--type-width": line.width,
    "--type-delay": line.delay,
    "--type-duration": line.duration,
  };
}

export function BootTerminal({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full max-w-md rounded-panel border border-line bg-surface/70",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <MonoLabel className="text-faint">boot log</MonoLabel>
        <MonoLabel className="text-accent/70">online</MonoLabel>
      </div>

      <div className="space-y-1.5 px-4 py-4 font-mono text-xs leading-relaxed text-muted sm:text-[0.8125rem]">
        {lines.map((line, index) => (
          <p key={line.text} className="flex min-h-5">
            <span className="hud-type" style={styleFor(line)}>
              {line.text}
            </span>

            {index === lines.length - 1 ? (
              <span
                aria-hidden="true"
                className="hud-caret ml-1 h-3.5 w-[0.55ch] shrink-0 self-center bg-accent"
              />
            ) : null}
          </p>
        ))}
      </div>
    </div>
  );
}
