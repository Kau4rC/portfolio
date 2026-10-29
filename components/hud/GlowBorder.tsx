import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function GlowBorder({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative rounded-panel border border-line bg-surface/60",
        "transition-[border-color,box-shadow] duration-300 ease-hud",
        "hover:border-accent/50 hover:shadow-glow",
        "focus-within:border-accent/50 focus-within:shadow-glow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
