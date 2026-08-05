import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const base = process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
