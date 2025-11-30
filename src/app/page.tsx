"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import NewsletterPopup from "@/components/NewsletterPopup";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen w-full bg-coffee-bg">
      <NewsletterPopup />

      {/* Hero Section */}
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a1f1a] via-[#1f1813] to-[#1a1410]" />
        <div className="absolute inset-0 animate-glow-pulse bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-orange/60 via-coffee-orange/30 to-transparent" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[20%] top-[25%] h-32 w-32 animate-float-slow rounded-full bg-coffee-orange opacity-80" style={{filter: 'blur(40px)'}} />
          <div className="absolute right-[20%] top-[35%] h-40 w-40 animate-float-medium rounded-full bg-amber-500 opacity-70" style={{animationDelay: '1s', filter: 'blur(50px)'}} />
          <div className="absolute left-[35%] top-[55%] h-24 w-24 animate-float-fast rounded-full bg-orange-400 opacity-60" style={{animationDelay: '2s', filter: 'blur(35px)'}} />
          <div className="absolute right-[30%] bottom-[30%] h-36 w-36 animate-float-slow rounded-full bg-coffee-orange opacity-75" style={{animationDelay: '3s', filter: 'blur(45px)'}} />
          <div className="absolute left-[65%] top-[65%] h-28 w-28 animate-float-medium rounded-full bg-amber-400 opacity-65" style={{animationDelay: '1.5s', filter: 'blur(38px)'}} />

          <div className="absolute left-[15%] top-[40%] h-6 w-6 animate-float-fast rounded-full bg-coffee-orange shadow-[0_0_20px_rgba(243,164,36,0.8)]" style={{animationDelay: '0.5s'}} />
          <div className="absolute right-[15%] top-[60%] h-8 w-8 animate-float-slow rounded-full bg-amber-400 shadow-[0_0_25px_rgba(251,191,36,0.8)]" style={{animationDelay: '2.5s'}} />
          <div className="absolute left-[45%] bottom-[20%] h-7 w-7 animate-float-medium rounded-full bg-orange-500 shadow-[0_0_22px_rgba(249,115,22,0.8)]" style={{animationDelay: '1.8s'}} />
          <div className="absolute right-[45%] top-[20%] h-5 w-5 animate-float-fast rounded-full bg-coffee-orange shadow-[0_0_18px_rgba(243,164,36,0.8)]" style={{animationDelay: '0.8s'}} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          {/* Logo */}
          <div className="mb-12 space-y-4 md:mb-16">
            <h1 className="font-display text-6xl font-bold tracking-wider text-white md:text-8xl lg:text-9xl">
              PAUSE CAFÉ
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-coffee-orange md:w-16" />
              <h2 className="font-display text-3xl font-light tracking-[0.3em] text-coffee-orange md:text-5xl">
                SOLEIL
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-coffee-orange md:w-16" />
            </div>
          </div>

          {/* Tagline */}
          <p className="mb-10 max-w-2xl text-lg font-light text-coffee-gray/90 md:mb-14 md:text-xl">
            Des gens accessibles, un service d'exception
          </p>

          {/* CTA Buttons - IMPROVED! */}
          <div className="flex w-full max-w-md flex-col gap-4 sm:max-w-none sm:flex-row sm:gap-6">
            {/* Support Button - SUPER VISIBLE */}
            <Link
              href="/support"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-coffee-orange via-amber-500 to-coffee-orange bg-[length:200%_100%] px-8 py-5 text-center text-lg font-bold text-white shadow-[0_0_40px_rgba(243,164,36,0.6)] transition-all duration-500 hover:scale-105 hover:bg-[position:100%_0] hover:shadow-[0_0_60px_rgba(243,164,36,0.8)] active:scale-95 sm:px-12 md:text-xl animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Support & Entretien
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>

            {/* Chat Button */}
            <Link
              href="/chat"
              className="group relative overflow-hidden rounded-lg border-2 border-coffee-orange/50 bg-coffee-bg/50 px-8 py-5 text-center text-lg font-semibold text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-coffee-orange hover:bg-coffee-orange/20 hover:shadow-[0_0_30px_rgba(243,164,36,0.4)] active:scale-95 sm:px-12 md:text-xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Assistant Intelligent
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-coffee-orange/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* MEGA VISIBLE Scroll Indicator */}
          <div className="absolute bottom-8 flex flex-col items-center gap-3 animate-bounce-slow">
            <span className="text-sm font-semibold tracking-[0.2em] text-coffee-orange/90">DÉCOUVRIR</span>
            <div className="relative flex flex-col items-center gap-2">
              <svg className="h-8 w-8 text-coffee-orange animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-coffee-orange to-transparent animate-scroll-down-smooth" />
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative h-24 w-full bg-gradient-to-b from-coffee-bg to-coffee-dark">
        <div className="absolute inset-0 flex items-center justify-center gap-8 opacity-20">
          <svg className="h-6 w-6 text-coffee-orange" fill="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="11" transform="rotate(-20 12 12)"/>
          </svg>
          <svg className="h-6 w-6 text-coffee-orange" fill="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="11" transform="rotate(-20 12 12)"/>
          </svg>
          <svg className="h-6 w-6 text-coffee-orange" fill="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="8" ry="11" transform="rotate(-20 12 12)"/>
          </svg>
        </div>
      </div>

      {/* Mission Section - WITH SCROLL ANIMATION */}
      <section ref={addToRefs} className="scroll-section relative w-full bg-coffee-dark py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-block rounded-full bg-coffee-orange/10 p-4">
              <svg className="h-12 w-12 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            <h3 className="mb-8 font-display text-4xl font-bold text-white md:text-5xl">
              Notre Mission
            </h3>
            <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-transparent via-coffee-orange to-transparent" />

            <div className="space-y-6 text-lg leading-relaxed text-coffee-gray">
              <p>
                Pause-Café Soleil Inc. se veut d'abord et avant tout une compagnie de services qui ne compte pas les efforts pour satisfaire sa clientèle. Nous offrons un service de dépannage très rapide à nos clients qui est sans égale dans le domaine. Nous sommes des gens accessibles, vous ne ferez pas affaire avec une boîte vocale.
              </p>
              <p>
                Une réputation de bouche à oreille a aidé à un développement constant et a conduit notre compagnie à de nouvelles perspectives d'affaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - WITH SCROLL ANIMATION */}
      <section ref={addToRefs} className="scroll-section relative w-full bg-coffee-dark py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h3 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
              Notre Expertise
            </h3>
            <div className="mx-auto h-1 w-24 bg-coffee-orange" />
          </div>

          <div className="group relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-lg border-2 border-coffee-orange/20 bg-coffee-accent shadow-2xl transition-all duration-500 hover:border-coffee-orange/50 hover:shadow-[0_0_40px_rgba(243,164,36,0.3)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/videos/veo3.1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Philosophy Section - WITH SCROLL ANIMATION */}
      <section ref={addToRefs} className="scroll-section relative w-full overflow-hidden bg-coffee-bg py-20">
        <div className="pointer-events-none absolute left-10 top-20 h-32 w-32 rounded-full bg-coffee-orange/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 right-10 h-40 w-40 rounded-full bg-coffee-orange/5 blur-3xl" />

        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2">
              <svg className="h-8 w-8 animate-pulse text-coffee-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C9.243 2 7 4.243 7 7v1H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-2 5c0-1.103.897-2 2-2s2 .897 2 2v1h-4V7z"/>
              </svg>
            </div>

            <h3 className="mb-6 font-display text-5xl font-bold leading-tight md:text-6xl">
              <span className="bg-gradient-to-r from-coffee-orange via-amber-500 to-coffee-orange bg-clip-text text-transparent">
                Au-delà du café.
              </span>
              <br />
              <span className="text-white">L'art du service.</span>
            </h3>

            <div className="mt-12 space-y-6 text-lg leading-relaxed text-coffee-gray">
              <p className="text-xl">
                Chez Pause Café Soleil, nous croyons qu'un café exceptionnel ne vaut rien sans un service légendaire. C'est pourquoi nous nous levons chaque matin avec une mission : repousser les standards de l'industrie.
              </p>

              <div className="relative inline-block">
                <p className="text-lg font-semibold text-white">
                  Nous ne faisons pas que livrer. Nous prenons soin de vous, avec une rigueur et une passion qui font de nous la référence incontestée.
                </p>
                <div className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-transparent via-coffee-orange/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - WITH SCROLL ANIMATION */}
      <section ref={addToRefs} className="scroll-section relative w-full bg-coffee-dark py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h3 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
              Nos Services
            </h3>
            <div className="mx-auto h-1 w-24 bg-coffee-orange" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-coffee-gray">
              Des solutions complètes pour tous vos besoins en café d'entreprise
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Cards */}
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Vente & Location de Machines",
                description: "Équipements professionnels Keurig, Lavazza et plus. Vente, location et service d'installation complet."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                ),
                title: "Produits Premium",
                description: "Café Bodecker écologique, Lavazza, thés et chocolats chauds. Distribution et livraison régulière."
              },
              {
                icon: (
                  <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>
                ),
                title: "Entretien & Maintenance",
                description: "Service d'entretien rapide et sans égal. Réparations, nettoyage et support technique disponible."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Service Express",
                description: "Intervention rapide en cas de besoin. Nous sommes des gens accessibles, pas une boîte vocale."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Dégustations Gratuites",
                description: "Service de dégustation gratuite pour découvrir nos profils de café et trouver celui qui convient à votre équipe."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                ),
                title: "Formation & Support",
                description: "Formation complète pour votre équipe et support continu pour optimiser votre expérience café."
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-coffee-accent p-8 transition-all duration-300 hover:bg-coffee-accent/80 hover:shadow-[0_8px_30px_rgba(243,164,36,0.2)]">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-coffee-orange/10 transition-all group-hover:bg-coffee-orange/20">
                  <svg className="h-8 w-8 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-semibold text-white">{service.title}</h4>
                <p className="text-coffee-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - WITH SCROLL ANIMATION */}
      <section ref={addToRefs} className="scroll-section relative w-full bg-coffee-bg py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
                Contactez-Nous
              </h3>
              <div className="mx-auto h-1 w-24 bg-coffee-orange" />
              <p className="mx-auto mt-6 max-w-2xl text-lg text-coffee-gray">
                Prêt à améliorer l'expérience café de votre entreprise? Parlons-en!
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h4 className="mb-6 text-2xl font-semibold text-white">Informations de Contact</h4>

                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coffee-orange/10">
                      <svg className="h-6 w-6 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Téléphone</p>
                      <a href="tel:+14186619465" className="text-coffee-gray transition-colors hover:text-coffee-orange">
                        (418) 661-9465
                      </a>
                    </div>
                  </div>

                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coffee-orange/10">
                      <svg className="h-6 w-6 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:info@pausecafesoleil.com" className="text-coffee-gray transition-colors hover:text-coffee-orange">
                        info@pausecafesoleil.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-coffee-orange/10">
                      <svg className="h-6 w-6 text-coffee-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Service</p>
                      <p className="text-coffee-gray">
                        Région de Québec<br />
                        et environs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-coffee-dark p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Notre Engagement</h4>
                  <div className="space-y-2 text-coffee-gray">
                    <p className="flex items-start gap-2">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-coffee-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Service de dépannage rapide
                    </p>
                    <p className="flex items-start gap-2">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-coffee-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Gens accessibles
                    </p>
                    <p className="flex items-start gap-2">
                      <svg className="mt-1 h-5 w-5 flex-shrink-0 text-coffee-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Support personnalisé
                    </p>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-coffee-gray/10 bg-coffee-bg py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-display text-2xl font-bold text-white">
                PAUSE CAFÉ <span className="text-coffee-orange">SOLEIL</span>
              </h3>
              <p className="mb-4 text-coffee-gray">
                Des gens accessibles, un service d'exception.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61584001057981&locale=fr_CA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee-gray transition-colors hover:text-coffee-orange"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/pausecafesoleil?igsh=NnlpazAzNWg1b3o%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee-gray transition-colors hover:text-coffee-orange"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/pausecafesoleil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee-gray transition-colors hover:text-coffee-orange"
                  aria-label="LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Liens Rapides</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-coffee-gray transition-colors hover:text-coffee-orange">Accueil</a></li>
                <li><a href="/chat" className="text-coffee-gray transition-colors hover:text-coffee-orange">Assistant Intelligent</a></li>
                <li><a href="/support" className="text-coffee-gray transition-colors hover:text-coffee-orange">Support & Entretien</a></li>
                <li><a href="#" className="text-coffee-gray transition-colors hover:text-coffee-orange">Nos Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Légal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-coffee-gray transition-colors hover:text-coffee-orange">Politique de Confidentialité</a></li>
                <li><a href="/terms" className="text-coffee-gray transition-colors hover:text-coffee-orange">Conditions d'Utilisation</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-coffee-gray/10 pt-8 text-center">
            <p className="text-coffee-gray">
              © {new Date().getFullYear()} Pause Café Soleil Inc. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
