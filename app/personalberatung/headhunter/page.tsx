import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "@/app/page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "Headhunter & Executive Search | Schultz & Partner",
  description:
    "Diskrete Headhunting- und Executive-Search-Prozesse für Führungskräfte und Spezialisten in Norddeutschland.",
};

const whyColumns = [
  {
    icon: "record_voice_over",
    title: "Diskrete Direktansprache von Top-Kandidaten",
    text:
      "Wir sprechen gezielt Fach- und Führungskräfte an, die nicht aktiv auf dem Stellenmarkt sichtbar sind. Weder Wettbewerber noch die Öffentlichkeit erfahren von Ihren Personalplänen.",
  },
  {
    icon: "psychology_alt",
    title: "Ganzheitliche Bewertung der Kandidaten",
    text:
      "Wir bewerten fachliche Kompetenz, Führungsqualitäten, kulturelle Passung, Motivationsstruktur und Persönlichkeitsprofil durch strukturierte Interviews und Referenzprüfungen.",
  },
  {
    icon: "domain",
    title: "Marktkenntnis und regionale Expertise",
    text:
      "Seit über 15 Jahren sind wir in Hamburg, Bremen und ganz Norddeutschland verankert. Wir kennen regionale Arbeitsmärkte, Branchenstrukturen und Unternehmenskulturen.",
  },
];

const processSteps = [
  {
    phase: "Phase 01",
    title: "Bedarfsanalyse und Anforderungsprofil",
    text:
      "Gemeinsam definieren wir fachliche Qualifikationen, Führungserfahrung, Branchenkenntnisse, Persönlichkeitsprofil und kulturelle Passung.",
    icon: "verified",
    label: "Präzise Kalibrierung des Suchmandats",
    image: "/img/Collaborative%20Office%20Document%20Review.png",
    imageAlt: "Berater stimmt das Suchprofil mit der Geschäftsführung ab",
  },
  {
    phase: "Phase 02",
    title: "Talent Mapping und Active Sourcing",
    text:
      "Wir nutzen exklusive Netzwerke, Branchenkontakte und Datenbanken für systematisches Talent Mapping. Passive Kandidaten sprechen wir gezielt und vertraulich an.",
    icon: "hub",
    label: "Diskrete Direktansprache via Exklusiv-Netzwerk",
    image: "/img/Executive%20Boardroom%20Discussion.png",
    imageAlt: "Headhunter analysieren verfügbare Führungstalente",
  },
  {
    phase: "Phase 03",
    title: "Vorauswahl und Präsentation",
    text:
      "Wir führen Erstgespräche, prüfen Referenzen und bewerten die Passung. Typischerweise erhalten Sie drei bis fünf finale Profile mit Stärken-Schwächen-Analyse.",
    icon: "rate_review",
    label: "Dossiers mit Stärken-Schwächen-Profilen",
    image: "/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png",
    imageAlt: "Gespräch über Kandidatenprofile und Besetzungsoptionen",
  },
  {
    phase: "Phase 04",
    title: "Begleitung bis zum Vertragsabschluss",
    text:
      "Wir organisieren Interviews, begleiten Verhandlungen und Vertragsgestaltung und unterstützen das Onboarding. Auch nach der Vertragsunterzeichnung bleiben wir Ihr Ansprechpartner.",
    icon: "handshake",
    label: "Onboarding-Begleitung und Besetzungsgarantie",
    image: "/img/Warm%20Minimalist%20Consultation%20Around%20Table.png",
    imageAlt: "Vertrauliche Begleitung bis zum Vertragsabschluss",
  },
];

const positions = [
  ["C-Level-Positionen", "Geschäftsführer, CEO, CFO, CTO und CHRO – Positionen mit strategischer Verantwortung und hohem Impact."],
  ["Führungskräfte der zweiten Ebene", "Abteilungsleiter, Bereichsleiter und Prokuristen – Schlüsselpositionen im mittleren Management."],
  ["Hochspezialisierte Fachkräfte", "IT-Architekten, Compliance-Experten und M&A-Spezialisten – Talente mit seltenen Qualifikationen."],
  ["Vertriebsleiter und Key Account Manager", "Positionen mit direkter Umsatzverantwortung und anspruchsvollen Kundenbeziehungen."],
  ["Technische Direktoren und Werksleiter", "Führungsrollen in Produktion, Entwicklung und Engineering."],
];

