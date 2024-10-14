import Scene from '../Scene';
import Button from '../../common/Button'
import Sprite = PIXI.Sprite

export default class StartScene extends Scene {

    public static NAME = 'start_scene';

    public static CLICK_START: string = 'click_start'

    constructor(game) {
        super(game)
    }

    public init() {
        this.addChild(Sprite.from('./resources/images/sp_start_background.jpg'))

        var _stage2Container;
        var _btn2;

        _stage2Container = new PIXI.Container();
        this.addChild(_stage2Container);

        _btn2 = new Button('开始');
        _btn2.position.x = this.stageWidth / 2;
        _btn2.position.y = this.stageHeight / 2;
        _stage2Container.addChild(_btn2);
        _btn2.scale.x = _btn2.scale.y = 0;
        window.TweenMax.to(_btn2.scale, 1, {x: 1, y: 1, ease: window.Elastic.easeOut, delay: 0.3});

        _btn2.interactive = true;
        _btn2.mousedown = _btn2.touchstart = () => {
            this.sceneOut()
        }
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
