import Image from "next/image";

const recruitmentServices = [
  {
    title: "Personalberatung",
    description:
      "Sie haben einen Personalengpass und benötigen kurz- oder längerfristig Unterstützung? Wir finden die passende Lösung für Ihre Personalfragen.",
    image: "/img/Focused Office Discussion.png",
    imageAlt: "Zwei Kollegen besprechen gemeinsam Unterlagen",
    requestLabel: "Personalberatung anfragen",
    moreLabel: "Mehr zur Personalberatung",
    moreHref: "/personalberatung/hr-management",
  },
  {
    title: "Karriereberatung",
    description:
      "Sie planen eine berufliche Neuorientierung oder möchten Ihren Wert am Markt testen und wissen nicht, wie Sie vorgehen sollen?",
    image: "/img/Waterfront Office Meeting Dialogue.png",
    imageAlt: "Beratungsgespräch in einem modernen Büro",
    requestLabel: "Karriereberatung anfragen",
    moreLabel: "Mehr zur Karriereberatung",
    moreHref: "/personalberatung/karriereberatung",
  },
  {
    title: "Headhunting",
    description:
      "Wir verbinden langjährige Erfahrung aus mittelständischen und konzernverbundenen Unternehmen mit fundierter Expertise in Personalberatung und Headhunting.",
    image: "/img/Executive Boardroom Discussion.png",
    imageAlt: "Führungskräfte im Gespräch am Konferenztisch",
    requestLabel: "Headhunting anfragen",
    moreLabel: "Mehr zum Headhunting",
    moreHref: "/personalberatung#headhunting",
  },
];

export default function RecruitmentSection() {
  return (
    <section
      className="relative z-0 border-b border-brand-border bg-white pb-20 pt-20 sm:pb-28 sm:pt-24"
      id="personalberatung"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-brand-gold">
            Unser Angebot an Dienstleistungen
          </span>
          <h2 className="relative inline-block pb-4 font-serif text-3xl font-normal text-brand-navy sm:text-4xl lg:text-5xl">
            Personalberatung und Headhunting
            <span className="absolute bottom-0 left-0 h-0.5 w-24 bg-brand-gold" />
          </h2>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 text-sm leading-relaxed text-brand-darkmuted sm:text-base lg:grid-cols-2 lg:gap-16">
          <div>
            <p>
              Die Auswahl, Motivation und langfristige Bindung von Mitarbeitern
              zählt heute zu den wichtigsten Aufgaben eines Unternehmens. Wir
              decken das gesamte Spektrum moderner Personalwirtschaft ab – vom
              Recruiting über Bindung und Coaching bis zum Outplacement.
            </p>
            <p className="mt-4">
              Unser Ziel ist es, Sie in folgenden Bereichen zu unterstützen:
              systematische Auswahl von Führungskräften und Spezialisten
              (Executive Search und Headhunting), HR- und Interimmanagement
              sowie Karriereberatung und Coaching bei beruflichen und
              persönlichen Veränderungsprozessen.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Wir stellen höchste Ansprüche an die Lösung der Aufgabenstellung
              und an uns selbst. Unseren Erfolg messen wir an der Qualität und
              Nachhaltigkeit der erzielten Lösungen. Mit unserer Erfahrung
              erfüllen wir die Wünsche unserer Kunden.
            </p>
            <p className="font-semibold text-brand-navy">
              Wir freuen uns auf eine Zusammenarbeit mit Ihnen!
            </p>
            <p className="font-semibold text-brand-navy">
              Wir beraten sowohl vor Ort als auch im Online-Format.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {recruitmentServices.map((service) => (
            <article
              className="group flex flex-col overflow-hidden rounded-xl border border-brand-border bg-white transition-shadow duration-300 hover:shadow-lg"
              key={service.title}
            >
              <div className="relative h-48 overflow-hidden sm:h-52">
                <Image
                  alt={service.imageAlt}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  src={service.image}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-6 p-6 sm:p-7">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-semibold text-brand-navy sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-muted sm:text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2.5 pt-2">
                  <a
                    className="block w-full rounded-lg bg-brand-navy px-3 py-2.5 text-center text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
                    href={service.moreHref}
                  >
                    {service.requestLabel}
                  </a>
                  <a
                    className="block w-full rounded-lg bg-brand-offwhite px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-wider text-brand-slate transition-colors hover:bg-brand-border/60"
                    href="#kontakt"
                  >
                    {service.moreLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
