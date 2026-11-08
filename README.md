# PlantMatch — site vitrine

Landing page de l'app mobile PlantMatch (Next.js 16, Tailwind CSS 4, Motion).

En ligne : https://plantmatch-app.vercel.app

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

Le projet Vercel `plantmatch` est relié à ce repository : chaque push sur `main` est déployé en production sur https://plantmatch-app.vercel.app.

Déploiement manuel si besoin :

```bash
npx vercel deploy --prod
```

Pour changer de domaine, modifier `SITE_DOMAIN` dans `src/lib/site.ts`.
