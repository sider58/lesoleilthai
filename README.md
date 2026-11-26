# Le Soleil Thaï

Page vitrine Next.js et Tailwind CSS réalisée à partir de `prompt.md`, des maquettes faites sur Figma.

## Développement

```sh
pnpm install
pnpm dev
```

Ouvrir http://localhost:3000. Sous PowerShell, utiliser `pnpm.cmd` si l’exécution des scripts `.ps1` est désactivée.

```sh
pnpm build
pnpm start
```

Le build génère un site statique dans `out/`. `pnpm start` sert cet export pour le vérifier localement ; reconstruire après chaque changement. Aucun serveur Next.js n'est nécessaire en production.

## Organisation

- `app/page.js` assemble la page.
- `app/components/` contient la navigation, le hero, la présentation, les cartes, les offres, le contact et le pied de page.
- `app/data/massages.js` centralise les prestations, durées et tarifs.
- `app/globals.css` définit les tokens Tailwind, les styles des composants et les adaptations responsive.
- `assets/original-images/` et `assets/original-fonts/` conservent les sources hors du site publié.
- `public/images/` contient les WebP servis directement par leur chemin, par exemple `/images/massage-1.webp`.
- `public/icons/` et `public/fonts/` contiennent les icônes et WOFF2 hébergés localement.

Le menu mobile utilise un dialogue natif : fermeture avec Échap, gestion du focus et navigation par ancres. Les cartes passent sur une colonne en dessous de 768 px ; les ornements sont réduits ou masqués pour préserver la lisibilité.

## Liens à personnaliser

En l’absence de lien de réservation fourni, « Prendre RDV » appelle le numéro du salon. Les icônes sociales ouvrent une recherche du salon sur les plateformes correspondantes, avec un libellé accessible explicite. Remplacer ces destinations directement dans les composants concernés lorsqu’elles sont disponibles.

Les fenêtres du pied de page reprennent les informations connues du salon ; elles ne constituent pas un dossier juridique complet pour une publication. Compléter les informations de l’entreprise et de l’hébergeur au moment de préparer la mise en ligne.

## Images

Les composants utilisent directement les fichiers dans `public/images/`, avec `next/image` et un chemin classique comme `/images/massage-1.webp`. Chaque image a un seul fichier WebP. Le CSS adapte sa taille à l'écran ; il n'y a ni manifeste, ni chargeur personnalisé, ni génération d'images au démarrage ou au build.

Pour ajouter une image déjà préparée, la placer dans `public/images/` et utiliser son chemin dans le composant. Pour convertir les originaux de `assets/original-images/` en WebP :

```sh
pnpm assets:images
```

Ce script facultatif réutilise Sharp installé avec Next.js, préserve la transparence et n’ajoute aucune dépendance au projet. Il produit un WebP par original, limité à 420 px pour les photos des cartes et à une largeur adaptée pour chaque décoration ou logo. Les originaux sont conservés.

La configuration `images.unoptimized: true` permet de servir ces fichiers tels quels dans l'export statique. `next/image` conserve ses dimensions, le chargement différé et le préchargement du logo principal. Les ornements masqués par un breakpoint utilisent une source transparente intégrée pour éviter leur téléchargement. Une même image est désormais téléchargée à la même résolution sur tous les écrans.

## Polices

Les neuf variantes d'origine sont conservées, au format WOFF2 avec les caractères latins, accents français, ligatures, ponctuation et symbole euro. Le total passe de 1 811 068 à 302 940 octets (−83,3 %). Les dessins et largeurs des caractères restent identiques.

Les WOFF2 et `app/fonts.css` sont déjà générés : aucun outil Python n'est nécessaire sur Netlify. Pour changer une police ou les alphabets pris en charge :

```sh
python -m pip install "fonttools[woff]"
python scripts/prepare-fonts.py
```

## Netlify et bande passante

`netlify.toml` configure `pnpm build`, publie uniquement `out/` et désactive l'adaptateur serveur Next.js pour cet export statique. Les images sont déjà présentes dans `public/images/` ; aucune fonction ni transformation d'image à la demande n'est nécessaire.

`public/_headers`, copié dans `out/`, donne un an de cache navigateur aux WOFF2 et fichiers Next.js dont le nom change avec le contenu. Les images gardent des noms stables : leur cache est revalidé à chaque utilisation pour recevoir les nouvelles versions après un déploiement. Les tarifs et autres contenus HTML gardent le comportement de cache par défaut de Netlify.

Le cache CDN ne supprime pas la bande passante facturée vers les visiteurs ; réduire les fichiers et réutiliser le cache navigateur est donc essentiel. Le [plan Free à crédits](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) partage ses crédits entre bande passante, requêtes et déploiements, entre autres. Les anciens comptes peuvent utiliser un autre plan : vérifier le tableau de bord Netlify pour connaître le quota effectif. Le nombre de visites possible dépend du trafic et des autres usages du compte.

Pour publier, pousser ces changements vers la branche déjà reliée à Netlify, ou déployer le dossier `out/` après le build. Ne pas publier la racine du dépôt avec les originaux.
