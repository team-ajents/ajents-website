"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-ajents-gray flex-1">
          Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und zu verbessern. Mit Klick auf „Akzeptieren" stimmen Sie der Verwendung zu. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-ajents-blue underline hover:no-underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="btn-secondary text-sm px-5 py-2 min-h-[40px]"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="btn-primary text-sm px-5 py-2 min-h-[40px]"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
