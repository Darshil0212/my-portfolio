"use client";

import Link from "next/link";
import { ArrowRight, Code2, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { buttonVariants } from "@/components/ui/button";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { SysStatusPanel } from "@/components/sections/sys-status-panel";
import { siteConfig, typewriterStrings } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <Container
      wrapperClassName="relative min-h-screen flex items-center pt-16 overflow-hidden"
      className="mx-auto max-w-7xl flex-1"
    >
      <div className="absolute inset-0 z-0">
        <div className="relative w-[100vw] h-[100vh] bg-background overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/hero-bg.jpg')] before:absolute before:inset-0 before:bg-primary before:mix-blend-color-dodge dark:before:mix-blend-color" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[11px] sm:text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="truncate">GSTNOVA WEB SOFTWARE</span>
          </div>

          <p className="text-sm font-mono text-muted-foreground tracking-wider">
            {siteConfig.name.toUpperCase()}
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display tracking-tighter leading-[0.86]">
            FULL
            <br />
            STACK
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#fde047] to-foreground min-h-[1.1em] inline-block max-w-full">
              <TypewriterText
                strings={typewriterStrings}
                className="block whitespace-nowrap overflow-hidden"
              />
            </span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground max-w-md leading-relaxed">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-4 items-center">
            <Link
              href="#projects"
              className={cn("uppercase", buttonVariants({ size: "lg" }))}
            >
              View Projects <ArrowRight className="size-4" />
            </Link>
            <div className="flex gap-2">
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Source profile"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Code2 className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                aria-label="Send email"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <SysStatusPanel />
      </div>
    </Container>
  );
}
