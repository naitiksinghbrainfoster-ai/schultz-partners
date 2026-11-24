"use client";

import { useEffect, useState } from "react";

type Factor = {
  name: string;
  text: string;
};

type Level = {
  badge: string;
  title: string;
  icon: string;
  intro: string;
  factors: Factor[];
};

const levels: Level[] = [
  {
    badge: "Ebene 01",
    title: "Kurzfristige Belohnungen & Anreize",
    icon: "bolt",
    intro:
      "Wirksam bis wenige Monate. Sie stärken die alltägliche Motivation und machen Engagement sichtbar.",
    factors: [
      { name: "Wertschätzung und Anerkennung", text: "Lob durch Führungskräfte, konstruktives Feedback und sichtbare Anerkennung der eigenen Beiträge." },
      { name: "Variable Vergütung", text: "Boni, Prämien und leistungsbezogene Vergütungsbestandteile mit zeitnahem Bezug." },
      { name: "Arbeitszeitgestaltung", text: "Flexible Arbeitszeiten und Vereinbarkeit von Beruf und Privatleben." },
      { name: "Zusätzliche Freizeit", text: "Freizeitausgleich, zusätzliche Urlaubstage oder Sonderurlaub." },
      { name: "Arbeitsumfeld & Ausstattung", text: "Modernes Arbeitsklima, ergonomische Arbeitsplätze und funktionierende Technik." },
      { name: "Verantwortung und Mitgestaltung", text: "Eigene Ideen einbringen, operative Entscheidungen mitgestalten und schnelle sichtbare Ergebnisse erzielen." },
      { name: "Teamzugehörigkeit", text: "Ein unterstützendes Team, gemeinsame Erfolge und ein von Respekt getragener Umgang." },
    ],
  },
  {
    badge: "Ebene 02",
    title: "Mittelfristige Belohnungen & Perspektiven",
    icon: "trending_up",
    intro:
      "Wirksam innerhalb von Monaten bis wenigen Jahren. Der Fokus liegt auf Kompetenzausbau, Positionierung und Status.",
    factors: [
      { name: "Gehaltserhöhungen", text: "Nachvollziehbare und verantwortungsgerechte Weiterentwicklung des festen Grundgehalts." },
      { name: "Karriereentwicklung", text: "Beförderungen, neue Führungsrollen und zusätzliche Verantwortung." },
      { name: "Weiterbildung & Qualifizierung", text: "Zertifizierungen, Executive Coaching und strukturiertes Mentoring." },
      { name: "Fachliche Selbstständigkeit", text: "Entscheidungsspielraum, Budgethoheit und eigenverantwortliche Projekte." },
      { name: "Flexibilität & mobiles Arbeiten", text: "Verlässliche Homeoffice-Regelungen und hybride Arbeitsmodelle." },
      { name: "Sichtbarkeit im Unternehmen", text: "Präsentationen vor Vorstand und Mitarbeit an strategisch bedeutsamen Projekten." },
      { name: "Internationale Erfahrungen", text: "Auslandseinsätze, globale Projektleitung und interkulturelle Zusammenarbeit." },
      { name: "Berufliche Sicherheit", text: "Verlässliche Perspektiven und klar formulierte Entwicklungsschritte." },
      { name: "Gesundheit & Wohlbefinden", text: "Gesundheitsvorsorge, Sportprogramme und eine nachhaltige Arbeitsbelastung." },
    ],
  },
  {
    badge: "Ebene 03",
    title: "Langfristige Belohnungen & Lebensziele",
    icon: "workspace_premium",
    intro:
      "Erstreckt sich über viele Jahre bis zum Berufslebensende und verbindet Sicherheit, Lebenssinn und Stabilität.",
    factors: [
      { name: "Langfristiges Einkommen", text: "Eine kontinuierliche Einkommensentwicklung entsprechend Reife, Expertise und Marktwert." },
      { name: "Altersvorsorge & Rente", text: "Betriebliche Altersvorsorge, Arbeitgeberzuschüsse und finanzielle Absicherung fürs Alter." },
      { name: "Langfristige Karriereperspektiven", text: "C-Level-Funktionen, Partnerschaften, Expertenlaufbahnen oder unternehmerische Beteiligungen." },
      { name: "Berufliche Sinnhaftigkeit", text: "Ein nachhaltiger Beitrag für Unternehmen, Gesellschaft und persönliche Wertvorstellungen." },
      { name: "Nachhaltige Work-Life-Balance", text: "Raum für Familie, persönliche Interessen, Gesundheit und Erholung." },
      { name: "Langfristige Arbeitsplatzsicherheit", text: "Ein krisenfester Arbeitgeber mit solidem Fundament und zukunftsfähigen Perspektiven." },
      { name: "Persönliche Weiterentwicklung", text: "Lebenslanges Lernen und die Entfaltung persönlicher Potenziale." },
      { name: "Gestaltungsspielraum & Einfluss", text: "Möglichkeit, strategische Ausrichtung und organisatorische Veränderungen mitzuprägen." },
      { name: "Lebensphasenorientierte Arbeitsbedingungen", text: "Sabbaticals, flexible Übergänge in den Ruhestand und bedarfsgerechte Belastungsanpassung." },
      { name: "Langfristige Zugehörigkeit", text: "Vertrauen, gemeinsame Unternehmensphilosophie und gewachsene Verbundenheit." },
    ],
  },
];

