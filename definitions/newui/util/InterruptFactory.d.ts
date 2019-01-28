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
import { TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { IInterruptFactory, UiApi } from "newui/INewUi";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
export default class InterruptFactory implements IInterruptFactory {
    private readonly api;
    private readonly title;
    private description;
    private canCancel;
    private isTopMenu;
    private executed;
    constructor(api: UiApi, title?: TranslationGenerator, description?: TranslationGenerator);
    setTopMenu(topMenu?: boolean): this;
    setCanCancel(canCancel?: boolean): this;
    withDescription(description?: TranslationGenerator): this;
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(input?: (input: IInput) => any): Promise<string>;
    withMenu<M extends IMenu = IMenu>(menuId: MenuId, initializer?: (menu: M) => any): Promise<void>;
    withLoading(until?: Promise<any> | (() => Promise<any>), canCancel?: boolean | (() => any), specialType?: string): Promise<void>;
    private execute;
    private warnIfNeverShown;
}
