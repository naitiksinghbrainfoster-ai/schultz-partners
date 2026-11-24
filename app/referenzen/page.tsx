import type { Metadata } from "next";
import PageInteractions from "../page-interactions";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ReferencePortfolio, { type ReferenceGroup } from "./ReferencePortfolio";

export const metadata: Metadata = {
  title: "Referenzen | Schultz & Partner",
  description:
    "Ein Auszug der Klienten und Referenzen von Schultz & Partner aus verschiedenen Branchen und Bereichen.",
};

const referenceGroups: ReferenceGroup[] = [
  {
    id: "konsum",
    title: "Konsumgüter / Luxusgüter",
    icon: "diamond",
    description:
      "Executive Search für Divisionsleitung, E-Commerce-Transformation und strategische Supply-Chain-Restrukturierung globaler Konsumgütermarken.",
    clients: [
      { name: "P&G", src: "https://www.schultz-partners.de/fileadmin/_processed_/d/a/csm_PG_23c529a9b1.jpg" },
      { name: "Tchibo", src: "https://www.schultz-partners.de/fileadmin/_processed_/8/1/csm_tschibo_a29a54e574.png" },
      { name: "Punica", src: "https://www.schultz-partners.de/fileadmin/_processed_/9/1/csm_Punica_03b4373cfc.jpg" },
      { name: "Pepsi", src: "https://www.schultz-partners.de/fileadmin/_processed_/d/4/csm_Pepsi_be9acb3033.jpg" },
      { name: "Louis Vuitton", src: "https://www.schultz-partners.de/fileadmin/_processed_/5/c/csm_Louis_Vuitton_a2dd1b75c8.jpg" },
      { name: "Rufin Cosmetic", src: "https://www.schultz-partners.de/fileadmin/_processed_/d/5/csm_rufin_9257272384.jpg" },
      { name: "Montblanc", src: "https://www.schultz-partners.de/fileadmin/_processed_/0/5/csm_montblanc_26bf33e139.png" },
      { name: "Citizen", src: "https://www.schultz-partners.de/fileadmin/_processed_/2/5/csm_citizen_9c1ffac4da.png" },
      { name: "EDEKA", src: "https://www.schultz-partners.de/fileadmin/_processed_/a/1/csm_edeka-logo_fea91adf0f.jpg" },
      { name: "Forellen Abel", src: "https://www.schultz-partners.de/fileadmin/_processed_/d/5/csm_forellen_abel_2876603cb7.jpg" },
    ],
  },
  {
    id: "sozial",
    title: "Soziale Dienstleistungen, Kommunales & Verbände",
    icon: "account_balance",
    description:
      "Nachhaltige Führungskräfteauswahl, Compliance-Beratung und Organisationsentwicklung im Non-Profit-, Klinik- und Kommunalbereich.",
    clients: [
      { name: "Diakonie", src: "https://www.schultz-partners.de/fileadmin/_processed_/0/9/csm_diakonie-logo_51fab8dd73.jpg" },
      { name: "Deutsches Rotes Kreuz", src: "https://www.schultz-partners.de/fileadmin/_processed_/9/8/csm_drk2_d9b9258dcd.png" },
      { name: "Studentenwerk Rostock", src: "https://www.schultz-partners.de/fileadmin/_processed_/a/a/csm_Studentenwerk_Rostock_db58895cd0.jpg" },
      { name: "Stadt Neukloster", src: "https://www.schultz-partners.de/fileadmin/_processed_/5/e/csm_Stadt_Neukloster_c679292d67.jpg" },
      { name: "Zweckverband Wismar", src: "https://www.schultz-partners.de/fileadmin/_processed_/1/1/csm_Zweckverband_Wismar_10cb5236a0.jpg" },
      { name: "Universität Göttingen", src: "https://www.schultz-partners.de/fileadmin/_processed_/9/e/csm_uni_goettingen_a0554a7af7.jpg" },
      { name: "HNE Eberswalde", src: "https://www.schultz-partners.de/fileadmin/_processed_/b/a/csm_hne_eberswalde_281ab7a2d3.jpg" },
      { name: "Verband Deutscher Reeder", src: "https://www.schultz-partners.de/fileadmin/_processed_/8/0/csm_verband_deutscher_reeder_ffcf1b90de.jpg" },
      { name: "BVL", src: "https://www.schultz-partners.de/fileadmin/_processed_/0/0/csm_bvl_261627b8d4.png" },
      { name: "Zahnärzte EFK", src: "https://www.schultz-partners.de/fileadmin/_processed_/9/d/csm_zahnaerzte-efk_322ef67079.png" },
      { name: "UKSH", src: "https://www.schultz-partners.de/fileadmin/_processed_/0/f/csm_uksh_5d4aa57f73.png" },
      { name: "Studierendenwerk", src: "https://www.schultz-partners.de/fileadmin/_processed_/a/4/csm_studierendenwerk_6ec19eb6f0.png" },
      { name: "Hamburger Friedhöfe", src: "https://www.schultz-partners.de/fileadmin/_processed_/b/1/csm_logo-hamburger-friedhoefe_3be5862228.jpg" },
      { name: "ADAC", src: "https://www.schultz-partners.de/fileadmin/_processed_/e/d/csm_adac_3151171c30.png" },
      { name: "Cuxhaven", src: "https://www.schultz-partners.de/fileadmin/_processed_/7/4/csm_cuxhaven-logo_4849f8cf3c.png" },
    ],
  },
  {
    id: "it",
    title: "Informationstechnologie",
    icon: "hub",
    description:
      "Digitale Transformation und Besetzung zukunftsweisender IT-, Cloud- und Software-Führungspositionen.",
    clients: [
      { name: "Antares", src: "https://www.schultz-partners.de/fileadmin/_processed_/e/1/csm_antares-logo_6ae13c6bd0.jpg" },
      { name: "Naviga", src: "https://www.schultz-partners.de/fileadmin/_processed_/4/d/csm_naviga_b0849e2dc8.jpg" },
      { name: "Provis", src: "https://www.schultz-partners.de/fileadmin/_processed_/f/0/csm_provis_4d8c01bd85.jpg" },
      { name: "IDS", src: "https://www.schultz-partners.de/fileadmin/_processed_/0/4/csm_IDS_065731bfe5.jpg" },
      { name: "Coalition Marketing UK Ltd.", src: "https://www.schultz-partners.de/fileadmin/_processed_/d/2/csm_Coalition_MarketingUK_4d4d622b41.jpg" },
      { name: "JW Childs Associates", src: "https://www.schultz-partners.de/fileadmin/_processed_/b/d/csm_JW_Childs_Associates_561e58e531.jpg" },
      { name: "Telefónica", src: "https://www.schultz-partners.de/fileadmin/_processed_/e/d/csm_Telefonica_Logo_8c34187d02.png" },
    ],
  },
  {
    id: "chemie-bau",
    title: "Chemische Industrie & Bauwesen",
    icon: "precision_manufacturing",
    description:
      "Industrielle Neuausrichtung, Sanierungskonzepte und operative Nachfolgeregelungen im verarbeitenden Gewerbe.",
    clients: [
      { name: "Shell", src: "https://www.schultz-partners.de/fileadmin/_processed_/c/e/csm_shell-logo_f0ad24290b.jpg" },
      { name: "Evonik", src: "https://www.schultz-partners.de/fileadmin/_processed_/1/1/csm_evonik_8eaed12974.png" },
      { name: "Cytec", src: "https://www.schultz-partners.de/fileadmin/_processed_/6/6/csm_cytec_8b521dabc2.png" },
      { name: "Viebrockhaus", src: "https://www.schultz-partners.de/fileadmin/_processed_/4/1/csm_viebrockhaus_38fd843378.png" },
      { name: "iBau", src: "https://www.schultz-partners.de/fileadmin/_processed_/c/d/csm_ibau_dbf5d18957.jpg" },
      { name: "Kaiser & Kühne", src: "https://www.schultz-partners.de/fileadmin/_processed_/c/d/csm_kaiser_d2883d2565.png" },
      { name: "Thies & Co.", src: "https://www.schultz-partners.de/fileadmin/_processed_/5/0/csm_thies_co_3eade49eea.jpg" },
      { name: "Adolf Weber", src: "https://www.schultz-partners.de/fileadmin/_processed_/8/a/csm_adolf_weber_24516c865b.jpg" },
      { name: "Ohly", src: "https://www.schultz-partners.de/fileadmin/_processed_/f/4/csm_ohly-logo_242639c69e.jpg" },
      { name: "Stanze", src: "https://www.schultz-partners.de/fileadmin/_processed_/9/c/csm_stanze_logo_ca7ed4fc4a.png" },
    ],
  },
  {
    id: "services",
    title: "Dienstleistungen",
    icon: "handshake",
    description:
      "Strategische Transaktionsbegleitung, M&A-Advisory und Organisationsentwicklung für professionelle Serviceunternehmen.",
    clients: [
      { name: "Clausen & Reitsma", src: "https://www.schultz-partners.de/fileadmin/_processed_/e/9/csm_Clausen_Reitsma_9186009bca.jpg" },
      { name: "Fair Audit", src: "https://www.schultz-partners.de/fileadmin/_processed_/6/c/csm_Fair_audit_39b28ed9b5.jpg" },
      { name: "Foodservice Rewards", src: "https://www.schultz-partners.de/fileadmin/_processed_/c/6/csm_Foodservice_Rewards_ab6d3e8322.jpg" },
      { name: "CHD", src: "https://www.schultz-partners.de/fileadmin/_processed_/b/d/csm_CHD_8b726ee250.jpg" },
      { name: "BI Worldwide", src: "https://www.schultz-partners.de/fileadmin/_processed_/4/5/csm_bi_7cdfd7fd31.png" },
      { name: "KaCe Consulting", src: "https://www.schultz-partners.de/fileadmin/_processed_/f/3/csm_KaCe_181a1afef2.jpg" },
      { name: "Riedemann, Reichert & Partner", src: "https://www.schultz-partners.de/fileadmin/_processed_/6/0/csm_riedemann_reichert_6f79e1a2ce.jpg" },
    ],
  },
  {
    id: "maritim",
    title: "Schiffsbau und Schifffahrt",
    icon: "directions_boat",
    description:
      "Hanseatische Branchenexpertise vom Hamburger Hafen über Reedereien bis hin zu maritimen Zulieferern und Technologieanbietern.",
    clients: [
      { name: "Glamox", src: "https://www.schultz-partners.de/fileadmin/_processed_/2/7/csm_glamox_93e3aba8ad.png" },
      { name: "GEFO", src: "https://www.schultz-partners.de/fileadmin/_processed_/2/3/csm_Gefo_6613f0168e.jpg" },
      { name: "Linksrechts", src: "https://www.schultz-partners.de/fileadmin/_processed_/0/4/csm_linksrechts_d20f3aa9e6.png" },
      { name: "Maersk Line", src: "https://www.schultz-partners.de/fileadmin/_processed_/7/e/csm_maersk_808673fb8a.png" },
      { name: "Evac", src: "https://www.schultz-partners.de/fileadmin/_processed_/4/7/csm_evac_logo-left_1eafc1d4d6.png" },
    ],
  },
  {
    id: "weitere",
    title: "Weitere Referenzen",
    icon: "stars",
    description:
      "Kulturinstitutionen, Verlagswesen, internationaler Außenhandel und spezialisierte Medizintechnikunternehmen.",
    clients: [
      { name: "Deutsche Grammophon", src: "https://www.schultz-partners.de/fileadmin/_processed_/d/2/csm_deutsche-grammaphon_5eee1e0ee2.png" },
      { name: "Gulzad", src: "https://www.schultz-partners.de/fileadmin/_processed_/4/5/csm_gulzad_33c4eb9734.png" },
      { name: "Fernakademie Touristik", src: "https://www.schultz-partners.de/fileadmin/_processed_/9/5/csm_fernakademie_touristik_c9b4f79db5.jpg" },
      { name: "Lotto Hamburg", src: "https://www.schultz-partners.de/fileadmin/_processed_/f/9/csm_lotto-hh-logo_bcb0b82486.jpg" },
      { name: "C. Woermann", src: "https://www.schultz-partners.de/fileadmin/_processed_/a/1/csm_cwoermann_45adbeffd2.png" },
      { name: "Interlock", src: "https://www.schultz-partners.de/fileadmin/_processed_/e/e/csm_interlock-medizintechnik_2_f01de207a0.png" },
      { name: "Clinipak", src: "https://www.schultz-partners.de/fileadmin/_processed_/b/e/csm_clinipak-logo_c15cba39fe.png" },
      { name: "Horizon", src: "https://www.schultz-partners.de/fileadmin/_processed_/8/a/csm_horizon_logo_6ac2c4636c.png" },
    ],
  },
];

