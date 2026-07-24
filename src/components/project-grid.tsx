"use client";

import { useMemo, useState } from "react";

import { getCopy } from "@/content/site";
import { categoryLabels } from "@/data/projects";
import type { Locale, Project, ProjectCategory } from "@/data/types";

import { ProjectCard } from "./project-card";

type Filter = "all" | ProjectCategory;

export function ProjectGrid({ projects, locale }: { projects: Project[]; locale: Locale }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const text = getCopy(locale);
  const filters = Object.keys(categoryLabels) as ProjectCategory[];
  const visibleProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects],
  );

  return (
    <>
      <div
        className="project-filters"
        aria-label={locale === "de" ? "Projektfilter" : "Project filters"}
      >
        <button
          type="button"
          className={activeFilter === "all" ? "is-active" : ""}
          aria-pressed={activeFilter === "all"}
          onClick={() => setActiveFilter("all")}
        >
          {text.allProjects.all}
        </button>
        {filters.map((filter) => (
          <button
            type="button"
            className={activeFilter === filter ? "is-active" : ""}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            key={filter}
          >
            {categoryLabels[filter][locale]}
          </button>
        ))}
      </div>
      {visibleProjects.length > 0 ? (
        <div className="project-grid project-grid--compact" aria-live="polite">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="empty-state">{text.allProjects.empty}</p>
      )}
    </>
  );
}
