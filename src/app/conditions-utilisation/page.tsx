import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { LEGAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — PlantMatch",
  description: "Les règles d'utilisation de l'application PlantMatch : compte, dons et échanges de plantes, feuilles, niveaux et bonne conduite.",
  alternates: { canonical: "/conditions-utilisation" },
};

const Mail = () => <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>;

const sections: LegalSection[] = [
  {
    id: "objet",
    title: "Objet",
    content: (
      <>
        <p>
          Les présentes conditions générales d&apos;utilisation (« CGU ») encadrent l&apos;utilisation de l&apos;application
          mobile PlantMatch, éditée par {LEGAL.publisher} (« PlantMatch », « nous »).
        </p>
        <p>
          PlantMatch est une plateforme gratuite de mise en relation entre particuliers qui permet de publier des plantes et
          des boutures, de les trouver à proximité, puis de les <strong>donner</strong> ou de les <strong>échanger</strong>{" "}
          lors d&apos;une remise en main propre.
        </p>
      </>
    ),
  },
  {
    id: "acceptation",
    title: "Acceptation des CGU",
    content: (
      <p>
        En créant un compte, vous acceptez sans réserve les présentes CGU ainsi que la{" "}
        <Link href="/politique-confidentialite">politique de confidentialité</Link>. Si vous ne les acceptez pas, vous ne devez
        pas utiliser l&apos;application.
      </p>
    ),
  },
  {
    id: "inscription",
    title: "Inscription et compte",
    content: (
      <>
        <ul>
          <li>L&apos;application est réservée aux personnes physiques âgées d&apos;au moins 15 ans, agissant à titre personnel et non professionnel.</li>
          <li>L&apos;inscription se fait par email et mot de passe, ou via un compte Google ou Facebook.</li>
          <li>Vous vous engagez à fournir des informations exactes et à les tenir à jour.</li>
          <li>Un seul compte par personne. Votre compte est personnel : vous êtes responsable de sa confidentialité et de toute activité réalisée depuis celui-ci.</li>
        </ul>
        <p>Prévenez-nous sans délai à <Mail /> en cas d&apos;utilisation frauduleuse de votre compte.</p>
      </>
    ),
  },
  {
    id: "fonctionnement",
    title: "Fonctionnement du service",
    content: (
      <>
        <h3>Catalogue</h3>
        <p>
          Vous pouvez ajouter des plantes à votre catalogue (une à trois photos, description, catégorie, besoins en lumière, en
          eau et niveau d&apos;entretien) et choisir pour chacune : don ou échange. Une fiche peut être publiée, gardée en
          brouillon ou archivée.
        </p>
        <h3>À proximité</h3>
        <p>
          Avec votre autorisation, l&apos;application affiche les membres et les plantes situés dans le rayon de recherche que
          vous choisissez. La distance affichée est approximative.
        </p>
        <h3>Messagerie</h3>
        <p>
          La messagerie permet d&apos;échanger avec un autre membre, de proposer un échange, d&apos;accepter ou de refuser une
          demande et d&apos;organiser la rencontre.
        </p>
        <h3>Remise en main propre et code de confirmation</h3>
        <p>
          Lors de la rencontre, le propriétaire génère un code à 6 chiffres que le receveur saisit dans l&apos;application.
          Cette validation confirme que la plante a bien été remise : elle déclenche l&apos;attribution des feuilles et des
          points de niveau. Ne communiquez ce code qu&apos;une fois la plante effectivement remise.
        </p>
      </>
    ),
  },
  {
    id: "gratuite",
    title: "Gratuité et absence de vente",
    content: (
      <>
        <p>
          L&apos;application est gratuite. PlantMatch est dédiée au <strong>don</strong> et au <strong>troc</strong> :
        </p>
        <ul>
          <li>toute vente, demande de paiement ou contrepartie financière entre membres est interdite ;</li>
          <li>l&apos;usage de PlantMatch à des fins commerciales ou professionnelles (pépinières, revendeurs…) est interdit sans accord écrit préalable.</li>
        </ul>
      </>
    ),
  },
  {
    id: "feuilles",
    title: "Les feuilles",
    content: (
      <>
        <p>Les feuilles sont l&apos;unité de récompense de PlantMatch :</p>
        <ul>
          <li>5 feuilles sont offertes à l&apos;inscription ;</li>
          <li>contacter un donneur pour la première fois au sujet d&apos;une plante coûte 1 feuille ;</li>
          <li>chaque don ou échange confirmé par code rapporte 2 feuilles ;</li>
          <li>chaque parrainage abouti rapporte 3 feuilles au parrain et au filleul ;</li>
          <li>des feuilles bonus sont attribuées à chaque passage de niveau.</li>
        </ul>
        <div className="note">
          <p>
            Les feuilles <strong>n&apos;ont aucune valeur monétaire</strong>. Elles ne peuvent être ni achetées, ni vendues, ni
            échangées contre de l&apos;argent, ni transférées à un autre compte. Elles sont perdues en cas de suppression du
            compte. PlantMatch peut ajuster leur fonctionnement, en vous informant au préalable dans l&apos;application.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "niveaux",
    title: "Niveaux, badges et parrainage",
    content: (
      <>
        <p>
          Chaque don ou échange confirmé fait progresser votre niveau, de « Novice des plantes » (niveau 1) à « Gardien de la
          nature » (niveau 7, 100 dons ou échanges), qui donne accès aux contacts illimités sans dépenser de feuilles.
        </p>
        <p>
          Les feuilles et niveaux obtenus de manière frauduleuse (faux comptes, échanges fictifs, parrainages de ses propres
          comptes, validation de codes sans remise réelle…) peuvent être annulés et entraîner la suspension du compte.
        </p>
      </>
    ),
  },
  {
    id: "conduite",
    title: "Règles de bonne conduite",
    content: (
      <>
        <p>En utilisant PlantMatch, vous vous engagez à :</p>
        <ul>
          <li>publier uniquement des plantes que vous possédez réellement, avec des photos et descriptions fidèles ;</li>
          <li>signaler honnêtement l&apos;état de la plante (maladie, parasites, traitement récent) ;</li>
          <li>respecter les rendez-vous fixés ou prévenir en cas d&apos;empêchement ;</li>
          <li>rester courtois et respectueux dans vos échanges.</li>
        </ul>
        <p>Il est interdit de publier ou de proposer :</p>
        <ul>
          <li>des espèces protégées, des plantes prélevées dans la nature ou des espèces exotiques envahissantes dont la cession est interdite par la réglementation ;</li>
          <li>des plantes ou substances illicites, ainsi que des produits phytosanitaires ;</li>
          <li>tout autre objet ou service que des plantes, boutures, graines et accessoires de plantes associés ;</li>
          <li>des contenus illicites, haineux, violents, à caractère sexuel, trompeurs ou portant atteinte aux droits d&apos;autrui ;</li>
          <li>du spam, de la publicité ou des liens commerciaux ;</li>
          <li>les données personnelles d&apos;un tiers sans son accord.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rencontres",
    title: "Rencontres et sécurité",
    content: (
      <>
        <p>
          Les remises se font en main propre, sous la seule responsabilité des membres. Pour votre sécurité, nous vous
          recommandons de :
        </p>
        <ul>
          <li>vous retrouver dans un lieu public et fréquenté, en journée ;</li>
          <li>prévenir un proche du lieu et de l&apos;heure du rendez-vous ;</li>
          <li>garder vos échanges dans la messagerie PlantMatch ;</li>
          <li>ne jamais communiquer d&apos;informations bancaires ou de documents d&apos;identité.</li>
        </ul>
        <p>Les mineurs sont invités à se faire accompagner d&apos;un adulte.</p>
      </>
    ),
  },
  {
    id: "contenus",
    title: "Vos contenus",
    content: (
      <>
        <p>
          Vous restez propriétaire des photos et textes que vous publiez et garantissez disposer des droits nécessaires. Vous
          accordez à PlantMatch, pour la durée de leur publication, une licence gratuite et non exclusive pour les héberger, les
          afficher aux autres membres et les adapter techniquement (redimensionnement, compression), dans le seul but de faire
          fonctionner le service.
        </p>
        <p>
          Lorsque vous partagez une plante via la fonction « Partager », son nom, sa description et le lien vers PlantMatch sont
          transmis à l&apos;application de votre choix.
        </p>
      </>
    ),
  },
  {
    id: "moderation",
    title: "Signalement, blocage et sanctions",
    content: (
      <>
        <p>
          Depuis une conversation, vous pouvez <strong>signaler</strong> un utilisateur ou <strong>le bloquer</strong> : il ne
          pourra plus vous écrire ni voir votre profil. Les signalements sont examinés par l&apos;équipe PlantMatch. Bloquer un
          membre pendant un échange en cours notifie l&apos;équipe et aucun point n&apos;est distribué pour cet échange.
        </p>
        <p>
          En cas de manquement aux CGU, PlantMatch peut, selon la gravité et après vous en avoir informé lorsque c&apos;est
          possible : retirer un contenu, annuler des feuilles ou des niveaux, suspendre ou supprimer le compte. Vous pouvez
          contester une décision en écrivant à <Mail />.
        </p>
      </>
    ),
  },
  {
    id: "responsabilite",
    title: "Responsabilité",
    content: (
      <>
        <p>
          PlantMatch agit comme simple intermédiaire technique. Nous ne sommes partie à aucun don ou échange et ne pouvons
          garantir l&apos;identité des membres, l&apos;exactitude des annonces, ni l&apos;état, l&apos;espèce ou la santé des
          plantes remises.
        </p>
        <p>
          Nous mettons tout en œuvre pour assurer la disponibilité de l&apos;application, sans pouvoir la garantir en permanence
          (maintenance, panne, cas de force majeure). Notre responsabilité ne saurait être engagée pour les dommages indirects
          ou résultant du comportement d&apos;un autre membre.
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: (
      <p>
        L&apos;application, sa marque, son logo, son design et son code sont la propriété de l&apos;éditeur. Toute reproduction
        ou réutilisation sans autorisation est interdite. Voir les <Link href="/mentions-legales">mentions légales</Link>.
      </p>
    ),
  },
  {
    id: "resiliation",
    title: "Suppression du compte",
    content: (
      <p>
        Vous pouvez supprimer votre compte à tout moment en écrivant à <Mail /> depuis l&apos;adresse associée. La suppression
        entraîne celle de votre profil, de votre catalogue et de vos feuilles, dans les conditions prévues par la{" "}
        <Link href="/politique-confidentialite">politique de confidentialité</Link>.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "Modification des CGU",
    content: (
      <p>
        Nous pouvons faire évoluer les présentes CGU, notamment pour suivre les nouvelles fonctionnalités de l&apos;application.
        Vous serez informé de toute modification importante dans l&apos;application au moins 15 jours avant son entrée en
        vigueur. Continuer à utiliser PlantMatch après cette date vaut acceptation.
      </p>
    ),
  },
  {
    id: "droit",
    title: "Droit applicable et litiges",
    content: (
      <>
        <p>
          Les CGU sont régies par le droit français. En cas de difficulté, contactez-nous d&apos;abord à <Mail /> pour trouver
          une solution amiable.
        </p>
        <p>
          À défaut, le litige sera porté devant les tribunaux compétents, conformément aux règles de droit commun et aux
          dispositions protectrices du Code de la consommation.
        </p>
      </>
    ),
  },
];

export default function ConditionsUtilisation() {
  return (
    <LegalPage
      current="/conditions-utilisation"
      eyebrow="Règles du jeu"
      title="Conditions d'utilisation"
      intro={
        <p>
          PlantMatch repose sur la confiance entre voisins. Ces conditions expliquent comment fonctionnent les dons, les
          échanges et les feuilles, et ce que chacun s&apos;engage à respecter.
        </p>
      }
      sections={sections}
    />
  );
}
