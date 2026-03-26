export default function About() {
  return (
    <section className="bg-white section-padding" id="ueber-uns">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-ajents-gray mb-4">
              Über uns
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-ajents-text mb-5">
              Ein junges Unternehmen mit einem konkreten Ziel
            </h2>
            <p className="text-ajents-gray leading-relaxed mb-4">
              ajents wurde gegründet, weil Werbedaten zwar in Hülle und Fülle
              vorhanden sind – aber selten so aufbereitet werden, dass
              Unternehmen wirklich etwas damit anfangen können.
            </p>
            <p className="text-ajents-gray leading-relaxed mb-4">
              Wir sind ein kleines Team, das an der Schnittstelle zwischen KI
              und digitalem Marketing arbeitet. Unser Ansatz ist pragmatisch:
              Daten strukturieren, Zusammenhänge erkennen, Entscheidungen
              erleichtern.
            </p>
            <p className="text-ajents-gray leading-relaxed">
              ajents ist im Aufbau. Wenn Sie Interesse haben, frühzeitig dabei
              zu sein, freuen wir uns auf ein Gespräch.
            </p>
          </div>

          {/* Team */}
          <div className="space-y-4">
            {[
              {
                name: "Jannis Schröder",
                role: "Geschäftsführer",
              },
              {
                name: "Jonas Rennkamp",
                role: "Geschäftsführer",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 bg-ajents-gray-light rounded-lg p-5"
              >
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-ajents-blue bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-ajents-blue text-sm font-medium">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ajents-text">
                    {person.name}
                  </p>
                  <p className="text-xs text-ajents-gray">{person.role}, ajents</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
