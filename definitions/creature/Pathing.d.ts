import IPlayer from "player/IPlayer";
import { ITile } from "tile/ITerrain";
import { IVector2 } from "utilities/math/IVector";
export declare function findPath(start: IVector2, end: IVector2, z: number, isTileBlocked: (tile: ITile, pos: IVector2) => boolean, getTilePenalty?: (tile: ITile, pos: IVector2) => number, maxNodesChecked?: number): IVector2[] | undefined;
/**
 * Returns whether the tile is blocked (completely impassible)
 */
export declare function isWalkToTileBlocked(player: IPlayer, tile: ITile, pos: IVector2, clientSide: boolean): boolean;
