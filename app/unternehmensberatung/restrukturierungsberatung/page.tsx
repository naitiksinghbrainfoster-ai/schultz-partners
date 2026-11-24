import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PageInteractions from "@/app/page-interactions";

export const metadata: Metadata = {
  title: "Restrukturierungsberatung | Schultz & Partner",
  description:
    "Restrukturierungsberatung für Unternehmen: frühzeitige Neuausrichtung, Liquiditätssicherung, Sanierung und operative Umsetzung in Hamburg und Bremen.",
};

const caseStudies = [
  {
    label: "Präventive Reorganisation",
    title: "Restrukturierung zur Neuausrichtung",
    icon: "assignment",
    brief:
      "Erfolgreiches Unternehmen der Medienbranche mit 4 Mio. € Umsatz und 40 Mitarbeitenden stagniert nach Jahren des Wachstums. Eine Reorganisation und Neuausrichtung soll das Unternehmen wieder auf Wachstumskurs bringen.",
    steps: [
      "Analyse der Prozessabläufe und der finanziellen Lage des Unternehmens",
      "Portfolioanalyse und SWOT-Analyse der Unternehmung",
      "Wettbewerberanalyse zur Identifizierung von Wachstumspotenzialen",
      "Erstellung des Restrukturierungsplans",
      "Restrukturierung der Prozessorganisation mit stärkerer Ausrichtung an den Kundenbedürfnissen",
      "Aufbau von Kernkompetenzteams zur Erweiterung des Angebotsportfolios",
      "Begleitung des Unternehmenswachstums in prozessualer und kultureller Hinsicht – von der Fachkräftesuche bis zum Change Management",
    ],
    result:
      "Nach drei Jahren der Stagnation wächst das Unternehmen wieder organisch im zweistelligen Bereich. Die Gewinnsituation wird gestärkt; Umsatzwachstum und Produktivitätssteigerung kompensieren die gestiegenen Personalkosten.",
    image: "/img/Creative%20Collaboration%20at%20the%20Idea%20Board.png",
    imageAlt: "Team entwickelt gemeinsam eine Restrukturierungsstrategie",
  },
  {
    label: "Akute Krisenintervention",
    title: "Restrukturierung in der Krise",
    icon: "warning",
    brief:
      "Ein Unternehmen der Konsumgüterindustrie mit rund 100 Mio. € Umsatz, 300 Mitarbeitenden und drei Produktionsstandorten stagniert seit Jahren. Die Ertragslage ist geschwächt und das Unternehmen in die Verlustzone geraten.",
    steps: [
      "Analyse der Ertragssituation und der Liquidität",
      "Analyse der Produktionsstandorte, SWOT-Analyse und Analyse der Logistik",
      "Analyse der Aufbau- und Ablauforganisation mit Fokus auf Ineffizienzen und Gemeinkosten",
      "Erarbeitung des Restrukturierungsplans und operative Umsetzung mit der Geschäftsleitung",
      "Restrukturierung der Standorte sowie Erstellung und Verhandlung eines Sozialplans einschließlich Werksschließung",
      "Flexibilisierung der Produktionsabläufe und Erweiterung der Produktpalette",
      "Reorganisation der Hierarchieebenen und Entscheidungsbefugnisse",
    ],
    result:
      "Das Unternehmen kehrt in die Gewinnzone zurück. Die Restrukturierung der Kosten, Standorte und Logistik stärkt die Basisertragskraft. Die flexiblere Produktion ermöglicht zudem ein erweitertes Sortiment.",
    image: "/img/Executive%20Boardroom%20Discussion.png",
    imageAlt: "Geschäftsleitung bespricht Maßnahmen für den Turnaround",
  },
];

