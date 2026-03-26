const reasons = [
  {
    title: "Klare Auswertung statt Datenchaos",
    text: "Anstatt Zahlen aus verschiedenen Quellen mühsam zusammenzuführen, erhalten Sie eine strukturierte Übersicht.",
  },
  {
    title: "Verständlichkeit als Priorität",
    text: "Technische Komplexität bleibt im Hintergrund. Was zählt, sind Erkenntnisse, die Sie tatsächlich nutzen können.",
  },
  {
    title: "Plattformübergreifende Sicht",
    text: "Meta, Google und TikTok werden gemeinsam betrachtet – kein Silodenken mehr.",
  },
  {
    title: "Sinnvoll für wachsende Unternehmen",
    text: "Wer Werbung ernstnimmt, aber kein großes Analytics-Team hat, kann mit ajents dennoch systematisch auswerten.",
  },
  {
    title: "KI als Werkzeug, nicht als Versprechen",
    text: "KI hilft dabei, Muster in Daten zu erkennen – nicht mehr, nicht weniger. Keine überzogenen Versprechen.",
  },
  {
    title: "Entscheidungen besser begründen",
    text: "Kampagnenentscheidungen auf Basis von Auswertungen treffen – nicht aus dem Bauch heraus.",
  },
];

export default function WhyAjents() {
  return (
    <section className="bg-ajents-bg section-padding" id="warum-ajents">
      <div className="container-max">
        <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
          Warum ajents
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text max-w-xl mb-3">
          Weniger Raten, mehr Struktur
        </h2>
        <p className="text-ajents-gray max-w-2xl mb-12 leading-relaxed">
          ajents hilft Ihnen nicht dabei, Werbung zu schalten – sondern dabei,
          bestehende Werbung besser zu verstehen und gezielter zu steuern.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <span className="mt-0.5 flex-shrink-0 w-1 h-full bg-ajents-blue rounded-full opacity-30" />
              <div>
                <h3 className="text-sm font-semibold text-ajents-text mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-ajents-gray leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
