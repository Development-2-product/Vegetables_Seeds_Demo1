import { ProductInquiry } from '@/lib/supabase';

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/\D/g, '');

export function getWhatsAppUrl(inquiry: ProductInquiry): string | null {
  if (!whatsappNumber) return null;

  const lines = [
    'Hello, I would like to request seed information.',
    '',
    `Name: ${inquiry.full_name.trim()}`,
    inquiry.company_name?.trim() ? `Company / Farm: ${inquiry.company_name.trim()}` : '',
    `Phone: ${inquiry.phone.trim()}`,
    `Email: ${inquiry.email.trim()}`,
    inquiry.location?.trim() ? `Location: ${inquiry.location.trim()}` : '',
    inquiry.product_interest?.trim() ? `Product / Variety: ${inquiry.product_interest.trim()}` : '',
    inquiry.required_quantity?.trim() ? `Required quantity: ${inquiry.required_quantity.trim()}` : '',
    `Requirement: ${inquiry.message.trim()}`,
  ].filter(Boolean);

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}
