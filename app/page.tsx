import { Code2, Terminal, Database, Cpu } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EducationSection } from "@/components/sections/education-section";
import { SectionHeader } from "@/components/ui/section-header";
import { skills } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />

      {/* Skills Matrix */}
      <Container
        id="skills"
        component="section"
        wrapperClassName="py-24 bg-secondary/20 border-t border-border"
        className="mx-auto max-w-7xl flex-1"
      >
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeader title="TECH_STACK" />
            <p className="text-muted-foreground mb-8 -mt-6">
              Technologies I use to build full-stack web applications — from
              React frontends to Node.js APIs and databases.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Code2 className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">REACT_UI</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Database className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">MONGO_DB</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Cpu className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">NODE_API</span>
              </div>
              <div className="p-4 border border-border bg-background flex flex-col items-center justify-center aspect-square hover:border-primary transition-colors">
                <Terminal className="h-8 w-8 mb-2 text-primary" />
                <span className="font-mono text-xs">GIT_FLOW</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid sm:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-6">
                <h3 className="text-xl font-display border-b border-primary/30 pb-2 inline-block">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between group"
                    >
                      <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                      <div className="h-[2px] w-12 bg-secondary group-hover:bg-primary transition-colors" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <EducationSection />

      {/* Contact Section — commented for future use (Formspree integration) */}
      {/*
      <Container id="contact" className="py-24 bg-card border-t border-border">
        ...
      </Container>
      */}

      <SiteFooter />
    </div>
  );
}
