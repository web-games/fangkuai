import Scene from '../Scene';
import Button from '../../components/Button'
import Sprite = PIXI.Sprite

export default class StartScene extends Scene {

    public static NAME = 'start_scene';

    public static CLICK_START: string = 'click_start'

    constructor(game) {
        super(game)
    }

    public init() {
        // this.addChild(Sprite.from('./resources/images/sp_start_background.jpg'))
        var scene_bg = Sprite.from('./resources/images/sp_start_background.jpg')
        this.addChild(scene_bg);

        var start_btn = new Button('开始');
        start_btn.x = this.stageWidth / 2;
        start_btn.y = this.stageHeight / 2;
        start_btn.scale.x = start_btn.scale.y = 0;
        this.addChild(start_btn);

        start_btn.interactive = true;
        start_btn.on('pointerdown', () => {
            this.sceneOut()
        })

        window.TweenMax.to(start_btn.scale, 1, {x: 1, y: 1, ease: window.Elastic.easeOut, delay: 0.3});
    }

    public sceneIn() {
        window.TweenMax.to(this, 1, {alpha: 1});
    }

    public sceneOut() {
        window.TweenMax.to(this, 0.3, {
            alpha: 0,
            onComplete: () => {
                this.emit(StartScene.CLICK_START)
            }
        });
    }
}
