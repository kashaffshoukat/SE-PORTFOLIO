import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui';

export function CTABanner() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-14 text-center text-white sm:px-12 lg:py-20">
            <div className="absolute inset-0 bg-grid-navy opacity-50" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent-800/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-navy-700/30 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-800 leading-tight sm:text-4xl lg:text-[2.75rem]">
                Have a project in mind? Let's scope it together.
              </h2>
              <p className="mt-5 text-pretty text-lg text-navy-200">
                Free 30-minute consultation. No pressure, no jargon — just a clear picture of what
                it takes to build what you have in mind.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-700 text-navy-900 transition-all hover:bg-navy-50 hover:shadow-navy-lg"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-600 text-white ring-1 ring-white/20 transition-all hover:bg-white/5"
                >
                  Explore our work
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
