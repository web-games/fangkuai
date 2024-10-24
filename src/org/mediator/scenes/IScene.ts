import Game from '../../Application'

export default interface IScene {
  game: Game;
  stageWidth: Number;
  stageHeight: Number;

  init(data?: any): void;

  destroy(): void;

  removeAllChildren(displayObject: any): void;
}