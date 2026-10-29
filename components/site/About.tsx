import { MonoLabel } from "@/components/hud";
import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/lib/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Education", value: "BS Information Technology, USC" },
  { label: "Certifications", value: "CCNA · CyberOps Associate" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />

      <Reveal className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <p className="leading-relaxed text-muted">
          I&apos;m an IT graduate specialising in full-stack web development. I
          build applications with React, Next.js, Node.js, Express, MySQL, and
          Prisma — from REST APIs and database design to authentication,
          role-based access, and the interface people actually use.
        </p>

        <p className="leading-relaxed text-muted">
          I&apos;ve shipped systems for asset management, inventory,
          point-of-sale, medical records, and business operations. Lately
          I&apos;ve been leaning into workflow automation with n8n and
          AI-assisted document processing, while my CCNA and CyberOps background
          keeps the infrastructure side honest. Outside code, I&apos;ve served on
          the USC Supreme Student Council, worked with GDSC, and volunteered with
          the Philippine Red Cross since 2018.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>
                <MonoLabel className="text-faint">{fact.label}</MonoLabel>
              </dt>
              <dd className="mt-2 text-sm text-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
