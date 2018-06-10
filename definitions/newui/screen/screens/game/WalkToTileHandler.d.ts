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
import { Direction } from "player/IPlayer";
import { IVector2 } from "utilities/math/IVector";
export default class WalkToTileHandler {
    intent: Direction | undefined;
    private walkToTileTarget;
    private walkToTileTargetPath;
    private walkToTilePreviewTarget;
    private readonly walkToTileOverlays;
    handle(api: BindCatcherApi, gameScreen: Element): boolean;
    reset(target?: IVector2): void;
    /**
     * Handles walk to tile movement
     * @param target Target tile to move to
     * @returns True if the movement finished
     */
    private handleWalkToTile;
    private resetWalkToTileOverlays;
    private canMoveToTileCheck;
    private setupWalkToTilePathAndOverlay;
}
