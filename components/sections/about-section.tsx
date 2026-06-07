import Link from "next/link";
import { MapPin, Briefcase, FolderKanban } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutContent, siteConfig } from "@/data/portfolio";

const stats = [
  {
    icon: Briefcase,
    value: `${siteConfig.experienceYears} Yrs`,
    label: "Experience",
  },
  {
    icon: FolderKanban,
    value: siteConfig.projectCountDisplay,
    label: "Projects",
  },
  {
    icon: MapPin,
    value: "Surat",
    label: "Based In",
  },
];

export function AboutSection() {
  return (
    <Container
      id="about"
      component="section"
      wrapperClassName="py-24 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 space-y-8">
          <SectionHeader title={"ABOUT\nME"} />
          <p className="text-sm font-mono text-muted-foreground -mt-6">
            {siteConfig.role}
          </p>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-border bg-card/30 p-3 text-center hover:border-primary/40 transition-colors"
              >
                <stat.icon className="size-4 text-primary mx-auto mb-2" />
                <p className="font-display text-lg font-bold leading-none">
                  {stat.value}
                </p>
                <p className="font-mono text-[9px] text-muted-foreground mt-1 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 space-y-5">
          <div className="border border-border bg-card/20 p-6 md:p-8 space-y-5">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { label: "Source", href: siteConfig.github },
              { label: "LinkedIn", href: siteConfig.linkedin },
              { label: "Email", href: `mailto:${siteConfig.email}` },
              { label: "WhatsApp", href: siteConfig.whatsapp },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-xs font-mono uppercase border border-border px-4 py-2 hover:border-primary hover:text-primary transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
