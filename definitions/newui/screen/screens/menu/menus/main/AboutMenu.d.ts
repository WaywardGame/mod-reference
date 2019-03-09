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
export declare enum Responsibility {
    Programming = 0,
    Design = 1,
    Web = 2,
    Art = 3,
    PR = 4,
    UX = 5,
    Music = 6
}
export default class AboutMenu extends Menu {
    constructor(uiApi: UiApi);
}
