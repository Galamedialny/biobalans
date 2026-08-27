import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HanyMel OZ – Hankin príbeh a možnosť pomôcť",
  description: "HanyMel OZ vo Vranove nad Topľou pomáha Hanke pokrývať liečbu, rehabilitácie, špeciálne pomôcky a cestu k väčšej samostatnosti.",
  keywords: ["HanyMel OZ", "Hanka Melkovičová", "pomoc Hanke", "CIDP", "občianske združenie Vranov nad Topľou", "2 percentá z dane", "rehabilitácie pre Hanku"],
  alternates: { canonical: "/hanymeloz", languages: { "sk-SK": "/hanymeloz" } },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "https://www.biobalans.sk/hanymeloz",
    siteName: "HanyMel OZ",
    title: "HanyMel OZ – Pomáhame Hanke kráčať vpred",
    description: "Spoznajte Hankin príbeh a podporte jej liečbu, rehabilitácie, špeciálne pomôcky a väčšiu samostatnosť.",
    images: [{ url: "/hanymeloz/opengraph-image", width: 1200, height: 630, alt: "HanyMel OZ – pomáhame Hanke kráčať vpred" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HanyMel OZ – Pomáhame Hanke kráčať vpred",
    description: "Spoznajte Hankin príbeh a možnosti podpory.",
    images: ["/hanymeloz/opengraph-image"],
  },
  robots: { index: true, follow: true },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": "https://www.biobalans.sk/hanymeloz#organization",
  name: "HanyMel OZ",
  url: "https://www.biobalans.sk/hanymeloz",
  logo: "https://www.biobalans.sk/images/hanymel-logo.webp",
  image: "https://www.biobalans.sk/images/hanka-cyklochodnik.webp",
  identifier: "IČO 55971334",
  email: "hanymel@biobalans.sk",
  telephone: "+421915195930",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Komenského 634/18",
    postalCode: "093 02",
    addressLocality: "Vranov nad Topľou",
    addressCountry: "SK"
  },
  description: "Občianske združenie pomáhajúce Hanke s nákladmi na liečbu, rehabilitácie, špeciálne pomôcky a podporu samostatnosti.",
  parentOrganization: { "@id": "https://www.biobalans.sk/#business" }
};

const activities = ["Zbierky, charitatívne a benefičné podujatia na podporu združenia a zdravotne znevýhodnených ľudí a ich rodín.","Besedy, prednášky a workshopy o zdravej výžive a zdravom životnom štýle.","Osvetová činnosť v oblasti výživy a prevencie.","Skupinové a individuálne programy, podporné kruhy a aktivity zamerané na zvládanie stresu a psychohygienu.","Facilitované rozvojové stretnutia v neklinickej, rozvojovej a preventívnej rovine.","Eko-vzdelávanie o krajine, udržateľnosti, odpadoch, vode, biodiverzite a šetrnom hospodárení."];
const gallery = [["/images/hanka-cita.webp","Knihy miluje a v nemocnici je dosť času na čítanie."],["/images/hanka-tvori.webp","Aj v nemocnici rada tvorí."],["/images/hanka-bratislava.webp","Potulky po Bratislave po návšteve Národného ústavu detských chorôb."],["/images/hanka-zvieratka.webp","Miluje zvieratká."],["/images/hanka-schodochod.webp","Podpora na schodolez v hodnote 1 500 €."],["/images/hanka-respect.webp","Príspevok 800 € od Nadácie Respect."]];

