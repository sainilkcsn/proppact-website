export type GalleryPhoto = {
  id: string;
  title: string;
  image: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  order: number;
};

export type GalleryAlbum = {
  slug: string;
  title: string;
  year: number;
  description: string;
  coverImage: string;
  coverAlt: string;
  blogSlug?: string;
  photos: GalleryPhoto[];
};

const DIWALI_2026_PHOTOS: GalleryPhoto[] = [
  {
    id: "diwali-2026-001",
    title: "Gift exchange with a PropPact tote",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-pink-kurta.jpg",
    alt: "Two colleagues in festive kurtas holding a PropPact tote bag and a Bikano Uphaar gift box in the office",
    caption: "A little festive surprise for the team, shared with plenty of smiles.",
    width: 1200,
    height: 1600,
    order: 1,
  },
  {
    id: "diwali-2026-002",
    title: "Sharing a festive hamper",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-navy-kurta.jpg",
    alt: "Two team members in traditional attire holding a Bikano Uphaar box and a PropPact branded tote bag",
    caption: "Hampers and PropPact bags made their way around the office.",
    width: 1200,
    height: 1600,
    order: 2,
  },
  {
    id: "diwali-2026-003",
    title: "Presenting the gift bag",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-olive-kurta.jpg",
    alt: "Two colleagues smiling while holding a PropPact tote bag with a festive gift box inside an office",
    caption: "One of many gift moments from our office celebration.",
    width: 1200,
    height: 1600,
    order: 3,
  },
  {
    id: "diwali-2026-004",
    title: "White and blue kurtas",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-white-kurta.jpg",
    alt: "Two colleagues in white and blue kurtas holding a PropPact gift bag and festive snack box",
    caption: "Traditional kurtas and a festive gift set between colleagues.",
    width: 1200,
    height: 1600,
    order: 4,
  },
  {
    id: "diwali-2026-005",
    title: "Yellow kurta gift moment",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-yellow-kurta.jpg",
    alt: "Two team members in yellow and blue kurtas posing with a PropPact tote and Bikano Uphaar box",
    caption: "Festive hampers were stacked nearby as the team paused for photographs.",
    width: 1200,
    height: 1600,
    order: 5,
  },
  {
    id: "diwali-2026-006",
    title: "Formal shirt and kurta",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-brown-shirt.jpg",
    alt: "A colleague in a brown shirt and another in a blue kurta holding a PropPact tote bag and gift box",
    caption: "Not everyone wore a kurta — but everyone joined in.",
    width: 1200,
    height: 1600,
    order: 6,
  },
  {
    id: "diwali-2026-007",
    title: "Black kurta gift set",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-black-kurta.jpg",
    alt: "Two colleagues holding a PropPact tote bag stacked on a Bikano Uphaar gift box",
    caption: "PropPact tote bags paired with festive snack boxes for the team.",
    width: 1200,
    height: 1600,
    order: 7,
  },
  {
    id: "diwali-2026-008",
    title: "Festive attire and a wrapped gift",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-festive-saree.jpg",
    alt: "Two colleagues in pink festive attire and a yellow outfit holding a red wrapped gift in the office",
    caption: "Bright outfits and a carefully wrapped gift shared between colleagues.",
    width: 1200,
    height: 1600,
    order: 8,
  },
  {
    id: "diwali-2026-009",
    title: "Gift exchange near the partitions",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-black-shirt.jpg",
    alt: "Two colleagues exchanging a PropPact tote bag and festive gift box near office partitions",
    caption: "Another pause in the day for gifts and photographs.",
    width: 1200,
    height: 1600,
    order: 9,
  },
  {
    id: "diwali-2026-010",
    title: "Desk-side gift bags",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-colleagues-desk.jpg",
    alt: "Two colleagues smiling with a PropPact tote bag and festive gift box beside stacked boxes on a desk",
    caption: "Gift bags ready on the desk for team members.",
    width: 1200,
    height: 1600,
    order: 10,
  },
  {
    id: "diwali-2026-011",
    title: "Colourful kurtas together",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-kurtas-group.jpg",
    alt: "Three colleagues posing together in red, dark green and lime green kurtas during Diwali",
    caption: "Bright colours and traditional outfits brought a festive feel to the office.",
    width: 1200,
    height: 1600,
    order: 11,
  },
  {
    id: "diwali-2026-012",
    title: "Yellow outfit gift moment",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-yellow-outfit.jpg",
    alt: "Two colleagues in a yellow outfit and blue kurta holding a PropPact tote bag and Bikano Uphaar box",
    caption: "Smiles, kurtas and a PropPact gift bag — a familiar scene that day.",
    width: 1200,
    height: 1600,
    order: 12,
  },
  {
    id: "diwali-2026-013",
    title: "Teal shirt gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-teal-shirt.jpg",
    alt: "Two colleagues holding a PropPact tote bag and festive Uphaar gift box in a bright office corridor",
    caption: "Tote bags and Uphaar boxes were a common sight across the office.",
    width: 1200,
    height: 1600,
    order: 13,
  },
  {
    id: "diwali-2026-014",
    title: "Magenta and blue kurtas",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-magenta-kurta.jpg",
    alt: "Two colleagues in magenta and blue kurtas holding a PropPact tote bag and Bikano Uphaar gift box",
    caption: "Magenta and blue kurtas stood out against the office backdrop.",
    width: 1200,
    height: 1600,
    order: 14,
  },
  {
    id: "diwali-2026-015",
    title: "Teal saree gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-teal-saree.jpg",
    alt: "Two colleagues in a teal saree and blue kurta holding a PropPact tote bag and festive gift box",
    caption: "A saree and a kurta — festive attire for the office Diwali.",
    width: 1200,
    height: 1600,
    order: 15,
  },
  {
    id: "diwali-2026-016",
    title: "Lime kurta gift moment",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-lime-kurta.jpg",
    alt: "Two colleagues in lime and blue kurtas posing with a PropPact tote bag and festive snack box",
    caption: "Lime green and blue kurtas beside the stack of festive boxes.",
    width: 1200,
    height: 1600,
    order: 16,
  },
  {
    id: "diwali-2026-017",
    title: "Olive kurta and jeans",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-olive-jeans.jpg",
    alt: "Two colleagues holding a PropPact tote bag with a Bikano Uphaar gift box visible at the base",
    caption: "Casual and traditional looks side by side for the gift exchange.",
    width: 1200,
    height: 1600,
    order: 17,
  },
  {
    id: "diwali-2026-018",
    title: "At the office entrance",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-office-entrance.jpg",
    alt: "Three colleagues in festive pink, teal and yellow outfits standing outside the office entrance with marigold garlands",
    caption: "Marigold garlands welcomed everyone at the office entrance.",
    width: 728,
    height: 1600,
    order: 18,
  },
  {
    id: "diwali-2026-019",
    title: "By the Yuvraj Villa posters",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-yuvraj-villa-posters.jpg",
    alt: "Three colleagues in festive attire standing in front of Yuvraj Villa posters at the PropPact office",
    caption: "Festive attire against the Yuvraj Villa posters inside the office.",
    width: 1200,
    height: 1600,
    order: 19,
  },
  {
    id: "diwali-2026-020",
    title: "A festive presentation",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-festive-presentation.jpg",
    alt: "Two colleagues in pink and teal festive attire holding a white envelope together in the office",
    caption: "A quiet presentation moment amid the day's celebrations.",
    width: 1200,
    height: 1600,
    order: 20,
  },
  {
    id: "diwali-2026-021",
    title: "Team gathering in the corridor",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-office-gathering.jpg",
    alt: "PropPact team members seated facing each other in an office corridor with PropPact gift bags lined along the wall",
    caption: "The team gathered together with gift bags lined along the corridor.",
    width: 1200,
    height: 1600,
    order: 21,
  },
];

export const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    slug: "diwali-2026",
    title: "Diwali 2026",
    year: 2026,
    description:
      "Photographs from PropPact Realty's office Diwali celebration — festive attire, marigold decorations, gift exchanges and time spent together as a team.",
    coverImage:
      "/images/gallery/diwali-2026/proppact-diwali-2026-team-office-gathering.jpg",
    coverAlt:
      "PropPact Realty team gathered in the office for Diwali 2026 with festive gift bags nearby",
    blogSlug: "diwali-2026-proppact-realty",
    photos: DIWALI_2026_PHOTOS,
  },
];

export function getGalleryAlbum(slug: string) {
  return GALLERY_ALBUMS.find((album) => album.slug === slug);
}
