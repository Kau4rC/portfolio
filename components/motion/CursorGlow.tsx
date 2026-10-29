"use client";

import { useEffect, useRef } from "react";

const SIZE = 480;

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (reducedMotion.matches || !finePointer.matches) {
      return;
    }

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let visible = false;

    const tick = () => {
      frame = 0;

      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (ref.current) {
        ref.current.style.transform = `translate3d(${currentX - SIZE / 2}px, ${currentY - SIZE / 2}px, 0)`;
      }

      if (
        Math.abs(targetX - currentX) > 0.5 ||
        Math.abs(targetY - currentY) > 0.5
      ) {
        frame = requestAnimationFrame(tick);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        visible = true;
        currentX = targetX;
        currentY = targetY;

        if (ref.current) {
          ref.current.style.opacity = "1";
        }
      }

      if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 size-[480px] opacity-0 transition-opacity duration-700 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, rgb(34 211 238 / 0.07) 0%, rgb(34 211 238 / 0.03) 44%, transparent 70%)",
      }}
    />
  );
}
