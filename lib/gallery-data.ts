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
    title: "Diwali 2026 – Gift exchange with PropPact tote bag",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-pink-kurta.jpg",
    alt: "Two colleagues in festive kurtas holding a PropPact tote bag and a Bikano Uphaar gift box in the office",
    caption: "Festive gift exchange during the Diwali 2026 celebration at the PropPact office.",
    width: 1200,
    height: 1600,
    order: 1,
  },
  {
    id: "diwali-2026-002",
    title: "Diwali 2026 – Colleagues with festive gift hamper",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-navy-kurta.jpg",
    alt: "Two team members in traditional attire holding a Bikano Uphaar box and a PropPact branded tote bag",
    caption: "Team members share a Diwali gift hamper and a PropPact tote bag.",
    width: 1200,
    height: 1600,
    order: 2,
  },
  {
    id: "diwali-2026-003",
    title: "Diwali 2026 – Gift bag presentation in the office",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-olive-kurta.jpg",
    alt: "Two colleagues smiling while holding a PropPact tote bag with a festive gift box inside an office",
    caption: "A PropPact tote bag and festive gift box presented during Diwali 2026.",
    width: 1200,
    height: 1600,
    order: 3,
  },
  {
    id: "diwali-2026-004",
    title: "Diwali 2026 – White kurta gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-white-kurta.jpg",
    alt: "Two colleagues in white and blue kurtas holding a PropPact gift bag and festive snack box",
    caption: "Another festive gift moment captured during the office Diwali celebration.",
    width: 1200,
    height: 1600,
    order: 4,
  },
  {
    id: "diwali-2026-005",
    title: "Diwali 2026 – Yellow kurta gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-yellow-kurta.jpg",
    alt: "Two team members in yellow and blue kurtas posing with a PropPact tote and Bikano Uphaar box",
    caption: "Colleagues pose with Diwali gifts beside stacked festive boxes on an office desk.",
    width: 1200,
    height: 1600,
    order: 5,
  },
  {
    id: "diwali-2026-006",
    title: "Diwali 2026 – Formal shirt and kurta gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-brown-shirt.jpg",
    alt: "A colleague in a brown shirt and another in a blue kurta holding a PropPact tote bag and gift box",
    caption: "Festive gifting continues across the PropPact team.",
    width: 1200,
    height: 1600,
    order: 6,
  },
  {
    id: "diwali-2026-007",
    title: "Diwali 2026 – Black kurta gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-black-kurta.jpg",
    alt: "Two colleagues holding a PropPact tote bag stacked on a Bikano Uphaar gift box",
    caption: "A Diwali gift set presented in the PropPact Realty office.",
    width: 1200,
    height: 1600,
    order: 7,
  },
  {
    id: "diwali-2026-008",
    title: "Diwali 2026 – Festive attire gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-festive-saree.jpg",
    alt: "Two colleagues in pink festive attire and a yellow outfit holding a red wrapped gift in the office",
    caption: "Colleagues in festive attire share a Diwali gift.",
    width: 1200,
    height: 1600,
    order: 8,
  },
  {
    id: "diwali-2026-009",
    title: "Diwali 2026 – Black shirt gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-black-shirt.jpg",
    alt: "Two colleagues exchanging a PropPact tote bag and festive gift box near office partitions",
    caption: "Gift distribution during the Diwali 2026 office celebration.",
    width: 1200,
    height: 1600,
    order: 9,
  },
  {
    id: "diwali-2026-010",
    title: "Diwali 2026 – Desk-side gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-colleagues-desk.jpg",
    alt: "Two colleagues smiling with a PropPact tote bag and festive gift box beside stacked boxes on a desk",
    caption: "Diwali gifts ready for the team at the PropPact office.",
    width: 1200,
    height: 1600,
    order: 10,
  },
  {
    id: "diwali-2026-011",
    title: "Diwali 2026 – Team members in colourful kurtas",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-kurtas-group.jpg",
    alt: "Three colleagues posing together in red, dark green and lime green kurtas during Diwali",
    caption: "Team members in colourful festive kurtas during Diwali 2026.",
    width: 1200,
    height: 1600,
    order: 11,
  },
  {
    id: "diwali-2026-012",
    title: "Diwali 2026 – Yellow outfit gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-yellow-outfit.jpg",
    alt: "Two colleagues in a yellow outfit and blue kurta holding a PropPact tote bag and Bikano Uphaar box",
    caption: "Another festive gift exchange captured in the office.",
    width: 1200,
    height: 1600,
    order: 12,
  },
  {
    id: "diwali-2026-013",
    title: "Diwali 2026 – Teal shirt gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-teal-shirt.jpg",
    alt: "Two colleagues holding a PropPact tote bag and festive Uphaar gift box in a bright office corridor",
    caption: "PropPact tote bags and festive gift boxes shared during Diwali 2026.",
    width: 1200,
    height: 1600,
    order: 13,
  },
  {
    id: "diwali-2026-014",
    title: "Diwali 2026 – Magenta kurta gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-magenta-kurta.jpg",
    alt: "Two colleagues in magenta and blue kurtas holding a PropPact tote bag and Bikano Uphaar gift box",
    caption: "Festive kurtas and Diwali gifts at the PropPact Realty office.",
    width: 1200,
    height: 1600,
    order: 14,
  },
  {
    id: "diwali-2026-015",
    title: "Diwali 2026 – Teal saree gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-teal-saree.jpg",
    alt: "Two colleagues in a teal saree and blue kurta holding a PropPact tote bag and festive gift box",
    caption: "Traditional festive attire and Diwali gifts shared by the team.",
    width: 1200,
    height: 1600,
    order: 15,
  },
  {
    id: "diwali-2026-016",
    title: "Diwali 2026 – Lime kurta gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-lime-kurta.jpg",
    alt: "Two colleagues in lime and blue kurtas posing with a PropPact tote bag and festive snack box",
    caption: "A Diwali gift moment beside stacked festive boxes on the office desk.",
    width: 1200,
    height: 1600,
    order: 16,
  },
  {
    id: "diwali-2026-017",
    title: "Diwali 2026 – Olive kurta and jeans gift exchange",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-gift-exchange-olive-jeans.jpg",
    alt: "Two colleagues holding a PropPact tote bag with a Bikano Uphaar gift box visible at the base",
    caption: "Team members celebrate Diwali with branded tote bags and festive gifts.",
    width: 1200,
    height: 1600,
    order: 17,
  },
  {
    id: "diwali-2026-018",
    title: "Diwali 2026 – Team members at the office entrance",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-office-entrance.jpg",
    alt: "Three colleagues in festive pink, teal and yellow outfits standing outside the office entrance with marigold garlands",
    caption: "Team members gather at the marigold-decorated office entrance for Diwali 2026.",
    width: 728,
    height: 1600,
    order: 18,
  },
  {
    id: "diwali-2026-019",
    title: "Diwali 2026 – Team members by Yuvraj Villa posters",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-yuvraj-villa-posters.jpg",
    alt: "Three colleagues in festive attire standing in front of Yuvraj Villa posters at the PropPact office",
    caption: "Festive attire at the PropPact office during Diwali 2026.",
    width: 1200,
    height: 1600,
    order: 19,
  },
  {
    id: "diwali-2026-020",
    title: "Diwali 2026 – Festive presentation moment",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-festive-presentation.jpg",
    alt: "Two colleagues in pink and teal festive attire holding a white envelope together in the office",
    caption: "A festive presentation moment during the Diwali 2026 celebration.",
    width: 1200,
    height: 1600,
    order: 20,
  },
  {
    id: "diwali-2026-021",
    title: "Diwali 2026 – Team gathering in the office",
    image: "/images/gallery/diwali-2026/proppact-diwali-2026-team-office-gathering.jpg",
    alt: "PropPact team members seated facing each other in an office corridor with PropPact gift bags lined along the wall",
    caption: "The team gathers in the office with PropPact gift bags prepared for Diwali 2026.",
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
      "Celebrate the spirit of Diwali with PropPact Realty through photographs of festive attire, office decorations, gift exchanges and togetherness at the PropPact office.",
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
