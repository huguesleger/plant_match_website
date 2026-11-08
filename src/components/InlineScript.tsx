"use client";

/**
 * Script exécuté de façon synchrone pendant le parsing HTML, avant le premier rendu.
 * `text/plain` côté client évite que React le réexécute ou avertisse.
 * Voir node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md
 */
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
