import { Direction, MoveType } from "Enums";
import IFlowField from "flowfield/IFlowField";
import { DebugRendererDelegate } from "flowfield/IFlowFieldDebugRenderer";
import { IPlayer } from "player/IPlayer";
import { IVector3 } from "utilities/math/IVector";
export interface IFlowFieldManager {
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: IFlowField;
    };
    delete(): void;
    getHeight(): number;
    getMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): Direction;
    getOpposingMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): Direction;
    getWidth(): number;
    isInFlowField(point: IVector3): boolean;
    isPlayerInFlowField(player: IPlayer): boolean;
    reset(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    setPlayers(plys: IPlayer[]): void;
    update(): void;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
}
export default IFlowFieldManager;
export declare const blockedPenalty = 11;
