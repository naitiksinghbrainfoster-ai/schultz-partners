export default function StatsSection() {
  return (
    <section className="relative z-10 w-full bg-[#f3f1eb] px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-2xl border border-brand-border/80 bg-white p-4 shadow-[0_15px_40px_-5px_rgba(10,25,47,0.12)] sm:px-8 sm:py-6">
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:grid-cols-4">
            <div className="stat-card-shimmer group flex cursor-default flex-col items-center rounded-xl px-2 py-1 text-center transition-all duration-300 hover:bg-brand-offwhite/50 sm:items-start sm:text-left">
              <div className="flex items-baseline font-serif text-2xl font-bold leading-none tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                <span className="counter-number" data-target={25}>25</span>
                <span className="font-serif text-brand-gold">+</span>
              </div>
              <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy sm:text-xs">JAHRE EXPERTISE</div>
              <div className="truncate text-[10px] text-brand-muted sm:text-[11px]">Hanseatische Tradition</div>
            </div>
            <div className="stat-card-shimmer group flex cursor-default flex-col items-center rounded-xl border-t border-brand-border/70 px-2 py-1 text-center transition-all duration-300 hover:bg-brand-offwhite/50 sm:items-start sm:border-l sm:border-t-0 sm:pl-6 sm:text-left">
              <div className="flex items-baseline font-serif text-2xl font-bold leading-none tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                <span className="counter-number" data-target={98}>98</span>
                <span className="font-serif text-brand-gold">%</span>
              </div>
              <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy sm:text-xs">BESETZUNGSQUOTE</div>
              <div className="truncate text-[10px] text-brand-muted sm:text-[11px]">Vorstände &amp; C-Level</div>
            </div>
            <div className="stat-card-shimmer group flex cursor-default flex-col items-center rounded-xl border-t border-brand-border/70 px-2 py-1 text-center transition-all duration-300 hover:bg-brand-offwhite/50 sm:items-start sm:text-left lg:border-l lg:border-t-0 lg:pl-6">
              <div className="flex items-baseline font-serif text-2xl font-bold leading-none tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                <span className="counter-number" data-target={350}>350</span>
                <span className="font-serif text-brand-gold">+</span>
              </div>
              <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy sm:text-xs">MANDATE &amp; PMI</div>
              <div className="truncate text-[10px] text-brand-muted sm:text-[11px]">Erfolgreiche Projekte</div>
            </div>
            <div className="stat-card-shimmer group flex cursor-default flex-col items-center rounded-xl border-t border-brand-border/70 px-2 py-1 text-center transition-all duration-300 hover:bg-brand-offwhite/50 sm:items-start sm:text-left lg:border-l lg:border-t-0 lg:pl-6">
              <div className="flex items-baseline font-serif text-2xl font-bold leading-none tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                <span className="counter-number" data-target={100}>100</span>
                <span className="font-serif text-brand-gold">%</span>
              </div>
              <div className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-navy sm:text-xs">INHABERGEFÜHRT</div>
              <div className="truncate text-[10px] text-brand-muted sm:text-[11px]">Persönliche Partnerführung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
