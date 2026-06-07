import Link from "next/link";
import { ExternalLink, Code2, Mail, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectIcon } from "@/components/sections/project-icon";
import { siteConfig, type Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ProjectCard({
  project,
  index,
  className,
  style,
}: ProjectCardProps) {
  return (
    <Card
      style={style}
      className={`pt-0 group bg-card border-border hover:border-primary/50 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/10 transition-all duration-300 rounded-none overflow-hidden flex flex-col h-full ${className ?? ""}`}
    >
      {/* Visual header */}
      <div className="relative h-36 border-b border-border bg-gradient-to-br from-primary/10 via-card to-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] font-mono text-[8px] leading-relaxed p-3 select-none pointer-events-none whitespace-pre"
          aria-hidden
        >
          {`// ${project.title}\nconst stack = [${project.tags.slice(0, 3).map((t) => `"${t}"`).join(", ")}];\nexport default function App() {\n  return <ProductionBuild />;\n}`}
        </div>
        <div className="absolute top-3 right-3 font-mono text-[10px] text-muted-foreground/50">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="relative h-full p-5 flex items-end justify-between">
          <div className="flex items-center gap-3">
            <div className="size-12 border border-primary/30 bg-background/80 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors">
              <ProjectIcon
                name={project.icon}
                className="size-6 text-primary"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] text-primary uppercase tracking-widest">
                {project.isCompanyProject ? "Production Build" : "Personal Build"}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                {project.tags[0]}
              </p>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="font-mono text-[10px] uppercase shrink-0"
          >
            {project.type}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-display group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </CardTitle>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="font-mono text-[10px] border-border/80"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <ul className="space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="text-sm text-muted-foreground flex items-start gap-2.5"
            >
              <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 pt-0 border-t border-border/50 mt-auto py-4 sm:flex sm:flex-wrap sm:justify-between">
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 w-full justify-center text-[11px] sm:text-xs font-mono inline-flex items-center hover:text-primary transition-colors gap-2 uppercase rounded-md border border-border/70 bg-background/40 px-2.5 py-3 sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 whitespace-nowrap"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Live Demo</span>
            <ExternalLink className="size-3 shrink-0" />
          </Link>
        ) : (
          <Link
            href={`mailto:${siteConfig.email}?subject=Regarding ${project.title}`}
            className="min-w-0 w-full justify-center text-[11px] sm:text-xs font-mono inline-flex items-center hover:text-primary transition-colors gap-2 uppercase rounded-md border border-border/70 bg-background/40 px-2.5 py-3 sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 whitespace-nowrap"
          >
            <span className="sm:hidden">Discuss</span>
            <span className="hidden sm:inline">Discuss Project</span>
            <Mail className="size-3 shrink-0" />
          </Link>
        )}
        <Link
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 w-full justify-center text-[11px] sm:text-xs font-mono inline-flex items-center hover:text-primary transition-colors gap-2 uppercase rounded-md border border-border/70 bg-background/40 px-2.5 py-3 sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 whitespace-nowrap"
        >
          <span className="sm:hidden">Source</span>
          <span className="hidden sm:inline">Source Profile</span>
          <Code2 className="size-3 shrink-0" />
        </Link>
      </CardFooter>
    </Card>
  );
}
