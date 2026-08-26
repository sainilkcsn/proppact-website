import { SITE } from "@/lib/site";
import type { PropertyCategory } from "@/lib/property-data";

export type FilterFieldKey =
  | "propertyType"
  | "locality"
  | "budget"
  | "bhk"
  | "bedrooms"
  | "plotArea"
  | "plotSize"
  | "developmentType"
  | "area";

export type FilterField = {
  key: FilterFieldKey;
  label: string;
  options: { value: string; label: string }[];
};

export type CategoryConfig = {
  id: PropertyCategory;
  slug: string;
  title: string;
  h1: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  ctaLabel: string;
  ctaHref: string;
  filters: FilterField[];
  seo: {
    title: string;
    description: string;
  };
};

const budgetOptions = [
  { value: "", label: "Any Budget" },
  { value: "0-50", label: "Under ₹50 Lakh" },
  { value: "50-100", label: "₹50 Lakh – ₹1 Cr" },
  { value: "100-200", label: "₹1 Cr – ₹2 Cr" },
  { value: "200+", label: "Above ₹2 Cr" },
];

const localityOptions = [
  { value: "", label: "Any Locality" },
  { value: "Sector 62", label: "Sector 62" },
  { value: "Sector 75", label: "Sector 75" },
  { value: "Sector 137", label: "Sector 137" },
  { value: "Sector 150", label: "Sector 150" },
  { value: "Sector 18", label: "Sector 18" },
  { value: "Greater Noida West", label: "Greater Noida West" },
  { value: "Yamuna Expressway", label: "Yamuna Expressway" },
  { value: "Jewar", label: "Jewar" },
];