const changeServices = [
  "Entwicklung von Change-Management-Programmen",
  "Entwicklung von Maßnahmenkatalogen",
  "Projektmanagement und Entwicklung von Roadmaps",
  "Veränderungskommunikation",
  "Mitarbeiterentwicklung und Coaching",
];

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.18em] ${
        light ? "text-[#ffdea5]" : "text-[#775a19]"
      }`}
    >
      {children}
    </p>
  );
}

function CaseStudy({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const imageFirst = index === 0;

  return (
    <section
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${
        imageFirst ? "bg-[#f3f1eb]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div
          className={`relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:col-span-5 ${
            imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            alt={study.imageAlt}
            className="object-cover grayscale-[20%]"
            fill
            sizes="(max-width: 1023px) 100vw, 42vw"
            src={study.image}
          />
          <span className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-xs font-semibold text-brand-navy shadow-sm">
            {index === 0
              ? "Medienbranche · 40 Mitarbeitende"
              : "Konsumgüterindustrie · 3 Standorte"}
          </span>
        </div>

        <div
          className={`lg:col-span-7 ${
            imageFirst ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <Eyebrow>Use Case {String(index + 1).padStart(2, "0")}</Eyebrow>
            <span className="bg-[#f3f1eb] px-3 py-1.5 text-xs font-semibold text-[#775a19]">
              {study.label}
            </span>
          </div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
            {study.title}
          </h2>
          <div className="mt-6">
            <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#775a19]">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                {study.icon}
              </span>
              Auftrag
            </h3>
            <p className="bg-white p-4 text-sm leading-relaxed text-brand-darkmuted shadow-sm sm:text-base">
              {study.brief}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#775a19]">
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                timeline
              </span>
              Ablauf
            </h3>
            <ul className="space-y-2.5">
              {study.steps.map((step) => (
                <li
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-darkmuted"
                  key={step}
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-[#775a19]"
                  >
                    check_circle
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 border-l-4 border-brand-gold bg-white p-5">
            <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy">
              <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                trending_up
              </span>
              Ergebnis
            </h3>
            <p className="text-sm leading-relaxed text-brand-darkmuted">
              {study.result}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RestrukturierungsberatungPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb] text-brand-slate">
          <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#0e1c2f] pb-14 pt-32 text-white sm:min-h-[600px] sm:pb-16 sm:pt-36 lg:min-h-[620px] lg:pb-20 lg:pt-40">
            <Image
              alt=""
              className="object-cover object-center opacity-60"
              fill
              priority
              sizes="100vw"
              src="/img/Executive%20Boardroom%20Discussion.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/45 via-transparent to-[#071321]/5" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[#ffdea5] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffdea5]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                    Unternehmensberatung · Krisen- &amp; Reorganisationsmandate
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="text-[#ffdea5]">
                    Restrukturierungsberatung
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Wir denken vor und erarbeiten Lösungen für Ihren
                  Geschäftserfolg – von der frühzeitigen Neuausrichtung über
                  die Liquiditätssicherung bis hin zur krisenfesten,
                  bankenfähigen Sanierung.
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <Eyebrow>Ganzheitlicher Sanierungsansatz</Eyebrow>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Restrukturierung: Wandel gestalten, Liquidität sichern,
                  Zukunft sichern
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-darkmuted sm:text-base">
                  <p>
                    Wandel und Krisen schaffen Chancen und Risiken. Wir
                    unterstützen Sie dabei, Risiken zu minimieren und
                    Potenziale zu nutzen. Der Wandel eines Unternehmens ist
                    ein permanenter, evolutionärer Prozess. Phasen der
                    Marktrevolution machen eine Restrukturierung und Anpassung
                    des Geschäftsmodells erforderlich.
                  </p>
                  <p>
                    Im Idealfall beginnt die Restrukturierungsberatung, bevor
                    das Unternehmen in eine kritische Phase eintritt – und
                    verhindert drastische Einschnitte. Wir begleiten Sie bei
                    der Neuausrichtung und in der kritischen Phase, integriert
                    über die gesamte Aufbau- und Ablauforganisation.
                  </p>
                  <p className="font-medium text-brand-slate">
                    Schultz &amp; Partner unterstützt Sie federführend in der
                    Unternehmens-, Markt- und Situationsanalyse. Gemeinsam
                    entwickeln wir maßgeschneiderte Lösungen – von der
                    strategischen und operativen Ausrichtung über
                    Personalmaßnahmen bis zur professionellen Umsetzung.
                  </p>
                </div>
                <a
                  className="mt-7 inline-flex min-h-12 items-center gap-3 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white"
                  href="#use-cases"
                >
                  Ausgewählte Projekte ansehen
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[460px] lg:col-span-5">
                <Image
                  alt="Beratungsteam entwickelt gemeinsam ein Restrukturierungskonzept"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Collaborative%20Office%20Document%20Review.png"
                />
                <div className="absolute inset-x-4 bottom-4 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <Eyebrow>Krisenfestigkeit &amp; Wertschöpfung</Eyebrow>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-brand-navy">
                    Pragmatische Hebel statt Theorie
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    Von der Situationsanalyse bis zur umsetzbaren Lösung.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="scroll-mt-28" id="use-cases">
            {caseStudies.map((study, index) => (
              <CaseStudy index={index} key={study.title} study={study} />
            ))}
          </div>

          <section className="bg-[#0e1c2f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[460px] lg:col-span-5">
                <Image
                  alt="Führungskräfte stimmen sich in einer Veränderungsphase ab"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Waterfront%20Office%20Meeting%20Dialogue.png"
                />
                <div className="absolute inset-x-4 bottom-4 bg-white/95 p-4 text-brand-slate shadow-lg sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <Eyebrow>Kultur &amp; Strategie</Eyebrow>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-brand-navy">
                    Ganzheitliches Alignment
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    Schulterschluss und Vertrauen in kritischen
                    Transformationsphasen.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <Eyebrow light>Mensch &amp; Organisation im Wandel</Eyebrow>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  Change Management als integraler Erfolgsfaktor
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-200 sm:text-base">
                  Wir beraten und unterstützen Sie in allen Fragen des Wandels.
                  Individuelle Change-Management-Programme stimmen wir auf
                  Ihre Bedürfnisse und die konkreten Herausforderungen Ihres
                  Unternehmens ab.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                  Als externe Berater verfolgen wir einen ganzheitlichen und
                  systemischen Ansatz, der Ihr Change-Management-Programm in
                  allen Facetten unterstützt.
                </p>
                <h3 className="mt-7 text-xs font-bold uppercase tracking-widest text-[#ffdea5]">
                  Unser Leistungsspektrum
                </h3>
                <ul className="mt-4 space-y-3">
                  {changeServices.map((service) => (
                    <li
                      className="flex items-start gap-3 text-sm text-slate-100"
                      key={service}
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-lg text-[#ffdea5]"
                      >
                        arrow_right_alt
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border border-white/15 bg-white/5 p-5 text-sm leading-relaxed text-slate-200">
                  Neben operativen und strategischen Change-Projekten in der
                  Restrukturierungsberatung sind wir Ihr Ansprechpartner für
                  Organisationsentwicklung, Change-Kommunikation, Post Merger
                  Integration, Kulturanalyse und Mitarbeiterentwicklung.
                </p>
                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#e9c176] px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-[#261900] transition-colors hover:bg-white"
                  href="#kontakt-mandat"
                >
                  Change Management anfragen
                </a>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <Eyebrow>Vom Konzept zur Wirkung</Eyebrow>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Operative Umsetzung / Interimmanagement
                </h2>
                <blockquote className="mt-6 border-l-2 border-brand-gold pl-5 font-serif text-xl italic leading-relaxed text-[#775a19]">
                  „Strategien, kreative Ideen und Visionen sind das Cockpit des
                  Unternehmens, die operative Umsetzung ist der Motor – der
                  Schlüssel zum Erfolg.“
                </blockquote>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-darkmuted sm:text-base">
                  <p>
                    Die Implementierung von Strategien in den operativen
                    Alltag ist oft die zentrale Hürde. Wir begleiten Sie vom
                    ersten Schritt bis zur vollständigen Umsetzung – mit Fokus
                    auf Prozessgestaltung, Verankerung der Veränderungen,
                    Mitarbeiterkommunikation und eine zielführende
                    Organisation.
                  </p>
                  <p className="font-medium text-brand-slate">
                    Unsere industrieerfahrenen Berater unterstützen beratend
                    oder temporär als Interimmanager als Teil Ihres
                    Unternehmens.
                  </p>
                </div>
                <div className="mt-7 flex flex-col gap-4 bg-[#f3f1eb] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#775a19]/10 text-2xl text-[#775a19]"
                    >
                      call
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                        Direkter Draht zu den Partnern
                      </p>
                      <a
                        className="font-serif text-xl font-semibold text-brand-navy transition-colors hover:text-[#775a19]"
                        href="tel:+494085372226"
                      >
                        040 - 85 37 22 26
                      </a>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#775a19] transition-colors hover:text-brand-navy"
                    href="/kontakt#anfrageformular"
                  >
                    Kontaktformular
                    <span aria-hidden="true" className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative min-h-[320px] overflow-hidden sm:min-h-[460px] lg:col-span-5">
                <Image
                  alt="Erfahrener Berater begleitet die Geschäftsleitung bei der Umsetzung"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Warm%20Minimalist%20Consultation%20Around%20Table.png"
                />
                <div className="absolute inset-x-4 bottom-4 bg-white/95 p-4 shadow-lg backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
                  <Eyebrow>Führung auf Zeit</Eyebrow>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-brand-navy">
                    CRO- &amp; Sanierungsmanagement
                  </h3>
                  <p className="mt-1 text-sm text-brand-muted">
                    Übernahme von Verantwortung oder beratende Begleitung zur
                    Entlastung des Vorstands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-32 bg-[#f3f1eb] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
            id="kontakt-mandat"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-6 border-l-4 border-brand-gold bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div className="max-w-2xl">
                <Eyebrow>Hanseatischer Erstkontakt</Eyebrow>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-brand-navy sm:text-3xl">
                  Sie möchten eine Restrukturierung besprechen?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-darkmuted">
                  Nehmen Sie diskret Kontakt mit unseren Partnern auf. Im
                  Erstgespräch klären wir Ihre Situation und die nächsten
                  sinnvollen Schritte.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:items-start">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-brand-navy px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                  href="/kontakt#anfrageformular"
                >
                  Vertrauliches Gespräch anfragen
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="text-sm font-semibold text-brand-navy transition-colors hover:text-[#775a19]"
                  href="tel:+494085372226"
                >
                  Oder direkt anrufen: 040 - 85 37 22 26
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
