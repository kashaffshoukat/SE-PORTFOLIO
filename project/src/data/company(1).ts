export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Nexavera shipped our payments platform ahead of schedule and stayed on through launch. Their architecture decisions saved us months of rework and a painful migration.',
    name: 'Hassan Al-Rumaihi',
    role: 'CTO',
    company: 'FawriPay',
    initials: 'HA',
  },
  {
    quote:
      'The team understood our clinical workflows from day one. The telehealth suite is now the backbone of how 340+ clinics operate across the GCC.',
    name: 'Dr. Aisha Mahmoud',
    role: 'Medical Director',
    company: 'MedLink Gulf',
    initials: 'AM',
  },
  {
    quote:
      'They treat our roadmap like their own. From discovery to delivery, the communication was clear, the estimates were honest, and the product held up under real load.',
    name: 'Bilal Siddiqui',
    role: 'Founder & CEO',
    company: 'Bazaarnow',
    initials: 'BS',
  },
  {
    quote:
      'Their AI copilot cut our first-response time in half and actually improved CSAT. The evals work they did behind the scenes made it trustworthy enough to ship.',
    name: 'Lena Fischer',
    role: 'VP Support',
    company: 'Helix SaaS',
    initials: 'LF',
  },
  {
    quote:
      'We brought them in for a cloud migration and they left us with a platform we can actually run ourselves. Documentation, observability, the works.',
    name: 'Omar Khalid',
    role: 'Head of Engineering',
    company: 'TransGulf',
    initials: 'OK',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  location: string;
};

export const team: TeamMember[] = [
  {
    name: 'Zain Raza',
    role: 'Founder & CEO',
    bio: 'Ex-platform lead with 14 years across fintech and logistics. Sets technical direction and partners with clients on roadmap.',
    initials: 'ZR',
    location: 'Lahore, PK',
  },
  {
    name: 'Mariam Al-Subaie',
    role: 'Co-founder & COO',
    bio: 'Operations and delivery lead in Doha. Runs engagements end-to-end and keeps quality, security, and timeline in lockstep.',
    initials: 'MS',
    location: 'Doha, QA',
  },
  {
    name: 'Usman Tariq',
    role: 'Principal Engineer',
    bio: 'Distributed systems specialist. Architect behind the ledger and event-driven platforms in our portfolio.',
    initials: 'UT',
    location: 'Islamabad, PK',
  },
  {
    name: 'Sara Nadeem',
    role: 'Head of Design',
    bio: 'Research-led product designer. Builds the design systems and accessibility standards every Nexavera product ships with.',
    initials: 'SN',
    location: 'Karachi, PK',
  },
  {
    name: 'Fahad Al-Hajri',
    role: 'Cloud & Security Lead',
    bio: 'Leads cloud architecture and SOC 2-aligned security practice across all client engagements in the Gulf region.',
    initials: 'FH',
    location: 'Doha, QA',
  },
  {
    name: 'Ibrahim Khan',
    role: 'AI Engineering Lead',
    bio: 'Builds retrieval, evals, and agent systems. Makes sure AI features are measurable, safe, and genuinely useful in production.',
    initials: 'IK',
    location: 'Lahore, PK',
  },
];

export const partners = ['AWS', 'Microsoft', 'Stripe', 'Supabase', 'Google Cloud', 'Vercel'];

export type Client = {
  name: string;
  industry: string;
  initials: string;
  /** Set to a URL once you have the real logo image. Leave empty to show a styled initials badge. */
  logoUrl?: string;
  projectSlug?: string;
};

export const clients: Client[] = [
  { name: 'FawriPay', industry: 'Fintech', initials: 'FP', projectSlug: 'cross-border-payments' },
  { name: 'MedLink Gulf', industry: 'Healthcare', initials: 'ML', projectSlug: 'telehealth-consultation-suite' },
  { name: 'Bazaarnow', industry: 'E-commerce', initials: 'BN', projectSlug: 'headless-commerce-storefront' },
  { name: 'TransGulf', industry: 'Logistics', initials: 'TG', projectSlug: 'logistics-orchestration' },
  { name: 'Helix SaaS', industry: 'SaaS', initials: 'HX', projectSlug: 'ai-support-copilot' },
  { name: 'Meridian Capital', industry: 'Fintech', initials: 'MC', projectSlug: 'wealth-advisory-dashboard' },
  { name: 'Qatar National Tech', industry: 'Government', initials: 'QT' },
  { name: 'Gulf Energy', industry: 'Energy', initials: 'GE' },
  { name: 'Pakware', industry: 'SaaS', initials: 'PW' },
  { name: 'Doha Holdings', industry: 'Real Estate', initials: 'DH' },
  { name: 'Skyline Logistics', industry: 'Logistics', initials: 'SL' },
  { name: 'Nova Health', industry: 'Healthcare', initials: 'NH' },
];

export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [
  { label: 'Products shipped', value: 140, suffix: '+' },
  { label: 'Clients worldwide', value: 60, suffix: '+' },
  { label: 'Engineers & designers', value: 48, suffix: '' },
  { label: 'Avg. client retention', value: 4, suffix: 'yrs' },
];
