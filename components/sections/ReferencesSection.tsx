import Image from "next/image";

const mandates = [
  {
    sector: "Automotive • Zulieferer",
    title: "Sanierung nach IDW S6 & CRO-Besetzung",
    description:
      "Erfolgreiche Refinanzierung von 85 Mio. € Verbindlichkeiten und Besetzung eines Interims-Vorstands innerhalb von 72 Stunden.",
    result: "Fortführung gesichert • 620 Arbeitsplätze erhalten",
  },
  {
    sector: "Maritime Industrie • Hamburg",
    title: "C-Level Executive Search Nachfolge",
    description:
      "Diskrete Rekrutierung eines neuen CEO für ein inhabergeführtes Logistikunternehmen im Hamburger Hafen ohne Informationsverlust im Markt.",
    result: "Besetzung in 6 Wochen • 100% Cultural Fit",
  },
  {
    sector: "Maschinenbau • Bremen",
    title: "Post Merger Integration (PMI)",
    description:
      "Strategische Begleitung der Verschmelzung zweier Technologieführer, Harmonisierung der C-Suite und IT-Konsolidierung.",
    result: "Realisierung von 12 Mio. € Synergien",
  },
];

export default function ReferencesSection() {
  return (
    <section
      className="border-y border-brand-border bg-[#f3f1eb] py-16 sm:py-20"
      id="mandate"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold">
              Referenzen &amp; Mandatspraxis
            </span>
            <h2 className="mt-1 font-serif text-3xl font-normal text-brand-navy sm:text-5xl">
              Souveräne Weichenstellungen im Markt
            </h2>
          </div>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-brand-darkmuted md:mt-0">
            Diskretion ist unser oberstes Gebot. Wir schützen die Identität
            unserer Klienten und agieren geräuschlos im Hintergrund.
          </p>
        </div>

        <article className="mb-10 grid grid-cols-1 overflow-hidden border border-brand-border bg-white shadow-lg lg:grid-cols-12">
          <div className="relative min-h-[320px] bg-slate-200 lg:col-span-6">
            <Image
              alt="Modernes Bürogebäude am Hamburger Kanal"
              className="object-cover grayscale contrast-125"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              src="/img/Modern Canal-Side Office Building.png"
            />
            <div className="absolute left-4 top-4 bg-brand-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
              Flaggschiff Kanzleisitz
            </div>
          </div>

          <div className="flex flex-col justify-between p-8 md:p-12 lg:col-span-6">
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold">
                Hanseatische Exzellenz seit 1998
              </span>
              <h3 className="mb-4 mt-2 font-serif text-2xl font-bold leading-tight text-brand-navy sm:text-3xl">
                Neuer Wall 50 – Im pulsierenden Zentrum der Hamburger Wirtschaft
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-darkmuted">
                Direkt am Alsterfleet empfangen wir Vorstände, Aufsichtsräte und
                Unternehmer zu diskreten Beratungsgesprächen. Von hier aus
                steuern wir bundesweite Restrukturierungs- und Personalmandate
                mit kompromissloser Präzision.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-6 border-t border-brand-border pt-4">
                <div>
                  <div className="font-serif text-3xl font-bold text-brand-navy">
                    14 Tage
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Shortlist-Garantie
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-brand-navy">
                    100%
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                    Anonymitäts-Garantie
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-brand-border pt-5">
              <a
                className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-navy transition-colors hover:text-brand-gold"
                href="#kontakt"
              >
                <span>Standort ansehen</span>
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 8l4 4m0 0-4 4m4-4H3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mandates.map((mandate) => (
            <article
              className="border border-brand-border bg-white p-6"
              key={mandate.title}
            >
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                {mandate.sector}
              </div>
              <h3 className="mb-2 font-serif text-xl font-bold text-brand-navy">
                {mandate.title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-brand-darkmuted sm:text-sm">
                {mandate.description}
              </p>
              <div className="text-[11px] font-semibold text-brand-gold">
                ✓ {mandate.result}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
