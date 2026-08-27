import Image from "next/image";
import Link from "next/link";

const services = [
  ["Výživové poradenstvo", "Individuálne konzultácie zamerané na stravovanie, životný štýl a dlhodobo udržateľné návyky."],
  ["Osobná BioBalans pyramída", "Individuálny stravovací plán postavený na vašich potrebách, možnostiach a cieľoch."],
  ["One Brain – 3 in 1 Concepts", "Jemná metóda zameraná na identifikovanie a uvoľnenie emocionálneho stresu s využitím kineziologického svalového testu."],
  ["Systemické konštelácie", "Systemické rozostavenia prinášajú nový pohľad na vzťahy, opakujúce sa situácie a vnútorné súvislosti."],
  ["Meranie stavu tela", "Orientačné meranie kvantovým magnetickým analyzátorom ako doplnkový pohľad na aktuálny stav organizmu."],
  ["InBody analýza", "Bioimpedančná analýza zloženia tela – voda, svalová a tuková hmota, BMI, viscerálny tuk a telesná vyváženosť."],
  ["Prednášky a workshopy", "Praktické stretnutia o výžive, zdravom životnom štýle, prevencii, zvládaní stresu a psychohygiene."],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <Link href="#domov" className="brand"><Image src="/images/biobalans-logo.jpg" alt="BioBalans" width={58} height={58} priority/><span><b>BIO BALANS</b><small>HOLISTICKÉ CENTRUM</small></span></Link>
      <nav><a href="#o-mne">O mne</a><a href="#biobalans">Čo je BioBalans</a><a href="#sluzby">Služby</a><a href="#kontakt">Kontakt</a><Link className="nav-heart" href="/hanymeloz">HanyMel OZ</Link></nav>
    </header>
    <section id="domov" className="hero">
      <div className="hero-copy"><p className="eyebrow">Holistické centrum vo Vranove nad Topľou</p><h1>Rovnováha začína<br/>porozumením <em>sebe.</em></h1><p className="lead">Spájame výživu, prácu s telom a vnútorným prežívaním do individuálneho prístupu, ktorý rešpektuje jedinečnosť každého človeka.</p><div className="hero-actions"><a className="button" href="#kontakt">Objednať sa</a><a className="text-link" href="#sluzby">Pozrieť služby →</a></div><div className="hero-facts"><span><b>Individuálny</b> prístup</span><span><b>9:00 – 17:00</b> na objednávku</span></div></div>
      <div className="hero-photo"><Image src="/images/martina.jpg" alt="Ing. Martina Melkovičová" fill sizes="(max-width: 900px) 100vw, 45vw" priority/><div className="photo-note"><b>Ing. Martina Melkovičová</b><span>výživová poradkyňa a lektorka</span></div></div>
    </section>
    <section id="o-mne" className="section split-section"><div><p className="eyebrow">O mne</p><h2>Človek nie je súbor oddelených častí.</h2></div><div className="prose"><p>Volám sa <strong>Ing. Martina Melkovičová</strong>. Vo svojej práci prepájam poznatky o výžive, zložení tela, zvládaní stresu a súvislostiach, ktoré ovplyvňujú naše každodenné fungovanie.</p><p>Ku každému pristupujem individuálne. Mojím cieľom nie je ponúknuť univerzálny návod, ale pomôcť človeku lepšie porozumieť vlastnému telu, potrebám a možnostiam zmeny.</p></div></section>
    <section id="biobalans" className="balance-section"><div className="balance-mark"><Image src="/images/biobalans-logo.jpg" alt="Logo BioBalans" width={330} height={330}/></div><div><p className="eyebrow">Čo je BioBalans</p><h2>Priestor pre zdravie, vedomé rozhodnutia a rovnováhu.</h2><p>BioBalans je holistické centrum, v ktorom sa na zdravie pozeráme v širších súvislostiach. Výživa, telo, emócie, stres aj prostredie sa navzájom ovplyvňujú.</p><p>Pomáhame hľadať praktické a zrozumiteľné kroky, ktoré možno postupne preniesť do bežného života.</p><div className="pill-row"><span>výživa</span><span>telo</span><span>emócie</span><span>rovnováha</span></div></div></section>
    <section id="sluzby" className="section services-section"><div className="section-heading"><div><p className="eyebrow">Služby</p><h2>Cesta ušitá na mieru vám.</h2></div><p>Vyberieme vhodný prístup podľa vašich potrieb a cieľov. Konzultácie prebiehajú po predchádzajúcom objednaní.</p></div><div className="services-grid">{services.map(([title,text],i)=><article className="service-card" key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="disclaimer">Merania a konzultácie v BioBalans nenahrádzajú lekárske vyšetrenie, diagnostiku ani zdravotnú starostlivosť.</p></section>
    <section className="hany-teaser"><div><p className="eyebrow">Pomáhame spolu</p><h2>HanyMel OZ</h2><p>Občianske združenie vzniklo pre Hanku a pomáha vytvárať podmienky na jej liečbu, rehabilitácie, špeciálne pomôcky a čo najväčšiu samostatnosť.</p><Link className="button pink" href="/hanymeloz">Spoznať Hankin príbeh</Link></div><Image src="/images/hanka-cyklochodnik.jpeg" alt="Hanka na cyklochodníku" width={700} height={760}/></section>
    <section id="kontakt" className="contact-section"><div><p className="eyebrow light">Kontakt</p><h2>Doprajte si priestor<br/>pre zmenu.</h2><p>Ozvite sa a dohodneme si termín konzultácie.</p></div><div className="contact-card"><a href="tel:+421915195930"><small>Telefón</small><b>0915 195 930</b></a><a href="mailto:info@biobalans.sk"><small>E-mail</small><b>info@biobalans.sk</b></a><div><small>Adresa</small><b>Komenského 634/18<br/>093 01 Vranov nad Topľou</b></div><div><small>Čas</small><b>9:00 – 17:00 / na objednávku</b></div></div></section>
    <footer><div className="footer-brand"><Image src="/images/biobalans-logo.jpg" alt="" width={48} height={48}/><b>BIO BALANS</b></div><p>Prevádzkovateľ: optiMM s. r. o. · IČO: 47432489 · DIČ: 2023891177</p><p>© {new Date().getFullYear()} BioBalans</p></footer>
  </main>;
}
