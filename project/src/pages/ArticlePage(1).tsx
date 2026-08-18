import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { articles } from '@/data/insights';
import { Container } from '@/components/ui';
import { NotFound } from '@/pages/NotFound';

export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="bg-white pt-28 lg:pt-36">
      {/* Header */}
      <header className="border-b border-navy-100 bg-navy-50/40">
        <Container className="py-12 lg:py-16">
          <a
            href="#/insights"
            className="inline-flex items-center gap-1.5 text-sm font-600 text-navy-600 transition-colors hover:text-navy-900"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </a>
          <div className="mt-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-600 text-white">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-500 text-navy-400">
                <Clock className="h-3.5 w-3.5" /> {article.readTime}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-500 text-navy-400">
                <Calendar className="h-3.5 w-3.5" /> {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="mt-5 text-balance text-3xl font-800 leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-navy-600">{article.excerpt}</p>
            <p className="mt-6 text-sm font-600 text-navy-700">By {article.author}</p>
          </div>
        </Container>
      </header>

      {/* Body */}
      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl">
          {article.body.map((para, i) => (
            <p
              key={i}
              className={`text-navy-700 ${i === 0 ? 'text-xl font-500 leading-relaxed text-navy-900' : 'mt-6 text-lg leading-relaxed'}`}
            >
              {para}
            </p>
          ))}

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-navy-950 p-8 text-white">
            <h3 className="text-xl font-700">Want results like this on your project?</h3>
            <p className="mt-2 text-sm text-navy-200">
              Tell us what you're building. We'll reply within one business day.
            </p>
            <a
              href="#/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-700 text-navy-900 transition-all hover:bg-navy-50"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>

      {/* Related */}
      <section className="border-t border-navy-100 bg-navy-50/40 py-16">
        <Container>
          <h2 className="text-2xl font-700 text-navy-900">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <a
                key={r.slug}
                href={`#/insights/${r.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-navy"
              >
                <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-600 text-navy-600 self-start">
                  {r.category}
                </span>
                <h3 className="mt-4 text-base font-700 leading-snug text-navy-900 group-hover:text-navy-800">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{r.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-600 text-navy-900">
                  Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
