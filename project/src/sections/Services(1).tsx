import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/data/services';
import { Reveal, SectionHeading } from '@/components/ui';

export function Services() {
  return (
    <section id="services" className="bg-navy-50/40 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<>Capabilities that ship — and last</>}
            subtitle="From a greenfield idea to a platform millions rely on, we cover the full product lifecycle with senior engineers and designers on every engagement."
          />
          <a
            href="#/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-600 text-white transition-all hover:bg-navy-800 hover:shadow-navy"
          >
            Talk to a strategist
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;
  return (
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

      <div className="mt-6 flex flex-wrap gap-2 border-t border-navy-100 pt-5">
        {service.deliverables.map((d) => (
          <span
            key={d}
            className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-500 text-navy-600"
          >
            {d}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-600 text-navy-900">
        Explore service
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}
