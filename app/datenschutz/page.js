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

          <div className="space-y-6 text-sm text-ajents-gray leading-relaxed">
            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                1. Verantwortlicher
              </h2>
              <p>
                ajents<br />
                Jannis Schröder, Jonas Rennkamp<br />
                E-Mail:{" "}
                <a href="mailto:team@ajents.de" className="text-ajents-blue hover:underline">
                  team@ajents.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                2. Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p>
                Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung
                unseres Angebots und zur Beantwortung von Anfragen erforderlich ist.
                Beim Besuch dieser Website werden durch den Hosting-Anbieter technisch
                notwendige Zugriffsdaten (Server-Logs) gespeichert. Diese enthalten
                u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs sowie die aufgerufene
                Seite. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einer sicheren und stabilen Website).
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                3. Kontaktformular
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular oder per E-Mail eine Nachricht
                schicken, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse,
                Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Die
                Daten werden nicht an Dritte weitergegeben. Rechtsgrundlage ist
                Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse).
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                4. Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten
                Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16 DSGVO), auf Löschung
                (Art. 17 DSGVO) sowie auf Einschränkung der Verarbeitung (Art. 18 DSGVO).
                Zudem steht Ihnen ein Widerspruchsrecht gemäß Art. 21 DSGVO zu.
                Bei Beschwerden können Sie sich an die zuständige Datenschutzaufsichtsbehörde
                wenden.
              </p>
              <p className="mt-3">
                Für Anfragen zu Ihren Datenschutzrechten wenden Sie sich bitte an:{" "}
                <a href="mailto:team@ajents.de" className="text-ajents-blue hover:underline">
                  team@ajents.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                5. Cookies
              </h2>
              <p>
                Diese Website verwendet keine Tracking-Cookies oder Cookies von
                Drittanbietern. Technisch notwendige Cookies können durch den
                Hosting-Anbieter gesetzt werden.
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                6. Aktualität dieser Erklärung
              </h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
                Mit Weiterentwicklung der Website kann eine Anpassung notwendig werden.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
