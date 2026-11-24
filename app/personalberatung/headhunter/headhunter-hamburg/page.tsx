import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "Headhunter Hamburg | Executive Search | Schultz & Partner",
  description:
    "Diskrete Executive Search und Headhunting für Führungskräfte und Spezialisten in Hamburg und Norddeutschland.",
};

const strengths = [
  {
    icon: "anchor",
    title: "Hafen, Handel & maritime Wirtschaft",
    text:
      "Hamburg verbindet globale Handelsstrukturen mit Hafenwirtschaft, Logistik, Schiffbau, Marinetechnik und internationalen Dienstleistungen.",
  },
  {
    icon: "flight",
    title: "Luftfahrt & High-Tech",
    text:
      "Die Metropolregion vereint Luftfahrt, Life Sciences, Digitalisierung und innovative Industrieunternehmen mit hohem Bedarf an Spezialisten.",
  },
  {
    icon: "hub",
    title: "Regionale Marktkenntnis",
    text:
      "Wir kennen die Talente, Unternehmenskulturen und informellen Netzwerke der Hamburger Wirtschaft und erreichen auch passive Kandidaten.",
  },
];

const positions = [
  ["corporate_fare", "Geschäftsführung & C-Level", "CEO, CFO, COO, CTO und Managing Directors", "Top-Management"],
  ["precision_manufacturing", "Werks- & Betriebsleiter", "Produktion, Operations und operative Transformation", "Operations"],
  ["engineering", "Technische Direktoren", "Entwicklung, Engineering und industrielle Innovation", "Engineering"],
  ["local_shipping", "Supply Chain & Logistik", "Hafen, Handel, Distribution und multimodale Logistik", "Logistiknetzwerk"],
  ["high_quality", "Qualität & Prozesse", "Qualitätsmanagement, Lean und Continuous Improvement", "Qualitätsmanagement"],
  ["trending_up", "Vertrieb & Key Account", "Vertriebsleitung und globale Industriekunden", "Commercial"],
  ["terminal", "IT & Digitalisierung", "CIO, IT-Leitung, ERP und Cloud-Infrastruktur", "Digital & Tech"],
  ["account_tree", "Projektleitung & PMO", "Großprojekte, Transformation und Restrukturierung", "Projekte"],
];

const principles = [
  ["location_on", "Lokale Marktkenntnis", "15 Jahre persönliche Präsenz und gewachsene Kontakte in Hamburg und Norddeutschland."],
  ["lock", "Absolute Diskretion", "Suchmandate werden vertraulich und vor Wettbewerbern geschützt abgewickelt."],
  ["task_alt", "Verbindliche Meilensteine", "Regelmäßiges Reporting und klare Zeitpläne vom Briefing bis zur Vertragsunterzeichnung."],
];

const faqs = [
  {
    question: "Wie lange dauert eine Headhunter-Suche in Hamburg?",
    answer:
      "Eine qualifizierte Shortlist präsentieren wir üblicherweise innerhalb von 3 bis 5 Wochen. Bis zum Vertragsabschluss dauert ein Mandat meist 8 bis 14 Wochen.",
  },
  {
    question: "In welchen Regionen sind Sie tätig?",
    answer:
      "Unser Aktionsradius umfasst Hamburg, Schleswig-Holstein, Bremen, Niedersachsen und weitere Regionen in Norddeutschland.",
  },
  {
    question: "Können Sie auch Kandidaten von außerhalb gewinnen?",
    answer:
      "Ja. Über langjährige Kontakte und aktive Direktansprache erreichen wir Fach- und Führungskräfte bundesweit sowie Kandidaten mit Relocation-Bereitschaft nach Hamburg.",
  },
  {
    question: "Was unterscheidet Sie von anderen Headhuntern?",
    answer:
      "Persönliche Partnerbegleitung, absolute Diskretion, regionale Marktkenntnis und eine umfassende Prüfung von fachlicher Kompetenz sowie Cultural Fit.",
  },
];

