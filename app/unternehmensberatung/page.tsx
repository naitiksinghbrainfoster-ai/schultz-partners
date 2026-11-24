import type { Metadata } from "next";
import PageInteractions from "../page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Unternehmensberatung | Schultz & Partner",
  description:
    "Maßgeschneiderte Unternehmensberatung in Strategie, Neuausrichtung, Restrukturierung sowie Unternehmenskauf und -verkauf. Schultz & Partner in Hamburg und Bremen.",
};

const services = [
  {
    id: "strategie",
    number: "01",
    focus: "Strategie",
    title: "Strategische Neuausrichtung",
    paragraphs: [
      "Ein dauerhaft erfolgreiches Unternehmen zeichnet sich dadurch aus, dass es seine Strategien und seine Organisation regelmäßig hinterfragt und gegebenenfalls überarbeitet und anpasst. Sei es die umfassende strategische Neuausrichtung, die Anpassung von Teilstrategien oder die Aufnahme neuer Strategien und Partner in das Portfolio – unsere industrieerfahrenen Berater bringen die Erfahrung und Kompetenz mit, um Sie bei der Analyse und der erfolgreichen Weiterentwicklung Ihres Unternehmens zu unterstützen.",
    ],
    image: "/img/Strategische Neuausrichtung im Konferenzraum (1).png",
    imageAlt: "Führungskräfte entwickeln eine strategische Neuausrichtung",
    points: [
      "Strategische Unternehmensentwicklung",
      "Entwicklung von Teilstrategien",
      "Strategische Organisationsentwicklung",
      "Management von Umsatzsteigerungsprogrammen",
      "Prozessanalyse und Prozessoptimierung",
      "Benchmarking und Konkurrenzanalyse",
      "Business Model Generation",
    ],
    closing:
      "Unsere strategische Unternehmensberatung zeichnet sich durch einen individuellen, auf Sie und Ihre speziellen Fragestellungen zugeschnittenen Ansatz aus. Die erfahrenen Partner und Mitarbeitenden von Schultz & Partner stehen Ihnen auch als Interimmanager auf Zeit zur Verfügung.",
    detailHref: "/unternehmensberatung/strategieberatung-operative-umsetzung",
    detailLabel: "Mehr zur Strategischen Neuausrichtung",
    requestLabel: "Strategische Neuausrichtung anfragen",
  },
  {
    id: "restrukturierung",
    number: "02",
    focus: "Veränderung",
    title: "Restrukturierung",
    paragraphs: [
      "Wir haben unsere Wurzeln in der betrieblichen Praxis. Unsere Erfahrung basiert auf langjähriger strategischer und operativer Führungsarbeit in produzierenden und dienstleistenden Unternehmen verschiedener Branchen sowie auf langjähriger Erfahrung in der Unternehmensberatung. Restrukturierung und Wandel sind eng verbunden: Einen statischen Markt und eine über Jahrzehnte funktionierende Strategie gibt es in der heutigen Geschäftslandschaft nicht mehr. Umso bedeutender sind aktiv begleitete, frühzeitige und vorausschauende Richtungswechsel. Je früher eine Restrukturierung eingeleitet wird, desto schneller und reibungsloser kann sie durchgeführt werden.",
    ],
    image: "/img/Corporate Strategy Meeting and Action Plan (1).png",
    imageAlt: "Team bespricht Maßnahmen für die Restrukturierung",
    points: [
      "Prozessanalyse",
      "Organisationsstrukturanalyse",
      "Management- und Strategieanalyse",
      "Kostenanalyse und Restrukturierung",
      "Personalabbau und Sozialplangestaltung",
      "Change Management und Change-Kommunikation",
      "Operative Umsetzung der Maßnahmen",
      "Benchmarking",
    ],
    closing:
      "Gerade in dieser Situation sind professionelle externe Unternehmensberatung und ganzheitliche Unterstützung in kaufmännischen Fragen von großem Wert. Ein frischer, unvoreingenommener Blick auf die Stärken und Schwächen Ihrer Strategien und Organisation hilft, Maßnahmen zur Restrukturierung und Stärkung Ihres Unternehmens zu entwickeln. Unsere erfahrenen Partner und Mitarbeitenden unterstützen Sie beratend oder temporär als Interimmanager vor Ort – projektbezogen oder operativ.",
    detailHref: "/unternehmensberatung/restrukturierungsberatung/",
    detailLabel: "Mehr zur Restrukturierung",
    requestLabel: "Restrukturierung anfragen",
  },
  {
    id: "pmi",
    number: "03",
    focus: "M&A",
    title: "Unternehmenskauf/-verkauf",
    paragraphs: [
      "Wir bieten unsere Beratungsleistungen auf Käufer- und Verkäuferseite an – bei Unternehmenskauf und -verkauf, Teilunternehmenskauf und -verkauf sowie Marken- und Lizenzkauf und -verkauf. Unser Leistungsspektrum umfasst die integrierte Abwicklung des Prozesses in allen Phasen und in enger Zusammenarbeit mit Ihnen.",
    ],
    image: "/img/Modern Office Presentation Around the Table (1).png",
    imageAlt: "Unternehmer und Berater besprechen eine Transaktion",
    points: [
      "Strategische Entscheidungsfindung",
      "Due Diligence und Data Room",
      "Gesprächsführung und Verhandlung",
      "Vertragsabschluss",
      "Post Merger Integration",
    ],
    closing:
      "Unsere M&A-erfahrenen Partner agieren als Ihre interne M&A-Abteilung und führen oder begleiten den Prozess von Anfang bis Ende – als Unternehmensverkäufer oder Kaufinteressent. Wir unterstützen Sie dabei, Mehrwert bei M&A-Transaktionen zu schaffen. Besonderes Augenmerk legen wir auf Post Merger Integration und Carve-out sowie auf Personal und Unternehmenskultur, wichtige Faktoren für den langfristigen Erfolg einer Transaktion.",
    detailHref: "/unternehmensberatung/post-merger-integration",
    detailLabel: "Mehr zur Post Merger Integration",
    requestLabel: "Unternehmenskauf/-verkauf anfragen",
  },
];

