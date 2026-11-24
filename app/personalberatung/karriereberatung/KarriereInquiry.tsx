"use client";

import { useState, type FormEvent } from "react";

export default function KarriereInquiry() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      className="space-y-4 rounded bg-white p-5 text-brand-slate shadow-md md:p-6"
      onSubmit={submit}
    >
      <h3 className="font-serif text-xl font-semibold text-brand-navy">
        Direktanfrage
      </h3>
      <label className="block text-xs font-semibold text-brand-muted" htmlFor="career-name">
        Vor- &amp; Nachname
        <input
          className="mt-2 h-11 w-full rounded border-0 bg-[#f2f4f6] px-3 text-sm text-brand-slate"
          id="career-name"
          name="name"
          placeholder="z. B. Dr. Michael Weber"
          required
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-brand-muted" htmlFor="career-email">
          E-Mail
          <input
            className="mt-2 h-11 w-full rounded border-0 bg-[#f2f4f6] px-3 text-sm text-brand-slate"
            id="career-email"
            name="email"
            placeholder="name@beispiel.de"
            required
            type="email"
          />
        </label>
        <label className="text-xs font-semibold text-brand-muted" htmlFor="career-phone">
          Telefon
          <input
            className="mt-2 h-11 w-full rounded border-0 bg-[#f2f4f6] px-3 text-sm text-brand-slate"
            id="career-phone"
            name="phone"
            placeholder="0170 1234567"
            required
            type="tel"
          />
        </label>
      </div>
      <label className="block text-xs font-semibold text-brand-muted" htmlFor="career-topic">
        Gewünschter Schwerpunkt
        <select
          className="mt-2 h-11 w-full rounded border-0 bg-[#f2f4f6] px-3 text-sm text-brand-slate"
          id="career-topic"
          name="topic"
        >
          <option>Karrierecoaching on the Job</option>
          <option>Berufliche Neuorientierung</option>
          <option>Bewerbungsberatung & Interview Training</option>
          <option>LINC Personality Profiler</option>
          <option>Outplacement-Beratung</option>
        </select>
      </label>
      <button
        className="min-h-12 w-full rounded bg-brand-navy px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-slate"
        type="submit"
      >
        Gespräch anfragen
      </button>
      {sent && (
        <p className="rounded bg-[#ffdea5] px-4 py-3 text-center text-xs text-[#261900]">
          Vielen Dank. Ihre Anfrage wurde diskret übermittelt. Wir melden uns zeitnah.
        </p>
      )}
    </form>
  );
}
