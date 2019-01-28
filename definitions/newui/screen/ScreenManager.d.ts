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
import { UiApi } from "newui/INewUi";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import Screen from "newui/screen/Screen";
export default class ScreenManager {
    private readonly _screens;
    private readonly api;
    private visibleScreen;
    private overlayScreen;
    constructor(uiApi: UiApi);
    /**
     * Generator for all initialized screens.
     */
    screens(): IterableIterator<IScreen>;
    /**
     * Returns a screen. If the screen is not already initialized, initializes it.
     * @param screenId The ID of the screen to return
     */
    getScreen<S extends IScreen = Screen>(screenId: ScreenId): S | undefined;
    /**
     * The ID of the visible screen
     */
    getVisibleScreen<S extends IScreen = Screen>(): S | undefined;
    /**
     * Returns if the given screen id is the currently visible screen.
     */
    isScreenVisible(screenId: ScreenId): boolean;
    /**
     * Shows a screen
     * @param screenId The id of the screen to show
     */
    show<S extends IScreen = Screen>(screenId: ScreenId): S;
    /**
     * Hides the given screen, or the current screen if none is passed.
     */
    hide(screen: ScreenId | Screen): void;
    /**
     * Returns the ID of a screen
     */
    private getScreenId;
    /**
     * Hides a screen, then removes it after 1 second.
     */
    private hideAndRemoveScreen;
    /**
     * Removes a screen, or does nothing if the given screen is not initialized.
     */
    private remove;
}
