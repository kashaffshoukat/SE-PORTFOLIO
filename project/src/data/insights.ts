export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Engineering' | 'AI' | 'Cloud' | 'Product';
  readTime: string;
  date: string;
  author: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: 'shipping-llm-features-safely',
    title: 'Shipping LLM features that actually stay safe in production',
    excerpt:
      'The gap between a slick demo and a trustworthy production feature is evals, guardrails, and rollback. Here is how we close it.',
    category: 'AI',
    readTime: '8 min read',
    date: '2026-07-22',
    author: 'Ibrahim Khan',
    body: [
      'Large language models are surprisingly easy to demo and surprisingly hard to keep honest in production. The first sign of trouble is usually a screenshot from a customer, not a failing test.',
      'Our rule is simple: if you cannot measure it, do not ship it. Every AI feature we build gets an eval set before it touches a user. We write golden examples for the happy path, adversarial examples for prompt injection and PII leakage, and regression cases pulled from real support tickets.',
      'Guardrails come next. We classify inputs and outputs, redact sensitive data before it reaches the model, and put a deterministic fallback behind every generative path. When the model is uncertain, the product falls back to something boring and correct instead of something confident and wrong.',
      'Finally, every AI feature ships behind a flag with logging and a kill switch. If evals drift or feedback dips, we roll back in minutes, not weeks. That is what turns a neat demo into something a business can actually depend on.',
    ],
  },
  {
    slug: 'postgres-at-scale',
    title: 'Postgres at scale: what we actually do differently',
    excerpt:
      'Most Postgres pain is not the database — it is the access patterns around it. A practical checklist from years of production work.',
    category: 'Engineering',
    readTime: '11 min read',
    date: '2026-06-30',
    author: 'Usman Tariq',
    body: [
      'Postgres is the default data backbone for almost everything we ship, and it scales further than most people think — if you respect how it works.',
      'The first thing we fix is connection handling. A pooler like PgBouncer or Supabase Supavisor is non-negotiable once you have more than a handful of stateless services. Without it, you will hit max_connections long before you hit CPU limits.',
      'The second is indexing discipline. We audit slow queries against the actual plan, not the query text. A missing composite index or a misordered join condition is usually the real culprit behind a "slow database" complaint.',
      'The third is migration hygiene. We never run a migration that locks a large table during business hours. We add columns with defaults, backfill in batches, and swap in a code change before dropping the old shape. Boring, deliberate, and the reason our platforms stay up.',
    ],
  },
  {
    slug: 'design-systems-that-survive',
    title: 'Design systems that survive a real product cycle',
    excerpt:
      'A design system is only as good as its adoption. Here is how we build ones engineers actually want to use.',
    category: 'Product',
    readTime: '6 min read',
    date: '2026-06-11',
    author: 'Sara Nadeem',
    body: [
      'Most design systems die in a Figma file nobody opens. The ones that survive live in the codebase, ship with the product, and get maintained like any other dependency.',
      'We start from real screens, not abstract primitives. Tokens are extracted from actual usage, not invented. That keeps the system grounded in what the product needs instead of what looks tidy in isolation.',
      'Adoption is a people problem as much as a technical one. We pair designers with engineers on the first components, document edge cases inline, and treat the system as a product with its own backlog and versioning.',
      'When it works, the whole team moves faster. New screens assemble from existing pieces, accessibility stays consistent, and designers spend their time on hard problems instead of re-creating buttons.',
    ],
  },
  {
    slug: 'multi-region-failover',
    title: 'Designing multi-region failover without the drama',
    excerpt:
      'Active-active sounds great in a diagram. Here is the pragmatic, single-writer approach we default to instead.',
    category: 'Cloud',
    readTime: '9 min read',
    date: '2026-05-19',
    author: 'Fahad Al-Hajri',
    body: [
      'True active-active multi-region is a rare requirement and an expensive one. Most clients need something simpler: a platform that fails over cleanly when a region has a bad day.',
      'We default to a single-writer, multi-reader topology. One region owns writes; replicas in other regions serve reads with acceptable lag. Failover is a planned, rehearsed operation — not a surprise at 3am.',
      'Stateless services run in every region behind a global load balancer. When a region fails, traffic shifts, and only the write path needs manual attention. Reads continue uninterrupted because the replicas are already warm.',
      'The unglamorous part is rehearsal. We run failover drills quarterly, measure RTO and RPO, and fix the paper cuts before they become outages. Calm during a real incident is a side effect of practice.',
    ],
  },
  {
    slug: 'estimating-software-projects',
    title: 'How we estimate software projects honestly',
    excerpt:
      'Estimates are predictions, not promises. Here is the process behind the numbers we give clients.',
    category: 'Engineering',
    readTime: '7 min read',
    date: '2026-04-28',
    author: 'Zain Raza',
    body: [
      'Software estimates fail when they are treated as contracts. We treat them as forecasts with confidence bands, and we update them as uncertainty resolves.',
      'We break work into thin vertical slices, estimate each slice with a range, and add explicit risk budget for the unknowns. The sum of the ranges, not a single number, is what we share with a client.',
      'We re-forecast every two weeks. If discovery changes the picture, we say so immediately — not at the end. That keeps trust intact and lets the client make informed tradeoffs in time.',
      'The goal is not to be perfectly right. It is to be honest, early, and useful. Clients would rather hear a changed estimate in week four than a missed deadline in week twenty.',
    ],
  },
  {
    slug: 'edge-rendered-storefronts',
    title: 'Edge-rendered storefronts: fast by default',
    excerpt:
      'How we took a multi-vendor marketplace from 3.4s to 0.9s TTFB without a rewrite.',
    category: 'Cloud',
    readTime: '8 min read',
    date: '2026-04-02',
    author: 'Usman Tariq',
    body: [
      'Speed is a feature, especially in commerce. A 200ms improvement in time-to-first-byte can move conversion meaningfully, and the easiest wins are usually infrastructural.',
      'We moved the storefront rendering to the edge with streaming HTML. Product data is cached close to the user and revalidated in the background, so most visits never hit the origin.',
      'Personalization — cart, recommendations — is hydrated client-side from a fast API. That keeps the critical first paint generic and cacheable while the tailored bits fill in afterward.',
      'The result was a 0.9s median TTFB and a 34% lift in conversion. No rewrite, no new backend — just moving rendering closer to the user and respecting the cache hierarchy.',
    ],
  },
];

export const articleCategories: ('All' | Article['category'])[] = [
  'All', 'Engineering', 'AI', 'Cloud', 'Product',
];
