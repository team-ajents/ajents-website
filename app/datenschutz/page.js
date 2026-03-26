import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutz – ajents",
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-max max-w-2xl">
          <h1 className="text-2xl font-semibold text-ajents-text mb-8">
            Datenschutzerklärung
          </h1>

          {/* HINWEIS: Diese Seite muss mit einer vollständigen, DSGVO-konformen
              Datenschutzerklärung befüllt werden. Empfehlung: Generator nutzen,
              z. B. von der Kanzlei Schwenke (datenschutz-generator.de) oder
              einen Anwalt beauftragen. */}

          <div className="space-y-6 text-sm text-ajents-gray leading-relaxed">
            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                1. Datenschutz auf einen Blick
              </h2>
              <p>
                [Platzhalter – hier eine vollständige DSGVO-konforme
                Datenschutzerklärung einfügen. Dazu gehören Angaben zu
                Verantwortlichem, Datenerhebung, Hosting, Kontaktformular,
                Cookies, Betroffenenrechten und Widerspruchsmöglichkeiten.]
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                2. Verantwortlicher
              </h2>
              <p>
                ajents<br />
                Jannis Schröder, Jonas Rennkamp<br />
                [Adresse ergänzen]<br />
                E-Mail: info@ajents.de
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                3. Ihre Rechte
              </h2>
              <p>
                [Platzhalter – Auskunft, Berichtigung, Löschung, Widerspruch,
                Beschwerde bei Aufsichtsbehörde gemäß DSGVO ergänzen.]
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-ajents-gray italic">
                Hinweis: Dies ist ein Platzhalter. Vor Veröffentlichung der Website
                muss hier eine vollständige, DSGVO-konforme Datenschutzerklärung stehen.
                Empfehlung: einen Anwalt für Datenschutzrecht beauftragen oder einen
                seriösen Generator verwenden.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
