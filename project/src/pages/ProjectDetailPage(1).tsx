import {
  ArrowLeft, ArrowRight, TrendingUp, Quote, Tag,
  Clock, Users, Calendar,
  Layers, ShieldCheck, Globe, Gauge, Smartphone, Lock,
  LineChart, Workflow, Cpu, Server, BrainCircuit, Search,
  PenTool as Design,
} from 'lucide-react';
import {
  projects, getProjectBySlug, type Project,
} from '@/data/portfolio';
import { Container, Reveal, SectionHeading } from '@/components/ui';
import { NotFound } from '@/pages/NotFound';
import { CTABanner } from '@/sections/CTABanner';

const approachIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers, ShieldCheck, Globe, Gauge, Smartphone, Lock, Users,
  LineChart, Workflow, Cpu, Server, BrainCircuit, Search, Design,
};

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  if (!project) return <NotFound />;

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);
  const fallbackRelated = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const relatedProjects = related.length > 0 ? related : fallbackRelated;

  return (
    <article className="bg-white pt-16 lg:pt-20">
      {/* Hero with image */}
      <header className="relative">
        <div className="relative h-[420px] overflow-hidden bg-navy-950 lg:h-[520px]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
          <Container className="absolute inset-0 flex flex-col justify-end pb-12">
            <a
              href="#/work"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-600 text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> All work
            </a>
            <div className="mt-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-600 text-navy-900">
                  {project.category}
                </span>
                <span className="rounded-full bg-navy-900/70 px-3 py-1 text-xs font-600 text-white backdrop-blur">
                  {project.service}
                </span>
              </div>
              <h1 className="mt-4 text-balance text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {project.title}
              </h1>
              <p className="mt-3 text-lg font-500 text-white/80">{project.client}</p>
            </div>
          </Container>
        </div>
      </header>

      {/* Summary + results */}
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-600 uppercase tracking-[0.18em] text-navy-500">Summary</span>
            <p className="mt-4 text-pretty text-xl font-500 leading-relaxed text-navy-900">
              {project.blurb}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-md bg-navy-50 px-3 py-1.5 text-xs font-600 text-navy-600"
                >
                  <Tag className="h-3 w-3" /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-6">
              <h3 className="text-xs font-600 uppercase tracking-[0.18em] text-navy-500">Results</h3>
              <div className="mt-5 space-y-5">
                {project.results.map((r) => (
                  <div key={r.label} className="flex items-center justify-between border-b border-navy-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-navy-600">{r.label}</span>
                    <span className="inline-flex items-center gap-1.5 text-2xl font-800 text-navy-900">
                      <TrendingUp className="h-4 w-4 text-accent-600" />
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 border-t border-navy-100 pt-5">
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <Clock className="h-4 w-4 text-navy-400" />
                  <span>Duration: <span className="font-600 text-navy-800">{project.duration}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <Users className="h-4 w-4 text-navy-400" />
                  <span>Team: <span className="font-600 text-navy-800">{project.teamSize}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <Calendar className="h-4 w-4 text-navy-400" />
                  <span>Year: <span className="font-600 text-navy-800">{project.year}</span></span>
                </div>
              </div>
              <a
                href="#/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-700 text-white transition-all hover:bg-navy-800"
              >
                Start a similar project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Challenge + Solution */}
      <div className="bg-navy-50/40 py-16 lg:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-navy-100 bg-white p-8">
                <span className="text-xs font-600 uppercase tracking-[0.18em] text-accent-600">The challenge</span>
                <div className="mt-4 space-y-4">
                  {project.challenge.map((para, i) => (
                    <p key={i} className="text-pretty text-base leading-relaxed text-navy-700">{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-2xl border border-navy-100 bg-white p-8">
                <span className="text-xs font-600 uppercase tracking-[0.18em] text-emerald-600">Our solution</span>
                <div className="mt-4 space-y-4">
                  {project.solution.map((para, i) => (
                    <p key={i} className="text-pretty text-base leading-relaxed text-navy-700">{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <Container className="py-16 lg:py-20">
          <SectionHeading eyebrow="Gallery" title="Inside the build" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="overflow-hidden rounded-2xl border border-navy-100">
                  <img
                    src={img}
                    alt={`${project.title} — view ${i + 1}`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      )}

      {/* Approach */}
      {project.approach.length > 0 && (
        <div className="bg-navy-50/40 py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow="Approach"
              title="How we built it"
              align="center"
            />
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
              {project.approach.map((item, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                      <ApproachIcon name={item.icon} />
                    </span>
                    <div>
                      <h3 className="text-base font-700 text-navy-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <Container className="py-16 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl bg-navy-950 p-8 text-white lg:p-10">
              <Quote className="h-10 w-10 text-accent-400" />
              <blockquote className="mt-6 text-pretty text-2xl font-500 leading-relaxed">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-display text-base font-700 ring-1 ring-white/15">
                  {project.testimonial.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className="font-700">{project.testimonial.name}</p>
                  <p className="text-sm text-navy-300">{project.testimonial.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      )}

      {/* Related projects */}
      <div className="border-t border-navy-100 bg-navy-50/40 py-16">
        <Container>
          <h2 className="text-2xl font-700 text-navy-900">More work like this</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedProjects.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <RelatedCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      <CTABanner />
    </article>
  );
}

function RelatedCard({ project }: { project: Project }) {
  return (
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
  );
}

function ApproachIcon({ name }: { name: string }) {
  const Icon = approachIcons[name];
  if (Icon) return <Icon className="h-5 w-5" />;
  return <span className="text-xs font-700">{name.slice(0, 2)}</span>;
}
