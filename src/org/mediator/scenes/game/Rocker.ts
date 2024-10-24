import Container = PIXI.Container
import Button from "../../components/Button";
import GameScene from "./GameScene";

/**
 * 控制杆
 * */
export default class Rocker extends Container {

    constructor() {
        super();

        var left = new Button('左移', {bgColor: 0xff0000});
        left.x = 100;
        this.addChild(left)
        left.interactive = true;
        left.on('pointerdown', () => this.parent.emit(GameScene.CLICK_LEFT));

        var right = new Button('右移', {bgColor: 0xff0000});
        right.x = 220;
        this.addChild(right)
        right.interactive = true;
        right.on('pointerdown', () => this.parent.emit(GameScene.CLICK_RIGHT));

        var bottom = new Button('下落', {bgColor: 0xff0000});
        bottom.x = 340;
        this.addChild(bottom)
        bottom.interactive = true;
        bottom.on('pointerdown', () => this.parent.emit(GameScene.CLICK_DOWN));

        var top = new Button('变换', {bgColor: 0xff0000});
        top.x = 460;
        this.addChild(top)
        top.interactive = true;
        top.on('pointerdown', () => this.parent.emit(GameScene.CLICK_UP));
    }
}