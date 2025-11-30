"use client";

import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="min-h-screen w-full bg-coffee-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-coffee-gray/10 bg-coffee-bg/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-2xl font-bold text-white">
            PAUSE CAFÉ <span className="text-coffee-orange">SOLEIL</span>
          </Link>
          <Link
            href="/"
            className="text-coffee-gray transition-colors hover:text-coffee-orange"
          >
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-coffee-bg via-coffee-dark to-coffee-accent py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
              Support & Entretien
            </h1>
            <div className="mx-auto mb-8 h-1 w-32 bg-coffee-orange" />
            <p className="text-xl leading-relaxed text-coffee-gray">
              Maximisez la performance et la durée de vie de vos équipements grâce à nos guides d'entretien professionnels.
              Nos experts vous accompagnent à chaque étape pour garantir un café de qualité supérieure.
            </p>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="relative w-full bg-coffee-dark py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
              Guides Vidéo d'Entretien
            </h2>
            <div className="mx-auto h-1 w-24 bg-coffee-orange" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-coffee-gray">
              Apprenez les meilleures pratiques d'entretien directement de nos techniciens certifiés
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Video 1 - Daily Maintenance */}
            <div className="group overflow-hidden rounded-lg bg-coffee-accent shadow-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(243,164,36,0.3)]">
              <div className="aspect-video bg-black">
                {/* Rumble Video Player - Embedded */}
                <iframe
                  className="h-full w-full border-0"
                  src="https://rumble.com/embed/v72fi5c/"
                  title="Guide d'Entretien Machine Bistro - Pause Café Soleil"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Guide d'Entretien Bistro
                </h3>
                <p className="mb-4 text-coffee-gray">
                  Tutoriel complet pour l'entretien et la maintenance de vos machines à café commerciales.
                </p>
                <div className="flex items-center gap-2 text-sm text-coffee-orange">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Vidéo disponible</span>
                </div>
              </div>
            </div>

            {/* Video 2 - Weekly Cleaning */}
            <div className="group overflow-hidden rounded-lg bg-coffee-accent shadow-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(243,164,36,0.3)]">
              <div className="aspect-video bg-coffee-accent/50">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto mb-4 h-16 w-16 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-coffee-gray">Vidéo à venir</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Nettoyage Hebdomadaire
                </h3>
                <p className="mb-4 text-coffee-gray">
                  Procédures de nettoyage approfondi pour garantir l'hygiène et la qualité de votre café.
                </p>
                <div className="flex items-center gap-2 text-sm text-coffee-orange">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>8 minutes</span>
                </div>
              </div>
            </div>

            {/* Video 3 - Preventive Maintenance */}
            <div className="group overflow-hidden rounded-lg bg-coffee-accent shadow-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(243,164,36,0.3)]">
              <div className="aspect-video bg-coffee-accent/50">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto mb-4 h-16 w-16 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-coffee-gray">Vidéo à venir</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Maintenance Préventive
                </h3>
                <p className="mb-4 text-coffee-gray">
                  Interventions mensuelles recommandées pour prévenir les pannes et prolonger la durée de vie de vos équipements.
                </p>
                <div className="flex items-center gap-2 text-sm text-coffee-orange">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>12 minutes</span>
                </div>
              </div>
            </div>

            {/* Video 4 - Troubleshooting */}
            <div className="group overflow-hidden rounded-lg bg-coffee-accent shadow-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(243,164,36,0.3)]">
              <div className="aspect-video bg-coffee-accent/50">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto mb-4 h-16 w-16 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-coffee-gray">Vidéo à venir</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  Dépannage Courant
                </h3>
                <p className="mb-4 text-coffee-gray">
                  Solutions aux problèmes les plus fréquents et conseils pour identifier rapidement les dysfonctionnements.
                </p>
                <div className="flex items-center gap-2 text-sm text-coffee-orange">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="relative w-full bg-coffee-bg py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl rounded-lg bg-coffee-dark p-12 text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-coffee-orange/10">
              <svg className="h-10 w-10 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold text-white">
              Besoin d'Assistance Immédiate?
            </h2>
            <p className="mb-8 text-lg text-coffee-gray">
              Notre équipe de techniciens certifiés est disponible pour intervenir rapidement en cas de besoin.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+14186619465"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-coffee-orange to-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-[0_8px_30px_rgba(243,164,36,0.4)]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (418) 661-9465
              </a>
              <Link
                href="/chat"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-coffee-orange bg-transparent px-8 py-4 font-semibold text-coffee-orange transition-all hover:bg-coffee-orange/10"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Chat en Direct
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
