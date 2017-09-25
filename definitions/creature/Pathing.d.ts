import { IPoint } from "Enums";
export declare type IPathfindingNode = IPoint;
export interface IPathfindingResult {
    start: IPathfindingNode;
    end: IPathfindingNode;
    path: IPathfindingNode[];
}
export declare function findPath(canMoveCheck: (x: number, y: number) => boolean, result: IPathfindingResult, maxNodesChecked?: number): boolean;
