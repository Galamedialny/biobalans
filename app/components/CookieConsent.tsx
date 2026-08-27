"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = { necessary: true; analytics: boolean; external: boolean };
const key = "biobalans-cookie-consent";

function saveConsent(value: Consent) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("biobalans-consent", { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [external, setExternal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (!saved) setVisible(true);
  }, []);

  const save = (value: Consent) => {
    saveConsent(value);
    setVisible(false);
    setSettings(false);
  };

  if (!visible) return null;

  return <div className="cookie-overlay" role="dialog" aria-modal="true" aria-label="Nastavenie cookies">
    <div className="cookie-panel">
      <div className="cookie-icon" aria-hidden="true">●</div>
      <div className="cookie-copy">
        <h2>Vaše súkromie je pre nás dôležité</h2>
        <p>Používame nevyhnutné cookies na správne fungovanie webu. Voliteľné cookies a externý obsah, napríklad Google mapa, sa aktivujú iba s vaším súhlasom.</p>
        {settings && <div className="cookie-settings">
          <label><span><strong>Nevyhnutné cookies</strong><small>Potrebné na fungovanie stránky a uloženie vašej voľby.</small></span><input type="checkbox" checked disabled/></label>
          <label><span><strong>Analytické cookies</strong><small>Pomáhajú pochopiť anonymnú návštevnosť webu.</small></span><input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)}/></label>
          <label><span><strong>Externý obsah</strong><small>Umožní načítať Google mapu a jej služby.</small></span><input type="checkbox" checked={external} onChange={e=>setExternal(e.target.checked)}/></label>
        </div>}
        <p className="cookie-links"><Link href="/ochrana-sukromia">Ochrana súkromia a cookies</Link></p>
      </div>
      <div className="cookie-actions">
        <button className="cookie-primary" onClick={()=>save({necessary:true,analytics:true,external:true})}>Prijať všetko</button>
        {settings
          ? <button onClick={()=>save({necessary:true,analytics,external})}>Uložiť nastavenie</button>
          : <button onClick={()=>setSettings(true)}>Nastaviť cookies</button>}
        <button onClick={()=>save({necessary:true,analytics:false,external:false})}>Odmietnuť voliteľné</button>
      </div>
    </div>
  </div>;
}
