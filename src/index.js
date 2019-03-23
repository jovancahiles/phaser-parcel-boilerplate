import Phaser from 'phaser';
import MainScene from './MainScene';

const config = {
    type: Phaser.WEBGL,
    width: 480,
    height: 640,
    backgroundColor: 'black',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [
        MainScene
    ],
    pixelArt: true,
    roundPixels: true
}

const game = new Phaser.Game(config);