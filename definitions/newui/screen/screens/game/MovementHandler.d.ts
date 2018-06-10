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
    private readonly gameScreen;
    private lastMove;
    private intent;
    private readonly walkToTileHandler;
    constructor(gameScreen: Element);
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
}
