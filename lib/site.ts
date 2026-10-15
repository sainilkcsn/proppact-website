export function whatsappHref(message: string) {
  return `https://wa.me/919560959762?text=${encodeURIComponent(message)}`;
}

export function projectWhatsappMessage(projectName: string) {
  return `Hello PropPact, I would like information about ${projectName} in Greater Noida West.`;
}

export const SITE = {
  name: "PropPact",
  city: "Greater Noida West",
  tagline: "Property discovery and advisory in Greater Noida West",
  description:
    "PropPact helps buyers explore residential apartments, duplex villas and selected residential projects in Greater Noida West. Current pricing and availability are confirmed with the team.",
  phone: "+91 95609 59762",
  phoneE164: "+919560959762",
  phoneHref: "tel:+919560959762",
  email: "support@proppact.co.in",
  emailHref: "mailto:support@proppact.co.in",
  address:
    "Yuvraj Villa, Vaidpura, Sector 10, Greater Noida West, Uttar Pradesh",
  mapsUrl: "https://maps.google.com/?q=28.580778,77.491127",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=28.580778,77.491127&z=15&output=embed",
  latitude: 28.580778,
  longitude: 77.491127,
  whatsappUrl:
    "https://wa.me/919560959762?text=Hello%20PropPact%2C%20I%20would%20like%20information%20about%20properties%20in%20Greater%20Noida%20West.",
  url: "https://www.proppact.co.in",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Residential", href: "/residential-properties" },
  { label: "Villas", href: "/villas-for-sale" },
  { label: "Plots & Land", href: "/plots-for-sale" },
  { label: "Commercial", href: "/commercial-properties" },
  { label: "Sell Your Property", href: "/sell-your-property" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
];

export const BUY_PROPERTY_LINKS: NavItem[] = [
  { label: "Featured Projects", href: "/projects" },
  { label: "Residential Properties", href: "/residential-properties" },
  { label: "Villas for Sale", href: "/villas-for-sale" },
  { label: "Plots & Land", href: "/plots-for-sale" },
  { label: "Commercial Properties", href: "/commercial-properties" },
];

export const SERVICES_NAV_LINKS: NavItem[] = [
  {
    label: "Property Search & Advisory",
    href: "/services#property-search-advisory",
  },
  {
    label: "Legal & Title Verification",
    href: "/services#legal-title-verification",
  },
  { label: "Home Loan Assistance", href: "/services#home-loan-assistance" },
  { label: "Valuation Services", href: "/services#valuation-services" },
  {
    label: "Registration Support",
    href: "/services#registration-documentation-support",
  },
];

export const INSIGHTS_LINKS: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Sell Your Property", href: "/sell-your-property" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact-us" },
];

export const PROPERTY_CATEGORIES: NavItem[] = [
  { label: "Residential Properties", href: "/residential-properties" },
  { label: "Villas for Sale", href: "/villas-for-sale" },
  { label: "Plots & Land", href: "/plots-for-sale" },
  { label: "Commercial Properties", href: "/commercial-properties" },
];

