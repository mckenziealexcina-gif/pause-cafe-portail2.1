import Link from "next/link";

export default function PrivacyPage() {
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
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-coffee-gray">
          <p className="text-sm text-coffee-gray/60">
            Dernière mise à jour: {new Date().toLocaleDateString('fr-CA')}
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              Pause Café Soleil Inc. ("nous", "notre", "nos") respecte votre vie privée et s'engage à protéger vos renseignements personnels conformément à la Loi sur la protection des renseignements personnels et les documents électroniques (Lpipeda) et aux lois québécoises applicables.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">2. Renseignements que nous recueillons</h2>
            <p className="mb-4">Nous pouvons recueillir les types de renseignements suivants:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informations de contact:</strong> Nom, adresse courriel, numéro de téléphone, nom d'entreprise</li>
              <li><strong>Informations de communication:</strong> Messages envoyés via notre formulaire de contact</li>
              <li><strong>Abonnement newsletter:</strong> Adresse courriel pour notre infolettre</li>
              <li><strong>Données d'utilisation:</strong> Conversations avec notre assistant virtuel (anonymisées)</li>
              <li><strong>Données techniques:</strong> Adresse IP, type de navigateur, pages visitées (via cookies essentiels)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">3. Comment nous utilisons vos renseignements</h2>
            <p className="mb-4">Nous utilisons vos renseignements personnels pour:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes de renseignements et de service</li>
              <li>Vous envoyer notre infolettre (avec votre consentement explicite)</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales</li>
              <li>Communiquer avec vous concernant nos produits et services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">4. Partage de vos renseignements</h2>
            <p className="mb-4">Nous ne vendons jamais vos renseignements personnels. Nous pouvons partager vos renseignements avec:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fournisseurs de services:</strong> Anthropic (assistant IA), Resend (courriels), Mailchimp (infolettre)</li>
              <li><strong>Autorités légales:</strong> Si requis par la loi ou pour protéger nos droits</li>
            </ul>
            <p className="mt-4">
              Tous nos fournisseurs de services sont tenus de protéger vos renseignements et de les utiliser uniquement aux fins pour lesquelles nous les leur fournissons.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">5. Assistant virtuel (Intelligence artificielle)</h2>
            <p className="mb-4">
              Notre site utilise un assistant virtuel alimenté par l'intelligence artificielle (Anthropic Claude). Les conversations avec l'assistant sont traitées de manière confidentielle et anonyme. Nous ne conservons pas de transcriptions identifiables des conversations.
            </p>
            <p>
              <strong>Important:</strong> Ne partagez jamais d'informations sensibles (mots de passe, numéros de carte de crédit, etc.) avec l'assistant virtuel.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">6. Conservation des données</h2>
            <p>
              Nous conservons vos renseignements personnels aussi longtemps que nécessaire pour les fins pour lesquelles ils ont été recueillis, ou tel que requis par la loi. Les courriels de contact sont conservés pendant 7 ans conformément aux exigences fiscales canadiennes. Les abonnés à l'infolettre sont conservés jusqu'à leur désabonnement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">7. Vos droits (LRIPÉD)</h2>
            <p className="mb-4">Conformément à la LRIPÉD, vous avez le droit de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accéder à vos renseignements personnels</li>
              <li>Rectifier vos renseignements inexacts</li>
              <li>Retirer votre consentement en tout temps</li>
              <li>Vous désabonner de notre infolettre</li>
              <li>Demander la suppression de vos renseignements (sous réserve de nos obligations légales)</li>
              <li>Déposer une plainte auprès de la Commission d'accès à l'information du Québec</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à: <a href="mailto:info@pausecafesoleil.com" className="text-coffee-orange hover:underline">info@pausecafesoleil.com</a> ou au <a href="tel:+14186619465" className="text-coffee-orange hover:underline">(418) 661-9465</a>
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">8. Sécurité</h2>
            <p>
              Nous prenons des mesures raisonnables pour protéger vos renseignements personnels contre la perte, le vol, l'accès non autorisé, la divulgation, la copie, l'utilisation ou la modification. Nos mesures de sécurité comprennent le chiffrement SSL, des serveurs sécurisés et des contrôles d'accès stricts.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">9. Cookies</h2>
            <p>
              Nous utilisons uniquement des cookies essentiels au fonctionnement du site (ex: mémoriser votre consentement à la newsletter). Nous n'utilisons pas de cookies de suivi publicitaire.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">10. Modifications</h2>
            <p>
              Nous pouvons modifier cette politique de temps à autre. La date de "dernière mise à jour" en haut de cette page indique quand la politique a été révisée pour la dernière fois. Nous vous encourageons à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-white">11. Nous contacter</h2>
            <div className="rounded-lg bg-coffee-dark p-6">
              <p className="mb-2"><strong className="text-white">Pause Café Soleil Inc.</strong></p>
              <p>Région de Québec, Québec, Canada</p>
              <p>Téléphone: <a href="tel:+14186619465" className="text-coffee-orange hover:underline">(418) 661-9465</a></p>
              <p>Courriel: <a href="mailto:info@pausecafesoleil.com" className="text-coffee-orange hover:underline">info@pausecafesoleil.com</a></p>
            </div>
          </section>

          <div className="mt-12 border-t border-coffee-gray/20 pt-8">
            <p className="text-sm text-coffee-gray/60">
              Cette politique de confidentialité est conforme à la Loi sur la protection des renseignements personnels et les documents électroniques (LIPIPÉD) du Canada et à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec.
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
