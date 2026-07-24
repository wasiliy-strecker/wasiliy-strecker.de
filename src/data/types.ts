export type Locale = "de" | "en";

export type ProjectCategory =
  | "java"
  | "react-node"
  | "flutter-dart"
  | "php-wordpress"
  | "browser-web"
  | "devops-tools";

export interface LocalizedText {
  de: string;
  en: string;
}

export interface ProjectLink {
  kind: "github" | "product" | "store" | "release";
  label: LocalizedText;
  href: string;
}

export interface Project {
  slug: string;
  repository?: string;
  title: string;
  category: ProjectCategory;
  status: LocalizedText;
  featuredOrder?: number;
  summary: LocalizedText;
  problem: LocalizedText;
  outcome: LocalizedText;
  highlights: {
    de: string[];
    en: string[];
  };
  technologies: string[];
  links: ProjectLink[];
  image?: string;
  imageAlt?: LocalizedText;
}
