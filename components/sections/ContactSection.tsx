export default function ContactSection() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f8f9fa] border-t border-slate-200/80" id="kontakt">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold tracking-wider text-amber-700 uppercase block mb-2">PERSÖNLICHE PRÄSENZ</span>
          <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 font-normal leading-tight mb-4">In Hamburg &amp; Bremen zu Hause</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-8">Verwurzelt im hanseatischen Wirtschaftsraum, bundesweit vernetzt. Wir empfangen Sie diskret in unseren Kanzleiräumen am Neuen Wall sowie im Technologiepark Bremen.</p>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mb-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">UNSER BÜRO IN HAMBURG</div>
                <div className="font-bold text-slate-900 text-base mb-0.5">Hamburg – Neuer Wall 50</div>
                <div className="text-xs text-slate-500 mb-3">20354 Hamburg • Direkt am Alsterfleet</div>
              </div>
              <span className="material-symbols-outlined text-slate-700 text-lg">apartment</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">call</span>
                <a className="hover:text-slate-900 transition-colors" href="tel:04085372226">040 - 85 37 22 26</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">fax</span>
                <span>040 - 85 37 20 77</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">mail</span>
                <a className="hover:text-slate-900 transition-colors" href="mailto:hamburg@schultz-partners.de">hamburg@schultz-partners.de</a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mb-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] font-bold tracking-wider uppercase text-slate-400 mb-1">UNSER BÜRO IN BREMEN</div>
                <div className="font-bold text-slate-900 text-base mb-0.5">Bremen – Neidenburger Straße 12</div>
                <div className="text-xs text-slate-500 mb-3">28207 Bremen • Technologiepark</div>
              </div>
              <span className="material-symbols-outlined text-slate-700 text-lg">domain</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">call</span>
                <a className="hover:text-slate-900 transition-colors" href="tel:04212443039">0421 - 24 43 039</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">fax</span>
                <span>0421 - 24 43 040</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">mail</span>
                <a className="hover:text-slate-900 transition-colors" href="mailto:bremen@schultz-partners.de">bremen@schultz-partners.de</a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-lg">check_circle</span>
            </div>
            <div>
              <div className="font-semibold text-xs text-slate-900">Akkreditiertes Mitglied im BDU</div>
              <div className="text-[11px] text-slate-500">Bundesverband Deutscher Unternehmensberater e.V.</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-7 md:p-9 shadow-xl border border-slate-100">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/60 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Streng Vertraulich</span>
            </div>
            <h3 className="text-2xl font-serif text-slate-900 mb-1">Unverbindliches Erstgespräch vereinbaren</h3>
            <p className="text-xs text-slate-500 mb-6">Schildern Sie uns kurz Ihr Anliegen. Ein geschäftsführender Partner nimmt innerhalb von 24 Stunden diskret Kontakt mit Ihnen auf.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                <div className="sm:col-span-3">
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">ANREDE</label>
                  <select className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors cursor-pointer">
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Divers">Divers</option>
                  </select>
                </div>
                <div className="sm:col-span-4">
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">VORNAME *</label>
                  <input className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors" placeholder="Maximilian" required type="text" />
                </div>
                <div className="sm:col-span-5">
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">NACHNAME *</label>
                  <input className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors" placeholder="Mustermann" required type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">UNTERNEHMEN / POSITION</label>
                  <input className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors" placeholder="z.B. Geschäftsführung, Beirat" type="text" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">BERATUNGSBEREICH *</label>
                  <select className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors cursor-pointer" defaultValue="" required>
                    <option disabled value="">Bitte auswählen...</option>
                    <option value="unternehmensberatung">Unternehmensberatung</option>
                    <option value="strategie">Strategische Neuausrichtung</option>
                    <option value="restrukturierung">Restrukturierung</option>
                    <option value="pmi">Post Merger Integration</option>
                    <option value="personalberatung">Personalberatung</option>
                    <option value="karriere">Karriereberatung</option>
                    <option value="headhunting">Headhunting</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">E-MAIL ADRESSE *</label>
                  <input className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors" placeholder="name@unternehmen.de" required type="email" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">TELEFON / MOBILNUMMER</label>
                  <input className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors" placeholder="+49 170 1234567" type="tel" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">MANDATSSKIZZE / ANLIEGEN</label>
                <textarea className="w-full bg-[#f8f9fa] border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-slate-800 focus:outline-none transition-colors resize-y" placeholder="Schildern Sie in wenigen Worten Rahmenbedingungen, zeitlichen Horizont und Zielsetzung..." rows={4} defaultValue={""} />
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <input className="mt-0.5 rounded border-slate-300 text-[#0d1b2a] focus:ring-0 cursor-pointer" id="dsgvo_consent" required type="checkbox" />
                <label className="text-[11px] leading-relaxed text-slate-500 cursor-pointer" htmlFor="dsgvo_consent">
                  Ich willige in die vertrauliche Verarbeitung meiner Daten gemäß DSGVO zur Vorbereitung eines Kontaktaufnahme ein. Keine Weitergabe an Dritte.
                </label>
              </div>
              <div className="pt-2">
                <button className="w-full bg-[#0d1b2a] hover:bg-[#1b2d42] text-white py-3.5 px-6 rounded-lg font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer" type="submit">
                  <span className="text-[10px] text-amber-500 group-hover:translate-x-0.5 transition-transform">▶</span>
                  <span>VERTRAULICHES ERSTGESPRÄCH ANFORDERN</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
