import { PlayerState } from "Enums";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IHighscore } from "save/data/ISaveDataGlobal";
export interface GameEndMenuOptions {
    state: PlayerState;
    highscore: IHighscore;
}
export default class GameEndMenu extends Menu {
    static keepBackgroundAfterGameEnd: boolean;
    private highscore;
    private background;
    constructor(uiApi: UiApi);
}