const caseStudies = [
  {
    category: "Restrukturierung IDW S6",
    title:
      "Sanierung & strategische Neuausrichtung eines mittelständischen Zulieferers",
    description:
      "Krisenintervention und Erstellung eines tragfähigen Sanierungskonzepts in enger Abstimmung mit Banken und Gesellschaftern. Optimierung der Working-Capital-Struktur und Reorganisation der Fertigungsprozesse.",
    result: "420",
    resultDescription: "Arbeitsplätze nachhaltig gesichert",
    icon: "trending_up",
  },
  {
    category: "C-Level Executive Search",
    title: "Diskrete CEO-Nachfolge für eine maritime Logistikgruppe",
    description:
      "Hochvertrauliche Direktansprache im europäischen Raum für eine inhabergeführte Traditionsreederei. Systematische Eignungsdiagnostik, Cultural-Fit-Analyse und erfolgreiche Vertragsverhandlung im Aufsichtsratsgremium.",
    result: "6 Wo.",
    resultDescription: "Von Mandatierung bis Vertragsunterschrift",
    icon: "person_check",
  },
  {
    category: "Post Merger Integration",
    title:
      "Post Merger Integration zweier Technologie- und Softwarehäuser",
    description:
      "Begleitung des Zusammenschlusses von 650 Mitarbeitenden nach erfolgreicher Übernahme. Harmonisierung der Führungskultur, Zusammenführung der Vertriebsstrukturen und Realisierung von Skaleneffekten.",
    result: "12 Mio. €",
    resultDescription: "Realisierte Synergieeffekte p.a.",
    icon: "account_balance_wallet",
  },
];

