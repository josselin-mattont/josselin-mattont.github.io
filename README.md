# Portfolio académique — Josselin Mattont

Site statique d'une seule page, sans framework, sans bundler et sans dépendance JavaScript externe.
Déployable tel quel sur GitHub Pages (branche `main`, racine du dépôt).

## Arborescence réelle

```
/
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── brand/
    │   ├── portrait-dualite.png
│   ├── og-image.png
    │   ├── logos/
    │   │   ├── urca.png
    │   │   ├── unistra.png
    │   │   ├── icp.png
    │   │   └── lyon2.png
    │   └── photos/
    │       ├── recherche-gymnase.jpg
    │       └── surf-jjb.jpg
    └── pdf/
        └── CV_Mattont_Josselin.pdf
```

`index.html` contient tout le HTML, le CSS (`<style>`) et le JavaScript (`<script>`).
Les images et le CV restent des fichiers externes dans `assets/`. Aucune ressource n'est encodée en Base64.

Le JavaScript ne gère que trois choses : les compteurs chiffrés, le menu mobile et la mise à plat des `<details>` à l'impression. Tout le contenu scientifique est présent dans le HTML et reste lisible sans JavaScript.

## Mise à jour du CV

Remplacer `assets/pdf/CV_Mattont_Josselin.pdf` par le nouveau fichier, en conservant exactement le même nom. Aucune modification du HTML n'est nécessaire.

## Mise à jour du portfolio

1. Modifier le master dans Claude Design (`Portfolio2027.dc.html`).
2. Validation éditoriale et graphique.
3. Export statique.
4. Remplacer `index.html` dans le dépôt GitHub (et les fichiers de `assets/` si des médias ont changé).

Mettre `sitemap.xml` à jour (`<lastmod>`) uniquement lors d'une modification substantielle du contenu.

## Invariants SEO — à ne jamais supprimer lors d'un export

- `<title>` et `<meta name="description">`
- `<meta name="robots">` et `<meta name="author">`
- `<link rel="canonical">`
- balises Open Graph (`og:*`)
- balises Twitter Card (`twitter:*`)
- bloc JSON-LD `Person`
- `<meta name="theme-color">`

## Responsive

Points de rupture : 1180 px, 820 px (menu burger, passages en une colonne, frise verticale), 560 px.
Le rendu desktop au-delà de 1180 px est la référence graphique validée et ne doit pas être modifié.

## Accessibilité

- structure `header` / `nav` / `main#contenu` / `footer`, un seul `<h1>`
- lien d'évitement « Aller au contenu principal », visible au focus clavier
- menu mobile en `<button>` avec `aria-expanded` / `aria-controls` / `aria-label`, fermeture à la touche Échap
- états `:focus-visible` visibles sur liens, boutons et `<summary>`
- éléments décoratifs (disques rouges, filets) marqués `aria-hidden`
- prise en charge de `prefers-reduced-motion` : les compteurs affichent directement leur valeur finale
