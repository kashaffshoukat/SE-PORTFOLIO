import {
  ArrowLeft, ArrowRight, Plus, Minus,
} from 'lucide-react';
import {
  services, getServiceBySlug, type Service,
} from '@/data/services';
import { projects } from '@/data/portfolio';
import { Container, Reveal, SectionHeading } from '@/components/ui';
import { NotFound } from '@/pages/NotFound';
import { CTABanner } from '@/sections/CTABanner';
import { useState } from 'react';

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return <NotFound />;

  const relatedProjects = projects.filter((p) => p.serviceSlug === service.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const Icon = service.icon;

  return (
    <article className="bg-white pt-16 lg:pt-20">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-navy-100 bg-navy-950 text-white">
        <div className="absolute inset-0 bg-grid-navy opacity-50" />
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-accent-800/20 blur-3xl" />
        <Container className="relative py-16 lg:py-24">
          <a
            href="#/services"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-navy-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </a>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <Icon className="h-7 w-7 text-white" />
              </span>
              <h1 className="mt-6 text-balance text-3xl font-800 leading-tight sm:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-navy-200">
                {service.blurb}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-700 text-navy-900 transition-all hover:bg-navy-50"
                >
                  Discuss this service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-600 text-white ring-1 ring-white/20 transition-all hover:bg-white/5"
                >
                  See related work
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Overview */}
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-600 uppercase tracking-[0.18em] text-navy-500">Overview</span>
          <div className="mt-4 space-y-5">
            {service.overview.map((para, i) => (
              <p
                key={i}
                className={i === 0 ? 'text-pretty text-xl font-500 leading-relaxed text-navy-900' : 'text-pretty text-lg leading-relaxed text-navy-700'}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </Container>

      {/* Capabilities */}
      <div className="bg-navy-50/40 py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What we build"
            subtitle="The concrete capabilities within this service area."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.capabilities.map((cap, i) => {
              const CapIcon = cap.icon;
              return (
                <Reveal key={cap.title} delay={i * 70}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <CapIcon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-base font-700 text-navy-900">{cap.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600">{cap.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Process */}
      <Container className="py-16 lg:py-24">
        <SectionHeading
          eyebrow="How we work"
          title="Our process"
          subtitle="A clear, repeatable flow that de-risks every engagement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-navy-100 bg-white p-6">
                  <span className="absolute right-5 top-5 font-display text-4xl font-800 text-navy-100">
                    {i + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <StepIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-700 text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Tech */}
      <div className="bg-navy-50/40 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-navy-500">Tech stack</span>
            <h2 className="mt-4 text-2xl font-700 text-navy-900">Tools we use</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-navy-100 bg-white px-4 py-2 text-sm font-600 text-navy-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQs */}
      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            align="center"
          />
          <div className="mt-10 space-y-3">
            {service.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </Container>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-navy-50/40 py-16 lg:py-24">
          <Container>
            <SectionHeading
              eyebrow="Related work"
              title={`Projects built with ${service.short.toLowerCase()}`}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 70}>
                  <a
                    href={`#/work/${project.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-lg"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-navy-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <p className="text-xs font-600 uppercase tracking-wider text-white/80">{project.client}</p>
                        <h3 className="mt-0.5 text-base font-700 text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="flex-1 text-sm leading-relaxed text-navy-600">{project.blurb}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-600 text-navy-900">
                        Read case study
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Other services */}
      <div className="border-t border-navy-100 bg-navy-50/40 py-16">
        <Container>
          <h2 className="text-2xl font-700 text-navy-900">Explore other services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => {
              const OtherIcon = s.icon;
              return (
                <a
                  key={s.slug}
                  href={`#/services/${s.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-navy-100 bg-white p-5 transition-all hover:border-navy-200 hover:shadow-navy"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <OtherIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-700 text-navy-900">{s.title}</h3>
                    <p className="mt-0.5 truncate text-xs text-navy-500">{s.short}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-navy-300 transition-all group-hover:translate-x-0.5 group-hover:text-navy-700" />
                </a>
              );
            })}
          </div>
        </Container>
      </div>

      <CTABanner />
    </article>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-navy-100 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-base font-700 text-navy-900">{q}</span>
        {open ? <Minus className="h-5 w-5 shrink-0 text-navy-500" /> : <Plus className="h-5 w-5 shrink-0 text-navy-500" />}
      </button>
      {open && (
        <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-navy-600">{a}</p>
      )}
    </div>
  );
}

export function ServicesPage() {
  return (
    <div className="bg-white pt-16 lg:pt-20">
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to build and scale"
            subtitle="From custom software to AI integration, we cover the full product lifecycle. Explore each capability in detail — or talk to us about what combination fits your project."
          />
        </Container>
      </header>
      <Container className="py-16 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
      <CTABanner />
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
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
        <ArrowRight className="h-5 w-5 text-navy-300 transition-all group-hover:text-navy-700 group-hover:translate-x-0.5" />
      </div>
      <h3 className="mt-5 text-xl font-700 text-navy-900">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{service.blurb}</p>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-navy-100 pt-5">
        {service.deliverables.map((d) => (
          <span key={d} className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-500 text-navy-600">
            {d}
          </span>
        ))}
      </div>
    </a>
  );
}
