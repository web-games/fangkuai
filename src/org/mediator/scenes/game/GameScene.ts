import Container = PIXI.Container
import Sprite = PIXI.Sprite
import Graphics = PIXI.Graphics

import Scene from '../Scene';
import GameProxy from '../../../proxy/GameProxy'

import Rocker from './Rocker';
import Block from './Block';
import {MapConfig} from "./MapConfig";
import Map from "./Map";

export default class GameScene extends Scene {

    public static NAME = 'game_scene';
    public static CLICK_LEFT: string = 'click_left'
    public static CLICK_RIGHT: string = 'click_right'
    public static CLICK_UP: string = 'click_up'
    public static CLICK_DOWN: string = 'click_down'

    public map: Map = null;
    public block: Block = null;
    public rocker: Rocker = null;

    private gameContainer = null;


    constructor(game) {
        super(game)
    }

    public init(gameProxy: GameProxy) {
        super.init(gameProxy);

        const screen_bg = new Graphics()
        screen_bg.beginFill(window.themeColor);
        screen_bg.drawRect(0, 0, this.stageWidth, this.stageHeight)
        screen_bg.endFill();
        screen_bg.x = 0;
        screen_bg.y = 0;
        this.addChild(screen_bg)

        this.gameContainer = new Container();
        this.gameContainer.x = (this.stageWidth - MapConfig.cols * MapConfig.gridWidth) / 2
        this.gameContainer.y = 50;
        this.addChild(this.gameContainer)

        this.map = new Map();
        this.gameContainer.addChild(this.map);

        this.rocker = new Rocker();
        this.rocker.x = 40;
        this.rocker.y = this.stageHeight - 50;
        this.addChild(this.rocker);

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