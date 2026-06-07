"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Container } from "@/components/zippystarter/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { SiteLogo } from "@/components/layout/site-logo";
import { navLinks, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Container
      component="header"
      wrapperClassName="fixed top-0 left-0 w-full z-50 bg-[#0b1020]/92 backdrop-blur-xl border-b border-sky-300/20 shadow-[0_10px_30px_rgba(2,6,23,0.35)]"
      className="mx-auto max-w-7xl flex items-center justify-between h-16"
    >
      <SiteLogo onClick={() => setMobileOpen(false)} />

      <nav className="hidden md:flex gap-8 text-sm font-medium text-sky-100/75 uppercase tracking-[0.16em]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-sky-200 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href={siteConfig.resumeFile}
          download={siteConfig.resumeName}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "hidden sm:inline-flex font-mono text-[11px] uppercase tracking-[0.2em] rounded-full border border-sky-300/20 bg-sky-400/10 text-sky-100 shadow-sm shadow-sky-500/10 hover:bg-sky-400/18 hover:text-sky-50 hover:border-sky-200/30"
          )}
        >
          <Download className="size-4" />
          Resume
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-sky-100 hover:text-sky-50 hover:bg-sky-400/10"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#0b1020]/96 backdrop-blur-2xl border-b border-sky-300/20 shadow-[0_18px_40px_rgba(2,6,23,0.45)] md:hidden">
          <div className="flex flex-col px-safe py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium uppercase text-sky-100/90 hover:text-sky-50 hover:bg-sky-400/15 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.resumeFile}
              download={siteConfig.resumeName}
              className="px-4 py-3 text-sm font-mono uppercase text-sky-200 hover:text-sky-50 hover:bg-sky-400/15 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </Container>
  );
}
