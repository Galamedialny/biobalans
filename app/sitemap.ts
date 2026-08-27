import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.biobalans.sk";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/hanymeloz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
