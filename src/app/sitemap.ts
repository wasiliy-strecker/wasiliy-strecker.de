import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";
import { projects } from "@/data/projects";
import { projectPath } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-28T00:00:00+02:00");
  const staticRoutes = [
    { de: "/", en: "/en/", priority: 1 },
    { de: "/impressum/", en: "/en/legal-notice/", priority: 0.2 },
    { de: "/datenschutz/", en: "/en/privacy/", priority: 0.2 },
  ];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) => [
    {
      url: `${siteUrl}${route.de}`,
      lastModified,
      changeFrequency: route.priority === 1 ? "weekly" : "yearly",
      priority: route.priority,
      alternates: {
        languages: {
          de: `${siteUrl}${route.de}`,
          en: `${siteUrl}${route.en}`,
        },
      },
    },
    {
      url: `${siteUrl}${route.en}`,
      lastModified,
      changeFrequency: route.priority === 1 ? "weekly" : "yearly",
      priority: route.priority,
      alternates: {
        languages: {
          de: `${siteUrl}${route.de}`,
          en: `${siteUrl}${route.en}`,
        },
      },
    },
  ]);
  const projectEntries: MetadataRoute.Sitemap = projects.flatMap((project) => {
    const de = projectPath("de", project.slug);
    const en = projectPath("en", project.slug);
    return [
      {
        url: `${siteUrl}${de}`,
        lastModified,
        changeFrequency: "monthly",
        priority: project.featuredOrder ? 0.8 : 0.6,
        alternates: {
          languages: {
            de: `${siteUrl}${de}`,
            en: `${siteUrl}${en}`,
          },
        },
      },
      {
        url: `${siteUrl}${en}`,
        lastModified,
        changeFrequency: "monthly",
        priority: project.featuredOrder ? 0.8 : 0.6,
        alternates: {
          languages: {
            de: `${siteUrl}${de}`,
            en: `${siteUrl}${en}`,
          },
        },
      },
    ];
  });

  return [...staticEntries, ...projectEntries];
}
