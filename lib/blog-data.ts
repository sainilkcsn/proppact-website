import { SITE } from "@/lib/site";

export type BlogCategory =
  | "Buying Guides"
  | "Market Updates"
  | "Legal & Documentation"
  | "Investment";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  dateLabel: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export const BLOG_CATEGORIES: Array<BlogCategory | "All"> = [
  "All",
  "Buying Guides",
  "Market Updates",
  "Legal & Documentation",
  "Investment",
];

/** Editorial placeholders for PropPact resources — expand with full articles over time. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "documents-checklist-buying-flat",
    title: `Documents Checklist Before Buying a Flat in ${SITE.city}`,
    excerpt:
      "A practical checklist of documents to review before you commit to a residential purchase.",
    category: "Legal & Documentation",
    date: "2026-01-15",
    dateLabel: "15 Jan 2026",
    image: "/images/blog-property.jpg",
    featured: true,
    content: [
      `Buying a flat in ${SITE.city} is a major decision. Before you pay a token or sign an agreement, review ownership papers, society or builder documents, and any applicable approvals carefully.`,
      "Ask your advisor to walk through title documents, identity proofs of the seller, payment receipts, and possession-related paperwork. Where RERA registration applies, confirm project details against public records.",
      "PropPact’s legal and title verification support is designed to help buyers spot gaps early — before they become costly surprises at registration.",
    ],
  },
  {
    slug: "villa-vs-apartment-investment",
    title: `Villa vs Apartment: Which Is the Better Investment in ${SITE.city}?`,
    excerpt:
      "Compare lifestyle, maintenance, and long-term appreciation for villas and apartments.",
    category: "Investment",
    date: "2026-01-08",
    dateLabel: "8 Jan 2026",
    image: "/images/villas-hero.jpg",
    content: [
      `Choosing between a villa and an apartment in ${SITE.city} depends on budget, lifestyle preferences, and how long you plan to hold the asset.`,
      "Apartments often offer lower entry tickets and shared amenities. Villas typically provide more privacy and land component — with different maintenance and liquidity profiles.",
      "Work with PropPact to compare total cost of ownership, locality demand, and resale or rental context for your goals.",
    ],
  },
  {
    slug: "plot-buying-guide-land-title",
    title: `Plot Buying Guide: How to Verify Land Title in ${SITE.city}`,
    excerpt:
      "Key due-diligence steps to protect your land investment from day one.",
    category: "Buying Guides",
    date: "2025-12-20",
    dateLabel: "20 Dec 2025",
    image: "/images/plots-hero.jpg",
    content: [
      "Land purchases carry unique legal risks if title, layout approvals, and boundaries are not verified carefully.",
      `In ${SITE.city}, buyers should confirm ownership chain, encumbrance status, and whether the plot sits in an approved layout or gated community framework.`,
      "PropPact’s due-diligence process focuses on documentation clarity before you commit capital.",
    ],
  },
  {
    slug: "real-estate-price-trends",
    title: `${SITE.city} Real Estate Price Trends [Year]`,
    excerpt:
      "Area-wise market movement and what it means for buyers and investors.",
    category: "Market Updates",
    date: "2025-12-05",
    dateLabel: "5 Dec 2025",
    image: "/images/hero-home.jpg",
    featured: true,
    content: [
      `Local price trends in ${SITE.city} vary by corridor, inventory type, and infrastructure progress. Treat broad headlines as context — not a substitute for locality-level comparison.`,
      "When evaluating a purchase, look at comparable transactions, possession timelines, and total cost including taxes and registration.",
      "Ask PropPact for locality-specific guidance aligned to your budget and holding period.",
    ],
  },
  {
    slug: "commercial-property-first-time-buyers",
    title:
      "Commercial Property Investment: What First-Time Buyers Should Know",
    excerpt:
      "Yield, approvals, and location factors every first-time commercial buyer should evaluate.",
    category: "Investment",
    date: "2025-11-18",
    dateLabel: "18 Nov 2025",
    image: "/images/commercial-hero.jpg",
    content: [
      "Commercial property can support long-term portfolio goals, but first-time buyers should evaluate use permissions, tenantability, and operating costs carefully.",
      `In ${SITE.city}, footfall, access, and commercial-use approvals matter as much as headline price.`,
      "PropPact helps investors compare retail, office, and other commercial formats with practical due diligence.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  return BLOG_POSTS.filter(
    (post) =>
      post.slug !== slug &&
      (post.category === current.category || post.featured)
  ).slice(0, limit);
}
