export function ClientLogos() {
  return (
    <section className="bg-white py-16 lg:py-24 border-y border-navy-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Main Wrapper */}
        <div className="rounded-3xl border border-navy-200/80 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Business Growth &amp; OPEX Breakdown
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Business revenue bar graph with OPEX details
            </h2>
            <p className="text-xs sm:text-sm text-navy-300 mt-2.5 leading-relaxed">
              This interactive model illustrates how our strategic engineering and optimization solutions scale your total revenue while efficiently managing operational expenditures across Marketing &amp; Sales, R&amp;D, and Administration.
            </p>
          </div>

          {/* Core Layout: Responsive Grid (Chart on Left/Center, Key Insights Sidebar on Right) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Chart Area (Span 8 on Large Screens) */}
            <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-navy-800/80 bg-navy-950/60 p-5 sm:p-8 backdrop-blur-md">
              
              {/* Top OPEX Range Indicator Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-navy-800/60">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-300">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                  Cost of marketing and sales + R&amp;D + Administration = OPEX
                </div>
                <div className="flex items-center gap-3 text-[11px] font-semibold text-navy-400">
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-navy-700" /> Marketing &amp; Sales</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-cyan-700" /> R&amp;D</span>
                  <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-cyan-400" /> Admin</span>
                </div>
              </div>

              {/* Responsive SVG Bar & Trend Graph */}
              <div className="relative w-full h-72 sm:h-80">
                <svg viewBox="0 0 700 320" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="revenueTrendGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <g stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 3">
                    <line x1="50" y1="40" x2="680" y2="40" />
                    <line x1="50" y1="100" x2="680" y2="100" />
                    <line x1="50" y1="160" x2="680" y2="160" />
                    <line x1="50" y1="220" x2="680" y2="220" />
                    <line x1="50" y1="280" x2="680" y2="280" />
                  </g>

                  {/* Y-Axis Scale Labels */}
                  <g fill="#94a3b8" fontSize="10" fontFamily="sans-serif" textAnchor="end">
                    <text x="42" y="44">1000k$</text>
                    <text x="42" y="104">800k$</text>
                    <text x="42" y="164">600k$</text>
                    <text x="42" y="224">400k$</text>
                    <text x="42" y="284">200k$</text>
                  </g>

                  {/* Stacked Bars Group */}
                  <g transform="translate(70, 0)">
                    {/* Bar 1: Jan 2021 */}
                    <g transform="translate(20, 0)">
                      <rect x="0" y="250" width="36" height="30" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="235" width="36" height="15" fill="#0369a1" />
                      <rect x="0" y="220" width="36" height="15" fill="#38bdf8" rx="2" />
                    </g>

                    {/* Bar 2: Mar 2021 */}
                    <g transform="translate(110, 0)">
                      <rect x="0" y="245" width="36" height="35" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="228" width="36" height="17" fill="#0369a1" />
                      <rect x="0" y="215" width="36" height="13" fill="#38bdf8" rx="2" />
                    </g>

                    {/* Bar 3: May 2021 */}
                    <g transform="translate(200, 0)">
                      <rect x="0" y="245" width="36" height="35" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="228" width="36" height="17" fill="#0369a1" />
                      <rect x="0" y="215" width="36" height="13" fill="#38bdf8" rx="2" />
                    </g>

                    {/* Bar 4: Jul 2021 */}
                    <g transform="translate(290, 0)">
                      <rect x="0" y="230" width="36" height="50" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="208" width="36" height="22" fill="#0369a1" />
                      <rect x="0" y="195" width="36" height="13" fill="#38bdf8" rx="2" />
                    </g>

                    {/* Bar 5: Sep 2021 */}
                    <g transform="translate(380, 0)">
                      <rect x="0" y="210" width="36" height="70" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="185" width="36" height="25" fill="#0369a1" />
                      <rect x="0" y="170" width="36" height="15" fill="#38bdf8" rx="2" />
                    </g>

                    {/* Bar 6: Nov 2021 */}
                    <g transform="translate(470, 0)">
                      <rect x="0" y="150" width="36" height="130" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="130" width="36" height="20" fill="#0369a1" />
                      <rect x="0" y="110" width="36" height="20" fill="#38bdf8" rx="2" />
                    </g>

                    {/* Bar 7: Jul 2022 (Peak) */}
                    <g transform="translate(560, 0)">
                      <rect x="0" y="90" width="36" height="190" fill="#1e3a8a" rx="2" />
                      <rect x="0" y="70" width="36" height="20" fill="#0369a1" />
                      <rect x="0" y="55" width="36" height="15" fill="#38bdf8" rx="2" />
                    </g>
                  </g>

                  {/* Total Revenue Trend Area & Curve */}
                  <path
                    d="M 108 225 Q 280 215, 370 210 T 550 120 T 640 55 L 640 280 L 108 280 Z"
                    fill="url(#revenueTrendGrad)"
                  />
                  <path
                    d="M 108 225 Q 280 215, 370 210 T 550 120 T 640 55"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Trend Data Nodes */}
                  <circle cx="108" cy="225" r="4" fill="#38bdf8" />
                  <circle cx="198" cy="220" r="4" fill="#38bdf8" />
                  <circle cx="288" cy="215" r="4" fill="#38bdf8" />
                  <circle cx="378" cy="210" r="4" fill="#38bdf8" />
                  <circle cx="468" cy="175" r="4" fill="#38bdf8" />
                  <circle cx="558" cy="120" r="4" fill="#38bdf8" />
                  <circle cx="648" cy="55" r="6" fill="#34d399" className="animate-ping" />
                  <circle cx="648" cy="55" r="6" fill="#34d399" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>

              {/* X-Axis Labels */}
              <div className="grid grid-cols-7 text-center text-[10px] sm:text-xs font-semibold text-navy-400 pt-4 mt-2 border-t border-navy-800/60">
                <span>Jan 2021</span>
                <span>Mar 2021</span>
                <span>Jul 2021</span>
                <span>Oct 2021</span>
                <span>Jan 2021</span>
                <span>Apr 2021</span>
                <span>Jul 2022</span>
              </div>

              {/* Legend & Note */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-navy-900 text-[11px] text-navy-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-navy-800" /> Marketing &amp; sales</span>
                  <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-cyan-800" /> R&amp;D</span>
                  <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-cyan-400" /> Administration</span>
                  <span className="flex items-center gap-1.5"><span className="h-0.5 w-4 bg-cyan-400" /> Total revenue</span>
                </div>
                <span className="italic text-navy-500">Live synchronized with enterprise analytics engine.</span>
              </div>
            </div>

            {/* Key Insights Sidebar (Span 4 on Large Screens) */}
            <div className="lg:col-span-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-navy-900/90 to-navy-950 p-6 flex flex-col justify-between shadow-xl">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-navy-800">
                  <h3 className="text-sm font-extrabold uppercase tracking-widest text-cyan-400">Key insights</h3>
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Insight List */}
                <div className="space-y-4 text-xs sm:text-sm text-navy-200">
                  <div className="flex items-start gap-3 rounded-xl bg-navy-900/90 p-3.5 border border-navy-800 transition-all hover:border-cyan-500/50">
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-cyan-400 mt-1.5" />
                    <p className="leading-relaxed">
                      <strong className="text-white block mb-0.5">Peak Performance</strong>
                      In July 2022, highest amount of revenue was recorded at <strong className="text-cyan-400">$900,000</strong> following automated scaling.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-navy-900/50 p-3.5 border border-navy-800/80">
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-navy-500 mt-1.5" />
                    <p className="text-navy-300 leading-relaxed">
                      <strong className="text-white block mb-0.5">OPEX Efficiency</strong>
                      Strategic R&amp;D allocation streamlined overhead by 24% while accelerating product delivery.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl bg-navy-900/50 p-3.5 border border-navy-800/80">
                    <span className="flex h-2 w-2 shrink-0 rounded-full bg-navy-500 mt-1.5" />
                    <p className="text-navy-300 leading-relaxed">
                      <strong className="text-white block mb-0.5">Accelerated ROI</strong>
                      Consistent quarterly expansion yields a 3.5x average return on client technology investments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Trust Badge */}
              <div className="mt-6 pt-4 border-t border-navy-800 flex items-center justify-between text-[11px] text-navy-400 font-semibold">
                <span>CONFIDENTIAL &amp; SECURE</span>
                <span className="text-emerald-400">VERIFIED METRICS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}