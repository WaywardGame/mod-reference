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
    EnterBind = "EnterBind",
}
export default class Menu extends Component implements IMenu, IHookHost {
    menuId: MenuId | string;
    canCancel: boolean | undefined;
    isSubmenu: boolean;
    readonly selection: SelectionHandler;
    protected readonly title: Heading;
    protected readonly description: Text;
    protected readonly content: Component;
    protected tabContainer: Component;
    private readonly tabs;
    constructor(uiApi: UiApi, menuId: MenuId | string);
    setTitle(initializer: (title: Heading) => any): void;
    setDescription(initializer: (title: Text) => any): void;
    setOnBeforeShow(beforeShow: () => void | Promise<void>): void;
    show(): this;
    scrollToTop(): void;
    scrollToTabSection(tabId: string | number): this;
    addTabs(...tabs: ArrayOfTOrIterablesOfT<Tab>): void;
    addSubtabs(tab: Tab): this;
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    /**
     * When called in `show` or after `ComponentEvent.Show`, returns whether the menu was "went back to"
     * from a descendant menu.
     */
    protected wentBackTo(): boolean;
    protected onBeforeShow(): Promise<void> | void;
    private onShowMenu();
}
export declare enum TabEvent {
    EditSubtabs = "EditSubtabs",
}
export declare class Tab<I extends string | number | undefined = string | number | undefined> extends Button {
    readonly id: I;
    section: MenuSection | undefined;
    private _subtabs;
    readonly subtabs: Tab<string | number | undefined>[];
    constructor(api: UiApi, id: I);
    setSection(section: MenuSection): this;
    setSubTabs(...tabs: ArrayOfTOrIterablesOfT<Tab>): void;
}
export declare class MenuSection extends Component {
    readonly heading: Heading;
    readonly content: Component;
    constructor(api: UiApi);
    setTitle(initializer: (title: Heading) => Heading): this;
    addContent(...content: ArrayOfTOrIterablesOfT<Component | undefined>): this;
    dumpContent(): this;
}
