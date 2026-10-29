import { MonoLabel, Panel } from "@/components/hud";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/lib/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        title="Projects"
        description="Systems built for real clients and departments — asset management, point of sale, and medical records."
      />

      <div className="mt-10 grid gap-4">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            variant="left"
            delay={index * 0.08}
          >
            <Panel
              tone="raised"
              className="grid gap-6 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,15rem)]"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>

              <div className="md:border-l md:border-line md:pl-6">
                <MonoLabel className="text-faint">Stack</MonoLabel>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-hud border border-line px-2 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
