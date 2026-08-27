import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.biobalans.sk/sitemap.xml",
    host: "https://www.biobalans.sk",
  };
}