export const PROPERTY_CATEGORY_CONFIGS: Record<PropertyCategory, CategoryConfig> =
  {
    residential: {
      id: "residential",
      slug: "residential-properties",
      title: "Residential Properties",
      h1: `Residential Flats & Apartments for Sale in ${SITE.city}`,
      description: `Looking for a new home in ${SITE.city}? PropPact lists verified residential flats and apartments across budgets and configurations — from compact 1 BHK units for first-time buyers to spacious 3 and 4 BHK apartments for growing families.`,
      heroImage: "/images/residential-hero.jpg",
      heroAlt: `Residential flats and apartments for sale in ${SITE.city}`,
      ctaLabel: "Schedule a Site Visit",
      ctaHref: "/contact-us",
      filters: [
        {
          key: "propertyType",
          label: "Property Type",
          options: [
            { value: "", label: "All Types" },
            { value: "Apartment", label: "Apartment" },
            { value: "Penthouse", label: "Penthouse" },
          ],
        },
        {
          key: "locality",
          label: "Locality",
          options: localityOptions,
        },
        {
          key: "budget",
          label: "Budget",
          options: budgetOptions,
        },
        {
          key: "bhk",
          label: "BHK",
          options: [
            { value: "", label: "Any BHK" },
            { value: "1", label: "1 BHK" },
            { value: "2", label: "2 BHK" },
            { value: "3", label: "3 BHK" },
            { value: "4", label: "4 BHK+" },
          ],
        },
      ],
      seo: {
        title: `Flats & Apartments for Sale in ${SITE.city}`,
        description: `Browse 1, 2, 3 & 4 BHK flats and apartments for sale in ${SITE.city}. Verified listings, ready-to-move & under-construction options with PropPact.`,
      },
    },
    villa: {
      id: "villa",
      slug: "villas-for-sale",
      title: "Villas for Sale",
      h1: `Villas & Independent Houses for Sale in ${SITE.city}`,
      description: `For buyers seeking more space, privacy, and a premium lifestyle, PropPact curates a selection of villas and independent houses across ${SITE.city}'s most sought-after neighborhoods and gated communities.`,
      heroImage: "/images/villas-hero.jpg",
      heroAlt: `Villas and independent houses for sale in ${SITE.city}`,
      ctaLabel: "Book a Site Visit",
      ctaHref: "/contact-us",
      filters: [
        {
          key: "locality",
          label: "Locality",
          options: localityOptions,
        },
        {
          key: "budget",
          label: "Budget",
          options: budgetOptions,
        },
        {
          key: "bedrooms",
          label: "Bedrooms",
          options: [
            { value: "", label: "Any" },
            { value: "3", label: "3+" },
            { value: "4", label: "4+" },
            { value: "5", label: "5+" },
          ],
        },
        {
          key: "plotArea",
          label: "Plot Area",
          options: [
            { value: "", label: "Any" },
            { value: "0-200", label: "Under 200 sq.yd" },
            { value: "200-300", label: "200 – 300 sq.yd" },
            { value: "300+", label: "Above 300 sq.yd" },
          ],
        },
      ],
      seo: {
        title: `Villas for Sale in ${SITE.city} | Independent Houses`,
        description: `Explore premium villas and independent houses for sale in ${SITE.city}. Gated communities, private plots & luxury homes — verified listings with PropPact.`,
      },
    },
    plot: {
      id: "plot",
      slug: "plots-for-sale",
      title: "Plots & Land",
      h1: `Plots & Land for Sale in ${SITE.city}`,
      description: `Land remains one of the most reliable long-term investments. PropPact offers verified residential and investment plots across ${SITE.city}, with clear titles and complete documentation, so you can build your dream home or hold for appreciation with confidence.`,
      heroImage: "/images/plots-hero.jpg",
      heroAlt: `Residential and investment plots for sale in ${SITE.city}`,
      ctaLabel: "Request a Legal Verification Report",
      ctaHref: "/contact-us",
      filters: [
        {
          key: "locality",
          label: "Locality",
          options: localityOptions,
        },
        {
          key: "budget",
          label: "Budget",
          options: budgetOptions,
        },
        {
          key: "plotSize",
          label: "Plot Size",
          options: [
            { value: "", label: "Any Size" },
            { value: "0-150", label: "Under 150 sq.yd" },
            { value: "150-250", label: "150 – 250 sq.yd" },
            { value: "250+", label: "Above 250 sq.yd" },
          ],
        },
        {
          key: "developmentType",
          label: "Development Type",
          options: [
            { value: "", label: "All Types" },
            { value: "Approved Layout", label: "Approved Layout" },
            { value: "Gated Community", label: "Gated Community" },
            {
              value: "Investment / Agricultural",
              label: "Investment / Agricultural",
            },
            { value: "Investment Parcel", label: "Investment Parcel" },
          ],
        },
      ],
      seo: {
        title: `Plots & Land for Sale in ${SITE.city} | Residential & Investment Plots`,
        description: `Buy verified residential and investment plots in ${SITE.city}. Clear-title land parcels for construction or long-term investment with PropPact.`,
      },
    },
    commercial: {
      id: "commercial",
      slug: "commercial-properties",
      title: "Commercial Properties",
      h1: `Commercial Property for Sale in ${SITE.city}`,
      description: `Expanding your business or building a commercial property portfolio? PropPact lists office spaces, retail shops, showrooms, and commercial buildings across ${SITE.city}'s key business districts and high-footfall areas.`,
      heroImage: "/images/commercial-hero.jpg",
      heroAlt: `Commercial office and retail spaces for sale in ${SITE.city}`,
      ctaLabel: "Talk to Our Commercial Property Expert",
      ctaHref: "/contact-us",
      filters: [
        {
          key: "locality",
          label: "Locality",
          options: localityOptions,
        },
        {
          key: "budget",
          label: "Budget",
          options: budgetOptions,
        },
        {
          key: "propertyType",
          label: "Property Type",
          options: [
            { value: "", label: "All Types" },
            { value: "Office Space", label: "Office Space" },
            { value: "Retail Shop", label: "Retail Shop" },
            { value: "Showroom", label: "Showroom" },
            { value: "Warehouse", label: "Warehouse" },
            {
              value: "Commercial Building Floor",
              label: "Commercial Building Floor",
            },
          ],
        },
        {
          key: "area",
          label: "Area",
          options: [
            { value: "", label: "Any Area" },
            { value: "0-1000", label: "Under 1,000 sq.ft" },
            { value: "1000-2000", label: "1,000 – 2,000 sq.ft" },
            { value: "2000+", label: "Above 2,000 sq.ft" },
          ],
        },
      ],
      seo: {
        title: `Commercial Property for Sale in ${SITE.city} | Office & Retail Spaces`,
        description: `Find office spaces, retail shops & commercial buildings for sale in ${SITE.city}. PropPact connects businesses and investors with verified commercial property.`,
      },
    },
  };

export function getCategoryBySlug(slug: string): CategoryConfig | undefined {
  return Object.values(PROPERTY_CATEGORY_CONFIGS).find(
    (category) => category.slug === slug
  );
}
