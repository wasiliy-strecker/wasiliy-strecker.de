import type { Metadata } from "next";

import { siteUrl } from "@/content/site";
import type { Locale, Project } from "@/data/types";
import { projectPath } from "@/lib/routes";

const titles = {
  de: "Wasiliy Strecker | Anwendungsentwickler",
  en: "Wasiliy Strecker | Application Developer",
};

const descriptions = {
  de: "Portfolio von Wasiliy Strecker: über 8 Jahre Webentwicklung und Projekte mit Java, Spring Boot, React, TypeScript, Node.js, Flutter und Dart.",
  en: "Portfolio of Wasiliy Strecker: more than 8 years in web development and projects with Java, Spring Boot, React, TypeScript, Node.js, Flutter, and Dart.",
};

export function homeMetadata(locale: Locale): Metadata {
  const path = locale === "de" ? "/" : "/en/";
  return {
    metadataBase: new URL(siteUrl),
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: path,
      languages: {
        "de-DE": "/",
        "en-US": "/en/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      url: path,
      siteName: "Wasiliy Strecker",
      title: titles[locale],
      description: descriptions[locale],
      images: [{ url: "/og-card.png", width: 1200, height: 630, alt: titles[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale],
      description: descriptions[locale],
      images: ["/og-card.png"],
    },
    icons: {
      icon: "/favicon.svg",
    },
    manifest: "/site.webmanifest",
  };
}

export function projectMetadata(project: Project, locale: Locale): Metadata {
  const canonical = projectPath(locale, project.slug);
  const alternate = projectPath(locale === "de" ? "en" : "de", project.slug);
  return {
    metadataBase: new URL(siteUrl),
    title: `${project.title} | Wasiliy Strecker`,
    description: project.summary[locale],
    alternates: {
      canonical,
      languages: {
        "de-DE": locale === "de" ? canonical : alternate,
        "en-US": locale === "en" ? canonical : alternate,
        "x-default": projectPath("de", project.slug),
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "de" ? "de_DE" : "en_US",
      url: canonical,
      siteName: "Wasiliy Strecker",
      title: `${project.title} | Wasiliy Strecker`,
      description: project.summary[locale],
      images: [{ url: "/og-card.png", width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Wasiliy Strecker`,
      description: project.summary[locale],
      images: ["/og-card.png"],
    },
  };
}

export function legalMetadata(locale: Locale, kind: "legal" | "privacy"): Metadata {
  const isLegal = kind === "legal";
  const title =
    locale === "de"
      ? isLegal
        ? "Impressum | Wasiliy Strecker"
        : "Datenschutz | Wasiliy Strecker"
      : isLegal
        ? "Legal notice | Wasiliy Strecker"
        : "Privacy | Wasiliy Strecker";
  const canonical =
    locale === "de"
      ? isLegal
        ? "/impressum/"
        : "/datenschutz/"
      : isLegal
        ? "/en/legal-notice/"
        : "/en/privacy/";
  const alternate =
    locale === "de"
      ? isLegal
        ? "/en/legal-notice/"
        : "/en/privacy/"
      : isLegal
        ? "/impressum/"
        : "/datenschutz/";
  return {
    metadataBase: new URL(siteUrl),
    title,
    alternates: {
      canonical,
      languages: {
        "de-DE": locale === "de" ? canonical : alternate,
        "en-US": locale === "en" ? canonical : alternate,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
