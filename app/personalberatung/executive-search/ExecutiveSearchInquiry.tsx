"use client";

import { useState, type FormEvent } from "react";

export default function ExecutiveSearchInquiry() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      className="flex flex-col gap-4 rounded bg-[#f2f4f6] p-5 lg:p-6"
      onSubmit={submit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-brand-navy" htmlFor="executive-name">
          Name / Ansprechpartner *
          <input
            className="mt-2 h-11 w-full rounded border-0 bg-white px-3 text-sm text-brand-slate"
            id="executive-name"
            name="name"
            placeholder="Dr. Max Mustermann"
            required
          />
        </label>
        <label className="text-xs font-semibold text-brand-navy" htmlFor="executive-company">
          Unternehmen *
          <input
            className="mt-2 h-11 w-full rounded border-0 bg-white px-3 text-sm text-brand-slate"
            id="executive-company"
            name="company"
            placeholder="Musterholding AG"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-brand-navy" htmlFor="executive-email">
          E-Mail-Adresse *
          <input
            className="mt-2 h-11 w-full rounded border-0 bg-white px-3 text-sm text-brand-slate"
            id="executive-email"
            name="email"
            placeholder="mustermann@unternehmen.de"
            required
            type="email"
          />
        </label>
        <label className="text-xs font-semibold text-brand-navy" htmlFor="executive-phone">
          Telefonnummer
          <input
            className="mt-2 h-11 w-full rounded border-0 bg-white px-3 text-sm text-brand-slate"
            id="executive-phone"
            name="phone"
            placeholder="+49 (0) 40 ..."
            type="tel"
          />
        </label>
      </div>
      <label className="text-xs font-semibold text-brand-navy" htmlFor="executive-position">
        Zu besetzende Position / Thema
        <input
          className="mt-2 h-11 w-full rounded border-0 bg-white px-3 text-sm text-brand-slate"
          id="executive-position"
          name="position"
          placeholder="z. B. Geschäftsführer / CFO / CTO"
        />
      </label>
      <label className="text-xs font-semibold text-brand-navy" htmlFor="executive-message">
        Ihre Nachricht / Rahmenbedingungen
        <textarea
          className="mt-2 w-full resize-none rounded border-0 bg-white p-3 text-sm text-brand-slate"
          id="executive-message"
          name="message"
          placeholder="Kurze Beschreibung des Suchprofils oder bevorzugte Rückrufzeit..."
          rows={3}
        />
      </label>
      <label className="flex items-start gap-3 text-xs leading-relaxed text-brand-muted">
        <input
          className="mt-0.5 rounded border-slate-300 text-brand-navy"
          name="privacy"
          required
          type="checkbox"
        />
        Ich stimme der vertraulichen Verarbeitung meiner Angaben zu.
      </label>
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
        type="submit"
      >
        Erstgespräch vereinbaren
        <span aria-hidden="true" className="material-symbols-outlined text-base">
          send
        </span>
      </button>
      {sent && (
        <p className="rounded bg-[#fed488] px-4 py-3 text-center text-sm text-brand-navy">
          Vielen Dank. Ein Senior Partner wird sich innerhalb von 24 Stunden diskret mit Ihnen in Verbindung setzen.
        </p>
      )}
    </form>
  );
}
