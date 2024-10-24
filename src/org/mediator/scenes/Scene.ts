import Container = PIXI.Container
import Game from '../../Application';
import IScene from './IScene'

export const enum SceneEvent {
  INIT_COMPLETE = 'init_complete',
  CREATE_COMPLETE = 'create_complete',
}

export default class Scene extends Container implements IScene {
  public game: Game = null;
  public stageWidth: number = 0;
  public stageHeight: number = 0;

  constructor(game: Game) {
    super()
    this.game = game;
    this.stageWidth = game.stageWidth
    this.stageHeight = game.stageHeight
  }

  public init(data?: any) {

  }

  public destroy() {

  }

  public removeAllChildren(displayObject: any = this) {
    let {children} = displayObject
    if (children && children.length > 0) {
      let i = children.length - 1
      for (i; i >= 0; i--) {
        let ele = children[i]
        // console.log(i, ele.name);
        this.removeAllChildren(ele);

        ele.parent && ele.parent.removeChild(ele);
      }
    }
  }

  public removeThis() {
    this.parent && this.parent.removeChild(this);
  }
}