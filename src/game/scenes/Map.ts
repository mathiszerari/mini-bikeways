import { Scene } from "phaser";

export class MapScene extends Scene {
  // La clé unique de la scène, utilisée pour la démarrer
  constructor() {
    super("MapScene");
  }

  preload() {
    // ici on quadrillera l'écran afin de pouvoir placer les éléments
  }

  create() {
    // Fond de couleur unie
    this.cameras.main.setBackgroundColor("#1e2a38");

    const center_x = this.scale.width / 2;
    const center_y = this.scale.height / 2;

    let inhabitants = 3;

    const g = this.add.graphics();
    g.lineStyle(4, 0xffffff, 1);
    g.moveTo(0, center_y).lineTo(this.scale.width, center_y);
    g.moveTo(center_x, 0).lineTo(center_x, this.scale.height);

    // with inhabitants
    g.moveTo(0, center_y + (100 - inhabitants)).lineTo(this.scale.width, center_y + (100 - inhabitants));
    g.moveTo(center_x + (100 - inhabitants), 0).lineTo(center_x + (100 - inhabitants), this.scale.height);

    // with inhabitants reverse
    g.moveTo(0, center_y - (100 + inhabitants)).lineTo(this.scale.width, center_y - (100 + inhabitants));
    g.moveTo(center_x - (100 + inhabitants), 0).lineTo(center_x - (100 + inhabitants), this.scale.height);

    g.strokePath();
  }
}
