import { techStack } from '@/data/services';
import { Reveal, SectionHeading } from '@/components/ui';

export function TechStack() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Tech stack"
          title="Modern tools, engineered with maturity"
          subtitle="We work across the stack with frameworks, languages, and cloud platforms trusted by the world's most demanding engineering teams."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div className="rounded-2xl border border-navy-100 bg-navy-50/40 p-6">
                <h3 className="text-xs font-600 uppercase tracking-[0.16em] text-navy-500">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 ring-1 ring-navy-100 transition-all hover:ring-navy-200">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-600 text-navy-800">{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
