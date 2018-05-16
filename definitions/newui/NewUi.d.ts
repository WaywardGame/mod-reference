import { InterruptChoice } from "language/ILanguage";
import Component from "newui/component/Component";
import { IComponent, ITooltipOptionsVague, TextOrTranslationData } from "newui/component/IComponent";
import { IInterruptMenuFactory, UiApi } from "newui/INewUi";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import Screen from "newui/screen/Screen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import { InterruptInputOptions } from "newui/util/IInterrupt";
import InterruptFactory from "newui/util/InterruptFactory";
import Emitter from "utilities/Emitter";
export default class Ui extends Emitter implements UiApi<Screen> {
    private storageElement;
    private readonly screenManager;
    private readonly tooltipManager;
    private scale;
    constructor();
    screens(): IterableIterator<Screen>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IScreen = Screen>(screenId: ScreenId): S | undefined;
    /**
     * Returns the visible screen
     */
    getVisibleScreen<S extends IScreen = Screen>(): S | undefined;
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
    hideScreen(screen: ScreenId | Screen): Promise<void>;
    /**
     * Removes the given screen.
     */
    removeScreen(screen: ScreenId | Screen): Promise<void>;
    initScreen<S extends IScreen = Screen>(screen: ScreenId): S;
    /**
     * Shows a tooltip
     * @param tooltip The options with which to construct the tooltip
     * @param source
     * 	The source element that the tooltip is for.
     * 	If there currently exists a tooltip for this element, it shows the old instead of creating a new tooltip.
     */
    showTooltip(tooltip: ITooltipOptionsVague, source?: Component): Promise<void>;
    /**
     * Shows a tooltip
     * @param elementWithTooltip
     * 	The element the tooltip is for, that contains the options with which to construct the tooltip.
     */
    showTooltip(elementWithTooltip: Component): Promise<void>;
    /**
     * Hides the current tooltip
     * @param source The element the tooltip must be for to hide it
     */
    hideTooltip(source?: IComponent): Promise<void>;
    /**
     * Removes the current tooltip
     * @param source The element the tooltip must be for to remove it
     */
    dumpTooltip(source?: IComponent): Promise<void>;
    /**
     * Returns a new interrupt factory with the given translation data.
     */
    interrupt(title: TextOrTranslationData, description?: TextOrTranslationData): InterruptFactory;
    /**
     * Returns an interrupt factory that can only be used to create menus.
     */
    interrupt(): IInterruptMenuFactory;
    interruptWithChoice(title: TextOrTranslationData, choices: InterruptChoice[]): Promise<InterruptChoice>;
    interruptWithChoice(title: TextOrTranslationData, description: TextOrTranslationData, choices: InterruptChoice[]): Promise<InterruptChoice>;
    interruptWithConfirmation(title: TextOrTranslationData, description?: TextOrTranslationData): Promise<boolean>;
    interruptWithInfo(title: TextOrTranslationData, description?: TextOrTranslationData): Promise<void>;
    interruptWithInput(title: TextOrTranslationData, options?: InterruptInputOptions): Promise<string>;
    interruptWithInput(title: TextOrTranslationData, description: TextOrTranslationData, options?: InterruptInputOptions): Promise<string>;
    interruptWithMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    showLoadingInterrupt(title: TextOrTranslationData, description?: TextOrTranslationData, canCancel?: boolean, specialType?: string): Promise<void>;
    hideLoadingInterrupt(): Promise<void>;
    /**
     * @param elements The elements to refresh translations inside
     */
    refreshTranslations(...elements: Array<HTMLElement | IComponent>): void;
    /**
     * Returns the current translation of the given textOrTranslationData
     */
    getText(textOrTranslationData: TextOrTranslationData, shouldTrim?: boolean): string;
    storeElements(...elements: Array<HTMLElement | IComponent>): void;
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
    getScale(): number;
    /**
     * @param save Whether or not to save the new scale into options. Defaults to true.
     */
    setScale(scale: number, save?: boolean): void;
    /**
     * Returns the maximum scale the screen size will allow (multiplier)
     */
    getMaximumScale(): number;
    /**
     * @param save Whether or not to save the new scale into options. Defaults to true.
     */
    setDialogOpacity(opacity?: number, save?: boolean): void;
    /**
     * Sets the ui scale to the size configured in the options, capped by the maximum the screen size allows
     */
    private updateScale();
}
