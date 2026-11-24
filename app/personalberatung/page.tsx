import type { Metadata } from "next";
import Image from "next/image";
import PageInteractions from "../page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "Personalberatung | Schultz & Partner",
  description:
    "Personalberatung, Executive Search und Headhunting in Hamburg und Bremen. Schultz & Partner begleitet Unternehmen und Führungskräfte persönlich und diskret.",
};

const faqs = [
  {
    question: "Was versteht man unter Personalberatung?",
    answer:
      "Unter Personalberatung versteht man die professionelle Unterstützung von Unternehmen bei der Suche, Auswahl und Entwicklung von Fach- und Führungskräften sowie bei strategischen und operativen Fragestellungen im HR-Management.",
  },
  {
    question:
      "Was können Sie von einer Personalberatung in Hamburg erwarten?",
    answer:
      "Von unserer Niederlassung in Hamburg erwarten Sie fundierte Marktkenntnis in Norddeutschland, absolute Diskretion, maßgeschneiderte Suchprozesse und eine enge, persönliche Begleitung bis zur erfolgreichen Besetzung.",
  },
  {
    question: "Wie geht Schultz & Partner in der Personalberatung vor?",
    answer:
      "Wir starten mit einer präzisen Anforderungsanalyse, kombinieren gezielte Direktansprache mit unserem eigenen Kandidatenpool und führen strukturierte Auswahlgespräche durch – bis zum Vertragsabschluss und darüber hinaus.",
  },
  {
    question:
      "Welche Bereiche der Personalberatung werden abgedeckt?",
    answer:
      "Unser Leistungsspektrum umfasst Executive Search und Headhunting, operatives und strategisches HR-Management auf Zeit sowie individuelle Karriereberatung, Coaching und Outplacement.",
  },
  {
    question:
      "Headhunting und Personalberatung, was ist der Unterschied?",
    answer:
      "Headhunting bezeichnet die gezielte, diskrete Direktansprache von meist nicht aktiv suchenden Spitzenkräften. Personalberatung umfasst darüber hinaus weitere Themen rund um Personalauswahl, HR-Prozesse, Vergütungssysteme und Personalentwicklung.",
  },
];

