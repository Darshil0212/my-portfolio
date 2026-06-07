import { GraduationCap, School, Calendar } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { education, type EducationLevel } from "@/data/portfolio";

const levelConfig: Record<
  EducationLevel,
  { icon: typeof GraduationCap; label: string }
> = {
  postgrad: { icon: GraduationCap, label: "Postgraduate" },
  grad: { icon: GraduationCap, label: "Graduation" },
  hsc: { icon: School, label: "12th Standard" },
  ssc: { icon: School, label: "10th Standard" },
};

function EducationCard({ item }: { item: (typeof education)[number] }) {
  const config = levelConfig[item.level];
  const Icon = config.icon;
  const isSchool = item.level === "hsc" || item.level === "ssc";

  return (
    <div className="group border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 flex flex-col h-full">
      <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="size-10 border border-primary/30 bg-background flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
              <Icon className="size-4 text-primary" />
            </div>
            <Badge
              variant="secondary"
              className="font-mono text-[10px] uppercase tracking-wide max-w-full truncate"
            >
              {config.label}
            </Badge>
          </div>

          <div className="text-left sm:text-right shrink-0 w-full sm:w-auto">
            <p
              className={`font-mono font-bold leading-none text-primary break-words ${
                isSchool ? "text-lg md:text-xl" : "text-sm md:text-base"
              }`}
            >
              {item.period}
            </p>
            {item.examMonth && (
              <p className="font-mono text-[10px] text-muted-foreground mt-1.5 flex items-center justify-start sm:justify-end gap-1">
                <Calendar className="size-3" />
                {item.examMonth}
              </p>
            )}
          </div>
        </div>

        <h3 className="text-lg font-display leading-tight group-hover:text-primary transition-colors break-words">
          {item.degree}
        </h3>
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed flex-1 break-words">
          {item.institution}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] border border-border/80 bg-background/50 px-2.5 py-1 text-muted-foreground group-hover:border-primary/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.note && (
          <p className="text-xs text-muted-foreground/70 mt-4 font-mono border-t border-border/50 pt-4">
            {item.note}
          </p>
        )}
      </div>
    </div>
  );
}

export function EducationSection() {
  const higherEd = education.filter(
    (e) => e.level === "postgrad" || e.level === "grad"
  );
  const schoolEd = education.filter(
    (e) => e.level === "hsc" || e.level === "ssc"
  );

  return (
    <Container
      id="education"
      component="section"
      wrapperClassName="py-24 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <SectionHeader
        title="Education"
        subtitle="Academic background from school to postgraduate studies."
      />

      <div className="space-y-10">
        <div>
          <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4">
            Higher Education
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {higherEd.map((item) => (
              <EducationCard key={item.degree} item={item} />
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[10px] text-primary uppercase tracking-widest mb-4">
            School Education
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {schoolEd.map((item) => (
              <EducationCard key={item.degree} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
