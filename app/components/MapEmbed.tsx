"use client";

import { useEffect, useState } from "react";

const key = "biobalans-cookie-consent";
type Consent = { necessary: true; analytics: boolean; external: boolean };

export default function MapEmbed() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        const value = JSON.parse(localStorage.getItem(key) || "null") as Consent | null;
        setAllowed(Boolean(value?.external));
      } catch { setAllowed(false); }
    };
    read();
    const listener = (event: Event) => setAllowed(Boolean((event as CustomEvent<Consent>).detail?.external));
    window.addEventListener("biobalans-consent", listener);
    return () => window.removeEventListener("biobalans-consent", listener);
  }, []);

  const allowMap = () => {
    let current: Consent = { necessary:true, analytics:false, external:true };
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "null");
      if (saved) current = { ...saved, necessary:true, external:true };
    } catch {}
    localStorage.setItem(key, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent("biobalans-consent", {detail:current}));
    setAllowed(true);
  };

  return <section className="map-section" aria-label="Google mapa BioBalans">
    <div className="map-heading"><div><p className="eyebrow">Kde nás nájdete</p><h2>BioBalans vo Vranove nad Topľou</h2></div><a href="https://www.google.com/maps/search/?api=1&query=BioBalans%2C%20Komensk%C3%A9ho%20634%2F18%2C%20Vranov%20nad%20Top%C4%BEou" target="_blank" rel="noreferrer">Otvoriť trasu v Google Maps →</a></div>
    {allowed
      ? <iframe title="Mapa prevádzky BioBalans" src="https://www.google.com/maps?q=BioBalans%2C%20Komensk%C3%A9ho%20634%2F18%2C%20093%2001%20Vranov%20nad%20Top%C4%BEou&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
      : <div className="map-placeholder"><span>⌖</span><h3>Google mapa je pripravená</h3><p>Na jej načítanie potrebujeme povoliť externý obsah od spoločnosti Google.</p><button onClick={allowMap}>Povoliť a zobraziť mapu</button></div>}
  </section>;
}
