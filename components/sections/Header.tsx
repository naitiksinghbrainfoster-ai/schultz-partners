import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="w-full bg-[#0A192F] backdrop-blur-md border-b border-white/10 text-slate-300 text-xs hidden sm:block py-1.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-6">
          <a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:04085372226">
            <span className="material-symbols-outlined text-sm text-brand-gold">call</span>
            <span>Hamburg: 040 - 85 37 22 26</span>
          </a>
          <a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:04212443039">
            <span className="material-symbols-outlined text-sm text-brand-gold">call</span>
            <span>Bremen: 0421 - 24 43 039</span>
          </a>
        </div>
      </div>
      <div className="max-w-[84rem] mx-auto px-2 sm:px-4 md:px-6 xl:px-8 pt-2 sm:pt-4">
        <div className="h-16 sm:h-20 xl:h-24 px-3 sm:px-5 xl:px-8 rounded-2xl glass-clean-white border border-brand-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between gap-2">
          <a className="flex items-center group" href="/">
            <div className="py-1 flex items-center gap-2 sm:gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-brand-navy text-[9px] sm:text-[10px] font-serif font-semibold text-brand-navy">S&amp;P</div>
              <div className="h-8 w-px bg-brand-border hidden sm:block" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[9px] sm:text-sm font-bold tracking-tight sm:tracking-wide text-brand-navy uppercase whitespace-nowrap">Schultz &amp; Partner</span>
                <span className="hidden sm:block mt-1 text-[7px] font-semibold tracking-[0.16em] text-brand-muted uppercase whitespace-nowrap">Unternehmensberatung &amp; Personalberatung</span>
              </div>
            </div>
          </a>
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
}
