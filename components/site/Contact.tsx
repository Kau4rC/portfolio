import { GlowBorder, MonoLabel } from "@/components/hud";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { profile } from "@/lib/content";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <Section id="contact" divider={false}>
      <SectionHeading
        title="Let's build something reliable."
        description="For roles, project work, or a technical conversation, email is the fastest way to reach me."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-4">
        <Reveal className="h-full sm:col-span-2">
          <ContactLink
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
        </Reveal>
        <Reveal className="h-full" delay={0.08}>
          <ContactLink
            label="GitHub"
            value={profile.github.label}
            href={profile.github.href}
            external
          />
        </Reveal>
        <Reveal className="h-full" delay={0.16}>
          <ContactLink
            label="LinkedIn"
            value={profile.linkedin.label}
            href={profile.linkedin.href}
            external
          />
        </Reveal>
      </div>
    </Section>
  );
}

type ContactLinkProps = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

function ContactLink({
  label,
  value,
  href,
  external = false,
}: ContactLinkProps) {
  return (
    <GlowBorder className="h-full">
      <a
        href={href}
        className="flex h-full flex-col justify-between gap-8 p-6"
        {...(external
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        <span className="flex items-center justify-between">
          <MonoLabel className="text-faint">{label}</MonoLabel>
          <ArrowUpRight className="size-4 text-accent" />
        </span>

        <span className="font-display text-lg font-semibold tracking-tight">
          {value}
          {external ? <span className="sr-only"> (opens in new tab)</span> : null}
        </span>
      </a>
    </GlowBorder>
  );
}
