import type { Metadata } from "next";
import Image from "next/image";
import ContactInquiry from "./ContactInquiry";
import PageInteractions from "../page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "Kontakt & Mandatsdialog | Schultz & Partner",
  description:
    "Souveräner Dialog auf Augenhöhe. Kontaktieren Sie die geschäftsführenden Partner von Schultz & Partner in Hamburg und Bremen.",
};

const partners = [
  {
    name: "Sabine Schultz",
    role: "Geschäftsführende Partnerin",
    focus: "Karriereberatung, Executive Search, Personalberatung",
    description:
      "Begleitet Unternehmen bei der Besetzung von Schlüsselpositionen sowie Führungskräfte in anspruchsvollen beruflichen Wechselsituationen.",
    image: "/img/Professional%20Portrait%20by%20a%20Bright%20Window.png",
    imageAlt: "Sabine Schultz, geschäftsführende Partnerin",
    email: "s.schultz@schultz-partners.de",
    phone: "040 - 85 37 22 26",
    phoneHref: "tel:+494085372226",
    office: "Hamburg",
  },
  {
    name: "Jörg Schultz",
    role: "Geschäftsführender Partner",
    focus: "Unternehmensberatung, Restrukturierung, M&A, Personalberatung",
    description:
      "Fokussiert auf mittelständische Neuausrichtungen, Transaktionsbegleitung sowie operative Restrukturierung und Krisenmanagement.",
    image: "/img/cd1ed529-ce3b-4060-94db-76a69ade86b9.png",
    imageAlt: "Jörg Schultz, geschäftsführender Partner",
    email: "j.schultz@schultz-partners.de",
    phone: "0421 - 24 43 039",
    phoneHref: "tel:+494212443039",
    office: "Bremen",
  },
];

const offices = [
  {
    name: "Unser Büro in Hamburg",
    locationNote: "Neuer Wall · Hamburg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHgJgpuSL1K6No3CaZw64g77PbcCYrNsh0dl1LPpnD0B0ixq8bsDP9NYrQBK6u2TCf0FpSbp03i-TiqVfxUwpjdfHGxOeIfHb_qWIxn_C3gJvx3-IFVbN81nhgsGLyV50RI_LxmlY0E1rd7BDb8LKmGNf5MdksEGv1JKVqhm4zfKOR5qMSyNrj3MSo3TOoj9jpawi34rViLK4Exoyk46RwPnB_OvgTgTWvoA-fpsQ",
    imageAlt: "Hamburg, Standort am Neuen Wall",
    address: ["Neuer Wall 50", "20354 Hamburg"],
    phone: "040 - 85 37 22 26",
    phoneHref: "tel:+494085372226",
    fax: "040 - 85 37 20 77",
    email: "hamburg@schultz-partners.de",
    mapUrl: "https://maps.google.com/?q=Neuer+Wall+50+20354+Hamburg",
  },
  {
    name: "Unser Büro in Bremen",
    locationNote: "Neidenburger Straße · Bremen",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-pC-QvdpTo4YaKUjNWiuO5SVLzbrSNuhooEeaghi2A8BR5cf6af2bAUeVMkl7_cT6apNaZc9ZwbPDfRV6DpVf0R0HZQJVywc-EbBJ6O33f5oHuHbkPhzbKSZJBzy9CTsqICdlzyek9X4nRsR0Y7_fcw9oR5VTbhEn1sQbH5qz3XlNkLpHZZhwPzZrr2cO1Jhu_3dEXFfKRxjpCL1BRzjvszSMXeJ4HlkVfNzCAow",
    imageAlt: "Bremen, Standort in der Neidenburger Straße",
    address: ["Neidenburger Straße 12", "28207 Bremen"],
    phone: "0421 - 24 43 039",
    phoneHref: "tel:+494212443039",
    fax: "0421 - 24 43 040",
    email: "bremen@schultz-partners.de",
    mapUrl: "https://maps.google.com/?q=Neidenburger+Straße+12+28207+Bremen",
  },
];

