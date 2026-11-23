import Image from "next/image";

const values = [
  {
    symbol: "↓",
    title: "We stay",
    description:
      "Not a deck and a handshake. We're there until the call is made, and through what follows. Operative Umsetzung zählt.",
  },
  {
    symbol: "≠",
    title: "We're honest",
    description:
      "We say what the decision needs, not what you hoped to hear, even when it stings the most. Hanseatische Klarheit.",
  },
];

export default function EditorialValuesSection() {
  return (
    <section
      className="border-t border-brand-border bg-white py-16 sm:py-20"
      id="ueber-uns"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative z-10 h-[360px] overflow-hidden sm:h-[450px]">
                <Image
                  alt="Führungskräfte im vertraulichen Gespräch"
                  className="object-cover grayscale contrast-125"
                  fill
                  sizes="(max-width: 1023px) 100vw, 42vw"
                  src="/img/Warm Minimalist Consultation Around Table.png"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-6 z-0 hidden h-40 w-40 border-2 border-brand-gold sm:block"
              />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Unsere Haltung
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal leading-tight text-brand-navy sm:text-5xl">
                Built for the <em className="font-normal">hardest decisions</em>{" "}
                without obvious answers.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-darkmuted">
                The obvious decisions don&apos;t need us. We exist for the ones
                that keep founders and boards awake, where the right call is
                rarely clear and consequences are lasting. That is exactly
                where we work.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
              {values.map((value) => (
                <article
                  className="border border-brand-border bg-white p-6"
                  key={value.title}
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/20 text-sm font-bold text-brand-gold">
                    {value.symbol}
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-darkmuted sm:text-sm">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
