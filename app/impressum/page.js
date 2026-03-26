import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum – ajents",
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-max max-w-2xl">
          <h1 className="text-2xl font-semibold text-ajents-text mb-8">Impressum</h1>

          <div className="prose prose-sm text-ajents-gray space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                ajents<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">
                Vertreten durch
              </h2>
              <p>Jannis Schröder<br />Jonas Rennkamp</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-ajents-text mb-2">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@ajents.de" className="text-ajents-blue hover:underline">
                  info@ajents.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