export default function ReferenzenPage() {
  return (
    <PageInteractions>
      <div id="page-content">
        <Header />
        <main className="w-full bg-[#f7f9fb] text-[#191c1e]">
          <section className="relative overflow-hidden bg-[#0e1c2f] pb-14 pt-[176px] text-white shadow-xl lg:pb-20 lg:pt-[200px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(119,90,25,0.2),_#0e1c2f_58%,_#001c38)]" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#775a19]/10 blur-3xl" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
              <div className="mb-4 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-[#ffdea5]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffdea5]">
                  Erfolgserlebnisse &amp; Mandatspraxis
                </span>
              </div>
              <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <h1 className="mb-5 font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-[48px] lg:leading-[58px]">
                    Auszug unserer Klienten
                    <br className="hidden sm:inline" />{" "}
                    <span className="font-light italic text-[#ffdea5]">
                      und Referenzen
                    </span>
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-[#eff1f3]/90 sm:text-lg">
                    Ihr Erfolg ist unser Ziel. Seit über 25 Jahren vertrauen
                    Vorstände, Inhaber und mittelständische Marktführer auf
                    unsere hanseatische Beratungs- und Besetzungskompetenz.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 lg:col-span-4">
                  {[
                    ["verified_user", "100% Diskretion bei Vertraulichkeitsmandaten"],
                    ["domain_verification", "Über 350+ mandatierte Beratungsprojekte"],
                    ["public", "Konzerne, Family Offices & gehobener Mittelstand"],
                  ].map(([icon, text]) => (
                    <div
                      className="inline-flex items-center gap-2.5 rounded-lg bg-white/10 px-4 py-2 shadow-sm backdrop-blur-md"
                      key={text}
                    >
                      <span
                        aria-hidden="true"
                        className="material-symbols-outlined text-lg text-[#ffdea5]"
                      >
                        {icon}
                      </span>
                      <span className="text-sm font-medium text-white">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <ReferencePortfolio groups={referenceGroups} />

          <section className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-12">
            <div className="flex flex-col items-center justify-between gap-6 rounded-xl bg-[#eceef0] p-6 sm:flex-row sm:p-8">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-[#775a19] shadow-sm">
                  <span aria-hidden="true" className="material-symbols-outlined text-[32px]">
                    folder_managed
                  </span>
                </div>
                <div>
                  <h2 className="font-serif text-lg font-semibold text-[#191c1e] sm:text-xl">
                    Dokumentierter Kundenstamm &amp; Mandatsarchiv
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-[#44474c]">
                    Weitere historische Projektberichte und anonymisierte
                    Mandatsstudien besprechen wir gern im persönlichen
                    Erstgespräch.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-[#e0e3e5] px-5 py-2.5 text-sm font-semibold text-[#191c1e] shadow-sm transition-colors hover:bg-[#0e1c2f] hover:text-white"
                href="/kontakt#anfrageformular"
              >
                Branchennachweis anfordern
                <span aria-hidden="true" className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </a>
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
            <div className="mb-12">
              <div className="mb-2 flex items-center gap-2">
                <span aria-hidden="true" className="h-px w-6 bg-[#775a19]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Case Vignettes
                </span>
              </div>
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#191c1e]">
                  Einblicke in exemplarische Mandate
                </h2>
                <p className="max-w-lg text-sm leading-relaxed text-[#44474c]">
                  Aufgrund hanseatischer Diskretionsvereinbarungen werden
                  Projektdetails anonymisiert dargestellt.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {caseStudies.map((study, index) => (
                <article
                  className="group flex flex-col justify-between rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                  key={study.category}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#775a19]">
                        Fallstudie {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded bg-[#eceef0] px-2.5 py-1 text-[10px] font-semibold uppercase text-[#44474c]">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-[#191c1e] transition-colors group-hover:text-[#775a19]">
                      {study.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[#44474c]">
                      {study.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#eceef0] pt-4">
                    <div>
                      <span className="block font-serif text-3xl font-medium leading-tight text-[#0e1c2f]">
                        {study.result}
                      </span>
                      <span className="text-xs text-[#44474c]">
                        {study.resultDescription}
                      </span>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eceef0] text-[#191c1e] transition-colors group-hover:bg-[#0e1c2f] group-hover:text-white">
                      <span aria-hidden="true" className="material-symbols-outlined text-lg">
                        {study.icon}
                      </span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-6 lg:px-12">
            <div className="relative overflow-hidden rounded-2xl bg-[#0e1c2f] p-8 text-white shadow-2xl lg:p-12">
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-[#775a19]/15 blur-2xl" />
              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span aria-hidden="true" className="material-symbols-outlined text-2xl text-[#ffdea5]">
                      lock
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffdea5]">
                      Souveräner Mandantenschutz
                    </span>
                  </div>
                  <h2 className="mb-4 font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                    Vertraulichkeit als oberstes Gebot hanseatischer Beratung
                  </h2>
                  <blockquote className="mb-4 max-w-2xl font-serif text-lg italic leading-relaxed text-[#eff1f3]/90">
                    „Viele unserer anspruchsvollsten Mandate unterliegen
                    strengsten Geheimhaltungsvereinbarungen. Diskretion schützt
                    den Marktwert und den operativen Handlungsspielraum unserer
                    Mandanten.“
                  </blockquote>
                  <span className="text-sm font-semibold tracking-wide text-[#ffdea5]">
                    — Geschäftsführung Schultz &amp; Partner
                  </span>
                </div>
                <div className="flex flex-col gap-4 lg:col-span-4">
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-md">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <span aria-hidden="true" className="material-symbols-outlined text-[28px] text-[#ffdea5]">
                        verified
                      </span>
                    </span>
                    <span>
                      <strong className="block text-sm">BVMW Mitglied</strong>
                      <span className="text-xs text-[#eff1f3]/75">
                        Bundesverband mittelständische Wirtschaft
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-md">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15">
                      <span aria-hidden="true" className="material-symbols-outlined text-[28px] text-[#ffdea5]">
                        workspace_premium
                      </span>
                    </span>
                    <span>
                      <strong className="block text-sm">Persönlicher Partnerdialog</strong>
                      <span className="text-xs text-[#eff1f3]/75">
                        Verbindliche Begleitung auf Geschäftsführungsebene
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12"
            id="kontakt-rueckruf"
          >
            <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:grid-cols-12 lg:p-12">
              <div className="lg:col-span-7">
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#775a19]">
                  Initiative ergreifen
                </span>
                <h2 className="mb-4 font-serif text-3xl font-semibold tracking-tight text-[#191c1e]">
                  Möchten auch Sie Ihr Unternehmen zukunftssicher aufstellen?
                </h2>
                <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#44474c] sm:text-base">
                  Ob diskrete Nachfolgebesetzung auf Geschäftsführungsebene oder
                  tiefgreifende Restrukturierung: Unsere Partner in Hamburg und
                  Bremen stehen Ihnen für ein unverbindliches,
                  vertrauliches Strategiegespräch zur Verfügung.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0e1c2f] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(119,90,25,0.2)] transition-colors hover:bg-[#775a19]"
                    href="/kontakt#anfrageformular"
                  >
                    Vertrauliches Erstgespräch anfragen
                  </a>
                  <a
                    className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#eceef0] px-5 py-3 text-sm font-semibold text-[#191c1e] transition-colors hover:bg-[#e0e3e5]"
                    href="tel:04085372226"
                  >
                    <span aria-hidden="true" className="material-symbols-outlined text-lg text-[#775a19]">
                      call
                    </span>
                    Direkt anrufen: 040 - 85 37 22 26
                  </a>
                </div>
              </div>
              <div className="rounded-xl bg-[#f2f4f6] p-6 shadow-inner lg:col-span-5">
                <h3 className="mb-2 font-serif text-xl font-semibold text-[#191c1e]">
                  Kostenfreier Rückruf-Service
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#44474c]">
                  Hinterlassen Sie Ihre Kontaktdaten für eine diskrete
                  Rückmeldung unserer Senior Partner.
                </p>
                <a
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0e1c2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#775a19]"
                  href="/kontakt#anfrageformular"
                >
                  Rückruf diskret anfragen
                  <span aria-hidden="true" className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageInteractions>
  );
}
