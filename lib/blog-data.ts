import { SITE } from "@/lib/site";

export type BlogCategory =
  | "Buying Guides"
  | "Market Updates"
  | "Legal & Documentation"
  | "Investment";

export type BlogRun = {
  text: string;
  href?: string;
  strong?: boolean;
};

export type BlogBlock =
  | { type: "p"; runs: BlogRun[]; muted?: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: BlogRun[][] }
  | { type: "image"; src: string; alt: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
  content: string[];
  blocks?: BlogBlock[];
};

export const BLOG_CATEGORIES: Array<BlogCategory | "All"> = [
  "All",
  "Buying Guides",
  "Market Updates",
  "Legal & Documentation",
  "Investment",
];

/** Editorial placeholders for PropPact resources — expand with full articles over time. */
const r = (text: string, href?: string, strong?: boolean): BlogRun => ({
  text,
  href,
  strong,
});

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-right-property-to-buy",
    title:
      "How to Choose the Right Property to Buy: Flat, Villa, Plot or Commercial in Greater Noida West",
    excerpt:
      "Compare flats, villas, plots and commercial spaces in Greater Noida West before you decide what to buy.",
    category: "Buying Guides",
    date: "2026-10-11",
    dateLabel: "11 Oct 2026",
    image: "/images/blog-property.jpg",
    imageAlt:
      "Guide to choosing a flat, villa, plot or commercial property in Greater Noida West",
    seoTitle: "Buy Property in Greater Noida West | PropPact",
    seoDescription:
      "Planning to buy property in India? Compare flats, villas, plots and commercial spaces in Greater Noida West with PropPact’s practical buyer guide.",
    content: [],
    blocks: [
      {
        type: "p",
        runs: [
          r("Buying property is one of the biggest financial decisions most families make. Whether you want to "),
          r("buy property in India", undefined, true),
          r(" for your own home or as a long-term investment, choosing between a flat, a villa, a plot or a commercial space can feel overwhelming."),
        ],
      },
      {
        type: "p",
        runs: [
          r("In a developing real estate market such as "),
          r("Greater Noida West (Noida Extension)", undefined, true),
          r(", buyers have several property options to consider. Each type comes with different costs, benefits, responsibilities and potential risks."),
        ],
      },
      {
        type: "p",
        runs: [
          r("At "),
          r("PropPact", undefined, true),
          r(", we help buyers explore property options and make informed decisions based on their budget, lifestyle and investment goals. Here is a practical guide to choosing the right property for your needs."),
        ],
      },
      { type: "h2", text: "1. Start With Your Goal: Living or Investing?" },
      {
        type: "p",
        runs: [r("Before browsing property listings, be clear about why you are buying.")],
      },
      {
        type: "ul",
        items: [
          [r("For self-use: ", undefined, true), r("Focus on comfort, location, connectivity and amenities that suit your family.")],
          [r("For investment: ", undefined, true), r("Evaluate the potential for appreciation, rental income, resale demand and the time you can hold the property.")],
          [r("For business use: ", undefined, true), r("Consider visibility, customer footfall, accessibility and the suitability of the location for your business.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("Your goal helps narrow down the options. A young family may prefer "),
          r("flats for sale", "/residential-properties"),
          r(" in a well-connected residential society, while someone planning to build a home in the future may consider "),
          r("residential plots for sale", "/plots-for-sale"),
          r("."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Similarly, an investor looking for rental income may explore apartments or commercial property, depending on the budget, demand and expected expenses."),
        ],
      },
      { type: "h2", text: "2. Flats: Convenience and Community Living" },
      {
        type: "image",
        src: "/images/residential-hero.jpg",
        alt: "Flats for sale in Greater Noida West",
      },
      {
        type: "p",
        runs: [
          r("Flats are a popular choice for first-time homebuyers and families who prefer organised residential communities. Depending on the project, apartments may offer gated security, parking, power backup, lifts and shared amenities such as parks, gyms or community spaces."),
        ],
      },
      {
        type: "p",
        runs: [
          r("In Greater Noida West, buyers can compare flats based on their location, carpet area, connectivity, construction status and the facilities offered by the society. Published apartment projects on this site include "),
          r("Vista Homez", "/projects/vista-homez"),
          r(" and "),
          r("Madhav Kunj", "/projects/madhav-kunj"),
          r(". Confirm current price and availability with the team before you decide."),
        ],
      },
      { type: "h3", text: "Best for" },
      {
        type: "p",
        runs: [
          r("Working professionals, first-time buyers, small families and people who prefer community living with shared amenities."),
        ],
      },
      { type: "h3", text: "What to check before buying" },
      {
        type: "ul",
        items: [
          [r("Builder reputation and project completion history.")],
          [r("RERA registration and applicable approvals.")],
          [r("Carpet area, maintenance charges and parking arrangements.")],
          [r("Construction quality and possession timelines.")],
          [r("Connectivity to workplaces, schools, hospitals and public transport.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("Compare the total cost of ownership rather than choosing a flat solely because its advertised price appears affordable."),
        ],
      },
      { type: "h2", text: "3. Villas: Space, Privacy and Independence" },
      {
        type: "image",
        src: "/images/villas-hero.jpg",
        alt: "Villas for sale in Greater Noida West",
      },
      {
        type: "p",
        runs: [
          r("If you value independence and extra space, a villa may be the right choice. Villas generally offer greater privacy and may include multiple floors, terraces, balconies, parking and private outdoor space."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Villas for sale", "/villas-for-sale", true),
          r(" in planned communities can appeal to families looking for a more independent lifestyle while retaining access to neighbourhood facilities. "),
          r("Yuvraj Villa", "/projects/yuvraj-villa"),
          r(" is one published duplex villa project in Vaidpura, Sector 10. Treat its supplied details as project-specific, and confirm what is currently available."),
        ],
      },
      { type: "h3", text: "Best for" },
      {
        type: "p",
        runs: [r("Larger families, buyers who value privacy and people looking for more living space.")],
      },
      { type: "h3", text: "What to check before buying" },
      {
        type: "ul",
        items: [
          [r("Clear title and ownership documents.")],
          [r("Approved building plans and applicable permissions.")],
          [r("Quality of construction and specifications.")],
          [r("Maintenance responsibilities and community charges.")],
          [r("Water supply, drainage, electricity and road access.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("Villas can require a higher initial investment and greater maintenance expenditure than some apartments. Compare the purchase price and ongoing costs before making a decision."),
        ],
      },
      { type: "h2", text: "4. Plots: Flexibility and Long-Term Potential" },
      {
        type: "image",
        src: "/images/plots-hero.jpg",
        alt: "Residential plots in Noida Extension",
      },
      {
        type: "p",
        runs: [
          r("Buying a plot can offer flexibility if you intend to construct a home according to your own preferences or hold land for the long term."),
        ],
      },
      {
        type: "p",
        runs: [
          r("However, land purchases require careful due diligence. Not every plot is suitable for residential construction, and the location of a plot alone does not guarantee future appreciation."),
        ],
      },
      { type: "h3", text: "Best for" },
      {
        type: "p",
        runs: [
          r("Buyers planning to build their own homes and investors who understand the risks and time horizon associated with land ownership."),
        ],
      },
      { type: "h3", text: "What to check before buying" },
      {
        type: "ul",
        items: [
          [r("Clear title and ownership history.")],
          [r("Approved layout and permitted land use.")],
          [r("Applicable authority approvals and documentation.")],
          [r("Legal road access and availability of essential utilities.")],
          [r("Existing encumbrances, disputes or restrictions on construction.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("If you are considering "),
          r("residential plots for sale", "/plots-for-sale"),
          r(" in Greater Noida West or nearby areas, verify the documents with the relevant development authority and consult an independent property lawyer before paying a token amount."),
        ],
      },
      { type: "h2", text: "5. Commercial Property: Rental Income and Business Opportunities" },
      {
        type: "image",
        src: "/images/commercial-hero.jpg",
        alt: "Commercial property for sale in Greater Noida West",
      },
      {
        type: "p",
        runs: [
          r("Commercial properties include shops, showrooms, offices and other spaces intended for business use. They may suit entrepreneurs who want to own their business premises or investors looking for rental income."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Commercial property for sale", "/commercial-properties", true),
          r(" should be evaluated differently from residential property. Its performance may depend heavily on tenant demand, visibility, footfall, connectivity and the type of businesses permitted at the location."),
        ],
      },
      { type: "h3", text: "Best for" },
      {
        type: "p",
        runs: [r("Business owners, entrepreneurs and investors seeking commercial use or rental income.")],
      },
      { type: "h3", text: "What to check before buying" },
      {
        type: "ul",
        items: [
          [r("Location, accessibility and visibility.")],
          [r("Actual footfall and demand from prospective tenants.")],
          [r("Permitted commercial use and applicable approvals.")],
          [r("Maintenance costs, common-area charges and other recurring expenses.")],
          [r("Expected rental income, vacancy risk and resale demand.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("Commercial properties may offer higher rental yields in some circumstances, but returns are not guaranteed. Assess realistic rental assumptions, vacancy periods and operating expenses before investing."),
        ],
      },
      { type: "h2", text: "6. Location Matters: Why Consider Greater Noida West?" },
      {
        type: "p",
        runs: [
          r("Whether you choose a flat, villa, plot or commercial unit, location plays an important role in your daily life and the property's future demand."),
        ],
      },
      {
        type: "p",
        runs: [
          r("When comparing properties in "),
          r("Greater Noida West and Noida Extension", undefined, true),
          r(", consider the following factors:"),
        ],
      },
      {
        type: "ul",
        items: [
          [r("Connectivity: ", undefined, true), r("Road access, public transport and practical commuting times.")],
          [r("Education and healthcare: ", undefined, true), r("Nearby schools, colleges, hospitals and clinics.")],
          [r("Daily conveniences: ", undefined, true), r("Markets, grocery stores, parks and other essential services.")],
          [r("Infrastructure development: ", undefined, true), r("Existing infrastructure and officially announced development plans.")],
          [r("Neighbourhood quality: ", undefined, true), r("Road conditions, cleanliness, security and overall surroundings.")],
          [r("Future demand: ", undefined, true), r("Employment centres, population growth and the availability of comparable properties.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("Do not base your purchase decision solely on promised future infrastructure or projected appreciation. Visit the location, assess current conditions and independently verify any development claims."),
        ],
      },
      { type: "h2", text: "7. Legal Checks You Should Never Skip" },
      {
        type: "p",
        runs: [
          r("A property that looks like a good deal can become a costly mistake without proper due diligence. Before committing to a purchase, verify the documents relevant to that property."),
        ],
      },
      {
        type: "p",
        runs: [r("Important checks include:")],
      },
      {
        type: "ul",
        items: [
          [r("Title and ownership documents: ", undefined, true), r("Establish the seller's legal ownership and ability to transfer the property.")],
          [r("RERA registration: ", undefined, true), r("Check registration and project disclosures where applicable, particularly for qualifying projects.")],
          [r("Encumbrances and disputes: ", undefined, true), r("Investigate outstanding loans, charges, litigation or competing ownership claims.")],
          [r("Approvals and sanctioned plans: ", undefined, true), r("Verify applicable building plans, land-use permissions and necessary approvals.")],
          [r("Property tax and utility records: ", undefined, true), r("Review relevant payment records and outstanding dues.")],
          [r("Sale agreement: ", undefined, true), r("Check the price, payment schedule, possession terms, responsibilities and default clauses.")],
        ],
      },
      {
        type: "p",
        runs: [
          r("The documents required can differ for apartments, independent houses, plots and commercial units. Consult an independent property lawyer before paying a substantial advance or signing a binding agreement."),
        ],
      },
      { type: "h2", text: "8. Set a Realistic Budget Before You Buy" },
      {
        type: "p",
        runs: [r("Your property budget should cover much more than the advertised sale price.")],
      },
      {
        type: "p",
        runs: [
          r("Allow for applicable stamp duty, registration charges, brokerage, loan processing fees, interiors, repairs, society charges and future maintenance. For plots, also consider construction costs and the time required before the property can be occupied."),
        ],
      },
      {
        type: "p",
        runs: [
          r("If you plan to use a home loan, review your eligibility, monthly repayments, interest rate and other borrowing costs. A loan pre-approval can help you establish a realistic budget, although final approval remains subject to the lender's checks."),
        ],
      },
      {
        type: "p",
        runs: [
          r("PropPact tip: ", undefined, true),
          r("Compare properties using their total acquisition cost and ongoing expenses, not just the initial price. This makes it easier to evaluate options that genuinely fit your financial position."),
        ],
      },
      { type: "h2", text: "Why Consider PropPact for Your Property Search?" },
      {
        type: "p",
        runs: [
          r("At "),
          r("PropPact", undefined, true),
          r(", our focus is to help buyers explore property options in "),
          r("Greater Noida West and the surrounding Noida Extension market", undefined, true),
          r("."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Whether you are looking for "),
          r("flats for sale", "/residential-properties"),
          r(", "),
          r("villas for sale", "/villas-for-sale"),
          r(", "),
          r("residential plots for sale", "/plots-for-sale"),
          r(" or "),
          r("commercial property for sale", "/commercial-properties"),
          r(", choosing the right option begins with understanding your requirements."),
        ],
      },
      {
        type: "p",
        runs: [
          r("We aim to make your property search more straightforward through clear communication, relevant property information and assistance in exploring suitable options."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Before making a final decision, buyers should independently verify property documents, approvals, current prices and availability. Our goal is to help you approach the process with greater clarity and confidence."),
        ],
      },
      { type: "h2", text: "Ready to Find a Property in Greater Noida West?" },
      {
        type: "p",
        runs: [
          r("Choosing the right property is about more than finding an attractive listing. It means matching your budget, lifestyle and long-term goals with the right type of property and location."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Whether you are planning to buy your first home, upgrade to a villa, purchase a residential plot or explore commercial property, "),
          r("PropPact is here to help you take the next step", undefined, true),
          r("."),
        ],
      },
      {
        type: "p",
        runs: [
          r("Explore property options", "/projects"),
          r(" on our website or "),
          r("contact our team", "/contact-us"),
          r(" to discuss your requirements."),
        ],
      },
      {
        type: "p",
        runs: [r("PropPact — Your Property Search Starts Here.", undefined, true)],
      },
      {
        type: "p",
        runs: [
          r("Call / WhatsApp: ", undefined, true),
          r(SITE.phone, SITE.phoneHref),
          r(" · "),
          r("WhatsApp", "https://wa.me/919560959762"),
        ],
      },
      {
        type: "p",
        runs: [
          r("Email: ", undefined, true),
          r(SITE.email, SITE.emailHref),
        ],
      },
      {
        type: "p",
        runs: [
          r("Location: ", undefined, true),
          r(SITE.address, SITE.mapsUrl),
        ],
      },
      {
        type: "p",
        runs: [
          r("Website: ", undefined, true),
          r(SITE.url, SITE.url),
        ],
      },
      {
        type: "p",
        muted: true,
        runs: [
          r("Disclaimer: Property prices, availability, project approvals and market conditions may change. Information in this article is for general guidance and is not a guarantee of appreciation, rental income or investment returns. Verify all relevant documents and current details independently before purchasing a property."),
        ],
      },
    ],
  },
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
