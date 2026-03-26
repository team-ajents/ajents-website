const steps = [
  {
    number: "01",
    title: "Werbekonten verbinden",
    text: "Ihre Kampagnendaten aus Meta, Google und TikTok werden gebündelt betrachtet.",
  },
  {
    number: "02",
    title: "Plattformübergreifend analysieren",
    text: "Die KI wertet Daten über alle Plattformen hinweg aus – ohne dass Sie selbst alles manuell zusammentragen müssen.",
  },
  {
    number: "03",
    title: "Muster und Potenziale erkennen",
    text: "Wo funktioniert etwas besonders gut? Wo gibt es Auffälligkeiten? Das wird sichtbar gemacht.",
  },
  {
    number: "04",
    title: "Fundierter entscheiden",
    text: "Auf Basis der Auswertungen können Sie Budgets, Zielgruppen und Kampagnen gezielter steuern.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white section-padding" id="prozess">
      <div className="container-max">
        <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
          So funktioniert es
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text max-w-xl mb-3">
          In vier Schritten zu mehr Klarheit
        </h2>
        <p className="text-ajents-gray max-w-2xl mb-12 leading-relaxed">
          ajents ist kein kompliziertes Tool – es bringt Struktur in Daten, die
          bereits vorhanden sind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-light text-ajents-blue opacity-40">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-gray-200" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-ajents-text mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ajents-gray leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
