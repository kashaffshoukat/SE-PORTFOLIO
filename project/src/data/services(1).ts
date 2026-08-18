import {
  Code2, Cloud, Smartphone, BrainCircuit, PenTool, ShieldCheck,
  LayoutDashboard, Workflow, LineChart, Boxes, Globe, Cpu,
  Search, PenTool as Design, Rocket, Wrench, Gauge, Layers,
  GitBranch, Server, Database, Lock, Bot, FileText, Users,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  blurb: string;
  bullets: string[];
  deliverables: string[];
  heroImage: string;
  overview: string[];
  process: { icon: LucideIcon; title: string; desc: string }[];
  capabilities: { icon: LucideIcon; title: string; desc: string }[];
  tech: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    short: 'Custom Software',
    blurb:
      'Bespoke platforms engineered around your operations — from internal tooling to multi-tenant SaaS products that scale with your business.',
    bullets: ['Domain-driven architecture', 'API-first design', 'Tested & documented'],
    deliverables: ['Web platforms', 'Internal tools', 'ERP & CRM systems', 'Data pipelines'],
    heroImage: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview: [
      'When off-the-shelf software forces you to bend your business around it, custom software does the opposite — it bends to the way you already work. We build platforms engineered around your real operations, not a generic best-practice template.',
      'Our engagements span internal tooling that saves hundreds of hours a month, multi-tenant SaaS products that serve thousands of organizations, and data pipelines that turn raw operational data into decisions. Every line of code is yours, documented, and built to be run by your team.',
      'We start from the domain. Before a single component is written, we map your workflows, data, and edge cases. That upfront investment is what keeps the architecture honest six months and two years in.',
    ],
    process: [
      { icon: Search, title: 'Discovery', desc: 'We map your domain, constraints, and success metrics before writing a line of code.' },
      { icon: Layers, title: 'Architecture', desc: 'API-first, domain-driven design that stays legible as the product grows.' },
      { icon: GitBranch, title: 'Build', desc: 'Two-week slices of working software, reviewed and shipped continuously.' },
      { icon: Rocket, title: 'Launch', desc: 'Runbooks, observability, and handoff so your team can operate what we built.' },
    ],
    capabilities: [
      { icon: LayoutDashboard, title: 'Multi-tenant SaaS', desc: 'Isolated, billable, and scalable — built for organizations, not just users.' },
      { icon: Database, title: 'Data pipelines', desc: 'ETL, streaming, and analytics backends that turn raw data into decisions.' },
      { icon: Wrench, title: 'Internal tools', desc: 'Admin panels, ops dashboards, and automation that save hundreds of hours.' },
      { icon: Workflow, title: 'ERP & CRM', desc: 'Custom systems that fit your process instead of forcing you to fit theirs.' },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'GraphQL', 'tRPC', 'Redis'],
    faqs: [
      { q: 'Do we own the code?', a: 'Always. Every repository, infrastructure definition, and document is yours from day one. We hand over runbooks so your team can operate it independently.' },
      { q: 'Can you work with our existing team?', a: 'Yes. We embed alongside in-house engineers, share code reviews, and follow your conventions. Many engagements are a mix of Nexavera and client engineers.' },
      { q: 'How do you handle changing requirements?', a: 'We re-forecast every two weeks. If discovery changes the picture, we say so immediately — not at the end. You steer with real information, not a fixed contract.' },
    ],
  },
  {
    slug: 'web-mobile',
    icon: Smartphone,
    title: 'Web & Mobile Engineering',
    short: 'Web & Mobile',
    blurb:
      'Responsive web apps and cross-platform mobile experiences that ship fast, feel native, and hold up under real-world load.',
    bullets: ['React / Next.js / Vue', 'React Native & Flutter', 'Offline-first & real-time'],
    deliverables: ['Progressive web apps', 'iOS & Android apps', 'Design systems', 'App store delivery'],
    heroImage: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview: [
      'Your product lives across screens — desktop, tablet, phone, and sometimes watch. We build web and mobile experiences that share a design language, a data model, and a release cadence, so your users get a consistent experience everywhere.',
      'On the web, we ship server-rendered and edge-rendered apps that load in under a second and stay smooth under load. On mobile, we use React Native and Flutter to deliver near-native performance from a single codebase, with offline-first patterns for flaky networks.',
      'Every app ships with a design system, analytics, and a release pipeline that lets you push to production with confidence — not a 47-step manual.',
    ],
    process: [
      { icon: Design, title: 'Design system', desc: 'A shared component library keeps web and mobile visually and behaviorally consistent.' },
      { icon: Layers, title: 'Shared backend', desc: 'One API serves every surface, so business logic lives in exactly one place.' },
      { icon: GitBranch, title: 'Parallel build', desc: 'Web and mobile ship in the same two-week cadence with unified releases.' },
      { icon: Rocket, title: 'Store delivery', desc: 'CI/CD handles builds, signing, and store submission for iOS and Android.' },
    ],
    capabilities: [
      { icon: LayoutDashboard, title: 'Progressive web apps', desc: 'Installable, offline-capable web apps that feel native.' },
      { icon: Smartphone, title: 'iOS & Android', desc: 'React Native and Flutter apps from a single, shared codebase.' },
      { icon: Gauge, title: 'Edge rendering', desc: 'Sub-second loads with streaming HTML and edge caching.' },
      { icon: Users, title: 'Real-time', desc: 'Collaboration, presence, and live updates over WebSockets.' },
    ],
    tech: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Tailwind', 'Expo', 'WebRTC', 'Supabase', 'Vercel'],
    faqs: [
      { q: 'Native or cross-platform?', a: 'We default to React Native or Flutter for 90% of apps — the performance gap has closed, and a single codebase halves your maintenance. For compute-heavy apps (AR, video processing), we go fully native.' },
      { q: 'Do you handle app store submission?', a: 'Yes. Our CI/CD pipeline builds, signs, and submits to the App Store and Google Play. We manage provisioning profiles, store listings, and review responses.' },
      { q: 'Can you improve our existing app?', a: 'Absolutely. We audit performance, accessibility, and architecture, then ship incremental improvements without a full rewrite.' },
    ],
  },
  {
    slug: 'cloud-database',
    icon: Cloud,
    title: 'Cloud & Database Solutions',
    short: 'Cloud & Database',
    blurb:
      'Cloud-native infrastructure and resilient data backends — designed for security, observability, and cost-efficient scale.',
    bullets: ['AWS / GCP / Azure', 'Postgres & serverless', 'CI/CD & IaC'],
    deliverables: ['Migration & refactors', 'Kubernetes & serverless', 'Observability stacks', 'Backup & DR'],
    heroImage: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview: [
      'Infrastructure is not a one-time setup — it is a living system that needs to evolve with your product. We design cloud architectures that are secure by default, observable by construction, and cost-efficient at scale.',
      'Most of our work involves Postgres, and it scales further than people think when you respect how it works: proper connection pooling, disciplined indexing, and migration hygiene that never locks a busy table. We also work with serverless platforms, Kafka, and Kubernetes where the workload demands it.',
      'We leave you with infrastructure you can run yourself. Everything is defined in code, documented, and monitored — no mystery boxes that only one consultant understands.',
    ],
    process: [
      { icon: Search, title: 'Audit', desc: 'We assess your current architecture, costs, and failure modes.' },
      { icon: Server, title: 'Design', desc: 'A target architecture with cost, latency, and RTO/RPO targets.' },
      { icon: GitBranch, title: 'Migrate', desc: 'Zero-downtime migrations with rollback at every step.' },
      { icon: Gauge, title: 'Optimize', desc: 'Continuous cost and performance tuning with real metrics.' },
    ],
    capabilities: [
      { icon: Cloud, title: 'Multi-cloud', desc: 'AWS, GCP, and Azure — pick the right tool, not a vendor lock-in.' },
      { icon: Database, title: 'Postgres at scale', desc: 'Pooling, partitioning, and indexing that keeps it fast.' },
      { icon: Lock, title: 'Backup & DR', desc: 'Rehearsed failover with measured RTO and RPO, not hopes.' },
      { icon: LineChart, title: 'Observability', desc: 'Metrics, logs, and tracing wired in from day one.' },
    ],
    tech: ['AWS', 'GCP', 'Azure', 'PostgreSQL', 'Kubernetes', 'Terraform', 'PgBouncer', 'Kafka', 'Redis', 'Grafana'],
    faqs: [
      { q: 'Can you migrate us with zero downtime?', a: 'For most workloads, yes. We use dual-write, backfill, and cutover patterns that keep the old system serving traffic until the new one is verified. We rehearse the cutover before the real one.' },
      { q: 'Will you reduce our cloud bill?', a: 'Usually significantly. Right-sizing, committed-use discounts, and eliminating idle resources are quick wins. We typically find 20-40% savings in the first audit.' },
      { q: 'Do you manage infrastructure long-term?', a: 'We can, but our goal is to make you self-sufficient. We set up runbooks, dashboards, and on-call procedures, then transition to an advisory role if you want.' },
    ],
  },
  {
    slug: 'ai-integration',
    icon: BrainCircuit,
    title: 'AI Integration',
    short: 'AI Integration',
    blurb:
      'Practical AI woven into your product — retrieval-augmented assistants, automated workflows, and intelligent document processing.',
    bullets: ['RAG & embeddings', 'LLM orchestration', 'Evals & guardrails'],
    deliverables: ['Copilots & chatbots', 'Document intelligence', 'Recommendation engines', 'Automation agents'],
    heroImage: 'https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview: [
      'AI is easy to demo and hard to keep honest in production. We build AI features that are measurable, safe, and genuinely useful — not a chatbot that hallucinates your support policy to a frustrated customer.',
      'Our work spans retrieval-augmented assistants that answer from your real knowledge base, document intelligence that extracts structure from invoices and contracts, and automation agents that handle repetitive workflows with human oversight.',
      'Every feature ships with an eval set, guardrails on inputs and outputs, and a kill switch. If the model drifts or feedback dips, we roll back in minutes. That is what turns a neat demo into something a business can depend on.',
    ],
    process: [
      { icon: Search, title: 'Use-case fit', desc: 'We identify where AI genuinely helps vs. where deterministic code is better.' },
      { icon: Bot, title: 'Build', desc: 'RAG pipelines, orchestration, and guardrails — not just a prompt wrapper.' },
      { icon: Gauge, title: 'Evals', desc: 'Golden and adversarial test sets run on every change before release.' },
      { icon: Rocket, title: 'Ship safely', desc: 'Feature flags, logging, and rollback so AI never surprises you.' },
    ],
    capabilities: [
      { icon: Bot, title: 'Copilots & chatbots', desc: 'Assistants grounded in your data, not the open internet.' },
      { icon: FileText, title: 'Document intelligence', desc: 'Extract structured data from invoices, contracts, and forms.' },
      { icon: BrainCircuit, title: 'Recommendation engines', desc: 'Personalization that learns from real behavior, not guesses.' },
      { icon: Workflow, title: 'Automation agents', desc: 'Agents that handle repetitive tasks with human-in-the-loop checks.' },
    ],
    tech: ['OpenAI', 'Anthropic', 'LangChain', 'Pinecone', 'pgvector', 'Python', 'TypeScript', 'LangSmith', 'Redis', 'AWS'],
    faqs: [
      { q: 'How do you prevent hallucinations?', a: 'We ground every response in retrieved context from your data, cite sources, and add guardrails that classify outputs. When confidence is low, the system says so or falls back to a human — it never guesses confidently.' },
      { q: 'Is our data used to train models?', a: 'No. We use enterprise APIs with zero data-retention agreements, and for sensitive workloads we deploy open-source models in your own VPC. Your data never leaves your control.' },
      { q: 'How do you measure AI quality?', a: 'Every feature has an eval set: golden examples for the happy path, adversarial cases for injection and PII, and regression cases from real tickets. We run them on every change and track accuracy over time.' },
    ],
  },
  {
    slug: 'product-design',
    icon: PenTool,
    title: 'UI/UX & Product Design',
    short: 'UI/UX & Product',
    blurb:
      'Research-led design that turns complex flows into intuitive interfaces — accessible, on-brand, and conversion-focused.',
    bullets: ['Discovery & research', 'Design systems', 'Prototype to production'],
    deliverables: ['UX research', 'Wireframes & prototypes', 'Design systems', 'Usability testing'],
    heroImage: 'https://images.pexels.com/photos/6803554/pexels-photo-6803554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview: [
      'Great design is invisible. When a user finishes a task without thinking about the interface, that is the result of research, prototyping, and iteration — not luck. We design products that feel obvious because the work was done to make them so.',
      'Our process starts with users, not screens. We run discovery interviews, map workflows, and identify the friction points that matter. From there, we build prototypes, test them with real people, and iterate until the interface is clear.',
      'Every product ships with a design system — a living library of components, tokens, and patterns that keeps the product consistent as it grows and lets engineers build new screens without a designer in the room.',
    ],
    process: [
      { icon: Search, title: 'Research', desc: 'Interviews, journey maps, and competitive analysis to find real problems.' },
      { icon: Design, title: 'Prototype', desc: 'Interactive prototypes tested with real users before any code.' },
      { icon: Layers, title: 'Design system', desc: 'Tokens and components that scale with the product.' },
      { icon: Gauge, title: 'Test & iterate', desc: 'Usability testing and analytics-driven refinement post-launch.' },
    ],
    capabilities: [
      { icon: Search, title: 'UX research', desc: 'Interviews, surveys, and usability tests that ground decisions in evidence.' },
      { icon: Design, title: 'Wireframes & prototypes', desc: 'Clickable prototypes that validate flows before engineering.' },
      { icon: Layers, title: 'Design systems', desc: 'Component libraries and tokens maintained like code.' },
      { icon: Users, title: 'Accessibility', desc: 'WCAG-aligned design that works for every user, every screen.' },
    ],
    tech: ['Figma', 'Framer', 'Storybook', 'Tailwind', 'Radix UI', 'React Aria', 'Lottie', 'Maze', 'Hotjar'],
    faqs: [
      { q: 'Do you design and build, or just design?', a: 'Both. We can hand off finished Figma files, but most engagements include our engineers building the design system into production React components — closing the gap between design and code.' },
      { q: 'Can you work with our existing brand?', a: 'Absolutely. We adapt to your brand guidelines, extract tokens from existing assets, and build a system that feels like your company, not ours.' },
      { q: 'How do you handle accessibility?', a: 'We design to WCAG 2.1 AA from the start — color contrast, focus management, semantic structure, and keyboard navigation. We test with screen readers before shipping.' },
    ],
  },
  {
    slug: 'devops-security',
    icon: ShieldCheck,
    title: 'DevOps & Security',
    short: 'DevOps & Security',
    blurb:
      'Hardened delivery pipelines and proactive security reviews — SOC 2-aligned controls, secrets management, and audit-ready logging.',
    bullets: ['CI/CD automation', 'Threat modeling', 'SOC 2-aligned'],
    deliverables: ['Pipeline automation', 'Security audits', 'Compliance support', 'Cost optimization'],
    heroImage: 'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    overview: [
      'Speed and security are not opposites — they are products of the same engineering discipline. We build delivery pipelines that ship code safely dozens of times a day, with security checks built in rather than bolted on.',
      'Our security practice is SOC 2-aligned and pragmatic. We threat-model your architecture, audit your code and infrastructure, and remediate findings with clear severity ratings. We do not hand you a 200-page report and disappear.',
      'For compliance, we map controls to SOC 2, ISO 27001, and HIPAA requirements, set up audit-ready logging, and help you through the evidence collection that makes certifications achievable instead of agonizing.',
    ],
    process: [
      { icon: Search, title: 'Threat model', desc: 'We map your attack surface and rank risks by likelihood and impact.' },
      { icon: Lock, title: 'Harden', desc: 'Secrets management, least-privilege access, and dependency scanning.' },
      { icon: GitBranch, title: 'Automate', desc: 'CI/CD with security gates, signed builds, and automatic rollbacks.' },
      { icon: ShieldCheck, title: 'Audit', desc: 'Audit-ready logging and evidence collection for compliance.' },
    ],
    capabilities: [
      { icon: GitBranch, title: 'CI/CD automation', desc: 'Pipelines with tests, scans, and one-click rollbacks.' },
      { icon: Lock, title: 'Security audits', desc: 'Code, infra, and dependency reviews with prioritized fixes.' },
      { icon: ShieldCheck, title: 'Compliance', desc: 'SOC 2, ISO 27001, and HIPAA control mapping and evidence.' },
      { icon: Gauge, title: 'Cost optimization', desc: 'Right-sizing and autoscaling that cuts spend without cutting perf.' },
    ],
    tech: ['GitHub Actions', 'GitLab CI', 'Terraform', 'Vault', 'AWS', 'Docker', 'Kubernetes', 'Snyk', 'Datadog', 'OpenTelemetry'],
    faqs: [
      { q: 'Can you help us get SOC 2 certified?', a: 'Yes. We map your current controls to SOC 2 criteria, implement gaps, set up audit logging, and work with your auditor to provide evidence. We have taken clients through Type I and Type II.' },
      { q: 'Do you do penetration testing?', a: 'We do internal security reviews and remediation. For formal pentest reports, we partner with certified third-party firms and then fix everything they find.' },
      { q: 'How often should we review security?', a: 'We recommend a full audit annually and continuous automated scanning (dependencies, secrets, SAST) in CI. Critical findings are remediated within days, not quarters.' },
    ],
  },
];

export type Capability = { icon: LucideIcon; label: string };

export const techStack: { group: string; items: Capability[] }[] = [
  {
    group: 'Frontend',
    items: [
      { icon: LayoutDashboard, label: 'React' },
      { icon: LayoutDashboard, label: 'Next.js' },
      { icon: LayoutDashboard, label: 'TypeScript' },
      { icon: LayoutDashboard, label: 'Tailwind' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { icon: Workflow, label: 'Node.js' },
      { icon: Workflow, label: 'Python' },
      { icon: Workflow, label: 'Go' },
      { icon: Workflow, label: 'GraphQL' },
    ],
  },
  {
    group: 'Data & Cloud',
    items: [
      { icon: Boxes, label: 'PostgreSQL' },
      { icon: Cloud, label: 'AWS' },
      { icon: Globe, label: 'Supabase' },
      { icon: Cpu, label: 'Kubernetes' },
    ],
  },
  {
    group: 'AI & Intelligence',
    items: [
      { icon: BrainCircuit, label: 'OpenAI' },
      { icon: LineChart, label: 'Vector DBs' },
      { icon: ShieldCheck, label: 'Evals' },
      { icon: Cpu, label: 'LangChain' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
