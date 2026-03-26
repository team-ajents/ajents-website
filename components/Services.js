const services = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Plattformübergreifende Werbeanalyse",
    text: "Meta, Google und TikTok Ads werden gemeinsam ausgewertet – nicht isoliert.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Kampagnenoptimierung",
    text: "Welche Kampagne funktioniert, welche nicht? KI hilft dabei, das systematisch einzuordnen.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Budgetverteilung",
    text: "Hinweise, wie Budget sinnvoller zwischen Plattformen und Kampagnen aufgeteilt werden kann.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Zielgruppenanalyse",
    text: "Verstehen, welche Zielgruppen wie auf Ihre Werbung reagieren – und warum.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Bewertung von Werbeformaten",
    text: "Welches Format – Video, Bild, Karussell – bringt auf welcher Plattform mehr? Auswertung statt Vermutung.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Timing-Analyse",
    text: "Wann spricht Werbung Ihre Zielgruppe am besten an? Ausspielzeiten gezielter bewerten.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Gebotsstrategien",
    text: "Hinweise, wie viel für Keywords und Kampagnen sinnvoll geboten werden kann – auf Basis Ihrer eigenen Daten.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Transparente Entwicklung",
    text: "Kampagnenverläufe nachvollziehbar machen – damit klar wird, was welche Maßnahme bewirkt hat.",
  },
];

export default function Services() {
  return (
    <section className="bg-ajents-bg section-padding" id="leistungen">
      <div className="container-max">
        <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
          Leistungen
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text max-w-xl mb-3">
          Was ajents für Sie analysiert
        </h2>
        <p className="text-ajents-gray max-w-2xl mb-12 leading-relaxed">
          Keine pauschalen Auswertungen – sondern gezielte Analysen, die auf
          Ihren Kampagnendaten basieren.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg border border-gray-100 p-5 flex flex-col gap-3"
            >
              <span className="text-ajents-blue">{service.icon}</span>
              <h3 className="text-sm font-semibold text-ajents-text leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-ajents-gray leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
