// Image slots served from /public/images.
// To swap a photo, overwrite the file with the same name — no code changes needed.
// Generation prompts for each slot live in /IMAGE_PROMPTS.md.
export const images = {
  hero: '/images/hero.jpg',
  shopSign: '/images/shop-sign.jpg',
  washer: '/images/washer.jpg',
  serviceWash: '/images/service-wash.jpg',
  serviceBaby: '/images/service-baby.jpg',
  serviceSun: '/images/service-sun.jpg',
  serviceExpress: '/images/service-express.jpg',
  serviceIron: '/images/service-iron.jpg',
  aboutStory: '/images/about-story.jpg',
  ctaBeach: '/images/cta-beach.jpg',
  pageAbout: '/images/page-about.jpg',
  pageServices: '/images/page-services.jpg',
  pageContact: '/images/page-contact.jpg',
  stepDropoff: '/images/step-dropoff.jpg',
  stepWash: '/images/step-wash.jpg',
  stepSun: '/images/step-sun.jpg',
  stepFold: '/images/step-fold.jpg',
  stepPickup: '/images/step-pickup.jpg',
  reviewsBg: '/images/reviews-bg.jpg',
  visitBg: '/images/visit-bg.jpg',
};

// Credits for the photos above. CC BY / CC BY-SA require visible attribution,
// shown on /credits. Remove an entry when you replace that photo with your own.
export const photoCredits = [
  { file: 'service-wash.jpg', usedFor: 'Premium Wash & Dry', title: 'Washing Machine Details', author: 'Dejan Krsmanovic', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Washing_Machine_Details_-_Flickr_-_dejankrsmanovic.jpg' },
  { file: 'service-baby.jpg', usedFor: 'Baby & Sensitive Skin Care', title: 'Baby Clothes (left half only; right half is the site owner’s own image)', author: 'nadimre', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Baby_Clothes_Clothes_my_parents_sent.jpg' },
  { file: 'service-express.jpg', usedFor: 'Express Service', title: "Stack of men's casual shirts", author: 'Kotivalo', license: 'CC BY-SA 4.0', source: "https://commons.wikimedia.org/wiki/File:Stack_of_men's_casual_shirts.jpg" },
  { file: 'service-iron.jpg', usedFor: 'Iron & Fold', title: 'Young man ironing a T shirt, Auckland', author: 'Jorge Royan', license: 'CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Young_man_ironing_a_T_shirt%2C_Auckland_-_0964.jpg' },
  { file: 'cta-beach.jpg', usedFor: 'Banner on every page', title: 'Midigama by Sunset', author: 'UmarAzwer', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Midigama_by_Sunset.jpg' },
  { file: 'page-about.jpg', usedFor: 'About page header', title: 'Weligama outrigger canoes on the beach', author: 'Pierre André Leclercq', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Weligama_outrigger_canoes_on_the_beach.jpg' },
  { file: 'page-services.jpg', usedFor: 'Services page header', title: 'Laundromat in Korea', author: 'Sgroey', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Laundromat_in_korea.jpg' },
  { file: 'page-contact.jpg', usedFor: 'Contact page header', title: 'Weligama beach (3)', author: 'Pierre André Leclercq', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Weligama_beach_(3).jpg' },
  { file: 'step-dropoff.jpg', usedFor: 'How it works: Drop off', title: 'Hotel Laundry Service by Canal Boat, Venice', author: 'Paul Harrison', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Hotel_Laundry_Service_by_Canal_Boat_Venice_9476.jpg' },
  { file: 'step-wash.jpg', usedFor: 'How it works: Wash & dry', title: 'Maytag washing machines at the Seven Springs Mountain Resort Laundromat', author: 'Baron Maddock', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:Maytag_washing_machines_at_the_Seven_Springs_Mountain_Resort_Laundromat.jpg' },
  { file: 'step-fold.jpg', usedFor: 'How it works: Neatly folded', title: 'Folded shirts', author: 'Gabbybratcher', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Folded_shirts_March_Photo_Challenge_-_Laundering.jpg' },
  { file: 'reviews-bg.jpg', usedFor: 'Reviews background', title: 'Tropical Sunset (Midigama)', author: 'UmarAzwer', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Tropical_Sunset.jpg' },
  { file: 'visit-bg.jpg', usedFor: 'Plan your visit', title: 'Stilt Fishing in Ahangama', author: 'Diluckshan Puviraj', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Stilt_Fishing_in_Ahangama.jpg' },
];

export const licenseUrls: Record<string, string> = {
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
};
