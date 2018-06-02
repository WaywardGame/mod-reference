import { PlayerState } from "Enums";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IHighscore } from "save/data/ISaveDataGlobal";
export interface GameEndData {
    state: PlayerState;
    highscore: IHighscore;
}
export default class GameEndMenu extends Menu {
    static keepBackgroundAfterGameEnd: boolean;
    private highscore;
    private background;
    private gameEndData;
    constructor(uiApi: UiApi);
    setGameEndData(gameEndData: GameEndData): this;
    private onShow();
    private setMainMenuBackgroundToGameEndBackground();
}
