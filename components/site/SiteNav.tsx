"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { navItems, profile } from "@/lib/content";

export function SiteNav() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);
    const top = document.getElementById("top");

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          setActive(entry.target.id === "top" ? null : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    if (top) {
      observer.observe(top);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-void">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6 sm:px-8">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          {profile.displayName}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={cn(
                    "inline-flex py-2 font-mono text-xs uppercase tracking-hud transition-colors hover:text-accent",
                    active === item.id ? "text-accent" : "text-muted",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-hud border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            aria-hidden="true"
            className="size-4"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-line md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2.5 font-mono text-xs uppercase tracking-hud transition-colors hover:text-accent",
                    active === item.id ? "text-accent" : "text-muted",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
