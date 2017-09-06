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
        [index: string]: IFlowField;
    };
    private plys;
    constructor(size: number);
    delete(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isCreatureInFlowField(creature: ICreature): boolean;
    isPlayerInFlowField(player: IPlayer): boolean;
    getMoveDirection(x: number, y: number, z: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(x: number, y: number, z: number, moveType: MoveType): FacingDirection;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    setPlayers(plys: IPlayer[]): void;
    update(): void;
    reset(): void;
    private getDirection(moveType, x, y, z, toward);
    private getFlowField(moveType, z);
    private getFlowFields();
}
