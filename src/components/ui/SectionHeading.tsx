interface SectionHeadingProps {
  title: string;
  children?: React.ReactNode;
}

export default function SectionHeading({
  title,
  children,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 leading-7 text-[var(--muted)]">{children}</p>
      )}
    </div>
  );
}
