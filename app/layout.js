import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata = {
  title: "ajents – KI-gestützte Werbeanalyse",
  description:
    "ajents hilft kleinen und mittleren Unternehmen, ihre Werbung auf Meta, Google und TikTok mit KI besser zu analysieren und zu steuern.",
  metadataBase: new URL("https://ajents.de"),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
