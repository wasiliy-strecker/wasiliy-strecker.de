import { Code2, Mail, Menu } from "lucide-react";

import { contactEmail, getCopy, githubUrl } from "@/content/site";
import type { Locale } from "@/data/types";
import { homePath } from "@/lib/routes";

export function SiteHeader({ locale, alternateHref }: { locale: Locale; alternateHref: string }) {
  const text = getCopy(locale);
  const home = homePath(locale);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="brand" href={home} aria-label={`${text.name} – ${text.role}`}>
          <span className="brand__mark" aria-hidden="true">
            WS
          </span>
          <span className="brand__text">
            <strong>{text.name}</strong>
            <span>{text.role}</span>
          </span>
        </a>

        <nav
          className="desktop-nav"
          aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}
        >
          <a href={`${home}#projects`}>{text.navigation.projects}</a>
          <a href={`${home}#experience`}>{text.navigation.experience}</a>
          <a href={`${home}#about`}>{text.navigation.about}</a>
          <a href={`${home}#contact`}>{text.navigation.contact}</a>
        </nav>

        <div className="header-actions">
          <a
            className="header-icon-link"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 aria-hidden="true" size={20} />
          </a>
          <a
            className="header-icon-link"
            href={`mailto:${contactEmail}`}
            aria-label={locale === "de" ? "E-Mail schreiben" : "Send an email"}
          >
            <Mail aria-hidden="true" size={20} />
          </a>
          <a
            className="language-link"
            href={alternateHref}
            hrefLang={locale === "de" ? "en" : "de"}
          >
            {locale === "de" ? "EN" : "DE"}
          </a>
          <details className="mobile-menu">
            <summary aria-label={locale === "de" ? "Menü öffnen" : "Open menu"}>
              <Menu aria-hidden="true" size={22} />
            </summary>
            <nav aria-label={locale === "de" ? "Mobile Navigation" : "Mobile navigation"}>
              <a href={`${home}#projects`}>{text.navigation.projects}</a>
              <a href={`${home}#experience`}>{text.navigation.experience}</a>
              <a href={`${home}#about`}>{text.navigation.about}</a>
              <a href={`${home}#contact`}>{text.navigation.contact}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
