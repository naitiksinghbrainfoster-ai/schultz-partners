import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import KarriereInquiry from "./KarriereInquiry";

export const metadata: Metadata = {
  title: "Karriereberatung Hamburg & Bremen | Schultz & Partner",
  description:
    "Diskrete Karriereberatung und Karrierecoaching für Fach- und Führungskräfte in Hamburg und Bremen.",
};

const services = [
  {
    number: "01",
    title: "Karrierecoaching on the Job",
    text:
      "Sie sind mitten im Berufsleben, aber das Gefühl, am richtigen Platz zu sein, fehlt. Oder Sie merken, dass Reaktionsmuster in Führungssituationen Sie bremsen. Wir schärfen Ihre Führungsrolle und entwickeln konkrete Handlungsstrategien.",
    label: "Führungssouveränität & Konfliktlösung",
  },
  {
    number: "02",
    title: "Berufliche Neuorientierung",
    text:
      "Manchmal ist nicht klar, was als Nächstes kommen soll – nur dass etwas nicht mehr stimmt. Unsere Beratung schafft Klarheit über Ihre Stärken, Motive, Werte und passenden beruflichen Richtungen.",
    label: "Standortanalyse & Zukunftsplan",
  },
  {
    number: "03",
    title: "Bewerbungsberatung & Bewerbungstraining",
    text:
      "Wir transformieren Ihren Lebenslauf, schärfen Ihr digitales Executive-Profil und machen Ihre tatsächliche Wertschöpfung sichtbar. Bewerbung und Marktpositionierung werden klar und überzeugend.",
    label: "Executive-Dossier & Marktpositionierung",
  },
  {
    number: "04",
    title: "Interview Training & Vorstellungsgespräch",
    text:
      "Gute Vorstellungsgespräche sind trainierbar. Wir führen realistische Probeinterviews durch, analysieren Ihre Antworten und zeigen konkret, wie Sie sich besser positionieren.",
    label: "Simulation, Gehaltsverhandlung & Pitch",
  },
];

const faqs = [
  {
    question: "Für wen ist die Karriereberatung geeignet?",
    answer:
      "Für Fach- und Führungskräfte sowie Vorstände und Geschäftsführer mit mehrjähriger Berufserfahrung, die vor Funktionswechsel, Karrieresprung, Beförderung oder Neuanfang stehen.",
  },
  {
    question: "Was kostet eine Karriereberatung?",
    answer:
      "Wir bieten transparente Modulpakete und individuelle Vereinbarungen auf Stunden- oder Projektbasis. Im kostenlosen Erstgespräch klären wir Bedarf und Konditionen.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Karriereberatung und Karrierecoaching?",
    answer:
      "Karriereberatung umfasst konkrete Marktlage, Lebenslauf, Headhunter-Ansprache und Vertragscheck. Karrierecoaching setzt an Haltung, Rollenidentität, Führungsverhalten und emotionalen Blockaden an.",
  },
  {
    question: "Was ist der LINC Personality Profiler?",
    answer:
      "Der LPP ist eine wissenschaftlich fundierte Persönlichkeitsanalyse nach dem Big-Five-Modell. Er macht Stärken, Antreiber, Motive und passende Rollen in einem differenzierten Profil sichtbar.",
  },
  {
    question: "Bieten Sie die Beratung auch online an?",
    answer:
      "Ja. Die Beratung ist vollständig virtuell über Microsoft Teams oder Zoom möglich – mit derselben Tiefe und Vertraulichkeit wie in unseren Büros.",
  },
];

