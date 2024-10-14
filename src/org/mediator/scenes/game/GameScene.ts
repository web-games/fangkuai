import Container = PIXI.Container
import Graphics = PIXI.Graphics
import Sprite = PIXI.Sprite
import Text = PIXI.Text

import Scene from '../Scene';
import GameProxy from '../../../proxy/GameProxy'

import Rocker from './Rocker';
import Block from './Block';
import {MapConfig} from "./MapConfig";
import Map from "./Map";

export default class GameScene extends Scene {

    public static NAME = 'game_scene';

    private gameContainer = null;

    public map: Map = null;
    public block: Block = null;

    constructor(game) {
        super(game)
    }

    public init(gameProxy: GameProxy) {
        super.init(gameProxy);

        this.addChild(Sprite.from('./resources/images/sp_game_background.jpg'))

        this.gameContainer = new Container();
        this.gameContainer.x = (this.stageWidth - MapConfig.cols * MapConfig.gridWidth) / 2
        this.gameContainer.y = 100;
        this.addChild(this.gameContainer)

        this.map = new Map();
        this.gameContainer.addChild(this.map);

        this.randomBlock();
    }

    public removeBlock() {
        if (this.block) {
            this.gameContainer.removeChild(this.block)
        }
    }

    public randomBlock() {
        this.block = new Block(this.map);
        this.gameContainer.addChild(this.block);
    }
}