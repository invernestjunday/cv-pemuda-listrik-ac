import { site } from "../data/site";

export function normalizeWhatsappNumber(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export function createWhatsappLink(message: string) {
  const phone = normalizeWhatsappNumber(site.whatsappNumber);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
