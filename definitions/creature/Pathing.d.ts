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
import IPlayer from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { IVector2 } from "utilities/math/IVector";
export declare function findPath(start: IVector2, end: IVector2, z: number, isTileBlocked: (tile: ITile, pos: IVector2) => boolean, getTilePenalty?: (tile: ITile, pos: IVector2) => number, maxNodesChecked?: number): IVector2[] | undefined;
/**
 * Returns whether the tile is blocked (completely impassible)
 */
export declare function isWalkToTileBlocked(player: IPlayer, tile: ITile, pos: IVector2, clientSide: boolean): boolean;
