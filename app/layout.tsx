import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biobalans.sk"),
  title: { default: "BioBalans | Holistické centrum Vranov nad Topľou", template: "%s | BioBalans" },
  description: "Výživové poradenstvo, InBody, One Brain, systemické konštelácie a individuálny prístup Ing. Martiny Melkovičovej vo Vranove nad Topľou.",
  keywords: ["BioBalans", "výživové poradenstvo", "InBody", "One Brain", "Vranov nad Topľou", "Martina Melkovičová"],
  icons: { icon: "/images/biobalans-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
