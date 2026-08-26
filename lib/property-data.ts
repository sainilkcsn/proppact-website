import { SITE } from "@/lib/site";

/**
 * PropPact property domain model.
 * Demo data below is for UI/development only — replace with CRM/API later.
 */

export type PropertyCategory =
  | "residential"
  | "villa"
  | "plot"
  | "commercial";

export type PropertyStatus =
  | "ready"
  | "under-construction"
  | "resale"
  | "available";

export type Property = {
  id: string;
  slug: string;
  title: string;
  category: PropertyCategory;
  propertyType: string;
  locality: string;
  city: string;
  price: number;
  priceLabel: string;
  bhk?: number;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  areaUnit: "sq.ft" | "sq.yd" | "sq.m";
  plotArea?: number;
  plotAreaUnit?: "sq.yd" | "sq.ft";
  developmentType?: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  featured?: boolean;
  status: PropertyStatus;
};

export const PROPERTY_STATUS_LABEL: Record<PropertyStatus, string> = {
  ready: "Ready to Move",
  "under-construction": "Under Construction",
  resale: "Resale",
  available: "Available",
};

const CITY = SITE.city;

function galleryFrom(...images: string[]) {
  return images;
}

/** DEMO DATA — not live PropPact inventory. Swap for CRM/API responses. */
export const PROPERTIES: Property[] = [
  // —— Residential (8) ——
  {
    id: "res-01",
    slug: "green-canopy-3bhk-sector-62",
    title: "Green Canopy Residences — 3 BHK",
    category: "residential",
    propertyType: "Apartment",
    locality: "Sector 62",
    city: CITY,
    price: 12500000,
    priceLabel: "₹1.25 Cr",
    bhk: 3,
    bedrooms: 3,
    bathrooms: 3,
    area: 1650,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/hero-home.jpg",
      "/images/blog-property.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "A well-planned 3 BHK apartment suited for growing families, with bright living spaces and a practical layout. Listing shown for PropPact demo purposes.",
    highlights: [
      "Spacious living and dining area",
      "Balcony with open views",
      "Covered parking included",
      "Near major transit corridors",
    ],
    amenities: ["Clubhouse", "Park", "24×7 Security", "Power Backup", "Lift"],
    featured: true,
    status: "ready",
  },
  {
    id: "res-02",
    slug: "maple-heights-2bhk-sector-137",
    title: "Maple Heights — 2 BHK Apartment",
    category: "residential",
    propertyType: "Apartment",
    locality: "Sector 137",
    city: CITY,
    price: 8500000,
    priceLabel: "₹85 Lakh",
    bhk: 2,
    bedrooms: 2,
    bathrooms: 2,
    area: 1120,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/blog-property.jpg",
      "/images/hero-home.jpg"
    ),
    description:
      "Compact 2 BHK designed for first-time buyers and professionals seeking a manageable monthly outlay. Demo listing for PropPact UI.",
    highlights: [
      "Efficient 2 BHK layout",
      "Modular kitchen provision",
      "Gated community amenities",
    ],
    amenities: ["Gym", "Security", "Visitor Parking", "Children’s Play Area"],
    status: "ready",
  },
  {
    id: "res-03",
    slug: "oakwood-plaza-4bhk-sector-150",
    title: "Oakwood Plaza — 4 BHK Apartment",
    category: "residential",
    propertyType: "Apartment",
    locality: "Sector 150",
    city: CITY,
    price: 21000000,
    priceLabel: "₹2.10 Cr",
    bhk: 4,
    bedrooms: 4,
    bathrooms: 4,
    area: 2450,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/about-hero.jpg",
      "/images/hero-home.jpg"
    ),
    description:
      "Larger-format 4 BHK apartment for families needing extra bedrooms and storage. Demonstration inventory only.",
    highlights: [
      "Four bedrooms with attached baths",
      "Utility area",
      "Corner unit orientation",
    ],
    amenities: ["Pool", "Clubhouse", "Security", "Power Backup", "Jogging Track"],
    featured: true,
    status: "under-construction",
  },
  {
    id: "res-04",
    slug: "riverbend-homes-1bhk-noida-extension",
    title: "Riverbend Homes — 1 BHK",
    category: "residential",
    propertyType: "Apartment",
    locality: "Greater Noida West",
    city: CITY,
    price: 4200000,
    priceLabel: "₹42 Lakh",
    bhk: 1,
    bedrooms: 1,
    bathrooms: 1,
    area: 620,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/blog-property.jpg"
    ),
    description:
      "Entry-level 1 BHK option for investors and singles. Demo property for PropPact listing cards.",
    highlights: ["Affordable entry ticket", "Low maintenance footprint"],
    amenities: ["Security", "Lift", "Park"],
    status: "ready",
  },
  {
    id: "res-05",
    slug: "cedar-court-3bhk-sector-75",
    title: "Cedar Court — 3 BHK Resale",
    category: "residential",
    propertyType: "Apartment",
    locality: "Sector 75",
    city: CITY,
    price: 11800000,
    priceLabel: "₹1.18 Cr",
    bhk: 3,
    bedrooms: 3,
    bathrooms: 2,
    area: 1580,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/hero-home.jpg",
      "/images/testimonials.jpg"
    ),
    description:
      "Resale 3 BHK with an established society and mature landscaping. Shown as sample PropPact inventory.",
    highlights: ["Immediate possession", "Established neighbourhood"],
    amenities: ["Clubhouse", "Security", "Power Backup", "Market nearby"],
    status: "resale",
  },
  {
    id: "res-06",
    slug: "sunrise-avenue-2bhk-sector-18",
    title: "Sunrise Avenue — 2 BHK",
    category: "residential",
    propertyType: "Apartment",
    locality: "Sector 18",
    city: CITY,
    price: 9800000,
    priceLabel: "₹98 Lakh",
    bhk: 2,
    bedrooms: 2,
    bathrooms: 2,
    area: 1180,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "2 BHK near a high-footfall commercial district — useful for owner-occupiers and rental yield seekers. Demo listing.",
    highlights: ["Central locality", "Strong rental demand profile"],
    amenities: ["Security", "Lift", "Covered Parking"],
    status: "ready",
  },
  {
    id: "res-07",
    slug: "willow-park-3bhk-yamuna-expressway",
    title: "Willow Park Residences — 3 BHK",
    category: "residential",
    propertyType: "Apartment",
    locality: "Yamuna Expressway",
    city: CITY,
    price: 7200000,
    priceLabel: "₹72 Lakh",
    bhk: 3,
    bedrooms: 3,
    bathrooms: 2,
    area: 1420,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/plots-hero.jpg",
      "/images/hero-home.jpg"
    ),
    description:
      "Value-focused 3 BHK along the expressway corridor. Demonstration data for filters and cards.",
    highlights: ["Expressway connectivity", "Open community greens"],
    amenities: ["Park", "Security", "Power Backup"],
    featured: true,
    status: "under-construction",
  },
  {
    id: "res-08",
    slug: "amber-towers-penthouse-sector-62",
    title: "Amber Towers — 4 BHK Penthouse",
    category: "residential",
    propertyType: "Penthouse",
    locality: "Sector 62",
    city: CITY,
    price: 34500000,
    priceLabel: "₹3.45 Cr",
    bhk: 4,
    bedrooms: 4,
    bathrooms: 5,
    area: 3200,
    areaUnit: "sq.ft",
    image: "/images/residential-hero.jpg",
    gallery: galleryFrom(
      "/images/residential-hero.jpg",
      "/images/villas-hero.jpg",
      "/images/hero-home.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "Upper-floor penthouse-style residence with expansive living areas. Sample listing for PropPact detail pages.",
    highlights: ["Private terrace", "Premium finishes", "Panoramic views"],
    amenities: ["Concierge", "Clubhouse", "Pool", "Security", "Valet Parking"],
    featured: true,
    status: "ready",
  },

  // —— Villas (6) ——
  {
    id: "vil-01",
    slug: "lagoon-estates-villa-gnoi",
    title: "Lagoon Estates — Independent Villa",
    category: "villa",
    propertyType: "Independent Villa",
    locality: "Greater Noida West",
    city: CITY,
    price: 34000000,
    priceLabel: "₹3.40 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    areaUnit: "sq.ft",
    plotArea: 250,
    plotAreaUnit: "sq.yd",
    image: "/images/villas-hero.jpg",
    gallery: galleryFrom(
      "/images/villas-hero.jpg",
      "/images/residential-hero.jpg",
      "/images/hero-home.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "Gated-community villa with private outdoor space. Demo inventory for PropPact villa category pages.",
    highlights: [
      "Private lawn and sit-out",
      "Four bedrooms",
      "Community club access",
    ],
    amenities: ["Gated Security", "Clubhouse", "Park", "Visitor Parking"],
    featured: true,
    status: "ready",
  },
  {
    id: "vil-02",
    slug: "palm-grove-duplex-sector-150",
    title: "Palm Grove — Duplex Villa",
    category: "villa",
    propertyType: "Duplex Villa",
    locality: "Sector 150",
    city: CITY,
    price: 27500000,
    priceLabel: "₹2.75 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    areaUnit: "sq.ft",
    plotArea: 200,
    plotAreaUnit: "sq.yd",
    image: "/images/villas-hero.jpg",
    gallery: galleryFrom(
      "/images/villas-hero.jpg",
      "/images/hero-home.jpg",
      "/images/blog-property.jpg"
    ),
    description:
      "Duplex villa layout with separate living levels. Sample PropPact listing.",
    highlights: ["Duplex configuration", "Dedicated parking"],
    amenities: ["Security", "Park", "Power Backup"],
    status: "under-construction",
  },
  {
    id: "vil-03",
    slug: "meadow-lane-builder-floor",
    title: "Meadow Lane — Builder Floor",
    category: "villa",
    propertyType: "Builder Floor",
    locality: "Sector 137",
    city: CITY,
    price: 18500000,
    priceLabel: "₹1.85 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    areaUnit: "sq.ft",
    plotArea: 150,
    plotAreaUnit: "sq.yd",
    image: "/images/villas-hero.jpg",
    gallery: galleryFrom(
      "/images/villas-hero.jpg",
      "/images/residential-hero.jpg"
    ),
    description:
      "Independent builder-floor style home with private entry. Demonstration data only.",
    highlights: ["Private entrance", "Three bedrooms"],
    amenities: ["Parking", "Security"],
    status: "ready",
  },
  {
    id: "vil-04",
    slug: "orchard-view-farmhouse-style",
    title: "Orchard View — Farmhouse-Style Villa",
    category: "villa",
    propertyType: "Farmhouse-Style Villa",
    locality: "Yamuna Expressway",
    city: CITY,
    price: 42000000,
    priceLabel: "₹4.20 Cr",
    bedrooms: 5,
    bathrooms: 5,
    area: 4500,
    areaUnit: "sq.ft",
    plotArea: 500,
    plotAreaUnit: "sq.yd",
    image: "/images/villas-hero.jpg",
    gallery: galleryFrom(
      "/images/villas-hero.jpg",
      "/images/plots-hero.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "Larger farmhouse-style villa for buyers seeking space and privacy. Demo PropPact listing.",
    highlights: ["Generous plot", "Outdoor entertaining zones"],
    amenities: ["Private Garden", "Parking", "Security"],
    featured: true,
    status: "available",
  },
  {
    id: "vil-05",
    slug: "silver-oaks-villa-sector-62",
    title: "Silver Oaks — Gated Community Villa",
    category: "villa",
    propertyType: "Gated-Community Villa",
    locality: "Sector 62",
    city: CITY,
    price: 31000000,
    priceLabel: "₹3.10 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: 3000,
    areaUnit: "sq.ft",
    plotArea: 220,
    plotAreaUnit: "sq.yd",
    image: "/images/villas-hero.jpg",
    gallery: galleryFrom(
      "/images/villas-hero.jpg",
      "/images/hero-home.jpg",
      "/images/testimonials.jpg"
    ),
    description:
      "Villa within a managed gated township setting. Sample inventory for filters.",
    highlights: ["Township amenities", "Four-bedroom layout"],
    amenities: ["Clubhouse", "Pool", "Security", "Park"],
    status: "ready",
  },
  {
    id: "vil-06",
    slug: "heritage-row-independent-house",
    title: "Heritage Row — Independent House",
    category: "villa",
    propertyType: "Independent House",
    locality: "Sector 75",
    city: CITY,
    price: 22500000,
    priceLabel: "₹2.25 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
    areaUnit: "sq.ft",
    plotArea: 180,
    plotAreaUnit: "sq.yd",
    image: "/images/villas-hero.jpg",
    gallery: galleryFrom(
      "/images/villas-hero.jpg",
      "/images/residential-hero.jpg",
      "/images/blog-property.jpg"
    ),
    description:
      "Independent house option with classic proportions. Demo listing only.",
    highlights: ["Independent structure", "Front sit-out"],
    amenities: ["Parking", "Security"],
    status: "resale",
  },

  // —— Plots (6) ——
  {
    id: "plt-01",
    slug: "clearview-residential-plot-yex",
    title: "Clearview Layout — Residential Plot",
    category: "plot",
    propertyType: "Residential Plot",
    locality: "Yamuna Expressway",
    city: CITY,
    price: 6500000,
    priceLabel: "₹65 Lakh",
    area: 200,
    areaUnit: "sq.yd",
    plotArea: 200,
    plotAreaUnit: "sq.yd",
    developmentType: "Approved Layout",
    image: "/images/plots-hero.jpg",
    gallery: galleryFrom(
      "/images/plots-hero.jpg",
      "/images/hero-home.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "Residential plot in an approved layout corridor. Demonstration listing for PropPact plots category.",
    highlights: [
      "Clear demonstration title notes",
      "Suitable for self-construction",
    ],
    amenities: ["Road Access", "Electricity Nearby"],
    featured: true,
    status: "available",
  },
  {
    id: "plt-02",
    slug: "gateway-plots-jewar",
    title: "Gateway Plots — Investment Parcel",
    category: "plot",
    propertyType: "Investment Plot",
    locality: "Jewar",
    city: CITY,
    price: 4200000,
    priceLabel: "₹42 Lakh",
    area: 150,
    areaUnit: "sq.yd",
    plotArea: 150,
    plotAreaUnit: "sq.yd",
    developmentType: "Investment Parcel",
    image: "/images/plots-hero.jpg",
    gallery: galleryFrom("/images/plots-hero.jpg", "/images/commercial-hero.jpg"),
    description:
      "Investment-oriented land parcel for long-horizon buyers. Demo data only.",
    highlights: ["Compact ticket size", "Corridor location narrative"],
    amenities: ["Approach Road"],
    status: "available",
  },
  {
    id: "plt-03",
    slug: "greenbelt-gated-plot",
    title: "Greenbelt Township — Gated Plot",
    category: "plot",
    propertyType: "Gated-Community Plot",
    locality: "Greater Noida West",
    city: CITY,
    price: 9800000,
    priceLabel: "₹98 Lakh",
    area: 250,
    areaUnit: "sq.yd",
    plotArea: 250,
    plotAreaUnit: "sq.yd",
    developmentType: "Gated Community",
    image: "/images/plots-hero.jpg",
    gallery: galleryFrom(
      "/images/plots-hero.jpg",
      "/images/villas-hero.jpg",
      "/images/residential-hero.jpg"
    ),
    description:
      "Plot inside a gated community setting with internal roads. Sample PropPact listing.",
    highlights: ["Gated access", "Internal road network"],
    amenities: ["Security", "Parks", "Internal Roads"],
    featured: true,
    status: "available",
  },
  {
    id: "plt-04",
    slug: "sunrise-farms-agri-parcel",
    title: "Sunrise Farms — Land Parcel",
    category: "plot",
    propertyType: "Agricultural / Investment Land",
    locality: "Yamuna Expressway",
    city: CITY,
    price: 2800000,
    priceLabel: "₹28 Lakh",
    area: 400,
    areaUnit: "sq.yd",
    plotArea: 400,
    plotAreaUnit: "sq.yd",
    developmentType: "Investment / Agricultural",
    image: "/images/plots-hero.jpg",
    gallery: galleryFrom("/images/plots-hero.jpg", "/images/testimonials.jpg"),
    description:
      "Larger land parcel positioned for long-term holding. Demo inventory.",
    highlights: ["Larger plot size", "Open surroundings"],
    amenities: ["Road Access"],
    status: "available",
  },
  {
    id: "plt-05",
    slug: "northridge-residential-plot-sector-150",
    title: "Northridge — Residential Plot",
    category: "plot",
    propertyType: "Residential Plot",
    locality: "Sector 150",
    city: CITY,
    price: 11200000,
    priceLabel: "₹1.12 Cr",
    area: 180,
    areaUnit: "sq.yd",
    plotArea: 180,
    plotAreaUnit: "sq.yd",
    developmentType: "Approved Layout",
    image: "/images/plots-hero.jpg",
    gallery: galleryFrom(
      "/images/plots-hero.jpg",
      "/images/hero-home.jpg"
    ),
    description:
      "Residential plot in a sought-after sector corridor. Demonstration listing.",
    highlights: ["Prime sector locality", "Build-ready narrative"],
    amenities: ["Road Access", "Utilities Nearby"],
    status: "available",
  },
  {
    id: "plt-06",
    slug: "lakeside-gated-plot-extension",
    title: "Lakeside Greens — Gated Plot",
    category: "plot",
    propertyType: "Gated-Community Plot",
    locality: "Greater Noida West",
    city: CITY,
    price: 7500000,
    priceLabel: "₹75 Lakh",
    area: 160,
    areaUnit: "sq.yd",
    plotArea: 160,
    plotAreaUnit: "sq.yd",
    developmentType: "Gated Community",
    image: "/images/plots-hero.jpg",
    gallery: galleryFrom(
      "/images/plots-hero.jpg",
      "/images/about-hero.jpg",
      "/images/villas-hero.jpg"
    ),
    description:
      "Mid-size gated plot for custom home construction. Demo PropPact data.",
    highlights: ["Managed community", "Flexible built-up potential"],
    amenities: ["Security", "Internal Roads", "Park"],
    status: "available",
  },

  // —— Commercial (6) ——
  {
    id: "com-01",
    slug: "market-square-retail-sector-18",
    title: "Market Square — Retail Shop",
    category: "commercial",
    propertyType: "Retail Shop",
    locality: "Sector 18",
    city: CITY,
    price: 18000000,
    priceLabel: "₹1.80 Cr",
    area: 850,
    areaUnit: "sq.ft",
    image: "/images/commercial-hero.jpg",
    gallery: galleryFrom(
      "/images/commercial-hero.jpg",
      "/images/hero-home.jpg",
      "/images/services.jpg"
    ),
    description:
      "Ground-floor retail unit in a high-footfall narrative location. Demo commercial listing.",
    highlights: ["Street-facing frontage", "High visibility"],
    amenities: ["Power Backup", "Parking Nearby", "Security"],
    featured: true,
    status: "resale",
  },
  {
    id: "com-02",
    slug: "workhub-office-sector-62",
    title: "WorkHub Centre — Ready Office",
    category: "commercial",
    propertyType: "Office Space",
    locality: "Sector 62",
    city: CITY,
    price: 9500000,
    priceLabel: "₹95 Lakh",
    area: 1050,
    areaUnit: "sq.ft",
    image: "/images/commercial-hero.jpg",
    gallery: galleryFrom(
      "/images/commercial-hero.jpg",
      "/images/contact-office.jpg",
      "/images/services.jpg"
    ),
    description:
      "Ready office floor plate for small teams and professional practices. Sample PropPact listing.",
    highlights: ["IT/office corridor", "Flexible fit-out potential"],
    amenities: ["Lift", "Power Backup", "Parking", "Security"],
    status: "ready",
  },
  {
    id: "com-03",
    slug: "arcade-showroom-sector-137",
    title: "Arcade Front — Showroom",
    category: "commercial",
    propertyType: "Showroom",
    locality: "Sector 137",
    city: CITY,
    price: 24000000,
    priceLabel: "₹2.40 Cr",
    area: 1800,
    areaUnit: "sq.ft",
    image: "/images/commercial-hero.jpg",
    gallery: galleryFrom(
      "/images/commercial-hero.jpg",
      "/images/blog-property.jpg"
    ),
    description:
      "Larger showroom-format unit for brand presence. Demonstration inventory.",
    highlights: ["Wide frontage", "Double-height feel narrative"],
    amenities: ["Parking", "Security", "Power Backup"],
    featured: true,
    status: "available",
  },
  {
    id: "com-04",
    slug: "logistics-bay-warehouse",
    title: "Logistics Bay — Warehouse Unit",
    category: "commercial",
    propertyType: "Warehouse",
    locality: "Greater Noida West",
    city: CITY,
    price: 16000000,
    priceLabel: "₹1.60 Cr",
    area: 4500,
    areaUnit: "sq.ft",
    image: "/images/commercial-hero.jpg",
    gallery: galleryFrom(
      "/images/commercial-hero.jpg",
      "/images/plots-hero.jpg"
    ),
    description:
      "Warehouse-style commercial unit for storage and light operations. Demo data.",
    highlights: ["Large floor plate", "Vehicle access narrative"],
    amenities: ["Loading Access", "Security", "Parking"],
    status: "available",
  },
  {
    id: "com-05",
    slug: "plaza-one-commercial-floor",
    title: "Plaza One — Commercial Floor",
    category: "commercial",
    propertyType: "Commercial Building Floor",
    locality: "Sector 62",
    city: CITY,
    price: 32000000,
    priceLabel: "₹3.20 Cr",
    area: 2800,
    areaUnit: "sq.ft",
    image: "/images/commercial-hero.jpg",
    gallery: galleryFrom(
      "/images/commercial-hero.jpg",
      "/images/contact-office.jpg",
      "/images/about-hero.jpg"
    ),
    description:
      "Full commercial floor suitable for corporate or multi-suite layouts. Sample listing.",
    highlights: ["Entire floor plate", "Corporate corridor"],
    amenities: ["Lift", "Power Backup", "Parking", "Security", "Reception Lobby"],
    status: "ready",
  },
  {
    id: "com-06",
    slug: "corner-cafe-retail-sector-18",
    title: "Corner Café Bay — Retail Unit",
    category: "commercial",
    propertyType: "Retail Shop",
    locality: "Sector 18",
    city: CITY,
    price: 12500000,
    priceLabel: "₹1.25 Cr",
    area: 520,
    areaUnit: "sq.ft",
    image: "/images/commercial-hero.jpg",
    gallery: galleryFrom(
      "/images/commercial-hero.jpg",
      "/images/services.jpg"
    ),
    description:
      "Compact corner retail bay ideal for F&B or boutique concepts. Demo PropPact listing.",
    highlights: ["Corner visibility", "Compact efficient size"],
    amenities: ["Power Backup", "Security"],
    status: "resale",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug);
}

export function getPropertiesByCategory(
  category: PropertyCategory
): Property[] {
  return PROPERTIES.filter((property) => property.category === category);
}

export function getSimilarProperties(
  property: Property,
  limit = 4
): Property[] {
  return PROPERTIES.filter(
    (item) =>
      item.id !== property.id &&
      (item.category === property.category ||
        item.locality === property.locality)
  ).slice(0, limit);
}

export function formatArea(property: Property): string {
  return `${property.area.toLocaleString("en-IN")} ${property.areaUnit}`;
}
