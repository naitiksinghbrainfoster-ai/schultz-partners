import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageInteractions from "@/app/page-interactions";

export const metadata: Metadata = {
  title: "Aktuelle Stellenanzeigen | Schultz & Partner",
  description:
    "Aktuelle Stellenangebote in Personalmanagement, IT, Vertriebsleitung, Bauwesen und Controlling.",
};

const jobs = [
  {
    title: "Leiter / Leiterin Personalmanagement (m/w/d)",
    image: "/img/Personalberatunghero.png",
    text:
      "Wir suchen eine Führungskraft für den Landesverband West des Deutschen Jugendherbergswerkes. Die Position umfasst Personalführung, operative Personalprozesse und die Weiterentwicklung der Organisationsstruktur.",
  },
  {
    title: "Senior Java Entwickler (m/w/d)",
    image: "/img/Modern%20Office%20Presentation%20Around%20the%20Table%20(1).png",
    text:
      "Senior Java Entwickler für erfolgreiche Softwareunternehmen in Achim gesucht. Gesucht werden Erfahrung mit Softwarearchitektur, hybrider Entwicklung und modernen Entwicklungsumgebungen.",
  },
  {
    title: "Teamleitung Kundenbetreuung Gewerbewesen Software (m/w/d)",
    image: "/img/Executive%20Boardroom%20Discussion.png",
    text:
      "Interessante Leitungsaufgabe als Teamleitung in einem führenden Softwareunternehmen im Bereich Kundenbetreuung. Softwarelastiges Umfeld und Führungserfahrung werden vorausgesetzt.",
  },
  {
    title: "Bauingenieur (m/w/d) am Standort Neumünster",
    image: "/img/Collaborative%20Office%20Document%20Review.png",
    text:
      "Eine interessierte Fachkraft für innovative Bau-, Ingenieur- und Projektaufgaben wird für ein erfolgreiches Unternehmen in Schleswig-Holstein gesucht.",
  },
  {
    title: "Bauzeichner am Standort Neumünster (m/w/d)",
    image: "/img/Corporate%20Strategy%20Meeting%20and%20Action%20Plan%20(1).png",
    text:
      "Kommen Sie in das Team einer technisch anspruchsvollen Ingenieurgesellschaft. Interesse an der Bearbeitung komplexer Bauvorhaben ist erwünscht.",
  },
  {
    title: "Wirtschaftsprüfer (m/w/d) mit Aussicht auf Partnerschaft",
    image: "/img/Warm%20Minimalist%20Consultation%20Around%20Table.png",
    text:
      "Eine renommierte Wirtschaftsprüfungs- und Steuerberatungsgesellschaft sucht einen Wirtschaftsprüfer mit Perspektive auf eine Partnerschaft.",
  },
  {
    title: "Mitarbeiter/in Vertriebsinnendienst Vollzeit oder Teilzeit",
    image: "/img/Waterfront%20Office%20Meeting%20Dialogue2.png",
    text:
      "Eine Position in der Vertriebsabteilung eines kleinen, inhabergeführten Unternehmens in Bremen. Gute Vertriebsorganisation und sicheres Auftreten werden erwartet.",
  },
  {
    title: "Regionalleiter / Regional Manager (m/w/d)",
    image: "/img/Dusk%20Waterfront%20Executive%20Meeting.png",
    text:
      "Wir suchen für die Verkaufsregion Nürnberg / Würzburg / Frankfurt eine leistungs- und führungsorientierte Persönlichkeit mit Marktkenntnis.",
  },
];

export default function StellenanzeigenPage() {
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
              src="/img/Focused%20Office%20Discussion.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/95 via-[#0b192c]/82 to-[#0b192c]/45" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                Karriere &amp; Vakanzen
              </p>
              <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Unsere aktuellen Stellenanzeigen
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-base">
                Ihr Erfolg ist unser Ziel!
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Aktuelle Vakanzen
                </p>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                  Offene Positionen
                </h2>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-px w-16 bg-brand-gold"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                  <article
                    className="flex flex-col overflow-hidden border border-brand-border bg-[#f7f9fb] shadow-sm"
                    key={job.title}
                  >
                    <div className="relative h-[210px] overflow-hidden">
                      <Image
                        alt=""
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        src={job.image}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-semibold leading-[1.3] text-brand-navy">
                        {job.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="mt-4 block h-px w-full bg-brand-border"
                      />
                      <p className="mt-5 flex-1 text-sm leading-relaxed text-brand-muted">
                        {job.text}
                      </p>
                      <div className="mt-6 flex flex-col gap-2">
                        <a
                          className="inline-flex min-h-11 items-center justify-center rounded bg-brand-navy px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                          href="/kontakt#anfrageformular"
                        >
                          Zur Jobbeschreibung
                        </a>
                        <a
                          className="inline-flex min-h-11 items-center justify-center rounded border border-brand-navy px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                          href="/kontakt#anfrageformular"
                        >
                          Direkt bewerben
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-brand-navy px-4 py-12 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                  Initiativ bewerben
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                  Keine passende Position dabei?
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Teilen Sie uns Ihren Wunschbereich und Ihre Qualifikationen diskret mit.
                </p>
              </div>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded bg-[#ffdea5] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#261900] transition-colors hover:bg-white"
                href="/kontakt#anfrageformular"
              >
                Initiativ bewerben
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
