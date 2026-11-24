"use client";

import { useState } from "react";

const caseStudies = [
  {
    id: "schifffahrt",
    tabLabel: "Case 1: Schifffahrt (20 Mio. €)",
    icon: "anchor",
    category: "Strategieberatung & Prozessoptimierung",
    industry: "Schifffahrtsunternehmen",
    title:
      "Optimierung administrativer Prozessabläufe & Aufbauorganisation",
    metrics: [
      { label: "Umsatzvolumen", value: "20 Mio. €" },
      { label: "Mandatsart", value: "Organisationsentwicklung" },
    ],
    phases: [
      {
        title: "Der Auftrag",
        icon: "assignment",
        description:
          "Umfassende Weiterentwicklung und Modernisierung der Prozessabläufe in der kaufmännischen Verwaltung infolge dynamischer Marktanforderungen und wachsender Schiffsflotten.",
        noteIcon: "flag",
        note: "Fokus: Effizienz & Fehlerreduktion",
      },
      {
        title: "Der Ablauf",
        icon: "hub",
        bullets: [
          "Detaillierte Prozessanalyse aller kaufmännischen Abteilungen",
          "Potenzialanalyse und Kompetenzerfassung der Mitarbeitenden",
          "Erstellung des strategischen Konzepts und lückenlose Dokumentation",
          "Änderung der Aufbauorganisation und Implementierung eines Trainingsplans",
        ],
        noteIcon: "schedule",
        note: "Methodik: Vor-Ort-Begleitung",
      },
      {
        title: "Das Ergebnis",
        icon: "trending_up",
        results: [
          "Signifikante Effizienzsteigerung in allen Verwaltungsbereichen",
          "Vermeidung von Neueinstellungen trotz Flottenerweiterung",
          "Nachhaltiger Überstundenabbau und reduzierte Fehlerquote",
          "Messbar höhere Kundenzufriedenheit der Reeder",
        ],
        noteIcon: "verified",
        note: "Mandatserfolg voll bestätigt",
      },
    ],
  },
  {
    id: "pharma",
    tabLabel: "Case 2: Pharma & Kosmetik (30 Mio. €)",
    icon: "biotech",
    category: "Operative Umsetzung & Interim Management",
    industry: "Pharma- & Kosmetikindustrie",
    title:
      "Strukturierung des Personalmanagements bei organischem Wachstum",
    metrics: [
      { label: "Umsatz & Team", value: "30 Mio. € / 80 MA" },
      { label: "Einsatzdauer", value: "4 Monate Interim" },
    ],
    phases: [
      {
        title: "Der Auftrag",
        icon: "assignment",
        description:
          "Starkes organisches Unternehmenswachstum erforderte eine zeitnahe, professionelle und zukunftsfähige Personalmanagementstruktur zur Absicherung des operativen Geschäfts.",
        noteIcon: "flag",
        note: "Fokus: Skalierbare HR-Architektur",
      },
      {
        title: "Der Ablauf",
        icon: "hub",
        bullets: [
          "Umfassende Bestandsanalyse des gesamten Personalbereichs",
          "Konzeption von Personalentwicklungs- und Bonussystemen",
          "Operatives Interim-Management als Personalleiter (4 Monate)",
          "Rekrutierung von zwei HR-Spezialisten und Schulung des Führungsteams",
        ],
        noteIcon: "schedule",
        note: "Methodik: Hands-on Interim Management",
      },
      {
        title: "Das Ergebnis",
        icon: "trending_up",
        results: [
          "Vollständig etablierte HR-Abteilung mit klar definierten Standardprozessen",
          "Reibungsloser Übergang an das fest eingestellte interne Personalteam",
          "Transparente Zielvereinbarungen und leistungsorientiertes Vergütungsmodell",
          "Stabile Basis für weiteres Wachstum auf über 100 Mitarbeitende",
        ],
        noteIcon: "verified",
        note: "Struktur nachhaltig gesichert",
      },
    ],
  },
];

