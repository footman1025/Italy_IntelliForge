export type ServiceGroup = {
  title: string;
  items: string[];
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  rate: number;
  summary: string;
  headline: string;
  lede: string;
  paragraphs: string[];
  highlights: string[];
  groups: ServiceGroup[];
  principle: string;
  promise: string;
  related: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "software",
    number: "01",
    name: "Software",
    rate: 50,
    image: "/software.png",
    imageAlt: "A laptop dashboard connected to a workflow and a cloud database",
    summary: "Apps, APIs, AI, and the systems around them.",
    headline: "Built right the first time.",
    lede: "Most software projects don't fail because of bad code. They fail because the wrong problems get solved first. A beautiful codebase built on a misunderstood workflow is still a rewrite waiting to happen.",
    paragraphs: [
      "Every project starts with your business, your users, and the process behind the idea — before a line of code is written.",
      "For more than 10 years, the studio has helped startups, founders, and established businesses launch SaaS platforms, marketplaces, ERPs, CRMs, and internal systems. The focus stays the same: solve the real problem, and leave room for what comes next.",
    ],
    highlights: [
      "Product planning and UI/UX",
      "Laravel, Node.js, React, Next.js",
      "APIs, databases, and integrations",
      "Cloud, security, and ongoing support",
    ],
    groups: [
      {
        title: "Planning & design",
        items: ["Product planning and scoping", "UI/UX design"],
      },
      {
        title: "Web & backend",
        items: [
          "Web development with Laravel, CodeIgniter, Node.js, React, and Next.js",
          "Backend architecture and database design in MySQL, PostgreSQL, and MongoDB",
          "REST APIs, GraphQL, and third-party integrations",
          "WordPress: custom themes, plugins, and headless builds",
        ],
      },
      {
        title: "Release & care",
        items: [
          "Cloud deployment, DevOps, and CI/CD",
          "Performance optimization and security",
          "Long-term support and maintenance",
        ],
      },
    ],
    principle:
      "What clients value most is not the tech stack. It is that we ask the right questions early, explain trade-offs in plain language, and recommend what actually makes sense for the business — even when that is less work for us.",
    promise: "The right scope, even when it is the smaller one.",
    related: ["automation", "design"],
  },
  {
    slug: "trading",
    number: "02",
    name: "Trading systems",
    rate: 60,
    image: "/trading.png",
    imageAlt: "A trading desk with live charts and an execution pipeline",
    summary: "Bots, brokers, and execution that holds up live.",
    headline: "Automate the strategy the right way.",
    lede: "Most trading bots don't fail on strategy. They fail on execution. A partial fill handled wrong, a dropped WebSocket, an API rate limit at the worst moment. The logic was fine. The engineering wasn't.",
    paragraphs: [
      "A trading system is production infrastructure, not a script. Before anything touches live capital, it is backtested honestly, paper-traded, and fully logged — so you can see what the system did, and why.",
      "The same discipline used on high-reliability backends is applied here, across crypto, forex, and equities. We build to your strategy. We do not sell signals, and we do not promise returns. The code is yours, documented and extendable.",
    ],
    highlights: [
      "Python and Node.js bots",
      "Crypto, forex, and equities",
      "Honest backtests and paper trading",
      "Risk limits, logs, and 24/7 hosting",
    ],
    groups: [
      {
        title: "Strategy & risk",
        items: [
          "Trading bots in Python and Node.js",
          "Your strategy, implemented from your rules or a written spec",
          "Backtesting engines and performance reporting",
          "Risk management: position sizing, stop-loss, and drawdown limits",
        ],
      },
      {
        title: "Brokers & market data",
        items: [
          "Binance, Bybit, Kraken, and Coinbase",
          "Interactive Brokers and Alpaca",
          "MetaTrader 4 and MetaTrader 5",
          "Real-time market data pipelines and WebSocket feeds",
          "TradingView webhook to live execution",
        ],
      },
      {
        title: "Operations",
        items: [
          "Dashboards, alerts, and monitoring on Telegram, Discord, and the web",
          "VPS and cloud deployment with 24/7 uptime and failover",
          "Full logs of every action the system takes",
        ],
      },
    ],
    principle:
      "Clients stay because the system executes exactly what they designed, every time. No signal service. No promised returns. The code is fully theirs.",
    promise: "Your rules. No signals. No promised returns.",
    related: ["software", "automation"],
  },
  {
    slug: "design",
    number: "03",
    name: "Brand & motion",
    rate: 30,
    image: "/design.png",
    imageAlt: "A designer at a desk with a brand identity on the monitor",
    summary: "Identity, product design, print, and video.",
    headline: "Tied together, on purpose.",
    lede: "Most brands don't get ignored because the design is ugly. They get ignored because nothing ties it together. A logo that says one thing, a website that says another, a video that sounds like a different company.",
    paragraphs: [
      "We start with the message before the visuals: who you are talking to, what they need to feel, and what action should follow. Then every asset — screen, page, frame, or print — pulls in the same direction.",
      "For more than 10 years the studio has handled design and production for startups, agencies, and established businesses, from a single logo to a full brand system with product UI, print, and animated video.",
    ],
    highlights: [
      "Brand identity and guidelines",
      "Product UI and design systems",
      "Print, decks, and packaging",
      "Video, motion, and animation",
    ],
    groups: [
      {
        title: "Brand & identity",
        items: [
          "Logo design, from concept to a full lockup suite",
          "Complete brand identity and visual systems",
          "Brand guidelines and style guides",
          "Business cards, stationery, and social media kits",
          "Rebranding and brand refresh",
        ],
      },
      {
        title: "Product & web design",
        items: [
          "UI/UX for web apps, SaaS dashboards, and mobile",
          "Wireframes, user flows, and interactive Figma prototypes",
          "Landing pages built around conversion",
          "Design systems and component libraries",
          "Responsive, accessible design (WCAG)",
          "Design-to-code handoff in React, Next.js, and Tailwind",
        ],
      },
      {
        title: "Print & publication",
        items: [
          "Brochures, flyers, and catalogs",
          "eBook design, layout, and formatting for Kindle, PDF, and print",
          "Book covers and interior typesetting",
          "Presentation and pitch deck design",
          "Packaging, labels, and marketing collateral",
          "Posters, banners, and trade show graphics",
        ],
      },
      {
        title: "Video & animation",
        items: [
          "Video editing for promos, ads, YouTube, and social",
          "2D animation and motion graphics",
          "3D animation, modeling, and product visualization",
          "Explainer videos and animated product demos",
          "Logo animation and intro/outro stingers",
          "Subtitles, color grading, and sound mixing",
          "Short-form vertical edits for TikTok, Reels, and Shorts",
        ],
      },
    ],
    principle:
      "Every decision comes with a reason. We present a direction, explain why it serves the audience, and iterate fast from feedback. Brand, product, print, and video stay in-house, so the work does not drift between vendors.",
    promise: "One direction, explained, then refined with you.",
    related: ["cms", "software"],
  },
  {
    slug: "automation",
    number: "04",
    name: "Automation",
    rate: 50,
    image: "/automation.png",
    imageAlt: "A robot moving task cards through an automated workflow",
    summary: "Workflows, CRMs, and AI that save real hours.",
    headline: "Stop doing work a system should do.",
    lede: "Most automation projects disappoint for one reason: someone automated a broken process instead of fixing it first. Speeding up the wrong workflow produces mistakes faster — and then they are invisible.",
    paragraphs: [
      "We begin by mapping how the work actually happens, finding where the hours and money leak, then applying the right mix of AI, no-code platforms, and plain deterministic logic. AI where it genuinely helps. A simple integration where it does not.",
      "The engineering habit is the same one used on production software: workflows should not fail quietly at 3 a.m. with nobody noticing. Success is measured in hours saved, not features shipped.",
    ],
    highlights: [
      "n8n, Zapier, Make, Power Automate",
      "Odoo, HubSpot, GoHighLevel, Monday",
      "AI agents, RAG, and chatbots",
      "CRM, billing, and marketing flows",
    ],
    groups: [
      {
        title: "Automation platforms",
        items: [
          "Make (Integromat): complex multi-branch scenarios",
          "Zapier: Zaps, Paths, and custom webhook actions",
          "n8n: self-hosted, custom nodes, and advanced logic",
          "Power Automate and Airtable automations",
          "Custom automation backends when no-code hits its ceiling",
        ],
      },
      {
        title: "CRM, ERP & business systems",
        items: [
          "Odoo: implementation, custom modules, and integrations",
          "GoHighLevel: funnels, pipelines, workflows, and white-label setup",
          "Monday.com: boards, automations, and dashboards",
          "HubSpot, Salesforce, Pipedrive, and Zoho",
          "ClickUp, Asana, Notion, and Trello workflows",
          "QuickBooks, Xero, and Stripe automation",
        ],
      },
      {
        title: "AI & intelligent workflows",
        items: [
          "AI agents and multi-step reasoning workflows",
          "OpenAI, Claude, Gemini, and LangChain",
          "RAG systems over your own documents and knowledge base",
          "AI chatbots for websites, WhatsApp, Slack, and Telegram",
          "Document parsing, OCR, and invoice or contract processing",
          "AI content, summarization, and data classification pipelines",
        ],
      },
      {
        title: "Marketing & sales",
        items: [
          "Lead generation, scraping, and enrichment pipelines",
          "Cold email sequences and deliverability setup",
          "Appointment booking, reminders, and follow-up flows",
          "Review requests, SMS, and WhatsApp campaigns",
          "Reporting dashboards and attribution tracking",
        ],
      },
      {
        title: "Engineering & support",
        items: [
          "API integrations between any two systems",
          "Data migration and system-to-system syncing",
          "Internal tools and admin dashboards",
          "Cloud deployment, monitoring, and error alerting",
          "Documentation, handover, and long-term support",
        ],
      },
    ],
    principle:
      "We will tell you when a $20-a-month Zap beats a custom build, even though the custom build pays more. The measure is hours saved.",
    promise: "Hours saved. A simple tool when it is the better one.",
    related: ["software", "cms"],
  },
  {
    slug: "cms",
    number: "05",
    name: "Stores & CMS",
    rate: 40,
    image: "/cms.png",
    imageAlt: "A shopper browsing a store catalog on a tablet",
    summary: "WordPress, Shopify, Webflow, and stores that sell.",
    headline: "Your store, built to sell.",
    lede: "Most stores don't underperform because of the platform. They underperform because someone stacked twenty plugins on a bloated theme and hoped for the best. Slow checkout, a broken mobile layout, no analytics. The traffic arrives. The sales don't.",
    paragraphs: [
      "We start with the outcome: who is buying, where they drop off, and what has to load fast. Then we pick the platform that fits the business — not the one that is easiest for us to build.",
      "The studio has built and rescued sites for retailers, agencies, and service businesses for more than 10 years, from a five-page brochure site to multi-currency stores with thousands of SKUs.",
    ],
    highlights: [
      "WordPress, Shopify, Wix, Webflow, Framer",
      "Catalogs, checkout, and subscriptions",
      "Migrations that keep data and SEO",
      "Speed, security, and rescue work",
    ],
    groups: [
      {
        title: "Platforms",
        items: [
          "WordPress: custom themes, plugins, and headless builds",
          "WooCommerce: full store setup, custom checkout, and extensions",
          "Shopify: theme development, Liquid, and private apps",
          "Wix and Wix Studio: design, Velo, and custom functionality",
          "Framer, Webflow, and Squarespace",
          "PrestaShop: modules, theme customization, and multi-store setup",
          "Migrations between any of the above",
        ],
      },
      {
        title: "Store development",
        items: [
          "Product catalogs, variants, bundles, and digital goods",
          "Payment gateways: Stripe, PayPal, Klarna, and local processors",
          "Shipping, tax, multi-currency, and multi-language setup",
          "Subscriptions, memberships, and booking systems",
          "Inventory sync with ERP, POS, and marketplaces",
          "Cart recovery, upsells, and conversion optimization",
        ],
      },
      {
        title: "Custom work & integrations",
        items: [
          "Custom themes built from your Figma designs",
          "Custom plugins, modules, and Shopify apps",
          "REST API and third-party integrations for CRM, email, and accounting",
          "Migrations across WooCommerce, Shopify, and PrestaShop, without lost data or SEO",
          "Page builders: Elementor, Divi, Bricks, and Gutenberg",
        ],
      },
      {
        title: "Performance, security & support",
        items: [
          "Speed optimization and Core Web Vitals",
          "On-page SEO setup and schema markup",
          "Malware cleanup, hardening, and backups",
          "Bug fixes and rescue work on inherited sites",
          "Hosting setup, staging environments, and ongoing maintenance",
        ],
      },
    ],
    principle:
      "We will tell you which platform you actually need. Sometimes that is a custom WooCommerce build. Sometimes it is a Shopify theme you can manage yourself for a fraction of the cost.",
    promise: "The platform the business can actually run.",
    related: ["design", "automation"],
  },
  {
    slug: "3d",
    number: "06",
    name: "3D & spatial",
    rate: 50,
    image: "/3d.png",
    imageAlt: "A villa shown half as a wireframe model and half as a finished building",
    summary: "CAD, architecture, and real-time engines.",
    headline: "Right for the way it will be used.",
    lede: "Most 3D projects don't fail because of bad modeling. They fail because the model was built before anyone asked what it was for. A stunning render of a part that can't be manufactured, a building that ignores the site, or a game asset that tanks the frame rate is still a redo.",
    paragraphs: [
      "Every project starts with the product, the audience, and how the design will be used — manufacturing, construction, marketing, or a real-time game engine — before a sketch is drawn.",
      "For more than 10 years the studio has helped inventors, manufacturers, architects, real estate developers, and game studios turn ideas into accurate, production-ready 3D. Model it right the first time, and make it easy to revise later.",
    ],
    highlights: [
      "CAD for manufacturing",
      "Architecture, BIM, and archviz",
      "Unity, Unreal, and Roblox",
      "VR, AR, and real-time walkthroughs",
    ],
    groups: [
      {
        title: "Product & manufacturing",
        items: [
          "Concept sketches and design consultation",
          "3D CAD modeling in SolidWorks, AutoCAD, and Fusion 360",
          "Mechanical design, assemblies, and sheet metal",
          "2D technical drawings with GD&T, ready for manufacturing",
          "Product design for 3D printing, CNC, and injection molding",
          "File conversion and reverse engineering: STEP, IGES, STL, DWG, and FBX",
        ],
      },
      {
        title: "Architecture & visualization",
        items: [
          "3D architectural modeling in Revit, SketchUp, and 3ds Max",
          "Floor plans, elevations, and BIM",
          "Photorealistic interior and exterior rendering in V-Ray, Lumion, and KeyShot",
          "3D animation and walkthroughs",
        ],
      },
      {
        title: "Games & real-time",
        items: [
          "Game-ready assets and environments for Unity, Unreal Engine, and Roblox Studio",
          "Real-time interactive walkthroughs and VR/AR experiences",
          "Low-poly modeling, UV mapping, texturing, and optimization in Blender and Substance Painter",
        ],
      },
    ],
    principle:
      "What clients value is not the software. It is that we ask early, flag manufacturability, cost, and performance before they get expensive, and recommend what the project actually needs — even when that is less work for us.",
    promise: "Flagged for manufacturing, cost, and performance early.",
    related: ["design", "software"],
  },
];

export function hourly(rate: number) {
  return `$${rate} USD / hour`;
}

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}
