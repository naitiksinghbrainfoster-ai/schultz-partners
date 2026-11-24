"use client";

import Image from "next/image";
import { useState } from "react";

export type ReferenceGroup = {
  id: string;
  title: string;
  icon: string;
  description: string;
  clients: { name: string; src: string }[];
};

export default function ReferencePortfolio({
  groups,
}: {
  groups: ReferenceGroup[];
}) {
  const [selectedSector, setSelectedSector] = useState("all");
  const visibleGroups =
    selectedSector === "all"
      ? groups
      : groups.filter((group) => group.id === selectedSector);

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-16 lg:px-12">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#775a19]">
              Portfolio-Übersicht
            </span>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[#191c1e] sm:text-3xl">
              Ausgewählte Mandanten nach Industriezweigen
            </h2>
          </div>
        </div>
        <div
          aria-label="Branchen filtern"
          className="flex flex-wrap items-center gap-2"
          role="group"
        >
          <button
            aria-pressed={selectedSector === "all"}
            className={`max-w-full rounded-full px-4 py-2 text-left text-xs font-semibold transition-colors sm:text-sm ${
              selectedSector === "all"
                ? "bg-[#0e1c2f] text-white shadow-sm"
                : "bg-[#e6e8ea] text-[#44474c] hover:bg-[#dfe2e5] hover:text-[#191c1e]"
            }`}
            onClick={() => setSelectedSector("all")}
            type="button"
          >
            Alle Branchen
          </button>
          {groups.map((group) => (
            <button
              aria-pressed={selectedSector === group.id}
              className={`max-w-full rounded-full px-4 py-2 text-left text-xs font-semibold transition-colors sm:text-sm ${
                selectedSector === group.id
                  ? "bg-[#0e1c2f] text-white shadow-sm"
                  : "bg-[#e6e8ea] text-[#44474c] hover:bg-[#dfe2e5] hover:text-[#191c1e]"
              }`}
              key={group.id}
              onClick={() => setSelectedSector(group.id)}
              type="button"
            >
              {group.title}
            </button>
          ))}
        </div>
      </section>

      <section
        aria-live="polite"
        className="mx-auto w-full max-w-7xl space-y-8 px-6 pb-8 lg:space-y-10 lg:px-12"
        id="reference-sectors-container"
      >
        {visibleGroups.map((group) => (
          <article
            aria-labelledby={`reference-group-${group.id}`}
            className="rounded-xl border border-[#c5c6cd]/50 bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] sm:p-8"
            key={group.id}
          >
            <div className="mb-6 flex flex-col gap-4 border-b border-[#eceef0] pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-xl text-[#775a19]"
                  >
                    {group.icon}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#775a19]">
                    Sektor {String(groups.indexOf(group) + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="font-serif text-xl font-semibold text-[#191c1e] sm:text-2xl"
                  id={`reference-group-${group.id}`}
                >
                  {group.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#44474c] lg:max-w-md">
                {group.description}
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 md:grid-cols-4 lg:grid-cols-5">
              {group.clients.map((client) => (
                <li
                  className="group relative flex min-h-24 items-center justify-center rounded-lg bg-[#f2f4f6] p-3 shadow-sm transition-colors hover:bg-white"
                  key={client.name}
                >
                  <div className="relative h-16 w-full">
                    <Image
                      alt={client.name}
                      className="object-contain"
                      fill
                      sizes="(max-width: 639px) 40vw, (max-width: 1023px) 22vw, 18vw"
                      src={client.src}
                      unoptimized
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
