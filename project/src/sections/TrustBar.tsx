import { partners } from '@/data/company';

// Infer the type directly from the array items
type Partner = typeof partners[number];

export function TrustBar() {
  const items: Partner[] = [...partners, ...partners];

  return (
    <section className="border-y border-navy-100 bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text Block */}
          <div className="shrink-0 max-w-[240px] text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-navy-900 leading-snug">
              Trusted by 22,000+<br />
              Leading Service Teams
            </p>
          </div>

          {/* Right Scrolling/Flex Logos Area */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-12">
              {items.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex shrink-0 items-center text-navy-900 transition-opacity duration-300 hover:opacity-75"
                >
                  {partner.logo ? (
                    <div className="relative h-16 w-44 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-sans text-xl font-extrabold tracking-tight text-navy-900">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}