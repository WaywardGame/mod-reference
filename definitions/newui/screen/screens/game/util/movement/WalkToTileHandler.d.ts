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
import { BindCatcherApi } from "newui/BindingManager";
import { IVector2 } from "utilities/math/IVector";
export default class WalkToTileHandler {
    private previewTarget;
    private previewPath;
    private readonly overlays;
    private readonly overlayType;
    private canResetTarget;
    handle(api: BindCatcherApi, gameScreen: Element): boolean;
    /**
     * Event handler for when the movement completes
     */
    onMoveComplete(): void;
    /**
     * Event handler for when the players walk to tile path is set
     */
    onPlayerWalkToTilePath(path: IVector2[] | undefined): void;
    /**
     * Resets the handler, removing any intent, path, and target.
     * @param target Resets the overlays to this target
     * @param clearWalkPath Resets the walk along path
     */
    reset(target?: IVector2, clearWalkPath?: boolean): void;
    /**
     * Removes the overlay from the tiles and updates the game view
     * @returns True if the overlays were reset
     */
    private resetOverlays;
    /**
     * Finds a path to a target and then updates the overlay to that path (if it was valid)
     */
    private findPath;
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
