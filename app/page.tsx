import Image from "next/image";
import Link from "next/link";
import MapEmbed from "./components/MapEmbed";


const PhoneIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></svg>;
const MailIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
const PinIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
const ClockIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>;

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
      <Link href="#domov" className="brand"><Image src="/images/biobalans-logo.webp" alt="BioBalans" width={58} height={58} priority/><span><b>BIO BALANS</b><small>HOLISTICKÉ CENTRUM</small></span></Link>
      <nav><a href="#o-mne">O mne</a><a href="#biobalans">Čo je BioBalans</a><a href="#sluzby">Služby</a><a href="#kontakt">Kontakt</a><a className="facebook-nav" href="https://www.facebook.com/biobalans.sk" target="_blank" rel="noreferrer"><span className="nav-fb-icon">f</span> BioBalans</a><Link className="nav-heart" href="/hanymeloz">HanyMel OZ</Link></nav>
    </header>
    <section id="domov" className="hero">
      <div className="hero-copy"><p className="eyebrow">Holistické centrum vo Vranove nad Topľou</p><h1>Rovnováha začína<br/>porozumením <em>sebe.</em></h1><p className="lead">Spájame výživu, prácu s telom a vnútorným prežívaním do individuálneho prístupu, ktorý rešpektuje jedinečnosť každého človeka.</p><div className="hero-actions"><a className="button" href="#kontakt">Objednať sa</a><a className="text-link" href="#sluzby">Pozrieť služby →</a></div><div className="hero-facts"><span><b>Individuálny</b> prístup</span><span><b>9:00 – 17:00</b> na objednávku</span></div></div>
      <div className="hero-photo"><Image src="/images/martina.webp" alt="Ing. Martina Melkovičová" fill sizes="(max-width: 900px) 100vw, 45vw" priority/><div className="photo-note"><b>Ing. Martina Melkovičová</b><span>výživová poradkyňa a lektorka</span></div></div>
    </section>
    <section id="o-mne" className="section split-section"><div><p className="eyebrow">O mne</p><h2>Človek nie je súbor oddelených častí.</h2></div><div className="prose"><p>Volám sa <strong>Ing. Martina Melkovičová</strong>. Vo svojej práci prepájam poznatky o výžive, zložení tela, zvládaní stresu a súvislostiach, ktoré ovplyvňujú naše každodenné fungovanie.</p><p>Ku každému pristupujem individuálne. Mojím cieľom nie je ponúknuť univerzálny návod, ale pomôcť človeku lepšie porozumieť vlastnému telu, potrebám a možnostiam zmeny.</p></div></section>
    <section id="biobalans" className="balance-section"><div className="balance-mark"><Image src="/images/biobalans-logo.webp" alt="Logo BioBalans" width={330} height={330}/></div><div><p className="eyebrow">Čo je BioBalans</p><h2>Priestor pre zdravie, vedomé rozhodnutia a rovnováhu.</h2><p>BioBalans je holistické centrum, v ktorom sa na zdravie pozeráme v širších súvislostiach. Výživa, telo, emócie, stres aj prostredie sa navzájom ovplyvňujú.</p><p>Pomáhame hľadať praktické a zrozumiteľné kroky, ktoré možno postupne preniesť do bežného života.</p><div className="pill-row"><span>výživa</span><span>telo</span><span>emócie</span><span>rovnováha</span></div></div></section>
    <section className="facebook-band"><div><span className="facebook-mark">f</span><div><p className="eyebrow">Sledujte BioBalans</p><h2>Novinky, rady a podujatia nájdete aj na Facebooku.</h2></div></div><a className="button facebook-button" href="https://www.facebook.com/biobalans.sk" target="_blank" rel="noreferrer">Prejsť na Facebook</a></section>
    <section id="sluzby" className="section services-section"><div className="section-heading"><div><p className="eyebrow">Služby</p><h2>Cesta ušitá na mieru vám.</h2></div><p>Vyberieme vhodný prístup podľa vašich potrieb a cieľov. Konzultácie prebiehajú po predchádzajúcom objednaní.</p></div><div className="services-grid">{services.map(([title,text],i)=><article className="service-card" key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      <div className="service-details">
        <details>
          <summary><span>01</span><strong>Osobná BioBalans pyramída potravín</strong><b>+</b></summary>
          <div className="detail-content">
            <h3>Zdravá strava – zdravý život</h3>
            <p>Čo mám jesť? Kedy mám jesť? Koľko mám jesť? Je táto potravina pre mňa vhodná? Je toto jedlo vhodné pre mňa? Podobné otázky si dnes kladie veľa ľudí. Informácie o výžive na nás prichádzajú z tlače, televízie, internetu aj od rôznych odborníkov a niekedy je náročné sa v nich vyznať.</p>
            <p>Ing. Martina Melkovičová pri svojej niekoľkoročnej praxi nutričného terapeuta a výživovej poradkyne odpovedala na tieto otázky mnohým klientom. Jej obľúbeným princípom je „zlatá stredná cesta“. Osobná BioBalans pyramída je jednoduchý manuál, ktorý prináša overený pohľad na spôsob stravovania podložený štúdiom a praxou.</p>
            <p>Aj pri jedle je dôležité byť k sebe úprimný a položiť si otázku: Čo od jedla očakávam? Plné brucho, chuť, pôžitok, výživu pre telo, energiu, uspokojenie, kvalitu alebo kvantitu? Ak budeme jesť to, čo naše telo potrebuje, v správnom pomere a množstve, vytvárame podmienky na jeho optimálne fungovanie.</p>
            <p>Program vznikol ako praktický nástroj k vlastnému zdraviu a duševnej pohode, bez módnych diét a extrémov. Pomáha zorientovať sa v tom, čo, kedy a koľko jesť, a vytvoriť individuálny stravovací plán.</p>
            <h3>Ako funguje osobná pyramída</h3>
            <p>Základ pyramídy tvoria potraviny, ktoré by mali byť zastúpené najčastejšie a v najväčšom množstve. Smerom nahor sa stupne zužujú, výber potravín aj odporúčané množstvo sa zmenšujú. To, čo sa nachádza na vrchole, sa konzumuje iba minimálne alebo vôbec.</p>
            <p>Všeobecné odporúčania nemusia vyhovovať každému rovnako. Osobná BioBalans pyramída je vytvorená pre konkrétneho človeka, jeho telo, životný štýl, potreby a ciele. Je základom individuálneho a dlhodobo udržateľného stravovania.</p>
          </div>
        </details>
        <details>
          <summary><span>02</span><strong>One Brain – 3 in 1 Concepts</strong><b>+</b></summary>
          <div className="detail-content">
            <h3>Metóda jednotného mozgu</h3>
            <p>Metóda 3 v 1, systém One Brain, je jemný a nenásilný spôsob, ako identifikovať a uvoľniť emocionálny stres. Ten sa môže prejavovať ako pochybnosti, strach, pocit neschopnosti, ale aj rôzne bolesti a zdravotné ťažkosti. Je to cesta, na ktorej môžeme nájsť voľbu tam, kde sme si mysleli, že žiadne možnosti nie sú.</p>
            <p>V strese sú naše možnosti hľadania optimálneho riešenia obmedzené, pretože fungujeme iba so zlomkom našej mozgovej kapacity. Vyplýva to z prirodzeného fyziologického fungovania mozgu a tela. V strese sme schopní tresnúť dverami, udrieť po stole alebo utiecť, no časti mozgu potrebné na pokojné premýšľanie sú v tej chvíli utlmené.</p>
            <p>Cieľom práce s metódou One Brain je „zapnúť“ to, čo bolo v dôsledku stresu „vypnuté“, a nájsť možnosti, ktoré sme pre minulé skúsenosti nedokázali vidieť. Kým si tieto skúsenosti neuvedomíme a neuvoľníme stres, ktorý sa s nimi spája, môžu ovplyvňovať naše správanie v súčasnosti.</p>
            <p>Na priblíženie sa k pravde klienta sa používa kineziologický svalový test.</p>
          </div>
        </details>
        <details>
          <summary><span>03</span><strong>InBody – bioimpedančná analýza tela</strong><b>+</b></summary>
          <div className="detail-content">
            <h3>InBody – z čoho sme vlastne zložení?</h3>
            <p>Patentovaná technológia DSM BIA a DSMF BIA umožňuje presné meranie bez ohľadu na pohlavie, vek, ochorenie alebo etnický pôvod. Vďaka prístroju InBody môžete získať jasný prehľad o tom, kde konkrétne ste zredukovali telesný tuk alebo nabrali svalovú hmotu.</p>
            <h3>Čo meraním zistíme</h3>
            <ul>
              <li>celkovú vodu, proteíny, kostné a nekostné minerály, tukovú hmotu, kostnú a svalovú hmotu, beztukovú hmotu a celkovú hmotnosť,</li>
              <li>BMI, percentuálny podiel telesného tuku a pomer pásu k bokom (WHR),</li>
              <li>svalovú hmotu a percento svaloviny v jednotlivých telesných častiach,</li>
              <li>oblasť telesného tuku a rastový graf pre deti do 18 rokov,</li>
              <li>nutričné hodnotenie – proteíny, minerály, tuk a edém,</li>
              <li>telesnú vyváženosť, telesnú silu a zdravotné hodnotenie,</li>
              <li>cieľovú hmotnosť, kontrolu hmotnosti, tukovú a svalovú kontrolu,</li>
              <li>stav telesnej zdatnosti a stupeň obezity.</li>
            </ul>
          </div>
        </details>
        <details>
          <summary><span>04</span><strong>Kvantový rezonančný magnetický analyzátor</strong><b>+</b></summary>
          <div className="detail-content">
            <p>Kvantový rezonančný magnetický analyzátor bol vyvinutý na základe dlhoročného výskumu a veľkého množstva klinických pozorovaní. Vykonáva komplexné orientačné meranie ľudského tela. Nejde o lekárske zariadenie a výsledky slúžia iba ako referencia pre ľudí, ktorí sa zaujímajú o zlepšenie životného štýlu, stravovania, pohybu či príjmu vitamínov a minerálov. Výsledky nie sú určené na stanovenie diagnózy.</p>
            <p>Po ukončení testu systém poskytuje 38 tematických správ a 261 podrobných analýz. Súčasťou výstupu je orientačné zhrnutie aktuálneho stavu a odporúčania pre ďalšiu starostlivosť o životný štýl. Podľa materiálu výrobcu ide o štatistickú analýzu a uvádzaná presnosť porovnávania výsledkov dosahuje približne 90 %. Meranie je neinvazívne.</p>
            <h3>Oblasti orientačného merania</h3>
            <ul className="analysis-list">
              <li>Kardiovaskulárna a cerebrovaskulárna oblasť – 15 analýz</li><li>Gastrointestinálne funkcie – 5 analýz</li><li>Funkcia pečene – 5 analýz</li><li>Funkcia žlčníka – 5 analýz</li><li>Funkcia pankreasu – 3 analýzy</li><li>Funkcia obličiek – 4 analýzy</li><li>Funkcia pľúc – 4 analýzy</li><li>Mozgové nervy – 5 analýz</li><li>Kostná oblasť – 4 analýzy</li><li>Minerálna hustota kostí – 5 analýz</li><li>Reumatoidná kostná oblasť – 5 analýz</li><li>Krvný cukor – 3 analýzy</li><li>Základná fyzická kvalita – 5 analýz</li><li>Toxíny – 4 analýzy</li><li>Stopové prvky – 19 analýz</li><li>Prostata – 3 analýzy iba pre mužov</li><li>Sexuálne funkcie mužov – 3 analýzy</li><li>Koža – 10 analýz</li><li>Endokrinný systém – 7 analýz</li><li>Imunitný systém – 9 analýz</li><li>Aminokyseliny – 10 analýz</li><li>Ťažké kovy – 7 analýz</li><li>Alergie – 13 analýz</li><li>Oči – 8 analýz</li><li>Koenzýmy – 6 analýz</li><li>Vitamíny – 10 analýz</li><li>Index rastu kostí – 5 analýz</li><li>Gynekológia – 9 analýz iba pre ženy</li><li>Prsník – 5 analýz iba pre ženy</li><li>Menštruačný cyklus – 4 analýzy iba pre ženy</li><li>Obezita – 5 analýz</li><li>Kolagén – 14 analýz</li><li>Meridiány a kolaterály – 16 analýz</li><li>Pulz srdca a mozgu – 9 analýz</li><li>Lipidy v krvi – 7 analýz</li><li>Spermie a semeno – 4 analýzy iba pre mužov</li><li>Prvky človeka – 6 komplexných správ</li><li>Kompozitná správa – súhrn zistených oblastí</li>
            </ul>
            <h3>Princíp uvedený v podkladovom materiáli</h3>
            <p>Ľudské telo tvorí veľké množstvo buniek, ktoré rastú, vyvíjajú sa, diferencujú a regenerujú. Pri bunkových procesoch vznikajú elektromagnetické signály. Podkladový materiál vychádza z predpokladu, že ich charakter sa mení podľa aktuálneho stavu organizmu a analyzátor tieto zmeny štatisticky porovnáva s referenčnými údajmi.</p>
          </div>
        </details>
      </div>
      <p className="disclaimer">Merania a konzultácie v BioBalans nenahrádzajú lekárske vyšetrenie, diagnostiku ani zdravotnú starostlivosť. Výstupy z kvantového analyzátora sú orientačné a nesmú sa používať na stanovenie diagnózy ani zmenu liečby.</p></section>
    <section className="hany-teaser"><div><p className="eyebrow">Pomáhame spolu</p><h2>HanyMel OZ</h2><p>Občianske združenie vzniklo pre Hanku a pomáha vytvárať podmienky na jej liečbu, rehabilitácie, špeciálne pomôcky a čo najväčšiu samostatnosť.</p><Link className="button pink" href="/hanymeloz">Spoznať Hankin príbeh</Link></div><Image src="/images/hanka-cyklochodnik.webp" alt="Hanka na cyklochodníku" width={700} height={760}/></section>
    <MapEmbed/>
    <section id="kontakt" className="contact-section"><div className="contact-intro"><Image src="/images/martina.webp" alt="Ing. Martina Melkovičová" width={118} height={118}/><p className="eyebrow light">Kontakt</p><h2>Doprajte si priestor<br/>pre zmenu.</h2><p>Ozvite sa a dohodneme si termín konzultácie.</p></div><div className="contact-card"><a href="tel:+421915195930"><i className="contact-icon"><PhoneIcon/></i><span><small>Telefón</small><b>0915 195 930</b></span></a><a href="mailto:info@biobalans.sk"><i className="contact-icon"><MailIcon/></i><span><small>E-mail</small><b>info@biobalans.sk</b></span></a><div><i className="contact-icon"><PinIcon/></i><span><small>Adresa</small><b>Komenského 634/18<br/>093 01 Vranov nad Topľou</b></span></div><div><i className="contact-icon"><ClockIcon/></i><span><small>Čas</small><b>9:00 – 17:00 / na objednávku</b></span></div></div></section>
    <footer className="main-footer"><div className="footer-top"><div className="footer-brand"><Image src="/images/biobalans-logo.webp" alt="BioBalans" width={58} height={58}/><span><b>BIO BALANS</b><small>Holistické centrum</small></span></div><p>Prevádzkovateľ: optiMM s. r. o.<br/>Komenského 634/18, Vranov nad Topľou</p><p>IČO: 47432489<br/>DIČ: 2023891177</p><p>© {new Date().getFullYear()} BioBalans<br/><a className="footer-facebook" href="https://www.facebook.com/biobalans.sk" target="_blank" rel="noreferrer"><span className="footer-fb-icon">f</span> Facebook BioBalans</a><br/><Link className="footer-privacy" href="/ochrana-sukromia">Ochrana súkromia a cookies</Link></p></div><div className="footer-credit">Web bol vytvorený mediálnou spoločnosťou <a href="https://www.galamedia.sk" target="_blank" rel="noreferrer">GALA MEDIA</a></div></footer>
  </main>;
}
