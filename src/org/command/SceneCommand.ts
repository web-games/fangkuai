import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification

import Game from '../Application';
import Scene from '../mediator/scenes/Scene';
import ApplicationFacade from '../ApplicationFacade';

import LoadingScene from '../mediator/scenes/loading/LoadingScene';
import LoadingSceneMediator from '../mediator/LoadingSceneMediator';

import StartScene from '../mediator/scenes/start/StartScene';
import StartSceneMediator from '../mediator/StartSceneMediator';

import GameScene from '../mediator/scenes/game/GameScene';
import GameSceneMediator from '../mediator/GameSceneMediator';

import EndScene from '../mediator/scenes/end/EndScene';
import EndSceneMediator from '../mediator/EndSceneMediator';

import GameProxy from '../proxy/GameProxy';
import GameCommand from './GameCommand'

export default class SceneCommand extends SimpleCommand implements ICommand {

    public static TO_LOADING = 'to_loading'

    public static TO_START = 'to_start'

    public static TO_GAME = 'to_game'

    public static TO_END = 'to_end'

    constructor() {
        super()
    }

    public execute(notification: INotification) {
        console.log('SceneCommand notification:', notification)

        let game: Game = (this.facade as ApplicationFacade).application;
        let name = notification.getName()
        let body = notification.getBody()
        let {from} = body

        if (from && from instanceof Scene) {
            from = from as Scene;
            from.destroy();
            from.removeAllChildren();
            from.removeThis();
        }

        switch (name) {
            case SceneCommand.TO_LOADING:
                let loadingScene: LoadingScene = (this.facade.retrieveMediator(LoadingSceneMediator.NAME) as LoadingSceneMediator).loadingScene
                game.stage.addChild(loadingScene)
                loadingScene.init();
                break
            case SceneCommand.TO_START:
                let startScene: StartScene = (this.facade.retrieveMediator(StartSceneMediator.NAME) as StartSceneMediator).startScene;
                game.stage.addChild(startScene)
                startScene.sceneIn();
                startScene.init();

                PIXI.sound.stopAll();

                PIXI.sound.play("worldscenebgm", {loop: true})
                break
            case SceneCommand.TO_GAME:
                let gameProxy = this.facade.retrieveProxy(GameProxy.NAME) as GameProxy
                let gameScene: GameScene = (this.facade.retrieveMediator(GameSceneMediator.NAME) as GameSceneMediator).gameScene;
                game.stage.addChild(gameScene)
                gameScene.init(gameProxy);

                this.sendNotification(GameCommand.GAME_START);

                PIXI.sound.stopAll();

                PIXI.sound.play("gamescenebgm", {loop: true})
                break
            case SceneCommand.TO_END:
                PIXI.sound.stop("gamescenebgm", {loop: true})

                PIXI.sound.play("worldscenebgm", {loop: true})

                let endScene: EndScene = (this.facade.retrieveMediator(EndSceneMediator.NAME) as EndSceneMediator).endScene;
                game.stage.addChild(endScene)
                endScene.init();
                break
        }
    }
}