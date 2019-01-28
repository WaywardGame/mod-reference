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
import InterruptChoice from "language/dictionary/InterruptChoice";
import { UiApi } from "newui/INewUi";
import MenuScreen from "newui/screen/screens/menu/component/MenuScreen";
import { InterruptOptions, InterruptType } from "newui/util/IInterrupt";
export default class InterruptScreen extends MenuScreen {
    readonly interruptType: InterruptType | undefined;
    private canBeInstant;
    constructor(uiApi: UiApi);
    backOneMenu(): this;
    interrupt(options: InterruptOptions): Promise<InterruptChoice | string | boolean | void>;
    hideLoadingInterrupt(): Promise<void>;
}
