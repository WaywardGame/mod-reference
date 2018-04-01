import { PlayerState } from "Enums";
import Menu from "newui/element/Menu";
import { UiApi } from "newui/INewUi";
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
