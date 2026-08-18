import { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '@/data/company';
import { Reveal, SectionHeading } from '@/components/ui';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [count]);

  const active = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-grid-navy opacity-50" />
      <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-accent-800/20 blur-3xl" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Client voices"
          title="What clients say after shipping with us"
          subtitle="We measure success by whether clients come back — and most do. Here's a sample of the feedback we hear."
          light
        />

        <Reveal>
          <div className="mt-12 max-w-4xl">
            <Quote className="h-10 w-10 text-accent-400" />
            <blockquote className="mt-6 text-pretty text-2xl font-500 leading-relaxed sm:text-3xl">
              "{active.quote}"
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-display text-base font-700 ring-1 ring-white/15">
                {active.initials}
              </div>
              <div>
                <p className="font-700">{active.name}</p>
                <p className="text-sm text-navy-300">
                  {active.role}, {active.company}
                </p>
              </div>
              <div className="ml-auto hidden items-center gap-1 sm:flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/20 transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
