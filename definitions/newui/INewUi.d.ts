import { InterruptChoice } from "language/ILanguage";
import { ITooltipOptionsVague, IUiElement, TextOrTranslationData } from "newui/element/IUiElement";
import { IUiScreen, ScreenId } from "newui/screen/IUiScreen";
import { MenuId } from "newui/screen/screens/menu/element/IMenu";
import { InterruptInputOptions } from "newui/util/IInterrupt";
import Emitter from "utilities/Emitter";
export interface UiApi<U extends IUiScreen = IUiScreen> extends Emitter {
    /**
     * Generator for all existing screens.
     */
    screens(): IterableIterator<U>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IUiScreen = U>(screenId: ScreenId): S | undefined;
    /**
     * Returns the visible screen
     */
    getVisibleScreen<S extends IUiScreen = U>(): S | undefined;
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
    hideScreen(screen: ScreenId | U): Promise<void>;
    /**
     * Removes the given screen.
     */
    removeScreen(screen: ScreenId | U): Promise<void>;
    /**
     * Initializes a screen by its ID.
     */
    initScreen<S extends IUiScreen = U>(screen: ScreenId): S;
    showTooltip(tooltipSource: IUiElement): Promise<void>;
    showTooltip(tooltipOptions: ITooltipOptionsVague, source?: IUiElement): Promise<void>;
    showTooltip(tooltipOptions: ITooltipOptionsVague | IUiElement, source?: IUiElement): Promise<void>;
    hideTooltip(): Promise<void>;
    hideTooltip(source: IUiElement): Promise<void>;
    dumpTooltip(): Promise<void>;
    dumpTooltip(source: IUiElement): Promise<void>;
    /**
     * Returns a new interrupt factory with the given translation data.
     */
    interrupt(title: TextOrTranslationData, description?: TextOrTranslationData): IInterruptFactory;
    /**
     * Returns an interrupt factory that can only be used to create menus.
     */
    interrupt(): IInterruptMenuFactory;
    /**
     * Returns a promise that will resolve when the loading interrupt has been hidden.
     */
    hideLoadingInterrupt(): Promise<void>;
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
    interruptWithConfirmation(title: TextOrTranslationData): Promise<boolean>;
    /**
     * @deprecated
     */
    interruptWithConfirmation(title: TextOrTranslationData, description: TextOrTranslationData): Promise<boolean>;
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
    showLoadingInterrupt(title: TextOrTranslationData, description?: TextOrTranslationData, canCancel?: boolean): Promise<void>;
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
export declare enum UiApiEvent {
    Resize = 0,
    Interrupt = 1,
    InterruptClose = 2,
}
export declare enum SelectDirection {
    Up = -1,
    Down = 1,
    Left = -2,
    Right = 2,
}
export interface LoadMenuArgs {
    _wentBack: boolean;
}
export declare const minimumDialogOpacity = 0;
export declare const defaultDialogOpacity = 50;