export default function HanyMelPage(){return <main className="hany-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
  <header className="site-header hany-header"><Link href="/" className="brand"><Image src="/images/biobalans-logo.webp" alt="BioBalans" width={50} height={50}/><span><b>BIO BALANS</b><small>HOLISTICKÉ CENTRUM</small></span></Link><nav><Link href="/">BioBalans</Link><a href="#pribeh">Hankin príbeh</a><a href="#aktivity">Aktivity</a><a href="#podpora">Podporte Hanku</a></nav></header>
  <section className="hany-hero"><div className="hany-hero-copy"><Image className="hany-logo" src="/images/hanymel-logo.webp" alt="HanyMel OZ" width={380} height={250}/><p className="eyebrow pink-text">Občianske združenie vo Vranove nad Topľou</p><h1>Pomáhame Hanke<br/>kráčať <em>vpred.</em></h1><p>Aj malá pomoc môže byť veľkým krokom k lepšiemu životu.</p><a className="button pink" href="#podpora">Podporiť Hanku</a></div><div className="hany-main-photo"><Image src="/images/hanka-cyklochodnik.webp" alt="Hanka skúša nový cyklochodník" fill sizes="(max-width: 900px) 100vw, 50vw" priority/><span>Skúšame nový cyklochodník 😉</span></div></section>
  <section className="section intro-oz"><div><p className="eyebrow pink-text">O združení</p><h2>Pomoc, ľudskosť, odbornosť a komunita.</h2></div><div className="prose"><p><strong>HanyMel OZ</strong> je občianske združenie pôsobiace vo Vranove nad Topľou. Vzniklo pôvodne pre Hanku na účely získavania 2 % z daní, ktoré pomáhajú pokrývať nákladné terapie, špeciálne pomôcky, liečbu a ďalšie potreby súvisiace s jej ochorením.</p><p>Chceme, aby sa o potrebách ľudí so zdravotným znevýhodnením viac hovorilo a aby boli prirodzenou a plnohodnotnou súčasťou spoločnosti. Každý človek si zaslúži rešpekt, dôstojnosť, podporu a možnosť rozvíjať svoj potenciál.</p></div></section>
  <section id="pribeh" className="story-section"><div className="story-title"><p className="eyebrow pink-text">Hankin príbeh</p><h2>Veselé dievčatko s veľkou fantáziou.</h2></div><div className="story-copy"><p>Hanka sa narodila ako zdravé, veselé a usmievavé dievčatko s veľkou fantáziou a láskou k tancu. Odmalička snívala, že raz bude baletkou, a hudba ju dokázala rozosmiať a roztancovať.</p><p>Prvé zdravotné ťažkosti sa objavili v roku 2022. Časté padanie, slabosť a únava nôh postupne sťažovali schody, bicyklovanie aj istotu pri chôdzi. Po náročných vyšetreniach na detskej neurológii v Košiciach prišla prvá diagnóza – Guillainov-Barrého syndróm.</p><p>Po liečbe a rehabilitáciách sa stav na istý čas stabilizoval. Po ochoreniach v roku 2024 sa však opäť zhoršil. Pridali sa deformácie chodidiel, skracovanie šliach a slabosť rúk. Ďalšie vyšetrenia stanovili diagnózu <strong>CIDP – chronická zápalová demyelinizačná polyneuropatia</strong>.</p><p>Dnes Hanka potrebuje špeciálnu obuv a na dlhšie vzdialenosti pomoc pri chôdzi. Ťažšie uchopuje pero či drobné predmety, no zostáva tvorivým a zvedavým dievčatkom. Rada kreslí návrhy šiat a doplnkov, číta a rada sa hrá.</p><p>Našou najväčšou snahou je zastaviť alebo spomaliť progres ochorenia a pomôcť Hanke dosiahnuť čo najväčšiu samostatnosť. Čakajú ju ďalšie vyšetrenia, rehabilitácie a v budúcnosti operácia šliach na nohách.</p><blockquote>Hanka sa nevzdáva. A my spolu s ňou. ❤️</blockquote></div></section>
  <section className="gallery-section"><p className="eyebrow pink-text">Hankin svet</p><h2>Chvíle, ktoré rozprávajú príbeh.</h2><div className="photo-grid">{gallery.map(([src,caption],i)=><figure key={src} className={i===0?"wide":""}><Image src={src} alt={caption} fill sizes="(max-width: 700px) 100vw, 33vw"/><figcaption>{caption}</figcaption></figure>)}</div></section>
  <section id="aktivity" className="activities-section"><div><p className="eyebrow pink-text">Naše aktivity</p><h2>Pomoc, ktorá má konkrétny a dlhodobý význam.</h2></div><div className="activity-list">{activities.map((item,i)=><article key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></article>)}</div></section>
  <section id="podpora" className="support-section"><div><p className="eyebrow light">Podporte Hanku</p><h2>Každý príspevok pomáha meniť každodennosť.</h2><p>Vaša pomoc podporí liečbu, rehabilitácie, špeciálne pomôcky a úpravy, ktoré Hanke umožnia byť samostatnejšou.</p></div><div className="bank-card"><small>Účet občianskeho združenia</small><b>SK42 7500 0000 0040 3516 5049</b><span>HanyMel OZ · IČO: 55971334</span><a href="mailto:hanymel@biobalans.sk">hanymel@biobalans.sk</a></div></section>
  <section className="hany-contact"><h2>Sme tu pre dobrú vec.</h2><div><a href="tel:+421915195930">0915 195 930</a><a href="mailto:hanymel@biobalans.sk">hanymel@biobalans.sk</a><span>Komenského 634/18, 093 02 Vranov nad Topľou</span></div></section>
  <footer className="main-footer"><div className="footer-top"><div className="footer-brand"><Image src="/images/biobalans-logo.webp" alt="BioBalans" width={58} height={58}/><span><b>BIO BALANS</b><small>Holistické centrum</small></span></div><p>Prevádzkovateľ: optiMM s. r. o.<br/>Komenského 634/18, Vranov nad Topľou</p><p>IČO: 47432489<br/>DIČ: 2023891177</p><p>© {new Date().getFullYear()} BioBalans<br/><a className="footer-facebook" href="https://www.facebook.com/biobalans.sk" target="_blank" rel="noreferrer"><span className="footer-fb-icon">f</span> Facebook BioBalans</a><br/><Link className="footer-privacy" href="/ochrana-sukromia">Ochrana súkromia a cookies</Link></p></div><div className="hany-footer-line"><Link href="/">← Späť na BioBalans</Link><span>HanyMel OZ · IČO: 55971334</span></div><div className="footer-credit">Web bol vytvorený mediálnou spoločnosťou <a href="https://www.galamedia.sk" target="_blank" rel="noreferrer">GALA MEDIA</a></div></footer>
</main>}
