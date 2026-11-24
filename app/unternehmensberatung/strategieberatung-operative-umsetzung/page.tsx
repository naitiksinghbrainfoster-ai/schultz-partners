import Image from "next/image";
import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PageInteractions from "@/app/page-interactions";
import StrategicCallbackForm from "./StrategicCallbackForm";
import StrategicCaseStudies from "./StrategicCaseStudies";

export const metadata: Metadata = {
  title: "Strategieberatung & operative Umsetzung | Schultz & Partner",
  description:
    "Strategische Neuausrichtung und operative Umsetzungsbegleitung für nachhaltigen Geschäftserfolg. Partnergeführt, verbindlich und diskret.",
};

const pillars = [
  {
    number: "01",
    icon: "explore",
    image: "/img/Strategische%20Neuausrichtung%20im%20Konferenzraum%20(1).png",
    imageAlt: "Strategische Planung im Konferenzraum",
    title: "Strategische Neuausrichtung & Weiterentwicklung",
    description:
      "Wollen Sie und Ihr Unternehmen den nächsten Schritt gehen – dann sprechen Sie mit uns. Aufgrund unserer langjährigen Erfahrung in der industriellen und kaufmännischen Praxis im Konzernverbund und Einzelunternehmen sind wir Ihr kompetenter Ansprechpartner für strategische Zukunftsfragen.",
    focusAreas: [
      "Strategische Analysemethoden & praxiserprobte Konzepte",
      "Segmentauswahl, Personalmanagement & allgemeine Strategieberatung",
      "Evaluierung und Strukturierung der Gesamtorganisation",
      "Entwicklung neuer Geschäftsfelder (Business Model Generation)",
      "Gezielte Ertrags- und Umsatzsteigerungsprogramme",
    ],
    action: "Strategieberatung anfragen",
  },
  {
    number: "02",
    icon: "precision_manufacturing",
    image:
      "/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png",
    imageAlt: "Berater begleiten die operative Umsetzung im Unternehmen",
    title: "Operative Beratung & Umsetzungsbegleitung",
    description:
      "Wir sind die Experten für die Beratung in operativen Managementfragen bzw. in der operativen Umsetzung von strategischen Entscheidungen. Die Entwicklung von neuen Strategien endet nicht mit der Entscheidung darüber – wir begleiten Sie aktiv im Tagesgeschäft.",
    focusAreas: [
      "Prozessberatung & -analyse in administrativen und vertrieblichen Einheiten",
      "Umsetzungsbegleitung, Change-Management und transparente Projektsteuerung",
      "Zeitweise Übernahme von operativen Funktionen als qualifizierter Interim-Manager",
      "Ganzheitliche Begleitung bei Restrukturierung und Organisationsanpassung",
      "Schnittstellenoptimierung zwischen Geschäftsleitung und operativen Fachbereichen",
    ],
    action: "Operative Beratung anfragen",
  },
];

