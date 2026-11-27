# Le Soleil Thaï

Site vitrine réalisé avec Next.js et Tailwind CSS.

## Développement

```sh
pnpm install
pnpm dev
```

Ouvrir http://localhost:3000.

## Contenu et ressources

- `app/components/` contient les sections et composants de la page.
- `app/data/massages.js` contient les prestations et tarifs.
- `assets/` conserve les images et polices originales.
- `public/` contient les fichiers optimisés utilisés par le site.

Après remplacement d’une image originale, régénérer les WebP avec :

```sh
pnpm assets:images
```

## Déploiement Cloudflare

```sh
pnpm preview
```

Pour tester le worker Cloudflare localement, exécuter `pnpm preview`. Pour le déployer depuis un terminal, exécuter `pnpm deploy`.

Dans Cloudflare Workers Builds, utiliser `pnpm run build:cloudflare` comme commande de build et `pnpm exec wrangler deploy` comme commande de déploiement.

L’URL canonique et le sitemap sont configurés pour `https://lesoleilthai.fr`. Avant publication, vérifier les informations des mentions légales.
