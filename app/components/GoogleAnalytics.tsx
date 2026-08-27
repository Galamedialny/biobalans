"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = "G-YCCVSV48WE";
const consentKey = "biobalans-cookie-consent";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const readConsent = () => {
      try {
        const consent = JSON.parse(localStorage.getItem(consentKey) || "null");
        setAllowed(Boolean(consent?.analytics));
      } catch {
        setAllowed(false);
      }
    };
    readConsent();
    const listener = (event: Event) => setAllowed(Boolean((event as CustomEvent).detail?.analytics));
    window.addEventListener("biobalans-consent", listener);
    return () => window.removeEventListener("biobalans-consent", listener);
  }, []);

  useEffect(() => {
    if (!allowed || !ready || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [allowed, ready, pathname]);

  if (!allowed) return null;

  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" onLoad={() => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => { window.dataLayer.push(args); };
      window.gtag("js", new Date());
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      window.gtag("config", measurementId, {
        send_page_view: false,
        anonymize_ip: true,
      });
      setReady(true);
    }}/>
  </>;
}
