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
import { Direction } from "Enums";
import { BindCatcherApi } from "newui/BindingManager";
import { IVector2 } from "utilities/math/IVector";
export default class WalkToTileHandler {
    intent: Direction | undefined;
    private target;
    private path;
    private previewTarget;
    private readonly overlays;
    private canResetTarget;
    private readonly overlayType;
    handle(api: BindCatcherApi, gameScreen: Element): boolean;
    /**
     * Event handler for when the movement completes
     */
    onMoveComplete(): void;
    /**
     * Resets the handler, removing any intent, path, and target.
     * @param target Resets the overlays to this target
     */
    reset(target?: IVector2): void;
    /**
     * Continues the "walk to tile" movement; updating the path, changing the direction & intent as needed.
     * @returns True if the movement finished
     */
    private continuePathing;
    /**
     * Removes the overlay from the tiles and updates the game view
     */
    private resetOverlays;
    /**
     * Finds a path to a target and then updates the overlay to that path (if it was valid)
     */
    private setupPath;
    /**
     * Returns whether the tile is blocked (completely impassible)
     */
    private isTileBlocked;
    /**
     * Returns the penalty of the given tile (just how much we *don't* want to step there)
     */
    private getTilePenalty;
    /**
     * Updates the overlay to the given path
     */
    private updateOverlay;
    /**
     * Returns the overlay method to use
     */
    private getOverlayRenderMethod;
}