export default function StrategicAdvisoryPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb]">
          <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#0e1c2f] pb-14 pt-32 text-white sm:min-h-[600px] sm:pb-16 sm:pt-36 lg:min-h-[620px] lg:pb-20 lg:pt-40">
            <Image
              alt=""
              className="object-cover object-center opacity-60"
              fill
              priority
              sizes="100vw"
              src="/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/75 via-[#0b192c]/45 to-[#0b192c]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/45 via-transparent to-[#071321]/5" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[#ffdea5] backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffdea5]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                    Unternehmensberatung · Strategie & Umsetzung
                  </span>
                </div>
                <h1 className="font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="text-[#ffdea5]">Strategieberatung</span>
                  <br className="hidden sm:block" /> &amp; operative Umsetzung
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
                  Wir denken vor und erarbeiten belastbare Lösungen für Ihren
                  nachhaltigen Geschäftserfolg. Verbindlich, partnergeführt und
                  direkt am operativen Herz Ihres Unternehmens.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-9 max-w-2xl sm:mb-12">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Kernkompetenzen
                </span>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
                  Zwei Säulen für Ihren unternehmerischen Vorsprung
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Reine Konzeptpapiere schaffen keinen Wert. Wir verbinden
                  fundierte strategische Neuausrichtung mit der direkten,
                  operativen Verantwortung vor Ort.
                </p>
              </div>

              <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-7">
                {pillars.map((pillar, index) => (
                  <article
                    className="group flex min-w-0 flex-col rounded-xl bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-7"
                    key={pillar.number}
                  >
                    <div className="relative mb-5 h-56 overflow-hidden rounded-lg border border-[#c5c6cd]/30 sm:h-72">
                      <Image
                        alt={pillar.imageAlt}
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        src={pillar.image}
                      />
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eceef0] text-[#775a19]">
                        <span
                          aria-hidden="true"
                          className="material-symbols-outlined text-[26px]"
                        >
                          {pillar.icon}
                        </span>
                      </span>
                      <span className="rounded bg-[#f2f4f6] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#775a19]">
                        Säule {pillar.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold tracking-tight text-[#191c1e] sm:text-2xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#44474c]">
                      {pillar.description}
                    </p>
                    <div className="mt-5 rounded-lg bg-[#f2f4f6] p-4 sm:p-5">
                      <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-[#191c1e]">
                        Leistungsschwerpunkte
                      </span>
                      <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-[#44474c]">
                        {pillar.focusAreas.map((focusArea) => (
                          <li className="flex items-start gap-2" key={focusArea}>
                            <span
                              aria-hidden="true"
                              className="material-symbols-outlined mt-0.5 shrink-0 text-lg text-[#775a19]"
                            >
                              check_circle
                            </span>
                            <span>{focusArea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      className={`mt-auto flex items-center justify-between gap-3 rounded px-4 py-3 text-sm font-semibold transition-colors ${
                        index === 1
                          ? "mt-5 bg-[#775a19] text-white hover:bg-[#5d4201]"
                          : "mt-5 bg-[#e6e8ea] text-[#191c1e] hover:bg-[#0e1c2f] hover:text-white"
                      }`}
                      href="#kontakt-rueckruf"
                    >
                      <span>{pillar.action}</span>
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        arrow_forward
                      </span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <StrategicCaseStudies />

          <section
            className="scroll-mt-32 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="kontakt-rueckruf"
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
                  Ihr nächster Schritt
                </span>
                <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#191c1e] sm:text-4xl">
                  Lassen Sie uns über Ihre Ziele sprechen.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Wir nehmen uns Zeit für Ihr Anliegen und besprechen mit Ihnen
                  vertraulich, welche Schritte Ihr Unternehmen nachhaltig
                  voranbringen.
                </p>
                <div className="mt-7 space-y-3">
                  <a
                    className="flex items-center gap-3 text-sm font-medium text-[#191c1e] transition-colors hover:text-[#775a19]"
                    href="tel:04085372226"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f4f6] text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined">
                        call
                      </span>
                    </span>
                    Hamburg: 040 - 85 37 22 26
                  </a>
                  <a
                    className="flex items-center gap-3 text-sm font-medium text-[#191c1e] transition-colors hover:text-[#775a19]"
                    href="tel:04212443039"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f4f6] text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined">
                        call
                      </span>
                    </span>
                    Bremen: 0421 - 24 43 039
                  </a>
                  <a
                    className="flex items-center gap-3 text-sm font-medium text-[#191c1e] transition-colors hover:text-[#775a19]"
                    href="mailto:hamburg@schultz-partners.de"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f4f6] text-[#775a19]">
                      <span aria-hidden="true" className="material-symbols-outlined">
                        mail
                      </span>
                    </span>
                    hamburg@schultz-partners.de
                  </a>
                </div>
                <p className="mt-5 text-xs leading-relaxed text-[#75777d]">
                  Ihr Anliegen wird vertraulich behandelt.
                </p>
              </div>
              <StrategicCallbackForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
