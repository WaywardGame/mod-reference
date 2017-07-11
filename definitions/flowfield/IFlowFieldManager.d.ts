import { FacingDirection, MoveType } from "Enums";
import IFlowField from "IFlowField";
import { DebugRendererDelegate } from "IFlowFieldDebugRenderer";
export interface IFlowFieldManager {
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: IFlowField;
    };
    delete(): void;
    getHeight(): number;
    getMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    getWidth(): number;
    isInFlowField(worldX: number, worldY: number, worldZ: number): boolean;
    setDelegate(delegate: DebugRendererDelegate): void;
    update(): void;
    updateCenter(): boolean;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
}
export default IFlowFieldManager;
export declare const blockedPenalty = 50;
