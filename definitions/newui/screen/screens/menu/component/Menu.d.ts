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
import { Events } from "event/EventBuses";
import { IEventEmitter } from "event/EventEmitter";
import { IHookHost } from "mod/IHookHost";
import { BlockRow } from "newui/component/BlockRow";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { IComponent } from "newui/component/IComponent";
import Text, { Heading } from "newui/component/Text";
import { Bindable, BindCatcherApi } from "newui/IBindingManager";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
import SelectionHandler from "newui/screen/screens/menu/component/SelectionHandler";
export default class Menu extends Component implements IMenu, IHookHost {
    event: IEventEmitter<this, Events<IMenu>>;
    menuId: MenuId | string;
    canCancel: boolean | undefined;
    readonly isSubmenu: boolean;
    readonly selection: SelectionHandler;
    readonly buttonBack: BackButton;
    confirmButtons: ConfirmButtonHandler;
    readonly title: Heading;
    readonly description: Text;
    readonly header: BlockRow;
    readonly staticContent: Component;
    readonly content: Component;
    tabContainer: Component;
    readonly tabs: Map<string | number, Tab<string | number | undefined>>;
    constructor(menuId: MenuId | string);
    setTitle(initializer: (title: Heading) => Heading): this;
    setDescription(initializer: (title: Text) => Text): this;
    setIsSubmenu(submenu?: boolean): this;
    setOnBeforeShow(beforeShow: () => void | Promise<void>): this;
    show(): this;
    scrollToTop(): void;
    scrollToTabSection(tabId: string | number): this;
    addTabs(...tabs: ArrayOfIterablesOr<Tab>): void;
    getTabs(): import("../../../../../utilities/stream/Stream").default<Tab<string | number | undefined>>;
    addSubtabs(tab: Tab): this;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    /**
     * When called in `show` or after `ComponentEvent.Show`, returns whether the menu was "went back to"
     * from a descendant menu.
     */
    protected wentBackTo(): boolean;
    protected onBeforeShow(): Promise<void> | void;
    protected onShowMenu(): void;
}
interface ITabEvents extends Events<Button> {
    editSubtabs(): any;
}
export declare class Tab<I extends string | number | undefined = string | number | undefined> extends Button {
    event: IEventEmitter<this, ITabEvents>;
    readonly id: I;
    section: MenuSection | undefined;
    private _subtabs;
    readonly subtabs: Tab<string | number | undefined>[];
    constructor(id: I);
    setSection(section: MenuSection): this;
    setSubTabs(...tabs: ArrayOfIterablesOr<Tab>): void;
}
export declare class MenuSection extends Component {
    readonly heading: Heading;
    readonly content: Component;
    constructor();
    setTitle(initializer: (title: Heading) => Heading): this;
    addContent(...content: ArrayOfIterablesOr<IComponent | undefined>): this;
    dumpContent(): this;
}
export declare class BackButton extends Button {
    constructor();
}
export declare class ConfirmButtonHandler {
    private readonly menu;
    readonly buttons: ConfirmButton[];
    readonly heading: Heading;
    constructor(menu: Menu);
    initialize(initializer: (button: ConfirmButton) => any): this;
    setLabel(initializer: (heading: Heading) => any): this;
}
export declare class ConfirmButton extends Button {
    constructor();
}
export {};
