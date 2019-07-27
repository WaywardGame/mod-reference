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
import Component from "newui/component/Component";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
import { IMenu } from "newui/screen/screens/menu/component/IMenu";
export default class SelectionHandler {
    private readonly menu;
    private selection;
    constructor(menu: IMenu);
    select(component: Component): void;
    getSelection(): Component;
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    handleBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    private getSelectables;
    private changeSelection;
    private selectUp;
    private selectDown;
    private selectLeft;
    private selectRight;
    private selectDirection;
    private selectEnter;
}
