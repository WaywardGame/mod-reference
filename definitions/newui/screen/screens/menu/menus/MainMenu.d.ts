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
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class MainMenu extends Menu {
    private continueGameButton;
    private multiplayerButton;
    private loadGameButton;
    private newGameButton;
    private playRow1;
    private playRow2;
    private aboutMenu;
    private changelogMenu;
    private newsMenu;
    constructor(api: UiApi);
    protected onBeforeShow(): Promise<void>;
    private create;
    private checkAndShowGameInterrupts;
    private getAboutMenu;
    private getChangelogMenu;
    private getNewsMenu;
}
