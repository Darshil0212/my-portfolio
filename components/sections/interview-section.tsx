import { Container } from "@/components/zippystarter/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    title: "Interview-ready clarity",
    description:
      "Simple, clean messaging that explains your role, tech stack, and key achievements at a glance.",
    badge: "Hiring-friendly",
  },
  {
    title: "Responsive presentation",
    description:
      "The layout works across mobile, tablet, and desktop so recruiters can review your portfolio anywhere.",
    badge: "Every device",
  },
  {
    title: "Production-grade detail",
    description:
      "Featured projects show real business outcomes with enterprise, MERN stack, and admin-dashboard experience.",
    badge: "Technical depth",
  },
];

export function InterviewSection() {
  return (
    <Container
      id="interview"
      component="section"
      wrapperClassName="py-24 bg-secondary/10 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <SectionHeader
        title="INTERVIEW\nREADY"
        subtitle="Designed for hiring managers: clear skills, strong outcomes, and a professional responsive layout."
      />

      <div className="grid gap-6 md:grid-cols-3 mt-10">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="border border-border bg-card/60 p-6 space-y-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-display leading-tight">{item.title}</h3>
              <Badge className="uppercase text-[10px] tracking-[0.25em] py-2 px-3">
                {item.badge}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
