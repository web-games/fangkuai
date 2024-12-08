import Game from "./org/Application"
import ApplicationFacade from "./org/ApplicationFacade";

window.themeColor = 0x327bfb;

ApplicationFacade.getInstance(Game.NAME).startup();