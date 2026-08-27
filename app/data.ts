export const generatorModels = ["Claude 4.7", "GPT 5.6 Sol", "Grok 4.6", "Fable 5", "GLM 5.3 Flash"] as const;
export type GeneratorModel = (typeof generatorModels)[number];

export type GallerySite = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  sectionId: string;
  artboardId: string;
  sourceFile: string;
  model: GeneratorModel;
  tags: string[];
  index: number;
};

type Group = {
  title: string;
  sectionId: string;
  entries: [artboardId: string, label: string][];
  model?: GeneratorModel;
};

type CategoryDefinition = {
  slug: string;
  name: string;
  sourceFile: string;
  description: string;
  model: GeneratorModel;
  groups: Group[];
};

export const categoryDefinitions: CategoryDefinition[] = [
  {
    slug: "landing",
    name: "Landing",
    sourceFile: "Themes and Typography.html",
    description: "Landing pages, typographic systems, brutalist and minimalist studies, agency variations, saturated color studies, and dashboards.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Hero / Landing",
        sectionId: "heroes",
        entries: [
          ["editorial", "01 · Editorial Serif"],
          ["brutalist", "02 · Brutalist Mono"],
          ["swiss", "03 · Swiss Modernist"],
          ["soft", "04 · Soft Pastel"],
          ["terminal", "05 · Dark Terminal"],
          ["display", "06 · Display / Anti-design"],
          ["premium", "07 · Premium Dark Glass"],
          ["vibrant", "08 · Vibrant Pop"],
        ],
      },
      {
        title: "More Directions",
        sectionId: "heroes-more",
        entries: [
          ["y2k", "09 · Y2K Chrome"],
          ["sketch", "10 · Hand-sketched"],
          ["bauhaus", "11 · Bauhaus Geometric"],
          ["newspaper", "12 · Newspaper Broadsheet"],
          ["riso", "13 · Risograph"],
          ["cyberpunk", "14 · Cyberpunk Neon"],
          ["botanical", "15 · Botanical Slow"],
          ["collage", "16 · Sticker Collage"],
        ],
      },
      {
        title: "Saturated Color",
        sectionId: "color-batch",
        entries: [
          ["lime", "17 · Lime / Sport"],
          ["forest", "18 · Deep Forest"],
          ["cobalt", "19 · Cobalt / Cultural"],
          ["magenta", "20 · Hot Magenta"],
          ["lavender", "21 · Lavender / Wellness"],
          ["mustard", "22 · Mustard / Guild"],
          ["teal", "23 · Deep Teal / Fintech"],
          ["oxblood", "24 · Oxblood / Wine bar"],
        ],
      },
      {
        title: "Brutalist Systems",
        sectionId: "brutal-sys",
        model: "GLM 5.3 Flash",
        entries: [
          ["b-rawweb", "25 · Raw Web Casual"],
          ["b-sticker", "26 · Sticker Slap"],
          ["b-manifesto", "27 · Data Manifesto"],
          ["b-concrete", "28 · Concrete Poster"],
        ],
      },
      {
        title: "Minimalist Studies",
        sectionId: "minimal-lab",
        model: "GLM 5.3 Flash",
        entries: [
          ["n-object", "29 · Object White"],
          ["n-gallery", "30 · Museum Quiet"],
          ["n-darkquiet", "31 · Dark Quiet"],
          ["n-specimen", "32 · Type Specimen"],
        ],
      },
      {
        title: "Agency Landings",
        sectionId: "agency-land",
        model: "GLM 5.3 Flash",
        entries: [
          ["a-granserif", "33 · Grand Serif Studio"],
          ["a-marquee", "34 · Marquee Motion"],
          ["a-ledger", "35 · Ledger Consultancy"],
          ["a-popstudio", "36 · Pop Polygon"],
        ],
      },
      {
        title: "Dashboards",
        sectionId: "dashboards",
        entries: [
          ["dash-analytics", "A · SaaS Analytics"],
          ["dash-trading", "B · Trading Terminal"],
          ["dash-health", "C · Health Rings"],
          ["dash-home", "D · Smart Home"],
          ["dash-crm", "E · Kanban CRM"],
          ["dash-devops", "F · DevOps Status Wall"],
        ],
      },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    sourceFile: "SaaS.html",
    description: "SaaS marketing landings plus product and platform consoles—activation, health, billing, support, attribution, access, trust, revenue, experiments, onboarding, and API operations.",
    model: "GLM 5.3 Flash",
    groups: [
      {
        title: "Landings",
        sectionId: "saas-land",
        model: "GLM 5.3 Flash",
        entries: [
          ["s-bento", "01 · Bento Wall"],
          ["s-cloudsoft", "02 · Soft Cloud Gradient"],
          ["s-clitool", "03 · Terminal Dev Tool"],
          ["s-signupfirst", "04 · Signup First"],
        ],
      },
      {
        title: "More Landings",
        sectionId: "saas-land-more",
        model: "GLM 5.3 Flash",
        entries: [
          ["s-entrust", "05 · Enterprise Trust"],
          ["s-copilotglow", "06 · AI Copilot Glow"],
          ["s-slotwise", "07 · Vertical Suite"],
          ["s-kudos", "08 · Social Proof Wall"],
        ],
      },
      {
        title: "Product Dashboards",
        sectionId: "dash-saas-product",
        model: "Grok 4.6",
        entries: [
          ["s-nock", "09 · Nock · Activation"],
          ["s-quorum", "10 · Quorum · Account Health"],
          ["s-metered", "11 · Metered · Usage Billing"],
          ["s-deskline", "12 · Deskline · Support Queue"],
        ],
      },
      {
        title: "Platform Dashboards",
        sectionId: "dash-saas-platform",
        model: "Grok 4.6",
        entries: [
          ["s-catchment", "13 · Catchment · Attribution"],
          ["s-keystone", "14 · Keystone · Access Admin"],
          ["s-thresh", "15 · Thresh · Trust Queue"],
          ["s-lumen", "16 · Lumen · Model Spend"],
        ],
      },
      {
        title: "More Dashboards",
        sectionId: "saas-dash-more",
        model: "GLM 5.3 Flash",
        entries: [
          ["s-tallyline", "17 · Tallyline · Revenue Desk"],
          ["s-splitrun", "18 · Splitrun · Experiment Board"],
          ["s-stageline", "19 · Stageline · Onboarding Rollout"],
          ["s-tollgate", "20 · Tollgate · API Console"],
        ],
      },
    ],
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    sourceFile: "Mobile Apps.html",
    description: "Sixteen iOS product directions, from finance and navigation to media and wellbeing.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Core Apps",
        sectionId: "mobile-row1",
        entries: [
          ["m-music", "A · Music Player"],
          ["m-bank", "B · Banking"],
          ["m-meditate", "C · Meditation"],
          ["m-food", "D · Food Delivery"],
          ["m-fit", "E · Fitness · Live"],
          ["m-board", "F · Boarding Pass"],
          ["m-journal", "G · Photo Journal"],
          ["m-crypto", "H · Crypto Wallet"],
        ],
      },
      {
        title: "Everyday Utilities",
        sectionId: "mobile-row2",
        entries: [
          ["m-ai", "I · AI Chat"],
          ["m-camera", "J · Camera"],
          ["m-cal", "K · Calendar"],
          ["m-maps", "L · Maps · Navigation"],
          ["m-weather", "M · Weather"],
          ["m-pod", "N · Podcast"],
          ["m-date", "O · Dating"],
          ["m-sleep", "P · Sleep Tracker"],
        ],
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    sourceFile: "Social Media Posts.html",
    description: "Posts, stories, reels, and platform-native layouts for visual and text-led channels.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Instagram Posts",
        sectionId: "ig-posts",
        entries: [
          ["s-quote", "01 · Editorial quote"],
          ["s-product", "02 · Product launch"],
          ["s-carstat", "08 · Carousel · Stat"],
          ["s-carcvr", "09 · Carousel · Cover"],
          ["s-event", "16 · Event poster"],
        ],
      },
      {
        title: "Stories & Reels",
        sectionId: "ig-stories",
        entries: [
          ["s-sale", "03 · IG Story · Sale"],
          ["s-bts", "04 · IG Story · BTS"],
          ["s-tiktok", "10 · TikTok · Reaction"],
          ["s-reel", "14 · IG Reel · Lifestyle"],
          ["s-pin", "12 · Pinterest pin"],
          ["s-spotify", "15 · Spotify share card"],
        ],
      },
      {
        title: "Text Platforms",
        sectionId: "text-platforms",
        entries: [
          ["s-twdark", "05 · X · text post"],
          ["s-twcard", "06 · X · with link card"],
          ["s-thread", "13 · Threads · chain"],
          ["s-linked", "07 · LinkedIn · announce"],
          ["s-yt", "11 · YouTube thumbnail"],
        ],
      },
    ],
  },
  {
    slug: "marketplaces",
    name: "Grids & Marketplace",
    sourceFile: "Grids and Marketplace.html",
    description: "Commerce grids, listings, catalogs, job boards, delivery, and cart patterns.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Marketplace & Listings",
        sectionId: "listings",
        entries: [
          ["g-stays", "01 · Stays grid (Airbnb)"],
          ["g-property", "02 · Real estate (premium)"],
          ["g-fashion", "03 · Fashion (editorial)"],
          ["g-market", "06 · Marketplace (resale)"],
          ["g-cars", "08 · Vehicles (dark premium)"],
        ],
      },
      {
        title: "Catalogs & Boards",
        sectionId: "catalogs",
        entries: [
          ["g-furniture", "04 · Furniture catalog"],
          ["g-prints", "05 · Art & prints"],
          ["g-jobs", "07 · Job board"],
          ["g-food", "12 · Food delivery grid"],
        ],
      },
      {
        title: "Cart Variations",
        sectionId: "carts",
        entries: [
          ["g-cart-full", "09 · Cart · full page"],
          ["g-cart-drawer", "10 · Cart · slide drawer"],
          ["g-cart-table", "11 · Cart · B2B restock"],
        ],
      },
    ],
  },
  {
    slug: "profiles-products",
    name: "Profiles & Products",
    sourceFile: "Profiles and Product Pages.html",
    description: "Personal profiles, customer accounts, product detail pages, and premium listings.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Profile Pages",
        sectionId: "profiles",
        entries: [
          ["p-social", "01 · Social profile (Threads-ish)"],
          ["p-port", "02 · Designer portfolio"],
          ["p-account", "03 · Customer account · Atelier"],
          ["p-athlete", "04 · Athlete · Pace//Form"],
          ["p-creator", "05 · Creator · music profile"],
        ],
      },
      {
        title: "Product Detail",
        sectionId: "pdp-commerce",
        entries: [
          ["p-fashion", "06 · Fashion PDP · Atelier Form"],
          ["p-furn", "07 · Furniture PDP · Kotona"],
          ["p-tech", "08 · Tech PDP · Nørr Audio"],
          ["p-print", "09 · Print PDP · Marais Editions"],
        ],
      },
      {
        title: "Listing Detail",
        sectionId: "pdp-listings",
        entries: [
          ["p-property", "10 · Property detail · Henley & Wayne"],
          ["p-vehicle", "11 · Vehicle detail · Null Point"],
          ["p-app", "12 · App detail · App Store-ish"],
        ],
      },
    ],
  },
  {
    slug: "editorial",
    name: "Articles & Editorial",
    sourceFile: "Articles and Editorial.html",
    description: "Long-form readers, publishing indexes, documentation, recipes, reviews, and podcasts.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Long-form Reading",
        sectionId: "art-reading",
        entries: [
          ["a-essay", "01 · Essay reader · The Quiet Times"],
          ["a-magfeature", "02 · Magazine feature · Werner Q."],
          ["a-photo", "03 · Photo essay · Lisbon 6pm"],
          ["a-interview", "04 · Interview · Q&A layout"],
        ],
      },
      {
        title: "Editorial Indexes",
        sectionId: "art-indexes",
        entries: [
          ["a-broadsheet", "05 · News broadsheet · The Standard"],
          ["a-newsletter", "06 · Newsletter index · Quires"],
          ["a-riso", "07 · Riso zine · Press & Pulp"],
        ],
      },
      {
        title: "Specialized Formats",
        sectionId: "art-formats",
        entries: [
          ["a-docs", "08 · Docs article · Halid"],
          ["a-recipe", "09 · Recipe · Milkpath"],
          ["a-devblog", "10 · Dev blog · Linear Labs"],
          ["a-review", "11 · Album review · Frequency"],
          ["a-pod", "12 · Podcast episode · Slow Listen"],
        ],
      },
    ],
  },
  {
    slug: "civic",
    name: "Civic & Public Service",
    sourceFile: "Civic and Public Service.html",
    description: "Accessible service landings, open records, public data, applications, budgets, and hearings.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Service Landings",
        sectionId: "service-landings",
        entries: [
          ["plain-service", "01 · Plain Service Modern"],
          ["data-atlas", "02 · Data Atlas"],
          ["public-record", "03 · The Public Record"],
          ["brutalist-records", "04 · Brutalist Open Records"],
          ["citizen-311", "05 · Citizen 311 (friendly)"],
          ["fiscal-dark", "06 · Fiscal Dark · Public Ledger"],
          ["district-map", "07 · District / Map-forward"],
          ["bilingual", "08 · Bilingual / Accessibility-first"],
        ],
      },
      {
        title: "Records & Data",
        sectionId: "records-data",
        entries: [
          ["dataset", "01 · Dataset record"],
          ["service-form", "02 · Service application"],
          ["budget-viz", "03 · Budget drilldown (dark)"],
          ["hearing", "04 · Public hearing agenda"],
        ],
      },
    ],
  },
  {
    slug: "agency",
    name: "Software Agency",
    sourceFile: "Software Agency.html",
    description: "A complete studio site system spanning home, services, work, about, pricing, journal, and careers.",
    model: "Claude 4.7",
    groups: [
      {
        title: "Home / Landing",
        sectionId: "home",
        entries: [
          ["home-statement", "01 · Statement (light)"],
          ["home-spec", "02 · Spec / Night (dark)"],
          ["home-index", "03 · Index (Swiss)"],
        ],
      },
      {
        title: "Services & Process",
        sectionId: "services",
        entries: [
          ["svc-matrix", "04 · Capability matrix (light)"],
          ["svc-list", "05 · Numbered services (dark)"],
          ["process", "06 · Process · Map·Make·Ship·Tend"],
        ],
      },
      {
        title: "Work & Case Study",
        sectionId: "work",
        entries: [
          ["work-grid", "07 · Case grid (light)"],
          ["work-ledger", "08 · Ledger (dark)"],
          ["case-editorial", "09 · Case · Editorial (light)"],
          ["case-spec", "10 · Case · Spec sheet (dark)"],
        ],
      },
      {
        title: "Studio",
        sectionId: "studio",
        entries: [
          ["about-team", "11 · About · Team (light)"],
          ["about-manifesto", "12 · About · Manifesto (dark)"],
          ["pricing-cards", "13 · Engagement · Cards (light)"],
          ["pricing-ledger", "14 · Engagement · Ledger (dark)"],
          ["contact", "15 · Contact · Start a project"],
        ],
      },
      {
        title: "More Home Directions",
        sectionId: "home-more",
        entries: [
          ["home-bold", "16 · Bold display (light)"],
          ["home-split", "17 · Split · design × engineering"],
        ],
      },
      {
        title: "Journal & Culture",
        sectionId: "journal",
        entries: [
          ["journal-index", "18 · Journal · Index"],
          ["journal-article", "19 · Journal · Article"],
          ["careers", "20 · Careers (dark)"],
          ["proof-wall", "21 · Proof wall"],
        ],
      },
    ],
  },
  {
    slug: "financial-apps",
    name: "Financial Apps",
    sourceFile: "Financial Apps.html",
    description: "Twelve mobile-first money products spanning budgeting, planning, payoff, treasury, tax, investing, and subscription management.",
    model: "GPT 5.6 Sol",
    groups: [
      {
        title: "Everyday Money",
        sectionId: "financial-everyday",
        entries: [
          ["fin-centsible", "01 · Centsible · Envelope Budget"],
          ["fin-monthline", "02 · Monthline · Cash Calendar"],
          ["fin-common", "03 · Common Ground · Household"],
          ["fin-tab", "04 · Tab! · Split Expenses"],
        ],
      },
      {
        title: "Planning & Payoff",
        sectionId: "financial-planning",
        entries: [
          ["fin-northstar", "05 · Northstar · Retirement"],
          ["fin-snowball", "06 · Snowball · Debt Quest"],
          ["fin-future-self", "07 · Future Self · Goal Planner"],
          ["fin-true-cost", "08 · True/Cost · Purchase Coach"],
        ],
      },
      {
        title: "Work & Wealth",
        sectionId: "financial-specialist",
        entries: [
          ["fin-halid", "09 · Halid · Treasury"],
          ["fin-solo-tax", "10 · Solo/Tax · Freelancer Vault"],
          ["fin-signal", "11 · Signal · Ethical Portfolio"],
          ["fin-subscape", "12 · Subscape · Subscription Garden"],
        ],
      },
    ],
  },
  {
    slug: "dashboards",
    name: "Dashboards",
    sourceFile: "Dashboards.html",
    description: "Twelve industry operations desks—hospital command, fleet, factory, airside, lodging, restaurant, farm, grid, legal, insurance, people ops, and studio production—each with its own information architecture.",
    model: "Grok 4.6",
    groups: [
      {
        title: "Operations & Infrastructure",
        sectionId: "dash-ops",
        entries: [
          ["d-meridian", "01 · Meridian · Hospital Command"],
          ["d-yardline", "02 · Yardline · Fleet Control"],
          ["d-kiln", "03 · Kiln · Factory Floor"],
          ["d-gate14", "04 · Gate 14 · Airside Ops"],
        ],
      },
      {
        title: "Places & Resources",
        sectionId: "dash-places",
        entries: [
          ["d-ledger", "05 · House Ledger · Night Desk"],
          ["d-pass", "06 · Pass · Service Floor"],
          ["d-acre", "07 · Acre · Growing Season"],
          ["d-circuit", "08 · Circuit · Grid Desk"],
        ],
      },
      {
        title: "Knowledge & Culture",
        sectionId: "dash-knowledge",
        entries: [
          ["d-docket", "09 · Docket · Matter Board"],
          ["d-claimwell", "10 · Claimwell · Adjuster Desk"],
          ["d-roster", "11 · Roster · People Ops"],
          ["d-cutroom", "12 · Cut Room · Studio Pipeline"],
        ],
      },
    ],
  },
  {
    slug: "animation",
    name: "Animation",
    sourceFile: "Animation.html",
    description: "Sixteen landing pages with animated hero sections—ambient backdrops, kinetic foreground motion, and industry-specific set pieces across biotech, racing, surgery, maritime, architecture, coffee, alpine sport, and cinema.",
    model: "Fable 5",
    groups: [
      {
        title: "Ambient Backdrops",
        sectionId: "anim-ambient",
        entries: [
          ["an-solstice", "01 · Solstice · Aurora Drift"],
          ["an-perigee", "02 · Perigee · Starfield"],
          ["an-undertow", "03 · Undertow · Waveform"],
          ["an-cairn", "04 · Cairn · Contour Lines"],
        ],
      },
      {
        title: "Kinetic Elements",
        sectionId: "anim-kinetic",
        entries: [
          ["an-vellum", "05 · Vellum · Kinetic Type"],
          ["an-rueneuf", "06 · Rue Neuf · Marquee"],
          ["an-kepler", "07 · Kepler · Orbit"],
          ["an-voltlane", "08 · Voltlane · Glitch Neon"],
        ],
      },
      {
        title: "Science & Motion",
        sectionId: "ih-science",
        entries: [
          ["ih-helix", "09 · Helix · DNA Spin"],
          ["ih-slipstream", "10 · Slipstream · Racing HUD"],
          ["ih-suture", "11 · Suture · Path Trace"],
          ["ih-harborline", "12 · Harborline · Radar Sweep"],
        ],
      },
      {
        title: "Place & Craft",
        sectionId: "ih-place",
        entries: [
          ["ih-plinth", "13 · Plinth · Stacking Floors"],
          ["ih-nectar", "14 · Nectar · Steam Rise"],
          ["ih-ridge", "15 · Ridge · Falling Snow"],
          ["ih-ampersand", "16 · Ampersand · Projector Flicker"],
        ],
      },
    ],
  },
];

