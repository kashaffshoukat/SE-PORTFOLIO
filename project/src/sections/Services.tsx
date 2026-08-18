import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { services } from '@/data/services';
import { Reveal, SectionHeading } from '@/components/ui';

export function Services() {
  return (
    <section id="services" className="relative bg-white py-16 lg:py-24 border-y border-navy-100 overflow-hidden">
      
      {/* Background Tech Grid Lines for High-End Engineering Look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end mb-16">
          <SectionHeading
            eyebrow="What we do"
            title={<>Capabilities that ship — and last</>}
            subtitle="From a greenfield idea to a platform millions rely on, we cover the full product lifecycle with senior engineers and designers on every engagement."
          />
          <a
            href="#/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-xl hover:-translate-y-0.5"
          >
            Talk to a strategist
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Workflow Connection Layout container with alternating Navy & White cards */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {services.map((service, i) => {
            // Alternate card styling: some deep navy contrast cards, some clean white cards
            const isNavyCard = i % 2 === 1; 

            return (
              <Reveal key={service.slug} delay={i * 70}>
                <div className="relative h-full">
                  
                  {/* Decorative Dotted Curved Connecting Flow Line (visible on desktop layouts between cards) */}
                  {i < services.count - 1 && (
                    <div className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-12 pointer-events-none z-20 overflow-visible">
                      <svg viewBox="0 0 30 50" className="w-full h-full overflow-visible">
                        <path
                          d="M 0 25 Q 15 0, 30 25"
                          fill="none"
                          stroke="#0284c7"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="opacity-60 animate-pulse"
                        />
                        <polygon points="26,22 32,25 26,28" fill="#0284c7" />
                      </svg>
                    </div>
                  )}

                  <ServiceCard service={service} isNavyCard={isNavyCard} index={i} />
                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, isNavyCard, index }: { service: (typeof services)[number]; isNavyCard: boolean; index: number }) {
  const Icon = service.icon;

  return (
    <a
      href={`#/services/${service.slug}`}
      className={`group relative flex h-full flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
        isNavyCard
          ? 'bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white border border-navy-800 shadow-xl'
          : 'bg-white text-navy-900 border border-navy-200/80 shadow-md hover:border-cyan-500/50'
      }`}
    >
      {/* Top Phase Tag & Icon */}
      <div className="flex items-center justify-between mb-6">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-md ${
          isNavyCard ? 'bg-cyan-500 text-navy-950 font-bold' : 'bg-navy-900 text-white'
        }`}>
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex items-center gap-2">
          <span className={`text-[11px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
            isNavyCard ? 'bg-navy-800 text-cyan-400 border border-navy-700' : 'bg-navy-50 text-navy-500 border border-navy-100'
          }`}>
            Phase 0{index + 1}
          </span>
          <ArrowUpRight className={`h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            isNavyCard ? 'text-cyan-400' : 'text-navy-400 group-hover:text-navy-900'
          }`} />
        </div>
      </div>

      <h3 className={`text-xl font-bold tracking-tight ${isNavyCard ? 'text-white' : 'text-navy-900'}`}>
        {service.title}
      </h3>
      
      <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isNavyCard ? 'text-navy-300' : 'text-navy-600'}`}>
        {service.blurb}
      </p>

      {/* Checklist items */}
      <ul className="mt-6 space-y-2.5 flex-1">
        {service.bullets.map((b) => (
          <li key={b} className={`flex items-start gap-2.5 text-xs sm:text-sm ${isNavyCard ? 'text-navy-200' : 'text-navy-700'}`}>
            <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
              isNavyCard ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
            }`}>
              <Check className="h-3 w-3" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Deliverables / Tech Stack Badges */}
      <div className={`mt-6 flex flex-wrap gap-1.5 border-t pt-5 ${isNavyCard ? 'border-navy-800/80' : 'border-navy-100'}`}>
        {service.deliverables.map((d) => (
          <span
            key={d}
            className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-colors ${
              isNavyCard
                ? 'bg-navy-800/80 text-cyan-300 border border-navy-700/50'
                : 'bg-navy-50 text-navy-600 border border-navy-100'
            }`}
          >
            {d}
          </span>
        ))}
      </div>

      {/* Bottom Action Link */}
      <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
        isNavyCard ? 'border-navy-800/80 text-cyan-400' : 'border-navy-100 text-navy-900'
      }`}>
        <span className="flex items-center gap-1.5 group-hover:underline">
          <Sparkles className="h-3.5 w-3.5" /> Explore capabilities
        </span>
        <span className="font-mono text-[10px] opacity-70">SECURE SLA</span>
      </div>
    </a>
  );
}