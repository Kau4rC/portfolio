type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
