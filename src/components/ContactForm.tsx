"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg bg-coffee-dark p-8">
      <h4 className="mb-6 text-2xl font-semibold text-white">Envoyez-nous un Message</h4>

      {submitStatus === "success" && (
        <div className="mb-6 rounded-lg bg-green-500/10 border border-green-500/50 p-4">
          <p className="text-green-400 flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Message envoyé avec succès! Nous vous répondrons bientôt.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/50 p-4">
          <p className="text-red-400 flex items-center gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
            </svg>
            Erreur lors de l'envoi. Veuillez réessayer.
          </p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-coffee-gray">
            Nom <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-lg border border-coffee-gray/30 bg-coffee-accent px-4 py-3 text-white outline-none transition-all focus:border-coffee-orange focus:ring-2 focus:ring-coffee-orange/20"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-coffee-gray">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-coffee-gray/30 bg-coffee-accent px-4 py-3 text-white outline-none transition-all focus:border-coffee-orange focus:ring-2 focus:ring-coffee-orange/20"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-coffee-gray">Téléphone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-coffee-gray/30 bg-coffee-accent px-4 py-3 text-white outline-none transition-all focus:border-coffee-orange focus:ring-2 focus:ring-coffee-orange/20"
            placeholder="(418) 555-1234"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-coffee-gray">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-coffee-gray/30 bg-coffee-accent px-4 py-3 text-white outline-none transition-all focus:border-coffee-orange focus:ring-2 focus:ring-coffee-orange/20"
            placeholder="Comment pouvons-nous vous aider?"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-gradient-to-r from-coffee-orange to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-[0_8px_30px_rgba(243,164,36,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </span>
          ) : (
            "Envoyer le Message"
          )}
        </button>
      </form>
    </div>
  );
}
