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
import { UiTranslation } from "language/ILanguage";
import { IRefreshable } from "newui/component/Refreshable";
import Dialog from "newui/screen/screens/game/component/Dialog";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export default class QuickSettingsDialog extends Dialog implements IRefreshable {
    private readonly refreshables;
    constructor(api: IGameScreenApi);
    getID(): DialogId;
    getName(): UiTranslation;
    refresh(): this;
    private addRefreshable;
}
