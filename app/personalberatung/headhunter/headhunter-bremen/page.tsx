import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "Headhunter Bremen | Executive Search | Schultz & Partner",
  description:
    "Diskrete Executive Search und Headhunting für Führungskräfte und Spezialisten in Bremen und der Metropolregion Nordwest.",
};

const strengths = [
  {
    icon: "flight_takeoff",
    title: "Traditionelle Stärken & neue Branchen",
    text:
      "Bremen verbindet industrielle Tradition mit Innovation: Luft- und Raumfahrt, Automotive, Logistik, Hafenwirtschaft, Maritime Wirtschaft und Windenergie.",
  },
  {
    icon: "group_search",
    title: "Fachkräftemangel & Demografie",
    text:
      "Der demografische Wandel verschärft Engpässe in Schlüsselpositionen. Unsere diskrete Executive-Direktansprache aktiviert Kandidaten, die nicht aktiv suchen.",
  },
  {
    icon: "explore",
    title: "Regionale Identität & Kandidatenmobilität",
    text:
      "Als lokaler Headhunter prüfen wir den exakten Cultural Fit und vermitteln mobilisierungsbereite Spitzenkräfte aus Bremen und der norddeutschen Region.",
  },
];

const services = [
  {
    number: "01",
    label: "Executive Search",
    title: "Executive Search für Führungspositionen",
    text:
      "Wir besetzen C-Level-Positionen und Führungsebenen in Bremen und der Metropolregion Nordwest, darunter Geschäftsführung, Vorstände, Bereichsleiter und Abteilungsleiter.",
    points: [
      "Geschäftsführung: CEO, CFO, COO, CTO und CDO",
      "Werksleitung, Technische Direktion und Betriebsleitung",
      "Diskrete Nachfolgebesetzungen in Familienunternehmen",
    ],
    image: "/img/Executive%20Boardroom%20Discussion.png",
    imageAlt: "Executive Search für Führungspositionen in Bremen",
  },
  {
    number: "02",
    label: "Expert Recruiting",
    title: "Spezialistensuche für Schlüsselfunktionen",
    text:
      "Neben Organpositionen identifizieren wir exzellente Fachexperten für Aerospace, Automotive, Lean Management, IT und Supply Chain.",
    points: [
      "Entwicklungsingenieure und Technische Führungskräfte",
      "Lean Manager, IT-Architekten und Supply-Chain-Strategen",
      "Diskrete Direktansprache erfolgreicher Passive Candidates",
    ],
    image: "/img/Collaborative%20Office%20Document%20Review.png",
    imageAlt: "Spezialistensuche für technische Schlüsselpositionen",
  },
  {
    number: "03",
    label: "Industrie & Cluster",
    title: "Branchenfokus: Von Aerospace bis Logistik",
    text:
      "Schultz & Partner verfügt über gewachsene Kontakte in Bremens Kernwirtschaftsbereichen, von Luft- und Raumfahrt bis zur maritimen Wirtschaft.",
    points: [
      "Luft- und Raumfahrt",
      "Automotive und Zulieferer",
      "Logistik und Hafenwirtschaft",
      "Wind und Maritime Wirtschaft",
    ],
    image: "/img/Dusk%20Waterfront%20Executive%20Meeting2.png",
    imageAlt: "Branchenfokus von Aerospace bis Logistik",
  },
];

const positions = [
  ["corporate_fare", "Geschäftsführung & C-Level", "CEO, CFO, COO, CTO und Managing Directors", "Top-Management"],
  ["precision_manufacturing", "Werks- & Produktionsleiter", "Produktion, Instandhaltung und Lean-Transformation", "Operations"],
  ["engineering", "Technische Direktoren & F&E", "Entwicklung, Luft- und Raumfahrt sowie Fahrzeugbau", "Engineering"],
  ["local_shipping", "Supply Chain & Logistik", "Logistikleitung und multimodale Distribution", "Logistiknetzwerk"],
  ["high_quality", "Qualität & Prozesse", "Qualitätsmanagement und Continuous Improvement", "Qualitätsmanagement"],
  ["trending_up", "Vertrieb & Key Account", "Vertriebsleitung und globale Industriekunden", "Commercial"],
  ["terminal", "IT & Digitalisierung", "CIO, IT-Leitung und Cloud-Infrastruktur", "Digital & Tech"],
  ["account_tree", "Projektleitung & PMO", "Großprojekte im Anlagen-, Schienen- und Marinetechnikbereich", "Projekte"],
];

const principles = [
  ["hub", "Lokale Marktkenntnis und Netzwerkzugang", "Über 15 Jahre persönliche Präsenz im Bremer Wirtschaftsraum."],
  ["lock", "Diskretion und Vertraulichkeit", "Suchmandate werden geschützt vor Wettbewerbern und Öffentlichkeit abgewickelt."],
  ["schedule", "Transparenter Prozess mit klaren Zeitplänen", "Status-Updates und definierte Meilensteine vom Briefing bis zur Vertragsunterzeichnung."],
];