const advantages = [
  {
    icon: "calendar_month",
    title: "Über 15 Jahre Expertise in Norddeutschland",
    text:
      "Unsere langjährige Präsenz hat uns ein dichtes Netzwerk und tiefe Marktkenntnis in Hamburg, Bremen und Norddeutschland verschafft.",
  },
  {
    icon: "handshake",
    title: "Exklusive Netzwerke für Kandidaten",
    text:
      "Wir verfügen über Beziehungen zu Führungskräften und Spezialisten, die nicht aktiv auf Stellenanzeigen reagieren, uns aber ihr Vertrauen schenken.",
  },
  {
    icon: "workspace_premium",
    title: "Garantierte Besetzungsgarantie",
    text:
      "Unser Ziel ist die nachhaltig richtige Besetzung. Sollte ein vermittelter Kandidat innerhalb der vereinbarten Probezeit ausscheiden, suchen wir Ersatz.",
  },
  {
    icon: "balance",
    title: "Transparenz und Fairness",
    text:
      "Sie erhalten regelmäßige Updates, klare Kommunikation und transparente Konditionen. Unsere Honorare orientieren sich an Branchenstandards.",
  },
];

const faqs = [
  {
    question: "Wie finden Headhunter geeignete Kandidaten für Führungspositionen?",
    answer:
      "Headhunter nutzen gepflegte Netzwerke, gezieltes Talent Mapping, Datenbanken und persönliche Empfehlungen. Entscheidend ist die direkte, vertrauliche Ansprache von Kandidaten, die nicht aktiv suchen.",
  },
  {
    question: "Was zeichnet einen guten Headhunter aus?",
    answer:
      "Absolute Diskretion, fundierte Markt- und Branchenkenntnis, strukturiertes Eignungsassessment und ein feines Gespür für kulturelle Passung sind zentrale Qualitäten.",
  },
  {
    question: "Warum ist die Besetzung von Fachpositionen so wichtig?",
    answer:
      "Führungskräfte und Schlüssel-Fachkräfte prägen Innovationskraft, Teamleistung und wirtschaftlichen Erfolg. Fehlbesetzungen können erhebliche Folgekosten verursachen.",
  },
  {
    question: "Wie läuft der typische Headhunting-Prozess ab?",
    answer:
      "Der Prozess umfasst Bedarfsanalyse, Talent Mapping und Direktansprache, strukturierte Auswahlgespräche und Referenzprüfungen sowie die Begleitung bis zum Onboarding.",
  },
];

