export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071321] text-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1fr_1fr] lg:gap-12">
          <div>
            <a aria-label="Schultz & Partner" className="inline-flex items-center rounded-lg bg-white px-3 py-2" href="#">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-brand-navy text-[10px] font-serif font-semibold text-brand-navy">S&amp;P</div>
                <div className="h-8 w-px bg-brand-border" />
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-xs font-bold uppercase tracking-wide text-brand-navy sm:text-sm">Schultz &amp; Partner</span>
                  <span className="mt-1 whitespace-nowrap text-[6px] font-semibold uppercase tracking-[0.16em] text-brand-muted sm:text-[7px]">Unternehmensberatung &amp; Personalberatung</span>
                </div>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-xs leading-[1.65] text-slate-400 sm:text-[13px]">
              Hanseatische Unternehmensberatung und Personalberatung für den
              Mittelstand und Spitzenorganisationen. Vertraulich, unabhängig,
              partnerschaftlich geführt.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Dienstleistungen
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 sm:text-[13px]">
              <li><a className="transition-colors hover:text-white" href="/personalberatung/hr-management">Personalberatung</a></li>
              <li><a className="transition-colors hover:text-white" href="/personalberatung/karriereberatung">Karriereberatung &amp; Coaching</a></li>
              <li><a className="transition-colors hover:text-white" href="/personalberatung#headhunting">Executive Headhunting</a></li>
              <li><a className="transition-colors hover:text-white" href="/unternehmensberatung/strategieberatung-operative-umsetzung">Strategische Neuausrichtung</a></li>
              <li><a className="transition-colors hover:text-white" href="/unternehmensberatung/restrukturierungsberatung/">Restrukturierung (IDW S6)</a></li>
              <li><a className="transition-colors hover:text-white" href="/unternehmensberatung/post-merger-integration">Post Merger Integration (PMI)</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Büro Hamburg
            </h2>
            <address className="not-italic text-xs leading-[1.8] text-slate-400 sm:text-[13px]">
              <span className="font-semibold text-white">Neuer Wall 50</span>
              <br />
              20354 Hamburg
              <div className="mt-2">
                <a className="transition-colors hover:text-white" href="tel:04085372226">Tel: 040 - 85 37 22 26</a>
                <br />
                Fax: 040 - 85 37 20 77
                <br />
                <a className="transition-colors hover:text-white" href="mailto:hamburg@schultz-partners.de">hamburg@schultz-partners.de</a>
              </div>
            </address>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Büro Bremen
            </h2>
            <address className="not-italic text-xs leading-[1.8] text-slate-400 sm:text-[13px]">
              <span className="font-semibold text-white">Neidenburger Straße 12</span>
              <br />
              28207 Bremen
              <div className="mt-2">
                <a className="transition-colors hover:text-white" href="tel:04212443039">Tel: 0421 - 24 43 039</a>
                <br />
                Fax: 0421 - 24 43 040
                <br />
                <a className="transition-colors hover:text-white" href="mailto:bremen@schultz-partners.de">bremen@schultz-partners.de</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Schultz &amp; Partner Unternehmensberatung &amp; Personalberatung. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a className="transition-colors hover:text-white" href="#">Impressum</a>
            <a className="transition-colors hover:text-white" href="#">Datenschutz</a>
            <a className="transition-colors hover:text-white" href="#">Compliance</a>
            <a
              aria-label="Nach oben scrollen"
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-300 transition-colors hover:border-brand-gold hover:text-white"
              href="#"
            >
              <span className="material-symbols-outlined text-base">north</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
