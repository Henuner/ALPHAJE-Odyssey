type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-meadow">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-ink/68 sm:text-lg">{description}</p>
    </div>
  );
}
