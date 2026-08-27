import Image from "next/image";

export default function WhatsAppButton() {
  return <a className="whatsapp-button" href="https://wa.me/421915195930?text=Dobr%C3%BD%20de%C5%88%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20slu%C5%BEby%20BioBalans." target="_blank" rel="noreferrer" aria-label="Napísať Martine z BioBalans na WhatsApp">
    <Image className="whatsapp-photo" src="/images/martina.webp" alt="Martina Melkovičová" width={52} height={52}/>
    <span className="whatsapp-status"><strong>Som online</strong><small>Kľudne mi napíšte.</small></span>
    <span className="whatsapp-badge" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Z"/><path d="M11.2 9.7c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.1 8.1 7 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.6l-3-1.4c-.4-.2-.8-.3-1.1.2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.3-1 .1-.4-.2-1.9-.7-3.6-2.2-1.3-1.2-2.2-2.7-2.5-3.1-.3-.4 0-.7.2-.9l.7-.8c.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8l-1.5-3.8Z"/></svg></span>
  </a>;
}
