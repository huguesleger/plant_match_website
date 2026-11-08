import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import InlineScript from "@/components/InlineScript";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Police des titres de l'app PlantMatch
const chillax = localFont({
  variable: "--font-chillax",
  display: "swap",
  src: [
    { path: "../fonts/Chillax-Light.otf", weight: "300" },
    { path: "../fonts/Chillax-Regular.otf", weight: "400" },
    { path: "../fonts/Chillax-Medium.otf", weight: "500" },
    { path: "../fonts/Chillax-Semibold.otf", weight: "600" },
    { path: "../fonts/Chillax-Bold.otf", weight: "700" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PlantMatch — Échangez, adoptez et cultivez ensemble",
  description:
    "PlantMatch est l'app gratuite pour donner et échanger vos plantes et boutures avec des passionnés près de chez vous. Catalogue, carte, messagerie et niveaux à débloquer.",
  keywords: ["échange de plantes", "don de plantes", "boutures", "plantes d'intérieur", "troc", "PlantMatch"],
  openGraph: {
    title: "PlantMatch — Échangez, adoptez et cultivez ensemble",
    description: "Donnez et échangez vos plantes et boutures avec la communauté autour de vous.",
    url: SITE_URL,
    siteName: "PlantMatch",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/plantMatch.png", width: 1024, height: 1024, alt: "PlantMatch" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

/**
 * Mode « app » : quand l'app Flutter ouvre une page avec ?app=1 (webview),
 * on marque <html data-app> avant le premier rendu pour masquer les éléments
 * `.web-only`. Le mode est mémorisé pour la session de la webview, afin de
 * rester actif quand on suit un lien vers une autre page.
 */
const APP_MODE_SCRIPT = `try{var k="pm-app";if(new URLSearchParams(location.search).get("app")==="1")sessionStorage.setItem(k,"1");if(sessionStorage.getItem(k)==="1")document.documentElement.setAttribute("data-app","")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${chillax.variable} antialiased`} suppressHydrationWarning>
      <head>
        <InlineScript html={APP_MODE_SCRIPT} />
      </head>
      <body className="min-h-dvh overflow-x-clip bg-white">{children}</body>
    </html>
  );
}
