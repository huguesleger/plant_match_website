import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { LEGAL, SITE_DOMAIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — PlantMatch",
  description: "Quelles données PlantMatch collecte, pourquoi, combien de temps et comment exercer vos droits (RGPD).",
  alternates: { canonical: "/politique-confidentialite" },
};

const Mail = () => <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>;

const sections: LegalSection[] = [
  {
    id: "responsable",
    title: "Responsable du traitement",
    content: (
      <>
        <p>
          Le responsable du traitement des données collectées via l&apos;application PlantMatch et le site {SITE_DOMAIN} est{" "}
          <strong>{LEGAL.publisher}</strong>, {LEGAL.address}.
        </p>
        <p>
          Pour toute question relative à vos données : <Mail />.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "Données collectées",
    content: (
      <>
        <h3>Données de compte</h3>
        <ul>
          <li>Adresse email et mot de passe (chiffré, géré par Firebase Authentication).</li>
          <li>
            Ou, si vous utilisez la connexion Google ou Facebook : identifiant du compte, nom, adresse email et photo de profil
            transmis par ce service.
          </li>
          <li>Code de parrainage et, le cas échéant, l&apos;identité du parrain.</li>
        </ul>
        <h3>Données de profil</h3>
        <ul>
          <li>Prénom, nom, nom d&apos;utilisateur, photo ou avatar, courte biographie.</li>
          <li>Ville, code postal et pays.</li>
          <li>Date de naissance (facultative).</li>
          <li>Statut « en ligne / hors ligne ».</li>
        </ul>
        <h3>Localisation</h3>
        <p>
          Avec votre autorisation, l&apos;application utilise la position de votre téléphone pour afficher les plantes et les
          membres autour de vous. <strong>Votre position est arrondie à environ 1 km avant d&apos;être enregistrée</strong> :
          votre adresse exacte n&apos;est jamais stockée ni montrée aux autres utilisateurs, qui ne voient qu&apos;une distance
          approximative.
        </p>
        <h3>Contenus que vous publiez</h3>
        <ul>
          <li>Fiches plantes : photos (une à trois), nom, description, catégorie, besoins en lumière et en eau, type d&apos;offre (don ou échange).</li>
          <li>Messages échangés avec les autres membres et propositions d&apos;échange ou de don.</li>
          <li>Favoris, préférences de recommandation et filtres.</li>
        </ul>
        <h3>Données d&apos;activité</h3>
        <ul>
          <li>Historique des dons et échanges, codes de remise générés et validés.</li>
          <li>Solde de feuilles, niveau et badges obtenus.</li>
          <li>Signalements et blocages effectués ou reçus.</li>
        </ul>
        <h3>Données techniques</h3>
        <ul>
          <li>Jeton de notification push (pour vous prévenir d&apos;un nouveau message ou d&apos;un échange).</li>
          <li>Informations techniques nécessaires au fonctionnement et à la sécurité du service (journaux d&apos;erreurs, type d&apos;appareil).</li>
        </ul>
      </>
    ),
  },
  {
    id: "finalites",
    title: "Finalités et bases légales",
    content: (
      <table>
        <thead>
          <tr>
            <th>Pourquoi</th>
            <th>Base légale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Créer et gérer votre compte, afficher votre profil</td>
            <td>Exécution du contrat (CGU)</td>
          </tr>
          <tr>
            <td>Afficher les plantes et les membres à proximité</td>
            <td>Consentement (autorisation de localisation)</td>
          </tr>
          <tr>
            <td>Publier vos plantes, permettre les dons, échanges et la messagerie</td>
            <td>Exécution du contrat</td>
          </tr>
          <tr>
            <td>Gérer les feuilles, niveaux, badges et le parrainage</td>
            <td>Exécution du contrat</td>
          </tr>
          <tr>
            <td>Vous envoyer des notifications push</td>
            <td>Consentement (autorisation du téléphone)</td>
          </tr>
          <tr>
            <td>Vous proposer des plantes recommandées</td>
            <td>Intérêt légitime à améliorer le service</td>
          </tr>
          <tr>
            <td>Modérer les contenus, traiter les signalements, prévenir les abus</td>
            <td>Intérêt légitime et obligations légales (DSA)</td>
          </tr>
          <tr>
            <td>Assurer la sécurité et corriger les erreurs</td>
            <td>Intérêt légitime</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "visibilite",
    title: "Ce que voient les autres membres",
    content: (
      <>
        <p>
          Les autres utilisateurs peuvent voir votre nom d&apos;utilisateur ou prénom, votre photo ou avatar, votre biographie,
          votre niveau, vos plantes publiées, votre statut en ligne et une <strong>distance approximative</strong> par rapport à
          eux.
        </p>
        <p>
          Votre email, votre date de naissance, votre position précise et votre solde de feuilles ne sont jamais affichés. Vos
          messages ne sont visibles que par les participants de la conversation (et par l&apos;équipe PlantMatch en cas de
          signalement).
        </p>
      </>
    ),
  },
  {
    id: "destinataires",
    title: "Destinataires et sous-traitants",
    content: (
      <>
        <p>
          Vos données ne sont <strong>jamais vendues</strong> ni utilisées à des fins publicitaires. Elles sont accessibles à
          l&apos;équipe PlantMatch et aux prestataires techniques suivants, dans la limite de leurs missions :
        </p>
        <ul>
          <li>
            <strong>Google (Firebase)</strong> : authentification, base de données, stockage des photos, fonctions serveur,
            notifications push.
          </li>
          <li>
            <strong>Google</strong> et <strong>Meta (Facebook)</strong> : uniquement si vous choisissez de vous connecter avec
            ces comptes. Sur iOS, l&apos;app vous demande alors l&apos;autorisation prévue par Apple (App Tracking
            Transparency) ; vous pouvez la refuser sans conséquence sur l&apos;utilisation de PlantMatch.
          </li>
          <li>
            <strong>Apple</strong> et <strong>Google</strong> : distribution de l&apos;application via l&apos;App Store et
            Google Play.
          </li>
          <li>
            <strong>Vercel</strong> : hébergement du site {SITE_DOMAIN}.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transferts",
    title: "Transferts hors Union européenne",
    content: (
      <p>
        Les traitements serveur de PlantMatch s&apos;exécutent en Europe. Certains prestataires (Google, Meta, Vercel) peuvent
        toutefois accéder à des données depuis les États-Unis. Ces transferts sont encadrés par le Data Privacy Framework
        UE–États-Unis et/ou les clauses contractuelles types de la Commission européenne.
      </p>
    ),
  },
  {
    id: "conservation",
    title: "Durées de conservation",
    content: (
      <table>
        <thead>
          <tr>
            <th>Données</th>
            <th>Durée</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Compte, profil, plantes publiées</td>
            <td>Tant que le compte est actif, puis suppression sous 30 jours après la clôture</td>
          </tr>
          <tr>
            <td>Compte inactif</td>
            <td>Suppression après 3 ans sans connexion, après email de prévenance</td>
          </tr>
          <tr>
            <td>Messages</td>
            <td>Durée de vie du compte ; « Effacer la conversation » la supprime de votre côté</td>
          </tr>
          <tr>
            <td>Historique des dons et échanges</td>
            <td>Durée de vie du compte</td>
          </tr>
          <tr>
            <td>Signalements et données de modération</td>
            <td>1 an après la clôture du signalement</td>
          </tr>
          <tr>
            <td>Journaux techniques</td>
            <td>12 mois maximum</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "droits",
    title: "Vos droits",
    content: (
      <>
        <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
        <ul>
          <li>accès à vos données et obtention d&apos;une copie ;</li>
          <li>rectification (la plupart des informations sont modifiables depuis « Informations personnelles ») ;</li>
          <li>effacement de vos données et suppression de votre compte ;</li>
          <li>opposition et limitation du traitement ;</li>
          <li>portabilité de vos données ;</li>
          <li>retrait de votre consentement à tout moment (localisation, notifications), depuis les réglages du téléphone ;</li>
          <li>définition de directives sur le sort de vos données après votre décès.</li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez à <Mail /> depuis l&apos;adresse liée à votre compte. Nous répondons dans un délai
          d&apos;un mois.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: "securite",
    title: "Sécurité",
    content: (
      <p>
        Les échanges entre l&apos;application et nos serveurs sont chiffrés (HTTPS/TLS). L&apos;accès aux données est
        restreint par des règles de sécurité côté serveur, les opérations sensibles (feuilles, validation des remises) sont
        exécutées uniquement par nos fonctions serveur, et les mots de passe ne sont jamais stockés en clair.
      </p>
    ),
  },
  {
    id: "mineurs",
    title: "Mineurs",
    content: (
      <p>
        PlantMatch s&apos;adresse aux personnes âgées d&apos;au moins 15 ans. Entre 15 et 18 ans, nous recommandons
        l&apos;accord d&apos;un parent, notamment pour les rencontres de remise en main propre. Si vous pensez qu&apos;un enfant
        de moins de 15 ans utilise l&apos;application, contactez-nous à <Mail /> pour que son compte soit supprimé.
      </p>
    ),
  },
  {
    id: "site",
    title: "Site internet et cookies",
    content: (
      <p>
        Le site vitrine ne demande aucune donnée personnelle et ne dépose aucun cookie publicitaire ni de mesure
        d&apos;audience. Notre hébergeur peut enregistrer des journaux techniques (adresse IP, date, page demandée) pour assurer
        la sécurité du service.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modifications",
    content: (
      <p>
        Cette politique peut évoluer avec l&apos;application. En cas de changement important, vous serez informé dans
        l&apos;application avant son entrée en vigueur. Voir aussi les{" "}
        <Link href="/conditions-utilisation">conditions d&apos;utilisation</Link>.
      </p>
    ),
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <LegalPage
      current="/politique-confidentialite"
      eyebrow="Vos données"
      title="Politique de confidentialité"
      intro={
        <p>
          PlantMatch sert à partager des plantes entre voisins, pas à exploiter vos données. Voici, en clair, ce que nous
          collectons, pourquoi, et comment garder la main dessus.
        </p>
      }
      sections={sections}
    />
  );
}
