import { ICreature } from "creature/ICreature";
import { FacingDirection, MoveType } from "Enums";
import IFlowField from "IFlowField";
import { DebugRendererDelegate } from "IFlowFieldDebugRenderer";
import { IPlayer } from "player/IPlayer";
export interface IFlowFieldManager {
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: IFlowField;
    };
    delete(): void;
    getHashCodes(): string[];
    getHeight(): number;
    getMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    getWidth(): number;
    isCreatureInFlowField(creature: ICreature): boolean;
    isPlayerInFlowField(player: IPlayer): boolean;
    reset(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    setPlayers(plys: IPlayer[]): void;
    update(): void;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
}
export default IFlowFieldManager;
export declare const blockedPenalty = 51;
