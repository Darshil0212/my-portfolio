import { Building2, Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { SectionHeader } from "@/components/ui/section-header";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <Container
      id="experience"
      component="section"
      wrapperClassName="py-24 bg-secondary/20 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <SectionHeader
        title="Work Experience"
        subtitle="Professional journey building production React applications and full-stack solutions."
      />

      <div className="relative">
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-border hidden md:block" />

        <div className="grid gap-8">
          {experience.map((job, index) => (
            <div
              key={job.company}
              className="group relative grid md:grid-cols-[40px_1fr] gap-0 md:gap-6"
            >
              <div className="hidden md:flex flex-col items-center pt-8">
                <div className="size-10 border border-primary/40 bg-background flex items-center justify-center z-10 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                  <Building2 className="size-4 text-primary" />
                </div>
              </div>

              <div className="border border-border bg-card/50 p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 md:hidden mb-2">
                      <Building2 className="size-4 text-primary" />
                      <span className="font-mono text-[10px] text-primary uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display group-hover:text-primary transition-colors">
                      {job.role}
                    </h3>
                    <p className="text-primary font-mono text-sm mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 font-mono text-xs text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="size-3 text-primary" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="size-3 text-primary" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 border-t border-border/50 pt-5">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                    >
                      <span className="font-mono text-primary text-[10px] mt-1 shrink-0">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
