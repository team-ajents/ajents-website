export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold text-ajents-text mb-2">ajents</p>
            <p className="text-xs text-ajents-gray leading-relaxed">
              KI-gestützte Analyse von Werbekampagnen auf Meta, Google und TikTok.
            </p>
            <p className="text-xs text-ajents-gray mt-3">
              <a href="mailto:info@ajents.de" className="hover:text-ajents-text transition-colors">
                info@ajents.de
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-ajents-text uppercase tracking-widest mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { label: "Leistungen", href: "#leistungen" },
                { label: "So funktioniert es", href: "#prozess" },
                { label: "Warum ajents", href: "#warum-ajents" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-ajents-gray hover:text-ajents-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold text-ajents-text uppercase tracking-widest mb-3">
              Rechtliches
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="/impressum"
                  className="text-xs text-ajents-gray hover:text-ajents-text transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href="/datenschutz"
                  className="text-xs text-ajents-gray hover:text-ajents-text transition-colors"
                >
                  Datenschutz
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <p className="text-xs text-ajents-gray">Geschäftsführer:</p>
              <p className="text-xs text-ajents-gray">Jannis Schröder</p>
              <p className="text-xs text-ajents-gray">Jonas Rennkamp</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-ajents-gray">
            © {currentYear} ajents – ajents.de
          </p>
          <p className="text-xs text-ajents-gray">
            Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
