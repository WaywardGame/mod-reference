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
import { ScreenId } from "newui/screen/IScreen";
import Screen from "newui/screen/Screen";
import Stream from "utilities/stream/Stream";
export default class ScreenManager {
    private readonly screens;
    private visible;
    private overlay;
    /**
     * Streams all initialized screens.
     */
    all(): Stream<Screen>;
    /**
     * Returns a screen, or `undefined`, if the screen is not initialized.
     * @param screenId The ID of the screen to return
     */
    get<S extends Screen = Screen>(screenId: ScreenId): S | undefined;
    /**
     * If the screen by the given ID is not already initialized, initializes it.
     * @param screenId The ID of the screen to initialize
     * @returns The initialized screen
     */
    initialize<S extends Screen = Screen>(screenId: ScreenId): S;
    /**
     * Returns the "top" screen.
     *
     * There are two screen layers:
     * 1. The main layer
     * 2. The overlay layer
     *
     * The overlay layer is always in front of the main layer, therefore if there is no overlay screen visible,
     * this method returns the main layer screen. Otherwise, this method returns the overlay layer screen.
     */
    getTop<S extends Screen = Screen>(): S | undefined;
    /**
     * Returns if the given screen id is the "top" screen.
     *
     * There are two screen layers:
     * 1. The main layer
     * 2. The overlay layer
     *
     * The overlay layer is always in front of the main layer, therefore if there is no overlay screen visible,
     * this method returns if the given screen ID is the main layer screen. Otherwise, this method returns
     * if the given screen ID is the overlay layer screen.
     */
    isTop(screenId: ScreenId): boolean;
    /**
     * Returns if the given screen id is a currently visible screen (either the main screen or the overlay screen).
     */
    isVisible(screenId: ScreenId): boolean;
    /**
     * Shows a screen
     * @param screenId The id of the screen to show
     */
    show<S extends Screen = Screen>(screenId: ScreenId): S;
    /**
     * Hides the given screen, or the current screen if none is passed.
     */
    hide(screen: ScreenId | Screen): void;
    /**
     * Returns the ID of a screen
     */
    private getId;
    /**
     * Hides a screen, then removes it after 1 second.
     */
    private hideAndRemove;
    /**
     * Removes a screen, or does nothing if the given screen is not initialized.
     */
    private remove;
}
