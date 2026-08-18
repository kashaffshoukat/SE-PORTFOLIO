import { Hero } from '@/sections/Hero';
import { TrustBar } from '@/sections/TrustBar';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { TechStack } from '@/sections/TechStack';
import { About } from '@/sections/About';
import { WorkProcess } from '@/components/WorkProcess'; // <-- Import your new component here
import { ProjectEstimator } from '@/sections/ProjectEstimator';
import { Insights } from '@/sections/Insights';
import { Contact } from '@/sections/Contact';
import { CTABanner } from '@/sections/CTABanner';
import { ClientLogos } from '@/sections/ClientLogos';

export function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio limit={4} />
      <ClientLogos />
      <TechStack />
      <About />
      <WorkProcess /> 
      <ProjectEstimator />
      <Insights limit={3} />
      <CTABanner />
      <Contact />
    </main>
  );
}