import { describe, expect, it } from "vitest";

import githubRepositories from "./github-repos.json";
import { featuredProjects, projects } from "./projects";

describe("portfolio project catalog", () => {
  it("contains every planned project", () => {
    expect(projects).toHaveLength(24);
  });

  it("uses unique slugs and repository names", () => {
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length);
    const repositories = projects.flatMap((project) =>
      project.repository ? [project.repository] : [],
    );
    expect(new Set(repositories).size).toBe(repositories.length);
  });

  it("represents every public GitHub repository", () => {
    const catalogRepositories = new Set(
      projects.flatMap((project) => (project.repository ? [project.repository] : [])),
    );

    expect(githubRepositories).toHaveLength(23);
    for (const repository of githubRepositories) {
      expect(catalogRepositories.has(repository.name)).toBe(true);
    }
  });

  it("keeps the six strongest projects in the agreed order", () => {
    expect(featuredProjects.map((project) => project.slug)).toEqual([
      "transactional-outbox-relay",
      "java-idempotency-kit",
      "java-performance-lab",
      "durable-webhook-kit",
      "flowform-studio",
      "csv-healer",
    ]);
  });

  it("has complete bilingual content and safe links", () => {
    for (const project of projects) {
      expect(project.summary.de.length).toBeGreaterThan(20);
      expect(project.summary.en.length).toBeGreaterThan(20);
      expect(project.problem.de.length).toBeGreaterThan(20);
      expect(project.problem.en.length).toBeGreaterThan(20);
      expect(project.outcome.de.length).toBeGreaterThan(20);
      expect(project.outcome.en.length).toBeGreaterThan(20);
      expect(project.highlights.de.length).toBeGreaterThanOrEqual(3);
      expect(project.highlights.en.length).toBe(project.highlights.de.length);
      expect(project.technologies.length).toBeGreaterThanOrEqual(3);
      for (const link of project.links) {
        expect(link.href).toMatch(/^https:\/\//);
      }
    }
  });
});
