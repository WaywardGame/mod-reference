import { Bindable } from "Enums";
import { IHookHost } from "mod/IHookHost";
import { BindCatcherApi } from "newui/BindingManager";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import Text, { Heading } from "newui/component/Text";
import { SelectDirection, UiApi } from "newui/INewUi";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
export declare enum MenuEvent {
    Tab = "Tab",
    GoBackFrom = "GoBackFrom",
    CancelBind = "CancelBind",
    EnterBind = "EnterBind",
}
export default class Menu<I extends string | number | undefined = string | number | undefined> extends Component implements IMenu, IHookHost {
    menuId: MenuId;
    protected readonly title: Heading;
    protected readonly description: Text;
    protected readonly content: Component;
    protected tabContainer: Component;
    protected canCancel: boolean | undefined;
    private selection;
    private readonly selectables;
    private readonly tabs;
    isSubmenu: boolean;
    constructor(uiApi: UiApi, menuId: MenuId);
    onBindLoop(bindPressed: Bindable, api: BindCatcherApi): Bindable;
    setTitle(initializer: (title: Heading) => any): void;
    setDescription(initializer: (title: Text) => any): void;
    scrollToTop(): void;
    select(element: HTMLElement): void;
    getSelection(): HTMLElement;
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    changeSelection(n: number, force?: boolean, sound?: boolean): void;
    selectUp(): void;
    selectDown(): void;
    selectLeft(): void;
    selectRight(): void;
    selectDirection(direction: SelectDirection, range?: number, canEscapeLayer?: boolean, smartDifferenceVal?: number): void;
    selectEnter(): boolean;
    scrollToTabSection(tabId: string | number): this;
    addTabs(...tabs: ArrayOfTOrIterablesOfT<Tab>): void;
    /**
     * When called in `show` or after `ComponentEvent.Show`, returns whether the menu was "went back to"
     * from a descendant menu.
     */
    protected wentBackTo(): boolean;
    private onShowMenu();
}
export declare class Tab<I extends string | number | undefined = string | number | undefined> extends Button {
    readonly id: I;
    subtabs: Tab[];
    section: MenuSection | undefined;
    constructor(uiApi: UiApi, id: I);
    setSection(section: MenuSection): this;
    setSubTabs(...tabs: ArrayOfTOrIterablesOfT<Tab>): void;
}
export declare class MenuSection extends Component {
    readonly heading: Heading;
    readonly content: Component;
    constructor(uiApi: UiApi);
    setTitle(initializer: (title: Heading) => any): this;
    addContent(...content: ArrayOfTOrIterablesOfT<Component | undefined>): this;
    dumpContent(): this;
}
