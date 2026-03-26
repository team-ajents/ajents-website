"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: hier kann ein API-Aufruf oder ein Mailto-Link eingebaut werden
    const mailto = `mailto:info@ajents.de?subject=Anfrage von ${encodeURIComponent(formData.name)} – ${encodeURIComponent(formData.company)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nUnternehmen: ${formData.company}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section className="bg-ajents-bg section-padding" id="kontakt">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
              Kontakt
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text mb-5">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-ajents-gray leading-relaxed mb-6">
              Sie möchten wissen, ob ajents für Ihr Unternehmen sinnvoll ist?
              Schreiben Sie uns oder fragen Sie ein unverbindliches Erstgespräch
              an – wir antworten zeitnah.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-ajents-gray">
                <svg className="w-4 h-4 text-ajents-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@ajents.de" className="hover:text-ajents-text transition-colors">
                  info@ajents.de
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-ajents-gray">
                <svg className="w-4 h-4 text-ajents-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>ajents.de</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-10 h-10 rounded-full bg-ajents-blue bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-ajents-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-ajents-text mb-1">Danke für Ihre Anfrage.</p>
                <p className="text-sm text-ajents-gray">Wir melden uns so bald wie möglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-ajents-text mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-base text-ajents-text placeholder-gray-300
                        focus:outline-none focus:border-ajents-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-ajents-text mb-1.5">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ihr Unternehmen"
                      className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-base text-ajents-text placeholder-gray-300
                        focus:outline-none focus:border-ajents-blue transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-ajents-text mb-1.5">
                    E-Mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-base text-ajents-text placeholder-gray-300
                      focus:outline-none focus:border-ajents-blue transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-ajents-text mb-1.5">
                    Nachricht <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Was möchten Sie auswerten oder optimieren? Kurze Beschreibung hilft uns, uns vorzubereiten."
                    className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-base text-ajents-text placeholder-gray-300
                      focus:outline-none focus:border-ajents-blue transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="w-full btn-primary text-center">
                  Anfrage senden
                </button>

                <p className="text-xs text-ajents-gray text-center">
                  Kein Newsletter, keine Weitergabe Ihrer Daten. Wir melden uns
                  direkt bei Ihnen.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
