import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PageInteractions from "@/app/page-interactions";
import PmiContactForm from "../PmiContactForm";
import PmiPhaseExplorer from "./PmiPhaseExplorer";

export const metadata: Metadata = {
  title:
    "Post-Merger-Integration Phasenmodell | Schultz & Partner",
  description:
    "Das Schultz & Partner PMI-Phasenmodell: strukturierte Planung, operative Integration, Synergierealisierung und nachhaltige Optimierung in sechs Phasen.",
};

const valueAnchors = [
  {
    icon: "view_timeline",
    title: "6 Phasen",
    description:
      "Strukturierte Abfolge von der Planung bis zur nachhaltigen Optimierung.",
  },
  {
    icon: "schedule",
    title: "Day 1 bis Monat 12+",
    description:
      "Klarer zeitlicher Rahmen von Sofortmaßnahmen bis zur Skalierung.",
  },
  {
    icon: "verified",
    title: "KPI-Messung",
    description:
      "Synergie-Controlling mit nachvollziehbarer und quantifizierbarer Validierung.",
  },
];

const crossFunctionalTasks = [
  {
    icon: "hub",
    title: "Integrationsmanagement",
    description:
      "Zentrale Steuerung und kontinuierliche Koordination des Gesamtprozesses durch ein professionelles Integration Management Office (IMO).",
  },
  {
    icon: "psychology",
    title: "Change Management",
    description:
      "Strukturierte Begleitung und Einbindung der Mitarbeitenden durch alle Veränderungsstufen.",
  },
  {
    icon: "campaign",
    title: "Kommunikation",
    description:
      "Transparente, taktgenaue Information von Mitarbeitenden, Kunden, Lieferanten, Kreditgebern und weiteren Stakeholdern.",
  },
  {
    icon: "diversity_3",
    title: "Kulturelle Integration",
    description:
      "Sensibler und proaktiver Umgang mit unterschiedlichen Werten, Führungsstilen, Gepflogenheiten und Unternehmenskulturen.",
  },
  {
    icon: "trending_up",
    title: "Synergiemanagement",
    description:
      "Methodische Erfassung, finanzielle Modellierung und engmaschige Überwachung der anvisierten Kosten- und Ertragssynergien.",
  },
  {
    icon: "security",
    title: "Risikomanagement",
    description:
      "Frühzeitige Identifikation, Bewertung und Mitigation operativer, finanzieller, personeller und rechtlicher Integrationsrisiken.",
  },
];

const timeline = [
  {
    phase: "Phase Pre-Closing",
    period: "Vor dem Closing",
    description:
      "Integrationsplanung und -vorbereitung, Erstellung des Day-1-Readiness-Konzepts sowie Vorbereitung von Führungskräfte- und Mitarbeiter-Briefings unter Beachtung des Gun-Jumping-Verbots.",
    focus: "Vorbereitung",
  },
  {
    phase: "Stichtag",
    period: "Tag 1 (Day 1)",
    description:
      "Sicherstellung der unmittelbaren operativen Handlungsfähigkeit, Aktivierung der Kommunikationskaskade für Belegschaft und Schlüsselkunden sowie Übergabe der Führungsstrukturen.",
    focus: "Continuity",
  },
  {
    phase: "Woche 1–4",
    period: "Erste 30 Tage",
    description:
      "Priorisierung kritischer Maßnahmen, Verankerung des IMO, Stabilisierung der Belegschaft und Einleitung gezielter Retentionsmaßnahmen für Leistungsträger und Schlüsselkunden.",
    focus: "Stabilisierung",
  },
  {
    phase: "Quartal 1",
    period: "Tag 31–100",
    description:
      "Umsetzung erster organisatorischer und operativer Integrationsmaßnahmen, Realisierung von Quick Wins und Zusammenführung von Supportfunktionen.",
    focus: "100-Tage-Plan",
  },
  {
    phase: "Jahr 1",
    period: "Monat 4–12",
    description:
      "Vertiefte strukturelle Integration, IT-Systemmigration, Produktlinien- und Markenbereinigung sowie sukzessive Hebung der Hauptsynergien im Vertrieb und Einkauf.",
    focus: "Synergien",
  },
  {
    phase: "Folgejahre",
    period: "Ab Monat 12",
    description:
      "Nachhaltige Prozessoptimierung, kontinuierliche Erfolgskontrolle, Post-Merger-Audit und Überführung der Integrationsaktivitäten in das reguläre Linienmanagement.",
    focus: "Verstetigung",
  },
];

