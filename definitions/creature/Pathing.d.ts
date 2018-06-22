import { ITile } from "tile/ITerrain";
import { IVector2 } from "utilities/math/IVector";
export declare function findPath(start: IVector2, end: IVector2, z: number, isTileBlocked: (tile: ITile, pos: IVector2) => boolean, getTilePenalty?: (tile: ITile, pos: IVector2) => number, maxNodesChecked?: number): IVector2[] | undefined;
