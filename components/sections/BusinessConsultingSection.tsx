import Image from "next/image";

const practices = [
  {
    number: "01",
    focus: "Zukunftsfähigkeit",
    title: "Strategische Neuausrichtung",
    description:
      "Ein dauerhaft erfolgreiches Unternehmen zeichnet sich dadurch aus, dass es seine Strategien, Kernkompetenzen und Geschäftsmodelle regelmäßig hinterfragt und anpasst.",
    image: "/img/Strategische Neuausrichtung im Konferenzraum (1).png",
    imageAlt: "Strategische Neuausrichtung im Konferenzraum",
  },
  {
    number: "02",
    focus: "Krisenfestigkeit",
    title: "Restrukturierung (IDW S6)",
    description:
      "Wenn Marktumbrüche rasches Handeln fordern: Begleitung von Sanierungsgutachten, Liquiditätssicherung und vertrauensbildenden Maßnahmen gegenüber Banken und Gläubigern.",
    image: "/img/Corporate Strategy Meeting and Action Plan (1).png",
    imageAlt: "Team entwickelt gemeinsam einen Unternehmensplan",
  },
  {
    number: "03",
    focus: "Wertschöpfung",
    title: "Post Merger Integration (PMI)",
    description:
      "Post Merger Integration und Change Management sind der Schlüssel zum Erfolg nach der Akquisition. Wir realisieren Synergien und harmonisieren Unternehmenskulturen.",
    image: "/img/Executive Boardroom Discussion.png",
    imageAlt: "Führungskräfte besprechen eine Unternehmensentscheidung",
  },
];

export default function BusinessConsultingSection() {
  return (
    <section
      className="border-y border-brand-border bg-[#f3f1eb] py-16 sm:py-20"
      id="unternehmensberatung"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-slate-300/60 pb-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold">
              Geschäftsbereich 01
            </span>
            <h2 className="mt-1 font-serif text-3xl font-normal text-brand-navy sm:text-5xl">
              Unternehmensberatung
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-brand-darkmuted sm:text-base">
            Wir sind auf den Mittelstand ausgerichtete Experten für
            Transformation, Restrukturierung nach IDW S6 und ganzheitliche
            M&amp;A-Integration. Wir beraten sowohl vor Ort als auch in flexiblen
            Formaten.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {practices.map((practice) => (
            <article
              className="group flex h-full flex-col border border-brand-border bg-white p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8"
              key={practice.number}
            >
              <div className="relative mb-6 h-48 overflow-hidden bg-slate-100">
                <Image
                  alt={practice.imageAlt}
                  className="object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 33vw, 400px"
                  src={practice.image}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                  {practice.number} / {practice.focus}
                </span>
                <h3 className="mb-3 font-serif text-2xl font-bold text-brand-navy">
                  {practice.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-brand-darkmuted">
                  {practice.description}
                </p>
                <div className="border-t border-brand-border pt-4">
                  <a
                    className="group/link inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:text-brand-gold"
                    href="#kontakt"
                  >
                    <span>Leistung anfragen</span>
                    <svg
                      aria-hidden="true"
                      className="ml-2 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
