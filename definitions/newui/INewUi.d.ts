import { InterruptChoice } from "language/ILanguage";
import { IComponent, ITooltipOptionsVague, TextOrTranslationData } from "newui/component/IComponent";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import { InterruptInputOptions } from "newui/util/IInterrupt";
import Emitter from "utilities/Emitter";
export interface UiApi<U extends IScreen = IScreen> extends Emitter {
    /**
     * Generator for all existing screens.
     */
    screens(): IterableIterator<U>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IScreen = U>(screenId: ScreenId): S | undefined;
    /**
     * Returns the visible screen
     */
    getVisibleScreen<S extends IScreen = U>(): S | undefined;
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
    initScreen<S extends IScreen = U>(screen: ScreenId): S;
    showTooltip(tooltipSource: IComponent): Promise<void>;
    showTooltip(tooltipOptions: ITooltipOptionsVague, source?: IComponent): Promise<void>;
    showTooltip(tooltipOptions: ITooltipOptionsVague | IComponent, source?: IComponent): Promise<void>;
    hideTooltip(): Promise<void>;
    hideTooltip(source: IComponent): Promise<void>;
    dumpTooltip(): Promise<void>;
    dumpTooltip(source: IComponent): Promise<void>;
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
    refreshTranslations(element: HTMLElement | IComponent): void;
    getText(textOrTranslationData: TextOrTranslationData, shouldTrim?: false): string;
    toggleFullscreen(fullscreen?: boolean): void;
    storeElements(...elements: Array<HTMLElement | IComponent>): void;
    playActivateSound(): void;
    playSelectSound(): void;
    getScale(): number;
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
export declare const DIALOG_OPACITY_MIN = 0;
export declare const DIALOG_OPACITY_DEFAULT = 80;
export declare const NEWUI_HOOK_PRIORITY = -99999999999;