const faqs = [
  {
    question: "An wen richtet sich meine Anfrage?",
    answer:
      "Ihre Anfrage können Sie direkt an die geschäftsführenden Partner oder an das jeweils passende Büro richten. Die Kontaktdaten und Beratungsschwerpunkte finden Sie auf dieser Seite.",
  },
  {
    question: "Wie kann ich vertrauliche Informationen übermitteln?",
    answer:
      "Für den Erstkontakt reichen zunächst wenige Angaben zu Ihrem Anliegen. Bitte senden Sie vertrauliche Unterlagen nicht unaufgefordert per E-Mail; stimmen Sie einen geeigneten Übermittlungsweg zunächst persönlich mit Ihrem Ansprechpartner ab.",
  },
  {
    question: "Wo finden persönliche Gespräche statt?",
    answer:
      "Schultz & Partner ist mit Büros in Hamburg und Bremen vertreten. Kontaktieren Sie uns zur Abstimmung eines Gesprächs an einem der Standorte oder eines passenden digitalen Formats.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
        {eyebrow}
      </span>
      <h2 className={`font-serif text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl ${dark ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h2>
      <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-12 bg-brand-gold" />
      {description && (
        <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? "text-slate-200" : "text-brand-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function KontaktPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="bg-brand-cream pt-[120px] text-brand-slate">
          <section className="relative isolate -mt-[120px] overflow-hidden bg-brand-navy pb-8 pt-36 text-white lg:pb-10 lg:pt-40">
            <Image
              alt="Modernes Konferenzzimmer mit Blick auf die Hamburger Alster in der Abenddämmerung"
              className="object-cover"
              fill
              priority
              sizes="100vw"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMcajoOvsdqborz8cuRdkZD8rqS5RLAaObp6ZXMRpB-i7KKevQOMFigK6d1hT8-NZinZneH1S8bEzLvSethhrJFaVLLVR1m4QQjwIwecOZoVCssUba0qJCx1VR-UJXOD5xGDcGruIttgK3Z3tnZUM18FNvTSE9hy6Rp-nRJs642prg5CQF6YBVB3F74d_pZ82n8QlovsIp193seUcDNVK4SA5CKeb3281w7FhRTdQ"
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/80 to-brand-navy/60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(197,168,105,0.18),_transparent_55%)]" />
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start px-6 pb-6 pt-6 text-left lg:px-12 lg:pb-8">
              <div className="max-w-5xl">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#e9c176]">
                  Direkter Partnerdialog &amp; Mandatsanfrage
                </div>
                <h1 className="mb-4 max-w-5xl font-serif text-[34px] font-semibold leading-[1.18] tracking-tight sm:text-[42px] lg:text-[52px]">
                  Wir freuen uns über Ihre Kontaktaufnahme.
                </h1>
                <p className="mb-6 max-w-4xl text-[16px] font-light leading-relaxed text-slate-200 lg:text-[18px]">
                  Unternehmens- und Personalberatung für den gehobenen
                  Mittelstand – im direkten Dialog mit unseren Partnern.
                  Wir begleiten Unternehmen und Führungskräfte bei wichtigen
                  strategischen, personellen und beruflichen Weichenstellungen.
                </p>
              </div>
            </div>
          </section>

          <section className="scroll-mt-32 border-b border-brand-border bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8" id="partner">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                description="Bei uns berät die Geschäftsführung persönlich. Wenden Sie sich direkt an die zuständige Partnerin oder den Partner für Ihr Anliegen."
                eyebrow="Persönliche Verantwortung"
                title="Die geschäftsführenden Partner"
              />
              <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 lg:gap-7">
                {partners.map((partner) => (
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-md border border-brand-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                    key={partner.name}
                  >
                    <div className="relative h-52 overflow-hidden bg-brand-offwhite sm:h-60">
                      <Image
                        alt={partner.imageAlt}
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        src={partner.image}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex-1">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#775a19]">
                          {partner.role}
                        </p>
                        <h3 className="font-serif text-xl font-semibold text-brand-navy sm:text-2xl">
                          {partner.name}
                        </h3>
                        <p className="mb-3 mt-1.5 text-xs font-medium leading-relaxed text-brand-muted">
                          Schwerpunkte: {partner.focus}
                        </p>
                        <span aria-hidden="true" className="mb-3 block h-px w-10 bg-brand-gold" />
                        <p className="mb-4 text-[13px] leading-5 text-brand-muted">
                          {partner.description}
                        </p>
                      </div>
                      <div className="mt-3 grid gap-2 border-t border-brand-border pt-3 text-xs font-medium">
                        <a
                          className="flex min-w-0 items-center gap-2.5 text-brand-navy transition-colors hover:text-[#775a19]"
                          href={`mailto:${partner.email}`}
                        >
                          <span aria-hidden="true" className="material-symbols-outlined flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-offwhite text-sm text-brand-gold">mail</span>
                          <span className="truncate">{partner.email}</span>
                        </a>
                        <a
                          className="flex items-center gap-2.5 text-brand-navy transition-colors hover:text-[#775a19]"
                          href={partner.phoneHref}
                        >
                          <span aria-hidden="true" className="material-symbols-outlined flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-offwhite text-sm text-brand-gold">call</span>
                          <span>Direkt via {partner.office}: {partner.phone}</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-brand-border bg-brand-offwhite px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading
                description="Sie erreichen uns an zwei hanseatischen Wirtschaftsstandorten. Für ein Gespräch vor Ort stimmen Sie bitte vorab einen Termin mit uns ab."
                eyebrow="Präsenz in Norddeutschland"
                title="Unsere Standorte Hamburg & Bremen"
              />
              <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
                {offices.map((office) => (
                  <article
                    className="flex flex-col overflow-hidden border border-brand-border bg-white shadow-sm transition-colors hover:bg-white"
                    key={office.name}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        alt={office.imageAlt}
                        className="object-cover"
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 80vw, 520px"
                        src={office.image}
                        unoptimized
                      />
                      <span className="absolute left-3 top-3 rounded-sm bg-brand-navy/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-cream">
                        {office.address[1].split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-brand-navy sm:text-2xl">
                          {office.name}
                        </h3>
                        <p className="mb-6 mt-1 text-xs font-medium text-brand-muted">
                          {office.locationNote}
                        </p>
                        <ul className="space-y-3.5 text-sm text-brand-slate">
                          <li className="flex items-start gap-3">
                            <span aria-hidden="true" className="material-symbols-outlined mt-0.5 shrink-0 text-base text-brand-gold">location_on</span>
                            <span><strong>{office.address[0]}</strong>, {office.address[1]}</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-base text-brand-gold">call</span>
                            <a className="font-semibold transition-colors hover:text-[#775a19]" href={office.phoneHref}>{office.phone}</a>
                          </li>
                          <li className="flex items-center gap-3 text-brand-muted">
                            <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-base">print</span>
                            <span>Fax: {office.fax}</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-base text-brand-gold">mail</span>
                            <a className="break-all transition-colors hover:text-[#775a19]" href={`mailto:${office.email}`}>{office.email}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-6 flex items-center justify-between border-t border-brand-border pt-5">
                        <a
                          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-navy transition-colors hover:text-[#775a19]"
                          href={office.mapUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Route auf Google Maps
                          <span aria-hidden="true" className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <a
                          className="rounded-sm bg-brand-offwhite px-3.5 py-1.5 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-border"
                          href={office.phoneHref}
                        >
                          Anrufen
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="bg-brand-offwhite px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="anfrageformular"
          >
            <div className="mx-auto max-w-5xl">
              <SectionHeading
                description="Wählen Sie Ihren bevorzugten Kommunikationsweg. Beim Absenden wird eine E-Mail in Ihrem E-Mail-Programm vorbereitet; bitte übermitteln Sie keine vertraulichen Unterlagen unaufgefordert per E-Mail."
                eyebrow="Vertrauliche Mandatsaufnahme"
                title="Ihre Nachricht oder Rückrufbitte"
              />
              <ContactInquiry />
              <div className="mt-8 grid gap-4 text-center sm:grid-cols-3 sm:text-left">
                {[
                  {
                    icon: "shield",
                    title: "Diskreter Erstkontakt",
                    description: "Sprechen Sie Ihr Anliegen zunächst persönlich mit uns ab.",
                  },
                  {
                    icon: "workspace_premium",
                    title: "Direkter Partnerdialog",
                    description: "Ihre Ansprechpartner sind die geschäftsführenden Partner.",
                  },
                  {
                    icon: "location_on",
                    title: "Hamburg & Bremen",
                    description: "Zwei Standorte für Ihre Kontaktaufnahme.",
                  },
                ].map((item) => (
                  <div
                    className="flex items-center gap-3 border border-white/15 bg-white p-3"
                    key={item.title}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-navy/5">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg text-brand-gold">{item.icon}</span>
                    </span>
                    <span className="text-left text-xs leading-relaxed text-brand-muted">
                      <strong className="block font-semibold text-brand-navy">{item.title}</strong>
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-brand-border bg-brand-offwhite px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <SectionHeading
                eyebrow="Häufige Fragen"
                title="Ablauf & Vertraulichkeit"
              />
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details
                    className="group rounded-sm border border-brand-border bg-white p-5 open:bg-white"
                    key={faq.question}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base font-semibold text-brand-navy sm:text-lg">
                      <span>{faq.question}</span>
                      <span aria-hidden="true" className="material-symbols-outlined shrink-0 text-brand-gold transition-transform group-open:rotate-180">
                        expand_more
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-brand-border pt-4 text-sm leading-relaxed text-brand-muted">
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