export default function StrategicCaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section
      className="scroll-mt-32 bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="praxis-erfolge"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
              Erfolgreiche Mandate
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
              Praxisnahe Mandatserfolge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#44474c] sm:text-base">
              Veranschaulichte Projektabläufe: von der ersten Analyse bis zum
              messbaren Mehrwert.
            </p>
          </div>
          <div
            aria-label="Fallstudie auswählen"
            className="flex flex-col gap-1 rounded-lg bg-[#e0e3e5] p-1.5 shadow-inner sm:flex-row"
            role="tablist"
          >
            {caseStudies.map((study, index) => (
              <button
                aria-controls={`case-content-${study.id}`}
                aria-selected={activeCase === index}
                className={`flex items-center gap-2 rounded px-3 py-2 text-left text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                  activeCase === index
                    ? "bg-white text-[#191c1e] shadow-sm"
                    : "text-[#44474c] hover:text-[#191c1e]"
                }`}
                id={`case-tab-${study.id}`}
                key={study.id}
                onClick={() => setActiveCase(index)}
                role="tab"
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="material-symbols-outlined text-lg text-[#775a19]"
                >
                  {study.icon}
                </span>
                <span>{study.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {caseStudies.map((study) => (
          <div
            aria-labelledby={`case-tab-${study.id}`}
            className="space-y-4"
            hidden={study !== caseStudies[activeCase]}
            id={`case-content-${study.id}`}
            key={study.id}
            role="tabpanel"
            tabIndex={0}
          >
            <div className="mb-5 flex flex-col justify-between gap-5 rounded-xl bg-white p-5 shadow-sm sm:p-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[#0e1c2f] text-[#ffdea5]">
                  <span aria-hidden="true" className="material-symbols-outlined text-[30px]">
                    {study.icon}
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#775a19]">
                      {study.category}
                    </span>
                    <span aria-hidden="true" className="text-[#c5c6cd]">
                      •
                    </span>
                    <span className="text-[#44474c]">{study.industry}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-semibold tracking-tight text-[#191c1e] sm:text-xl">
                    {study.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 pl-0 sm:pl-[4.5rem] lg:pl-0">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#44474c]">
                      {metric.label}
                    </span>
                    <span className="font-serif text-lg font-semibold text-[#0e1c2f]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
              {study.phases.map((phase, index) => (
                <article
                  className={`flex flex-col justify-between rounded-xl p-5 shadow-sm sm:p-6 ${
                    index === 2
                      ? "bg-[#0e1c2f] text-white shadow-md"
                      : "bg-white text-[#191c1e]"
                  }`}
                  key={phase.title}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#775a19]">
                        Phase {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`material-symbols-outlined text-[22px] ${
                          index === 2 ? "text-[#ffdea5]" : "text-[#75777d]"
                        }`}
                      >
                        {phase.icon}
                      </span>
                    </div>
                    <h4
                      className={`mb-3 font-serif text-lg font-semibold ${
                        index === 2 ? "text-white" : "text-[#191c1e]"
                      }`}
                    >
                      {phase.title}
                    </h4>
                    {phase.description && (
                      <p className="text-sm leading-relaxed text-[#44474c]">
                        {phase.description}
                      </p>
                    )}
                    {phase.bullets && (
                      <ul className="space-y-2.5 text-sm leading-relaxed text-[#44474c]">
                        {phase.bullets.map((bullet) => (
                          <li className="flex items-start gap-2" key={bullet}>
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#775a19]"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {phase.results && (
                      <ul className="space-y-2.5 text-sm leading-relaxed text-[#d6e3fe]">
                        {phase.results.map((result) => (
                          <li className="flex items-start gap-2" key={result}>
                            <span
                              aria-hidden="true"
                              className="material-symbols-outlined mt-0.5 shrink-0 text-base text-[#ffdea5]"
                            >
                              task_alt
                            </span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div
                    className={`mt-5 flex items-center gap-1.5 border-t pt-4 text-xs font-medium ${
                      index === 2
                        ? "border-white/15 text-[#ffdea5]"
                        : "border-[#eceef0] text-[#44474c]"
                    }`}
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-base">
                      {phase.noteIcon}
                    </span>
                    <span>{phase.note}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
