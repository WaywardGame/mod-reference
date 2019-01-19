/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class PauseMenu extends Menu {
    private readonly modesButton;
    private readonly multiplayerButton;
    private readonly optionsRow;
    private readonly multiplayerRow;
    private readonly difficultyOptionIcons;
    private readonly pauseButton;
    private multiplayerOptionsMenu;
    constructor(uiApi: UiApi);
    showMultiplayerOptionsMenu(): this;
    private showWModesMenu;
    private onShow;
    private refreshDifficultyOptions;
    /**
     * Returns the formatted CSS url for the stat icon.
     */
    private getDifficultyOptionsIcon;
    private getHeadingText;
    private getParagraphText;
    private onQuitButtonClick;
}