export default function PersonalberatungPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main>
          <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#0e1c2f] pb-14 pt-32 text-white sm:min-h-[600px] sm:pb-16 sm:pt-36 lg:min-h-[620px] lg:pb-20 lg:pt-40">
            <Image
              alt=""
              className="object-cover object-center opacity-60"
              fill
              priority
              sizes="100vw"
              src="/img/Personalberatunghero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/45 via-transparent to-[#071321]/5" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[#ffdea5] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffdea5]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                    Executive Search · HR-Management · Karriereberatung
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="text-[#ffdea5]">Personalberatung</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Ihr langfristiger Erfolg ist unsere Aufgabe – mit Kompetenz,
                  Erfahrung und Individualität zum Ziel. Wir begleiten
                  Unternehmen bei der Suche und Entwicklung von Führungskräften
                  und Mitarbeitenden.
                </p>
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
            id="headhunting"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Führungskräfte und Spezialisten
                </p>
                <h2 className="mt-2 font-serif text-3xl font-normal leading-tight text-brand-navy sm:text-4xl">
                  Executive Search / Headhunting
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-darkmuted">
                  <p>
                    Wir haben jahrelange Erfahrung aus der Praxis
                    mittelständischer und konzernverbundener Unternehmen sowie
                    langjährige Erfahrung in der Personalberatung. Wir bieten
                    strukturierte und maßgeschneiderte Rekrutierungsverfahren
                    für die Suche Ihrer neuen Mitarbeitenden und
                    Führungskräfte.
                  </p>
                  <p>
                    Unser weitreichendes Netzwerk von Personalberatungen im In-
                    und Ausland unterstützt uns dabei, Vakanzen mit
                    qualifizierten Mitarbeitenden und Führungskräften zu
                    besetzen. Unsere Besetzungsquote liegt mit 98 % auf einem
                    sehr hohen Niveau – ebenso wie die Zufriedenheit unserer
                    Klienten.
                  </p>
                  <p>
                    Darüber hinaus können wir auf einen eigenen umfangreichen
                    Pool hochqualifizierter Kandidatinnen und Kandidaten
                    zurückgreifen.
                  </p>
                  <p>
                    Unternehmen, die heute in einem komplexen und dynamischen
                    Markt erfolgreich bestehen, sind jene mit Mitarbeitenden,
                    die den Herausforderungen des stetigen Wandels gewachsen
                    sind und im Unternehmen den entsprechenden Freiraum haben,
                    kreativ sein zu können. So bleiben sie dem Unternehmen
                    langfristig erhalten.
                  </p>
                  <p>
                    Schultz &amp; Partner bietet mit Niederlassungen in Hamburg
                    und Bremen deutschlandweit einen umfassenden Service in der
                    Personalberatung. Dieses Angebot richtet sich ausschließlich
                    an Unternehmen.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-10 items-center justify-center bg-brand-navy px-4 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                    href="/personalberatung/headhunter"
                  >
                    Mehr zu Headhunting
                  </a>
                  <a
                    className="inline-flex min-h-10 items-center justify-center bg-brand-navy px-4 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                    href="/kontakt"
                  >
                    Headhunting anfragen
                  </a>
                  <a
                    className="inline-flex min-h-10 items-center justify-center border border-brand-border px-4 text-[11px] font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-offwhite"
                    href="/ueber-uns/stellenanzeigen"
                  >
                    Stellenanzeigen
                  </a>
                </div>
              </div>
              <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:col-span-5 lg:col-start-8">
                <Image
                  alt="Berater besprechen Unterlagen mit einem Kandidaten"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Focused Office Discussion.png"
                />
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-24 bg-[#2b3b43] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20"
            id="hr-management"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:col-span-5">
                <Image
                  alt="Beratungsteam plant gemeinsam Personal- und HR-Maßnahmen"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Waterfront Office Meeting Dialogue.png"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-goldlight">
                  Flexibel und partnerschaftlich
                </p>
                <h2 className="mt-2 font-serif text-3xl font-normal leading-tight sm:text-4xl">
                  Personalberatung / HR-Management
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
                  <p>
                    Sie haben keine eigene Personalabteilung und benötigen
                    kurzfristig Unterstützung bei speziellen Fragestellungen,
                    bei der temporären Durchführung von HR-Projekten oder bei
                    der Beratung im operativen und strategischen HR-Management?
                  </p>
                  <p>
                    Sie haben einen Personalengpass und benötigen kurz- oder
                    längerfristig Unterstützung? Benötigen Sie Unterstützung
                    bei Personalberatung und Projektthemen? Ob Entwicklung und
                    Implementierung eines Leistungsbeurteilungssystems, eines
                    Arbeitsplatzbewertungssystems oder beispielsweise die
                    Einführung einer Mitarbeiterzeitung zur Verbesserung der
                    Kommunikation: Mit der langjährigen Erfahrung aus der
                    Unternehmenspraxis sind die Partner und Mitarbeitenden der
                    Schultz &amp; Partner Personalberatung mit diesen Themen
                    vertraut und unterstützen Sie gerne in ganz Norddeutschland
                    – aus Hamburg und Bremen.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-10 items-center justify-center border border-white/50 px-4 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
                    href="/personalberatung/hr-management"
                  >
                    Mehr zur Personalberatung
                  </a>
                  <a
                    className="inline-flex min-h-10 items-center justify-center bg-white px-4 text-[11px] font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-offwhite"
                    href="/kontakt"
                  >
                    Personalberatung anfragen
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            className="scroll-mt-24 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
            id="karriereberatung"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Für Ihren nächsten beruflichen Schritt
                </p>
                <h2 className="mt-2 font-serif text-3xl font-normal leading-tight text-brand-navy sm:text-4xl">
                  Karriereberatung / Coaching
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-brand-darkmuted">
                  <p>
                    Sie planen eine berufliche Neuorientierung oder möchten
                    Ihren Wert am Markt testen und wissen nicht, wie Sie
                    vorgehen sollen, das heißt: Sie suchen ein individuelles
                    New-Placement-Coaching (keine Personalvermittlung). Bei
                    Ihnen steht eine Karriere- und Laufbahnplanung an, Ihnen
                    liegt ein interessantes Job-Angebot vor oder Sie suchen
                    ein individuelles Job-Coaching? Vielleicht stellen Sie
                    sich mehr und mehr die Frage: Wer bin ich und was ist das
                    Richtige für mich? Dann kann ein individuelles
                    Persönlichkeits-Coaching Sie unterstützen.
                  </p>
                  <p>
                    Sie möchten sich auf ein wichtiges Gehaltsgespräch mit
                    Ihrem Chef vorbereiten und suchen ein individuelles
                    Gehalts-Coaching?
                  </p>
                  <p>
                    Ihre Firma muss Mitarbeitende entlassen. Sollen Sie um
                    Ihren Arbeitsplatz kämpfen oder einen neuen Job suchen?
                    Vielleicht bietet Ihre Firma Ihnen die Möglichkeit einer
                    Outplacement-Beratung.
                  </p>
                  <p>
                    Diese oder andere Fragestellungen beschäftigen Sie und Sie
                    benötigen professionelle Unterstützung aus der Praxis? Wir
                    sind mit unseren Business-Coaches der richtige
                    Ansprechpartner auf allen Gebieten der Karriereberatung
                    und des Karrierecoachings.
                  </p>
                  <p>
                    Unsere Beratung ist diskret und individuell. Wir bieten
                    einen erstklassigen Service mit erfahrenen Coaches, die
                    jahrelang in Top-Positionen der Wirtschaft tätig waren.
                  </p>
                  <p>
                    Rufen Sie uns an oder schicken Sie uns das{" "}
                    <a className="underline underline-offset-2 hover:text-brand-gold" href="/kontakt">
                      Kontaktformular
                    </a>{" "}
                    mit dem Stichwort „Karriereberatung / Coaching“ und Ihren
                    Fragen und Wünschen. Wir freuen uns darauf, Sie
                    kennenzulernen.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:col-span-5 lg:col-start-8">
                <Image
                  alt="Vertrauliches Gespräch zur beruflichen Orientierung"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Warm Minimalist Consultation Around Table.png"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#f4f6f7] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Häufige Fragen
                </p>
                <h2 className="mt-2 font-serif text-3xl font-normal text-brand-navy sm:text-4xl">
                  FAQ zur Personalberatung
                </h2>
                <span aria-hidden="true" className="mx-auto mt-4 block h-px w-16 bg-brand-gold" />
              </div>
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <details className="group border border-brand-border bg-white" key={faq.question}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-sm font-semibold text-brand-slate marker:hidden sm:px-5">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-brand-muted transition-transform group-open:rotate-180">
                        keyboard_arrow_down
                      </span>
                    </summary>
                    <p className="border-t border-brand-border px-4 py-4 text-sm leading-relaxed text-brand-darkmuted sm:px-5">
                      {faq.answer}
                    </p>
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
