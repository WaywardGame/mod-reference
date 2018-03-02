import { ITile } from "tile/ITerrain";
import { IPoint, IPointZ } from "utilities/math/IPoint";
export declare type IPathfindingNode = IPoint;
export interface IPathfindingResult {
    start: IPathfindingNode;
    end: IPathfindingNode;
    path: IPathfindingNode[];
}
export declare function findPath(isBlockingPath: (x: number, y: number) => boolean, result: IPathfindingResult, maxNodesChecked?: number): boolean;
export declare function findPath2(start: IPathfindingNode, end: IPathfindingNode, z: number, canMoveCheck: (point: IPointZ, tile: ITile) => boolean, maxNodesChecked?: number): IPathfindingNode[] | undefined;
