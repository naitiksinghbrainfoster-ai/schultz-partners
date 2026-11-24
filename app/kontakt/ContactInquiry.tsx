"use client";

import { useState, type FormEvent } from "react";
import { buildMailtoDraft } from "@/lib/contact";

const fieldClassName =
  "w-full rounded-sm border border-brand-border bg-brand-cream px-3.5 py-2.5 text-sm text-brand-slate placeholder:text-brand-muted/70 focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy";

function openEmailDraft(event: FormEvent<HTMLFormElement>, subject: string) {
  event.preventDefault();
  window.location.href = buildMailtoDraft(
    new FormData(event.currentTarget),
    subject,
  );
}

function Field({
  id,
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label
        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-slate"
        htmlFor={id}
      >
        {label}
        {required && <span className="ml-1 text-brand-gold">*</span>}
      </label>
      <input
        className={fieldClassName}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}

function PrivacyConsent({ id }: { id: string }) {
  return (
    <div className="flex items-start gap-3">
      <input
        className="mt-1 rounded border-slate-300 text-brand-navy focus:ring-brand-navy"
        id={id}
        name="Einwilligung Datenschutz"
        required
        type="checkbox"
        value="Ja"
      />
      <label className="text-xs leading-relaxed text-brand-muted" htmlFor={id}>
        Ich akzeptiere die{" "}
        <a
          className="font-medium text-brand-navy underline hover:text-brand-gold"
          href="https://www.schultz-partners.de/kontakt/datenschutz/"
          rel="noreferrer"
          target="_blank"
        >
          Datenschutzerklärung
        </a>
        . Sie können diese Einwilligung jederzeit widerrufen.
      </label>
    </div>
  );
}

function MessageForm() {
  return (
    <form
      className="space-y-6"
      data-mailto-form
      onSubmit={(event) => openEmailDraft(event, "Vertrauliche Kontaktanfrage")}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="inquiry-name"
          label="Ihr vollständiger Name"
          name="Name"
          placeholder="z. B. Dr. Thomas Meyer"
          required
        />
        <Field
          id="inquiry-company"
          label="Unternehmen & Position"
          name="Unternehmen & Position"
          placeholder="z. B. Meyer Maschinenbau GmbH / Geschäftsführung"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="inquiry-email"
          label="E-Mail-Adresse"
          name="E-Mail"
          placeholder="ihre.adresse@unternehmen.de"
          required
          type="email"
        />
        <Field
          id="inquiry-phone"
          label="Telefonnummer (optional)"
          name="Telefon"
          placeholder="040 - 1234567"
          type="tel"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-slate"
          htmlFor="inquiry-topic"
        >
          Beratungsfeld / Mandatstyp
        </label>
        <select
          className={fieldClassName}
          defaultValue="Unternehmensberatung"
          id="inquiry-topic"
          name="Beratungsfeld"
        >
          <option>Unternehmensberatung (Strategische Neuausrichtung / M&amp;A)</option>
          <option>Restrukturierung &amp; Turnaround-Management</option>
          <option>Personalberatung (Executive Search &amp; Headhunting)</option>
          <option>Diskrete Karriereberatung für Vorstände &amp; Geschäftsführer</option>
          <option>Sonstiges Anliegen</option>
        </select>
      </div>
      <div>
        <label
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-slate"
          htmlFor="inquiry-message"
        >
          Ihre Nachricht / Sachverhalt
          <span className="ml-1 text-brand-gold">*</span>
        </label>
        <textarea
          className={`${fieldClassName} min-h-36 resize-y`}
          id="inquiry-message"
          name="Nachricht"
          placeholder="Beschreiben Sie kurz Ihr Anliegen."
          required
          rows={5}
        />
      </div>
      <PrivacyConsent id="inquiry-privacy" />
      <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-5 sm:flex-row">
        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm bg-brand-navy px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-slate sm:w-auto"
          type="submit"
        >
          <span>Nachricht per E-Mail vorbereiten</span>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-brand-goldlight">
            send
          </span>
        </button>
        <span className="text-xs text-brand-muted">
          Ihr E-Mail-Programm wird zum Versand geöffnet.
        </span>
      </div>
    </form>
  );
}

function CallbackForm() {
  return (
    <form
      className="space-y-6"
      data-mailto-form
      onSubmit={(event) => openEmailDraft(event, "Bitte um Rückruf")}
    >
      <div className="rounded border border-brand-border bg-brand-cream p-4 text-xs leading-relaxed text-brand-muted">
        Hinterlassen Sie Ihre Kontaktdaten und Ihr gewünschtes Zeitfenster. Wir
        stimmen den Rückruf anschließend persönlich mit Ihnen ab.
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="callback-firstname"
          label="Vorname"
          name="Vorname"
          placeholder="Max"
          required
        />
        <Field
          id="callback-lastname"
          label="Nachname"
          name="Nachname"
          placeholder="Mustermann"
          required
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="callback-phone"
          label="Telefonnummer für Rückruf"
          name="Telefonnummer"
          placeholder="040 - 1234567"
          required
          type="tel"
        />
        <Field
          id="callback-time"
          label="Gewünschter Zeitpunkt"
          name="Gewünschter Zeitpunkt"
          placeholder="z. B. morgen ab 14:00 Uhr"
          required
        />
      </div>
      <Field
        id="callback-context"
        label="Stichwort / Kontext (optional)"
        name="Stichwort"
        placeholder="z. B. Personalberatung oder Restrukturierung"
      />
      <PrivacyConsent id="callback-privacy" />
      <div className="flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-5 sm:flex-row">
        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-sm bg-brand-navy px-8 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-slate sm:w-auto"
          type="submit"
        >
          <span>Rückruf per E-Mail anfragen</span>
          <span aria-hidden="true" className="material-symbols-outlined text-base text-brand-goldlight">
            call
          </span>
        </button>
        <span className="text-xs text-brand-muted">
          Ihr E-Mail-Programm wird zum Versand geöffnet.
        </span>
      </div>
    </form>
  );
}

export default function ContactInquiry() {
  const [activeTab, setActiveTab] = useState<"message" | "callback">("message");

  return (
    <div className="overflow-hidden rounded-md border border-brand-border bg-white shadow-md">
      <div aria-label="Kontaktart auswählen" className="flex border-b border-brand-border bg-brand-cream" role="tablist">
        <button
          aria-controls="contact-message-panel"
          aria-selected={activeTab === "message"}
          className={`flex flex-1 items-center justify-center gap-2.5 border-b-2 px-3 py-4 text-center text-xs font-semibold transition-colors sm:px-6 sm:text-sm ${
            activeTab === "message"
              ? "border-brand-navy bg-white text-brand-navy"
              : "border-transparent text-brand-muted hover:text-brand-navy"
          }`}
          id="contact-message-tab"
          onClick={() => setActiveTab("message")}
          role="tab"
          type="button"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base text-brand-gold">
            mail
          </span>
          Schriftliche Anfrage
        </button>
        <button
          aria-controls="contact-callback-panel"
          aria-selected={activeTab === "callback"}
          className={`flex flex-1 items-center justify-center gap-2.5 border-b-2 px-3 py-4 text-center text-xs font-semibold transition-colors sm:px-6 sm:text-sm ${
            activeTab === "callback"
              ? "border-brand-navy bg-white text-brand-navy"
              : "border-transparent text-brand-muted hover:text-brand-navy"
          }`}
          id="contact-callback-tab"
          onClick={() => setActiveTab("callback")}
          role="tab"
          type="button"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-base text-brand-gold">
            phone_forwarded
          </span>
          Rückruf anfragen
        </button>
      </div>
      <div className="p-5 sm:p-8 lg:p-12">
        <div
          aria-labelledby="contact-message-tab"
          hidden={activeTab !== "message"}
          id="contact-message-panel"
          role="tabpanel"
          tabIndex={0}
        >
          <MessageForm />
        </div>
        <div
          aria-labelledby="contact-callback-tab"
          hidden={activeTab !== "callback"}
          id="contact-callback-panel"
          role="tabpanel"
          tabIndex={0}
        >
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}
