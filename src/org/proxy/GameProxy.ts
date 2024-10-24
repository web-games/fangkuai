import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import Game from '../Application';


export default class GameProxy extends Proxy implements IProxy {
    public static NAME: string = 'game_proxy';

    public pause = false;
    public game = null;
    public intervalId = null;

    constructor(game: Game) {
        super(GameProxy.NAME)
        this.game = game;
    }

    public resetGameData() {

    }
}