const faqs = [
  {
    question: "Was versteht man unter Unternehmensberatung?",
    answer:
      "Schultz & Partner versteht unter Unternehmensberatung einen partnerschaftlichen Ansatz: Als externe und unabhängige Berater stehen wir unseren Klienten bei spezifischen unternehmerischen Themen, Teilthemen, Projekten und das gesamte Unternehmen betreffenden Fragestellungen zur Seite. Mit unserer langjährigen Erfahrung unterstützen wir die Verbesserung und Weiterentwicklung des Unternehmens.",
  },
  {
    question: "Was können Sie von einer Unternehmensberatung in Hamburg erwarten?",
    answer:
      "Schultz & Partner steht für höchste Qualität, starke Kommunikation und maßgeschneiderte, individualisierte Lösungen für Unternehmen. Der Klient steht im Mittelpunkt. An unseren Unternehmensberatungsstandorten in Hamburg und Bremen nehmen wir uns Zeit, Ihren tatsächlichen Beratungsbedarf zu verstehen.",
  },
  {
    question: "Wie geht Schultz & Partner in der Unternehmensberatung vor?",
    answer:
      "Wir gehen individuell, kundenbezogen und strukturiert vor. Nach dem Erstkontakt und der Klärung, welche Art der Unternehmensberatung zur Fragestellung passt, analysieren wir ausführlich die Situation. Darauf aufbauend entwickeln wir den Lösungsansatz und den Prozess und stimmen beides mit dem Klienten ab. Anschließend werden Ziele, Ergebnisse, benötigte Ressourcen sowie ein Zeitplan mit Meilensteinen in einem Beratungsplan festgehalten.",
  },
  {
    question: "Welche Themen der Unternehmensberatung werden abgedeckt?",
    answer:
      "Das Spektrum reicht von Strategieberatung über Restrukturierungs- und Sanierungsberatung bis zur Begleitung von Merger-&-Acquisition-Themen wie Kauf und Verkauf sowie Due Diligence. Auch Interimmanagement-Aufgaben und kaufmännische Themen können begleitend unterstützt werden.",
  },
  {
    question:
      "Was versteht Schultz & Partner unter Restrukturierungsberatung?",
    answer:
      "Restrukturierungsberatung beginnt idealerweise, bevor ein Unternehmen in Schwierigkeiten gerät – mit proaktiver Neuausrichtungsberatung. Bei ersten Herausforderungen begleiten wir individuelle Restrukturierungen, etwa in den Bereichen Personal, Struktur, Prozesse, Kosten oder Angebot. Befindet sich ein Unternehmen bereits in einer Schieflage, kann Sanierungsberatung kurzfristige Sicherungsmaßnahmen, strategische Neuausrichtung und Stabilisierung unterstützen.",
  },
];

