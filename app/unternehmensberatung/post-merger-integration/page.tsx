import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PageInteractions from "@/app/page-interactions";
import PmiContactForm from "./PmiContactForm";

export const metadata: Metadata = {
  title: "Post Merger Integration Beratung | Schultz & Partner",
  description:
    "Strukturierte Post Merger Integration: von der strategischen Planung über Projektmanagement und Change Management bis zur nachhaltigen Realisierung von Synergien.",
};

const milestones = [
  {
    number: "01",
    label: "Tag 1 bis 100",
    title: "PMI-Planung & Strategie",
    description:
      "Strukturierte Integrationsvorbereitung ab Day one – mit klarem 100-Tage-Plan und langfristiger Roadmap für jede Phase der Übernahme.",
  },
  {
    number: "02",
    label: "Workstream-Steuerung",
    title: "Projektmanagement",
    description:
      "Koordination aller Workstreams, Fachbereiche und Stakeholder. Wir steuern Ihr PMI-Projekt mit klaren Meilensteinen und verbindlichem Reporting.",
  },
  {
    number: "03",
    label: "Kulturelle Integration",
    title: "Change Management",
    description:
      "Mitarbeitende und Führungskräfte sicher durch den Wandel begleiten – mit maßgeschneiderten Kommunikations- und Entwicklungsprogrammen.",
  },
];

const pmoFocusAreas = [
  "Erstellung eines strukturierten Integrationsfahrplans (100-Day-Plan und langfristige Roadmap)",
  "Koordination aller Fachbereiche, Führungskräfte und Stakeholder",
  "Risikomanagement und vorausschauende Eskalationsprozesse",
  "Fortlaufendes Reporting und transparente Steuerung des Integrationsfortschritts",
  "Identifikation und messbare Realisierung von Synergiepotenzialen",
];

const changeApproach = [
  {
    icon: "forum",
    title: "Stakeholder-Analyse",
    description:
      "Maßgeschneiderte Kommunikationsplanung für Belegschaft und Schlüsselpersonen.",
  },
  {
    icon: "psychology",
    title: "Führungskräfte-Coaching",
    description:
      "Moderierte Teamworkshops und Vorbereitung der Leitungsriege auf die neue Führungsrolle.",
  },
  {
    icon: "diversity_3",
    title: "Kulturanalyse",
    description:
      "Systematische Kulturentwicklung und Überwindung historischer Reibungspunkte.",
  },
  {
    icon: "campaign",
    title: "Interne Kommunikation",
    description:
      "Nachhaltige Mitarbeitereinbindung zur Vermeidung von Know-how- und Fluktuationsverlusten.",
  },
];

const specialties = [
  {
    tone: "dark",
    image: "/img/Focused%20Office%20Discussion.png",
    imageAlt: "Berater diskutieren die Herauslösung eines Unternehmensteils",
    badge: "Spezialdisziplin",
    title: "Carve-Out-Beratung",
    description:
      "Wir sind spezialisiert auf die Herauslösung von Teilunternehmensbereichen und Marken aus Einzel- und Konzernunternehmen. Sowohl von Käufer- als auch von Verkäufer-Seite aus beraten wir Sie in allen Fragen des Carve-Outs, der Neustrukturierung nach der Herauslösung bzw. der Schaffung von Synergien bei der Integration. Aufgrund unserer Kompetenz in der industriellen Praxis sind wir bei Ausgründungen und Management Buy-Outs für Sie der richtige Partner.",
    action: "Carve-Out-Beratung anfragen",
    icon: "call_split",
  },
  {
    tone: "light",
    image: "/img/Waterfront%20Office%20Meeting%20Dialogue2.png",
    imageAlt: "Führungskräfte stimmen unterschiedliche Unternehmenskulturen ab",
    badge: "Präventive Analyse",
    title: "Cultural Due Diligence",
    description:
      "Die kulturelle Due Diligence ist ein entscheidender, häufig unterschätzter Baustein jeder Akquisition. Bevor ein Unternehmen erworben wird, analysieren wir systematisch die Unternehmenskultur des Zielunternehmens – von Führungsstil und Kommunikationsmustern bis hin zu gelebten Werten und Entscheidungsstrukturen. Kulturelle Divergenzen gehören zu den häufigsten Ursachen für das Scheitern von Fusionen. Eine professionelle Cultural Due Diligence macht Unterschiede sichtbar, bevor sie zu Integrationshindernissen werden. Auf dieser Basis entwickeln wir mit Ihnen gezielte Maßnahmen für eine reibungslose kulturelle Integration.",
    action: "Cultural Due Diligence anfragen",
    icon: "diversity_3",
  },
];

