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
          <a className="flex items-center group" href="#">
            <div className="py-1 flex items-center gap-2 sm:gap-2.5">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center border border-brand-navy text-[9px] sm:text-[10px] font-serif font-semibold text-brand-navy">S&amp;P</div>
              <div className="h-8 w-px bg-brand-border hidden sm:block" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-[9px] sm:text-sm font-bold tracking-tight sm:tracking-wide text-brand-navy uppercase whitespace-nowrap">Schultz &amp; Partner</span>
                <span className="hidden sm:block mt-1 text-[7px] font-semibold tracking-[0.16em] text-brand-muted uppercase whitespace-nowrap">Unternehmensberatung &amp; Personalberatung</span>
              </div>
            </div>
          </a>
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-7">
            <a className="text-xs 2xl:text-sm font-semibold tracking-wide text-brand-slate hover:text-brand-gold transition-colors" href="#unternehmensberatung">Unternehmensberatung</a>
            <a className="text-xs 2xl:text-sm font-semibold tracking-wide text-brand-slate hover:text-brand-gold transition-colors" href="#personalberatung">Personalberatung</a>
            <a className="text-xs 2xl:text-sm font-semibold tracking-wide text-brand-slate hover:text-brand-gold transition-colors" href="#mandate">Referenzen</a>
            <a className="text-xs 2xl:text-sm font-semibold tracking-wide text-brand-slate hover:text-brand-gold transition-colors" href="#ueber-uns">Über uns</a>
            <a className="text-xs 2xl:text-sm font-semibold tracking-wide text-brand-slate hover:text-brand-gold transition-colors" href="#kontakt">Kontakt</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 xl:gap-4">
            <div className="hidden sm:flex items-center bg-brand-offwhite border border-brand-border rounded-lg p-1 text-xs font-semibold">
              <span className="px-2.5 py-1 rounded bg-white text-brand-navy shadow-sm">DE</span>
              <span className="px-2.5 py-1 text-brand-muted hover:text-brand-navy cursor-pointer">EN</span>
            </div>
            <a className="relative hidden sm:inline-flex items-center justify-center gap-2 px-3 sm:px-5 xl:px-7 py-2 sm:py-2.5 xl:py-3 rounded-xl bg-brand-navy hover:bg-brand-slate text-white text-[10px] sm:text-xs xl:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group" href="#kontakt">
              <span>Kontakt</span>
              <span className="material-symbols-outlined hidden sm:inline text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </a>
            <button aria-label="Menü öffnen" aria-controls="mobileDrawer" aria-expanded="false" className="xl:hidden p-2 rounded-xl bg-brand-offwhite border border-brand-border text-brand-navy hover:bg-white transition-colors" id="mobileMenuBtn">
              <span className="material-symbols-outlined text-2xl" id="menuIcon">menu</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden xl:hidden max-w-[84rem] mx-auto px-2 sm:px-4 md:px-6 xl:px-8 mt-2" id="mobileDrawer">
        <div className="p-4 sm:p-6 bg-white/98 backdrop-blur-2xl rounded-2xl border border-brand-border shadow-2xl space-y-4">
          <a className="block py-2 text-base font-bold text-brand-navy border-b border-brand-border/60" href="#unternehmensberatung">Unternehmensberatung</a>
          <a className="block py-2 text-base font-bold text-brand-navy border-b border-brand-border/60" href="#personalberatung">Personalberatung</a>
          <a className="block py-2 text-base font-bold text-brand-navy border-b border-brand-border/60" href="#mandate">Referenzen</a>
          <a className="block py-2 text-base font-bold text-brand-navy border-b border-brand-border/60" href="#ueber-uns">Über uns</a>
          <a className="block py-2 text-base font-bold text-brand-navy border-b border-brand-border/60" href="#kontakt">Kontakt</a>
          <div className="pt-2 flex justify-between items-center text-xs text-brand-muted font-medium">
            <span>Hamburg • Bremen</span>
            <a className="text-brand-navy font-bold" href="tel:04085372226">040 - 85 37 22 26</a>
          </div>
        </div>
      </div>
    </header>
  );
}
