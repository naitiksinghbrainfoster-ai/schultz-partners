export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[540px] sm:min-h-[580px] pt-28 sm:pt-32 pb-10 sm:pb-14 flex flex-col justify-between bg-[#FAFAF8] overflow-visible">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover object-center"
          loop
          muted
          playsInline
          poster="/img/Modern%20Canal-Side%20Office%20Building.png"
          preload="metadata"
          tabIndex={-1}
        >
          <source
            src="/video/Gf7Q9T71TFRKhaSGA3hHasohb6w%20(1).mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/25 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-36 pb-20 sm:pt-40 sm:pb-24">
        <div className="max-w-2xl lg:max-w-3xl space-y-4">
          <div className="space-y-2.5">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-[1.14] tracking-tight font-normal drop-shadow-sm">Hanseatische Klarheit.<br /><span className="italic text-brand-gold">Strategische Exzellenz</span> auf Spitzenebene.</h1>
            <p className="font-serif text-lg sm:text-xl text-brand-gold italic font-normal">„Ihr Erfolg ist unser Ziel.“</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-xl bg-brand-navy hover:bg-brand-slate text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group" href="#kontakt">
              <span>Erstgespräch anfragen</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </a>
            <a className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-white/95 hover:bg-white text-brand-navy border border-brand-border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm" href="#unternehmensberatung">
              <span>Leistungen erkunden</span>
            </a>
          </div>
          <div className="pt-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] z-30 w-full max-w-5xl px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-brand-border/80 shadow-[0_15px_40px_-5px_rgba(10,25,47,0.12)] p-4 sm:py-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
            <div className="stat-card-shimmer group flex flex-col items-center sm:items-start text-center sm:text-left px-2 py-1 rounded-xl transition-all duration-300 hover:bg-brand-offwhite/50 cursor-default">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy flex items-baseline tracking-tight leading-none">
                <span className="counter-number" data-target={25}>25</span><span className="text-brand-gold font-serif">+</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mt-1.5">JAHRE EXPERTISE</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted truncate">Hanseatische Tradition</div>
            </div>
            <div className="stat-card-shimmer group flex flex-col items-center sm:items-start text-center sm:text-left px-2 py-1 rounded-xl transition-all duration-300 hover:bg-brand-offwhite/50 cursor-default border-t sm:border-t-0 sm:border-l border-brand-border/70 sm:pl-6">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy flex items-baseline tracking-tight leading-none">
                <span className="counter-number" data-target={98}>98</span><span className="text-brand-gold font-serif">%</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mt-1.5">BESETZUNGSQUOTE</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted truncate">Vorstände &amp; C-Level</div>
            </div>
            <div className="stat-card-shimmer group flex flex-col items-center sm:items-start text-center sm:text-left px-2 py-1 rounded-xl transition-all duration-300 hover:bg-brand-offwhite/50 cursor-default border-t lg:border-t-0 lg:border-l border-brand-border/70 lg:pl-6">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy flex items-baseline tracking-tight leading-none">
                <span className="counter-number" data-target={350}>350</span><span className="text-brand-gold font-serif">+</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mt-1.5">MANDATE &amp; PMI</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted truncate">Erfolgreiche Projekte</div>
            </div>
            <div className="stat-card-shimmer group flex flex-col items-center sm:items-start text-center sm:text-left px-2 py-1 rounded-xl transition-all duration-300 hover:bg-brand-offwhite/50 cursor-default border-t lg:border-t-0 lg:border-l border-brand-border/70 lg:pl-6">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy flex items-baseline tracking-tight leading-none">
                <span className="counter-number" data-target={100}>100</span><span className="text-brand-gold font-serif">%</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mt-1.5">INHABERGEFÜHRT</div>
              <div className="text-[10px] sm:text-[11px] text-brand-muted truncate">Persönliche Partnerführung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
