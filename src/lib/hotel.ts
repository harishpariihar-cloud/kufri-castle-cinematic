import approach from "@/assets/hotel/approach.png";
import roomClassic from "@/assets/hotel/room-classic.png";
import receptionDining from "@/assets/hotel/reception-dining.png";
import corridor from "@/assets/hotel/corridor.png";
import loungeDining from "@/assets/hotel/lounge-dining.png";
import roomCoral from "@/assets/hotel/room-coral.png";
import exteriorDay from "@/assets/hotel/exterior-day.webp";
import exteriorNight from "@/assets/hotel/exterior-night.webp";
import roomWindow from "@/assets/hotel/room-window.png";
import roomBlue from "@/assets/hotel/room-blue.webp";

export const hotel = {
  name: "Hotel Beercastle Kufri",
  phone: "+91 80057 94280",
  phoneHref: "tel:+918005794280",
  address: "Apple Point Road, Mahasu Peak, Kufri, Himachal Pradesh 171209",
  whatsapp:
    "https://wa.me/918005794280?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20stay%20at%20Hotel%20Beercastle%20Kufri.",
};

export const photos = {
  approach,
  roomClassic,
  receptionDining,
  corridor,
  loungeDining,
  roomCoral,
  exteriorDay,
  exteriorNight,
  roomWindow,
  roomBlue,
};

export const galleryPhotos = [
  { src: exteriorDay, alt: "Hotel Beercastle Kufri amid green Himalayan hillside" },
  { src: roomBlue, alt: "Bright guest room with a timber ceiling and colourful linens" },
  { src: receptionDining, alt: "Reception and restaurant at Hotel Beercastle Kufri" },
  { src: roomWindow, alt: "Comfortable guest room with a large window" },
  { src: loungeDining, alt: "Warm timber-ceiling dining lounge" },
  { src: corridor, alt: "Timber-roofed guest corridor" },
  { src: roomCoral, alt: "Guest room with a coral headboard" },
  { src: exteriorNight, alt: "Hotel Beercastle Kufri illuminated at night" },
  { src: approach, alt: "Apple Point Road approaching Hotel Beercastle Kufri" },
  { src: roomClassic, alt: "Classic double room at Hotel Beercastle Kufri" },
];

export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}