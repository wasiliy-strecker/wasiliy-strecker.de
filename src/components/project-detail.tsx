import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { getCopy, siteUrl } from "@/content/site";
import { categoryLabels, projects } from "@/data/projects";
import type { Locale, Project } from "@/data/types";
import { homePath, projectPath } from "@/lib/routes";

import { ExternalLink } from "./external-link";
import { ProjectCard } from "./project-card";
import { ProjectIcon } from "./project-icon";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function ProjectDetail({ project, locale }: { project: Project; locale: Locale }) {
  const text = getCopy(locale);
  const alternateHref = projectPath(locale === "de" ? "en" : "de", project.slug);
  const related = projects
    .filter(
      (candidate) => candidate.category === project.category && candidate.slug !== project.slug,
    )
    .slice(0, 3);
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary[locale],
    url: `${siteUrl}${projectPath(locale, project.slug)}`,
    author: {
      "@type": "Person",
      name: "Wasiliy Strecker",
      url: siteUrl,
    },
    programmingLanguage: project.technologies,
    codeRepository: project.links.find((link) => link.kind === "github")?.href,
  };

  return (
    <>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <main>
        <article className="project-detail">
          <header className="project-detail__hero">
            <div className="project-detail__shape" aria-hidden="true" />
            <div className="shell">
              <a className="back-link" href={`${homePath(locale)}#projects`}>
                <ArrowLeft aria-hidden="true" size={18} />
                {text.detail.back}
              </a>
              <div className="project-detail__intro">
                <ProjectIcon project={project} size="large" />
                <div>
                  <p className="eyebrow">
                    {categoryLabels[project.category][locale]} · {project.status[locale]}
                  </p>
                  <h1>{project.title}</h1>
                  <p>{project.summary[locale]}</p>
                </div>
              </div>
              <div className="project-detail__hero-links">
                {project.links.map((link, index) => (
                  <ExternalLink
                    key={`${link.kind}-${link.href}`}
                    href={link.href}
                    className={`button ${index === 0 ? "button--primary" : "button--secondary"}`}
                  >
                    {link.label[locale]}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </header>

          <div className="shell project-detail__content">
            {project.image && project.imageAlt ? (
              <figure className="project-detail__image">
                <Image
                  src={project.image}
                  alt={project.imageAlt[locale]}
                  width={1280}
                  height={760}
                  sizes="(max-width: 900px) 92vw, 1080px"
                />
              </figure>
            ) : (
              <div
                className={`project-visual project-visual--${project.category}`}
                aria-hidden="true"
              >
                <ProjectIcon project={project} size="large" />
                <span>{project.technologies.slice(0, 3).join(" · ")}</span>
              </div>
            )}

            <div className="detail-two-column">
              <section>
                <p className="eyebrow">{text.detail.problem}</p>
                <h2>{project.problem[locale]}</h2>
              </section>
              <section>
                <p className="eyebrow">{text.detail.outcome}</p>
                <h2>{project.outcome[locale]}</h2>
              </section>
            </div>

            <section className="detail-highlights">
              <div>
                <p className="eyebrow">{text.detail.highlights}</p>
                <h2>
                  {locale === "de"
                    ? "Nachvollziehbare Entscheidungen statt Schlagworte."
                    : "Reviewable decisions instead of slogans."}
                </h2>
              </div>
              <ul>
                {project.highlights[locale].map((highlight) => (
                  <li key={highlight}>
                    <CheckCircle2 aria-hidden="true" size={21} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-technologies">
              <p className="eyebrow">{text.detail.technologies}</p>
              <ul className="tag-list tag-list--large">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="section section--tinted related-projects">
            <div className="shell">
              <div className="section-heading">
                <p className="eyebrow">{text.detail.related}</p>
              </div>
              <div className="project-grid project-grid--compact">
                {related.map((candidate) => (
                  <ProjectCard key={candidate.slug} project={candidate} locale={locale} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
