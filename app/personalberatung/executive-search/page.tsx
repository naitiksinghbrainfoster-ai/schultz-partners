import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ExecutiveSearchInquiry from "./ExecutiveSearchInquiry";

export const metadata: Metadata = {
  title: "Executive Search | Schultz & Partner",
  description:
    "Diskrete Executive Search für C-Level, Vorstände, Geschäftsführer und Schlüsselpositionen in Hamburg, Bremen und Norddeutschland.",
};

const faqs = [
  {
    question: "Was ist Executive Search?",
    answer:
      "Executive Search ist die hochgradig individualisierte und diskrete Direktsuche nach Führungskräften auf Geschäftsführungs-, Vorstands- und C-Level-Ebene. Potenzielle Kandidaten werden systematisch identifiziert und diskret direkt angesprochen.",
  },
  {
    question:
      "Worin unterscheiden sich Executive Search und generische Personalberatung?",
    answer:
      "Die klassische Personalberatung stützt sich häufig auf Ausschreibungen und Lebenslaufdatenbanken. Executive Search fokussiert auf passive Führungskräfte und erfordert profunde Management-Erfahrung, um auf Augenhöhe zu verhandeln und kulturelle Passung fundiert zu analysieren.",
  },
  {
    question: "Wie stellt Schultz & Partner den richtigen Fit sicher?",
    answer:
      "Neben Tiefeninterviews und Referenzprüfungen nutzen wir strukturierte Eignungsdiagnostik. Zudem analysieren wir Unternehmenskultur, Werthaltungen und Führungsanforderungen, bevor wir eine Shortlist erstellen.",
  },
  {
    question: "Gibt es eine Garantie auf die Besetzung?",
    answer:
      "Ja. Schultz & Partner gewährt auf jede Executive-Search-Besetzung eine 6-monatige Besetzungsgarantie. Sollte das Arbeitsverhältnis in dieser Zeit gelöst werden, führen wir die Nachbesetzung ohne zusätzliches Beratungshonorar durch.",
  },
  {
    question: "In welchen Regionen ist Schultz & Partner aktiv?",
    answer:
      "Mit festen Büros in Hamburg und Bremen sind wir tief im norddeutschen Raum verankert. Darüber hinaus betreuen wir bundesweite und internationale Suchprozesse.",
  },
];

const processCards = [
  {
    icon: "analytics",
    title: "Klare Honorarvereinbarungen",
    text:
      "Feste, transparente Konditionen ohne versteckte Nebenkosten oder unangekündigte Spesen.",
  },
  {
    icon: "query_stats",
    title: "Regelmäßige Fortschrittsberichte",
    text:
      "Wöchentliches oder zweiwöchentliches Mandats-Reporting mit Pipeline und Marktresonanz.",
  },
  {
    icon: "badge",
    title: "Fundierte Kandidatendossiers",
    text:
      "Vorqualifizierte Kandidaten mit Branchenexpertise und vollständigem Profilabgleich.",
  },
  {
    icon: "person_celebrate",
    title: "Direkter Senior-Partner-Kontakt",
    text:
      "Ihr Mandat wird persönlich geführt – vom Erstgespräch bis zur Vertragsunterzeichnung.",
  },
  {
    icon: "security",
    title: "6 Monate Besetzungsgarantie",
    text:
      "Sollte das Arbeitsverhältnis in dieser Phase enden, suchen wir kostenfrei nach.",
  },
];

const referenceClusters = [
  {
    icon: "shopping_bag",
    title: "Konsumgüter & Luxusgüter",
    text: "Geschäftsleitung, Marketingdirektorat und Supply-Chain-Führung.",
    names: ["P&G", "Tchibo", "Punica", "Pepsi", "Louis Vuitton", "Montblanc", "Citizen", "EDEKA"],
  },
  {
    icon: "apartment",
    title: "Soziale Dienstleistungen & Kommunales",
    text: "Gesundheitswesen, Verbände, Körperschaften und kommunale Organisationen.",
    names: ["Diakonie", "DRK", "UKSH", "ADAC", "Studentenwerk", "VDR", "BVL", "Cuxhaven"],
  },
  {
    icon: "terminal",
    title: "IT & Telekommunikation",
    text: "C-Level, Digitalisierung, Architektur und technische Führung.",
    names: ["Telefónica", "Naviga", "Antares", "Provis", "IDS"],
  },
  {
    icon: "science",
    title: "Chemie & Bauwesen",
    text: "Werksleitung, Engineering, Produktion, Vertrieb und General Management.",
    names: ["Shell", "Evonik", "Cytec", "Viebrockhaus", "Adolf Weber", "Stanze Stahl"],
  },
  {
    icon: "directions_boat",
    title: "Dienstleistungen & Schifffahrt",
    text: "Reedereien, maritime Dienstleister, Audit und internationale Logistik.",
    names: ["Fair Audit", "Glamox", "Gefo", "Maersk Line", "Evac"],
  },
];

