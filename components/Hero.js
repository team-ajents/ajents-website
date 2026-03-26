export default function Hero() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max text-center">
        {/* Label */}
        <span className="inline-block text-xs font-medium tracking-widest uppercase text-ajents-gray mb-6 border border-gray-200 rounded-full px-4 py-1.5">
          KI-gestützte Werbeanalyse
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ajents-text leading-tight max-w-3xl mx-auto mb-5">
          Werbung auf Meta, Google und TikTok – endlich übersichtlich
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-ajents-gray max-w-2xl mx-auto mb-8 leading-relaxed">
          ajents analysiert Ihre Werbekampagnen plattformübergreifend mit KI –
          damit Sie bessere Entscheidungen treffen, ohne sich durch unübersichtliche
          Dashboards kämpfen zu müssen.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/#kontakt" className="btn-primary">
            Erstgespräch anfragen
          </a>
          <a href="/#leistungen" className="btn-secondary">
            Mehr erfahren
          </a>
        </div>

        {/* Platform Logos Text */}
        <div className="mt-14 pt-10 border-t border-gray-100">
          <p className="text-xs text-ajents-gray uppercase tracking-widest mb-4">
            Unterstützte Plattformen
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {["Meta Ads", "Google Ads", "TikTok Ads"].map((platform) => (
              <span
                key={platform}
                className="text-sm font-medium text-ajents-gray"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
