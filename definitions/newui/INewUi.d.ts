import { Dictionary, InterruptChoice, UiTranslation } from "language/ILanguage";
import { InputOptions } from "newui/element/Input";
import { InterruptOptions } from "newui/screen/screens/menu/menus/InterruptMenu";
import Emitter from "utilities/Emitter";
export declare enum ScreenId {
    None = 0,
    Game = 1,
    Interrupt = 2,
    Menu = 3,
    Splash = 4,
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
    create?(tooltip: IUiElement): Promise<void>;
}
export declare type InterruptInputOptions = InputOptions & InterruptOptionsCanCancel;
export interface InterruptOptionsCanCancel {
    canCancel?: boolean;
}
export interface UiApi extends Emitter {
    visibleMenu: MenuId | undefined;
    getMenu(): IMenu | undefined;
    getMenu(menuId: MenuId): IMenu | undefined;
    getMenu(menuId?: MenuId): IMenu | undefined;
    showMenu(menuId: MenuId, transition?: boolean, args?: {
        [key: string]: any;
    }, loadingInterrupt?: InterruptOptions): Promise<void>;
    hideMenu(): Promise<void>;
    backOneMenu(): Promise<void>;
    /**
     * Generator for all existing screens.
     */
    screens(): IterableIterator<IUiScreen>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IUiScreen = IUiScreen>(screenId: ScreenId): S | undefined;
    /**
     * Returns the visible screen
     */
    getVisibleScreen<S extends IUiScreen = IUiScreen>(): S | undefined;
    /**
     * Returns if the given screen is visible
     */
    isScreenVisible(screenId: ScreenId): boolean;
    /**
     * Shows a screen
     * @param screenId The id of the screen to show
     * @param transition Whether or not to transition the screen in
     * @param replaceCurrent Defaults to true. If the current screen is not replaced, the new screen will render above the old.
     */
    showScreen(screenId: ScreenId, transition?: boolean, replaceCurrent?: boolean, ...args: any[]): Promise<void>;
    /**
     * Hides the given screen.
     */
    hideScreen(screen: ScreenId | IUiScreen): Promise<void>;
    /**
     * Removes the given screen.
     */
    removeScreen(screen: ScreenId | IUiScreen): Promise<void>;
    /**
     * Initializes a screen by its ID.
     */
    initScreen<S extends IUiScreen = IUiScreen>(screen: ScreenId): S;
    showTooltip(tooltipSource: IUiElement): Promise<void>;
    showTooltip(tooltipOptions: TooltipOptionsVague, source?: IUiElement): Promise<void>;
    showTooltip(tooltipOptions: TooltipOptionsVague | IUiElement, source?: IUiElement): Promise<void>;
    hideTooltip(): Promise<void>;
    hideTooltip(source: IUiElement): Promise<void>;
    dumpTooltip(): Promise<void>;
    dumpTooltip(source: IUiElement): Promise<void>;
    interrupt(title: TextOrTranslationData, description?: TextOrTranslationData): IInterruptFactory;
    interrupt(): IInterruptMenuFactory;
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
    storeElements(...elements: Array<HTMLElement | IUiElement>): void;
    playActivateSound(): void;
    playSelectSound(): void;
    setScale(scale: number): void;
    getMaximumScale(): number;
    setDialogOpacity(opacity: number): void;
}
export interface IInterruptFactory extends IInterruptMenuFactory {
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(options?: InterruptInputOptions): Promise<string>;
    withLoading(canCancel?: boolean, specialType?: string): Promise<void>;
}
export interface IInterruptMenuFactory {
    withMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
}
export declare enum UiElementEvent {
    Show = 0,
    Hide = 1,
    Append = 2,
    Remove = 3,
    AddChild = 4,
    RemoveChild = 5,
    Change = 6,
    Tooltip = 7,
}
export declare enum UiApiEvent {
    Resize = 0,
    Interrupt = 1,
    InterruptClose = 2,
}
export interface IUiElement<T = any> extends Emitter {
    jsonData: DOMStringMap & T;
    data: DOMStringMap;
    addClass(...classes: string[]): this;
    removeClass(...classes: string[]): this;
    isVisible(): boolean;
    show(...args: any[]): Promise<void>;
    hide(...args: any[]): Promise<void>;
    toggle(visible: boolean, ...args: any[]): Promise<void>;
    /**
     * Moves this element to a hidden element, in order to retain any information the element had.
     * This allows the element to be re-appended later without re-adding event handlers, CSS, or
     * any other data.
     */
    store(): void;
    appendTo(element: string | HTMLElement | IUiElement): this;
    append(elements: IterableOf<HTMLElement | IUiElement | undefined>): this;
    remove(removeFromParent?: boolean): Promise<void>;
    removeChild(child: IUiElement, removeChild?: boolean): void;
    findDescendants(selector: string): NodeListOf<Element>;
    contains(what: string | HTMLElement | IUiElement): boolean;
    showTooltip(): Promise<void>;
}
export interface IUiScreen extends IUiElement {
    retain?: boolean;
    getMenu(): IMenu | undefined;
    getMenu(menuId: MenuId): IMenu | undefined;
    getMenu(menuId?: MenuId): IMenu | undefined;
    /**
     * Shows a tooltip
     * @param tooltip The options with which to construct the tooltip
     * @param source
     * 	The source element that the tooltip is for.
     * 	If there currently exists a tooltip for this element, it shows the old instead of creating a new tooltip.
     */
    showTooltip(tooltip: TooltipOptionsVague, source?: IUiElement): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: IUiElement): Promise<void>;
    showTooltip(): Promise<void>;
    showTooltip(tooltipElementOrOptions: TooltipOptionsVague | IUiElement, source?: IUiElement): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     * @returns Whether a tooltip was hidden.
     */
    hideTooltip(source?: IUiElement): Promise<boolean>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IUiElement): Promise<boolean>;
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
export interface BaseTranslationData {
    dictionary: Dictionary;
    entry: number;
    args?: any[] | (() => any[]);
    properties?: string[];
    shouldTrim?: false;
}
export declare type TranslationData = BaseTranslationData | (Partial<BaseTranslationData> & {
    entry: UiTranslation;
});
export declare type TextOrTranslationData = string | UiTranslation | TranslationData;
export interface LoadMenuArgs {
    _wentBack: boolean;
}
export declare const minimumDialogOpacity = 0;
export declare const defaultDialogOpacity = 50;
