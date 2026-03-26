export default function Solution() {
  return (
    <section className="bg-white section-padding" id="loesung">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
              Die Lösung
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text mb-5">
              Eine gemeinsame Sicht auf alle Ihre Werbekampagnen
            </h2>
            <p className="text-ajents-gray leading-relaxed mb-5">
              ajents bündelt die Daten aus Meta, Google und TikTok Ads und
              analysiert sie mit KI. Statt drei getrennte Dashboards zu
              durchsuchen, erhalten Sie eine strukturierte Auswertung – mit
              konkreten Hinweisen, wo Potenzial liegt.
            </p>
            <p className="text-ajents-gray leading-relaxed">
              Die KI hilft dabei, Muster zu erkennen, Plattformen zu
              vergleichen und Entscheidungen besser zu begründen. Keine
              Magie – sondern ein strukturierter Blick auf Ihre Daten.
            </p>
          </div>

          {/* Visual Block */}
          <div className="bg-ajents-gray-light rounded-xl p-8 space-y-4">
            {[
              { label: "Plattformübergreifende Analyse", done: true },
              { label: "Muster und Auffälligkeiten erkennen", done: true },
              { label: "Budgets gezielter verteilen", done: true },
              { label: "Entscheidungen besser nachvollziehen", done: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-ajents-blue flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm text-ajents-text">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
