"use client";

import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Only check if user has subscribed (not if they've seen the popup)
    const hasSubscribed = localStorage.getItem("newsletter-subscribed");

    if (!hasSubscribed) {
      // Show popup after 5 seconds on every visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Don't save to localStorage when closing - popup will show again on next visit
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Merci! Vous êtes maintenant abonné à notre newsletter.");
        localStorage.setItem("newsletter-subscribed", "true");
        setEmail("");

        // Close popup after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Impossible de se connecter. Veuillez réessayer.");
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 transform px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-coffee-dark to-coffee-bg shadow-2xl">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:rotate-90"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="relative p-8">
            {/* Coffee icon */}
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-coffee-orange/20 p-4">
                <svg className="h-12 w-12 text-coffee-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
                </svg>
              </div>
            </div>

            {/* Text */}
            <h2 className="mb-3 text-center font-display text-3xl font-bold text-white">
              Restez Informé
            </h2>
            <p className="mb-6 text-center text-coffee-gray">
              Recevez nos promotions exclusives, nouveautés et conseils café directement dans votre boîte mail.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  disabled={isLoading || status === "success"}
                  className="w-full rounded-lg border border-coffee-gray/30 bg-white/10 px-4 py-3 text-white placeholder-coffee-gray/60 outline-none transition-all focus:border-coffee-orange focus:ring-2 focus:ring-coffee-orange/20 disabled:opacity-50"
                />
              </div>

              {/* CASL Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  disabled={isLoading || status === "success"}
                  className="mt-1 h-4 w-4 rounded border-coffee-gray/30 bg-white/10 text-coffee-orange focus:ring-2 focus:ring-coffee-orange/20 disabled:opacity-50"
                />
                <label htmlFor="newsletter-consent" className="text-xs text-coffee-gray/80 leading-relaxed">
                  J'accepte de recevoir des courriels promotionnels de Pause Café Soleil. Je peux me désabonner à tout moment. Voir notre <a href="/privacy" target="_blank" className="text-coffee-orange hover:underline">politique de confidentialité</a>.
                </label>
              </div>

              {/* Status message */}
              {status !== "idle" && (
                <div
                  className={`rounded-lg px-4 py-2 text-center text-sm ${
                    status === "success"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading || status === "success"}
                className="w-full rounded-lg bg-gradient-to-r from-coffee-orange to-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-[0_8px_30px_rgba(243,164,36,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Inscription...
                  </span>
                ) : status === "success" ? (
                  "✓ Inscrit!"
                ) : (
                  "S'abonner à la Newsletter"
                )}
              </button>
            </form>

            {/* Privacy note */}
            <p className="mt-4 text-center text-xs text-coffee-gray/60">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </div>

          {/* Decorative gradient */}
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-coffee-orange/10 blur-3xl" />
        </div>
      </div>
    </>
  );
}
