import { InterruptChoice } from "language/ILanguage";
import Menu from "newui/element/Menu";
import UiElement from "newui/element/UiElement";
import { IInterruptMenuFactory, InterruptInputOptions, IUiElement, IUiScreen, MenuId, ScreenId, TextOrTranslationData, TooltipOptionsVague, UiApi } from "newui/INewUi";
import { InterruptOptions } from "newui/screen/screens/menu/menus/InterruptMenu";
import UiScreen from "newui/screen/UiScreen";
import InterruptFactory from "newui/util/InterruptFactory";
import Emitter from "utilities/Emitter";
export default class Ui extends Emitter implements UiApi {
    private storageElement;
    private readonly screenManager;
    private readonly tooltipManager;
    private scale;
    constructor();
    /**
     * Returns a menu instance, or `undefined` if the menu is not initialized.
     * @param menuId The ID of the menu to return.
     */
    getMenu(): Menu | undefined;
    getMenu(menuId: MenuId): Menu | undefined;
    /**
     * Returns the visible menu (top of the chain)
     */
    readonly visibleMenu: MenuId | undefined;
    /**
     * Shows a menu
     * @param menuId The id of the menu to show
     * @param transition Whether or not to transition the menu in
     * @param args Any arguments to provide the menu before it shows
     */
    showMenu(menuId: MenuId, transition?: boolean, args?: {
        [key: string]: any;
    }, loadingInterrupt?: InterruptOptions): Promise<void>;
    /**
     * Hides the current menu and resets the menu chain
     */
    hideMenu(): Promise<void>;
    /**
     * Returns to the previous menu
     */
    backOneMenu(args?: {
        [key: string]: any;
    }, transition?: boolean): Promise<void>;
    /**
     * Returns to the first menu in the menuChain
     */
    backToFirstMenu(args?: {
        [key: string]: any;
    }, transition?: boolean): Promise<void>;
    screens(): IterableIterator<UiScreen>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IUiScreen = UiScreen>(screenId: ScreenId): S | undefined;
    /**
     * Returns the visible screen
     */
    getVisibleScreen<S extends IUiScreen = UiScreen>(): S | undefined;
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
    hideScreen(screen: ScreenId | UiScreen): Promise<void>;
    /**
     * Removes the given screen.
     */
    removeScreen(screen: ScreenId | UiScreen): Promise<void>;
    initScreen<S extends IUiScreen = UiScreen>(screen: ScreenId): S;
    /**
     * Shows a tooltip
     * @param tooltip The options with which to construct the tooltip
     * @param source
     * 	The source element that the tooltip is for.
     * 	If there currently exists a tooltip for this element, it shows the old instead of creating a new tooltip.
     */
    showTooltip(tooltip: TooltipOptionsVague, source?: UiElement): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: UiElement): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IUiElement): Promise<void>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IUiElement): Promise<void>;
    /**
     * Returns a new interrupt factory with the given translation data.
     */
    interrupt(title: TextOrTranslationData, description?: TextOrTranslationData): InterruptFactory;
    /**
     * Returns an interrupt factory that can only be used to create menus.
     */
    interrupt(): IInterruptMenuFactory;
    /**
     * @deprecated
     */
    interruptWithChoice(title: TextOrTranslationData, choices: InterruptChoice[]): Promise<InterruptChoice>;
    /**
     * @deprecated
     */
    interruptWithChoice(title: TextOrTranslationData, description: TextOrTranslationData, choices: InterruptChoice[]): Promise<InterruptChoice>;
    /**
     * @deprecated
     */
    interruptWithConfirmation(title: TextOrTranslationData, description?: TextOrTranslationData): Promise<boolean>;
    /**
     * @deprecated
     */
    interruptWithInfo(title: TextOrTranslationData, description?: TextOrTranslationData): Promise<void>;
    /**
     * @deprecated
     */
    interruptWithInput(title: TextOrTranslationData, options?: InterruptInputOptions): Promise<string>;
    /**
     * @deprecated
     */
    interruptWithInput(title: TextOrTranslationData, description: TextOrTranslationData, options?: InterruptInputOptions): Promise<string>;
    /**
     * @deprecated
     */
    interruptWithMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    /**
     * @deprecated
     */
    showLoadingInterrupt(title: TextOrTranslationData, description?: TextOrTranslationData, canCancel?: boolean, specialType?: string): Promise<void>;
    hideLoadingInterrupt(): Promise<void>;
    /**
     * @param elements The elements to refresh translations inside
     */
    refreshTranslations(...elements: Array<HTMLElement | IUiElement>): void;
    /**
     * Returns the current translation of the given textOrTranslationData
     */
    getText(textOrTranslationData: TextOrTranslationData, shouldTrim?: boolean): string;
    storeElements(...elements: Array<HTMLElement | IUiElement>): void;
    /**
     * Plays the "click" sound effect, used for most interface interactions
     */
    playActivateSound(): void;
    /**
     * Plays the "select" sound effect, used for selecting things in the interface
     */
    playSelectSound(): void;
    /**
     * Toggles fullscreen
     */
    toggleFullscreen(): void;
    /**
     * @param fullscreen Whether or not fullscreen is enabled
     */
    toggleFullscreen(fullscreen?: boolean): void;
    /**
     * @param save Whether or not to save the new scale into options. Defaults to true.
     */
    setScale(scale: number, save?: boolean): void;
    /**
     * @param save Whether or not to save the new scale into options. Defaults to true.
     */
    setDialogOpacity(opacity?: number, save?: boolean): void;
    /**
     * Returns the maximum scale the screen size will allow (multiplier)
     */
    getMaximumScale(): number;
    /**
     * Sets the ui scale to the size configured in the options, capped by the maximum the screen size allows
     */
    private updateScale();
}
