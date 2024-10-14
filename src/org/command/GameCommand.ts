import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification

import SceneCommand from '../command/SceneCommand';
import GameProxy from '../proxy/GameProxy';
import GameSceneMediator from '../mediator/GameSceneMediator';
import GameScene from '../mediator/scenes/game/GameScene';

export default class GameCommand extends SimpleCommand implements ICommand {

    public static GAME_START = 'game_start';
    public static GAME_OVER = 'game_over';

    public static BLOCK_MOVE_DOWN = 'block_move_down';
    public static BLOCK_MOVE_LEFT = 'block_move_left';
    public static BLOCK_MOVE_RIGHT = 'block_move_right';
    public static BLOCK_MOVE_END = 'block_move_end';
    public static BLOCK_ROTATE = 'block_rotate';

    constructor() {
        super()
    }

    public execute(notification: INotification) {
        console.log('SceneCommand notification:', notification)

        let name = notification.getName()
        let body = notification.getBody()

        let gameProxy: GameProxy = this.facade.retrieveProxy(GameProxy.NAME) as GameProxy

        switch (name) {
            case GameCommand.GAME_START:
                $(document).on('keydown', (event) => {
                    // console.log(event)
                    switch (event.keyCode) {
                        case 32: // 空格
                            gameProxy.pause = !gameProxy.pause;
                            break;
                        case 37: // 左
                            this.sendNotification(GameCommand.BLOCK_MOVE_LEFT)
                            break;
                        case 38: // 上
                            this.sendNotification(GameCommand.BLOCK_ROTATE)
                            break;
                        case 39: // 右
                            this.sendNotification(GameCommand.BLOCK_MOVE_RIGHT)
                            break;
                        case 40: // 下
                            this.sendNotification(GameCommand.BLOCK_MOVE_END)
                            break;
                    }
                })

                gameProxy.resetGameData();

                const id = setInterval(() => {
                    if (gameProxy.pause)
                        return;

                    this.sendNotification(GameCommand.BLOCK_MOVE_DOWN)
                }, 1000);

                gameProxy.intervalId = id;
                break;
            case GameCommand.GAME_OVER:
                $(document).off('keydown');

                if (gameProxy.intervalId) {
                    clearInterval(gameProxy.intervalId);
                    gameProxy.intervalId = null;
                }

                let gameScene: GameScene = (this.facade.retrieveMediator(GameSceneMediator.NAME) as GameSceneMediator).gameScene;
                this.sendNotification(SceneCommand.TO_END, {from: gameScene});
                break;
        }
    }
}