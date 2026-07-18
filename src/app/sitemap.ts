import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date("2026-07-18");

  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/quote", priority: 0.95, freq: "monthly" },
    { path: "/displays", priority: 0.9, freq: "monthly" },
    { path: "/displays/weddings", priority: 0.9, freq: "monthly" },
    { path: "/displays/wedding-packages", priority: 0.85, freq: "monthly" },
    { path: "/displays/bonfire-night", priority: 0.85, freq: "monthly" },
    { path: "/displays/corporate", priority: 0.85, freq: "monthly" },
    { path: "/displays/public-events", priority: 0.85, freq: "monthly" },
    { path: "/displays/pyromusicals", priority: 0.8, freq: "monthly" },
    { path: "/displays/special-effects", priority: 0.8, freq: "monthly" },
    { path: "/drone-shows", priority: 0.9, freq: "monthly" },
    { path: "/portfolio", priority: 0.8, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/about/team", priority: 0.6, freq: "monthly" },
    { path: "/about/safety", priority: 0.75, freq: "monthly" },
    { path: "/shop", priority: 0.7, freq: "weekly" },
    { path: "/reviews", priority: 0.7, freq: "weekly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/faqs", priority: 0.7, freq: "monthly" },
    { path: "/careers", priority: 0.5, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
