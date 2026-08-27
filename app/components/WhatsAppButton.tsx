import Image from "next/image";

export default function WhatsAppButton() {
  return <a className="whatsapp-button" href="https://wa.me/421915195930?text=Dobr%C3%BD%20de%C5%88%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20slu%C5%BEby%20BioBalans." target="_blank" rel="noreferrer" aria-label="Napísať Martine z BioBalans na WhatsApp">
    <Image className="whatsapp-photo" src="/images/martina.webp" alt="Martina Melkovičová" width={52} height={52}/>
    <span className="whatsapp-status"><strong>Som online</strong><small>Kľudne mi napíšte.</small></span>
    <span className="whatsapp-badge" aria-hidden="true">◔</span>
  </a>;
}
