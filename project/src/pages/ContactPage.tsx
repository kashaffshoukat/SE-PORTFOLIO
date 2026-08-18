import { Contact } from '@/sections/Contact';
import { ProjectEstimator } from '@/sections/ProjectEstimator';
import { Container, SectionHeading } from '@/components/ui';

export function ContactPage() {
  return (
    <div className="bg-white pt-16 lg:pt-20">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation"
            subtitle="Tell us what you're building. We'll get back within one business day with next steps — or use the project estimator below for a rough timeline and budget first."
          />
        </Container>
      </header>
      <ProjectEstimator />
      <Contact />
    </div>
  );
}
