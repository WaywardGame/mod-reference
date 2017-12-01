import { UiTranslation } from "language/ILanguage";
import { IMenu, IUiScreen, MenuId, SelectDirection, TextOrTranslationData, UiApi, UiElementOptions } from "newui/INewUi";
import { BlockRow } from "newui/util/BlockRow";
import Button, { ButtonEffect, ButtonOptions } from "newui/util/Button";
import UiText, { Heading, Paragraph, TextOptions } from "newui/util/Text";
import UiElement from "newui/util/UiElement";
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
}
export default class Menu<T = {}> extends UiElement<T> implements IMenu {
    screenHost: IUiScreen;
    protected contentWrapper: UiElement<any>;
    protected canCancel: boolean | undefined;
    private selection;
    private elementTabs;
    private sectionElements;
    private tabs;
    private bindLoop;
    private selectables;
    private _title;
    title: TextOrTranslationData;
    private _description;
    description: TextOrTranslationData | undefined;
    private _isSubmenu;
    isSubmenu: boolean;
    readonly bindingManagerId: number;
    constructor(uiApi: UiApi, options: MenuOptions);
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
    selectEnter(): void;
    addTabs(...tabs: MenuTabOptions[]): Tab<{}>[];
    dumpTabs(): Promise<void>;
    addButton(options: ButtonOptions): Button<{}>;
    addButtonRow(...buttons: ButtonOptions[]): BlockRow<{}>;
    addSpacer(): UiElement<{}>;
    addText(options: TextOptions): UiText<{}>;
    addHeading<HeadingT = {}>(options: TextOptions): Heading<HeadingT>;
    addParagraph(...textOptionsArr: Array<UiText | TextOptions>): Paragraph<{}>;
    dump(): Promise<void>;
    append(what: Array<HTMLElement | UiElement>): this;
    addSection(heading: TextOptions, content: Array<UiElement | undefined>): MenuSection;
    addTabSection(tabOptions: MenuTabOptions, heading: TextOptions, content?: Array<UiElement | undefined>): ITabSection;
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
    subTabs?: TabOptions[];
}
export declare class Tab<T = {}> extends Button<T> {
    subTabs: {
        [key: string]: Tab;
    };
    constructor(uiApi: UiApi, options: TabOptions);
}
export declare class MenuSection extends UiElement {
    readonly content: UiElement;
    constructor(uiApi: UiApi, heading: TextOptions, content: Array<UiElement | undefined>);
}
