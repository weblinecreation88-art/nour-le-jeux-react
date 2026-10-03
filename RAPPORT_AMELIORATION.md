# NOUR — Rapport d'amélioration (3 octobre 2026)

Sources : export Firebase Analytics du 5 sept. au 2 oct. 2026, audit du code et des médias du dépôt, lecture intégrale du script du Chapitre 1.

---

## 1. Ce que disent les chiffres

| Indicateur | Valeur | Lecture |
|---|---|---|
| Utilisateurs actifs (30 j) | 238 | Pic autour du 13–19 sept. (103 nouveaux), puis forte baisse |
| Nouveaux visiteurs | 234 | Presque tous les actifs sont des nouveaux |
| Rétention semaine 1 | 1 à 7 % (7/24, 1/73, 4/103) | **Problème n°1 : les joueurs ne reviennent pas** |
| Durée moyenne d'une session engagée | 1 à 3 min | Courte pour un RPG narratif |
| Vues landing → clic « Jouer » | 923 → 62 (≈ 7 %) | Le bouton ne convertit pas assez |
| Clics téléchargement APK | 8 | Le canal Android est presque inexistant |
| Pays | US 121 · MA 54 · FR 22 | **Les 121 « US » sont probablement des robots** (crawlers, tests Play Store) |

### Entonnoir du Chapitre 1 (vues d'écran)

```
Scène 1  La Chambre ............ 267  ████████████████████████████
Scène 2  Le Poteau ..............  94  ██████████   (-65 %)  ← la grosse fuite
Scène 3  Premier Waswas .........  43  █████        (-54 %)
Scène 4  « Plus seul » ..........  33  ███▌
Scènes 5/6/7 (3 branches) .......  54  (27 + 11 + 16)
Scène 8  Jardin .................  27  ███
Scène 9  Grand Waswas ...........  41  ████▌
Chapitre terminé ................  29
```

**Constat clé :** deux joueurs sur trois abandonnent pendant la scène 1. Elle enchaîne une trentaine de répliques, un quiz, puis une action dans la vraie vie (« ranger ton lit »), le tout avant le moindre vrai choix ou changement de lieu. Ceux qui passent la scène 3 vont en revanche presque tous au bout : le contenu plaît, mais **l'entrée est trop lente**.

---

## 2. Travail réalisé dans cette session (branche `amelioration-allegement`)

