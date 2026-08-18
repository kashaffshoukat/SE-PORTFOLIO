import { useMemo, useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { projects, projectCategories, type ProjectCategory } from '@/data/portfolio';
import { Reveal, SectionHeading } from '@/components/ui';

export function Portfolio({ limit }: { limit?: number }) {
  const [active, setActive] = useState<'All' | ProjectCategory>('All');

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );
  const shown = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="work" className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Outcomes, not just deliverables</>}
            subtitle="A look at platforms we've shipped across fintech, healthcare, commerce, logistics, and SaaS — each built to perform under real-world load."
          />
          <a
            href="#/work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-600 text-navy-700 transition-colors hover:text-navy-900"
          >
            View all case studies
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-600 transition-all ${
                active === cat
                  ? 'bg-navy-900 text-white shadow-navy'
                  : 'bg-navy-50 text-navy-600 hover:bg-navy-100 hover:text-navy-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((project, i) => (
            <Reveal key={project.id} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-600 text-navy-900">
            {project.category}
          </span>
          <span className="rounded-full bg-navy-900/70 px-3 py-1 text-xs font-600 text-white backdrop-blur">
            {project.service}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-600 uppercase tracking-wider text-white/80">{project.client}</p>
          <h3 className="mt-1 text-lg font-700 text-white">{project.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-navy-600">{project.blurb}</p>

        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-navy-100 pt-5">
          {project.results.map((r) => (
            <div key={r.label}>
              <div className="flex items-center gap-1 text-navy-900">
                <TrendingUp className="h-3.5 w-3.5 text-accent-600" />
                <span className="text-base font-800">{r.value}</span>
              </div>
              <p className="mt-0.5 text-[11px] leading-tight text-navy-500">{r.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-navy-50 px-2.5 py-1 text-xs font-500 text-navy-600">
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-600 text-navy-900">
          Read case study
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}
