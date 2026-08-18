import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
import { CTABanner } from '@/sections/CTABanner';
import { ClientLogos } from '@/sections/ClientLogos';
import { Container, SectionHeading } from '@/components/ui';

export function WorkPage() {
  return (
    <div className="bg-white pt-16 lg:pt-20">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Our work"
            title="Case studies & shipped platforms"
            subtitle="A selection of products we've engineered across fintech, healthcare, e-commerce, logistics, and SaaS — each built to perform under real-world load and measured by business outcomes."
          />
        </Container>
      </header>
      <Portfolio />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