const successDimensions = [
  {
    icon: "payments",
    title: "Finanziell",
    metrics: [
      "Realisierte Kostensynergien (Run-rate vs. Plan)",
      "Umsatzwachstum & Cross-Selling-Erlöse",
      "Einhaltung des Integrationsbudgets (One-off Costs)",
    ],
  },
  {
    icon: "manufacturing",
    title: "Operativ",
    metrics: [
      "Prozessdurchlaufzeiten in Schlüsselbereichen",
      "Gesamtproduktivität und Auslastungsquoten",
      "Lieferfähigkeit und Order-to-Delivery-Qualität",
    ],
  },
  {
    icon: "badge",
    title: "Personal",
    metrics: [
      "Ungewollte Mitarbeiterfluktuation",
      "Mitarbeiterzufriedenheit (Pulse Checks)",
      "Schlüsselkräftebindung (Key Talent Retention)",
    ],
  },
  {
    icon: "groups",
    title: "Kunden",
    metrics: [
      "Kundenzufriedenheit & Net Promoter Score",
      "Kundenabwanderung (Churn Rate)",
      "Umsatzstabilität im A-Kunden-Segment",
    ],
  },
  {
    icon: "dns",
    title: "Technologisch",
    metrics: [
      "IT-Systemverfügbarkeit während des Cutover",
      "Erfolgreiche System- & Datenmigrationen (ERP/CRM)",
      "Konsolidierung der Software-Lizenzlandschaft",
    ],
  },
  {
    icon: "event_available",
    title: "Zeitlich",
    metrics: [
      "Pünktliche Meilensteinerreichung",
      "Anteil fristgerecht abgeschlossener Arbeitspakete",
      "Geschwindigkeit des Übergangs in den Regelbetrieb",
    ],
  },
];

