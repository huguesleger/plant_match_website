import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { LEGAL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales — PlantMatch",
  description: "Mentions légales du site plantmatch.app et de l'application mobile PlantMatch.",
  alternates: { canonical: "/mentions-legales" },
};

const sections: LegalSection[] = [
  {
    id: "editeur",
    title: "Éditeur",
    content: (
      <>
        <p>
          Le site <strong>{SITE_URL.replace("https://", "")}</strong> et l&apos;application mobile <strong>PlantMatch</strong>{" "}
          (iOS et Android) sont édités par :
        </p>
        <ul>
          <li>
            <strong>{LEGAL.publisher}</strong>, {LEGAL.legalForm}
          </li>
          <li>Capital social : {LEGAL.capital}</li>
          <li>SIRET / RCS : {LEGAL.siret}</li>
          <li>TVA intracommunautaire : {LEGAL.vat}</li>
          <li>Adresse : {LEGAL.address}</li>
          <li>
            Email : <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "directeur",
    title: "Directeur de la publication",
    content: <p>Le directeur de la publication est {LEGAL.director}.</p>,
  },
  {
    id: "hebergement",
    title: "Hébergement",
    content: (
      <>
        <h3>Site internet</h3>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            vercel.com
          </a>
          .
        </p>
        <h3>Application et données</h3>
        <p>
          Les données de l&apos;application (comptes, catalogues, messages, photos) sont hébergées sur la plateforme Firebase
          de Google Cloud, fournie par Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande. Les traitements
          serveur de PlantMatch s&apos;exécutent dans la région Europe (Belgique, <em>europe-west1</em>).
        </p>
      </>
    ),
  },
  {
    id: "propriete",
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          La marque PlantMatch, le logo, la charte graphique, les illustrations, les textes, le code et plus généralement
          l&apos;ensemble des éléments du site et de l&apos;application sont la propriété exclusive de l&apos;éditeur ou font
          l&apos;objet d&apos;une autorisation d&apos;utilisation. Ils sont protégés par le Code de la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite
          préalable est interdite et constitue une contrefaçon.
        </p>
        <p>
          Les photos et descriptions publiées par les utilisateurs restent leur propriété. Les conditions dans lesquelles elles
          sont utilisées sont précisées dans les{" "}
          <Link href="/conditions-utilisation">conditions d&apos;utilisation</Link>.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    title: "Données personnelles",
    content: (
      <p>
        Le traitement des données personnelles des visiteurs et des utilisateurs est décrit dans la{" "}
        <Link href="/politique-confidentialite">politique de confidentialité</Link>. Pour exercer vos droits, écrivez à{" "}
        <a href={`mailto:${LEGAL.privacyEmail}`}>{LEGAL.privacyEmail}</a>.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        Le site plantmatch.app ne dépose aucun cookie publicitaire ni de mesure d&apos;audience. Seuls des éléments
        strictement nécessaires à son fonctionnement peuvent être utilisés, ce qui ne requiert pas de consentement.
      </p>
    ),
  },
  {
    id: "signalement",
    title: "Signaler un contenu",
    content: (
      <p>
        Conformément à la loi pour la confiance dans l&apos;économie numérique (LCEN) et au règlement européen sur les
        services numériques (DSA), tout contenu illicite peut être signalé directement depuis l&apos;application (fonction
        « Signaler ») ou par email à <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>, en précisant la nature du contenu,
        son emplacement et les motifs du signalement.
      </p>
    ),
  },
  {
    id: "droit",
    title: "Droit applicable",
    content: (
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution
        amiable, les tribunaux français sont compétents.
      </p>
    ),
  },
];

export default function MentionsLegales() {
  return (
    <LegalPage
      current="/mentions-legales"
      eyebrow="Informations juridiques"
      title="Mentions légales"
      intro={<p>Qui édite PlantMatch, où sont hébergés le site et l&apos;application, et comment nous contacter.</p>}
      sections={sections}
    />
  );
}
