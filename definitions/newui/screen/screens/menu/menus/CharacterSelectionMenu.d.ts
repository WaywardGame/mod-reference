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
import { IPlayOptions } from "game/IGame";
import { UiApi } from "newui/INewUi";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class CharacterSelectionMenu extends Menu {
    gameOptions: Partial<IPlayOptions>;
    private sortRow;
    private headingNoCharacters;
    private characterRows;
    private characterCreationMenu;
    constructor(uiApi: UiApi);
    create(): void;
    refresh(): void;
    private onShow;
    private sortCharacters;
    private getCharacterCreationMenu;
}