1. **Commit du travail en cours** : nouvelles sections de landing (EmailCapture, UnifiedBenefits), refonte du hero, suppression de vidéos promo inutilisées.
2. **Allègement** : 131 fichiers inutiles retirés de `public/` et déplacés dans `_media_archive/public_removed/` (rien n'est perdu). Au total : 107 doublons `.wav` des voix, les échantillons de voix de test, `test_voices.html` et `src/test_clip1.mp4`. Gain : **−50 Mo** (`public/` passe de 347 à 297 Mo).
3. **Bundle JavaScript découpé** :
   - le fichier principal passe de **2,17 Mo à 1,13 Mo** ;
   - la landing est chargée à la demande ;
   - React, Firebase, PostHog et l'interface sont dans des fichiers séparés, mis en cache entre deux déploiements.
4. **Calque « plans illustrés » pour les scènes 2 à 9** (`src/components/StoryShotOverlay.tsx`). Il affiche une illustration différente selon la réplique en cours, comme le storyboard de la scène 1. Il s'active automatiquement dès qu'une image existe et reste invisible sinon. Les zones cliquables du Poteau aux Chemins sont préservées.
5. **Storyboard de 23 nouvelles images** (`scripts/storyboard_ch1.json`), écrit à partir du script et calé sur les répliques. Il respecte la charte :
   - style peint façon Ghibli, lumière dorée ;
   - **personnages sans visage** ;
   - Othmân en cape bleu canard, Noura en hijab crème ;
   - le Waswâs n'est jamais une créature, seulement une fumée violette.
6. **Générateur d'images** (`scripts/generate_ch1_shots.mjs`). Il envoie à Gemini la planche officielle des personnages, une image de style et le décor de la scène, puis enregistre des JPEG 3:4 optimisés (environ 150 Ko chacun).

### Les 23 plans prévus

| Scène | Plans |
|---|---|
| 2 Poteau | sac posé au pied du poteau · les 5 panneaux vus en contre-plongée · vérification du sac, main sur le cœur |
| 3 Waswas | brume violette qui enserre Othmân · Istiʿādhah, paumes ouvertes · le pas résolu avec le bâton · éclatement en étincelles d'or |
| 4 Vallée | vue sur le village depuis la colline · le vieux vigneron qui sourit |
| 5 Village | dispute des marchands, Noura retient Othmân · le Salām à la fontaine |
| 6 Refus | le jeune artisan à son établi · la main tendue dans le vide · « Al-Hamdulillâh » apaisé |
| 7 Geste | chute du paysan, paniers renversés · Othmân ramasse les figues une à une |
| 8 Jardin | découverte des pousses et du filet d'eau · le ruisseau qui revit |
| 9 Grand Waswas | genou à terre devant le vortex · fragments de souvenirs dorés · il se relève · l'aube au sommet · la marche vers l'horizon |

---

## 3. Recommandations, par priorité

### P0 — Impact immédiat

**A. Recompresser les médias** (pas fait, car l'opération écrase les originaux : à valider par toi)
- Les fichiers `public/audio/ch*/*.mp3` sont en réalité du **WAV non compressé** (PCM 384 kb/s) renommé en `.mp3`. En vrai MP3 mono 64 kb/s, la voix reste parfaite : **184 Mo → environ 30 Mo**.
- Les 17 vidéos de fond tournent à **8–11 Mb/s pour des boucles de 8 secondes muettes**. En H.264 720p (CRF 24, sans piste audio) : **environ 150 Mo → environ 25 Mo**.
- Effet attendu :
  - l'APK passe de **389 Mo à moins de 100 Mo** (sur le Play Store, un APK lourd fait chuter le taux d'installation) ;
  - le premier écran web charge beaucoup plus vite.
- Suggestion : faire une copie de `public/` dans `_media_archive/` avant de recompresser.

**B. Raccourcir l'entrée du jeu (scène 1)** : c'est là que se jouent 65 % des abandons.
- Ramener la scène 1 à 10–12 répliques avant le premier choix.
- Rendre l'action réelle de la scène 1 différable (« Je le ferai en partant ») au lieu de bloquer la progression.
- Montrer dès la première minute une récompense visible : XP, métamorphose du décor, premier badge.
- Ajouter un bouton « passer » sur les répliques déjà lues (cas des joueurs qui reviennent).

**C. Faire revenir les joueurs** (rétention à J+7 entre 1 et 7 %)
- Notifications locales Capacitor (`@capacitor/local-notifications`) : « Ta quête du jour t'attend » à l'heure de la dernière session.
- Utiliser la nouvelle section EmailCapture pour un e-mail hebdomadaire (un hadith et un défi Adab de la semaine).
- Rendre la série de jours (streak) plus visible sur l'écran titre, avec un petit cadeau au jour 3 et au jour 7.

**D. Nettoyer les statistiques**
- Exclure le trafic robot (51 % de « US ») avec un filtre de trafic interne dans GA4, ou des règles de données dans Firebase.
- Normaliser les titres d'écran : « Scène 142 » et « Scène 201 » apparaissent tels quels, et les versions EN/AR créent des doublons. Mieux vaut envoyer un `scene_id` stable et la langue dans un paramètre séparé.

### P1 — Court terme

**E. Mieux convertir la landing** (7 % de clics sur « Jouer »)
- Mettre un bouton « Jouer maintenant — gratuit, sans inscription » au-dessus de la ligne de flottaison, sur mobile.
- Remplacer la vidéo du hero par une boucle courte de gameplay réel, sous-titrée.
- Ajouter des preuves sociales concrètes : nombre de joueurs, témoignages de parents.

**F. Performance du code**
- `App.tsx` fait environ 1 600 lignes : extraire la logique de progression dans un hook `useProgress` et les modales dans un composant dédié.
- Charger les chapitres 2 et 3 à la demande (les visiteurs de la landing téléchargent encore tout le contenu narratif).
- Les fonds importés depuis `src/assets/images` pèsent entre 500 Ko et 1,2 Mo chacun : les convertir en WebP (gain d'environ 60 %).

**G. Intégrer les nouvelles images**
- ✅ Les 23 plans sont générés et relus (3 Mo au total). Trois ont été refaits : du texte sur les panneaux, une Noura dédoublée et un Othmân confondu avec Noura.
- Étendre le même principe aux chapitres 2 et 3 : créer `storyboard_ch2.json` sur le même modèle.

### P2 — Hygiène du dépôt

- 1,4 Go d'APK et d'AAB à la racine (ignorés par git, mais encombrants) : les ranger dans un dossier `releases/` hors du projet.
- Le pack git pèse 444 Mo à cause de vidéos supprimées mais toujours présentes dans l'historique (`tiktok_promo.mp4`, 56 Mo). À terme : `git filter-repo` ou Git LFS pour les médias.
- Les scripts `fix_*.py` ponctuels sont maintenant ignorés par git. Ils peuvent être supprimés.

---

## 4. Générer les images

1. Ajouter dans `.env` la ligne `GEMINI_API_KEY=ta_clé`. La clé se crée sur Google AI Studio et la génération d'images est facturée quelques centimes par image.
2. Lancer la génération :
   ```bash
   node scripts/generate_ch1_shots.mjs
   ```
3. Pour régénérer un plan précis :
   ```bash
   node scripts/generate_ch1_shots.mjs s3_brume
   ```
4. Les images arrivent dans `public/game-assets/ch1_shots/` et apparaissent automatiquement dans le jeu.
