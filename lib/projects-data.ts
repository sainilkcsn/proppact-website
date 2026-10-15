import { SITE } from "@/lib/site";

export type ProjectCategory = "residential" | "villa";

export type PriceRow = {
  configuration: string;
  detail: string;
  amount: string;
};

export type HistoricalPriceGuide = {
  heading: string;
  rows: PriceRow[];
  extraCharges: string[];
  disclaimer: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  locality: string;
  localitySlugs: string[];
  city: string;
  address: string;
  coverImage: string;
  coverAlt: string;
  configurations: string[];
  areaRange: string;
  description: string;
  highlights: string[];
  priceLabel: string;
  /** Lakhs, only when an indicative published figure may be used for filtering. */
  indicativeMinLakhs: number | null;
  priceInformation: string;
  historicalPriceGuide: HistoricalPriceGuide | null;
  developer: string | null;
  marketer: string | null;
  mapUrl: string;
  /** True only when this project's pin is the verified PropPact office location. */
  verifiedOfficePin?: boolean;
  /** Set only when this project's own coordinates have been verified. */
  verifiedCoordinates?: { latitude: number; longitude: number };
  /** Locality search used when coordinates are not verified. */
  mapQuery?: string;
  /** Link labels for an unverified locality search. */
  localityMapLabels?: { view: string; directions: string };
  availabilityLabel: string;
  featured: boolean;
  enquiryEnabled: boolean;
};

const mapsSearch = (query: string) =>
  `https://maps.google.com/?q=${encodeURIComponent(query)}`;

