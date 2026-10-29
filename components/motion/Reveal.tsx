"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

type RevealVariant = "up" | "fade" | "left";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  amount?: number;
};

const offsets: Record<RevealVariant, { x?: number; y?: number }> = {
  up: { y: 22 },
  fade: {},
  left: { x: -24 },
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  amount = 0.25,
}: RevealProps) {
  const reduced = useReducedMotion();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (reduced || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offsets[variant] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
