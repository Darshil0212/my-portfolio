interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "between";
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  const lines = title.split("\n");

  return (
    <div
      className={
        align === "between"
          ? "grid md:grid-cols-[1fr_auto] gap-6 items-end mb-16"
          : "mb-12"
      }
    >
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tighter leading-[0.95] uppercase">
          {lines.map((line, i) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="h-1 w-24 bg-primary mt-4" />
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
