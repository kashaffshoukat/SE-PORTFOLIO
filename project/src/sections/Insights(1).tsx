import { useMemo, useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { articles, articleCategories, type Article } from '@/data/insights';
import { Reveal, SectionHeading } from '@/components/ui';

export function Insights({ limit }: { limit?: number }) {
  const [active, setActive] = useState<'All' | Article['category']>('All');
  const filtered = useMemo(
    () => (active === 'All' ? articles : articles.filter((a) => a.category === active)),
    [active]
  );
  const shown = limit ? filtered.slice(0, limit) : filtered;
  const featured = articles[0];

  return (
    <section id="insights" className="bg-navy-50/40 py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Thinking from the engineering team"
            subtitle="Practical write-ups on shipping software, scaling platforms, and making AI genuinely useful in production."
          />
          <a
            href="#/insights"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-600 text-navy-700 transition-colors hover:text-navy-900"
          >
            Read all articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-600 transition-all ${
                active === cat
                  ? 'bg-navy-900 text-white shadow-navy'
                  : 'bg-white text-navy-600 ring-1 ring-navy-100 hover:bg-navy-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured */}
        {!limit && (
          <Reveal>
            <a
              href={`#/insights/${featured.slug}`}
              className="group mt-10 grid overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all hover:shadow-navy-lg md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-600 text-white">Featured</span>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-600 text-navy-600">{featured.category}</span>
                </div>
                <h3 className="mt-5 text-2xl font-700 leading-snug text-navy-900 group-hover:text-navy-800">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs font-500 text-navy-400">
                  <span>{featured.author}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                </div>
              </div>
              <div className="relative min-h-[220px] bg-navy-900">
                <div className="absolute inset-0 bg-grid-navy opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <pre className="max-w-md rounded-xl bg-navy-950/80 p-5 font-mono text-xs leading-relaxed text-navy-100 ring-1 ring-white/10">
{`> nexavera ship --feature ai
  ✓ evals passed (42/42)
  ✓ guardrails active
  ✓ rollback armed
  → deployed to production`}
                  </pre>
                </div>
              </div>
            </a>
          </Reveal>
        )}

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((article, i) => (
            <Reveal key={article.slug} delay={i * 70}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={`#/insights/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-600 text-navy-600">
          {article.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-500 text-navy-400">
          <Clock className="h-3.5 w-3.5" /> {article.readTime}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-700 leading-snug text-navy-900 group-hover:text-navy-800">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">{article.excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-5">
        <span className="text-xs font-600 text-navy-500">{article.author}</span>
        <span className="inline-flex items-center gap-1 text-sm font-600 text-navy-900">
          Read
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}
