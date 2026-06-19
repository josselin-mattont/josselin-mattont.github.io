# Portfolio académique — Josselin Mattont

Site web personnel **statique**, **optimisé pour le référencement** :
aucun serveur, aucune base de données, aucune dépendance payante.
Il fonctionne en ouvrant `index.html` dans un navigateur, et se publie
gratuitement sur **GitHub Pages**, **Netlify**, **Vercel** ou **Neocities**.

---

## 🗂️ Structure des fichiers

```
site/
├── index.html          ← LA PAGE + TOUT LE CONTENU (c'est ici qu'on modifie le texte)
├── css/
│   └── style.css       ← l'apparence/design (ne pas modifier)
├── js/
│   └── app.js          ← animations (menu mobile + chiffres) — ne pas modifier
├── assets/
│   ├── pdf/
│   │   └── CV_Mattont_Josselin.pdf   ← votre CV (à remplacer quand il change)
│   └── img/
│       ├── portrait-dualite.png       ← votre illustration
│       ├── og-image.png               ← image d'aperçu pour les partages (LinkedIn…)
│       └── logos/                     ← logos des établissements
├── sitemap.xml         ← aide Google à indexer le site
├── robots.txt          ← autorise les moteurs de recherche
└── README.md           ← ce fichier
```

> 💡 **Pourquoi le contenu est-il dans `index.html` et non dans un fichier séparé ?**
> Pour le **référencement** : Google et les aperçus LinkedIn/Facebook lisent le texte
> directement dans la page. C'est ce qui donne un bon classement et un bel aperçu
> quand vous partagez votre lien.

---

## ✏️ Comment modifier le contenu

Ouvrez `index.html` avec un éditeur de texte gratuit
([VS Code](https://code.visualstudio.com/) recommandé, ou le Bloc-notes / TextEdit).
Chaque partie du site est encadrée par un commentaire bien visible, par exemple :

```html
<!-- =========================== PUBLICATIONS ========================== -->
```

Repérez la section, modifiez le texte entre les balises, enregistrez, rechargez la page.

### 1. Mettre à jour le CV
Renommez votre nouveau CV exactement **`CV_Mattont_Josselin.pdf`** et placez-le
dans `assets/pdf/` en remplaçant l'ancien. Rien d'autre à faire.

### 2. Modifier un lien (LinkedIn, HAL, ResearchGate…)
Cherchez l'adresse dans `index.html` (elle commence par `https://`) et remplacez-la.
Les profils sont dans la section **CONTACT** (en bas) ; les laboratoires dans le **HÉROS** (en haut).

### 3. Ajouter une publication
Dans la section **PUBLICATIONS**, copiez un bloc complet de `<a class="pub" …>` jusqu'à
`</a>`, collez-le juste au-dessus des autres, puis changez l'année, le titre, la revue
et le lien :

```html
<a class="pub" href="https://doi.org/VOTRE-LIEN" target="_blank" rel="noopener">
  <span class="pub-year">2025</span>
  <span><span class="pub-title">Titre de l'article</span><span class="pub-source">Revue, vol. X, p. 1–20</span></span>
  <span class="pub-link">Lire l'article →</span>
</a>
```

### 4. Ajouter un cours / une communication / une distinction
Même principe : dans la section concernée, copiez une ligne existante
(`<li>…</li>` pour un cours, le bloc `<div class="comm">…</div>` pour une
communication) et adaptez le texte.

> ⚠️ **Règles d'or**
> - Ne supprimez jamais les balises `<…>` qui encadrent le texte.
> - Pour les symboles spéciaux : écrivez `&amp;` à la place de `&`.
> - Enregistrez le fichier en **UTF-8** (par défaut dans VS Code) pour les accents.
> - En cas d'erreur, annulez (Ctrl+Z), enregistrez, rechargez.

---

## 🚀 Publier sur GitHub Pages — pas à pas

1. **Créez un compte** sur [github.com](https://github.com) (gratuit).
2. En haut à droite, **« + » → New repository**.
3. **Important pour avoir une adresse courte** : nommez le dépôt exactement
   **`josselin-mattont.github.io`** (remplacez par votre identifiant GitHub réel).
   → votre site sera à l'adresse **`https://josselin-mattont.github.io`**.
   *(Si vous lui donnez un autre nom, ex. `portfolio`, l'adresse sera
   `https://VOTRE-IDENTIFIANT.github.io/portfolio/`.)*
4. Laissez « Public », cochez éventuellement « Add a README », puis **Create repository**.
5. Sur la page du dépôt : **Add file → Upload files**.
6. **Glissez-déposez tout le contenu du dossier `site/`** (les fichiers et dossiers :
   `index.html`, `css`, `js`, `assets`, `sitemap.xml`, `robots.txt`).
   ⚠️ Déposez le **contenu** du dossier, pas le dossier `site` lui-même.
7. En bas, cliquez **Commit changes**.
8. Allez dans **Settings → Pages** (menu de gauche).
9. Sous « Build and deployment → Source », choisissez **Deploy from a branch**,
   branche **main**, dossier **/ (root)**, puis **Save**.
10. Patientez ~1 minute, puis ouvrez **`https://josselin-mattont.github.io`** 🎉

**Mettre à jour ensuite :** retournez dans le dépôt → **Add file → Upload files** →
redéposez le fichier modifié (ex. `index.html` ou le nouveau CV) → **Commit**.
Le site se met à jour automatiquement en ~1 minute.

---

## 🔎 Après la publication — bon référencement

1. **Vérifiez l'adresse** : si votre site n'est PAS à `https://josselin-mattont.github.io/`,
   ouvrez `index.html`, `sitemap.xml` et `robots.txt`, et remplacez cette adresse par la vôtre
   (cherchez « josselin-mattont.github.io » et remplacez partout).
2. **Déclarez le site à Google** : créez un compte gratuit sur
   [Google Search Console](https://search.google.com/search-console), ajoutez votre adresse,
   puis soumettez `sitemap.xml`. Google indexera votre site en quelques jours.
3. **Testez l'aperçu de partage** : collez votre lien dans
   [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) pour voir
   la jolie image d'aperçu (`og-image.png`).

---

## ✅ Ce qui est déjà optimisé pour vous

- **Texte dans le HTML** → lu directement par Google (bon classement).
- **Balises Open Graph + image d'aperçu** → bel encadré quand vous partagez le lien.
- **Données structurées (schema.org Person)** → Google comprend que c'est votre fiche.
- **Balise titre + description** soignées.
- **sitemap.xml + robots.txt** → indexation facilitée.
- **Responsive** (ordinateur, tablette, téléphone) et **exportable en PDF**
  (navigateur → Imprimer → « Enregistrer en PDF », cocher « Graphiques d'arrière-plan »).

---

## 🆘 En cas de problème

- **La page est blanche / cassée** → une balise a été supprimée par erreur dans
  `index.html`. Annulez la dernière modification.
- **Un accent s'affiche mal** → enregistrez le fichier en **UTF-8**.
- **Une image ne s'affiche pas** → vérifiez son nom exact (majuscules comprises)
  dans `assets/img/…`.
- **L'aperçu LinkedIn ne se met pas à jour** → utilisez le « Post Inspector »
  (lien ci-dessus) pour forcer le rafraîchissement.