export const FOOTER_SERVICES: NavItem[] = [
  {
    label: "Property Search & Advisory",
    href: "/services#property-search-advisory",
  },
  {
    label: "Legal & Title Verification",
    href: "/services#legal-title-verification",
  },
  { label: "Home Loan Assistance", href: "/services#home-loan-assistance" },
  { label: "Valuation Services", href: "/services#valuation-services" },
  {
    label: "Registration Support",
    href: "/services#registration-documentation-support",
  },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

/** Replace `#` with verified profile URLs when available. */
export const SOCIAL_LINKS: NavItem[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: "shield" | "map" | "user" | "file";
};

export const WHY_CHOOSE: WhyChooseItem[] = [
  {
    title: "Local Project Information",
    description:
      "Project details drawn from supplied material, with current price and availability confirmed by the team",
    icon: "shield",
  },
  {
    title: "Local Expertise",
    description: `Local market expertise across ${SITE.city} and surrounding areas`,
    icon: "map",
  },
  {
    title: "Dedicated Manager",
    description:
      "Dedicated relationship manager for every buyer and seller",
    icon: "user",
  },
  {
    title: "Loan & Legal Support",
    description:
      "Support with home loans, legal paperwork, and property registration",
    icon: "file",
  },
];

export type CategoryCard = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

export const EXPLORE_CATEGORIES: CategoryCard[] = [
  {
    title: "Residential Properties",
    href: "/residential-properties",
    image: "/images/residential-hero.jpg",
    alt: `Residential flats and apartments for sale in ${SITE.city}`,
  },
  {
    title: "Villas for Sale",
    href: "/villas-for-sale",
    image: "/images/villas-hero.jpg",
    alt: `Premium villas and independent houses in ${SITE.city}`,
  },
  {
    title: "Plots & Land",
    href: "/plots-for-sale",
    image: "/images/plots-hero.jpg",
    alt: `Residential and investment plots for sale in ${SITE.city}`,
  },
  {
    title: "Commercial Properties",
    href: "/commercial-properties",
    image: "/images/commercial-hero.jpg",
    alt: `Office, retail and commercial spaces in ${SITE.city}`,
  },
];

export type PropertyType = "residential" | "villa" | "plot" | "commercial";

export type Property = {
  id: string;
  title: string;
  type: PropertyType;
  locality: string;
  price: string;
  priceValue: number;
  bedrooms?: number;
  area: string;
  image: string;
  status: "ready" | "under-construction" | "resale";
  featured?: boolean;
};

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Spacious 3 BHK Apartment",
    type: "residential",
    locality: "Sector 62",
    price: "₹1.25 Cr",
    priceValue: 12500000,
    bedrooms: 3,
    area: "1,650 sq.ft",
    image: "/images/residential-hero.jpg",
    status: "ready",
    featured: true,
  },
  {
    id: "2",
    title: "Premium 2 BHK Flat",
    type: "residential",
    locality: "Sector 137",
    price: "₹85 Lakh",
    priceValue: 8500000,
    bedrooms: 2,
    area: "1,120 sq.ft",
    image: "/images/residential-hero.jpg",
    status: "ready",
  },
  {
    id: "3",
    title: "Luxury Villa in Gated Community",
    type: "villa",
    locality: "Greater Noida West",
    price: "₹3.40 Cr",
    priceValue: 34000000,
    bedrooms: 4,
    area: "3,200 sq.ft",
    image: "/images/villas-hero.jpg",
    status: "ready",
    featured: true,
  },
  {
    id: "4",
    title: "Independent Duplex Villa",
    type: "villa",
    locality: "Sector 150",
    price: "₹2.10 Cr",
    priceValue: 21000000,
    bedrooms: 4,
    area: "2,800 sq.ft",
    image: "/images/villas-hero.jpg",
    status: "under-construction",
  },
  {
    id: "5",
    title: "Residential Plot – Approved Layout",
    type: "plot",
    locality: "Yamuna Expressway",
    price: "₹65 Lakh",
    priceValue: 6500000,
    area: "200 sq.yd",
    image: "/images/plots-hero.jpg",
    status: "ready",
    featured: true,
  },
  {
    id: "6",
    title: "Investment Plot with Clear Title",
    type: "plot",
    locality: "Jewar",
    price: "₹42 Lakh",
    priceValue: 4200000,
    area: "150 sq.yd",
    image: "/images/plots-hero.jpg",
    status: "ready",
  },
  {
    id: "7",
    title: "Retail Shop in High-Footfall Zone",
    type: "commercial",
    locality: "Sector 18",
    price: "₹1.80 Cr",
    priceValue: 18000000,
    area: "850 sq.ft",
    image: "/images/commercial-hero.jpg",
    status: "resale",
    featured: true,
  },
  {
    id: "8",
    title: "Ready Office Space",
    type: "commercial",
    locality: "Sector 62",
    price: "₹95 Lakh",
    priceValue: 9500000,
    area: "1,050 sq.ft",
    image: "/images/commercial-hero.jpg",
    status: "ready",
  },
];

export const PROPERTY_TYPE_OPTIONS = [
  { value: "", label: "Property Type" },
  { value: "residential", label: "Residential" },
  { value: "villa", label: "Villa" },
  { value: "plot", label: "Plots & Land" },
  { value: "commercial", label: "Commercial" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "", label: "Budget" },
  { value: "0-50", label: "Under ₹50 Lakh" },
  { value: "50-100", label: "₹50 Lakh – ₹1 Cr" },
  { value: "100-200", label: "₹1 Cr – ₹2 Cr" },
  { value: "200+", label: "Above ₹2 Cr" },
] as const;

