import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

interface SiteLogoProps {
  onClick?: () => void;
}

export function SiteLogo({ onClick }: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3 hover:opacity-95 transition-opacity"
    >
      <div className="relative size-9 shrink-0">
        <div className="absolute inset-0 border border-sky-300/35 bg-sky-400/8 backdrop-blur-sm group-hover:border-sky-200/60 transition-colors" />
        <div className="absolute top-0 left-0 size-2 border-t border-l border-sky-200" />
        <div className="absolute bottom-0 right-0 size-2 border-b border-r border-sky-200" />
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-bold text-sky-100 tracking-tighter">
          DK
        </span>
      </div>
      <div className="hidden sm:block font-mono tracking-tighter leading-none">
        <span className="block text-[10px] text-sky-100/70 uppercase tracking-widest">
          Portfolio
        </span>
        <span className="text-sm font-bold uppercase text-sky-50">
          {siteConfig.firstName}
          <span className="text-sky-200">_</span>
          {siteConfig.lastName.split(" ")[0]}
        </span>
      </div>
    </Link>
  );
}
