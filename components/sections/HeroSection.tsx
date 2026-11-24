export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[540px] sm:min-h-[580px] pt-28 sm:pt-32 pb-10 sm:pb-14 flex flex-col justify-between bg-[#FAFAF8] overflow-hidden">
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
    </section>
  );
}
