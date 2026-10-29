import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function MonoLabel({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-xs leading-none uppercase tracking-hud text-accent/80",
        className,
      )}
      {...props}
    />
  );
}
