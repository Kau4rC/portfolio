import { Scanline } from "@/components/hud";
import { BootTerminal } from "./BootTerminal";
import { Cta } from "./Cta";
import { RadarRing } from "./RadarRing";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden border-b border-line px-6 py-20 sm:px-8"
    >
      <Scanline />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="min-w-0">
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-accent text-glow">Julz Cortes</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Full-stack developer building reliable web applications, with a
            networking foundation and a habit of automating the boring parts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="#projects">View projects</Cta>
            <Cta href="#contact" variant="ghost">
              Get in touch
            </Cta>
          </div>

          <BootTerminal className="mt-10" />
        </div>

        <RadarRing className="hidden justify-self-end lg:block" />
      </div>
    </section>
  );
}
