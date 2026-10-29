import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Cta({
  href,
  children,
  variant = "primary",
  className,
}: CtaProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-hud px-5",
        "font-mono text-xs uppercase tracking-hud transition-colors",
        variant === "primary"
          ? "bg-accent text-void hover:bg-accent-bright"
          : "border border-line text-text hover:border-accent/60 hover:text-accent",
        className,
      )}
    >
      {children}
    </a>
  );
}
