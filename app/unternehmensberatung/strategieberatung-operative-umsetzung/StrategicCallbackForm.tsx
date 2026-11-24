"use client";

import type { FormEvent } from "react";
import { buildMailtoDraft } from "@/lib/contact";

const fieldClassName =
  "h-11 w-full rounded border border-brand-border bg-white px-3 text-sm text-brand-slate placeholder:text-slate-400 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy";

function prepareCallbackEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  window.location.href = buildMailtoDraft(
    new FormData(event.currentTarget),
    "Bitte um vertraulichen Rückruf zur Strategieberatung",
  );
}

export default function StrategicCallbackForm() {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-[#f2f4f6] p-5 sm:p-6">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
        Vertrauliches Erstgespräch anfordern
      </span>
      <p className="text-sm leading-relaxed text-brand-muted">
        Wir rufen Sie diskret zum vereinbarten Wunschzeitpunkt zurück.
      </p>
      <form
        className="mt-1 flex flex-col gap-3"
        data-mailto-form
        onSubmit={prepareCallbackEmail}
      >
        <div>
          <label
            className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-brand-muted"
            htmlFor="strategy-callback-name"
          >
            Name / Position
          </label>
          <input
            className={fieldClassName}
            id="strategy-callback-name"
            name="Name / Position"
            placeholder="z. B. Dr. Thomas Meyer, Vorstand"
            required
            type="text"
          />
        </div>
        <div>
          <label
            className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-brand-muted"
            htmlFor="strategy-callback-contact"
          >
            Telefonnummer oder E-Mail
          </label>
          <input
            className={fieldClassName}
            id="strategy-callback-contact"
            name="Telefonnummer oder E-Mail"
            placeholder="040 - 1234567 oder name@unternehmen.de"
            required
            type="text"
          />
        </div>
        <div>
          <label
            className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-brand-muted"
            htmlFor="strategy-callback-focus"
          >
            Gewünschter Schwerpunkt
          </label>
          <select
            className={fieldClassName}
            defaultValue="Strategische Neuausrichtung & Konzepte"
            id="strategy-callback-focus"
            name="Gewünschter Schwerpunkt"
          >
            <option>Strategische Neuausrichtung &amp; Konzepte</option>
            <option>Operative Umsetzung &amp; Prozessoptimierung</option>
            <option>Interim Management</option>
            <option>Ganzheitliches Beratungsmandat</option>
          </select>
        </div>
        <div className="flex items-start gap-2 pt-1">
          <input
            className="mt-1 rounded border-slate-300 text-brand-navy focus:ring-brand-navy"
            id="strategy-callback-privacy"
            name="Einwilligung Datenschutz"
            required
            type="checkbox"
            value="Ja"
          />
          <label
            className="text-xs leading-relaxed text-brand-muted"
            htmlFor="strategy-callback-privacy"
          >
            Ich akzeptiere die{" "}
            <a
              className="font-medium text-brand-navy underline hover:text-brand-gold"
              href="https://www.schultz-partners.de/kontakt/datenschutz/"
              rel="noreferrer"
              target="_blank"
            >
              Datenschutzerklärung
            </a>
            .
          </label>
        </div>
        <button
          className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded bg-brand-navy text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-brand-slate"
          type="submit"
        >
          <span>Rückruf per E-Mail anfragen</span>
          <span aria-hidden="true" className="material-symbols-outlined text-lg">
            send
          </span>
        </button>
        <p className="text-center text-xs text-brand-muted">
          Ihr E-Mail-Programm wird zum Versand geöffnet.
        </p>
      </form>
    </div>
  );
}
