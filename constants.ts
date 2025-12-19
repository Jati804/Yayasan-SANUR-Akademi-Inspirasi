export const CONTACT_INFO = {
  // Ganti nomor di sini (Format Teks)
  phoneDisplay: "+62 856-9561-4669",
  
  // Ganti nomor di sini (Format Link WhatsApp: Awali dengan 62 tanpa + atau spasi)
  waNumber: "6285695614669",
  
  // Pesan default saat orang klik WA
  defaultMessage: "Halo SANUR Akademi Inspirasi, saya tertarik untuk konsultasi program."
};

export const getWaLink = (message?: string) => {
  const msg = message || CONTACT_INFO.defaultMessage;
  return `https://wa.me/${CONTACT_INFO.waNumber}?text=${encodeURIComponent(msg)}`;
};