export default function BelohnungsmatrixExplorer() {
  const [selected, setSelected] = useState<{ level: Level; factor: Factor } | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {levels.map((level) => (
          <article
            className="flex flex-col border border-brand-border bg-white p-6 shadow-sm"
            key={level.title}
          >
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <span className="rounded-full bg-brand-offwhite px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#775a19]">
                {level.badge}
              </span>
              <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]">
                {level.icon}
              </span>
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-brand-navy">
              {level.title}
            </h3>
            <p className="mt-3 min-h-[66px] text-sm leading-relaxed text-brand-muted">
              {level.intro}
            </p>
            <div className="mt-5 space-y-2">
              {level.factors.slice(0, 5).map((factor) => (
                <button
                  className="flex w-full items-center justify-between gap-3 rounded bg-[#f2f4f6] px-3 py-2.5 text-left text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-border"
                  key={factor.name}
                  onClick={() => setSelected({ level, factor })}
                  type="button"
                >
                  <span>{factor.name}</span>
                  <span aria-hidden="true" className="material-symbols-outlined text-base text-brand-muted">
                    info
                  </span>
                </button>
              ))}
            </div>
            <button
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded border border-brand-border bg-[#f2f4f6] px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              onClick={() => setSelected({ level, factor: level.factors[0] })}
              type="button"
            >
              Alle {level.factors.length} Faktoren
              <span aria-hidden="true" className="material-symbols-outlined text-base">
                open_in_new
              </span>
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
        >
          <button
            aria-label="Dialog schließen"
            className="absolute inset-0 bg-[#0b192c]/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            type="button"
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded border border-brand-gold bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-brand-navy px-6 py-5 text-white">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  {selected.level.badge}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold">{selected.factor.name}</h3>
              </div>
              <button
                aria-label="Schließen"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
                onClick={() => setSelected(null)}
                type="button"
              >
                <span aria-hidden="true" className="material-symbols-outlined text-lg">
                  close
                </span>
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <p className="border-l-4 border-brand-gold bg-[#f2f4f6] p-5 text-sm leading-relaxed text-brand-slate">
                {selected.factor.text}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                In der praktischen Karriereberatung ordnen wir diesen Faktor
                gemeinsam auf der horizontalen Zeitachse und der vertikalen
                Relevanzachse ein. Je nach Lebensphase kann er als Grundbedarf
                oder als wichtiges Entwicklungssignal gewichtet werden.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
