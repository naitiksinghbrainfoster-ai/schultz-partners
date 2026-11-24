import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageInteractions from "@/app/page-interactions";

export const metadata: Metadata = {
  title: "Senior Partner | Schultz & Partner",
  description:
    "Lernen Sie die Senior Partner Sabine Schultz und Jörg Schultz kennen und erfahren Sie mehr über unsere Kooperationspartner.",
};

const partners = [
  {
    name: "Szesny – Training, Coaching",
    company: "Bernd Schneider",
    website: "www.szesny.net",
    phone: "+49 (0)8232 9098 74",
    email: "info@szesny.net",
  },
  {
    name: "KaCe Consulting – Supply Chain Solutions",
    company: "www.kace-consulting.de",
    website: "Katrin und Claudio Schröder",
    phone: "+49 (0)4255 98 38 987",
    email: "klaudia.langer@kace-consulting.de",
  },
  {
    name: "AMMERTHALER INSTITUT",
    company: "Persönlichkeits- & Organisationsentwicklung",
    website: "www.ammerthaler-institut.de",
    phone: "026 24 – 51 48 80",
    email: "info@ammerthaler-institut.de",
  },
  {
    name: "Sudmann & Company",
    company: "Consulting, Coaching & Keynote-Speaker",
    website: "www.sudmann-juco.com",
    phone: "",
    email: "www.sudmann-juco.com",
  },
];

export default function SeniorPartnerPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-white text-brand-slate">
          <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#0e1c2f] pt-36 text-white sm:min-h-[430px] sm:pt-40 lg:min-h-[470px]">
            <Image
              alt=""
              className="object-cover object-center opacity-35"
              fill
              priority
              sizes="100vw"
              src="/img/Dusk%20Waterfront%20Executive%20Meeting.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/95 via-[#0b192c]/80 to-[#0b192c]/45" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                Persönliche Verantwortung
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Senior Partner
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-base">
                Ihr Erfolg ist unser Ziel!
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Die geschäftsführenden Partner
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Sabine Schultz
                </h2>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-4 block h-px w-16 bg-brand-gold"
                />
                <p className="mt-5 text-sm font-semibold text-brand-muted">
                  Inhaberin der Schultz &amp; Partner Unternehmens- und
                  Personalberatung
                </p>
              </div>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[300px_1fr]">
                <div className="relative h-[260px] overflow-hidden rounded-sm bg-brand-offwhite sm:h-[320px] lg:h-[300px]">
                  <Image
                    alt="Sabine Schultz"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1023px) 100vw, 300px"
                    src="/img/Professional%20Portrait%20by%20a%20Bright%20Window.png"
                  />
                </div>
                <div className="text-sm leading-relaxed text-brand-muted">
                  <p>
                    Ausführliche Erfahrungen in Konzern und Mittelstand:
                    Führungserfahrung in Konsum- und Investitionsgüterbereichen
                    ist Voraussetzung für eine effektive Führung und erfolgreiche
                    Steuerung von Top-Führungskräften. Die Fähigkeiten zu
                    Kommunikation, Führungsverhalten, Gelassenheit,
                    Entscheidungsprozessen, Gehalt, Strategie- und
                    Ergebnisorientierung sowie der professionelle Umgang mit
                    Veränderungsprozessen bilden die Grundlage für ihre Arbeit
                    in der Personalberatung.
                  </p>
                  <p className="mt-5">
                    Als Senior Partnerin unterstützt sie Führungskräfte und
                    Unternehmen bei Fachkräftesuche, Führungspositionen,
                    Karriereberatung und Personalentwicklung.
                  </p>
                  <div className="mt-6 space-y-2 text-sm">
                    <p>
                      Seit 2015 im Aufsichtsrat eines mittelständischen
                      Unternehmens.
                    </p>
                    <p>
                      Zertifizierte LINC Personality Profiler Coach sowie
                      erfahrene Beraterin für Führungskräfte und Organisationen.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-2 text-brand-navy sm:flex-row sm:gap-5">
                    <a
                      className="flex items-center gap-2 transition-colors hover:text-[#775a19]"
                      href="mailto:s.schultz@schultz-partners.de"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                        mail
                      </span>
                      s.schultz@schultz-partners.de
                    </a>
                    <a
                      className="flex items-center gap-2 transition-colors hover:text-[#775a19]"
                      href="tel:+494085372226"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                        call
                      </span>
                      040 - 85 37 22 26
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-20 text-center">
                <h2 className="font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Jörg Schultz
                </h2>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-4 block h-px w-16 bg-brand-gold"
                />
                <p className="mt-5 text-sm font-semibold text-brand-muted">
                  Inhaber der Schultz &amp; Partner Unternehmens- und
                  Personalberatung
                </p>
              </div>

              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[300px_1fr]">
                <div className="relative h-[260px] overflow-hidden rounded-sm bg-brand-offwhite sm:h-[320px] lg:h-[300px]">
                  <Image
                    alt="Jörg Schultz"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1023px) 100vw, 300px"
                    src="/img/cd1ed529-ce3b-4060-94db-76a69ade86b9.png"
                  />
                </div>
                <div className="text-sm leading-relaxed text-brand-muted">
                  <p>
                    Als erfahrener CFO, Personalvorstand, Kaufmännischer
                    Geschäftsführer und Geschäftsführer von international tätigen
                    Unternehmen bringt Jörg Schultz umfassende Praxis in
                    Restrukturierung, Geschäftsführung und Finanzierung mit.
                  </p>
                  <p className="mt-5">
                    Zuvor bekleidete er führende Positionen in
                    mittelständischen und konzerngebundenen Unternehmen. Die
                    Erfahrung aus mehr als 20 Jahren Beratung und operativer
                    Führung bildet die Grundlage für seine Mandate in
                    Personal- und Unternehmensberatung.
                  </p>
                  <p className="mt-5">
                    Er berät Kunden in Executive Search, Restrukturierung,
                    Nachfolgeplanung und strategischen Personalfragen.
                  </p>
                  <p className="mt-5">
                    Jörg Schultz ist ferner zertifizierter LINC Personality
                    Profiler Coach.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 text-brand-navy sm:flex-row sm:gap-5">
                    <a
                      className="flex items-center gap-2 transition-colors hover:text-[#775a19]"
                      href="mailto:j.schultz@schultz-partners.de"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                        mail
                      </span>
                      j.schultz@schultz-partners.de
                    </a>
                    <a
                      className="flex items-center gap-2 transition-colors hover:text-[#775a19]"
                      href="tel:+494212443039"
                    >
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                        call
                      </span>
                      0421 - 24 43 039
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#0e1c2f] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  Netzwerke &amp; Expertise
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
                  Kooperationspartner
                </h2>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-4 block h-px w-16 bg-brand-gold"
                />
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {partners.map((partner) => (
                  <article
                    className="border border-brand-border bg-white p-6 text-brand-navy shadow-sm"
                    key={partner.name}
                  >
                    <h3 className="font-serif text-xl font-semibold">
                      {partner.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-muted">{partner.company}</p>
                    {partner.phone && (
                      <p className="mt-4 flex items-center gap-2 text-sm">
                        <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                          call
                        </span>
                        {partner.phone}
                      </p>
                    )}
                    <p className="mt-2 flex items-center gap-2 text-sm break-all">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                        mail
                      </span>
                      {partner.email}
                    </p>
                  </article>
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
