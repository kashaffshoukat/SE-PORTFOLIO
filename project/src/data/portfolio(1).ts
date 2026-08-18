export type ProjectCategory = 'Fintech' | 'Healthcare' | 'E-commerce' | 'SaaS' | 'Logistics';

export type Project = {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  service: string;
  serviceSlug: string;
  blurb: string;
  results: { label: string; value: string }[];
  tags: string[];
  image: string;
  gallery: string[];
  duration: string;
  teamSize: string;
  year: string;
  challenge: string[];
  solution: string[];
  approach: { icon: string; title: string; desc: string }[];
  testimonial?: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'cross-border-payments',
    title: 'Cross-border payments platform',
    client: 'FawriPay',
    category: 'Fintech',
    service: 'Custom Software',
    serviceSlug: 'custom-software',
    blurb:
      'A remittance and wallet platform handling multi-currency transfers with KYC, fraud scoring, and real-time ledger reconciliation.',
    results: [
      { label: 'Transactions / mo', value: '1.2M+' },
      { label: 'Settlement time', value: '−78%' },
      { label: 'Fraud rate', value: '0.04%' },
    ],
    tags: ['React', 'Node.js', 'Postgres', 'AWS'],
    image: 'https://images.pexels.com/photos/38343510/pexels-photo-38343510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/32299962/pexels-photo-32299962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38343510/pexels-photo-38343510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    duration: '7 months',
    teamSize: '6 engineers',
    year: '2025',
    challenge: [
      'FawriPay was processing remittances through a patchwork of third-party APIs and manual reconciliation spreadsheets. Settlement times averaged 18 hours, fraud detection was reactive, and the ledger could not scale past 200K monthly transactions.',
      'Regulatory requirements across three jurisdictions demanded auditable KYC trails, transaction monitoring, and real-time sanctions screening — none of which the existing system could provide without significant manual effort.',
    ],
    solution: [
      'We built a unified payments platform with a double-entry ledger at its core, replacing the spreadsheet reconciliation with real-time, event-sourced accounting. Every transaction is immutable, auditable, and reconciled automatically.',
      'A fraud-scoring engine evaluates every transfer in under 200ms using behavioral signals, velocity checks, and sanctions screening. Suspicious transactions are held for manual review with a full evidence trail.',
      'The KYC flow integrates with three identity providers and supports tiered verification, letting users start transacting quickly while higher limits unlock as verification deepens.',
    ],
    approach: [
      { icon: 'Layers', title: 'Event-sourced ledger', desc: 'Every transaction is an immutable event — the current balance is a projection, not a number we mutate. Full audit trail for free.' },
      { icon: 'ShieldCheck', title: 'Fraud scoring', desc: 'A rules engine plus ML model scores each transfer in under 200ms, holding high-risk transactions for manual review.' },
      { icon: 'Globe', title: 'Multi-jurisdiction KYC', desc: 'Tiered identity verification across three regulatory regimes, with auditable trails for every decision.' },
      { icon: 'Gauge', title: 'Real-time reconciliation', desc: 'Automated matching against partner bank statements eliminated 18 hours of daily manual work.' },
    ],
    testimonial: {
      quote: 'Nexavera shipped our payments platform ahead of schedule and stayed on through launch. Their architecture decisions saved us months of rework and a painful migration.',
      name: 'Hassan Al-Rumaihi',
      role: 'CTO, FawriPay',
    },
  },
  {
    id: 'p2',
    slug: 'telehealth-consultation-suite',
    title: 'Telehealth consultation suite',
    client: 'MedLink Gulf',
    category: 'Healthcare',
    service: 'Web & Mobile',
    serviceSlug: 'web-mobile',
    blurb:
      'HIPAA-aligned video consultations, e-prescriptions, and patient records with role-based access for clinics across the GCC.',
    results: [
      { label: 'Patient wait', value: '−62%' },
      { label: 'Clinics onboarded', value: '340+' },
      { label: 'Uptime', value: '99.95%' },
    ],
    tags: ['React Native', 'WebRTC', 'Supabase', 'Go'],
    image: 'https://images.pexels.com/photos/8376171/pexels-photo-8376171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/6129679/pexels-photo-6129679.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8376171/pexels-photo-8376171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    duration: '9 months',
    teamSize: '8 engineers + 2 designers',
    year: '2025',
    challenge: [
      'MedLink Gulf needed to digitize consultations across 340+ clinics in the GCC, replacing phone-based appointment booking and paper records with a compliant telehealth platform.',
      'Patient data had to meet HIPAA-aligned standards across multiple countries, with role-based access for doctors, nurses, administrators, and patients — each with different permissions and views.',
      'Video consultations needed to work on low-bandwidth connections common in rural clinics, while maintaining clinical-grade reliability.',
    ],
    solution: [
      'We built a cross-platform suite — a React Native app for patients and doctors, plus a web dashboard for clinic administrators. Video runs over WebRTC with adaptive bitrate that degrades gracefully on poor connections.',
      'Patient records use a role-based access model where every access is logged. Doctors see full histories; administrators see operational data; patients see their own visits and prescriptions.',
      'E-prescriptions integrate with pharmacy networks, with drug-interaction checks and controlled-substance flags built into the prescribing flow.',
    ],
    approach: [
      { icon: 'Smartphone', title: 'Cross-platform', desc: 'One React Native codebase serves iOS, Android, and web — consistent UX, half the maintenance.' },
      { icon: 'Lock', title: 'Compliant by design', desc: 'HIPAA-aligned access controls, audit logging, and encryption at rest and in transit.' },
      { icon: 'Users', title: 'Role-based access', desc: 'Granular permissions for doctors, nurses, admins, and patients — every access audited.' },
      { icon: 'Gauge', title: 'Adaptive video', desc: 'WebRTC with adaptive bitrate keeps consultations clear even on rural clinic connections.' },
    ],
    testimonial: {
      quote: 'The team understood our clinical workflows from day one. The telehealth suite is now the backbone of how 340+ clinics operate across the GCC.',
      name: 'Dr. Aisha Mahmoud',
      role: 'Medical Director, MedLink Gulf',
    },
  },
  {
    id: 'p3',
    slug: 'headless-commerce-storefront',
    title: 'Headless commerce storefront',
    client: 'Bazaarnow',
    category: 'E-commerce',
    service: 'Web & Mobile',
    serviceSlug: 'web-mobile',
    blurb:
      'A headless, multi-vendor marketplace with edge-rendered storefronts, inventory sync, and a seller analytics dashboard.',
    results: [
      { label: 'Page load', value: '0.9s' },
      { label: 'Conversion', value: '+34%' },
      { label: 'Sellers', value: '2,100+' },
    ],
    tags: ['Next.js', 'Stripe', 'Postgres', 'Edge'],
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    duration: '6 months',
    teamSize: '5 engineers + 1 designer',
    year: '2025',
    challenge: [
      'Bazaarnow was a growing marketplace whose storefront averaged 3.4 seconds to first byte. Sellers had no real visibility into inventory or sales, and the monolithic backend could not keep up with category expansion.',
      'The platform needed to support 2,100+ independent sellers, each managing their own inventory, pricing, and fulfillment — without the performance penalty of a traditional multi-vendor architecture.',
    ],
    solution: [
      'We rebuilt the storefront on Next.js with edge rendering and streaming HTML. Product data is cached at the edge and revalidated in the background, so most visits never hit the origin server.',
      'A headless commerce backend separates the storefront from seller management, inventory, and payments. Sellers get a real-time analytics dashboard with sales, inventory levels, and fulfillment status.',
      'Stripe Connect handles multi-party payouts, splitting payments between the marketplace and sellers automatically with full tax documentation.',
    ],
    approach: [
      { icon: 'Gauge', title: 'Edge rendering', desc: 'Storefront pages render at the edge with streaming HTML — 0.9s median TTFB.' },
      { icon: 'Layers', title: 'Headless architecture', desc: 'Storefront, seller tools, and payments are decoupled — each scales independently.' },
      { icon: 'LineChart', title: 'Seller analytics', desc: 'Real-time dashboards for sales, inventory, and fulfillment — no more end-of-month spreadsheets.' },
      { icon: 'Globe', title: 'Stripe Connect', desc: 'Automated multi-party payouts with tax docs handled by Stripe.' },
    ],
    testimonial: {
      quote: 'They treat our roadmap like their own. From discovery to delivery, the communication was clear, the estimates were honest, and the product held up under real load.',
      name: 'Bilal Siddiqui',
      role: 'Founder & CEO, Bazaarnow',
    },
  },
  {
    id: 'p4',
    slug: 'logistics-orchestration',
    title: 'Logistics orchestration cloud',
    client: 'TransGulf',
    category: 'Logistics',
    service: 'Cloud & Database',
    serviceSlug: 'cloud-database',
    blurb:
      'Real-time fleet tracking, route optimization, and warehouse automation over an event-driven microservices backbone.',
    results: [
      { label: 'Fuel cost', value: '−21%' },
      { label: 'On-time delivery', value: '97.4%' },
      { label: 'Shipments / day', value: '85K' },
    ],
    tags: ['Go', 'Kafka', 'Kubernetes', 'GCP'],
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    duration: '11 months',
    teamSize: '7 engineers',
    year: '2024',
    challenge: [
      'TransGulf managed 85,000 daily shipments across a fleet of 1,200 vehicles, but their operations ran on a legacy system that could not provide real-time visibility or optimize routes dynamically.',
      'Fuel costs were rising, on-time delivery was slipping below 89%, and the operations team had no way to respond to disruptions — traffic, weather, breakdowns — in real time.',
    ],
    solution: [
      'We built an event-driven orchestration platform on Go microservices with Kafka as the event backbone. Every shipment, vehicle, and warehouse is a stream of events that the system reacts to in real time.',
      'A route optimization engine continuously recalculates routes based on live traffic, weather, and delivery windows, reducing fuel costs by 21% and pushing on-time delivery to 97.4%.',
      'Warehouse automation integrates with conveyor and sorting systems, with computer vision for package detection and automated dispatch to the right dock.',
    ],
    approach: [
      { icon: 'Workflow', title: 'Event-driven', desc: 'Kafka event streams for every shipment and vehicle — the system reacts, not polls.' },
      { icon: 'Gauge', title: 'Route optimization', desc: 'Continuous recalculation against live traffic and weather data.' },
      { icon: 'Cpu', title: 'Warehouse automation', desc: 'Computer vision and conveyor integration for automated sorting and dispatch.' },
      { icon: 'Server', title: 'Microservices', desc: 'Go services on Kubernetes, each independently deployable and scalable.' },
    ],
    testimonial: {
      quote: 'We brought them in for a cloud migration and they left us with a platform we can actually run ourselves. Documentation, observability, the works.',
      name: 'Omar Khalid',
      role: 'Head of Engineering, TransGulf',
    },
  },
  {
    id: 'p5',
    slug: 'ai-support-copilot',
    title: 'AI support copilot',
    client: 'Helix SaaS',
    category: 'SaaS',
    service: 'AI Integration',
    serviceSlug: 'ai-integration',
    blurb:
      'A retrieval-augmented assistant that drafts replies, classifies tickets, and surfaces knowledge from a client-wide index.',
    results: [
      { label: 'First response', value: '−54%' },
      { label: 'Auto-resolved', value: '38%' },
      { label: 'CSAT', value: '4.8/5' },
    ],
    tags: ['OpenAI', 'Vector DB', 'Python', 'LangChain'],
    image: 'https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    duration: '5 months',
    teamSize: '4 engineers',
    year: '2025',
    challenge: [
      'Helix SaaS had a growing support backlog — first response times were creeping past 12 hours, and their knowledge base was so large that agents could not find answers fast enough.',
      'They wanted AI to help, but were wary of a chatbot that would hallucinate policies to frustrated customers. Trust and safety were non-negotiable.',
    ],
    solution: [
      'We built a retrieval-augmented copilot that grounds every draft in Helix\'s actual knowledge base, product docs, and past ticket resolutions. Every answer cites its sources, and agents can verify before sending.',
      'A classification engine auto-routes and tags incoming tickets, cutting triage time dramatically. 38% of tickets are now auto-resolved with a confident, sourced answer — no human needed.',
      'An eval suite of 200 golden and adversarial examples runs on every model change, and a kill switch rolls back to human-only mode in one click if quality dips.',
    ],
    approach: [
      { icon: 'BrainCircuit', title: 'RAG pipeline', desc: 'Answers grounded in your knowledge base — never the open internet.' },
      { icon: 'ShieldCheck', title: 'Evals & guardrails', desc: '200 test cases run on every change; kill switch for instant rollback.' },
      { icon: 'Workflow', title: 'Auto-classification', desc: 'Tickets routed and tagged automatically — triage time cut dramatically.' },
      { icon: 'Users', title: 'Human-in-the-loop', desc: 'Agents review AI drafts with cited sources before sending — trust, not faith.' },
    ],
    testimonial: {
      quote: 'Their AI copilot cut our first-response time in half and actually improved CSAT. The evals work they did behind the scenes made it trustworthy enough to ship.',
      name: 'Lena Fischer',
      role: 'VP Support, Helix SaaS',
    },
  },
  {
    id: 'p6',
    slug: 'wealth-advisory-dashboard',
    title: 'Wealth advisory dashboard',
    client: 'Meridian Capital',
    category: 'Fintech',
    service: 'UI/UX & Product',
    serviceSlug: 'product-design',
    blurb:
      'A portfolio analytics surface with risk modeling, goal planning, and advisor-client collaboration tools.',
    results: [
      { label: 'AUM tracked', value: '$4.2B' },
      { label: 'Advisor time', value: '−40%' },
      { label: 'Engagement', value: '+2.1x' },
    ],
    tags: ['React', 'D3.js', 'TypeScript', 'AWS'],
    image: 'https://images.pexels.com/photos/32299962/pexels-photo-32299962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    gallery: [
      'https://images.pexels.com/photos/32299962/pexels-photo-32299962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/38343510/pexels-photo-38343510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    duration: '8 months',
    teamSize: '5 engineers + 2 designers',
    year: '2024',
    challenge: [
      'Meridian Capital tracked $4.2B in assets across spreadsheets and a legacy desktop tool. Advisors spent 40% of their time on reporting instead of client relationships.',
      'Clients wanted real-time visibility into their portfolios, but the existing system could only produce monthly PDF statements — no self-service, no collaboration.',
    ],
    solution: [
      'We designed and built a portfolio analytics platform with real-time risk modeling, goal-based planning, and a collaboration layer where advisors and clients can annotate and discuss holdings together.',
      'Interactive D3.js visualizations let advisors stress-test portfolios against market scenarios in real time, with Monte Carlo simulations running client-side.',
      'A clean, accessible interface cut advisor reporting time by 40% and doubled client engagement — clients now log in weekly instead of waiting for monthly statements.',
    ],
    approach: [
      { icon: 'Search', title: 'Advisor research', desc: 'We shadowed advisors for two weeks to understand real workflows, not assumed ones.' },
      { icon: 'Design', title: 'Interactive visualizations', desc: 'D3.js charts with real-time risk modeling and Monte Carlo simulations.' },
      { icon: 'Users', title: 'Advisor-client collaboration', desc: 'Shared annotations and discussions — a product, not a PDF generator.' },
      { icon: 'Gauge', title: 'Performance', desc: 'Client-side simulations keep the interface responsive even with complex models.' },
    ],
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All', 'Fintech', 'Healthcare', 'E-commerce', 'SaaS', 'Logistics',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