export default function HeadhunterPage() {
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
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffdea5]">
                  Executive Search &amp; Placement
                </p>
                <h1 className="mt-4 font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  Ihr Headhunter
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Sie suchen Top-Talente für Schlüsselpositionen? Als erfahrene
                  Headhunter mit über 15 Jahren Expertise finden wir die
                  richtigen Führungskräfte und Spezialisten – diskret, effizient
                  und nachhaltig.
                </p>
                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0e1c2f] shadow-sm transition-colors hover:bg-[#ffdea5]"
                  href="#kontakt-form"
                >
                  Jetzt passenden Kandidaten finden
                </a>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Warum Sie einen Headhunter engagieren sollten
                </h2>
                <span className="mx-auto mt-5 block h-0.5 w-16 bg-brand-gold" />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                  <p>
                    Die Besetzung von Führungspositionen und Schlüsselrollen ist
                    eine der kritischsten Aufgaben im Unternehmensmanagement.
                    Fehlbesetzungen können Geschäftsergebnisse, Teamdynamik und
                    Unternehmensstrategie gefährden.
                  </p>
                  <p>
                    Klassische Stellenanzeigen erreichen die besten Kandidaten
                    nicht. Hochqualifizierte Führungskräfte und gefragte
                    Spezialisten sind selten aktiv auf Jobsuche und bleiben über
                    herkömmliche Recruiting-Kanäle unerreichbar.
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {whyColumns.map((item) => (
                  <article className="border border-brand-border bg-[#f2f4f6] p-6" key={item.title}>
                    <span
                      aria-hidden="true"
                      className="mb-5 flex h-10 w-10 items-center justify-center bg-[#0e1c2f] text-[#ffdea5]"
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-brand-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-10 bg-[#eceef0] p-6 text-center">
                <p className="text-sm font-medium text-brand-navy">
                  Suchen Sie gezielt Führungskräfte in Norddeutschland? Unsere
                  spezialisierten Regionalservices bieten maßgeschneiderte Unterstützung:
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <a className="inline-flex min-h-11 items-center justify-center bg-[#0e1c2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white" href="/personalberatung/headhunter/headhunter-hamburg">
                    Headhunter Hamburg
                  </a>
                  <a className="inline-flex min-h-11 items-center justify-center bg-[#0e1c2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white" href="/personalberatung/headhunter/headhunter-bremen">
                    Headhunter Bremen
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#0e1c2f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffdea5]">
                  Methodik &amp; Sorgfalt
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                  So arbeiten wir: Der Headhunting-Prozess
                </h2>
                <span className="mx-auto mt-5 block h-0.5 w-16 bg-brand-gold" />
              </div>
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14" key={step.phase}>
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#ffdea5]">{step.phase}</p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">{step.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{step.text}</p>
                      <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e9c176]">
                        <span aria-hidden="true" className="material-symbols-outlined text-lg">{step.icon}</span>
                        {step.label}
                      </div>
                    </div>
                    <div className={`relative min-h-[300px] overflow-hidden sm:min-h-[360px] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <Image
                        alt={step.imageAlt}
                        className="object-cover grayscale-[20%]"
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        src={step.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                Für welche Positionen engagieren Sie einen Headhunter?
              </h2>
              <span className="mx-auto mt-5 block h-0.5 w-16 bg-brand-gold" />
              <p className="mt-6 text-sm font-medium text-brand-navy sm:text-base">
                Wir besetzen häufig folgende Positionen:
              </p>
              <div className="mt-4 space-y-3 bg-[#f2f4f6] p-6">
                {positions.map(([title, text]) => (
                  <div className="flex items-start gap-3" key={title}>
                    <span aria-hidden="true" className="material-symbols-outlined mt-0.5 text-lg text-[#775a19]">arrow_right</span>
                    <p className="text-sm leading-relaxed text-brand-muted">
                      <strong className="text-brand-navy">{title}:</strong> {text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-brand-muted">
                Gemeinsam ist diesen Positionen: Sie sind geschäftskritisch,
                schwer zu besetzen und erfordern Kandidaten, die mehr mitbringen
                als einen guten Lebenslauf. Unser Branchenfokus umfasst Industrie,
                Logistik, Handel, Dienstleistungen, IT und Beratung.
              </p>
            </div>
          </section>

          <section className="bg-[#0e1c2f] px-4 py-16 text-center text-white sm:px-6 lg:px-8" id="kontakt-form">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                Headhunter vs. Personalberater: Der Unterschied
              </h2>
              <p className="mt-4 text-sm text-slate-300 sm:text-base">
                Viele verwenden die Begriffe synonym – doch es gibt wichtige Unterschiede:
              </p>
              <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
                <div className="border border-white/10 bg-white/5 p-6">
                  <h3 className="font-serif text-xl font-semibold">Personalberater</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Arbeiten oft mit Stellenanzeigen, Bewerberdatenbanken und aktivem Bewerber-Screening.
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#e9c176]">Headhunter</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Identifizieren passive Kandidaten, die nicht aktiv suchen, und sprechen diese gezielt an.
                  </p>
                </div>
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-200">
                Schultz &amp; Partner vereint beide Welten. Je nach Anforderung
                wählen wir die optimale Strategie für Ihre Vakanz.
              </p>
              <a
                className="mt-7 inline-flex min-h-12 items-center justify-center border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#0e1c2f]"
                href="/kontakt#anfrageformular"
              >
                Jetzt Termin vereinbaren
              </a>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                Vorteile: Warum Schultz &amp; Partner als Headhunter?
              </h2>
              <span className="mx-auto mt-5 block h-0.5 w-16 bg-brand-gold" />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {advantages.map((item) => (
                  <article className="border border-brand-border bg-white p-6" key={item.title}>
                    <span
                      aria-hidden="true"
                      className="mb-5 flex h-10 w-10 items-center justify-center bg-[#f2f4f6] text-[#0e1c2f]"
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </span>
                    <h3 className="font-serif text-lg font-semibold leading-snug text-brand-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f2f4f6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">FAQ</h2>
              <span className="mx-auto mt-4 block h-0.5 w-12 bg-brand-gold" />
              <div className="mt-8 space-y-2">
                {faqs.map((faq) => (
                  <details className="group border border-brand-border bg-white" key={faq.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-brand-navy marker:hidden">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-brand-muted transition-transform group-open:rotate-180">
                        keyboard_arrow_down
                      </span>
                    </summary>
                    <p className="border-t border-brand-border px-5 py-4 text-sm leading-relaxed text-brand-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
