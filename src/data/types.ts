export type ServiceType = "electric" | "ac" | "mixed" | "cost";

export type AreaId =
  | "jakarta"
  | "tangerang-selatan"
  | "tangerang-kota";

export type AreaName =
  | "Jakarta"
  | "Tangerang Selatan"
  | "Tangerang Kota";

export type PageType =
  | "home"
  | "service"
  | "local-service"
  | "about"
  | "cost"
  | "contact";

export type SeoMeta = {
  title: string;
  description: string;
  canonical: string;
  robots?: "index, follow" | "noindex, nofollow";
  ogImage?: string;
};

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export type HeroData = {
  badge?: string;
  h1: string;
  subheadline: string;
  primaryCtaId: string;
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type CardItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type CategoryItem = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  items: string[];
};

export type StepItem = {
  number: number;
  title: string;
  description: string;
  icon?: string;
};

export type CtaConfig = {
  id: string;
  label: string;
  message: string;
  serviceType: ServiceType;
  area?: AreaName | null;
  channel: "whatsapp";
  trackingName: string;
};

export type SectionType =
  | "service-summary"
  | "problem-grid"
  | "category-grid"
  | "location-type-cards"
  | "education-split"
  | "consultation-steps"
  | "area-cards"
  | "trust-grid"
  | "faq"
  | "cta"
  | "internal-links";

export type BaseSection = {
  id: string;
  title: string;
  description?: string;
};

export type ServiceSummaryCardData = {
  id: string;
  title: string;
  description: string;
  primaryCtaId: string;
  secondaryLink: LinkItem;
  icon?: string;
};

export type ServiceSummarySection = BaseSection & {
  type: "service-summary";
  services: ServiceSummaryCardData[];
};

export type ProblemGridSection = BaseSection & {
  type: "problem-grid";
  items: CardItem[];
  serviceType?: ServiceType;
};

export type CategoryGridSection = BaseSection & {
  type: "category-grid";
  items: CategoryItem[];
  serviceType?: ServiceType;
};

export type LocationTypeCardData = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  locations: string[];
};

export type LocationTypeCardsSection = BaseSection & {
  type: "location-type-cards";
  items: LocationTypeCardData[];
};

export type EducationSplitSection = BaseSection & {
  type: "education-split";
  body: string[];
  highlightTitle?: string;
  highlightDescription?: string;
  ctaId?: string;
  points?: string[];
};

export type ConsultationStepsSection = BaseSection & {
  type: "consultation-steps";
  steps: StepItem[];
};

export type AreaCardData = {
  id: string;
  name: string;
  description: string;
  links: LinkItem[];
  icon?: string;
};

export type AreaCardsSection = BaseSection & {
  type: "area-cards";
  areas: AreaCardData[];
};

export type TrustGridSection = BaseSection & {
  type: "trust-grid";
  items: CardItem[];
};

export type FaqSection = BaseSection & {
  type: "faq";
  faq: FaqItem[];
};

export type CTASectionData = BaseSection & {
  type: "cta";
  primaryCtaId: string;
  secondaryLink?: LinkItem;
};

export type InternalLinksSection = BaseSection & {
  type: "internal-links";
  links: LinkItem[];
};

export type PageSection =
  | ServiceSummarySection
  | ProblemGridSection
  | CategoryGridSection
  | LocationTypeCardsSection
  | EducationSplitSection
  | ConsultationStepsSection
  | AreaCardsSection
  | TrustGridSection
  | FaqSection
  | CTASectionData
  | InternalLinksSection;

export type PageData = {
  slug: string;
  type: PageType;
  serviceType?: ServiceType;
  area?: AreaName | null;
  areaId?: AreaId | null;
  seo: SeoMeta;
  breadcrumb?: BreadcrumbItem[];
  hero: HeroData;
  sections: PageSection[];
  faq?: FaqItem[];
  schema: {
    localBusiness?: boolean;
    website?: boolean;
    service?: boolean;
    faq?: boolean;
    breadcrumb?: boolean;
    aboutPage?: boolean;
    contactPage?: boolean;
  };
};
