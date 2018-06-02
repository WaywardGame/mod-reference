import { InterruptChoice } from "language/ILanguage";
import { IComponent, ITooltip, TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import { MenuId } from "newui/screen/screens/menu/component/IMenu";
import Emitter from "utilities/Emitter";
export interface UiApi extends Emitter {
    tooltips: ITooltipManager;
    /**
     * Generator for all existing screens.
     */
    screens(): IterableIterator<IScreen>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IScreen = IScreen>(screenId: ScreenId): S | undefined;
    /**
     * Returns the visible screen
     */
    getVisibleScreen<S extends IScreen = IScreen>(): S | undefined;
    /**
     * Returns if the given screen is visible
     */
    isScreenVisible(screenId: ScreenId): boolean;
    /**
     * Shows a screen
     * @param screenId The id of the screen to show
     */
    showScreen(screenId: ScreenId): void;
    /**
     * Hides the given screen.
     */
    hideScreen(screen: ScreenId | IScreen): void;
    /**
     * Returns a new interrupt factory with the given translation data.
     */
    interrupt(title: TranslationGenerator, description?: TranslationGenerator): IInterruptFactory;
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
    interruptWithConfirmation(title: TranslationGenerator): Promise<boolean>;
    /**
     * @deprecated
     */
    interruptWithConfirmation(title: TranslationGenerator, description: TranslationGenerator): Promise<boolean>;
    /**
     * @deprecated
     */
    interruptWithInfo(title: TranslationGenerator, description?: TranslationGenerator): Promise<void>;
    /**
     * @deprecated
     */
    interruptWithMenu(menuId: MenuId, args?: {
        [key: string]: any;
    }): Promise<void>;
    /**
     * @deprecated
     */
    showLoadingInterrupt(title: TranslationGenerator, description?: TranslationGenerator, canCancel?: boolean): Promise<void>;
    refreshTranslations(element: HTMLElement | IComponent): void;
    toggleFullscreen(fullscreen?: boolean): void;
    storeElements(...elements: Array<HTMLElement | IComponent>): void;
    registerDataHost(id: string | number, dataHost: object): void;
    playActivateSound(): void;
    playSelectSound(): void;
    getScale(): number;
    setScale(scale: number): void;
    getMaximumScale(): number;
    setDialogOpacity(opacity: number): void;
}
export interface ITooltipManager {
    show(host: IComponent): ITooltip;
    hide(host: IComponent): void;
}
export declare enum SaveLocation {
    /**
     * Used to mark a field to be saved locally (per save)
     */
    Local = 0,
    /**
     * Used to mark a field to be saved globally (across saves)
     */
    Global = 1,
    /**
     * Used to mark a field to be saved both locally and globally. Local data will override global data, if it exists.
     */
    Both = 2,
}
/**
 * Used to mark a field to be saved to either `saveData` or `saveDataGlobal`. Used in conjunction with
 * `IGameScreenApi.registerDataHost(<id>, <the instance that contains fields marked with this decorator>)`
 */
export declare function Save(saveLocation: SaveLocation): any;
export declare function savedProperties<T = any>(target: T): IterableIterator<[string, SaveLocation]>;
export interface IInterruptFactory extends IInterruptMenuFactory {
    withDescription(description: TranslationGenerator): this;
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(inputInitializer?: (input: IInput) => any): Promise<string>;
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
