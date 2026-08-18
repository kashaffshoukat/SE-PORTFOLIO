import { ArrowRight, Sparkles, Star, ShieldCheck, Globe2 } from 'lucide-react';
import { Reveal } from '@/components/ui';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-navy opacity-60" />
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-navy-700/30 blur-3xl" />
      <div className="absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-accent-800/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container relative pt-28 pb-10 lg:pt-36 lg:pb-14">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-600 text-navy-100 ring-1 ring-white/10">
                <Sparkles className="h-3.5 w-3.5 text-accent-400" />
                Led from Pakistan &amp; Qatar — serving clients worldwide
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-4xl font-800 leading-[1.05] sm:text-5xl lg:text-6xl">
                Software that <span className="text-accent-400">moves</span> your business forward
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-200">
                We design and engineer custom software, web &amp; mobile apps, cloud platforms,
                and AI integrations — from first wireframe to production and beyond.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-700 text-navy-900 transition-all duration-300 hover:bg-navy-50 hover:shadow-navy-lg"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#/work"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-600 text-white ring-1 ring-white/20 transition-all duration-300 hover:bg-white/5"
                >
                  View Our Work
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-navy-300">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent-400" />
                  SOC 2-aligned delivery
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-accent-400" />
                  60+ clients across 4 continents
                </span>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1.5 border border-amber-500/20 shadow-sm backdrop-blur-sm">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-500 drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-500 drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-500 drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-500 drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse" />
                    <Star className="h-4 w-4 fill-amber-400 text-amber-500 drop-shadow-[0_1px_2px_rgba(251,191,36,0.5)] animate-pulse" />
                  </span>
                  <span className="text-xs font-600 tracking-tight text-white sm:text-sm">
                    <strong className="font-700 text-amber-400">4.9/5</strong> Client Rating
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6">
            <Reveal delay={200}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl lg:max-w-none">
      {/* Floating stats card */}
      <div className="absolute -left-4 top-6 z-20 hidden animate-float rounded-2xl bg-white p-4 text-navy-900 shadow-navy-lg sm:block">
        <p className="text-xs font-600 uppercase tracking-wider text-navy-400">Deploy frequency</p>
        <p className="mt-1 text-2xl font-800">+3.4x</p>
        <div className="mt-2 flex items-end gap-1">
          {[40, 55, 48, 70, 62, 85, 100].map((h, i) => (
            <span key={i} className="w-1.5 rounded-full bg-navy-200" style={{ height: `${h * 0.3}px` }} />
          ))}
        </div>
      </div>

      {/* Main code card */}
      <div className="relative overflow-hidden rounded-2xl bg-navy-900 ring-1 ring-white/10 shadow-navy-lg">
        <div className="flex items-center gap-2 border-b border-white/10 bg-navy-950/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-xs text-navy-300">deploy.platform.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-navy-100">
{`import { deploy } from "@nexavera/platform";

`}<span className="text-accent-300">const</span>{` release = `}<span className="text-accent-300">await</span>{` deploy({
  region: `}<span className="text-emerald-300">"global"</span>{`,
  strategy: `}<span className="text-emerald-300">"blue-green"</span>{`,
  checks: [health, latency, integrity],
  rollback: `}<span className="text-accent-300">true</span>{`,
});

`}<span className="text-navy-400">// shipped in 0.9s · 99.95% uptime</span>{`
log.success(release.url);`}
        </pre>
      </div>

      {/* Floating uptime card */}
      <div
        className="absolute -right-4 bottom-8 z-20 hidden animate-float rounded-2xl bg-white p-4 text-navy-900 shadow-navy-lg sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <ShieldCheck className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-600 uppercase tracking-wider text-navy-400">Uptime</p>
            <p className="text-lg font-800">99.95%</p>
          </div>
        </div>
      </div>
    </div>
  );
}