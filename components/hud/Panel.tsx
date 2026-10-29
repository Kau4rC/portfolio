import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type PanelProps = ComponentProps<"div"> & {
  corners?: boolean;
  tone?: "base" | "raised";
};

const cornerPositions = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "left-0 bottom-0 border-l border-b",
  "right-0 bottom-0 border-r border-b",
] as const;

export function Panel({
  className,
  corners = true,
  tone = "base",
  children,
  ...props
}: PanelProps) {
  return (
    <div
      className={cn(
        "relative rounded-panel border border-line shadow-panel",
        tone === "raised" ? "bg-surface-raised" : "bg-surface/80",
        className,
      )}
      {...props}
    >
      {corners ? <CornerTicks /> : null}
      {children}
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      {cornerPositions.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute size-2.5 border-accent/45",
            position,
          )}
        />
      ))}
    </>
  );
}
