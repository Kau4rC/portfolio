import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative z-10 px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 font-mono text-xs uppercase tracking-hud text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Julz Cortes</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
