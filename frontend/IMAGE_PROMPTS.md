# Image prompts

The site reads every image from `public/images/`. To replace one, generate it with the prompt below, export it as **JPG** with the **same filename**, and overwrite the file. No code changes are needed.

Tips:
- Use the listed aspect ratio. Images are cropped with `object-cover`, so keep the subject centred.
- Keep files under about 400 KB. Next.js resizes them, but smaller source files build faster.
- Shared style suffix (append it to every prompt for a consistent look):
  `photorealistic, natural soft daylight, airy and clean, muted sage green and warm sand tones, shallow depth of field, shot on 35mm, high detail, no text, no logos, no watermark`

| File | Ratio | Used in | Prompt |
|---|---|---|---|
| `hero.jpg` | 4:5 | Home hero (main image) | Neatly folded stack of fresh white and pastel towels and t-shirts on a wooden table in a bright open-air tropical laundry room, palm leaves and sunlight through a window, a woven basket beside it |
| `service-wash.jpg` | 4:3 | Service card: Premium Wash & Dry | Close-up of a modern front-load washing machine door with colourful clothes tumbling in soapy water, white tiled laundry room |
| `service-baby.jpg` | 4:3 | Service card: Baby Care | Soft folded baby onesies and tiny socks in pastel colours on a white cotton blanket, gentle morning light, cosy and clean |
| `service-express.jpg` | 4:3 | Service card: Express / Folding | Hands quickly folding a crisp white t-shirt on a laundry counter, motion feel, stacks of folded clothes ready to go |
| `service-iron.jpg` | 4:3 | Service card: Iron & Fold | Steam iron pressing a light blue linen shirt on an ironing board, visible steam, shirts on wooden hangers in the background |
| `about-story.jpg` | 4:5 | Home About section and About page story | Friendly Sri Lankan laundry worker smiling while folding colourful clothes in a small rustic open-air laundry shop with tropical plants, authentic and warm |
| `cta-beach.jpg` | 16:9 | CTA banner on every page | Tropical Sri Lankan beach at golden hour with surfboards leaning on a palm tree and a clothesline with colourful clean clothes drying in the breeze |
| `page-about.jpg` | 2:1 | About page header | Wide shot of a rustic tropical laundry shop exterior with a thatched palm roof, lush green garden, soft morning light |
| `page-services.jpg` | 2:1 | Services page header | Row of modern white washing machines in a clean bright laundromat with green plants, wide angle |
| `page-contact.jpg` | 2:1 | Contact page header | Aerial view of the Midigama coastline in Sri Lanka, turquoise waves, surfers, palm trees along the shore |

Real photos (already in place; replace with newer real photos if you have them):
- `shop-sign.jpg` (1:1): the real DIRTYCLOTHS shop sign.
- `washer.jpg` (16:9): the old hero washing-machine render with the watermark cropped off. Used on the home pricing banner.

> Real photos of the actual shop, team and customers will always build more trust than AI images. Swap them in when you have them.

## Current photos (real, from Wikimedia Commons)

The placeholder images were replaced with real photos. CC BY and CC BY-SA licenses require visible credit, so show this list on the site (for example, a "Photo credits" link in the footer). Replacing a photo with your own removes the need to credit it.

| File | Source | Author | License |
|---|---|---|---|
| `hero.jpg` | [HSY- Folded Towels.jpg](https://commons.wikimedia.org/wiki/File:HSY-_Folded_Towels.jpg) | HanSangYoon | CC BY-SA 4.0 |
| `service-wash.jpg` | [Washing Machine Details - Flickr - dejankrsmanovic.jpg](https://commons.wikimedia.org/wiki/File:Washing_Machine_Details_-_Flickr_-_dejankrsmanovic.jpg) | Dejan Krsmanovic | CC BY 2.0 |
| `service-baby.jpg` | [Baby Clothes Clothes my parents sent.jpg](https://commons.wikimedia.org/wiki/File:Baby_Clothes_Clothes_my_parents_sent.jpg) | nadimre | CC BY-SA 4.0 |
| `service-express.jpg` | [Stack of men's casual shirts.jpg](https://commons.wikimedia.org/wiki/File:Stack_of_men's_casual_shirts.jpg) | Kotivalo | CC BY-SA 4.0 |
| `service-iron.jpg` | [Young man ironing a T shirt, Auckland - 0964.jpg](https://commons.wikimedia.org/wiki/File:Young_man_ironing_a_T_shirt%2C_Auckland_-_0964.jpg) | Jorge Royan | CC BY-SA 3.0 |
| `about-story.jpg` | [Drying laundry, Umag, Istria, Croatia.jpg](https://commons.wikimedia.org/wiki/File:Drying_laundry%2C_Umag%2C_Istria%2C_Croatia.jpg) | Michal Klajban | CC BY-SA 4.0 |
| `cta-beach.jpg` | [Midigama by Sunset.jpg](https://commons.wikimedia.org/wiki/File:Midigama_by_Sunset.jpg) | UmarAzwer | CC BY-SA 4.0 |
| `page-about.jpg` | [Weligama outrigger canoes on the beach.jpg](https://commons.wikimedia.org/wiki/File:Weligama_outrigger_canoes_on_the_beach.jpg) | Pierre André Leclercq | CC BY-SA 4.0 |
| `page-services.jpg` | [Laundromat in korea.jpg](https://commons.wikimedia.org/wiki/File:Laundromat_in_korea.jpg) | Sgroey | CC BY-SA 4.0 |
| `page-contact.jpg` | [Weligama beach (3).jpg](https://commons.wikimedia.org/wiki/File:Weligama_beach_(3).jpg) | PIERRE ANDRE LECLERCQ | CC BY-SA 4.0 |
| `step-dropoff.jpg` | [Clothes in laundry basket.jpg](https://commons.wikimedia.org/wiki/File:Clothes_in_laundry_basket.jpg) | Santeri Viinamäki | CC BY-SA 4.0 |
| `step-wash.jpg` | [Maytag washing machines at the Seven Springs Mountain Resort Laundromat.jpg](https://commons.wikimedia.org/wiki/File:Maytag_washing_machines_at_the_Seven_Springs_Mountain_Resort_Laundromat.jpg) | Baron Maddock | CC BY 4.0 |
| `step-fold.jpg` | [Folded shirts March Photo Challenge - Laundering.jpg](https://commons.wikimedia.org/wiki/File:Folded_shirts_March_Photo_Challenge_-_Laundering.jpg) | Gabbybratcher | CC BY-SA 4.0 |
| `step-beach.jpg` | [Thiranagama beach - Sri Lanka.jpg](https://commons.wikimedia.org/wiki/File:Thiranagama_beach_-_Sri_Lanka.jpg) | Xandrium | CC0 |
| `reviews-bg.jpg` | [Tropical Sunset.jpg](https://commons.wikimedia.org/wiki/File:Tropical_Sunset.jpg) | UmarAzwer | CC BY-SA 4.0 |
| `visit-bg.jpg` | [Stilt Fishing in Ahangama.jpg](https://commons.wikimedia.org/wiki/File:Stilt_Fishing_in_Ahangama.jpg) | Diluckshan Puviraj | CC BY-SA 4.0 |
