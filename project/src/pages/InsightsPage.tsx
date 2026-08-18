import { Insights } from '@/sections/Insights';
import { CTABanner } from '@/sections/CTABanner';
import { Container, SectionHeading } from '@/components/ui';

export function InsightsPage() {
  return (
    <div className="bg-white pt-16 lg:pt-20">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Insights"
            title="Engineering notes from the team"
            subtitle="Practical, honest write-ups on shipping software, scaling platforms, and making AI genuinely useful in production. No fluff — just what we've learned building for clients."
          />
        </Container>
      </header>
      <Insights />
      <CTABanner />
    </div>
  );
}
