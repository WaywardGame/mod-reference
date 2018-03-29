import { UiTranslation } from "language/ILanguage";
import { BlockRow } from "newui/element/BlockRow";
import Button, { ButtonEffect, ButtonOptions } from "newui/element/Button";
import UiText, { Heading, Paragraph, TextOptions } from "newui/element/Text";
import UiElement from "newui/element/UiElement";
import { IMenu, IUiElement, IUiScreen, MenuId, SelectDirection, TextOrTranslationData, UiApi, UiElementOptions } from "newui/INewUi";
export interface MenuOptions extends UiElementOptions {
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
export default class Menu<T = any> extends UiElement<T> implements IMenu {
    screenHost: IUiScreen;
    protected contentWrapper: UiElement;
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
    addTabs(...tabs: MenuTabOptions[]): Tab<any>[];
    dumpTabs(): Promise<void>;
    addButton(options: ButtonOptions): Button<any>;
    addButtonRow(...buttons: ButtonOptions[]): BlockRow<any>;
    addSpacer(): UiElement<any>;
    addText(options: TextOptions): UiText<any>;
    addHeading<HeadingT = any>(options: TextOptions): Heading<HeadingT>;
    addParagraph(...textOptionsArr: Array<UiText | TextOptions>): Paragraph<any>;
    dump(): Promise<void>;
    append(what: IterableOf<HTMLElement | IUiElement | undefined>): this;
    addSection(heading: TextOptions, content: IterableOf<UiElement | undefined>): MenuSection;
    addTabSection(tabOptions: MenuTabOptions, heading: TextOptions, content?: IterableOf<UiElement | undefined>): ITabSection;
    toggleTab(tabId: string | number, disabled?: boolean): void;
    load(...args: any[]): Promise<void>;
    protected updateBottomPadding(): void;
}
export interface ITabSection {
    tab: Tab;
    section: MenuSection;
}
export interface TabEffect extends ButtonEffect {
    scrollTo?: UiElement | (() => UiElement);
}
export interface TabOptions extends ButtonOptions {
    tabId: string | number;
    effect?: TabEffect | (() => any);
}
export interface MenuTabOptions extends TabOptions {
    subTabs?: IterableOf<TabOptions>;
}
export declare class Tab<T = any> extends Button<T> {
    subTabs: {
        [key: string]: Tab;
    };
    constructor(uiApi: UiApi, options: TabOptions);
}
export declare class MenuSection extends UiElement {
    readonly content: UiElement;
    constructor(uiApi: UiApi, heading: TextOptions, content: IterableOf<UiElement | undefined>);
}
