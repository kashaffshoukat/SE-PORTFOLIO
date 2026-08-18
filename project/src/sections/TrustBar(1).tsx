import { partners } from '@/data/company';

export function TrustBar() {
  const items = [...partners, ...partners];
  return (
    <section className="border-y border-navy-100 bg-white py-10">
      <div className="container">
        <p className="text-center text-xs font-600 uppercase tracking-[0.18em] text-navy-400">
          Trusted platforms &amp; partner ecosystems
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {items.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2 text-navy-400"
              >
                <span className="h-2 w-2 rounded-full bg-navy-200" />
                <span className="font-display text-xl font-700 tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
