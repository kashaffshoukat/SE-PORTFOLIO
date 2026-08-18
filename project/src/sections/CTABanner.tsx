import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui';

export function CTABanner() {
  return (
    <section className="bg-white py-8 lg:py-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 px-8 py-16 text-center text-white sm:px-12 lg:py-24 border border-navy-800 shadow-2xl">
            
            {/* Background Tech Grid Lines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Glowing Animated Ambient Background Spheres */}
            <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Subtle Analytics Growth Wave Graphic Header */}
            <div className="relative mx-auto max-w-3xl z-10">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Scale Your Digital Infrastructure</span>
              </div>

              <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem] tracking-tight">
                Have a project in mind? <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white">Let's scale it together.</span>
              </h2>

              <p className="mt-5 text-pretty text-base sm:text-lg text-navy-200 max-w-2xl mx-auto leading-relaxed">
                Free 30-minute technical consultation. No pressure, no jargon — just a clear, data-driven picture of what it takes to build and launch your product.
              </p>

              {/* Analytical Sparkline Graphic Accent */}
              <div className="my-8 h-16 w-full max-w-md mx-auto relative opacity-75">
                <svg viewBox="0 0 400 60" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="ctaChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 50 Q 100 20, 200 30 T 400 5 L 400 60 L 0 60 Z"
                    fill="url(#ctaChartGrad)"
                  />
                  <path
                    d="M 0 50 Q 100 20, 200 30 T 400 5"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="30" r="4" fill="#22d3ee" className="animate-ping" />
                  <circle cx="200" cy="30" r="4" fill="#22d3ee" />
                  <circle cx="400" cy="5" r="4" fill="#22d3ee" />
                </svg>
              </div>

              {/* Action Buttons */}
              <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-navy-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4 text-navy-950" />
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
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