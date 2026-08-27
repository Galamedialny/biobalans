import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ochrana súkromia a cookies",
  description: "Informácie o spracúvaní osobných údajov a používaní cookies na webovej stránke BioBalans.",
  alternates: { canonical: "/ochrana-sukromia" },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.biobalans.sk/ochrana-sukromia",
    siteName: "BioBalans",
    title: "Ochrana súkromia a cookies | BioBalans",
    description: "Informácie o spracúvaní osobných údajov a používaní cookies na stránke BioBalans.",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <main className="legal-page">
    <div className="legal-wrap">
      <Link className="legal-back" href="/">← Späť na BioBalans</Link>
      <p className="eyebrow">GDPR a cookies</p>
      <h1>Ochrana súkromia</h1>
      <p className="legal-lead">Tieto informácie vysvetľujú, ako prevádzkovateľ webu BioBalans spracúva osobné údaje a používa cookies.</p>
      <section><h2>1. Prevádzkovateľ</h2><p><strong>optiMM s. r. o.</strong><br/>Komenského 634/18, 093 01 Vranov nad Topľou<br/>IČO: 47432489<br/>DIČ: 2023891177<br/>E-mail: <a href="mailto:info@biobalans.sk">info@biobalans.sk</a><br/>Telefón: <a href="tel:+421915195930">0915 195 930</a></p></section>
      <section><h2>2. Kontaktné údaje</h2><p>Ak nás kontaktujete telefonicky, e-mailom alebo cez WhatsApp, spracujeme údaje, ktoré nám poskytnete, najmä meno, kontaktné údaje a obsah komunikácie. Účelom je odpovedať na vašu požiadavku, dohodnúť termín alebo poskytnúť informácie o službách. Právnym základom je vykonanie opatrení pred uzatvorením zmluvy, plnenie zmluvy alebo oprávnený záujem na komunikácii so záujemcami.</p></section>
      <section><h2>3. Doba uchovávania</h2><p>Údaje z bežnej komunikácie uchovávame iba počas obdobia potrebného na vybavenie požiadavky a následne podľa zákonných lehôt. Účtovné a zmluvné doklady uchovávame počas lehôt vyžadovaných právnymi predpismi.</p></section>
      <section><h2>4. Cookies</h2><p>Nevyhnutné cookies zabezpečujú fungovanie stránky a zapamätanie vašej voľby. Analytické cookies sa použijú iba po udelení súhlasu. Externý obsah, napríklad vložená Google mapa, sa načíta iba po povolení tejto kategórie.</p><p>Svoj súhlas môžete odmietnuť alebo upraviť v cookies lište. Nastavenie je uložené vo vašom prehliadači. Vymazaním údajov stránky sa voľba obnoví a lišta sa zobrazí znova.</p></section>
      <section><h2>5. Externé služby</h2><p>Po povolení Google mapy môže spoločnosť Google spracúvať technické údaje, napríklad IP adresu, informácie o prehliadači a používaní mapy, podľa vlastných pravidiel ochrany súkromia. Po kliknutí na WhatsApp alebo Facebook opúšťate našu stránku a spracúvanie údajov sa riadi pravidlami príslušnej služby.</p></section>
      <section><h2>6. Príjemcovia údajov</h2><p>Údaje môžu v nevyhnutnom rozsahu spracúvať poskytovatelia hostingu, technickej podpory, e-mailových alebo komunikačných služieb. Údaje nepredávame tretím stranám.</p></section>
      <section><h2>7. Vaše práva</h2><p>Máte právo požadovať prístup k svojim údajom, ich opravu, vymazanie alebo obmedzenie spracúvania, namietať proti spracúvaniu a požiadať o prenosnosť údajov, ak sú splnené zákonné podmienky. Súhlas môžete kedykoľvek odvolať bez vplyvu na zákonnosť predchádzajúceho spracúvania. Máte tiež právo podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky.</p></section>
      <section><h2>8. Aktualizácia</h2><p>Posledná aktualizácia: 27. augusta 2026. Dokument môžeme upraviť pri zmene služieb alebo právnych požiadaviek.</p></section>
    </div>
  </main>;
}
