import catBanquet from "@/assets/cat-banquet-hall.jpg";
import catLawn from "@/assets/cat-lawn.jpg";
import catCaterer from "@/assets/cat-caterer.jpg";
import catPhoto from "@/assets/cat-photography.jpg";
import catMakeup from "@/assets/cat-makeup.jpg";
import catDecor from "@/assets/cat-decor.jpg";
import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
import venue4 from "@/assets/venue-4.jpg";
import venue5 from "@/assets/venue-5.jpg";
import venue6 from "@/assets/venue-6.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

export const cities = [
  "Mumbai",
  "Delhi NCR",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Jaipur",
  "Kolkata",
  "Chennai",
];

export const paxRanges = [
  "10–100",
  "100–200",
  "200–300",
  "300–500",
  "500–1000",
  "1000+",
];

export const slots = ["Full day", "Morning", "Afternoon", "Evening", "Overnight"];

export const occasions = [
  "Wedding",
  "Engagement",
  "Sangeet",
  "Birthday",
  "Corporate",
  "Seminar",
];

export const categories = [
  { name: "Banquet Halls", count: "1,240 spaces", image: catBanquet, kind: "venue" },
  { name: "Lawns & Farmhouses", count: "820 spaces", image: catLawn, kind: "venue" },
  { name: "Caterers", count: "460 partners", image: catCaterer, kind: "vendor" },
  { name: "Photographers", count: "610 partners", image: catPhoto, kind: "vendor" },
  { name: "Makeup Artists", count: "390 partners", image: catMakeup, kind: "vendor" },
  { name: "Decorators", count: "540 partners", image: catDecor, kind: "vendor" },
] as const;

export type Venue = {
  slug: string;
  name: string;
  area: string;
  city: string;
  type: string;
  capacity: string;
  capacityMax: number;
  price: string;
  perPlate: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  veg: string;
  nonVeg: string;
  rooms: string;
  about: string;
};

export const venues: Venue[] = [
  {
    slug: "the-imperial-ballroom",
    name: "The Imperial Ballroom",
    area: "Lower Parel",
    city: "Mumbai",
    type: "5 Star Hotel",
    capacity: "300–900 pax",
    capacityMax: 900,
    price: "₹2,400 per plate",
    perPlate: 2400,
    rating: 4.8,
    reviews: 214,
    image: venue1,
    tags: ["Valet parking", "In-house decor", "Bridal suite"],
    veg: "₹2,400",
    nonVeg: "₹2,900",
    rooms: "42 rooms",
    about:
      "A double-height ballroom with hand-cut chandeliers and gold leaf detailing, built for grand receptions and sangeet nights. In-house culinary team serves 14 live counters.",
  },
  {
    slug: "skyline-terrace",
    name: "Skyline Terrace",
    area: "Bandra West",
    city: "Mumbai",
    type: "Rooftop",
    capacity: "80–250 pax",
    capacityMax: 250,
    price: "₹1,650 per plate",
    perPlate: 1650,
    rating: 4.6,
    reviews: 132,
    image: venue2,
    tags: ["Open air", "DJ allowed", "Sea breeze"],
    veg: "₹1,650",
    nonVeg: "₹1,950",
    rooms: "No stay",
    about:
      "An open-sky terrace strung with warm fairy lights and framed by the city skyline. Ideal for cocktail evenings, engagements and intimate receptions.",
  },
  {
    slug: "rajmahal-heritage-courtyard",
    name: "Rajmahal Heritage Courtyard",
    area: "Amer Road",
    city: "Jaipur",
    type: "Heritage Palace",
    capacity: "200–700 pax",
    capacityMax: 700,
    price: "₹2,100 per plate",
    perPlate: 2100,
    rating: 4.9,
    reviews: 301,
    image: venue3,
    tags: ["Destination", "Baraat entry", "Fireworks allowed"],
    veg: "₹2,100",
    nonVeg: "₹2,600",
    rooms: "58 rooms",
    about:
      "Carved sandstone arches, lantern-lit corridors and a courtyard made for pheras at dusk. A destination favourite for three-day celebrations.",
  },
  {
    slug: "meridian-convention-centre",
    name: "Meridian Convention Centre",
    area: "HITEC City",
    city: "Hyderabad",
    type: "Convention Centre",
    capacity: "400–1500 pax",
    capacityMax: 1500,
    price: "₹1,350 per plate",
    perPlate: 1350,
    rating: 4.4,
    reviews: 96,
    image: venue4,
    tags: ["Pillarless", "AV setup", "Ample parking"],
    veg: "₹1,350",
    nonVeg: "₹1,700",
    rooms: "No stay",
    about:
      "A pillarless glass hall with modular staging and full AV rigging — equally at home hosting a 1,200-guest reception or a corporate gala dinner.",
  },
  {
    slug: "palm-court-resort",
    name: "Palm Court Resort",
    area: "Old Mahabalipuram Rd",
    city: "Chennai",
    type: "Resort",
    capacity: "150–450 pax",
    capacityMax: 450,
    price: "₹1,800 per plate",
    perPlate: 1800,
    rating: 4.7,
    reviews: 178,
    image: venue5,
    tags: ["Poolside", "Garden mandap", "Stay included"],
    veg: "₹1,800",
    nonVeg: "₹2,200",
    rooms: "36 rooms",
    about:
      "Poolside lawns edged by palms, with a floral mandap deck for daytime muhurats and a covered hall as the monsoon backup.",
  },
  {
    slug: "the-chandelier-room",
    name: "The Chandelier Room",
    area: "Koregaon Park",
    city: "Pune",
    type: "Banquet Hall",
    capacity: "60–180 pax",
    capacityMax: 180,
    price: "₹1,250 per plate",
    perPlate: 1250,
    rating: 4.5,
    reviews: 88,
    image: venue6,
    tags: ["Intimate", "Candlelit", "Outside caterers"],
    veg: "₹1,250",
    nonVeg: "₹1,550",
    rooms: "No stay",
    about:
      "A warm, candlelit hall for intimate engagements and anniversary dinners, with arched windows and a working fireplace as the backdrop.",
  },
];

export const stories = [
  { image: story1, couple: "Ananya & Rohit", place: "Haldi at Rajmahal, Jaipur" },
  { image: story2, couple: "Meher & Kabir", place: "Reception at The Imperial, Mumbai" },
  { image: story3, couple: "Sara & Aditya", place: "Baraat in Bandra, Mumbai" },
];

export const testimonials = [
  {
    quote:
      "We shortlisted four halls in a single evening, compared per-plate menus side by side, and locked our date the same week.",
    name: "Priya & Varun",
    detail: "Wedding · Mumbai · 620 guests",
  },
  {
    quote:
      "The team held our date while we visited. No broker calls, no inflated quotes — the price on the page was the price we paid.",
    name: "Neha Kulkarni",
    detail: "Sangeet · Pune · 180 guests",
  },
  {
    quote:
      "Caterer, decorator and dhol were all booked through one dashboard. It saved us a month of running around.",
    name: "Imran & Zoya",
    detail: "Reception · Hyderabad · 900 guests",
  },
];