export default function ExecutiveSearchPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb] text-brand-slate">
          <section className="bg-[#f2f4f6] px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24 lg:pt-48">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-0.5 w-6 bg-[#775a19]" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                    Personalberatung / Executive Search
                  </p>
                </div>
                <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  Executive Search
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg sm:leading-8">
                  Erfolg in der Personalsuche ist planbar – wir finden die
                  Führungskräfte, die fachlich und menschlich zu Ihrem
                  Unternehmen passen.
                </p>
                <div className="mt-7 space-y-3">
                  {[
                    "98 % Besetzungsquote in der diskreten Personalberatung",
                    "6 Monate Besetzungsgarantie auf jede Vermittlung",
                    "Persönliche Begleitung durch erfahrene Senior Partner",
                  ].map((item) => (
                    <div className="flex items-center gap-3" key={item}>
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-xl text-[#775a19]"
                      >
                        check_circle
                      </span>
                      <span className="text-sm font-semibold text-brand-navy">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                    href="#kontakt-formular"
                  >
                    Kostenloses Erstgespräch vereinbaren
                  </a>
                  <a
                    className="inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#775a19] transition-colors hover:text-brand-navy"
                    href="#prozess"
                  >
                    Vorgehensweise ansehen
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    alt="Senior Executive beim vertraulichen Strategiegespräch"
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    src="/img/Executive%20Boardroom%20Discussion.png"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 hidden border-t-2 border-brand-gold bg-white p-4 shadow-md sm:flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                    Mandate Excellence
                  </span>
                  <span className="text-xs font-bold text-brand-navy">
                    Hanseatische Diskretion
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 md:grid-cols-4">
              {[
                ["20+", "Jahre Erfahrung", "Senior Managementpraxis"],
                ["98 %", "Besetzungsquote", "Führungs- und Vorstandsmandate"],
                ["6 Mon.", "Besetzungsgarantie", "Nachbesetzungsgarantie"],
                ["BVMW", "Offizieller Partner", "Bundesverband der MittelstandsWirtschaft"],
              ].map(([counter, title, text]) => (
                <article className="border-l border-brand-border px-4 py-2" key={title}>
                  <span className="font-serif text-4xl text-[#775a19]">{counter}</span>
                  <h2 className="mt-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                    {title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-brand-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                Methodik &amp; Anspruch
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                Was ist Executive Search?
              </h2>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {[
                  {
                    icon: "target",
                    title: "Zielführende Direktansprache auf C-Level",
                    text:
                      "Executive Search bezeichnet die systematische Identifikation, Ansprache und Auswahl von Spitzenkräften für geschäftskritische Positionen.",
                    extra:
                      "Im Gegensatz zu generischen Stellenanzeigen treten wir direkt und hochgradig diskret an passive Spitzenkandidaten heran.",
                  },
                  {
                    icon: "hub",
                    title: "Der individuelle Multi-Channel-Ansatz",
                    text:
                      "Wir verbinden bewährte Advisory-Werte mit moderner Direkt- und Digital-Suche über ein über 20 Jahre gewachsenes Netzwerk.",
                    extra:
                      "Fachliche Exzellenz wird mit kultureller Passung, Persönlichkeit, Werthaltung und Führungsanspruch synchronisiert.",
                  },
                ].map((item) => (
                  <article className="bg-[#f2f4f6] p-7" key={item.title}>
                    <span className="flex h-10 w-10 items-center justify-center bg-brand-navy text-white">
                      <span aria-hidden="true" className="material-symbols-outlined text-[22px]">
                        {item.icon}
                      </span>
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-brand-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.text}</p>
                    <p className="mt-3 border-t border-brand-border pt-4 text-sm leading-relaxed text-brand-muted">
                      {item.extra}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="prozess"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="relative min-h-[380px] overflow-hidden rounded-lg lg:col-span-5 lg:min-h-[520px]">
                <Image
                  alt="Geschäftsführung bespricht Kandidaten für eine Schlüsselposition"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Warm%20Minimalist%20Consultation%20Around%20Table.png"
                />
                <div className="absolute bottom-5 right-5 rounded bg-brand-navy px-5 py-4 text-white shadow-lg">
                  <span className="block font-serif text-3xl text-[#fed488]">98 %</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Besetzungsquote
                  </span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Kulturelle Synchronisation
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Executive Search durch Schultz &amp; Partner – der richtige Fit entscheidet
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-slate">
                  Fachliche Exzellenz ist Grundvoraussetzung – erst die Passung
                  zu Wertekultur und Führungsanspruch sichert nachhaltigen Erfolg.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["assessment", "Detailliertes Anforderungsprofil"],
                    ["group", "Exklusive Kandidatenidentifikation"],
                    ["badge", "Fundierte Kandidatendossiers"],
                    ["handshake", "Begleitung bis zum Onboarding"],
                  ].map(([icon, text]) => (
                    <div className="flex items-center gap-3 border border-brand-border bg-[#f7f9fb] p-4" key={text}>
                      <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]">
                        {icon}
                      </span>
                      <span className="text-sm font-semibold text-brand-navy">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Transparenz &amp; Verlässlichkeit
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Transparente Executive Search für unsere Klienten
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Eine partnerschaftliche Zusammenarbeit bedeutet für uns
                  absolute Nachvollziehbarkeit in jedem Prozessschritt.
                </p>
                <div className="mt-6 grid gap-3">
                  {processCards.map((item) => (
                    <article className="flex items-start gap-3 rounded bg-white p-4 shadow-sm" key={item.title}>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-[#775a19]">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-brand-muted">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[420px] overflow-hidden rounded-lg lg:col-span-5 lg:order-2 lg:min-h-[520px]">
                <Image
                  alt="Senior Partner prüfen Kandidatendossiers"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png"
                />
                <div className="absolute bottom-4 right-4 hidden border-t-2 border-brand-gold bg-white p-4 shadow-md sm:block">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                    Garantie
                  </span>
                  <span className="text-xs font-bold text-brand-navy">180 Tage Absicherung</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  Management Mandate
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                  Executive Search mit persönlicher Verantwortung
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  Jedes Suchmandat wird von erfahrenen Senior Partnern geführt,
                  die selbst über langjährige Führungserfahrung verfügen.
                </p>
              </div>
              <div className="mt-10 space-y-6">
                {referenceClusters.map((cluster) => (
                  <article key={cluster.title}>
                    <div className="mb-3 flex items-center gap-3 border-b border-white/15 pb-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-[#e9c176]">
                        {cluster.icon}
                      </span>
                      <h3 className="text-xs font-bold uppercase tracking-wider">{cluster.title}</h3>
                    </div>
                    <p className="mb-3 text-sm text-slate-300">{cluster.text}</p>
                    <div className="flex flex-wrap gap-2">
                      {cluster.names.map((name) => (
                        <span className="bg-white px-3 py-2 text-sm font-semibold text-brand-navy" key={name}>
                          {name}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                Präsenz vor Ort
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                Executive Search Consultants in Hamburg und Bremen
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[
                  ["Standort Hamburg", "Büro Hamburg", "Neuer Wall 50", "20354 Hamburg", "040 - 85 37 22 26", "tel:+494085372226", "hamburg@schultz-partner.de"],
                  ["Standort Bremen", "Büro Bremen", "Neidenburger Straße 12", "28207 Bremen", "0421 - 24 43 039", "tel:+494212443039", "bremen@schultz-partner.de"],
                ].map(([location, title, street, postal, phone, phoneHref, email]) => (
                  <article className="bg-white p-6 shadow-sm" key={location}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#775a19]">{location}</p>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-brand-navy">{title}</h3>
                    <p className="mt-2 text-sm text-brand-muted">{street}<br />{postal}</p>
                    <div className="mt-5 flex flex-col gap-2 text-sm">
                      <a className="font-semibold text-brand-navy" href={phoneHref}>{phone}</a>
                      <a className="text-brand-muted" href={`mailto:${email}`}>{email}</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Transparenz &amp; Antworten
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Häufige Fragen zu Executive Search
                </h2>
              </div>
              <div className="mt-8 space-y-2">
                {faqs.map((faq) => (
                  <details className="group border border-brand-border bg-[#f7f9fb]" key={faq.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-brand-navy marker:hidden">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-[#775a19] transition-transform group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <p className="border-t border-brand-border px-5 py-4 text-sm leading-relaxed text-brand-muted">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-28 bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="kontakt-formular"
          >
            <div className="mx-auto max-w-7xl">
              <div className="bg-white p-6 shadow-md sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                      Diskrete Kontaktaufnahme
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                      Executive Search anfragen
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
                      Sprechen Sie direkt mit einem erfahrenen Senior Partner
                      über Ihre Vakanz – vertraulich und unverbindlich.
                    </p>
                    <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                      <a className="bg-[#f2f4f6] p-4 text-sm text-brand-navy" href="tel:+494085372226">
                        <span className="block text-xs text-brand-muted">Hamburg</span>
                        <strong>040 - 85 37 22 26</strong>
                      </a>
                      <a className="bg-[#f2f4f6] p-4 text-sm text-brand-navy" href="tel:+494212443039">
                        <span className="block text-xs text-brand-muted">Bremen</span>
                        <strong>0421 - 24 43 039</strong>
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <ExecutiveSearchInquiry />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