export default function UnternehmensberatungPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main>
          <section className="bg-[#f3f1eb] px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-48 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                  Geschäftsbereich 01 · Unternehmensberatung
                </p>
                <h1 className="font-serif text-3xl font-normal leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                  Unternehmensberatung
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-brand-darkmuted sm:text-base">
                  Individuelle Leistungen und Kompetenz, die Ihr Geschäft
                  voranbringen – in Strategie, Neuausrichtung und M&amp;A!
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-navy px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                    href="/kontakt"
                  >
                    Unternehmensberatung anfragen
                  </a>
                  <a
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-brand-navy px-6 text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-white"
                    href="tel:04085372226"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-base">call</span>
                    Direkt anrufen
                  </a>
                </div>
              </div>
              <div className="relative min-h-[240px] overflow-hidden sm:min-h-[320px] lg:col-span-5 lg:col-start-8 lg:min-h-[360px]">
                <Image
                  alt="Unternehmer und Berater besprechen strategische Entscheidungen"
                  className="object-cover grayscale contrast-110"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  src="/img/Modern Office Presentation Around the Table (1).png"
                />
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Unternehmensberatung
                </p>
                <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-brand-navy sm:text-4xl">
                  Informieren Sie sich über unser Angebot an maßgeschneiderten
                  Beratungsleistungen.
                </h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-brand-darkmuted sm:text-base lg:col-span-7">
                <p>
                  Schultz &amp; Partner steht Ihnen als externer,
                  unabhängiger und partnerschaftlicher Berater bei spezifischen
                  unternehmerischen Themen, Projekten und Fragestellungen zur
                  Seite.
                </p>
                <a
                  className="inline-flex min-h-10 items-center justify-center bg-brand-navy px-4 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                  href="/kontakt"
                >
                  Unternehmensberatung anfragen
                </a>
              </div>
            </div>
          </section>

          <section id="kompetenzfelder" className="scroll-mt-24 border-y border-brand-border bg-[#f3f1eb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl sm:mb-14">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Unsere Leistungen</p>
                <h2 className="mt-3 font-serif text-3xl font-normal text-brand-navy sm:text-4xl">
                  Maßgeschneiderte Beratung für die entscheidenden Phasen Ihres Unternehmens.
                </h2>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {services.map((service, index) => (
                  <article
                    className="grid scroll-mt-32 overflow-hidden border border-brand-border bg-white lg:grid-cols-12"
                    id={service.id}
                    key={service.id}
                  >
                    <div className={`relative min-h-[240px] bg-slate-100 lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        alt={service.imageAlt}
                        className="object-cover grayscale contrast-110"
                        fill
                        sizes="(max-width: 1023px) 100vw, 42vw"
                        src={service.image}
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-9 lg:col-span-7 lg:p-12">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-brand-gold">
                        {service.number} / {service.focus}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-brand-navy sm:text-3xl">
                        {service.title}
                      </h3>
                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-darkmuted sm:text-base">
                        {service.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-slate">
                        Unser Leistungsspektrum umfasst:
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {service.points.map((point) => (
                          <li className="flex gap-3 text-sm leading-relaxed text-brand-slate" key={point}>
                            <span aria-hidden="true" className="mt-0.5 text-brand-gold">—</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-sm leading-relaxed text-brand-darkmuted">{service.closing}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          className="inline-flex min-h-10 items-center justify-center border border-brand-border px-4 text-[10px] font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-offwhite"
                          href={service.detailHref}
                        >
                          {service.detailLabel}
                        </a>
                        <a
                          className="inline-flex min-h-10 items-center justify-center bg-brand-navy px-4 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                          href="/kontakt"
                        >
                          {service.requestLabel}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f4f6f7] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Häufige Fragen
                </p>
                <h2 className="mt-2 font-serif text-3xl font-normal text-brand-navy sm:text-4xl">
                  FAQ zur Unternehmensberatung
                </h2>
                <span aria-hidden="true" className="mx-auto mt-4 block h-px w-16 bg-brand-gold" />
              </div>
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <details className="group border border-brand-border bg-white" key={faq.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-semibold text-brand-slate marker:hidden sm:px-5">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-brand-muted transition-transform group-open:rotate-180">
                        keyboard_arrow_down
                      </span>
                    </summary>
                    <p className="border-t border-brand-border px-4 py-4 text-sm leading-relaxed text-brand-darkmuted sm:px-5">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
