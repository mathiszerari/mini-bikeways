# Mini Bikeways — Jeu type Mini Motorways

Développé de A à Z avec Phaser 3 (template Phaser + Vite, config fixe 1024×768 au départ, passage à `Phaser.Scale.FIT` avec fond bleu).

**Rôle de l'assistant :** Conseils et explications uniquement. Ne pas écrire de code, ne pas proposer d'implémentations, ne pas être proactif. Le dev pose des questions quand il en a besoin.

## Contexte technique

- Stack : Phaser 3 (ESM, import `import * as Phaser from 'phaser'`), TypeScript, Vite
- Scale mode : `Phaser.Scale.FIT` avec `autoCenter: Phaser.Scale.Center.CENTER_BOTH`
- Scene active pour le dev : `MapScene` dans `src/game/scenes/Map.ts`
- Rendu : `Graphics` Phaser pour les traits et formes

## Étapes franchies

1. Config du projet (template Phaser + Vite)
2. Mise en place du plein écran avec FIT (bandes acceptables)
3. Première scène MapScene avec fond #1e2a38
4. Traçage de repères visuels (croix centrale) avec Graphics

## À faire / Architecture décidée

### Système de grille (prochaine étape)

Le jeu repose sur une grille comme Mini Motorways. Approche retenue :

- **Classe `Grid` dédiée** dans `src/game/grid/` avec :
  - Tableau 2D de cellules (`grid[row][col]`)
  - Une `CellState` (enum) : EMPTY, ROAD, HOUSE, DESTINATION (et d'autres à venir)
  - Méthodes de conversion `cellToPixel(col, row)` et `pixelToCell(x, y)` qui tiennent compte de `offsetX/Y` pour centrer la grille
  - Méthode `render()` qui redessine tout avec un Graphics
  - Méthode `setCell(col, row, state)` pour modifier une case
- Taille de grille de départ : environ **10×8** (ajustable)
- Cellules carrées : `cellSize = Math.min(screenWidth / nbColonnes, screenHeight / nbLignes)`
- `offsetX = (screenWidth - nbColonnes * cellSize) / 2`
- `offsetY = (screenHeight - nbLignes * cellSize) / 2`
- Navigation : mémoriser `col = Math.floor((sourisX - offsetX) / cellSize)`

### Principes de code

- Règle `preload()` = que des `this.load.xxx()` ; tout le reste dans `create()`
- Un seul `Graphics` par couche, chaîner les traits avant un seul `strokePath()`
- Pas de commentaires inutiles, le code doit être explicite
- Tout ce qui est commenté (mort) doit être supprimé (git garde l'historique)
- Structure : les classes métier dans des dossiers dédiés (`grid/`, etc.)

### Notes diverses

- Mini Motorways : grille agrandit progressivement en cours de partie
- Pour les routes : intersection avec les cases, pas de placement libre
- Phaser Scale : FIT avec bandes vs RESIZE sans ratio fixe (FIT retenu pour le moment)
