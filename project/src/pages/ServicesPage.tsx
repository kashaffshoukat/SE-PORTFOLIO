import { services } from '@/data/services';
import { Container, SectionHeading, Reveal } from '@/components/ui';
import { CTABanner } from '@/sections/CTABanner';
import { TechStack } from '@/sections/TechStack';
import { ArrowUpRight, Check } from 'lucide-react';

export function ServicesPage() {
  return (
    <div className="bg-white pt-16 lg:pt-20">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to build, ship, and scale"
            subtitle="Six core practices that cover the full product lifecycle — from discovery and design to engineering, cloud, AI, and security. Explore each one in detail."
          />
        </Container>
      </header>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={i * 70}>
                  <a
                    href={`#/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-navy"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-navy-800">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-navy-300 transition-all group-hover:text-navy-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h3 className="mt-5 text-xl font-700 text-navy-900">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">{service.blurb}</p>

                    <ul className="mt-5 space-y-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-navy-700">
                          <Check className="h-4 w-4 shrink-0 text-accent-600" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-1 border-t border-navy-100 pt-5 text-sm font-600 text-navy-900">
                      Explore service
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <TechStack />
      <CTABanner />
    </div>
  );
}
