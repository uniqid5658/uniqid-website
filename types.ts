import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  additionalImages?: string[];
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}