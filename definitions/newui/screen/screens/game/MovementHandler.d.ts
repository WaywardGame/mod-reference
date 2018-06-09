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
import { BindCatcherApi } from "newui/BindingManager";
export default class MovementHandler {
    private lastMove;
    private intent;
    /**
     * Movement does not care if other binds are pressed, and it doesn't return whether it processed a press either.
     */
    handle(api: BindCatcherApi): void;
    /**
     * Handles `Hook.OnMove`
     */
    onMoveStart(): void;
    private handleBinds;
    /**
     * Processes moving towards the mouse.
     */
    private processMoveDirection;
    /**
     * If one direction bind is held, the intent is to move in that direction.
     *
     * If two direction binds are held, the intent is to move diagonally, so it
     * switches the intent based on whatever the last movement was.
     *
     * Returns whether either of the previous statements are true.
     */
    private processDirectionBinds;
    /**
     * Returns the currently held directions.
     */
    private getHeldDirections;
    /**
     * Gets which direction is held on a given axis, or `undefined` if no direction (or both) are held.
     */
    private getDirectionHeldOnAxis;
    /**
     * Returns a vector representing the center of the screen.
     */
    private getScreenCenter;
    /**
     * Returns a direction from its angle in radians. (Value between 0 and τ)
     */
    private getDirectionFromRad;
    /**
     * Returns one or two directions from its angle in radians. (Value between 0 and τ)
     *
     * The cardinal directions each have 60°, while the ordinal directions have 30°
     */
    private getDirectionsFromRad;
}
