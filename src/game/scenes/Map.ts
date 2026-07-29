import { Scene } from 'phaser';

export class MapScene extends Scene {
    // La clé unique de la scène, utilisée pour la démarrer
    constructor() {
        super('MapScene');
    }

    preload() {
      // ici on quadrillera l'écran afin de pouvoir placer les éléments
      
    }

    create() {
        // Fond de couleur unie
        this.cameras.main.setBackgroundColor('#1e2a38');

        // Un texte au centre pour confirmer que la scène marche
        this.add.text(512, 100, 'Mini Bikeways', {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        // Ton vélo au centre de l'écran
        // this.bike = this.add.image(512, 400, 'bike');
    }

    // update() {
    //     // Déplace le vélo avec les flèches gauche/droite
    //     if (this.cursors.left.isDown) {
    //         this.bike.x -= 4;
    //     } else if (this.cursors.right.isDown) {
    //         this.bike.x += 4;
    //     }
    // }

    // Propriétés typées (TypeScript)
    // private bike!: Phaser.GameObjects.Image;
    // private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
}