function cleanName(label: string) {
  return label.replace(/^[A-P0-9]+\s*·\s*/, "").replace(/\s+/g, " ").trim();
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const seenSlugs = new Set<string>();
let itemIndex = 0;

export const allSites: GallerySite[] = categoryDefinitions.flatMap((category) =>
  category.groups.flatMap((group) =>
    group.entries.map(([artboardId, label]) => {
      const name = cleanName(label);
      let slug = slugify(name);
      if (seenSlugs.has(slug)) slug = `${category.slug}-${slug}`;
      seenSlugs.add(slug);
      const tags = Array.from(
        new Set(
          [category.name, group.title, ...name.split(/[·/()—\-]+/)]
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 2),
        ),
      ).slice(0, 6);

      return {
        slug,
        name,
        category: category.name,
        categorySlug: category.slug,
        subcategory: group.title,
        sectionId: group.sectionId,
        artboardId,
        sourceFile: category.sourceFile,
        model: group.model ?? category.model,
        tags,
        index: itemIndex++,
      };
    }),
  ),
);

export const sitesBySlug = new Map(allSites.map((site) => [site.slug, site]));

export const featuredSlugs = [
  "display-anti-design",
  "lime-sport",
  "district-map-forward",
  "about-manifesto-dark",
  "careers-dark",
  "athlete-pace-form",
  "health-rings",
  "job-board",
  "meridian-hospital-command",
  "circuit-grid-desk",
  "nock-activation",
  "helix-dna-spin",
] as const;

export const featuredSlugSet = new Set<string>(featuredSlugs);

export function getCategoryCount(slug: string) {
  return allSites.filter((site) => site.categorySlug === slug).length;
}

export function getSourceUrl(site: GallerySite) {
  const focus = `${site.sectionId}/${site.artboardId}`;
  return `/source/${encodeURIComponent(site.sourceFile)}?focus=${encodeURIComponent(focus)}`;
}

export function getEmbeddedSourceUrl(site: GallerySite) {
  const containedCategories = new Set(["mobile-apps", "social-media", "financial-apps"]);
  const fit = containedCategories.has(site.categorySlug) ? "&fit=contain" : "";
  return `${getSourceUrl(site)}&embed=1${fit}`;
}

export function getAgentBrief(site: GallerySite) {
  return `Use “${site.name}” as the visual direction for this interface. It belongs to ${site.category} / ${site.subcategory}. Study the reference for its hierarchy, typography, color system, spacing, density, border treatment, and interaction vocabulary. Adapt those principles to my product and content—do not copy the sample brand or wording. If I provide an unslop.site HTML export, inspect its inline computed CSS, embedded fonts, and asset data for exact visual values; treat it as an implementation reference, not production-ready source. Keep the result responsive, accessible, and production-ready.`;
}