export const PROJECTS: Project[] = [
  {
    id: "vista-homez",
    slug: "vista-homez",
    name: "Vista Homez",
    category: "residential",
    categoryLabel: "Low-rise apartments",
    locality: "Milak Lacchi, Techzone-7",
    localitySlugs: ["techzone-7", "greater-noida-west"],
    city: SITE.city,
    address: "Milak Lacchi, Techzone-7, Noida Extension, Greater Noida West",
    coverImage: "/images/projects/vista-homez/cover.jpg",
    coverAlt: "Vista Homez project cover in Techzone-7, Greater Noida West",
    configurations: ["2 BHK"],
    areaRange: "980 sq ft and 1,050 sq ft",
    description:
      "Vista Homez is a low-rise 2 BHK apartment project at Milak Lacchi, Techzone-7, Noida Extension, Greater Noida West. The supplied floor-plan material describes two rooms, two toilets, a kitchen, a drawing area and a balcony.",
    highlights: [
      "Low-rise 2 BHK apartments",
      "Supplied areas: 980 sq ft and 1,050 sq ft",
      "Floor-plan material describes two rooms, two toilets, kitchen, drawing area and balcony",
    ],
    priceLabel: "Price on enquiry",
    indicativeMinLakhs: null,
    priceInformation:
      "Current price, additional charges and availability must be confirmed with PropPact.",
    historicalPriceGuide: {
      heading: "Previously supplied price guide — effective 8 October 2025",
      rows: [
        {
          configuration: "2 BHK",
          detail: "980 sq ft",
          amount: "₹46.10 lakh",
        },
        {
          configuration: "2 BHK",
          detail: "1,050 sq ft",
          amount: "₹47.25 lakh",
        },
      ],
      extraCharges: [
        "The supplied material notes that an electricity/sub-meter or other charge may apply.",
        "Marketing artwork from the same material advertised prices starting at ₹46 lakh.",
        "Government and other charges may be extra, as stated in the supplied price material.",
      ],
      disclaimer:
        "These figures are historical and indicative. They are not today's confirmed prices. Current prices, charges and availability must be confirmed by PropPact.",
    },
    developer: null,
    marketer: null,
    mapUrl: mapsSearch(
      "Milak Lacchi, Techzone-7, Noida Extension, Greater Noida West"
    ),
    availabilityLabel: "Availability must be confirmed with PropPact",
    featured: true,
    enquiryEnabled: true,
  },
  {
    id: "madhav-kunj",
    slug: "madhav-kunj",
    name: "Madhav Kunj",
    category: "residential",
    categoryLabel: "Residential apartments",
    locality: "Techzone-7",
    localitySlugs: ["techzone-7", "greater-noida-west"],
    city: SITE.city,
    address: "Techzone-7, Noida Extension, Greater Noida West",
    coverImage: "/images/projects/madhav-kunj/cover.jpg",
    coverAlt: "Madhav Kunj project cover in Techzone-7, Greater Noida West",
    configurations: ["2 BHK + 2T", "3 BHK + 2T"],
    areaRange: "1,150 sq ft and 1,650 sq ft",
    description:
      "Madhav Kunj is a residential project at Techzone-7, Noida Extension, Greater Noida West. The supplied material lists a 2 BHK + 2T plan of 1,150 sq ft and a 3 BHK + 2T plan of 1,650 sq ft.",
    highlights: [
      "2 BHK + 2T — 1,150 sq ft",
      "3 BHK + 2T — 1,650 sq ft",
      "Location stated in the supplied price list: Techzone-7, Noida Extension, Greater Noida West",
    ],
    priceLabel: "Price on enquiry",
    indicativeMinLakhs: null,
    priceInformation:
      "Current price, additional charges and availability must be reconfirmed with PropPact.",
    historicalPriceGuide: {
      heading: "Previously supplied price guide — effective 10 May 2025",
      rows: [
        {
          configuration: "2 BHK + 2T",
          detail: "1,150 sq ft",
          amount: "₹58,00,000",
        },
        {
          configuration: "3 BHK + 2T",
          detail: "1,650 sq ft",
          amount: "₹68,00,000",
        },
      ],
      extraCharges: [
        "Corner PLC: ₹2,00,000 for 3 BHK + 2T, as stated in the supplied price list.",
        "Water, electricity and development charges: ₹85,000.",
        "GST extra.",
        "Individual electric meter connection charges extra.",
      ],
      disclaimer:
        "The May 2025 prices are not a current quotation. Prices and availability must be reconfirmed with PropPact before any decision.",
    },
    developer: null,
    marketer: null,
    mapUrl: mapsSearch("Techzone-7, Noida Extension, Greater Noida West"),
    availabilityLabel: "Availability must be confirmed with PropPact",
    featured: true,
    enquiryEnabled: true,
  },
  {
    id: "yuvraj-villa",
    slug: "yuvraj-villa",
    name: "Yuvraj Villa",
    category: "villa",
    categoryLabel: "3 BHK duplex villas",
    locality: "Vaidpura, Sector 10",
    localitySlugs: ["vaidpura", "sector-10", "greater-noida-west"],
    city: SITE.city,
    address: "Vaidpura, Sector 10, Greater Noida West",
    coverImage: "/images/projects/yuvraj-villa/cover.jpg",
    coverAlt: "Yuvraj Villa project cover in Vaidpura, Sector 10, Greater Noida West",
    configurations: ["3 BHK duplex"],
    areaRange: "70 sq yd plots",
    description:
      "Yuvraj Villa is a 3 BHK duplex villa project at Vaidpura, Sector 10, Greater Noida West. The supplied price list describes 70 sq yd plots in two types.",
    highlights: [
      "3 BHK duplex villas",
      "Plot size stated in the supplied list: 70 sq yd",
      "Type A (unit numbers 1–11): plot dimension 31.5 ft × 20 ft",
      "Type B (unit numbers 12–27): plot dimension 21 ft × 30 ft",
    ],
    priceLabel: "Indicative price from ₹85 lakh + applicable charges",
    indicativeMinLakhs: 85,
    priceInformation:
      "Price list effective 21 September 2026 — confirm current availability and final payable amount before booking.",
    historicalPriceGuide: {
      heading: "Supplied price list — effective 21 September 2026",
      rows: [
        {
          configuration: "Type A",
          detail: "Units 1–11 · 31.5 ft × 20 ft",
          amount: "Basic price ₹86,00,000",
        },
        {
          configuration: "Type B",
          detail: "Units 12–27 · 21 ft × 30 ft",
          amount: "Basic price ₹85,00,000",
        },
      ],
      extraCharges: [
        "Electrification and water charges: ₹1,00,000.",
        "Registration, stamp duty, legal documentation, GST and other applicable government charges are additional, as specified in the supplied price sheet.",
      ],
      disclaimer:
        "This is not a calculated all-inclusive sale price. Confirm current availability and the final payable amount with PropPact before booking. Unit availability is not confirmed on this page.",
    },
    developer: null,
    marketer: null,
    mapUrl: SITE.mapsUrl,
    verifiedOfficePin: true,
    verifiedCoordinates: {
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    availabilityLabel: "Availability must be confirmed with PropPact",
    featured: true,
    enquiryEnabled: true,
  },
  {
    id: "rudransh-urban-vista",
    slug: "rudransh-urban-vista",
    name: "Rudransh Urban Vista",
    category: "residential",
    categoryLabel: "Simplex and duplex floors",
    locality: "Sector 10",
    localitySlugs: ["sector-10", "greater-noida-west"],
    city: SITE.city,
    address: "Sector 10, Greater Noida West",
    coverImage: "/images/projects/rudransh-urban-vista/cover.jpg",
    coverAlt: "Rudransh Urban Vista project cover in Sector 10, Greater Noida West",
    configurations: ["Simplex", "Duplex"],
    areaRange: "1,050 sq ft to 2,405 sq ft in the supplied price-list artwork",
    description:
      "Rudransh Urban Vista is identified in the supplied brochure as a residential project in Sector 10, Greater Noida West. The brochure attributes development to Hoon Brothers Infratech Pvt. Ltd. and marketing to Wastu Home's. The supplied material describes simplex and duplex residential floor configurations.",
    highlights: [
      "Developer named in the supplied brochure: Hoon Brothers Infratech Pvt. Ltd.",
      "Marketing attribution in the supplied brochure: Wastu Home's",
      "Simplex and duplex residential floor configurations",
      "The supplied brochure refers to nearby facilities and a proposed or upcoming metro station. Distances, travel times and an operational metro connection are not confirmed here.",
    ],
    priceLabel: "Price on enquiry",
    indicativeMinLakhs: null,
    priceInformation:
      "The supplied price-list artwork has no visible effective date and says prices are subject to revision. Current rates, additional charges and availability must be confirmed.",
    historicalPriceGuide: {
      heading: "Previously supplied price information — effective date not stated",
      rows: [
        {
          configuration: "Simplex · 2 BHK",
          detail: "1,050 sq ft",
          amount: "₹48,00,000",
        },
        {
          configuration: "Simplex · 2 BHK + Study",
          detail: "1,150 sq ft",
          amount: "₹49,50,000",
        },
        {
          configuration: "Simplex · 3 BHK",
          detail: "1,550 sq ft",
          amount: "₹61,00,000",
        },
        {
          configuration: "Duplex · 2 BHK + Hall",
          detail: "1,625 sq ft",
          amount: "₹68,50,000",
        },
        {
          configuration: "Duplex · 2 BHK + Hall + Bedroom",
          detail: "1,775 sq ft",
          amount: "₹70,50,000",
        },
        {
          configuration: "Duplex · 2 BHK + Hall + Study",
          detail: "1,775 sq ft",
          amount: "₹70,00,000",
        },
        {
          configuration: "Duplex · 3 BHK + Bedroom + Hall",
          detail: "2,405 sq ft",
          amount: "₹80,00,000",
        },
      ],
      extraCharges: [
        "The same undated price-list artwork mentions meter charges, advance maintenance, PLC and GST.",
        "Meter charge shown: ₹50,000.",
        "Advance maintenance shown: ₹20,000 for 2 BHK and ₹30,000 for 3 BHK, described as 1 year.",
        "PLC figures shown include main-road-facing ₹3,00,000, plus floor PLC entries for upper-ground, first and second floors.",
        "GST shown as 5%. The artwork says prices may change.",
      ],
      disclaimer:
        "These figures are not verified current pricing. Confirm current rates, additional charges and availability with PropPact before relying on them.",
    },
    developer: "Hoon Brothers Infratech Pvt. Ltd.",
    marketer: "Wastu Home's",
    mapUrl: mapsSearch("Sector 10, Greater Noida West, Uttar Pradesh"),
    mapQuery: "Sector 10, Greater Noida West, Uttar Pradesh",
    localityMapLabels: {
      view: "View on Google Maps",
      directions: "Get Directions",
    },
    availabilityLabel: "Availability must be confirmed with PropPact",
    featured: true,
    enquiryEnabled: true,
  },
];

export function getPropertyMapLinks(project: Project) {
  if (project.verifiedCoordinates) {
    const query = `${project.verifiedCoordinates.latitude},${project.verifiedCoordinates.longitude}`;
    return {
      verifiedPin: true,
      note: null,
      viewLabel: "View on Google Maps",
      directionsLabel: "Get Directions",
      viewHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`,
      directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`,
    };
  }

  const destination = project.mapQuery ?? project.address;
  return {
    verifiedPin: false,
    note: "A verified map pin is not available for this project. These links search the locality stated in the supplied material.",
    viewLabel: project.localityMapLabels?.view ?? "Search the stated locality on Google Maps",
    directionsLabel:
      project.localityMapLabels?.directions ?? "Get directions to the stated locality",
    viewHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`,
    directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`,
  };
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return PROJECTS.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return PROJECTS.filter((project) => project.category === category);
}

export function getSimilarProjects(slug: string, limit = 3) {
  return PROJECTS.filter((project) => project.slug !== slug).slice(0, limit);
}

export type ProjectSearch = {
  type?: string;
  budget?: string;
  locality?: string;
};

export function filterProjects(search: ProjectSearch) {
  return PROJECTS.filter((project) => {
    if (search.type === "plot" || search.type === "commercial") return false;
    if (search.type === "residential" && project.category !== "residential") {
      return false;
    }
    if (search.type === "villa" && project.category !== "villa") return false;
    if (
      search.locality &&
      search.locality !== "greater-noida-west" &&
      !project.localitySlugs.includes(search.locality)
    ) {
      return false;
    }
    if (!matchesBudget(project, search.budget)) return false;
    return true;
  });
}

function matchesBudget(project: Project, budget?: string) {
  if (!budget) return true;
  if (project.indicativeMinLakhs == null) return true;
  const min = project.indicativeMinLakhs;
  if (budget === "0-50") return min < 50;
  if (budget === "50-100") return min >= 50 && min < 100;
  if (budget === "100-200") return min >= 100 && min < 200;
  if (budget === "200+") return min >= 200;
  return true;
}