const faqs = [
  {
    question: "Wie lange dauert eine Headhunter-Suche in Bremen?",
    answer:
      "In der Regel präsentieren wir innerhalb von 3 bis 5 Wochen eine qualifizierte Shortlist. Der Gesamtprozess bis zum Vertragsabschluss liegt üblicherweise zwischen 8 und 14 Wochen.",
  },
  {
    question: "Arbeiten Sie nur in Bremen oder auch in Bremerhaven und dem Umland?",
    answer:
      "Unser Aktionsradius umfasst Bremen, Bremerhaven, Oldenburg, Delmenhorst, Verden, Achim und die Weser- und Küstenachse.",
  },
  {
    question: "Was kostet ein Headhunter in Bremen?",
    answer:
      "Unsere Honorare orientieren sich am Marktstandard für Executive Search und werden transparent vereinbart. Üblicherweise gelten klare Meilensteine und eine Wiederbesetzungsgarantie.",
  },
  {
    question: "Können Sie Kandidaten von außerhalb nach Bremen vermitteln?",
    answer:
      "Ja. Über unsere Standorte in Hamburg und Bremen erreichen wir Rückkehrer und bundesweit aktive Fach- und Führungskräfte mit Umzugsbereitschaft.",
  },
  {
    question: "Was unterscheidet Sie von anderen Headhuntern?",
    answer:
      "Hanseatische Diskretion, persönliche Partnerbegleitung und eine tiefgehende Prüfung des fachlichen und kulturellen Fits in mittelständischen und inhabergeführten Strukturen.",
  },
];

