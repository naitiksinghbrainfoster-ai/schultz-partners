"use client";

import type { FormEvent } from "react";
import { buildMailtoDraft } from "@/lib/contact";

const fieldClassName =
  "h-11 w-full rounded border border-[#c5c6cd]/70 bg-[#f2f4f6] px-3 text-sm text-[#191c1e] placeholder:text-[#75777d] transition-colors focus:border-[#775a19] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#775a19]";

function preparePmiEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  window.location.href = buildMailtoDraft(
    new FormData(event.currentTarget),
    "Vertrauliche Anfrage zur Post Merger Integration",
  );
}

export default function PmiContactForm() {
  return (
    <div className="rounded-xl bg-white p-5 text-[#191c1e] shadow-lg sm:p-7 lg:p-8">
      <h3 className="font-serif text-xl font-semibold sm:text-2xl">
        Vertrauliche Erstanfrage
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[#44474c]">
        Hinterlassen Sie uns Ihre Kontaktdaten. Ein geschäftsführender Partner
        meldet sich diskret und zeitnah bei Ihnen.
      </p>
      <form className="mt-5 space-y-4" data-mailto-form onSubmit={preparePmiEmail}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              className="mb-1 block text-xs font-semibold text-[#191c1e]"
              htmlFor="pmi-contact-name"
            >
              Vollständiger Name *
            </label>
            <input
              className={fieldClassName}
              id="pmi-contact-name"
              name="Vollständiger Name"
              placeholder="z. B. Dr. Michael Weber"
              required
              type="text"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-xs font-semibold text-[#191c1e]"
              htmlFor="pmi-contact-company"
            >
              Unternehmen / Position
            </label>
            <input
              className={fieldClassName}
              id="pmi-contact-company"
              name="Unternehmen / Position"
              placeholder="z. B. Geschäftsführung"
              type="text"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-xs font-semibold text-[#191c1e]"
              htmlFor="pmi-contact-phone"
            >
              Telefonnummer *
            </label>
            <input
              className={fieldClassName}
              id="pmi-contact-phone"
              name="Telefonnummer"
              placeholder="+49 40 ..."
              required
              type="tel"
            />
          </div>
          <div>
            <label
              className="mb-1 block text-xs font-semibold text-[#191c1e]"
              htmlFor="pmi-contact-email"
            >
              E-Mail-Adresse *
            </label>
            <input
              className={fieldClassName}
              id="pmi-contact-email"
              name="E-Mail-Adresse"
              placeholder="name@unternehmen.de"
              required
              type="email"
            />
          </div>
        </div>
        <div>
          <label
            className="mb-1 block text-xs font-semibold text-[#191c1e]"
            htmlFor="pmi-contact-focus"
          >
            Gewünschter Schwerpunkt
          </label>
          <select
            className={fieldClassName}
            defaultValue="Post Merger Integration (PMI)"
            id="pmi-contact-focus"
            name="Gewünschter Schwerpunkt"
          >
            <option>Post Merger Integration (PMI)</option>
            <option>Carve-Out-Beratung</option>
            <option>Cultural Due Diligence</option>
            <option>Ganzheitliche M&amp;A-Begleitung</option>
          </select>
        </div>
        <div>
          <label
            className="mb-1 block text-xs font-semibold text-[#191c1e]"
            htmlFor="pmi-contact-message"
          >
            Ihre Nachricht / Ausgangslage (optional)
          </label>
          <textarea
            className="min-h-24 w-full resize-y rounded border border-[#c5c6cd]/70 bg-[#f2f4f6] p-3 text-sm text-[#191c1e] placeholder:text-[#75777d] transition-colors focus:border-[#775a19] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#775a19]"
            id="pmi-contact-message"
            name="Ihre Nachricht / Ausgangslage"
            placeholder="Kurze Schilderung der Transaktion oder Ihrer aktuellen Fragestellung ..."
            rows={3}
          />
        </div>
        <div className="flex items-start gap-2 pt-1">
          <input
            className="mt-1 rounded border-slate-300 text-[#0e1c2f] focus:ring-[#775a19]"
            id="pmi-contact-privacy"
            name="Einwilligung Datenschutz"
            required
            type="checkbox"
            value="Ja"
          />
          <label
            className="text-xs leading-relaxed text-[#44474c]"
            htmlFor="pmi-contact-privacy"
          >
            Ich willige in die vertrauliche Verarbeitung meiner Daten gemäß
            Datenschutzerklärung zur Vorbereitung einer Kontaktaufnahme ein.
          </label>
        </div>
        <div className="flex flex-col gap-3 border-t border-[#eceef0] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5 text-xs text-[#44474c]">
            <span aria-hidden="true" className="material-symbols-outlined text-base text-[#775a19]">
              verified_user
            </span>
            Höchste Vertraulichkeit garantiert.
          </p>
          <button
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded bg-[#0e1c2f] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#001c38]"
            type="submit"
          >
            <span>Vertrauliches Erstgespräch anfordern</span>
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
        <p className="text-right text-xs text-[#75777d]">
          Ihr E-Mail-Programm wird zum Versand geöffnet.
        </p>
      </form>
    </div>
  );
}
