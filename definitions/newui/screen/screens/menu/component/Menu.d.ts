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
import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import Text, { Heading } from "newui/component/Text";
import { UiApi } from "newui/INewUi";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
import SelectionHandler from "newui/screen/screens/menu/component/SelectionHandler";
export declare enum MenuEvent {
    Tab = "Tab",
    GoBackFrom = "GoBackFrom",
    CancelBind = "CancelBind",
    EnterBind = "EnterBind"
}
export default class Menu extends Component implements IMenu, IHookHost {
    menuId: MenuId | string;
    canCancel: boolean | undefined;
    isSubmenu: boolean;
    readonly selection: SelectionHandler;
    protected readonly title: Heading;
    protected readonly buttonBack: BackButton;
    protected readonly description: Text;
    protected readonly content: Component;
    protected tabContainer: Component;
    private readonly tabs;
    constructor(uiApi: UiApi, menuId: MenuId | string);
    setTitle(initializer: (title: Heading) => Heading): void;
    setDescription(initializer: (title: Text) => Text): void;
    setOnBeforeShow(beforeShow: () => void | Promise<void>): void;
    show(): this;
    scrollToTop(): void;
    scrollToTabSection(tabId: string | number): this;
    addTabs(...tabs: ArrayOfIterablesOfOr<Tab>): void;
    getTabs(): IterableIterator<Tab<string | number | undefined>>;
    addSubtabs(tab: Tab): this;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    /**
     * When called in `show` or after `ComponentEvent.Show`, returns whether the menu was "went back to"
     * from a descendant menu.
     */
    protected wentBackTo(): boolean;
    protected onBeforeShow(): Promise<void> | void;
    private onShowMenu;
}
export declare enum TabEvent {
    EditSubtabs = "EditSubtabs"
}
export declare class Tab<I extends string | number | undefined = string | number | undefined> extends Button {
    readonly id: I;
    section: MenuSection | undefined;
    private _subtabs;
    readonly subtabs: Tab<string | number | undefined>[];
    constructor(api: UiApi, id: I);
    setSection(section: MenuSection): this;
    setSubTabs(...tabs: ArrayOfIterablesOfOr<Tab>): void;
}
export declare class MenuSection extends Component {
    readonly heading: Heading;
    readonly content: Component;
    constructor(api: UiApi);
    setTitle(initializer: (title: Heading) => Heading): this;
    addContent(...content: ArrayOfIterablesOfOr<Component | undefined>): this;
    dumpContent(): this;
}
export declare const enum BackButtonType {
    Back = 0,
    Check = 1
}
export declare class BackButton extends Button {
    constructor(api: UiApi);
    setType(type: BackButtonType): void;
}
