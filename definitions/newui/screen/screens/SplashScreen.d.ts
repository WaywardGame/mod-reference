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
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
import Screen from "newui/screen/Screen";
export default class SplashScreen extends Screen {
    constructor();
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    protected create(): Promise<void>;
    private showNext;
}
