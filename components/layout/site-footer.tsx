import Link from "next/link";
import { Code2 } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { siteConfig } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Container
      component="footer"
      className="py-8 sm:py-10 border-t border-border bg-background max-w-7xl mx-auto"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-center">
        <div className="space-y-1 text-center lg:text-left">
          <p className="text-xs sm:text-sm font-mono text-foreground/80 tracking-[0.16em]">
            © {year} GSTNOVA
          </p>
          <p className="text-[10px] sm:text-xs font-mono text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs font-mono text-muted-foreground sm:flex sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-2">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-1 rounded-md border border-border/70 bg-background/40 px-3 py-2 hover:text-primary transition-colors whitespace-nowrap sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
          >
            SOURCE
            <Code2 className="size-3" />
          </Link>
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md border border-border/70 bg-background/40 px-3 py-2 hover:text-primary transition-colors whitespace-nowrap sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
          >
            LINKEDIN
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex w-full items-center justify-center rounded-md border border-border/70 bg-background/40 px-3 py-2 hover:text-primary transition-colors whitespace-nowrap sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
          >
            EMAIL
          </Link>
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md border border-border/70 bg-background/40 px-3 py-2 hover:text-primary transition-colors whitespace-nowrap sm:w-auto sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
          >
            WHATSAPP
          </Link>
        </div>

        <div className="space-y-1 text-center lg:text-right">
          <p className="text-[10px] sm:text-xs font-mono text-muted-foreground whitespace-nowrap">
            {siteConfig.location}
          </p>
          <p className="text-[10px] sm:text-xs font-mono text-primary tracking-[0.16em] whitespace-nowrap">
            OPEN TO FULL STACK ROLES
          </p>
        </div>
      </div>
    </Container>
  );
}