export default function PmiPhaseModelPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb]">
          <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#0e1c2f] pb-14 pt-32 text-white sm:min-h-[600px] sm:pb-16 sm:pt-36 lg:min-h-[620px] lg:pb-20 lg:pt-40">
            <Image
              alt=""
              className="object-cover object-center opacity-60"
              fill
              priority
              sizes="100vw"
              src="/img/Dusk%20Waterfront%20Executive%20Meeting.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/45 via-transparent to-[#071321]/5" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[#ffdea5] backdrop-blur-md">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-base"
                  >
                    account_tree
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                    Unternehmensberatung · PMI · Phasenmodell
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="text-[#ffdea5]">
                    Post-Merger-Integration
                  </span>
                  <br className="hidden sm:block" /> Phasenmodell nach Schultz
                  &amp; Partner
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Strukturierte Steuerung, verlässliche Synergierealisierung
                  und operative Sicherheit von der Pre-Merger-Planung bis zur
                  langfristigen Optimierung im gehobenen Mittelstand und
                  Großunternehmen.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 lg:gap-6">
              {valueAnchors.map((anchor) => (
                <article
                  className="flex min-w-0 items-start gap-4 rounded-xl bg-[#0e1c2f] p-5 text-white shadow-lg sm:p-6"
                  key={anchor.title}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#ffdea5]">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-3xl"
                    >
                      {anchor.icon}
                    </span>
                  </span>
                  <div>
                    <h2 className="font-serif text-xl font-semibold text-[#ffdea5]">
                      {anchor.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#d6e3fe]">
                      {anchor.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="space-y-5 lg:col-span-7">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                    Methodische Fundierung
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-[#191c1e] sm:text-3xl">
                    Das Schultz &amp; Partner Phasenmodell zur Post Merger
                    Integration (PMI)
                  </h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  <p>
                    Das Post Merger Integration (PMI)-Phasenmodell als
                    Ablaufmodell beschreibt den strukturierten Prozess, mit dem
                    zwei Unternehmen mit der professionellen Unterstützung
                    durch Schultz &amp; Partner nach einer Fusion oder
                    Übernahme organisatorisch, kulturell, technisch und
                    wirtschaftlich zusammengeführt werden.
                  </p>
                  <p>
                    Ziel ist es, die in der Due Diligence prognostizierten
                    Synergien verlässlich zu realisieren, den operativen
                    Geschäftsbetrieb unterbrechungsfrei fortzuführen und einen
                    nachhaltigen Unternehmenserfolg für Gesellschafter, Beirat
                    und Führungskräfte sicherzustellen.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#775a19]">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-lg"
                    >
                      fact_check
                    </span>
                    Integrationserfolg durch Disziplin &amp; Transparenz
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
                    Mehr als 60 % aller Transaktionen verfehlen ihre
                    Zielsetzungen durch unklare Rollenteilung, mangelhafte
                    Day-1-Vorbereitung oder zögerliche Kulturintegration. Das
                    Schultz &amp; Partner Phasenmodell adressiert diese
                    Risikofaktoren systematisch.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl bg-white p-2 shadow-md">
                  <div className="relative h-72 overflow-hidden rounded-lg sm:h-80">
                    <Image
                      alt="Berater analysiert finanzielle und operative Integrationsdaten"
                      className="object-cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      src="/img/Collaborative%20Office%20Document%20Review.png"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-2 px-3 py-4 text-xs sm:flex-row sm:items-center">
                    <span className="font-semibold text-[#191c1e]">
                      Methodische Exzellenz
                    </span>
                    <span className="font-bold uppercase tracking-wider text-[#775a19]">
                      Day 1 bis Stabilisierung
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <PmiPhaseExplorer />

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-9 max-w-3xl sm:mb-12">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Horizontale Prozessabsicherung
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                  Querschnittsaufgaben über alle Phasen
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Eine erfolgreiche Post Merger Integration berücksichtigt
                  neben den einzelnen Phasen auch übergreifende Aufgaben. Diese
                  begleiten den Prozess idealerweise von der Integrationsplanung
                  bis zum Abschluss und sichern eine stabile Steuerung.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {crossFunctionalTasks.map((task) => (
                  <article
                    className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
                    key={task.title}
                  >
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eceef0] text-[#775a19]">
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-2xl"
                      >
                        {task.icon}
                      </span>
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#191c1e]">
                      {task.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
                      {task.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="order-2 lg:col-span-6 lg:order-1">
                <div className="relative min-h-[340px] overflow-hidden rounded-xl bg-[#e6e8ea] p-2 shadow-md sm:min-h-[420px]">
                  <Image
                    alt="Senior Partner und Führungskräfte stimmen PMI-Maßnahmen ab"
                    className="rounded-lg object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src="/img/Executive%20Boardroom%20Discussion.png"
                  />
                </div>
              </div>
              <div className="order-1 space-y-5 lg:col-span-6 lg:order-2">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                    Executive Boardroom Sparring
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                    Persönliche Begleitung auf Partnerebene
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Bei Schultz &amp; Partner wird Ihre Post-Merger-Integration
                  nicht an Junior-Teams delegiert. Unsere Senior Partner
                  verfügen über jahrzehntelange Erfahrung in der Führung
                  mittelständischer Industrie- und Handelsunternehmen sowie
                  internationaler Konzernsparten.
                </p>
                <ul className="space-y-3 text-sm leading-relaxed text-[#191c1e]">
                  {[
                    "Direkte Verantwortung und Präsenz im Lenkungsausschuss",
                    "Erprobte Templates, Playbooks und PMI-Controlling-Dashboards",
                    "Höchste Diskretion gegenüber Kunden, Wettbewerb und Kapitalgebern",
                  ].map((benefit) => (
                    <li className="flex items-start gap-2" key={benefit}>
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-[#775a19]"
                      >
                        check_circle
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-9 max-w-3xl sm:mb-12">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Roadmap &amp; Meilenstein-Kadenz
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                  Zeitliche Einordnung der Phasen
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Die tatsächliche Dauer einer PMI hängt von Unternehmensgröße,
                  regulatorischer Komplexität und der gewählten
                  Integrationsstrategie ab. Folgende Taktung hat sich in der
                  Praxis bewährt:
                </p>
              </div>
              <div className="space-y-3">
                {timeline.map((step, index) => (
                  <article
                    className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-6 md:p-5"
                    key={step.period}
                  >
                    <div className="flex items-center gap-3 md:w-1/4">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-serif text-lg font-semibold ${
                          index === 0
                            ? "bg-[#0e1c2f] text-white"
                            : index === 1
                              ? "bg-[#775a19] text-white"
                              : "bg-[#e0e3e5] text-[#191c1e]"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#775a19]">
                          {step.phase}
                        </span>
                        <h3 className="font-serif text-lg font-semibold text-[#191c1e]">
                          {step.period}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-[#44474c] md:w-1/2">
                      {step.description}
                    </p>
                    <div className="md:w-1/4 md:text-right">
                      <span className="inline-block rounded bg-[#eceef0] px-3 py-1.5 text-xs font-semibold text-[#191c1e]">
                        Fokus: {step.focus}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-lg bg-[#e0e3e5] p-4 text-sm leading-relaxed text-[#44474c]">
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined shrink-0 text-xl text-[#775a19]"
                >
                  info
                </span>
                <p>
                  <span className="font-semibold text-[#191c1e]">
                    Hinweis zur Individualität:
                  </span>{" "}
                  Die genannten Zeiträume sind erprobte Richtwerte und keine
                  starren Schemata. Schultz &amp; Partner passt Rhythmus und
                  Schwerpunktphasen individuell an Ihre Transaktion und die
                  Branchengegebenheiten an.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-9 max-w-3xl sm:mb-12">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Valide Erfolgskontrolle
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                  Erfolgskriterien des PMI-Prozesses
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Die Wirksamkeit des Phasenmodells lässt sich anhand konkreter
                  Kennzahlen messen. Eine gemeinsame Zieldefinition zu Beginn
                  schafft eine verlässliche Basis für Shareholder und
                  Stakeholder.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {successDimensions.map((dimension, index) => (
                  <article
                    className="rounded-xl bg-[#f2f4f6] p-5 shadow-sm sm:p-6"
                    key={dimension.title}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded bg-[#e0e3e5] text-[#775a19]">
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined text-xl"
                        >
                          {dimension.icon}
                        </span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#775a19]">
                        Dimension {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#191c1e]">
                      {dimension.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#44474c]">
                      {dimension.metrics.map((metric) => (
                        <li className="flex items-start gap-2" key={metric}>
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#775a19]"
                          />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-xl bg-white p-5 shadow-sm sm:p-8 md:flex-row md:items-center">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Executive Dialog
                </span>
                <h2 className="mt-2 font-serif text-xl font-semibold text-[#191c1e] sm:text-2xl">
                  Planen Sie eine Unternehmensübernahme oder Fusion?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
                  Post Merger Integration Professionals – höchste Diskretion,
                  fundierte Branchenkenntnis und verlässliche Führung.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-[#eceef0] px-4 py-3 text-xs font-semibold text-[#191c1e] transition-colors hover:bg-[#e0e3e5]"
                  href="/unternehmensberatung/post-merger-integration"
                >
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-base"
                  >
                    arrow_back
                  </span>
                  Zurück zur Übersicht
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-[#0e1c2f] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#001c38]"
                  href="#kontakt-form"
                >
                  PMI-Beratung anfragen
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-base"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-32 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="kontakt-form"
          >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <PmiContactForm />
              </div>
              <div className="flex flex-col gap-5 lg:col-span-5">
                <div className="space-y-5 rounded-xl bg-[#f2f4f6] p-5 sm:p-7">
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                    Unsere Büros
                  </span>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-[#191c1e]">
                      Standort Hamburg
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#191c1e]">
                      Neuer Wall 50 · 20354 Hamburg
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
                      Telefon:{" "}
                      <a className="hover:text-[#775a19]" href="tel:04085372226">
                        040 - 85 37 22 26
                      </a>
                      <br />
                      E-Mail:{" "}
                      <a
                        className="hover:text-[#775a19]"
                        href="mailto:hamburg@schultz-partners.de"
                      >
                        hamburg@schultz-partners.de
                      </a>
                    </p>
                  </div>
                  <div className="h-px bg-[#c5c6cd]/60" />
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-[#191c1e]">
                      Standort Bremen
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#191c1e]">
                      Neidenburger Straße 12 · 28207 Bremen
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
                      Telefon:{" "}
                      <a className="hover:text-[#775a19]" href="tel:04212443039">
                        0421 - 24 43 039
                      </a>
                      <br />
                      E-Mail:{" "}
                      <a
                        className="hover:text-[#775a19]"
                        href="mailto:bremen@schultz-partners.de"
                      >
                        bremen@schultz-partners.de
                      </a>
                    </p>
                  </div>
                </div>
                <div className="rounded-xl bg-[#e0e3e5] p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#775a19]">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-lg"
                    >
                      verified_user
                    </span>
                    100% Mandantenschutz &amp; NDA
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
                    Auf Wunsch unterzeichnen wir vorab eine
                    Vertraulichkeitsvereinbarung. Alle übermittelten
                    Informationen behandeln wir diskret und vertraulich.
                  </p>
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
