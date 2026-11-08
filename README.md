# PlantMatch — site vitrine

Landing page de l'app mobile PlantMatch (Next.js 16, Tailwind CSS 4, Motion).

## Développement

```bash
npm install
npm run dev
```

## Structure

- `src/app/` — layout (polices Chillax + Inter, metadata SEO) et page d'accueil
- `src/components/` — une section par fichier (Hero, HowItWorks, Features, Leaves, Levels, FAQ, DownloadCTA, Footer)
- `src/lib/site.ts` — **URLs App Store / Google Play** et liens de navigation
- `public/` — logo et illustrations repris de l'app

Les couleurs viennent de `lib/core/theme/app_colors.dart` (app Flutter) et sont déclarées dans `src/app/globals.css`.

## Déploiement Vercel

Option 1 — via GitHub : pousser le repo puis l'importer sur https://vercel.com/new (framework détecté automatiquement).

Option 2 — via la CLI :

```bash
npx vercel login
npx vercel --prod
```
