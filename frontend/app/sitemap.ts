import type { MetadataRoute } from "next";
import { dictionaries, defaultLocale, getLocalizedPath, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();
  const staticPaths = ["/", "/projects", "/ai-consultant"];

  return [
    ...locales.flatMap((locale) =>
      staticPaths.map((path) => ({
        url: `${siteUrl}${getLocalizedPath(locale, path) === "/" ? "" : getLocalizedPath(locale, path)}`,
        lastModified: now,
        changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "/" ? 1 : 0.8
      }))
    ),
    ...locales.flatMap((locale) =>
      dictionaries[defaultLocale].services.map((service) => ({
        url: `${siteUrl}${getLocalizedPath(locale, `/services/${service.slug}`)}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7
      }))
    )
  ];
}
