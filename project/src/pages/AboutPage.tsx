import { About } from '@/sections/About';
import { Testimonials } from '@/sections/Testimonials';
import { CTABanner } from '@/sections/CTABanner';
import { Container, SectionHeading } from '@/components/ui';

export function AboutPage() {
  return (
    <div className="bg-white pt-16 lg:pt-20">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="About us"
            title="Engineering rigor, honest delivery"
            subtitle="Nexavera is a software engineering and digital product studio led from Pakistan and Qatar. We partner with founders and enterprises worldwide to build software that earns trust — and keeps it."
          />
        </Container>
      </header>
      <About />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
