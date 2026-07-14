const WA_URL =
  "https://wa.me/5535991661854?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Nexo%20Digital%20e%20quero%20falar%20com%20voc%C3%AAs.";

export function WhatsAppBubble() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-24 lg:bottom-6 z-40 w-14 h-14 rounded-full bg-brand-primary text-brand-bg flex items-center justify-center shadow-2xl shadow-black/40 hover:bg-brand-primaryHover hover:scale-105 transition"
    >
      <i className="fab fa-whatsapp text-2xl" />
    </a>
  );
}
