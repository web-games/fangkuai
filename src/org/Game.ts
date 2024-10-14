export default class Game extends PIXI.Application {

  public static NAME = "SNAKE"

  public static COUNT = 0

  constructor(config) {
    super(config)
    Game.NAME = "SNAKE" + Game.COUNT++

    this.view.style.width = "100%";
    document.body.prepend(this.view)
  }

  public get stageWidth() {
    return this.screen.width
  }

  public get stageHeight() {
    return this.screen.height
  }
}