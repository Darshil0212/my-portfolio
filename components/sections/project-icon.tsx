import {
  Gem,
  Receipt,
  ShoppingBag,
  Dna,
  Truck,
  ShoppingCart,
  Briefcase,
  Music,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { ProjectIconName } from "@/data/portfolio";

const iconMap: Record<ProjectIconName, LucideIcon> = {
  gem: Gem,
  receipt: Receipt,
  "shopping-bag": ShoppingBag,
  dna: Dna,
  truck: Truck,
  "shopping-cart": ShoppingCart,
  briefcase: Briefcase,
  music: Music,
  utensils: UtensilsCrossed,
};

interface ProjectIconProps {
  name: ProjectIconName;
  className?: string;
}

export function ProjectIcon({ name, className }: ProjectIconProps) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={1.5} />;
}
