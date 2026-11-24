import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import PageInteractions from "@/app/page-interactions";

export const metadata: Metadata = {
  title: "Blog | Schultz & Partner",
  description:
    "Aktuelle Beiträge zu Personalberatung, Führungsfragen, Karriereentwicklung, Restrukturierung und Unternehmertum.",
};

const posts = [
  {
    title: "Fachkräftemangel & Mittelstand: Ursachen & Strategien",
    date: "26.10.2026",
    category: "Personalberatung",
    image: "/img/Collaborative%20Office%20Document%20Review.png",
  },
  {
    title: "Führungsstile im Überblick: Welcher Führungsstil passt zu Ihrem Unternehmen?",
    date: "19.10.2026",
    category: "Führung",
    image: "/img/Professional%20Portrait%20by%20a%20Bright%20Window.png",
  },
  {
    title: "Was kostet ein Headhunter? Honorarmodelle und Kosten transparent erklärt",
    date: "12.10.2026",
    category: "Executive Search",
    image: "/img/Creative%20Collaboration%20at%20the%20Idea%20Board.png",
  },
  {
    title: "Anforderungsprofil erstellen: So definieren Sie die ideale Besetzung",
    date: "05.10.2026",
    category: "Personalberatung",
    image: "/img/Modern%20Office%20Presentation%20Around%20the%20Table%20(1).png",
  },
  {
    title: "Mitarbeiterbindung: Maßnahmen und Strategien gegen Fluktuation",
    date: "28.09.2026",
    category: "HR-Management",
    image: "/img/Waterfront%20Office%20Meeting%20Dialogue.png",
  },
  {
    title: "Mitarbeitergespräche: Leitfaden für schwierige Fragen und Vorlagen",
    date: "22.09.2026",
    category: "Führung",
    image: "/img/Focused%20Office%20Discussion.png",
  },
  {
    title: "Onboarding-Prozess: Neue Mitarbeiter vom ersten Tag an erfolgreich einarbeiten",
    date: "15.09.2026",
    category: "HR-Management",
    image: "/img/Waterfront%20Office%20Meeting%20Dialogue2.png",
  },
  {
    title: "Interim Management: Wann und warum Unternehmen auf Führungskräfte setzen",
    date: "01.09.2026",
    category: "Unternehmensberatung",
    image: "/img/Executive%20Boardroom%20Discussion.png",
  },
  {
    title: "Change Management: Unternehmen erfolgreich durch den Wandel führen",
    date: "18.09.2026",
    category: "Transformation",
    image: "/img/Warm%20Minimalist%20Consultation%20Around%20Table.png",
  },
  {
    title: "Unternehmensnachfolge im Mittelstand: So gelingt der Generationswechsel",
    date: "04.09.2026",
    category: "Nachfolge",
    image: "/img/Dusk%20Waterfront%20Executive%20Meeting.png",
  },
];

export default function BlogPage() {
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b192c]/95 via-[#0b192c]/80 to-[#0b192c]/40" />
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffdea5]">
                Erkenntnisse &amp; Perspektiven
              </p>
              <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Unser Unternehmens- und Personalberatung Blog
              </h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-base">
                Ihr Erfolg ist unser Ziel!
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">
                    Aktuelle Beiträge
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-brand-navy sm:text-4xl">
                    Blog
                  </h2>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-brand-border sm:block"
                />
              </div>

              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    className="group flex flex-col border-b border-brand-border pb-6"
                    key={post.title}
                  >
                    <div className="relative h-[210px] overflow-hidden bg-brand-offwhite sm:h-[220px]">
                      <Image
                        alt=""
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        src={post.image}
                      />
                      <span className="absolute left-4 top-4 rounded bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#775a19] shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-semibold leading-[1.28] text-brand-navy sm:text-2xl">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-xs font-medium text-brand-muted">
                      {post.date}
                    </p>
                    <div className="mt-5">
                      <a
                        className="inline-flex min-h-10 items-center justify-center border border-brand-border px-4 text-[10px] font-bold uppercase tracking-wider text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                        href="#"
                      >
                        Mehr lesen
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <nav
                aria-label="Blog-Seiten"
                className="mt-12 flex items-center justify-center gap-2 text-sm"
              >
                <a
                  aria-current="page"
                  className="flex h-9 w-9 items-center justify-center bg-brand-navy text-white"
                  href="/ueber-uns/blog"
                >
                  1
                </a>
                <a
                  className="flex h-9 w-9 items-center justify-center text-brand-navy transition-colors hover:bg-brand-offwhite"
                  href="#"
                >
                  2
                </a>
                <a
                  className="ml-1 text-xs font-semibold text-[#775a19] transition-colors hover:text-brand-navy"
                  href="#"
                >
                  nächste
                </a>
              </nav>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
