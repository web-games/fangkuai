import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import LoadingScene from './scenes/loading/LoadingScene'
import {SceneEvent} from './scenes/Scene';
import SceneCommand from '../command/SceneCommand';

export default class LoadSceneMediator extends Mediator implements IMediator {
    public static NAME: string = 'load_scene_mediator'

    constructor(viewComponent: any) {
        super(LoadSceneMediator.NAME, viewComponent)
        this.loadingScene.on(SceneEvent.INIT_COMPLETE, this.initComplete, this);
    }

    private initComplete() {
        var assetLoader = new PIXI['Loader']();
        assetLoader.add([
            './resources/images/loading_bar.png',
            './resources/images/loading_bar_bg.png',
            './resources/images/sp_button_background.png',
            './resources/images/sp_start_background.jpg',
            './resources/images/sp_end_background.jpg',
            './resources/images/sp_game_background.jpg',
        ]);
        assetLoader.once('complete', () => {
            this.sendNotification(SceneCommand.TO_START, {from: this.loadingScene});

            // this.sendNotification(SceneCommand.TO_GAME, {from: this.loadingScene});

            // this.sendNotification(SceneCommand.TO_END, {from: this.loadingScene})
        });
        assetLoader.on('progress', (e) => {
            console.log('加载百分比' + e.progress + '%');

            this.loadingScene.setProgress(e.progress);
        });
        assetLoader.load();

        var sounds = {
            'worldscenebgm': './resources/music/worldscenebgm.mp3',
            'gamescenebgm': './resources/music/gamescenebgm.mp3',
            'drop': './resources/music/drop.mp3',
            'swap': './resources/music/swap.mp3',
        };
        PIXI.sound.add(sounds);
    }

    public get loadingScene() {
        return this.viewComponent as LoadingScene
    }
}