export default function PostMergerIntegrationPage() {
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
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[#ffdea5] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffdea5]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                    Unternehmensberatung · Post Merger Integration
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="text-[#ffdea5]">Post Merger Integration</span>
                  <br className="hidden sm:block" /> Beratung
                </h1>
                <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-slate-200 sm:text-xl">
                  Wir denken vor und schaffen nachhaltigen Mehrwert.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="space-y-5 lg:col-span-7">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                    Wertschöpfung nach der Transaktion
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-[#191c1e] sm:text-3xl lg:text-4xl">
                    Post Merger Integration: Der entscheidende Schritt nach dem
                    Unternehmenskauf
                  </h2>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  <p>
                    Der Kauf eines Unternehmens ist ein wegweisendes Projekt –
                    doch das eigentliche Fundament für nachhaltigen Erfolg wird
                    erst danach gelegt. Post Merger Integration (PMI) bezeichnet
                    alle Prozesse und Maßnahmen, die nach dem Abschluss eines
                    Kaufvertrags einsetzen und darüber entscheiden, ob eine
                    Akquisition ihren angestrebten Mehrwert entfaltet.
                  </p>
                  <p>
                    Viele Unternehmen unterschätzen den Aufwand, der nach dem
                    sogenannten Day-one auf sie zukommt. Dabei sind operative
                    Übernahme, kulturelle Angleichung und strukturelle
                    Neuausrichtung die Faktoren, die langfristig über Erfolg
                    oder Misserfolg einer Transaktion entscheiden. Je nach
                    Umfang und Komplexität des Projekts kann eine professionelle
                    Post-Merger-Integrationsphase bis zu zwei Jahre in Anspruch
                    nehmen.
                  </p>
                  <p className="font-semibold text-[#191c1e]">
                    Schultz &amp; Partner begleitet Sie mit strukturierter
                    PMI-Beratung – von der strategischen Planung über das
                    Projektmanagement bis zur vollständigen Integration.
                  </p>
                </div>
                <a
                  className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#0e1c2f] transition-colors hover:text-[#775a19]"
                  href="#kontakt-pmi"
                >
                  <span>Post Merger Integration anfragen</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
              <div className="relative lg:col-span-5">
                <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[#0e1c2f] shadow-xl sm:min-h-[420px]">
                  <Image
                    alt="M&A-Beratung und Integrationsplanung am Konferenztisch"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    src="/img/Modern%20Office%20Presentation%20Around%20the%20Table%20(1).png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/95 via-[#0e1c2f]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#775a19]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffdea5]">
                        Mandatspraxis
                      </span>
                    </div>
                    <p className="mt-2 font-serif text-xl font-medium">
                      M&amp;A-Integration &amp; Synergiesteuerung
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm">
                      Strukturierte Roadmap-Abstimmung und operative Begleitung
                      ab Tag 1
                    </p>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-xl bg-[#e0e3e5]"
                />
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-32 bg-[#f3f1eb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="leistungsbausteine"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-9 max-w-2xl sm:mb-12">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Strukturierter Ablauf
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                  Drei Kernsäulen für belastbare Resultate
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Präzise Orchestrierung von Tag eins bis zur vollständigen
                  Realisierung der Synergiepotenziale.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
                {milestones.map((milestone) => (
                  <article
                    className="flex min-w-0 flex-col justify-between rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-7"
                    key={milestone.number}
                  >
                    <div>
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-serif text-3xl text-[#775a19]">
                          {milestone.number}
                        </span>
                        <span className="rounded bg-[#eceef0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#44474c]">
                          {milestone.label}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-[#191c1e]">
                        {milestone.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#44474c]">
                        {milestone.description}
                      </p>
                    </div>
                    <div className="mt-6 h-1 w-12 rounded-full bg-[#775a19]" />
                  </article>
                ))}
              </div>
              <div className="mt-7">
                <a
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e1c2f] transition-colors hover:text-[#775a19]"
                  href="/unternehmensberatung/post-merger-integration/post-merger-integration-phasenmodell-nach-schultz-partner"
                >
                  <span>Das vollständige 6-Phasenmodell kennenlernen</span>
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-lg"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="order-2 lg:col-span-5 lg:order-1">
                <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[#e6e8ea] shadow-lg sm:min-h-[480px]">
                  <Image
                    alt="Projektteam stimmt die Integrationsplanung ab"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    src="/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0e1c2f]/80 via-transparent to-transparent p-4 sm:p-6">
                    <div className="w-full rounded-lg bg-white/90 p-4 shadow backdrop-blur-sm">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#775a19]">
                        PMO Excellence
                      </span>
                      <p className="mt-1 text-sm font-semibold text-[#191c1e]">
                        Direkte operative Leitung vor Ort durch erfahrene Senior
                        Partner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 space-y-5 lg:col-span-7 lg:order-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                    Operative Exzellenz &amp; PMO
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-[#191c1e] sm:text-3xl">
                    PMI-Projektmanagement: Struktur in jeder Integrationsphase
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Ein professionelles PMI-Projektmanagement schafft
                  Transparenz, Verbindlichkeit und Geschwindigkeit. Wir
                  entwickeln gemeinsam mit Ihnen einen integrierten Projektplan,
                  der alle relevanten Workstreams koordiniert – von IT-Systemen
                  und Finanzprozessen über HR bis hin zu Marke und Kommunikation.
                </p>
                <ul className="space-y-3 py-1">
                  {pmoFocusAreas.map((area) => (
                    <li
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#191c1e]"
                      key={area}
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-[#775a19]"
                      >
                        check_circle
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-l-[3px] border-[#775a19] bg-[#f3f1eb] p-4 text-sm leading-relaxed text-[#44474c]">
                  <span className="font-semibold text-[#191c1e]">Hinweis:</span>{" "}
                  Schultz &amp; Partner übernimmt auf Wunsch auch die operative
                  Projektleitung – direkt vor Ort in Ihrem Unternehmen.
                </div>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded bg-[#0e1c2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#001c38]"
                  href="#kontakt-pmi"
                >
                  PMI-Beratung anfragen
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f3f1eb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="space-y-5 lg:col-span-7">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                    Mensch &amp; Organisation
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-tight text-[#191c1e] sm:text-3xl">
                    Change Management als Erfolgsfaktor in der Post Merger
                    Integration
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Technische und prozessuale Integration gelingt nur, wenn die
                  Menschen dahinter mitgenommen werden. Change Management ist
                  daher kein optionaler Baustein der PMI – es ist ihre
                  Grundvoraussetzung.
                </p>
                <div className="pt-1">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#191c1e]">
                    Unser Ansatz im Change Management umfasst:
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {changeApproach.map((item) => (
                      <article
                        className="rounded-lg bg-white p-4 shadow-sm"
                        key={item.title}
                      >
                        <div className="mb-2 flex items-center gap-2 text-[#191c1e]">
                          <span
                            aria-hidden="true"
                            className="material-symbols-outlined text-lg text-[#775a19]"
                          >
                            {item.icon}
                          </span>
                          <h4 className="text-sm font-semibold">{item.title}</h4>
                        </div>
                        <p className="text-xs leading-relaxed text-[#44474c]">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded bg-[#0e1c2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#001c38]"
                  href="#kontakt-pmi"
                >
                  Change Management anfragen
                </a>
              </div>
              <div className="relative lg:col-span-5">
                <div className="relative min-h-[360px] overflow-hidden rounded-xl bg-[#0e1c2f] shadow-lg sm:min-h-[480px]">
                  <Image
                    alt="Führungskräfte besprechen die kulturelle Integration"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    src="/img/Waterfront%20Office%20Meeting%20Dialogue.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/90 via-[#0e1c2f]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffdea5]">
                      Menschliche Dynamik
                    </span>
                    <p className="mt-2 font-serif text-xl font-medium">
                      Sicherheit in Transformationsphasen
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm">
                      Verlässliche Begleitung für Inhaber, Management und
                      Belegschaft
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Ergänzende Kernkompetenzen
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                  Spezialisierte Beratungsfelder im M&amp;A-Umfeld
                </h2>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {specialties.map((specialty) => (
                  <article
                    className={`flex min-w-0 flex-col overflow-hidden rounded-xl shadow-lg ${
                      specialty.tone === "dark"
                        ? "bg-[#0e1c2f] text-white"
                        : "border border-[#e2ded5] bg-[#f3f1eb] text-[#191c1e]"
                    }`}
                    key={specialty.title}
                  >
                    <div className="relative h-56 overflow-hidden sm:h-64">
                      <Image
                        alt={specialty.imageAlt}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={specialty.image}
                      />
                      <div
                        className={`absolute inset-0 ${
                          specialty.tone === "dark"
                            ? "bg-gradient-to-t from-[#0e1c2f] via-[#0e1c2f]/10 to-transparent"
                            : "bg-gradient-to-t from-[#f3f1eb] via-[#f3f1eb]/10 to-transparent"
                        }`}
                      />
                      <span
                        className={`absolute left-4 top-4 rounded px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          specialty.tone === "dark"
                            ? "bg-[#775a19] text-white"
                            : "bg-[#0e1c2f] text-white"
                        }`}
                      >
                        {specialty.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-7">
                      <div>
                        <h3
                          className={`font-serif text-2xl font-semibold ${
                            specialty.tone === "dark"
                              ? "text-white"
                              : "text-[#191c1e]"
                          }`}
                        >
                          {specialty.title}
                        </h3>
                        <p
                          className={`mt-3 text-sm leading-relaxed ${
                            specialty.tone === "dark"
                              ? "text-slate-200"
                              : "text-[#44474c]"
                          }`}
                        >
                          {specialty.description}
                        </p>
                      </div>
                      <a
                        className={`mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                          specialty.tone === "dark"
                            ? "bg-white/10 text-[#ffdea5] hover:bg-[#775a19] hover:text-white"
                            : "bg-white text-[#0e1c2f] shadow-sm hover:bg-[#0e1c2f] hover:text-white"
                        }`}
                        href="#kontakt-pmi"
                      >
                        <span>{specialty.action}</span>
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined text-base"
                        >
                          {specialty.icon}
                        </span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-32 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="kontakt-pmi"
          >
            <div className="mx-auto max-w-7xl rounded-xl bg-[#0e1c2f] p-5 text-white shadow-2xl sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="space-y-6 lg:col-span-5">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffdea5]">
                      Der nächste Schritt
                    </span>
                    <h2 className="mt-2 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
                      Lassen Sie uns über Ihre Situation sprechen.
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#d6e3fe]">
                      Vertraulich, unverbindlich und direkt mit einem
                      geschäftsführenden Partner an unseren Standorten Hamburg
                      und Bremen.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#ffdea5]">
                        Standort Hamburg
                      </span>
                      <p className="mt-1 text-sm font-semibold">
                        Neuer Wall 50, 20354 Hamburg
                      </p>
                      <a
                        className="mt-2 inline-flex items-center gap-2 text-xs text-[#d6e3fe] transition-colors hover:text-[#ffdea5]"
                        href="tel:04085372226"
                      >
                        <span aria-hidden="true" className="material-symbols-outlined text-base">
                          call
                        </span>
                        +49 40 85 37 22 26
                      </a>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-[#ffdea5]">
                        Standort Bremen
                      </span>
                      <p className="mt-1 text-sm font-semibold">
                        Neidenburger Straße 12, 28207 Bremen
                      </p>
                      <a
                        className="mt-2 inline-flex items-center gap-2 text-xs text-[#d6e3fe] transition-colors hover:text-[#ffdea5]"
                        href="tel:04212443039"
                      >
                        <span aria-hidden="true" className="material-symbols-outlined text-base">
                          call
                        </span>
                        +49 421 24 43 039
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <PmiContactForm />
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
