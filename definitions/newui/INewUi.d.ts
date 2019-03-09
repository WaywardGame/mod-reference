/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import InterruptChoice from "language/dictionary/InterruptChoice";
import { HighlightSelector, IComponent, IHighlight, ITooltip, TranslationGenerator } from "newui/component/IComponent";
import { IInput } from "newui/component/IInput";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
import Emitter from "utilities/Emitter";
export interface UiApi extends Emitter {
    tooltips: ITooltipManager;
    scale: IScaleManager;
    highlights: IHighlightManager;
    windowWidth: number;
    windowHeight: number;
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
    refreshTranslations(element?: HTMLElement | IComponent): void;
    toggleFullscreen(fullscreen?: boolean): void;
    storeElements(...elements: Array<HTMLElement | IComponent>): void;
    registerDataHost(id: string | number, dataHost: object): void;
    playActivateSound(): void;
    playSelectSound(): void;
    setDialogOpacity(opacity: number): void;
}
export interface IScaleManager {
    /**
     * Returns the minimum scale we allow (0.5, multiplier)
     */
    getMinimum(): number;
    /**
     * Returns the maximum scale the screen size will allow (multiplier)
     */
    getMaximum(): number;
    /**
     * Returns the current UI scale (after being clamped by min & max).
     */
    getCurrent(): number;
    /**
     * Returns the currently "requested" UI scale.
     */
    getRequested(): number;
    /**
     * Requests a new UI scale, a multiplier of the default size.
     */
    request(scale: number): void;
    /**
     * Updates the UI scale based on the current viewport.
     */
    update(): void;
}
export interface ITooltipManager {
    show(host: IComponent, force?: boolean): ITooltip | undefined;
    hide(host?: IComponent): void;
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
    Both = 2
}
/**
 * Used to mark a field to be saved to either `saveData` or `saveDataGlobal`. Used in conjunction with
 * `IGameScreenApi.registerDataHost(<id>, <the instance that contains fields marked with this decorator>)`
 */
export declare function Save(saveLocation: SaveLocation): any;
export declare function savedProperties(target: any): Map<string, SaveLocation>;
export interface IInterruptFactory extends IInterruptMenuFactory {
    withDescription(description: TranslationGenerator): this;
    withChoice(...choices: InterruptChoice[]): Promise<InterruptChoice>;
    withConfirmation(): Promise<boolean>;
    withInfo(): Promise<void>;
    withInput(inputInitializer?: (input: IInput) => any): Promise<string>;
    withLoading(until?: Promise<any> | (() => Promise<any>), canCancel?: boolean | (() => any), specialType?: string): Promise<void>;
}
export interface IInterruptMenuFactory {
    withMenu<M extends IMenu = IMenu>(menuId: MenuId, initializer?: (menu: M) => any): Promise<void>;
}
export interface IHighlightManager {
    start(host: any, highlight: IHighlight): void;
    end(host: any): void;
    register(component: IComponent, selector: HighlightSelector, until?: string | number): void;
}
export declare enum UiApiEvent {
    Resize = 0,
    Interrupt = 1,
    InterruptClose = 2,
    LoadedFromSave = "LoadedFromSave"
}
export declare enum SelectDirection {
    Up = -1,
    Down = 1,
    Left = -2,
    Right = 2
}
export interface LoadMenuArgs {
    _wentBack: boolean;
}
export declare const DIALOG_OPACITY_MIN = 0;
export declare const DIALOG_OPACITY_DEFAULT = 80;
export declare const NEWUI_HOOK_PRIORITY = -99999999999;
