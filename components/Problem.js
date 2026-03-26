export default function Problem() {
  const problems = [
    {
      title: "Daten auf mehreren Plattformen",
      text: "Meta, Google und TikTok – jede Plattform hat ihr eigenes Dashboard, ihre eigene Logik, ihre eigenen Kennzahlen.",
    },
    {
      title: "Keine gemeinsame Perspektive",
      text: "Welche Kampagne wirklich performt, lässt sich kaum sagen, wenn man Plattformen isoliert betrachtet.",
    },
    {
      title: "Budgets schwer vergleichbar",
      text: "Wie viel sollte auf welche Plattform fließen? Ohne übergreifenden Blick bleibt das oft Bauchentscheidung.",
    },
    {
      title: "Optimierungspotenzial bleibt ungenutzt",
      text: "Zielgruppen, Formate, Auslieferungszeiten – was tatsächlich funktioniert, wird selten systematisch ausgewertet.",
    },
  ];

  return (
    <section className="bg-ajents-bg section-padding" id="herausforderung">
      <div className="container-max">
        {/* Label */}
        <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
          Die Herausforderung
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text max-w-xl mb-4">
          Werbung wird komplexer. Der Überblick fehlt.
        </h2>

        <p className="text-ajents-gray max-w-2xl mb-12 leading-relaxed">
          Viele Unternehmen schalten Werbung auf mehreren Plattformen gleichzeitig –
          aber die Daten bleiben getrennt. Auswertung kostet Zeit, Vergleiche sind
          mühsam, und fundierte Entscheidungen sind schwer zu treffen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-lg p-6"
            >
              <h3 className="text-sm font-semibold text-ajents-text mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ajents-gray leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
