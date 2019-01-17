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
import InterruptChoice from "language/dictionary/InterruptChoice";
import { TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
export declare enum InterruptType {
    Info = 0,
    Confirm = 1,
    Choice = 2,
    Input = 3,
    Loading = 4,
    Menu = 5
}
export interface InterruptOptions {
    type?: InterruptType;
    title?: TranslationGenerator;
    description?: TranslationGenerator;
    choices?: InterruptChoice[];
    menuId?: MenuId;
    canCancel?: boolean | (() => any);
    isTopMenu?: boolean;
    specialType?: string;
    initializer?(menu: any): any;
    input?(input: IInput): any;
}
