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

## Déploiement

```sh
pnpm build
pnpm start
```

Le build crée un site statique dans `out/`, prêt à être publié sur Netlify. `pnpm start` permet de vérifier l’export localement.

Avant publication, configurer les liens « Prendre RDV » et compléter les mentions légales.
