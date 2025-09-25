import { CartItem } from '../types';

export const generateWhatsAppMessage = (items: CartItem[], totalPrice: number): string => {
  const productList = items.map(item => 
    `- ${item.name} (Model: ${item.model}) - ${item.quantity} pcs @ $${item.price}`
  ).join('\n');

  return `Halo LANBON Smart Home,

Saya tertarik untuk memesan produk berikut dari website Anda:

${productList}

Total Pesanan: $${totalPrice}

Mohon informasinya untuk ketersediaan stok dan langkah selanjutnya. Terima kasih.`;
};

export const openWhatsApp = (message: string, phoneNumber: string = '6281234567890') => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};