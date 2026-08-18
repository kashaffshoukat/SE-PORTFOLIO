import { stats, team } from '@/data/company';
import { Reveal, SectionHeading } from '@/components/ui';
import { useCountUp } from '@/hooks/useReveal';
import { MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-navy-50/40 py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Nexavera"
              title="A studio built on engineering rigor and honest delivery"
              subtitle="We're a remote-first team led from Lahore and Doha, with engineers and designers across Pakistan, the Gulf, and beyond. We partner with founders and enterprises to build software that earns trust — and keeps it."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-600 text-navy-800 ring-1 ring-navy-100">
                <MapPin className="h-4 w-4 text-accent-600" /> Lahore, Pakistan
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-600 text-navy-800 ring-1 ring-navy-100">
                <MapPin className="h-4 w-4 text-accent-600" /> Doha, Qatar
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-navy-100 bg-white p-7">
              <h3 className="text-lg font-700 text-navy-900">How we work</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  { t: 'Discovery first', d: 'We start with the problem, not the stack. Every engagement opens with a focused discovery to de-risk the road ahead.' },
                  { t: 'Senior people, always', d: 'No hand-offs to junior benches. The engineers who scope the work are the ones who build it.' },
                  { t: 'Ship in slices', d: 'We deliver working software every two weeks, so you see real progress and can steer with confidence.' },
                  { t: 'Owned by you', d: 'Code, infrastructure, and documentation are yours from day one. We build runbooks, not black boxes.' },
                ].map((item) => (
                  <div key={item.t} className="rounded-xl bg-navy-50/60 p-4">
                    <p className="text-sm font-700 text-navy-900">{item.t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the work"
            subtitle="A core team of engineers, designers, and operators who set the standard on every engagement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 70}>
                <div className="group flex gap-4 rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-navy">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-900 font-display text-lg font-700 text-white">
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-700 text-navy-900">{member.name}</h4>
                    <p className="text-sm font-600 text-accent-700">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600">{member.bio}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-xs font-500 text-navy-400">
                      <MapPin className="h-3.5 w-3.5" /> {member.location}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-5 text-center">
      <p className="text-3xl font-800 text-navy-900 sm:text-4xl">
        <span ref={ref}>{value}</span>
        <span className="text-accent-600">{stat.suffix}</span>
      </p>
      <p className="mt-1.5 text-xs font-600 leading-tight text-navy-500">{stat.label}</p>
    </div>
  );
}
