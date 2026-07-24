import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

import { contactEmail, getCopy, githubUrl, siteUrl } from "@/content/site";
import { featuredProjects, otherProjects, projects } from "@/data/projects";
import type { Locale } from "@/data/types";
import { homePath } from "@/lib/routes";

import { ExternalLink } from "./external-link";
import { ProjectCard } from "./project-card";
import { ProjectGrid } from "./project-grid";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function HomePage({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const alternateHref = locale === "de" ? "/en/" : "/";
  const repositoryCount = projects.filter((project) => project.repository).length;
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wasiliy Strecker",
    url: `${siteUrl}${homePath(locale)}`,
    image: `${siteUrl}/media/wasiliy-strecker.webp`,
    jobTitle: locale === "de" ? "Anwendungsentwickler" : "Application Developer",
    email: `mailto:${contactEmail}`,
    sameAs: [githubUrl, "https://www.contest-gallery.com/"],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Node.js",
      "Flutter",
      "Dart",
      "PHP",
      "WordPress",
    ],
  };

  return (
    <>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <main>
        <section className="hero">
          <div className="hero__shape hero__shape--one" aria-hidden="true" />
          <div className="hero__shape hero__shape--two" aria-hidden="true" />
          <div className="shell hero__grid">
            <div className="hero__content">
              <p className="eyebrow">
                <MapPin aria-hidden="true" size={16} />
                {text.hero.eyebrow}
              </p>
              <h1>{text.hero.title}</h1>
              <p className="hero__lead">{text.hero.body}</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#projects">
                  {text.hero.projects}
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <ExternalLink className="button button--secondary" href={githubUrl}>
                  <Code2 aria-hidden="true" size={18} />
                  {text.hero.github}
                </ExternalLink>
                <a className="text-link" href={`mailto:${contactEmail}`}>
                  <Mail aria-hidden="true" size={17} />
                  {text.hero.contact}
                </a>
              </div>
              <div className="hero__trust">
                <BadgeCheck aria-hidden="true" size={20} />
                <span>
                  {locale === "de"
                    ? "Produkterfahrung · Open-Source-Portfolio · CI-verifizierte Projekte"
                    : "Product experience · Open-source portfolio · CI-verified projects"}
                </span>
              </div>
            </div>
            <div className="portrait-composition">
              <div className="portrait-composition__accent" aria-hidden="true" />
              <div className="portrait-composition__frame">
                <Image
                  src="/media/wasiliy-strecker.webp"
                  alt={
                    locale === "de"
                      ? "Porträt von Wasiliy Strecker"
                      : "Portrait of Wasiliy Strecker"
                  }
                  width={574}
                  height={470}
                  priority
                  sizes="(max-width: 780px) 82vw, 430px"
                />
              </div>
              <div className="portrait-composition__note">
                <span className="status-dot" aria-hidden="true" />
                <div>
                  <strong>{text.role}</strong>
                  <span>Java · React · Node.js · Flutter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="proof-strip"
          aria-label={locale === "de" ? "Kennzahlen" : "Key figures"}
        >
          <div className="shell proof-strip__grid">
            <div>
              <strong>{text.proof.yearsValue}</strong>
              <span>{text.proof.yearsLabel}</span>
            </div>
            <div>
              <strong>{text.proof.installsValue}</strong>
              <span>{text.proof.installsLabel}</span>
            </div>
            <div>
              <strong>{repositoryCount}</strong>
              <span>{text.proof.projectsLabel}</span>
            </div>
          </div>
        </section>

        <section className="section section--production">
          <div className="shell">
            <div className="production-card">
              <div className="production-card__symbol" aria-hidden="true">
                <Sparkles size={34} />
              </div>
              <div className="production-card__content">
                <p className="eyebrow">{text.production.eyebrow}</p>
                <h2>{text.production.title}</h2>
                <p>{text.production.body}</p>
                <div className="production-card__actions">
                  <ExternalLink
                    className="button button--on-dark"
                    href="https://www.contest-gallery.com/"
                  >
                    {text.production.primary}
                  </ExternalLink>
                  <ExternalLink
                    className="text-link text-link--on-dark"
                    href="https://wordpress.org/plugins/contest-gallery/"
                  >
                    {text.production.secondary}
                  </ExternalLink>
                </div>
              </div>
              <div className="production-card__metrics">
                <div>
                  <strong>{text.production.metricOne}</strong>
                  <span>{text.production.metricOneLabel}</span>
                </div>
                <div>
                  <strong>{text.production.metricTwo}</strong>
                  <span>{text.production.metricTwoLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">{text.featured.eyebrow}</p>
              <h2>{text.featured.title}</h2>
              <p>{text.featured.body}</p>
            </div>
            <div className="project-grid project-grid--featured">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} locale={locale} featured />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tinted">
          <div className="shell">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">{text.allProjects.eyebrow}</p>
                <h2>{text.allProjects.title}</h2>
              </div>
              <p>{text.allProjects.body}</p>
            </div>
            <ProjectGrid projects={otherProjects} locale={locale} />
          </div>
        </section>

        <section className="section" id="experience">
          <div className="shell split-layout">
            <div className="section-heading section-heading--sticky">
              <p className="eyebrow">{text.experience.eyebrow}</p>
              <h2>{text.experience.title}</h2>
              <p>{text.experience.body}</p>
            </div>
            <div className="timeline">
              {text.experience.entries.map((entry) => (
                <article className="timeline__entry" key={`${entry.period}-${entry.title}`}>
                  <span className="timeline__marker" aria-hidden="true" />
                  <p className="timeline__period">{entry.period}</p>
                  <h3>{entry.title}</h3>
                  <p>{entry.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--about" id="about">
          <div className="shell">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">{text.about.eyebrow}</p>
              <h2>{text.about.title}</h2>
              <p>{text.about.body}</p>
            </div>
            <div className="principles-grid">
              {text.about.principles.map((principle, index) => {
                const icons = [ShieldCheck, CheckCircle2, BriefcaseBusiness];
                const Icon = icons[index];
                return (
                  <article key={principle.title}>
                    <span>
                      <Icon aria-hidden="true" size={23} />
                    </span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="shell">
            <div className="contact-card">
              <div>
                <p className="eyebrow">{text.contact.eyebrow}</p>
                <h2>{text.contact.title}</h2>
                <p>{text.contact.body}</p>
              </div>
              <div className="contact-card__actions">
                <a className="button button--primary" href={`mailto:${contactEmail}`}>
                  <Mail aria-hidden="true" size={18} />
                  {text.contact.email}
                </a>
                <ExternalLink className="button button--secondary" href={githubUrl}>
                  <Code2 aria-hidden="true" size={18} />
                  {text.contact.github}
                </ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