export default function HeadhunterBremenPage() {
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
              src="/img/Dusk%20Waterfront%20Executive%20Meeting.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/45 via-transparent to-[#071321]/5" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-0.5 w-8 bg-brand-gold" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffdea5] sm:text-xs">
                    Executive Search &amp; Headhunting Bremen
                  </p>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  Headhunter Bremen:
                  <span className="block text-[#ffdea5]">
                    Führungskräfte für die Wesermetropole
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Sie suchen Führungskräfte oder Spezialisten in Bremen? Als
                  erfahrene Headhunter mit regionaler Expertise kennen wir den
                  Bremer Arbeitsmarkt und finden die richtigen Talente für Ihre
                  Schlüsselpositionen – diskret, effizient und nachhaltig.
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
                  Warum ist Schultz &amp; Partner Ihr Headhunter für Bremen?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Bremen vereint wirtschaftliche Tradition mit innovativen
                  Zukunftsmärkten, vom Aerospace über Logistik und Automotive bis
                  zur Maritimen Wirtschaft.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {strengths.map((item) => (
                  <article className="flex flex-col border border-brand-border bg-white p-6 shadow-sm" key={item.title}>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center bg-[#f2f4f6] text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined text-[26px]">
                        {item.icon}
                      </span>
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.text}</p>
                    <div className="mt-5 text-xs font-bold uppercase tracking-wider text-[#775a19]">
                      Standortkompetenz
                    </div>
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
                  Unsere Leistungen als Headhunter in Bremen
                </h2>
              </div>
              <div className="space-y-16">
                {services.map((service, index) => (
                  <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14" key={service.title}>
                    <div className={`relative min-h-[300px] overflow-hidden sm:min-h-[360px] lg:col-span-6 ${index === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        alt={service.imageAlt}
                        className="object-cover"
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        src={service.image}
                      />
                    </div>
                    <div className={`lg:col-span-6 ${index === 1 ? "lg:order-1" : ""}`}>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                        {service.number} / {service.label}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-brand-navy sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                        {service.text}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {service.points.map((point) => (
                          <li className="flex items-start gap-2 text-sm text-brand-slate" key={point}>
                            <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-base text-[#775a19]">
                              verified
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Portfolio
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Für welche Positionen engagieren Sie einen Headhunter in Bremen?
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {positions.map(([icon, title, text, label]) => (
                  <article className="border border-brand-border bg-[#f7f9fb] p-5" key={title}>
                    <span aria-hidden="true" className="material-symbols-outlined text-[28px] text-[#775a19]">
                      {icon}
                    </span>
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
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  Methodik &amp; Werte
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                  So arbeiten wir als Headhunter Bremen
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {principles.map(([icon, title, text], index) => (
                  <article className="border border-white/10 bg-white/5 p-6" key={title}>
                    <span className="mb-5 flex h-12 w-12 items-center justify-center bg-white/10 text-[#ffdea5]">
                      <span aria-hidden="true" className="material-symbols-outlined text-[26px]">{icon}</span>
                    </span>
                    <p className="text-xs font-bold tracking-[0.16em] text-[#e9c176]">
                      Prinzip 0{index + 1}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["15+", "Jahre norddeutsche Expertise", "Tief verwurzelt in Bremen und Nordwestdeutschland."],
                ["94%", "Exklusive Kandidatennetzwerke", "Führungskräfte gezielt aktivieren, auch wenn sie nicht offen suchen."],
                ["6+", "Bremens Kernindustrien", "Aerospace, Logistik, Automotive, Wind, Maritime Wirtschaft und mehr."],
                ["100%", "Garantie & Transparenz", "Verbindliche Meilensteine und Wiederbesetzungsgarantie."],
              ].map(([counter, title, text]) => (
                <article className="bg-[#f2f4f6] p-6" key={title}>
                  <span className="font-serif text-5xl text-[#775a19]">{counter}</span>
                  <h3 className="mt-3 text-sm font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="bg-[#0e1c2f] p-6 text-white shadow-lg sm:p-9">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">Track Record</p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                      Erfolgsbeispiele: Headhunting in Bremen
                    </h2>
                  </div>
                  <a className="inline-flex min-h-11 items-center justify-center rounded bg-[#775a19] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white" href="#kontakt-bremen">
                    Jetzt Termin vereinbaren
                  </a>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    ["Automobilzulieferer", "Besetzung in 10 Wochen", "Werksleiter (m/w/d)", "Die Besetzung erfolgte über die gezielte Rückkehr eines Kandidaten aus Süddeutschland in die Heimatregion."],
                    ["Luft- & Raumfahrt", "Relocation nach Bremen", "Entwicklungsleiter Aerospace (m/w/d)", "Direktansprache eines leitenden Ingenieurs aus Hamburg mit Umzugsbereitschaft nach Bremen."],
                    ["Logistik & Supply Chain", "Diskreter Direktsuchprozess", "Supply Chain Manager (m/w/d)", "Schlüsselposition für trimodale Logistikprozesse an der Weser."],
                    ["Erneuerbare Energien", "Besetzung in 12 Wochen", "Geschäftsführer Windenergie (m/w/d)", "CEO-Position für einen international tätigen Entwickler in der Bremer Metropolregion."],
                  ].map(([industry, timing, title, text]) => (
                    <article className="border border-white/10 bg-white/5 p-5" key={title}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#e9c176]">{industry}</span>
                        <span className="text-xs text-slate-300">{timing}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Fragen &amp; Antworten</p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  FAQ: Häufige Fragen zu Headhunting in Bremen
                </h2>
              </div>
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

          <section className="scroll-mt-28 bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="kontakt-bremen">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Kontaktieren Sie uns
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Wir freuen uns über Ihre Kontaktaufnahme
                </h2>
              </div>
              <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
                {[
                  ["Sabine Schultz", "Partnerin | Executive Search", "Spezialisiert auf Leadership Placement, Familienunternehmen und Nachfolgebesetzungen.", "/img/Professional%20Portrait%20by%20a%20Bright%20Window.png", "0421 - 24 43 039", "tel:+494212443039", "s.schultz@schultz-partners.de"],
                  ["Jörg Schultz", "Partner | Unternehmensberatung & C-Level", "Fokus auf Industrie, Aerospace, Supply Chain und Vorstandsbesetzungen.", "/img/cd1ed529-ce3b-4060-94db-76a69ade86b9.png", "040 - 85 37 22 26", "tel:+494085372226", "j.schultz@schultz-partners.de"],
                ].map(([name, role, text, image, phone, phoneHref, email]) => (
                  <article className="flex gap-5 bg-white p-5 sm:p-6" key={name}>
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                      <Image alt={name} className="object-cover" fill sizes="96px" src={image} />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-brand-navy">{name}</h3>
                      <p className="mt-1 text-xs font-semibold text-[#775a19]">{role}</p>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p>
                      <a className="mt-3 flex items-center gap-2 text-xs font-semibold text-brand-navy" href={phoneHref}>{phone}</a>
                      <a className="mt-1 flex items-center gap-2 text-xs text-brand-navy" href={`mailto:${email}`}>{email}</a>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-4xl bg-white p-6 text-center sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Discretion First</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-brand-navy">
                  Vertrauliche Rückrufanfrage für Bremen
                </h3>
                <p className="mt-2 text-sm text-brand-muted">
                  Ein geschäftsführender Partner meldet sich diskret innerhalb von 24 Stunden.
                </p>
                <a
                  className="mt-5 inline-flex min-h-12 items-center justify-center bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                  href="/kontakt#anfrageformular"
                >
                  Vertrauliche Anfrage senden
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
