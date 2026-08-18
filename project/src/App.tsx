import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useRouter } from '@/lib/router';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage, ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { WorkPage } from '@/pages/WorkPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicy, TermsOfService } from '@/pages/Legal';

function App() {
  const { route } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {route.name === 'home' && <HomePage />}
      {route.name === 'services' && <ServicesPage />}
      {route.name === 'service' && <ServiceDetailPage slug={route.slug} />}
      {route.name === 'work' && <WorkPage />}
      {route.name === 'project' && <ProjectDetailPage slug={route.slug} />}
      {route.name === 'insights' && <InsightsPage />}
      {route.name === 'article' && <ArticlePage slug={route.slug} />}
      {route.name === 'about' && <AboutPage />}
      {route.name === 'contact' && <ContactPage />}
      {route.name === 'privacy' && <PrivacyPolicy />}
      {route.name === 'terms' && <TermsOfService />}
      <Footer />
    </div>
  );
}

export default App;
