import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import BelohnungsmatrixExplorer from "./BelohnungsmatrixExplorer";

export const metadata: Metadata = {
  title: "Belohnungsmatrix in der Karriereberatung | Schultz & Partner",
  description:
    "Die Belohnungsmatrix macht individuelle Motivationsfaktoren für Karriere und Personalentwicklung sichtbar.",
};

export default function BelohnungsmatrixPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb] text-brand-slate">
          <section className="bg-[#f2f4f6] px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-44 lg:px-8 lg:pb-24 lg:pt-48">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <nav
                  aria-label="Breadcrumb"
                  className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#775a19]"
                >
                  <a className="hover:text-brand-navy" href="/personalberatung">
                    Personalberatung
                  </a>
                  <span className="text-brand-muted">/</span>
                  <a
                    className="hover:text-brand-navy"
                    href="/personalberatung/karriereberatung"
                  >
                    Karriereberatung
                  </a>
                  <span className="text-brand-muted">/</span>
                  <span className="text-brand-muted">Belohnungsmatrix</span>
                </nav>
                <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
                  Mit der Belohnungsmatrix zu mehr Klarheit
                </h1>
                <p className="mt-5 font-serif text-xl leading-relaxed text-[#775a19] sm:text-2xl">
                  Motivation und Karriereentwicklung gezielt gestalten
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                    href="#kontakt"
                  >
                    Erstgespräch zur Karriereberatung
                  </a>
                  <span className="flex items-center gap-2 text-xs text-brand-muted sm:text-sm">
                    <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                      lock
                    </span>
                    100 % vertraulich &amp; unabhängig
                  </span>
                </div>
              </div>
              <div className="relative lg:col-span-5">
                <div className="relative h-[380px] overflow-hidden rounded shadow-xl lg:h-[440px]">
                  <Image
                    alt="Beratung mit haptischer Belohnungsmatrix"
                    className="object-cover"
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 42vw"
                    src="/img/Warm%20Minimalist%20Consultation%20Around%20Table.png"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-brand-navy/90 p-4 text-sm leading-snug text-slate-100 backdrop-blur-sm">
                    Haptische Strukturierung persönlicher Karriere- und Motivationsachsen im diskreten Beratungsdialog.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                Theoretisches Fundament &amp; Wirkungsweise
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                Ziel und Grundgedanke der Belohnungsmatrix
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-brand-muted sm:text-base">
                <p>
                  Die Belohnungsmatrix nach Schultz &amp; Partner erfasst,
                  strukturiert und bewertet individuelle Motivationsfaktoren
                  im Arbeits- und Karriereentwicklungskontext.
                </p>
                <p>
                  Menschen haben unterschiedliche Bedürfnisse und Ziele. Für
                  eine Person steht kurzfristiges Einkommen im Vordergrund;
                  für eine andere Karriereperspektive, Work-Life-Balance oder
                  finanzielle Sicherheit im Alter.
                </p>
                <p>
                  Die Matrix macht diese individuellen Präferenzen sichtbar und
                  schafft eine Grundlage für gezielte Personalentwicklung,
                  Mitarbeiterbindung und Karriereplanung.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Analytische Architektur
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Aufbau der Belohnungsmatrix
                </h2>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {[
                  {
                    icon: "swap_horiz",
                    title: "Horizontale Zeitachse",
                    text:
                      "Sie beschreibt, wann eine Belohnung wirksam wird – von kurzfristigen Anreizen über mittelfristige Perspektiven bis zu langfristigen Lebenszielen.",
                  },
                  {
                    icon: "swap_vert",
                    title: "Vertikale Belohnungsachse",
                    text:
                      "Sie bildet die subjektive Bedeutung ab. Je höher ein Faktor eingeordnet wird, desto wichtiger oder attraktiver ist er für die betreffende Person.",
                  },
                ].map((axis) => (
                  <article className="bg-white p-6 shadow-sm" key={axis.title}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-semibold text-brand-navy">
                        {axis.title}
                      </h3>
                      <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]">
                        {axis.icon}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{axis.text}</p>
                  </article>
                ))}
              </div>
              <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-6 shadow-sm">
                <p className="text-sm leading-relaxed text-brand-muted">
                  Durch die Einordnung entsteht ein individuelles Motivationsprofil.
                  Die Position zeigt den Zeitpunkt der Wirkung, die Größe zeigt
                  die persönliche Bedeutung des Faktors.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Differenzierte Faktorenübersicht
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Mögliche Belohnungs- und Motivationsfaktoren
                </h2>
              </div>
              <div className="mt-10">
                <BelohnungsmatrixExplorer />
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              <article className="bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Individuelle Gewichtung
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-brand-navy sm:text-3xl">
                  Individuelle Gewichtung der Belohnungen
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-brand-muted">
                  <p>
                    Die Matrix wird besonders aussagekräftig, wenn Faktoren
                    hinsichtlich persönlicher Bedeutung bewertet werden.
                  </p>
                  <p>
                    Ein Coachee kann kurzfristig Anerkennung und flexible
                    Arbeitszeiten priorisieren, mittelfristig Weiterbildung und
                    Gehalt, langfristig Altersvorsorge und Sicherheit.
                  </p>
                  <p className="font-semibold text-brand-navy">
                    Die Matrix ist kein allgemeingültiger Benefit-Katalog,
                    sondern ein individuelles Instrument zur Ermittlung persönlicher
                    Motivations- und Entwicklungsziele.
                  </p>
                </div>
              </article>
              <article className="bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Strategischer Mehrwert
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-brand-navy sm:text-3xl">
                  Nutzen für Führungskräfte und Personalentwicklung
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-brand-muted">
                  {[
                    "Motivation und relevante Motivatoren verstehen",
                    "Entwicklungsschritte mit individuellen Zielen verknüpfen",
                    "Finanzielle und nichtfinanzielle Anreize gezielt einsetzen",
                    "Mitarbeiterbindung durch passende Perspektiven stärken",
                    "Erwartungen transparent und realistisch klären",
                    "Kurz-, mittel- und langfristige Ziele miteinander verbinden",
                  ].map((item) => (
                    <li className="flex items-start gap-3" key={item}>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-lg text-[#775a19]">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="bg-brand-navy px-4 py-14 text-white sm:px-6 lg:px-8" id="kontakt">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  Diskreter Dialog
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                  Lassen Sie uns Ihre Motivationsfaktoren strukturieren
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Vereinbaren Sie eine vertrauliche Erstberatung in Hamburg oder Bremen.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-[#ffdea5]"
                  href="/kontakt#anfrageformular"
                >
                  Kostenloses Erstgespräch
                </a>
                <div className="text-sm text-slate-300">
                  <a className="block hover:text-white" href="tel:+494085372226">
                    HH: 040 - 85 37 22 26
                  </a>
                  <a className="mt-1 block hover:text-white" href="tel:+494212443039">
                    HB: 0421 - 24 43 039
                  </a>
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
