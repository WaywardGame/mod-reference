import { UiTranslation } from "language/ILanguage";
import { BlockRow } from "newui/element/BlockRow";
import Button, { ButtonEffect, ButtonOptions } from "newui/element/Button";
import Component from "newui/element/Component";
import { IComponent, IComponentOptions, TextOrTranslationData } from "newui/element/IComponent";
import UiText, { Heading, Paragraph, TextOptions } from "newui/element/Text";
import { SelectDirection, UiApi } from "newui/INewUi";
import { IScreen } from "newui/screen/IScreen";
import { IMenu, MenuId } from "newui/screen/screens/menu/element/IMenu";
export interface MenuOptions extends IComponentOptions {
    menuId: MenuId;
    title?: string | UiTranslation;
    description?: string | UiTranslation;
    tabs?: TabOptions[];
}
export declare enum MenuEvent {
    Load = "Load",
    Tab = "Tab",
    GoBackFrom = "GoBackFrom",
    CancelBind = "CancelBind",
    EnterBind = "EnterBind",
}
export default class Menu extends Component implements IMenu {
    screenHost: IScreen;
    protected contentWrapper: Component;
    protected canCancel: boolean | undefined;
    private selection;
    private elementTabs;
    private readonly sectionElements;
    private tabs;
    private _canShowTooltip;
    readonly canShowTooltip: boolean;
    private bindLoop;
    private readonly selectables;
    private readonly _title;
    title: TextOrTranslationData;
    private readonly _description;
    description: TextOrTranslationData | undefined;
    private _isSubmenu;
    isSubmenu: boolean;
    constructor(uiApi: UiApi, options: MenuOptions);
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
    addTabs(...tabs: MenuTabOptions[]): Tab[];
    dumpTabs(): Promise<void>;
    addButton(options: ButtonOptions): Button;
    addButtonRow(...buttons: ButtonOptions[]): BlockRow;
    addSpacer(): Component;
    addText(options: TextOptions): UiText;
    addHeading(options: TextOptions): Heading;
    addParagraph(...textOptionsArr: Array<UiText | TextOptions>): Paragraph;
    dump(): Promise<void>;
    append(...elements: Array<HTMLElement | IComponent | undefined | IterableOf<HTMLElement | IComponent | undefined>>): this;
    addSection(heading: TextOptions, content: IterableOf<Component | undefined>): MenuSection;
    addTabSection(tabOptions: MenuTabOptions, heading: TextOptions, content?: IterableOf<Component | undefined>): ITabSection;
    toggleTab(tabId: string | number, disabled?: boolean): void;
    load(...args: any[]): Promise<void>;
    protected updateBottomPadding(): void;
}
export interface ITabSection {
    tab: Tab;
    section: MenuSection;
}
export interface TabEffect extends ButtonEffect {
    scrollTo?: Component | (() => Component);
}
export interface TabOptions extends ButtonOptions {
    tabId: string | number;
    effect?: TabEffect | (() => any);
}
export interface MenuTabOptions extends TabOptions {
    subTabs?: IterableOf<TabOptions>;
}
export declare class Tab extends Button {
    subTabs: {
        [key: string]: Tab;
    };
    constructor(uiApi: UiApi, options: TabOptions);
}
export declare class MenuSection extends Component {
    readonly content: Component;
    constructor(uiApi: UiApi, heading: TextOptions, content: IterableOf<Component | undefined>);
}
