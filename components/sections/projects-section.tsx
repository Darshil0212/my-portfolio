"use client";

import { useState, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/sections/project-card";
import { projects, siteConfig } from "@/data/portfolio";
import Link from "next/link";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 3;
const LOAD_MORE_COUNT = 3;

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [animatingFrom, setAnimatingFrom] = useState<number | null>(null);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setAnimatingFrom(visibleCount);
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, projects.length)
    );
    setTimeout(() => setAnimatingFrom(null), 800);
  };

  return (
    <Container
      id="projects"
      component="section"
      wrapperClassName="py-24 border-t border-border"
      className="mx-auto max-w-7xl flex-1"
    >
      <SectionHeader
        title={"FEATURED\nPROJECTS"}
        subtitle="Production apps and enterprise builds from my professional work — spanning MERN stack, React, and Next.js."
        align="between"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => {
          const isNew =
            animatingFrom !== null && index >= animatingFrom;
          return (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              className={cn(isNew && "project-reveal")}
              style={
                isNew
                  ? ({
                      "--reveal-delay": `${(index - (animatingFrom ?? 0)) * 120}ms`,
                    } as CSSProperties)
                  : undefined
              }
            />
          );
        })}
      </div>

      {hasMore && (
        <div className="text-center mt-14">
          <Button
            variant="outline"
            size="lg"
            onClick={handleLoadMore}
            className="font-mono uppercase border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary gap-2 min-w-[220px]"
          >
            Load More Projects
            <ChevronDown className="size-4" />
          </Button>
          <p className="text-xs font-mono text-muted-foreground mt-4">
            Showing {visibleCount} featured projects · {siteConfig.projectCountDisplay} total delivered
          </p>
        </div>
      )}

      {!hasMore && visibleCount > INITIAL_COUNT && (
        <div className="text-center mt-12 space-y-3 border-t border-border/50 pt-10 max-w-xl mx-auto">
          <p className="text-xs font-mono text-muted-foreground leading-relaxed">
            {siteConfig.projectsEndNote}
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/70 leading-relaxed">
            {siteConfig.projectsMoreNote}
          </p>
          <Link
            href={`mailto:${siteConfig.email}?subject=Portfolio — Request More Project Details`}
            className="inline-block text-xs font-mono text-primary hover:underline uppercase mt-2"
          >
            Request Details →
          </Link>
        </div>
      )}
    </Container>
  );
}
