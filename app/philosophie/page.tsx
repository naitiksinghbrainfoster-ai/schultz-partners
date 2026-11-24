import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PageInteractions from "@/app/page-interactions";

export const metadata: Metadata = {
  title: "Philosophie | Schultz & Partner",
  description:
    "Unsere Philosophie: professionelle Unternehmens- und Personalberatung mit persönlicher Nähe, operativer Erfahrung und klarem Mittelstandsfokus.",
};

export default function PhilosophiePage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-white text-brand-slate">
          <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-brand-navy pt-36 text-white sm:min-h-[430px] sm:pt-40 lg:min-h-[470px]">
            <Image
              alt="Strategische Beratung und Unternehmensentwicklung"
              className="object-cover object-center opacity-40"
              fill
              priority
              sizes="100vw"
              src="/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/95 via-[#0b192c]/75 to-[#0b192c]/35" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                Unternehmens- &amp; Personalberatung
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Philosophie
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-base">
                Ihr Erfolg ist unser Ziel!
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
              <article>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Unsere Haltung
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl">
                  Unsere Philosophie
                </h2>
                <span
                  aria-hidden="true"
                  className="mt-5 block h-px w-16 bg-brand-gold"
                />
                <p className="mt-7 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Wir sind groß genug, um professionell zu arbeiten, und klein
                  genug, um unsere Kunden individuell und persönlich zu
                  beraten.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Unsere Partner kommen aus der Industrie und Wirtschaft und
                  bringen langjährige operative und strategische
                  Top-Managementerfahrung in die individuellen Beratungsprojekte
                  ein.
                </p>
              </article>

              <article className="md:pt-16">
                <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
                  Der Mittelstand ist die Lebensader der deutschen Industrie
                  und der Motor von Innovation. Wir wollen mit Erfahrung und
                  Kompetenz unseren Beitrag zum Erfolg des Mittelstands im
                  Allgemeinen und zum Erfolg Ihres Unternehmens im Speziellen
                  leisten.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-brand-muted sm:text-base">
                  Wir bieten individuelle Lösungen, die in enger Zusammenarbeit
                  mit unseren Kunden entstehen – Ihr Erfolg ist unser Ziel.
                </p>
                <div className="mt-8 border-l-4 border-brand-gold bg-[#f7f9fb] p-5">
                  <p className="font-serif text-lg font-semibold leading-relaxed text-brand-navy">
                    Persönliche Verantwortung, klare Kommunikation und
                    unternehmerisches Denken verbinden unsere Beratung.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
