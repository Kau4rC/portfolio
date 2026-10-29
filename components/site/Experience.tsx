import { MonoLabel } from "@/components/hud";
import { Reveal } from "@/components/motion/Reveal";
import { certifications, education, experience } from "@/lib/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        description="Client work, on-site IT support, and the credentials behind the infrastructure side."
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
        <ol className="space-y-10">
          {experience.map((role, index) => (
            <li key={role.role} className="border-l border-line pl-5">
              <Reveal delay={index * 0.06}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {role.role}
                  </h3>

                  <MonoLabel className="text-faint">{role.period}</MonoLabel>
                </div>

                <p className="mt-1 font-mono text-xs text-muted">{role.org}</p>

                <ul className="mt-3 space-y-2">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-accent/50"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="space-y-10">
          <Reveal variant="fade">
            <section aria-labelledby="education-heading">
              <h3
                id="education-heading"
                className="font-mono text-xs uppercase tracking-hud text-accent/80"
              >
                Education
              </h3>

              <p className="mt-4 font-display text-lg font-semibold tracking-tight">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <MonoLabel className="mt-2 block text-faint">
                {education.period}
              </MonoLabel>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {education.note}
              </p>
            </section>
          </Reveal>

          <Reveal variant="fade" delay={0.1}>
            <section aria-labelledby="certifications-heading">
              <h3
                id="certifications-heading"
                className="font-mono text-xs uppercase tracking-hud text-accent/80"
              >
                Certifications
              </h3>

              <ul className="mt-4 space-y-3">
                {certifications.map((certification) => (
                  <li
                    key={certification.name}
                    className="border-l border-line pl-3"
                  >
                    <p className="text-sm text-text">{certification.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-faint">
                      {certification.issuer} · {certification.year}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
