export const sizes = [
  {
    id: "4inch",
    name: `4" Cake`,
    inches: 4,
    diameterSpec: "4\u2033",
    servings: "2 \u2013 4 Servings",
    sliceCount: "2-4 slices",
    basePrice: 1200,
    desc: "2 \u2013 4 Servings",
    tag: "Bento",
    imageSrc: "/cakes/cake-04.webp",
  },
  {
    id: "6inch",
    name: `6" Cake`,
    inches: 6,
    diameterSpec: "6\u2033",
    servings: "6 \u2013 8 Servings",
    sliceCount: "6-8 slices",
    basePrice: 1800,
    desc: "6 \u2013 8 Servings",
    tag: "Popular",
    imageSrc: "/cakes/cake-06.webp",
  },
  {
    id: "8inch",
    name: `8" Cake`,
    inches: 8,
    diameterSpec: "8\u2033",
    servings: "12 \u2013 16 Servings",
    sliceCount: "12-16 slices",
    basePrice: 2800,
    desc: "12 \u2013 16 Servings",
    tag: "Best Seller",
    popular: true,
    imageSrc: "/cakes/cake-08.webp",
  },
  {
    id: "10inch",
    name: `10" Cake`,
    inches: 10,
    diameterSpec: "10\u2033",
    servings: "20 \u2013 26 Servings",
    sliceCount: "20-26 slices",
    basePrice: 4200,
    desc: "20 \u2013 26 Servings",
    tag: "Feast Size",
    imageSrc: "/cakes/cake-10.webp",
  },
];

export const flavors = [
  { id: "chocolate", name: "Belgian Chocolate" },
  { id: "vanilla", name: "Vanilla Bean" },
  { id: "pistachio", name: "Pistachio Rose" },
  { id: "red-velvet", name: "Red Velvet" },
  { id: "caramel", name: "Salted Caramel" },
];

export const fillings = [
  { id: "swiss-buttercream", name: "Swiss Buttercream" },
  { id: "dark-ganache", name: "Belgian Ganache" },
  { id: "cream-cheese", name: "Cream Cheese" },
  { id: "fruit-compote", name: "Raspberry Compote" },
  { id: "salted-caramel", name: "Caramel Cream" },
];

export const accentColors = [
  { id: "ivory", name: "Ivory White", bg: "bg-stone-100 border-stone-300" },
  { id: "pink", name: "Rose Pink", bg: "bg-pink-100 border-pink-300" },
  { id: "sage", name: "Sage Green", bg: "bg-emerald-100 border-emerald-300" },
  { id: "chocolate", name: "Mocha", bg: "bg-amber-100 border-amber-300" },
  { id: "lilac", name: "Soft Lilac", bg: "bg-purple-100 border-purple-300" },
];

export const deliveryZones = [
  { id: "inside_dhaka", name: "Inside Dhaka", fee: 100 },
  { id: "outside_dhaka", name: "Outside Dhaka", fee: 120 },
  { id: "pickup", name: "Bakery Pickup", fee: 0 },
];

export const timeSlots = [
  "11:00 AM - 01:00 PM",
  "02:00 PM - 04:00 PM",
  "05:00 PM - 07:00 PM",
  "08:00 PM - 10:00 PM",
];
