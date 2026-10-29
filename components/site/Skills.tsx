import { Reveal } from "@/components/motion/Reveal";
import { skillGroups } from "@/lib/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        title="Skills"
        description="The tools I reach for, grouped by where they sit in the stack."
      />

      <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const headingId = `skills-${slugify(group.title)}`;

          return (
            <Reveal key={group.title} variant="fade" delay={index * 0.05}>
              <section aria-labelledby={headingId}>
                <h3
                  id={headingId}
                  className="font-mono text-xs uppercase tracking-hud text-accent/80"
                >
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-hud border border-line px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
