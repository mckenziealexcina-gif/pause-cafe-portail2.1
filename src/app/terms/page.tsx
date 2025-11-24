import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-coffee-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-coffee-gray/10 bg-coffee-dark/95 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-2xl font-bold text-white hover:text-coffee-orange transition-colors">
            PAUSE CAFÉ <span className="text-coffee-orange">SOLEIL</span>
          </Link>
          <Link
            href="/"
            className="text-coffee-gray hover:text-white transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="mb-8 font-display text-5xl font-bold text-white">
          Conditions d'Utilisation
        </h1>

        <div className="space-y-8 text-coffee-gray">
          <p className="text-sm text-coffee-gray/60">
            Dernière mise à jour: {new Date().toLocaleDateString('fr-CA')}
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant le site web de Pause Café Soleil Inc. ("le Site"), vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce Site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">2. Services offerts</h2>
            <p className="mb-4">
              Pause Café Soleil offre des services de vente, location et entretien de machines à café commerciales dans la région de Québec. Ce Site fournit des informations sur nos services et permet aux visiteurs de nous contacter.
            </p>
          </section>

          <section className="rounded-lg bg-amber-900/20 border-2 border-coffee-orange/30 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-coffee-orange">⚠️ 3. Assistant virtuel (Intelligence artificielle)</h2>
            <p className="mb-4">
              Ce Site utilise un assistant virtuel alimenté par l'intelligence artificielle pour répondre aux questions générales.
            </p>
            <div className="space-y-3">
              <p><strong className="text-white">IMPORTANT - AVIS DE NON-RESPONSABILITÉ:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>L'assistant IA fournit des informations générales uniquement et ne remplace pas les conseils professionnels de notre équipe</li>
                <li>Les conseils d'entretien sont généraux et peuvent ne pas s'appliquer à votre situation spécifique</li>
                <li>Pause Café Soleil n'est pas responsable des dommages résultant de l'utilisation de conseils fournis par l'assistant IA</li>
                <li>Pour des problèmes complexes ou urgents, contactez toujours notre équipe directement au (418) 661-9465</li>
                <li>L'assistant IA peut parfois fournir des informations inexactes - vérifiez toujours avec notre équipe</li>
                <li>Ne partagez jamais d'informations confidentielles ou sensibles avec l'assistant IA</li>
              </ul>
            </div>
          </section>

          <section className="rounded-lg bg-red-900/20 border-2 border-red-500/30 p-6">
            <h2 className="mb-4 text-2xl font-semibold text-red-400">⚠️ 4. Limitation de responsabilité - Conseils techniques</h2>
            <p className="mb-4">
              <strong className="text-white">LES CONSEILS D'ENTRETIEN ET DE DÉPANNAGE FOURNIS SUR CE SITE SONT À TITRE INFORMATIF SEULEMENT.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pause Café Soleil ne garantit pas que les conseils fonctionneront dans votre situation spécifique</li>
              <li>Vous utilisez ces conseils à vos propres risques</li>
              <li>Nous ne sommes pas responsables des dommages à l'équipement résultant de l'utilisation de nos conseils</li>
              <li>Pour l'entretien et les réparations, contactez toujours un professionnel qualifié</li>
              <li>En cas de doute, arrêtez et appelez-nous au (418) 661-9465</li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>DANS LA MESURE MAXIMALE PERMISE PAR LA LOI, PAUSE CAFÉ SOLEIL DÉCLINE TOUTE RESPONSABILITÉ POUR LES DOMMAGES DIRECTS, INDIRECTS, ACCESSOIRES OU CONSÉCUTIFS RÉSULTANT DE L'UTILISATION DE CE SITE OU DE SES CONSEILS.</strong>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">5. Informations sur les prix</h2>
            <p>
              Les prix et disponibilités des produits et services ne sont pas affichés sur ce Site. Pour obtenir un devis personnalisé, veuillez nous contacter directement. Tous les prix sont sujets à changement sans préavis.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">6. Propriété intellectuelle</h2>
            <p>
              Tout le contenu de ce Site, incluant mais sans s'y limiter, le texte, les images, le logo et le design, est la propriété de Pause Café Soleil Inc. et est protégé par les lois canadiennes sur le droit d'auteur. Toute reproduction non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">7. Liens externes</h2>
            <p>
              Ce Site peut contenir des liens vers des sites externes. Pause Café Soleil n'est pas responsable du contenu ou des pratiques de confidentialité de ces sites tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">8. Disponibilité du Site</h2>
            <p>
              Nous nous efforçons de maintenir le Site disponible en tout temps, mais nous ne garantissons pas qu'il sera accessible sans interruption ou exempt d'erreurs. Nous nous réservons le droit de suspendre ou de modifier le Site à tout moment sans préavis.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">9. Modifications des conditions</h2>
            <p>
              Nous pouvons modifier ces conditions d'utilisation à tout moment. Les modifications entrent en vigueur dès leur publication sur cette page. Votre utilisation continue du Site après la publication de modifications constitue votre acceptation de ces modifications.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">10. Loi applicable</h2>
            <p>
              Ces conditions d'utilisation sont régies par les lois de la province de Québec et les lois fédérales du Canada applicables. Tout litige sera soumis à la juridiction exclusive des tribunaux de la province de Québec.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">11. Nous contacter</h2>
            <p className="mb-4">
              Pour toute question concernant ces conditions d'utilisation:
            </p>
            <div className="rounded-lg bg-coffee-dark p-6">
              <p className="mb-2"><strong className="text-white">Pause Café Soleil Inc.</strong></p>
              <p>Région de Québec, Québec, Canada</p>
              <p>Téléphone: <a href="tel:+14186619465" className="text-coffee-orange hover:underline">(418) 661-9465</a></p>
              <p>Courriel: <a href="mailto:info@pausecafesoleil.com" className="text-coffee-orange hover:underline">info@pausecafesoleil.com</a></p>
            </div>
          </section>

          <div className="mt-12 border-t border-coffee-gray/20 pt-8">
            <p className="text-sm text-coffee-gray/60">
              En utilisant ce Site, vous reconnaissez avoir lu, compris et accepté ces conditions d'utilisation.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-coffee-gray/10 bg-coffee-dark py-8">
        <div className="container mx-auto px-6 text-center text-sm text-coffee-gray">
          <p>© {new Date().getFullYear()} Pause Café Soleil Inc. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
