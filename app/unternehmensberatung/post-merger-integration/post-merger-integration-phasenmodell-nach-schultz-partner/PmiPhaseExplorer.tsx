"use client";

import { useState } from "react";

const phases = [
  {
    number: "01",
    label: "Pre-Merger",
    title: "Integrationsplanung",
    description:
      "Integrationsziele präzise definieren, Due-Diligence-Ergebnisse strategisch auswerten, Synergiepotenziale beziffern und Integrationsstrategie verbindlich festlegen.",
    outcome: "Integrationsplan & klares Zielbild",
  },
  {
    number: "02",
    label: "Setup",
    title: "Integrationsvorbereitung",
    description:
      "PMI-Kernteam und Integration Management Office (IMO) aufbauen, Rollen und Verantwortlichkeiten definieren, Kommunikationsplan erstellen und Maßnahmen priorisieren.",
    outcome: "Governance-Struktur & Maßnahmenplan",
  },
  {
    number: "03",
    label: "Stichtag",
    title: "Day 1 / Closing",
    description:
      "Rechtlichen Zusammenschluss organisatorisch begleiten, Mitarbeitende und externe Stakeholder zeitgleich informieren sowie sofortige Geschäftskontinuität sicherstellen.",
    outcome: "Operative Handlungsfähigkeit am Day 1",
  },
  {
    number: "04",
    label: "Ausführung",
    title: "Operative Integration",
    description:
      "Prozesse, Aufbau- und Ablauforganisation, IT-Systeme und Treasury-Strukturen harmonisieren sowie die Unternehmenskulturen gezielt zusammenführen.",
    outcome: "Integrierte Prozess- & Organisationsstruktur",
  },
  {
    number: "05",
    label: "Value Creation",
    title: "Synergierealisierung",
    description:
      "Einkaufs- und Kostensynergien heben, Cross-Selling- und Umsatzpotenziale ausschöpfen, Maßnahmencontrolling führen und Zielerreichung reporten.",
    outcome: "Realisierte Synergien & messbarer Ertrag",
  },
  {
    number: "06",
    label: "Long-Term",
    title: "Stabilisierung & Optimierung",
    description:
      "Integrationsergebnisse kritisch überprüfen, verbleibende Schwachstellen beseitigen, KPIs nachhalten und kontinuierliche Verbesserungszyklen verankern.",
    outcome: "Nachhaltig konsolidiertes Unternehmen",
  },
];

export default function PmiPhaseExplorer() {
  const [view, setView] = useState<"grid" | "matrix">("grid");

  return (
    <section
      className="scroll-mt-32 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="phasenmodell"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
              Ablaufmodell &amp; Meilensteine
            </span>
            <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
              Das 6-Phasen-Ablaufmodell
            </h2>
          </div>
          <div
            aria-label="Ansicht der Phasen auswählen"
            className="inline-flex self-start rounded-lg bg-[#eceef0] p-1 md:self-auto"
            role="group"
          >
            <button
              aria-controls="pmi-phase-grid"
              aria-pressed={view === "grid"}
              className={`rounded px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                view === "grid"
                  ? "bg-white text-[#191c1e] shadow-sm"
                  : "text-[#44474c] hover:text-[#191c1e]"
              }`}
              onClick={() => setView("grid")}
              type="button"
            >
              Phasen-Karten
            </button>
            <button
              aria-controls="pmi-phase-matrix"
              aria-pressed={view === "matrix"}
              className={`rounded px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                view === "matrix"
                  ? "bg-white text-[#191c1e] shadow-sm"
                  : "text-[#44474c] hover:text-[#191c1e]"
              }`}
              onClick={() => setView("matrix")}
              type="button"
            >
              Strukturierte Matrix
            </button>
          </div>
        </div>

        <div
          aria-label="Die sechs Phasen als Karten"
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          hidden={view !== "grid"}
          id="pmi-phase-grid"
        >
          {phases.map((phase) => (
            <article
              className="flex min-w-0 flex-col justify-between rounded-xl bg-[#f2f4f6] p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
              key={phase.number}
            >
              <div>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#775a19]">
                    Phase {phase.number}
                  </span>
                  <span className="rounded bg-[#e0e3e5] px-2.5 py-1 text-[11px] text-[#44474c]">
                    {phase.label}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#191c1e] sm:text-xl">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#44474c]">
                  {phase.description}
                </p>
              </div>
              <div className="mt-6 rounded-b-lg border-t border-[#e0e3e5] bg-white -mx-5 -mb-5 p-4 sm:-mx-6 sm:-mb-6 sm:p-5">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                  Ergebnis &amp; Meilenstein
                </span>
                <p className="mt-1 flex items-start gap-2 text-sm font-semibold text-[#191c1e]">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined shrink-0 text-base text-[#775a19]"
                  >
                    task_alt
                  </span>
                  <span>{phase.outcome}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          aria-label="Die sechs Phasen als Tabelle"
          className="overflow-x-auto rounded-xl bg-white shadow-sm"
          hidden={view !== "matrix"}
          id="pmi-phase-matrix"
        >
          <table className="min-w-[760px] w-full text-left text-sm">
            <caption className="sr-only">
              Phasen, Kernaktivitäten und Ergebnisse des PMI-Ablaufmodells
            </caption>
            <thead className="bg-[#0e1c2f] text-left text-xs uppercase tracking-wider text-white">
              <tr>
                <th className="px-4 py-4 font-semibold" scope="col">
                  Phase
                </th>
                <th className="px-4 py-4 font-semibold" scope="col">
                  Bezeichnung
                </th>
                <th className="px-4 py-4 font-semibold" scope="col">
                  Zentrale Aktivitäten
                </th>
                <th className="px-4 py-4 font-semibold" scope="col">
                  Ergebnis / Meilenstein
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eceef0] text-[#44474c]">
              {phases.map((phase) => (
                <tr className="transition-colors hover:bg-[#f7f9fb]" key={phase.number}>
                  <th
                    className="whitespace-nowrap px-4 py-4 font-bold text-[#775a19]"
                    scope="row"
                  >
                    Phase {Number.parseInt(phase.number, 10)}
                  </th>
                  <td className="min-w-44 px-4 py-4 font-medium text-[#191c1e]">
                    {phase.title} ({phase.label})
                  </td>
                  <td className="min-w-80 px-4 py-4 leading-relaxed">
                    {phase.description}
                  </td>
                  <td className="min-w-52 px-4 py-4 font-medium text-[#191c1e]">
                    {phase.outcome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