export const LOCALITY_OPTIONS = [
  { value: "", label: "Locality" },
  { value: "techzone-7", label: "Techzone-7" },
  { value: "sector-10", label: "Sector 10" },
  { value: "vaidpura", label: "Vaidpura" },
  { value: "greater-noida-west", label: "Greater Noida West" },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "Are PropPact's listings verified?",
    answer:
      "Published project pages use details from material supplied to PropPact. They are not a live inventory feed. Ask the team to confirm current price, charges and availability before you rely on a figure.",
  },
  {
    question: "Does PropPact charge brokerage from buyers?",
    answer:
      "[Answer based on your actual commission model.]",
  },
  {
    question: "Can PropPact help with home loans?",
    answer:
      "Yes, our team assists with loan guidance and coordination with lending partners.",
  },
  {
    question: "Do you handle commercial property leasing as well as sales?",
    answer:
      "Yes, we assist both property owners and businesses with commercial sale and lease transactions.",
  },
  {
    question: "How do I list my property for sale with PropPact?",
    answer:
      'Visit our "Sell Your Property" page and submit your property details for a free valuation.',
  },
  {
    question: `Which areas in ${SITE.city} does PropPact cover?`,
    answer:
      "The projects currently published on this website are in Techzone-7, Sector 10 and Vaidpura, Greater Noida West.",
  },
];

export type ServiceItem = {
  title: string;
  description: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Property Search & Advisory",
    description:
      "tailored recommendations based on your budget and goals",
  },
  {
    title: "Legal & Title Verification",
    description: "due diligence before you commit",
  },
  {
    title: "Home Loan Assistance",
    description: "guidance and lender coordination",
  },
  {
    title: "Valuation Services",
    description: "accurate, market-based property pricing",
  },
  {
    title: "Registration & Documentation Support",
    description: "handling the paperwork end-to-end",
  },
  {
    title: "Rental & Leasing Assistance",
    description: "for owners and commercial tenants",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "yuvraj-villa-greater-noida-west-guide",
    title:
      "Yuvraj Villa Greater Noida West: A Buyer's Guide to 3 BHK Duplex Villas in Vaidpura",
    excerpt:
      "Looking for a 3 BHK duplex villa in Greater Noida West? Explore Yuvraj Villa in Vaidpura, understand the features and costs to evaluate, and learn what to check before booking a site visit.",
    image: "/images/projects/yuvraj-villa/cover.jpg",
  },
  {
    slug: "how-to-choose-right-property-to-buy",
    title:
      "How to Choose the Right Property to Buy: Flat, Villa, Plot or Commercial in Greater Noida West",
    excerpt:
      "Compare flats, villas, plots and commercial spaces in Greater Noida West before you decide what to buy.",
    image: "/images/blog-property.jpg",
  },
  {
    slug: "documents-checklist-buying-flat",
    title: `Documents Checklist Before Buying a Flat in ${SITE.city}`,
    excerpt:
      "A practical checklist of documents to review before you commit to a residential purchase.",
    image: "/images/blog-property.jpg",
  },
  {
    slug: "villa-vs-apartment-investment",
    title: `Villa vs Apartment: Which Is the Better Investment in ${SITE.city}?`,
    excerpt:
      "Compare lifestyle, maintenance, and long-term appreciation for villas and apartments.",
    image: "/images/villas-hero.jpg",
  },
  {
    slug: "plot-buying-guide-land-title",
    title: `Plot Buying Guide: How to Verify Land Title in ${SITE.city}`,
    excerpt:
      "Key due-diligence steps to protect your land investment from day one.",
    image: "/images/plots-hero.jpg",
  },
  {
    slug: "real-estate-price-trends",
    title: `${SITE.city} Real Estate Price Trends [Year]`,
    excerpt:
      "Area-wise market movement and what it means for buyers and investors.",
    image: "/images/hero-home.jpg",
  },
  {
    slug: "commercial-property-first-time-buyers",
    title:
      "Commercial Property Investment: What First-Time Buyers Should Know",
    excerpt:
      "Yield, approvals, and location factors every first-time commercial buyer should evaluate.",
    image: "/images/commercial-hero.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "[Client Name]",
    locality: "[Locality]",
    propertyType: "Residential",
    quote:
      "[Insert genuine client testimonial here — ideally with the client's name, locality, and property type purchased/sold.]",
  },
  {
    name: "[Client Name]",
    locality: "[Locality]",
    propertyType: "Villa",
    quote:
      "[Insert genuine client testimonial here — ideally with the client's name, locality, and property type purchased/sold.]",
  },
  {
    name: "[Client Name]",
    locality: "[Locality]",
    propertyType: "Plot",
    quote:
      "[Insert genuine client testimonial here — ideally with the client's name, locality, and property type purchased/sold.]",
  },
  {
    name: "[Client Name]",
    locality: "[Locality]",
    propertyType: "Commercial",
    quote:
      "[Insert genuine client testimonial here — ideally with the client's name, locality, and property type purchased/sold.]",
  },
] as const;
