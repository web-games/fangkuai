import Text = PIXI.Text;
import Scene from '../Scene';
import Button from '../../components/Button'

export default class StartScene extends Scene {

    public static NAME = 'start_scene';

    public static CLICK_START: string = 'click_start'

    private _ticker = null;

    constructor(game) {
        super(game)
    }

    public init() {
        this.addBackground();

        let title_text = new Text('俄罗斯方块', {fill: 0xffffff, fontSize: 64});
        title_text.anchor.set(0.5, 0.5);
        title_text.x = this.stageWidth / 2;
        title_text.y = this.stageHeight / 2 - 160;
        this.addChild(title_text);

        var start_btn = new Button('开始游戏');
        start_btn.x = this.stageWidth / 2;
        start_btn.y = this.stageHeight / 2;
        this.addChild(start_btn);

        start_btn.interactive = true;
        start_btn.on('pointerdown', () => this.sceneOut())

        TweenMax.fromTo(title_text.scale, 1, {x: 0, y: 0}, {x: 1, y: 1, ease: Elastic.easeOut, delay: 0.3});
        TweenMax.fromTo(start_btn.scale, 1, {x: 0, y: 0}, {x: 1, y: 1, ease: Elastic.easeOut, delay: 0.45});
    }

    private async addBackground() {
        const stageWidth = this.stageWidth
        const stageHeight = this.stageHeight

        let fragmentShader = await fetch('./resources/shader/smog.frag').then((res) => res.text())

        const uniforms = {
            u_resolution: new PIXI.Point(stageWidth, stageHeight),
            alpha: 1.0,
            shift: 1.6,
            time: 0,
            speed: new PIXI.Point(0.1, 0.05)
        }
        // @ts-ignore
        const filter = new PIXI.Filter('', fragmentShader, uniforms)

        const sprite = PIXI.Sprite.from('./resources/images/pixi_v3_github-pad.png')
        sprite.filters = [filter]
        sprite.width = stageWidth
        sprite.height = stageHeight
        this.addChildAt(sprite, 0)

        // @ts-ignore
        const ticker = new PIXI.Ticker();
        ticker.add(function (deltaTime) {
            uniforms.time += 0.01
        });
        ticker.start();
        this._ticker = ticker;
    }

    public destroy() {
        this._ticker.stop();
    }

    public sceneIn() {
        TweenMax.to(this, 1, {alpha: 1});
    }

    public sceneOut() {
        TweenMax.to(this, 0.3, {
            alpha: 0,
            onComplete: () => {
                this.emit(StartScene.CLICK_START)
            }
        });
    }
}
