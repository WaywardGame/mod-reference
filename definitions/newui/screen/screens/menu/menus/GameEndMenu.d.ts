/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { PlayerState } from "Enums";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
import { IHighscore } from "save/data/ISaveDataGlobal";
export interface IGameEndData {
    state: PlayerState.Won | PlayerState.Dead;
    highscore: IHighscore;
}
export default class GameEndMenu extends Menu {
    private readonly highscore;
    private gameEndData;
    constructor(api: UiApi);
    setGameEndData(gameEndData: IGameEndData): this;
    private onShow;
    private getHeading;
    private getTagline;
    private getContinueButtonText;
    private continue;
    private exitToMenu;
    private share;
}
