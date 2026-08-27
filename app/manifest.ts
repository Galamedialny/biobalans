import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BioBalans – Holistické centrum",
    short_name: "BioBalans",
    description: "Výživové poradenstvo, InBody, One Brain a individuálny prístup vo Vranove nad Topľou.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#17362d",
    lang: "sk",
    icons: [
      { src: "/images/biobalans-logo.webp", sizes: "512x512", type: "image/webp", purpose: "any" }
    ]
  };
}
