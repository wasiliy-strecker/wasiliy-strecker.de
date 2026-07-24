import { ArrowRight } from "lucide-react";

import { getCopy } from "@/content/site";
import { categoryLabels } from "@/data/projects";
import type { Locale, Project } from "@/data/types";
import { projectPath } from "@/lib/routes";

import { ProjectIcon } from "./project-icon";

export function ProjectCard({
  project,
  locale,
  featured = false,
}: {
  project: Project;
  locale: Locale;
  featured?: boolean;
}) {
  const text = getCopy(locale);

  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      <div className="project-card__top">
        <ProjectIcon project={project} size={featured ? "large" : "default"} />
        <div className="project-card__labels">
          {featured ? <span className="project-card__featured">{text.card.featured}</span> : null}
          <span>{categoryLabels[project.category][locale]}</span>
        </div>
      </div>
      <div className="project-card__body">
        <p className="project-card__status">{project.status[locale]}</p>
        <h3>{project.title}</h3>
        <p>{project.summary[locale]}</p>
      </div>
      <ul className="tag-list" aria-label={text.detail.technologies}>
        {project.technologies.slice(0, featured ? 5 : 4).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <a className="project-card__link" href={projectPath(locale, project.slug)}>
        {text.card.view}
        <ArrowRight aria-hidden="true" size={18} />
      </a>
    </article>
  );
}
