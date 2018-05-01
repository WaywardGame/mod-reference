import { UiApi } from "newui/INewUi";
import { IScreen, ScreenId } from "newui/screen/IScreen";
import Screen from "newui/screen/Screen";
export default class ScreenManager {
    private readonly _screens;
    private readonly screenChain;
    private readonly uiApi;
    private visibleScreen;
    constructor(uiApi: UiApi);
    /**
     * Generator for all initialized screens.
     */
    screens(): IterableIterator<IScreen>;
    /**
     * @param screenId The ID of the screen to return. If this screen is not initialized, returns undefined.
     */
    getScreen<S extends IScreen = Screen>(screenId: ScreenId): S | undefined;
    /**
     * The ID of the visible screen
     */
    getVisibleScreen<S extends IScreen = IScreen>(): S | undefined;
    /**
     * Returns if the given screen id is the currently visible screen.
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
     * Hides the given screen, or the current screen if none is passed.
     */
    hideScreen(screen: ScreenId | Screen): Promise<void>;
    /**
     * Removes a screen, or does nothing if the given screen is not initialized.
     */
    removeScreen(screen: ScreenId | Screen): Promise<void>;
    /**
     * Initializes a screen by its ID. If the screen's class is not in the screen map, this method will throw an error!
     */
    initScreen<S extends IScreen = IScreen>(screenId: ScreenId): S;
    /**
     * Runs the given callback if the screen exists.
     */
    private withScreen(screen, ifExist);
    /**
     * Returns the ID of a screen
     */
    private getScreenId(screen);
    /**
     * Hides a screen, then removes it after 3 seconds unless the screen is set to be `retain`ed.
     */
    private hideAndRemoveScreen(screenId);
}