export default function HeadhunterHamburgPage() {
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
              src="/img/Dusk%20Waterfront%20Executive%20Meeting2.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/45 via-transparent to-[#071321]/5" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-brand-gold" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffdea5] sm:text-xs">
                    Executive Search &amp; Headhunting Hamburg
                  </p>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  Headhunter Hamburg:
                  <span className="block text-[#ffdea5]">
                    Führungskräfte für die Hansestadt
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Sie suchen Führungskräfte oder Spezialisten in Hamburg?
                  Unsere Headhunter kennen den Hamburger Arbeitsmarkt und
                  finden passende Talente für Ihre Schlüsselpositionen – diskret,
                  effizient und nachhaltig.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Regionaler Marktfokus
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Warum Schultz &amp; Partner Ihr Headhunter für Hamburg ist
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Hamburg vereint Wirtschaftsmetropole, Hafenstandort und
                  Innovationscluster. Mit lokaler Präsenz und einem weit
                  verzweigten Netzwerk identifizieren wir Führungspersönlichkeiten
                  und Spezialisten passgenau.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {strengths.map((item) => (
                  <article className="border border-brand-border bg-white p-6 shadow-sm" key={item.title}>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center bg-[#f2f4f6] text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined text-[26px]">{item.icon}</span>
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="scroll-mt-28 bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="leistungen">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Mandate &amp; Expertise
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Unsere Leistungen als Headhunter in Hamburg
                </h2>
              </div>
              {[
                {
                  number: "01",
                  label: "Executive Search",
                  title: "Executive Search für Führungspositionen",
                  text:
                    "Wir besetzen C-Level-Positionen und Führungsrollen in Hamburg, von Geschäftsführung und Vorstand bis zu Bereichs- und Abteilungsleitung.",
                  image: "/img/Focused%20Office%20Discussion.png",
                  alt: "Executive Search für Führungskräfte in Hamburg",
                },
                {
                  number: "02",
                  label: "Expert Recruiting",
                  title: "Spezialistensuche für Schlüsselfunktionen",
                  text:
                    "Wir identifizieren Fachexperten in Logistik, IT, Handel, Industrie, Life Sciences und maritimen Dienstleistungen durch gezielte Direktansprache.",
                  image: "/img/Executive%20Boardroom%20Discussion.png",
                  alt: "Spezialistensuche für Schlüsselpositionen",
                },
              ].map((service, index) => (
                <div className="mb-12 grid items-center gap-8 last:mb-0 lg:grid-cols-12 lg:gap-14" key={service.title}>
                  <div className={`relative min-h-[300px] overflow-hidden sm:min-h-[360px] lg:col-span-6 ${index === 1 ? "lg:order-2" : ""}`}>
                    <Image alt={service.alt} className="object-cover" fill sizes="(max-width: 1023px) 100vw, 50vw" src={service.image} />
                  </div>
                  <div className={`lg:col-span-6 ${index === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                      {service.number} / {service.label}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-brand-navy sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Portfolio</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Für welche Positionen engagieren Sie einen Headhunter in Hamburg?
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {positions.map(([icon, title, text, label]) => (
                  <article className="border border-brand-border bg-[#f7f9fb] p-5" key={title}>
                    <span aria-hidden="true" className="material-symbols-outlined text-[28px] text-[#775a19]">{icon}</span>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-brand-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#775a19]">{label}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#0e1c2f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">Methodik &amp; Werte</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">So arbeiten wir als Headhunter Hamburg</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {principles.map(([icon, title, text]) => (
                  <article className="border border-white/10 bg-white/5 p-6" key={title}>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center bg-white/10 text-[#ffdea5]">
                      <span aria-hidden="true" className="material-symbols-outlined text-[26px]">{icon}</span>
                    </span>
                    <h3 className="font-serif text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                FAQ: Häufige Fragen zu Headhunting in Hamburg
              </h2>
              <div className="mt-8 space-y-2">
                {faqs.map((faq) => (
                  <details className="group border border-brand-border bg-white" key={faq.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-brand-navy marker:hidden">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-[#775a19] transition-transform group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <p className="border-t border-brand-border px-5 py-4 text-sm leading-relaxed text-brand-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="scroll-mt-28 bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="kontakt-hamburg">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Kontaktieren Sie uns</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                Wir freuen uns über Ihre Kontaktaufnahme
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                Sprechen Sie direkt mit unseren geschäftsführenden Partnern über
                Ihre Suchprofile in Hamburg und Norddeutschland.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a className="inline-flex min-h-12 items-center justify-center bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white" href="/kontakt#anfrageformular">
                  Vertrauliche Anfrage senden
                </a>
                <a className="inline-flex min-h-12 items-center justify-center border border-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-navy" href="tel:+494085372226">
                  040 - 85 37 22 26
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
