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
import { IDamageInfo } from "creature/ICreature";
import { BindCatcherApi } from "newui/BindingManager";
import WalkToTileHandler from "newui/screen/screens/game/util/movement/WalkToTileHandler";
import { IVector2 } from "utilities/math/IVector";
export default class MovementHandler {
    private readonly gameScreen;
    readonly walkToTileHandler: WalkToTileHandler;
    private lastMove;
    private readonly intent;
    constructor(gameScreen: Element);
    /**
     * Movement does not care if other binds are pressed, and it doesn't return whether it processed a press either.
     */
    handle(api: BindCatcherApi): void;
    /**
     * Handles `Hook.OnMove`
     */
    onMoveStart(): void;
    /**
     * Handles `Hook.OnMoveComplete`
     */
    onMoveComplete(): void;
    /**
     * Handles `Hook.OnPlayerDamage`
     */
    onPlayerDamage(damageInfo: IDamageInfo): void;
    /**
     * Handles `Hook.OnPlayerDeath`
     */
    onPlayerDeath(): void;
    /**
     * Handles `Hook.OnPlayerWalkToTilePath`
     */
    onPlayerWalkToTilePath(path: IVector2[] | undefined): void;
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
     * Returns whether the mouse was within the GameScreen when it began to be held down.
     */
    private mouseWithin;
}
