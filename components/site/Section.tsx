import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
};

export function Section({
  id,
  children,
  className,
  divider = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-14 px-6 py-24 sm:px-8 sm:py-32",
        divider && "border-b border-line",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
