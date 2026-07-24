import type { Locale } from "@/data/types";

export function homePath(locale: Locale) {
  return locale === "de" ? "/" : "/en/";
}

export function projectPath(locale: Locale, slug: string) {
  return locale === "de" ? `/projekte/${slug}/` : `/en/projects/${slug}/`;
}

export function legalPath(locale: Locale) {
  return locale === "de" ? "/impressum/" : "/en/legal-notice/";
}

export function privacyPath(locale: Locale) {
  return locale === "de" ? "/datenschutz/" : "/en/privacy/";
}
