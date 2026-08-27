import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";
import WhatsAppButton from "./components/WhatsAppButton";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biobalans.sk"),
  title: {
    default: "BioBalans | Výživové poradenstvo a InBody vo Vranove",
    template: "%s | BioBalans",
  },
  description: "BioBalans vo Vranove nad Topľou – výživové poradenstvo Ing. Martiny Melkovičovej, osobná pyramída potravín, InBody, One Brain, systemické konštelácie a workshopy.",
  applicationName: "BioBalans",
  authors: [{ name: "Ing. Martina Melkovičová", url: "https://www.biobalans.sk" }],
  creator: "BioBalans",
  publisher: "optiMM s. r. o.",
  category: "Zdravie a životný štýl",
  keywords: [
    "BioBalans", "Martina Melkovičová", "výživové poradenstvo Vranov nad Topľou",
    "výživová poradkyňa Vranov", "InBody Vranov nad Topľou", "analýza zloženia tela",
    "osobná pyramída potravín", "One Brain", "3 in 1 Concepts",
    "systemické konštelácie", "zdravá výživa", "holistické centrum Vranov"
  ],
  alternates: { canonical: "/", languages: { "sk-SK": "/" } },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.biobalans.sk/",
    siteName: "BioBalans",
    title: "BioBalans | Výživové poradenstvo a InBody vo Vranove",
    description: "Individuálny prístup k výžive, telu a vnútornému prežívaniu s Ing. Martinou Melkovičovou vo Vranove nad Topľou.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BioBalans – holistické centrum vo Vranove nad Topľou" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioBalans | Holistické centrum vo Vranove",
    description: "Výživové poradenstvo, InBody, One Brain a individuálny prístup vo Vranove nad Topľou.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [{ url: "/images/biobalans-logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/biobalans-logo.webp", type: "image/webp" }],
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}<WhatsAppButton/><CookieConsent/><GoogleAnalytics/></body></html>;
}
