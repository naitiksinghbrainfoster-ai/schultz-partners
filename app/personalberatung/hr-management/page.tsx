import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "HR-Management | Schultz & Partner",
  description:
    "Operatives und strategisches HR-Management, HR-Projekte und Interim Management in Hamburg, Bremen und Norddeutschland.",
};

export default function HrManagementPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb] text-brand-slate">
          <section className="relative isolate overflow-hidden bg-[#0e1c2f] px-4 pb-14 pt-40 text-white sm:px-6 sm:pt-44 lg:px-8 lg:pb-16 lg:pt-48">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c] via-[#0b192c]/90 to-[#0b192c]/65" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,168,105,0.16),_transparent_48%)]" />
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  Personalberatung / HR-Management
                </p>
                <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  HR-Management
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  Wir denken vor – mit dem Menschen im Fokus
                </p>
                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center rounded bg-[#ffdea5] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#261900] transition-colors hover:bg-white"
                  href="#kontakt-rueckruf"
                >
                  HR-Management anfragen
                </a>
              </div>
              <div className="hidden max-w-xs flex-col gap-3 border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur-sm md:flex">
                <div className="flex items-center gap-2 text-[#ffdea5]">
                  <span aria-hidden="true" className="material-symbols-outlined text-xl">
                    groups
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Standorte
                  </span>
                </div>
                <p>
                  Persönliche Beratung in Hamburg und Bremen sowie bundesweite
                  Mandatsbegleitung.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Beratungsschwerpunkt
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Operatives und strategisches HR-Management
                </h2>
                <div className="mt-6 space-y-5 text-sm leading-relaxed text-brand-muted sm:text-base">
                  <p>
                    Wir unterstützen Sie bei Ihrer täglichen Personalarbeit vor
                    Ort oder als Berater oder Interimmanager aus der Ferne.
                  </p>
                  <p>
                    Themen wie der demografische Wandel, die fortschreitende
                    Technologisierung und neue Formen der Online-Kommunikation
                    sind zentrale Fragestellungen für die Zukunft des
                    Personalmanagements.
                  </p>
                  <p>
                    Sollten Sie eine Restrukturierung zur Schaffung weiterer
                    Synergieeffekte planen, begleiten wir Sie vom ersten Schritt
                    bis zur vollständigen, professionellen Umsetzung. Wir
                    analysieren betroffene Bereiche und Arbeitsplätze und
                    gestalten gemeinsam eine zielführende Organisation und das
                    darunterliegende HR-Management.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[420px] overflow-hidden rounded-xl shadow-md lg:col-span-5 lg:min-h-[480px]">
                <Image
                  alt="Operatives und strategisches HR-Management"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Waterfront%20Office%20Meeting%20Dialogue.png"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="relative min-h-[440px] overflow-hidden rounded-xl shadow-md lg:col-span-5 lg:order-1 lg:min-h-[500px]">
                <Image
                  alt="Durchführung strategischer HR-Projekte"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Executive%20Boardroom%20Discussion.png"
                />
              </div>
              <div className="lg:col-span-7 lg:order-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Projektbegleitung
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Durchführung von HR-Projekten
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  <p>
                    Die Motivation und Bindung von Mitarbeitenden wird für
                    Unternehmen zunehmend zum strategischen Ziel. Welchen
                    Beitrag kann professionelles Talentmanagement für Ihre
                    Unternehmensziele leisten?
                  </p>
                  <p>
                    Denken Sie über die Einführung oder Überarbeitung eines
                    Leistungs- und Beurteilungssystems nach, das verstanden und
                    gelebt wird?
                  </p>
                  <p>
                    Müssen Prozesse in Ihrer Personalabteilung verschlankt,
                    standortunabhängig gemacht und effizienter gestaltet werden?
                    Wir entwickeln praktikable Lösungen mit Ihrer Organisation.
                  </p>
                  <p>
                    Employer Branding gewinnt angesichts des demografischen
                    Wandels an Bedeutung. Gemeinsam entwickeln wir Ihr
                    Unternehmen zu einer attraktiven Marke im Personalmarkt.
                  </p>
                  <div className="rounded-lg bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-brand-navy">
                      Dies ist nur ein Auszug vieler HR-Management-Themen, die
                      wir gemeinsam mit unseren Kunden individuell erarbeiten und
                      umsetzen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Vakanzüberbrückung &amp; Wandel
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Interim Management
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
                  Interims Management ist essenziell, um in Übergangsphasen
                  sicherzustellen, dass alltägliche Arbeitsprozesse
                  kontinuierlich weitergeführt werden. Damit vermeiden Sie
                  negative Auswirkungen durch offene Schlüsselstellen. Wir
                  stehen Ihnen mit Erfahrung und operativer Expertise zur Seite.
                </p>
                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[#f2f4f6] px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-navy shadow-sm transition-colors hover:bg-brand-navy hover:text-white"
                  href="/unternehmensberatung/strategieberatung-operative-umsetzung"
                >
                  Mehr zum Interim Management
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="relative min-h-[360px] overflow-hidden rounded-xl shadow-md lg:col-span-5 lg:min-h-[420px]">
                <Image
                  alt="Strategisches Interim Management"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Warm%20Minimalist%20Consultation%20Around%20Table.png"
                />
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-28 bg-[#0e1c2f] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16"
            id="kontakt-rueckruf"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between gap-8 rounded-xl border border-white/10 bg-white/5 p-7 shadow-lg backdrop-blur-sm lg:flex-row lg:items-center lg:p-10">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                    Unverbindlicher Dialog
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                    Lassen Sie uns über Ihre HR-Themen sprechen.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                    Unsere Berater in Hamburg und Bremen stehen Ihnen für ein
                    vertrauliches und fundiertes Erstgespräch zur Verfügung.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-5 text-sm">
                    <a className="flex items-center gap-2 text-slate-200" href="tel:+494085372226">
                      <span aria-hidden="true" className="material-symbols-outlined text-base text-[#ffdea5]">
                        call
                      </span>
                      Hamburg: 040 - 85 37 22 26
                    </a>
                    <a className="flex items-center gap-2 text-slate-200" href="tel:+494212443039">
                      <span aria-hidden="true" className="material-symbols-outlined text-base text-[#ffdea5]">
                        call
                      </span>
                      Bremen: 0421 - 24 43 039
                    </a>
                  </div>
                </div>
                <a
                  className="inline-flex min-h-12 shrink-0 items-center justify-center rounded bg-[#ffdea5] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#261900] transition-colors hover:bg-white"
                  href="/kontakt#anfrageformular"
                >
                  Jetzt unverbindlich anfragen
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
