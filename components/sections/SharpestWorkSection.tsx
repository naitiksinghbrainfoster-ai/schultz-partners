"use client";

import Image from "next/image";
import { useState } from "react";

const workAreas = [
  {
    title: "Corporate Strategy & Governance",
    description:
      "We help you position, prioritise, and commit to a direction, one that holds up when the pressure comes. Pragmatische Neuausrichtung ohne akademische Umwege.",
    image: "/img/Creative Collaboration at the Idea Board.png",
    imageAlt: "Colleagues working together at an idea board",
  },
  {
    title: "Corporate Finance",
    description:
      "We bring clarity to capital structure, transactions, and valuation, so the numbers behind your next move add up.",
    image: "/img/Collaborative Office Document Review.png",
    imageAlt: "Colleagues reviewing business documents together",
  },
  {
    title: "Governance & Boards",
    description:
      "We sharpen the conversations and structures behind important decisions, making governance a source of strength.",
    image: "/img/Executive Boardroom Discussion.png",
    imageAlt: "Executives discussing a decision around a boardroom table",
  },
  {
    title: "Growth",
    description:
      "We help you spot the next growth curve and commit to it before the current one flattens out.",
    image: "/img/Modern Office Presentation Around the Table (1).png",
    imageAlt: "A team discussing a presentation around a table",
  },
];

export default function SharpestWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = workAreas[activeIndex];
  const nextWork = workAreas[(activeIndex + 1) % workAreas.length];

  function showPreviousWork() {
    setActiveIndex((index) => (index - 1 + workAreas.length) % workAreas.length);
  }

  function showNextWork() {
    setActiveIndex((index) => (index + 1) % workAreas.length);
  }

  return (
    <section className="bg-[#faf9f7] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-28 lg:px-[2.1vw] lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <header className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7434] sm:text-xs">
            Ganzheitliche Begleitung
          </p>
          <h2 className="font-serif text-3xl font-normal leading-tight tracking-[-0.035em] text-[#0b1b2b] sm:text-5xl lg:text-[56px]">
            Where we do our <em className="font-normal">sharpest work.</em>
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-px w-12 bg-[#c6a253]"
          />
          <p className="mx-auto mt-5 max-w-[680px] text-sm leading-6 text-[#5b6671] sm:text-base sm:leading-7">
            Veränderungen verlangen simultane Antworten: strategisch,
            organisatorisch und personell. Wir verknüpfen exekutive Beratung mit
            gezielter Headhunting-Kompetenz.
          </p>
        </header>

        <div className="border border-[#e4e1d8] bg-[#071321] p-6 text-white shadow-[0_18px_40px_rgba(7,19,33,0.12)] sm:p-8 lg:p-12">
          <div className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="flex min-h-[250px] flex-col justify-between gap-8 lg:col-span-5 lg:min-h-[240px]">
              <div aria-live="polite">
                <span className="mb-5 inline-block bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#d3ae61]">
                  Fokus Disziplin
                </span>
                <h3 className="max-w-[440px] font-serif text-[28px] font-normal leading-[1.14] tracking-[-0.02em] sm:text-[32px]">
                  {activeWork.title}
                </h3>
                <p className="mt-4 max-w-[460px] text-sm leading-[1.65] text-[#e2e7ec] sm:text-[15px]">
                  {activeWork.description}
                </p>
                <a
                  className="mt-5 inline-flex min-h-11 items-center justify-center bg-[#c6a253] px-6 text-[10px] font-semibold uppercase tracking-[0.11em] text-[#081321] transition-colors hover:bg-[#d7b86f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b86f]"
                  href="#kontakt"
                >
                  Book a Consultation
                </a>
              </div>

              <div
                aria-label="Work area carousel controls"
                className="flex items-center gap-3"
              >
                <button
                  aria-label="Show previous work area"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[#c6a253] hover:text-[#c6a253] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6a253]"
                  onClick={showPreviousWork}
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="14"
                    viewBox="0 0 24 24"
                    width="14"
                  >
                    <path
                      d="M19 12H5m0 0 6 6m-6-6 6-6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </button>
                <div className="flex items-center gap-1.5">
                  {workAreas.map((workArea, index) => (
                    <button
                      aria-label={`Show ${workArea.title}`}
                      aria-pressed={index === activeIndex}
                      className={`h-[3px] transition-all ${
                        index === activeIndex
                          ? "w-7 bg-[#c6a253]"
                          : "w-4 bg-white/25 hover:bg-white/60"
                      }`}
                      key={workArea.title}
                      onClick={() => setActiveIndex(index)}
                      type="button"
                    />
                  ))}
                </div>
                <button
                  aria-label="Show next work area"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[#c6a253] hover:text-[#c6a253] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c6a253]"
                  onClick={showNextWork}
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="14"
                    viewBox="0 0 24 24"
                    width="14"
                  >
                    <path
                      d="M5 12h14m0 0-6-6m6 6-6 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              aria-label="Images from our work"
              className="grid min-w-0 grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:col-span-7"
              id="work-area-images"
            >
              {[activeWork, nextWork].map((workArea, index) => (
                <div
                  className={`group relative aspect-[1.35] overflow-hidden border border-white/10 ${
                    index === 1 ? "mt-3 sm:mt-5" : ""
                  }`}
                  key={workArea.title}
                >
                  <Image
                    alt={workArea.imageAlt}
                    className="object-cover grayscale contrast-125 brightness-90 transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 1023px) 45vw, 28vw"
                    src={workArea.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
