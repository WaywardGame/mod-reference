import { Dictionary, InterruptChoice, UiTranslation } from "language/ILanguage";
import { InterruptOptions } from "newui/menu/InterruptMenu";
import { InputOptions } from "newui/util/Input";
export declare enum ScreenId {
    None = 0,
    Splash = 1,
    Menu = 2,
    Game = 3,
    Interrupt = 4,
}
export declare enum MenuId {
    Back = -1,
    None = 0,
    About = 1,
    Changelog = 2,
    CharacterCreation = 3,
    CharacterSelection = 4,
    Friends = 5,
    GameEnd = 6,
    Highscores = 7,
    Interrupt = 8,
    JoinDedicatedServer = 9,
    LoadGame = 10,
    Main = 11,
    Mods = 12,
    Multiplayer = 13,
    NewGame = 14,
    News = 15,
    Options = 16,
    Pause = 17,
}
export declare enum TooltipLocation {
    AboveLeft = 0,
    AboveRight = 1,
    TopLeft = 2,
    TopRight = 3,
    CenterLeft = 4,
    CenterRight = 5,
    BottomLeft = 6,
    BottomRight = 7,
    BeneathLeft = 8,
    BeneathRight = 9,
    Mouse = 10,
}
export declare enum Namespace {
    SVG = "http://www.w3.org/2000/svg",
}
export interface UiElementOptions {
    visible?: boolean;
    elementType?: string;
    namespace?: Namespace;
    id?: string;
    classes?: string[];
    attributes?: {
        [key: string]: string | number;
    };
    tooltip?: TooltipOptionsVague | boolean;
    selectable?: SelectableLayer;
}
export declare enum SelectableLayer {
    Primary = 0,
    Secondary = 1,
    Tertiary = 2,
    Quaternary = 3,
}
export interface TooltipOptionsVague extends UiElementOptions {
    tooltip?: never;
    location: TooltipLocation;
    heading?: TextOrTranslationData;
    text?: TextOrTranslationData;
    maxWidth?: number;
    create?(...args: any[]): Promise<void>;
}
export declare type InterruptInputOptions = InputOptions & InterruptOptionsCanCancel;
export interface InterruptOptionsCanCancel {
    canCancel?: boolean;
}
export interface UiApi {
    visibleMenu: MenuId | undefined;
    visibleScreen: ScreenId | undefined;
    getMenu(): IMenu | undefined;
    getMenu(menuId: MenuId): IMenu | undefined;
    getMenu(menuId?: MenuId): IMenu | undefined;
    showMenu(menuId: MenuId, transition?: boolean, args?: {
        [key: string]: any;
    }, loadingInterrupt?: InterruptOptions): Promise<void>;
    hideMenu(): Promise<void>;
    backOneMenu(): Promise<void>;
    getScreen(): IUiScreen | undefined;
    getScreen(screenId: ScreenId): IUiScreen | undefined;
    showScreen(screenId: ScreenId, transition?: boolean): Promise<void>;
    hideScreen(): Promise<void>;
    hideScreen(screenId: ScreenId): Promise<void>;
    hideScreen(screen: IUiScreen): Promise<void>;
    isScreenVisible(screenId: ScreenId): boolean;
    removeScreen(screenId: ScreenId): Promise<void>;
    showTooltip(tooltipSource: IUiElement): Promise<void>;
    showTooltip(tooltipOptions: TooltipOptionsVague, source?: IUiElement): Promise<void>;
    showTooltip(tooltipOptions: TooltipOptionsVague | IUiElement, source?: IUiElement): Promise<void>;
    hideTooltip(): Promise<void>;
    hideTooltip(source: IUiElement): Promise<void>;
    dumpTooltip(): Promise<void>;
    dumpTooltip(source: IUiElement): Promise<void>;
    interruptWithChoice(title: TextOrTranslationData, choices: InterruptChoice[]): Promise<InterruptChoice>;
    interruptWithChoice(title: TextOrTranslationData, description: TextOrTranslationData, choices: InterruptChoice[]): Promise<InterruptChoice>;
    interruptWithConfirmation(title: TextOrTranslationData): Promise<boolean>;
    interruptWithConfirmation(title: TextOrTranslationData, description: TextOrTranslationData): Promise<boolean>;
    interruptWithInfo(title: TextOrTranslationData, description?: TextOrTranslationData): Promise<void>;
    interruptWithInput(title: TextOrTranslationData, options?: InterruptInputOptions): Promise<string>;
    interruptWithInput(title: TextOrTranslationData, description: TextOrTranslationData, options?: InterruptInputOptions): Promise<string>;
    interruptWithMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    showLoadingInterrupt(title: TextOrTranslationData, description?: TextOrTranslationData, canCancel?: boolean): Promise<void>;
    hideLoadingInterrupt(): Promise<void>;
    refreshTranslations(element: HTMLElement | IUiElement): void;
    getText(textOrTranslationData: TextOrTranslationData, shouldTrim?: false): string;
    toggleFullscreen(fullscreen?: boolean): void;
    playActivateSound(): void;
    playSelectSound(): void;
    setScale(scale: number): void;
    getMaximumScale(): number;
    setDialogOpacity(opacity: number): void;
    on(event: UiApiEvent, callback: (...args: any[]) => any): void;
}
export declare enum UiElementEvent {
    Show = 0,
    Hide = 1,
    Append = 2,
    Remove = 3,
    AddChild = 4,
    RemoveChild = 5,
    Change = 6,
}
export declare enum UiApiEvent {
    Resize = 0,
    Interrupt = 1,
    InterruptClose = 2,
}
export interface IUiElement<T = {}> {
    jsonData: DOMStringMap & T;
    data: DOMStringMap;
    trigger(event: UiElementEvent, ...args: any[]): Promise<any[]>;
    on(event: string | number | Array<string | number>, callback: (...args: any[]) => any): void;
    cancel(event: string | number | Array<string | number>, callback: (...args: any[]) => any): void;
    addClass(...classes: string[]): this;
    removeClass(...classes: string[]): this;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible: boolean, ...args: any[]): Promise<void>;
    appendTo(element: string | HTMLElement | IUiElement): this;
    append(elements: IterableOf<HTMLElement | IUiElement | undefined>): this;
    remove(removeFromParent?: boolean): Promise<void>;
    removeChild(child: IUiElement, removeChild?: boolean): void;
    findDescendants(selector: string): NodeListOf<Element>;
    contains(what: string | HTMLElement | IUiElement): boolean;
    showTooltip(): void;
}
export interface IUiScreen extends IUiElement {
    getMenu(): IMenu | undefined;
    getMenu(menuId: MenuId): IMenu | undefined;
    getMenu(menuId?: MenuId): IMenu | undefined;
}
export declare enum SelectDirection {
    Up = -1,
    Down = 1,
    Left = -2,
    Right = 2,
}
export interface IMenu extends IUiElement {
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    select(element: HTMLElement): void;
    getSelection(): HTMLElement;
}
export declare enum UiScreenEvent {
    ShowMenu = "ShowMenu",
    HideMenu = "HideMenu",
    GoBackMenu = "GoBackMenu",
    BindLoop = "BindLoop",
}
export interface TranslationData {
    dictionary: Dictionary;
    entry: number;
    args?: any[] | (() => any[]);
    properties?: string[];
    shouldTrim?: false;
}
export declare type TextOrTranslationData = string | UiTranslation | TranslationData;
export interface LoadMenuArgs {
    _wentBack: boolean;
}
export declare const minimumDialogOpacity = 0;
export declare const defaultDialogOpacity = 50;
