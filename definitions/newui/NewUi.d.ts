/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IComponent, TranslationGenerator } from "newui/component/IComponent";
import { IInterruptMenuFactory, UiApi } from "newui/INewUi";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import Screen from "newui/screen/Screen";
import { IMenu, MenuId } from "newui/screen/screens/menu/component/IMenu";
import TooltipManager from "newui/tooltip/TooltipManager";
import HighlightManager from "newui/util/HighlightManager";
import InterruptFactory from "newui/util/InterruptFactory";
import ScaleManager from "newui/util/ScaleManager";
import Emitter from "utilities/Emitter";
export default class Ui extends Emitter implements UiApi {
    readonly tooltips: TooltipManager;
    readonly scale: ScaleManager;
    readonly highlights: HighlightManager;
    private storageElement;
    private readonly screenManager;
    private readonly dataHosts;
    constructor();
    screens(): IterableIterator<Screen>;
    getScreen<S extends IScreen = Screen>(screenId: ScreenId): S | undefined;
    getVisibleScreen<S extends IScreen = Screen>(): S | undefined;
    isScreenVisible(screenId: ScreenId): boolean;
    showScreen<S extends IScreen = Screen>(screenId: ScreenId): S;
    hideScreen(screen: ScreenId | Screen): void;
    /**
     * Returns a new interrupt factory with the given translation data.
     */
    interrupt(title: TranslationGenerator, description?: TranslationGenerator): InterruptFactory;
    /**
     * Returns an interrupt factory that can only be used to create menus.
     */
    interrupt(): IInterruptMenuFactory;
    interruptWithConfirmation(title: TranslationGenerator, description?: TranslationGenerator): Promise<boolean>;
    interruptWithInfo(title: TranslationGenerator, description?: TranslationGenerator): Promise<void>;
    interruptWithMenu(menuId: MenuId, initializer?: (menu: IMenu) => any): Promise<void>;
    showLoadingInterrupt(title: TranslationGenerator, description?: TranslationGenerator, canCancel?: boolean, specialType?: string): Promise<void>;
    hideLoadingInterrupt(): Promise<void>;
    /**
     * @param elements The elements to refresh translations inside
     */
    refreshTranslations(...elements: Array<HTMLElement | IComponent | undefined>): void;
    storeElements(...elements: Array<HTMLElement | IComponent>): void;
    /**
     * Registers an object as a "data host", which allows its fields to be saved to `saveData` or `saveDataGlobal`
     */
    registerDataHost(id: string | number, host: any): void;
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
    setDialogOpacity(opacity?: number, save?: boolean): void;
    private onLanguageLoad;
}