export default function KarriereberatungPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb] text-brand-slate">
          <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#0e1c2f] px-4 pb-14 pt-32 text-white sm:min-h-[600px] sm:px-6 sm:pb-16 sm:pt-36 lg:min-h-[620px] lg:px-8 lg:pb-20 lg:pt-40">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,168,105,0.1),_transparent_48%)]" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffdea5] sm:text-xs">
                  <span>Personalberatung</span>
                  <span className="text-white/50">/</span>
                  <span>Karriereberatung</span>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  Karriereberatung Hamburg &amp; Bremen
                </h1>
                <p className="mt-5 font-serif text-xl leading-relaxed text-[#e9c176] sm:text-2xl">
                  Für Fach- und Führungskräfte, die mehr aus ihrer Karriere
                  machen wollen
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  Stehen Sie an einem Wendepunkt im Beruf? Fragen Sie sich,
                  was als Nächstes kommen soll – eine neue Stelle, eine
                  Beförderung oder ein kompletter Neuanfang? Schultz &amp;
                  Partner begleitet Sie vertraulich, erfahrungsbasiert und
                  direkt.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="relative min-h-[420px] overflow-hidden rounded shadow-xl lg:col-span-5 lg:min-h-[520px]">
                <Image
                  alt="Erfahrener Führungskraft reflektiert seinen nächsten Karriereschritt"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Professional%20Portrait%20by%20a%20Bright%20Window.png"
                />
                <div className="absolute bottom-5 right-5 hidden max-w-[220px] rounded bg-brand-navy p-5 text-white shadow-xl sm:block">
                  <span className="font-serif text-5xl text-[#e9c176]">25+</span>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    Jahre Führungserfahrung für Ihren nächsten Karriereschritt.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Standortbestimmung
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Wann suchen Fach- und Führungskräfte eine Karriereberatung?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Die Menschen, die zu uns kommen, haben meist einen konkreten
                  Anlass. Manche wissen genau, was sie wollen – andere spüren,
                  dass etwas nicht mehr stimmt, können es aber nicht in Worte
                  fassen.
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <article className="bg-[#f7f9fb] p-5 shadow-sm">
                    <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        flag
                      </span>
                      Typische Anlässe
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                      {[
                        "Unzufriedenheit im Job",
                        "Kündigung oder drohende Stellenstreichung",
                        "Beförderung und neue Anforderungen",
                        "Wechsel von Branche oder Funktion",
                        "Neuorientierung ab 40 oder 50",
                        "Burnout, Erschöpfung oder Elternzeit",
                      ].map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span className="text-[#775a19]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                  <article className="bg-[#f7f9fb] p-5 shadow-sm">
                    <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        verified_user
                      </span>
                      Das bringen Sie mit
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                      {[
                        "5–30 Jahre Berufserfahrung",
                        "Ernsthaften Veränderungswillen",
                        "Bereitschaft zur ehrlichen Selbstreflexion",
                        "Wunsch nach einem geschützten Sparringsraum",
                        "Offenheit für fundierte Diagnostik",
                      ].map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span className="text-[#775a19]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-10 bg-white p-6 shadow-md sm:p-8 lg:grid-cols-12 lg:gap-14 lg:p-10">
                <div className="lg:col-span-5 lg:order-1">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                    Ihre Mentorin &amp; Coach
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy">
                    Sabine Schultz
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-brand-muted">
                    Inhaberin &amp; Senior Partnerin | Hamburg &amp; Bremen
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                    Sabine Schultz verantwortet den Bereich Coaching und
                    Karriereberatung. Seit über 20 Jahren begleitet sie
                    Fach- und Führungskräfte in beruflichen
                    Veränderungsprozessen.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-brand-slate">
                    {[
                      "Über 20 Jahre Beratungspraxis",
                      "Zertifizierte LINC Personality Profiler Coach",
                      "Aufsichtsratsmandat seit 2015",
                      "Standorte in Hamburg und Bremen",
                    ].map((item) => (
                      <li className="flex items-start gap-2" key={item}>
                        <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-base text-[#775a19]">
                          check_circle
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-[#775a19]"
                    href="mailto:s.schultz@schultz-partners.de"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                      mail
                    </span>
                    s.schultz@schultz-partners.de
                  </a>
                </div>
                <div className="relative min-h-[420px] overflow-hidden rounded shadow-lg lg:col-span-7 lg:order-2">
                  <Image
                    alt="Sabine Schultz, Senior Partnerin für Karriereberatung"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1023px) 100vw, 58vw"
                    src="/img/Professional%20Portrait%20by%20a%20Bright%20Window.png"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Systematisch &amp; praxisnah
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Unsere 4 Kernleistungen in der Karriereberatung
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  Persönlich in Hamburg oder Bremen – oder vertraulich per
                  Teams oder Zoom.
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {services.map((service) => (
                  <article className="bg-[#f7f9fb] p-6 shadow-sm" key={service.number}>
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-brand-navy font-serif text-lg text-[#e9c176]">
                      {service.number}
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-brand-navy">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      {service.text}
                    </p>
                    <p className="mt-5 flex items-center gap-2 text-xs font-bold text-[#775a19]">
                      {service.label}
                      <span aria-hidden="true" className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Diagnostik nach den Big Five
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Der LINC Personality Profiler
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Der LPP ist ein wissenschaftlich fundiertes
                  Persönlichkeitsanalyse-Instrument nach dem Fünf-Faktoren-Modell.
                  Es liefert kein starres Typenbild, sondern ein differenziertes
                  Profil individueller Stärken, Motive und Arbeitsstile.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    ["psychology", "Charaktereigenschaften", "Reaktion unter Druck, Entscheidungen und Kommunikation"],
                    ["explore", "Innere Antreiber & Motive", "Aufgaben mit Sinn und tragfähiger Energie"],
                    ["workspace_premium", "Führungskompetenzen", "Passende Rollen und Unternehmenskulturen"],
                  ].map(([icon, title, text]) => (
                    <div className="flex items-start gap-3 rounded bg-white p-4" key={title}>
                      <span aria-hidden="true" className="material-symbols-outlined text-[#775a19]">
                        {icon}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-brand-navy">{title}</h3>
                        <p className="mt-1 text-sm text-brand-muted">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded bg-brand-navy p-7 text-white shadow-xl lg:col-span-6">
                <div className="flex items-center justify-between text-[#ffdea5]">
                  <p className="text-xs font-bold uppercase tracking-wider">
                    Wissenschaftliche Fundierung
                  </p>
                  <span aria-hidden="true" className="material-symbols-outlined">
                    auto_graph
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold">
                  Klarheit statt Bauchgefühl
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Das Profil schafft eine objektive Gesprächsbasis und löst
                  blinde Flecken auf. Jörg und Sabine Schultz sind zertifizierte
                  LPP-Coaches.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Trennungsmanagement
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Outplacement – professionelle Begleitung nach einer Kündigung
                </h2>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {[
                  {
                    icon: "corporate_fare",
                    title: "Für Unternehmen",
                    items: [
                      "Individuelles Outplacement",
                      "Gruppen-Outplacement bei Restrukturierungen",
                      "Fairer Trennungsprozess",
                      "Begleitung in Hamburg und Bremen",
                      "Aktive Vermarktung über unser Netzwerk",
                    ],
                  },
                  {
                    icon: "badge",
                    title: "Für betroffene Mitarbeitende",
                    items: [
                      "Emotionale Verarbeitung der Trennung",
                      "Moderne, zielgerichtete Bewerbungsunterlagen",
                      "Direkter Marktzugang über unser Netzwerk",
                      "Vorbereitung auf Interviews und Assessment Center",
                      "Begleitung bis zum Onboarding",
                    ],
                  },
                ].map((card) => (
                  <article className="rounded bg-[#f7f9fb] p-6 shadow-sm" key={card.title}>
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="material-symbols-outlined text-2xl text-[#775a19]">
                        {card.icon}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-brand-navy">{card.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-brand-muted">
                      {card.items.map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span aria-hidden="true" className="material-symbols-outlined text-base text-[#775a19]">
                            check
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="faq">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Klarheit im Vorfeld
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Häufige Fragen zur Karriereberatung
                </h2>
              </div>
              <div className="mt-8 space-y-2">
                {faqs.map((faq) => (
                  <details className="group rounded bg-white shadow-sm" key={faq.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-brand-navy marker:hidden">
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

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="kontakt">
            <div className="mx-auto max-w-7xl rounded bg-brand-navy p-6 text-white shadow-xl sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                    Unverbindlicher Austausch
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                    Jetzt kostenloses Erstgespräch anfragen
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                    Das erste Gespräch ist unverbindlich und kostenfrei. Wir
                    hören zu, stellen die richtigen Fragen und sagen Ihnen
                    ehrlich, ob und wie wir helfen können.
                  </p>
                  <div className="mt-6 grid gap-5 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-bold uppercase tracking-wider text-[#ffdea5]">Büro Hamburg</p>
                      <p className="mt-2 text-slate-300">Neuer Wall 50<br />20354 Hamburg</p>
                      <a className="mt-2 block font-semibold text-white" href="tel:+494085372226">
                        040 - 85 37 22 26
                      </a>
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-wider text-[#ffdea5]">Büro Bremen</p>
                      <p className="mt-2 text-slate-300">Neidenburger Straße 12<br />28207 Bremen</p>
                      <a className="mt-2 block font-semibold text-white" href="tel:+494212443039">
                        0421 - 24 43 039
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <KarriereInquiry />
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
