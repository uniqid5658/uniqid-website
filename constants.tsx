import { Ruler, Hammer, ClipboardCheck, HardHat, ShieldCheck, History } from 'lucide-react';
import { ServiceItem, ProcessStep, PortfolioItem, NavItem } from './types';

export const COMPANY_NAME = "UNIQID BY NOAH.P";
export const SLOGAN = "Built with Understanding.";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

// Derived from Prompt #4 & #10
export const SERVICES: ServiceItem[] = [
  {
    title: "General Contracting",
    description: "Full-scale execution management. We translate complex design intents into physical reality with precision.",
    icon: Hammer,
  },
  {
    title: "Construction Management",
    description: "Transparent oversight of budget, schedule, and trades. We act as your advocate on the field.",
    icon: ClipboardCheck,
  },
  {
    title: "Design Realization",
    description: "Bridging the gap between blueprint and build. Our design background ensures accurate interpretation.",
    icon: Ruler,
  },
  {
    title: "Site Supervision",
    description: "Daily on-site leadership to ensure safety, quality, and adherence to architectural specifications.",
    icon: HardHat,
  },
  {
    title: "Quality Control",
    description: " rigorous inspection protocols to maintain premium finishes and structural integrity.",
    icon: ShieldCheck,
  },
  {
    title: "After-Service Care",
    description: "Continued support post-completion. We build relationships that last beyond the final handover.",
    icon: History,
  },
];

// Derived from Prompt #3 & #10
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "We study the drawings not just for dimensions, but for intent. We identify potential site challenges before they happen.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Detailed scheduling and material sourcing. We set a rhythm for the project that respects both time and craft.",
  },
  {
    number: "03",
    title: "Build",
    description: "Execution with a focus on clean lines and authentic materials. Our site is kept organized and professional.",
  },
  {
    number: "04",
    title: "Refine",
    description: "The final 5% makes 100% of the difference. We obsess over joints, finishes, and the tactile experience.",
  },
];

// Derived from Prompt #8
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Nordic Cafe & Bakery",
    category: "Commercial",
    imageUrl: "https://picsum.photos/id/435/800/600",
    additionalImages: [
      "https://picsum.photos/id/425/800/600",
      "https://picsum.photos/id/429/800/600",
      "https://picsum.photos/id/305/800/600"
    ],
    description: "A warm, light-filled space featuring custom oak millwork and exposed concrete elements. Precision joinery was key to achieving the seamless transition between service and seating areas."
  },
  {
    id: 2,
    title: "Aesop Style Clinic",
    category: "Medical",
    imageUrl: "https://picsum.photos/id/376/800/600",
    additionalImages: [
      "https://picsum.photos/id/399/800/600",
      "https://picsum.photos/id/401/800/600"
    ],
    description: "Minimalist medical aesthetics with a focus on calm. High-end plaster finishes, recessed lighting, and acoustic dampening create a serene environment for patients."
  },
  {
    id: 3,
    title: "High-Rise Penthouse",
    category: "Residential",
    imageUrl: "https://picsum.photos/id/24/800/600",
    additionalImages: [
      "https://picsum.photos/id/28/800/600",
      "https://picsum.photos/id/42/800/600"
    ],
    description: "Luxury residential renovation emphasizing natural stone and walnut textures. Complex logistical management required for high-rise material handling and soundproofing."
  },
  {
    id: 4,
    title: "Heritage Restoration",
    category: "Commercial",
    imageUrl: "https://picsum.photos/id/203/800/600",
    additionalImages: [
      "https://picsum.photos/id/206/800/600",
      "https://picsum.photos/id/209/800/600"
    ],
    description: "Careful preservation of original brickwork integrated with modern steel reinforcements. A balance of historical character and contemporary structural standards."
  },
  {
    id: 5,
    title: "Minimalist Studio",
    category: "Office",
    imageUrl: "https://picsum.photos/id/1/800/600",
    additionalImages: [
      "https://picsum.photos/id/4/800/600",
      "https://picsum.photos/id/180/800/600"
    ],
    description: "An open-concept workspace designed for clarity. Features polished concrete floors, glass partitions, and integrated smart-lighting systems."
  },
  {
    id: 6,
    title: "Omakase Counter",
    category: "Hospitality",
    imageUrl: "https://picsum.photos/id/449/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/439/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
];