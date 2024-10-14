import SimpleCommand = puremvc.SimpleCommand;
import GameProxy from '../../proxy/GameProxy'
import Game from '../../Game'
import INotification = puremvc.INotification

export default class ModelPrepCommand extends SimpleCommand {
  constructor() {
    super()
  }

  public execute(note: INotification) {
    var game: Game = note.getBody() as Game
    this.facade.registerProxy(new GameProxy(game))
  }
}