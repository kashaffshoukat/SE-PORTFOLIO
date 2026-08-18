import { stats, team } from '@/data/company';
import { Reveal, SectionHeading } from '@/components/ui';
import { useCountUp } from '@/hooks/useReveal';
import { MapPin, TrendingUp, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative bg-navy-50/40 py-24 lg:py-32 overflow-hidden">
      
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        
        {/* Top Header & Core Story */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Nexavera"
              title="A studio built on engineering rigor and honest delivery"
              subtitle="We're a remote-first team led from Lahore and Doha, with elite engineers and designers across Pakistan, the Gulf, and beyond. We partner with founders and enterprises to build software that earns trust — and keeps it."
            />
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-800 border border-navy-100 shadow-sm transition-all hover:border-navy-300">
                <MapPin className="h-4 w-4 text-accent-600" /> Lahore, Pakistan
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-800 border border-navy-100 shadow-sm transition-all hover:border-navy-300">
                <MapPin className="h-4 w-4 text-accent-600" /> Doha, Qatar
              </span>
            </div>
          </div>

          {/* Right Column: Stats & Dynamic Graph Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>

            {/* Professional Analytics / Velocity Insight Card with SVG Graph */}
            <div className="rounded-3xl border border-navy-100 bg-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-navy-900 to-accent-600" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-600">
                    <TrendingUp className="h-3.5 w-3.5" /> Client Delivery Velocity
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mt-1">Sprint Output &amp; Production Reliability</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  99.98% SLA Met
                </span>
              </div>

              {/* Inline Sparkline SVG Chart */}
              <div className="h-28 w-full relative">
                <svg viewBox="0 0 500 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="aboutChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 90 Q 125 40, 250 60 T 500 20 L 500 120 L 0 120 Z"
                    fill="url(#aboutChartGrad)"
                  />
                  <path
                    d="M 0 90 Q 125 40, 250 60 T 500 20"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="250" cy="60" r="5" fill="#0284c7" className="animate-ping" />
                  <circle cx="250" cy="60" r="5" fill="#0284c7" />
                  <circle cx="500" cy="20" r="5" fill="#0284c7" />
                </svg>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-4 border-t border-navy-100 text-xs font-semibold text-navy-500">
                <div>Deployment Speed: <span className="text-navy-900 font-bold block text-sm mt-0.5">2.4x Faster</span></div>
                <div>Code Coverage: <span className="text-navy-900 font-bold block text-sm mt-0.5">94% Avg</span></div>
              </div>
            </div>

          </div>
        </div>

        {/* How We Work Section */}
        <div className="mt-16 rounded-3xl border border-navy-100 bg-white p-8 lg:p-12 shadow-sm">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">Our Protocol</span>
            <h3 className="text-2xl font-bold text-navy-900 mt-1">How we engineer excellence</h3>
            <p className="text-sm text-navy-600 mt-2">No bloated processes or black boxes. Just transparent, high-accountability software development.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Discovery first', d: 'We start with the problem, not the stack. Every engagement opens with focused discovery to de-risk the road ahead.', icon: ShieldCheck },
              { t: 'Senior people, always', d: 'No hand-offs to junior benches. The engineers who scope the work are the ones who build it.', icon: Cpu },
              { t: 'Ship in slices', d: 'We deliver working software every two weeks, so you see real progress and can steer with confidence.', icon: ArrowUpRight },
              { t: 'Owned by you', d: 'Code, infrastructure, and documentation are yours from day one. We build runbooks, not dependencies.', icon: MapPin },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.t} className="group rounded-2xl border border-navy-100 bg-navy-50/40 p-6 transition-all duration-300 hover:border-navy-300 hover:bg-white hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white mb-4 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-base font-bold text-navy-900">{item.t}</p>
                  <p className="mt-2 text-xs leading-relaxed text-navy-600">{item.d}</p>
                </div>
              );
            })}
          </div>
        </div>

       

      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="group rounded-2xl border border-navy-100 bg-white p-5 text-center transition-all duration-300 hover:border-navy-300 hover:shadow-lg hover:-translate-y-0.5">
      <p className="text-3xl font-extrabold text-navy-900 sm:text-4xl tracking-tight">
        <span ref={ref}>{value}</span>
        <span className="text-accent-600">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-navy-500">{stat.label}</p>
    </div>
  );
}