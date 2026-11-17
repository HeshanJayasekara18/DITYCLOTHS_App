// Single source of truth for business facts used in page copy, metadata and structured data.
// Update here when anything changes (hours, price, contact details).

export const siteUrl = 'https://www.dirtycloths.site';

export const business = {
  name: 'DIRTYCLOTHS Laundry',
  phone: '+94721634671',
  phoneDisplay: '+94 72 1634 671',
  whatsapp: 'https://wa.me/94721634671',
  email: 'dirtycloths.midigama@gmail.com',
  street: 'Amuwatta Koratuwa',
  locality: 'Midigama',
  region: 'Southern Province',
  postalCode: '80650',
  country: 'LK',
  addressDisplay: 'Amuwatta Koratuwa, Midigama, Southern Province, Sri Lanka',
  mapUrl: 'https://share.google/78ApMzsaROHszWD2H',
  geo: { lat: 5.96545, lng: 80.39445 },
  hours: { opens: '06:00', closes: '23:59', display: '6 AM – 12 AM', displayLong: 'Every day, 6 AM – 12 AM' },
  pricePerKg: 700,
  priceDisplay: 'Rs 700 / kg',
  turnaround: '24–48 hours',
  expressTurnaround: 'within 24 hours',
  payment: 'Cash (LKR)',
  googleRating: '5.0',
  googleReviewCount: '194',
} as const;
