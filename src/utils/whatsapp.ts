import { CartItem } from '../types';

export const WHATSAPP_PHONE_NUMBER = '6282122665587';

export const generateWhatsAppMessage = (items: CartItem[]): string => {
  const productList = items.map(item => 
    `- ${item.name} (Model: ${item.model}) - ${item.quantity} pcs`
  ).join('\n');

  return `Halo Orion+ Smart Home,

Saya tertarik untuk memesan produk berikut dari website Anda:

${productList}

Mohon informasinya untuk ketersediaan stok dan langkah selanjutnya. Terima kasih.`;
};

export const openWhatsApp = (message: string, phoneNumber: string = WHATSAPP_PHONE_NUMBER) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};