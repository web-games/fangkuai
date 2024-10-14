import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import INotification = puremvc.INotification;
import GameScene from './scenes/game/GameScene';
import GameProxy from '../proxy/GameProxy';
import {SceneEvent} from './scenes/Scene'
import GameCommand from '../command/GameCommand'
import Game from "../Game";
import {MapConfig} from "./scenes/game/MapConfig";

export default class GameSceneMediator extends Mediator implements IMediator {
    public static NAME: string = 'game_scene_mediator'

    constructor(viewComponent: any) {
        super(GameSceneMediator.NAME, viewComponent)
    }

    public listNotificationInterests(): string[] {
        return [
            GameCommand.BLOCK_MOVE_DOWN,
            GameCommand.BLOCK_MOVE_LEFT,
            GameCommand.BLOCK_MOVE_RIGHT,
            GameCommand.BLOCK_MOVE_END,
            GameCommand.BLOCK_ROTATE,
        ]
    }

    public handleNotification(notification: INotification): void {
        console.log('GameSceneMediator notification:', notification)
        let name = notification.getName()
        let body = notification.getBody()
        let type = notification.getType()

        switch (name) {
            case GameCommand.BLOCK_MOVE_DOWN:
                let success = this.gameScene.block.moveDown();
                if (!success) {
                    this.randomCreateBlock();
                }

                this.checkScore();

                this.checkOver();

                break;
            case GameCommand.BLOCK_MOVE_LEFT:
                this.gameScene.block.moveLeft();
                break;
            case GameCommand.BLOCK_MOVE_RIGHT:
                this.gameScene.block.moveRight();
                break;
            case GameCommand.BLOCK_MOVE_END:
                this.gameScene.block.moveEnd();
                break;
            case GameCommand.BLOCK_ROTATE:
                this.gameScene.block.rotate();
                break;
        }
    }

    randomCreateBlock() {
        this.gameScene.removeBlock();
        this.gameScene.block.mapGridArr.forEach(([row, col]) => {
            this.gameScene.map.setMapGridValue(row, col, 1)
        });
        this.gameScene.randomBlock();
    }

    checkScore() {
        for (let i = 0; i < this.gameScene.map.mapData.length; i++) {
            let rows = this.gameScene.map.mapData[i];
            let bo = rows.every(value => value !== 0);
            if (bo) {
                console.log(`第${i}行可以消除了`);
                this.gameScene.map.mapData.splice(i, 1);
                this.gameScene.map.mapData.unshift(new Array(MapConfig.cols).fill(0))
                this.gameScene.map.renderGrid();
            }
        }
    }

    checkOver() {
        let gameOver = this.gameScene.map.mapData[0].some(val => val !== 0)
        if (gameOver) {
            console.log('游戏结束')
            this.gameScene.removeBlock();
            this.gameScene.map.resetGridData();

            this.sendNotification(GameCommand.GAME_OVER);
        }
    }

    get gameScene(): GameScene {
        return (this.viewComponent as GameScene)
    }
}