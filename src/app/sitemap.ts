import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const base = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/manufacturing",
    "/infrastructure",
    "/industries",
    "/gallery",
    "/quality",
    "/contact",
    "/quote",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quote" || route === "/products" ? 0.9 : 0.7,
  }));
}
