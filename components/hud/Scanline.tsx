import { cn } from "@/lib/cn";

type ScanlineProps = {
  className?: string;
  fixed?: boolean;
};

export function Scanline({ className, fixed = false }: ScanlineProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "scanlines pointer-events-none opacity-50",
        fixed ? "fixed inset-0 z-50" : "absolute inset-0",
        className,
      )}
    />
  );
}
