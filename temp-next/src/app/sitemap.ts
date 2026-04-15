import type { MetadataRoute } from "next";

import { teams } from "@/data/site";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/le-club",
    "/equipes",
    "/saison",
    "/evenements",
    "/rejoindre",
    "/contact",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const teamPages = teams.map((team) => ({
    url: `${siteConfig.url}/equipes/${team.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...teamPages];
}
