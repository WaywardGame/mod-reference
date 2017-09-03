import { ICreature } from "creature/ICreature";
import { FacingDirection, MoveType } from "Enums";
import { IFlowField } from "flowfield/IFlowField";
import { DebugRendererDelegate } from "flowfield/IFlowFieldDebugRenderer";
import IFlowFieldManager from "flowfield/IFlowFieldManager";
import { IPlayer } from "player/IPlayer";
export default class FlowFieldManager implements IFlowFieldManager {
    private size;
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: IFlowField;
    };
    private plys;
    constructor(size: number);
    delete(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isCreatureInFlowField(creature: ICreature): boolean;
    isPlayerInFlowField(player: IPlayer): boolean;
    getMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    getHashCodes(): string[];
    setPlayers(plys: IPlayer[]): void;
    update(): void;
    reset(): void;
    private getDirection(moveType, worldX, worldY, toward);
    private getFlowField(moveType);
    private getFlowFields();
}
