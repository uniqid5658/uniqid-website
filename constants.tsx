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
    title: "Cafe Laforet Austin",
    category: "Bakery&Cafe / Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforet austin/KakaoTalk_20251201_015435098_04.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforet austin/KakaoTalk_20251201_015435098_02.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforet austin/KakaoTalk_20251201_015435098.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforet austin/KakaoTalk_20251201_015435098_03.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforet austin/KakaoTalk_20251201_015435098_05.jpg"
    ],
    description: "Laforet is UNIQID’s bakery project that unifies brand storytelling and spatial detail into one cohesive experience."
  },
  {
    id: 2,
    title: "Little Beetle",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_03.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_01.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_12.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_11.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_09.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_06.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_02.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_05.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_04.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_07.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_08.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/little beetle/KakaoTalk_20251201_015717959_10.jpg"
    ],
    description: "Little Beetle is UNIQID’s project that unifies brand storytelling and spatial detail into a seamless brunch experience."
  },
  {
    id: 3,
    title: "Cedarwood Therapy",
    category: "Clinic",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_030735482.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_12.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_11.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_01.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_04.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_03.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_08.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_02.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_05.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_06.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_07.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_09.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/cedarwood therapy/KakaoTalk_20251201_024538649_10.jpg"
    ],
    description: "Cedarwood Therapy is UNIQID’s wellness project that weaves the brand’s warm sensibility into a balanced, minimal spatial experience."
  },
  {
    id: 4,
    title: "Sushi Hil",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/9.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/10.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/11.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/12.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushihil/13.jpg",
    ],
    description: "A space that supports craftsmanship—unobtrusive, controlled, and beautifully restrained."
  },
  {
    id: 5,
    title: "Cafe Laforet Royaloak",
    category: "Factory / Head office / Retail",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/9.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/laforetroyaloak/10.jpg"
    ],
    description: "We designed Laforet’s main hub—where the aroma of fresh baking begins and where distribution, production, headquarters, and retail flow together into one refined, unified identity."
  },
  {
    id: 6,
    title: "Sushi in Wellington",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/9.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/10.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/11.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/12.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/13.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/14.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/sushiinwellington/15.jpg",
    ],
    description: "We designed the space so that quiet refinement and clean flow reveal the true essence of sushi."
  },
  {
    id: 7,
    title: "Oretachi Curry",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/9.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/10.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/11.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/12.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/13.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/14.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/15.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/16.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/oretachicurry/17.jpg"
    ],
    description: "We shaped a calm and understated spatial language that reflects the brand’s honest flavor, while faithfully recreating the authentic character of a classic Japanese eatery."
  },
  {
    id: 8,
    title: "Osaka Kitchen",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/6.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/1.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/9.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/10.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/osakakitchen/11.jpg"
    ],
    description: "We expressed the rich depth of Osaka cuisine through texture, material, and light."
  },
   {
    id: 9,
    title: "BBQ Chicken Metrotown",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/bbqchicken/9.jpg"
    ],
    description: "We realized BBQ’s first Smart Branch by refining both functional efficiency and the brand’s distinctive character into a clear, contemporary spatial expression."
  },
  {
    id: 10,
    title: "Pho Anh Vu",
    category: "Restaurant",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/phoanhvu/9.jpg",
    ],
    description: "A celebrated pho brand from Toronto, reinterpreted through a clean and contemporary spatial language for its debut Vancouver flagship."
  },
    {
    id: 19,
    title: "M Prive Salon",
    category: "Hair & Nail Salon",
    imageUrl: "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/1.jpg",
    additionalImages: [
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/2.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/3.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/4.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/5.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/6.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/7.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/8.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/9.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/10.jpg",
      "https://raw.githubusercontent.com/uniqid5658/uniqid-website/main/image/mprive/11.jpg",
    ],
    description: "A space defined by calm luxury and a gentle, flowing rhythm—an experience uniquely M Prive."
  },
  {
    id: 11,
    title: "The Seoulful",
    category: "Bakery&Cafe",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 12,
    title: "MK's House",
    category: "Residential",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 13,
    title: "Alma House",
    category: "Residential",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 14,
    title: "Joayo Clinic",
    category: "Clinic",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 15,
    title: "BN Clinic",
    category: "Clinic",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 16,
    title: "Kids Kingdom Early Leaning Center",
    category: "Daycare Facility",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 17,
    title: "Wonder & Grow Child care",
    category: "Daycare Facility",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 18,
    title: "TonTon Sushi",
    category: "Restaurant",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
  {
    id: 20,
    title: "Westvan House",
    category: "Residential",
    imageUrl: "https://picsum.photos/id/447/800/600",
    additionalImages: [
      "https://picsum.photos/id/447/800/600",
      "https://picsum.photos/id/447/800/600"
    ],
    description: "Intimate hospitality setting with a focus on the cypress counter. Exacting standards for plumbing and ventilation were executed behind clean, minimal surfaces."
  },
];
