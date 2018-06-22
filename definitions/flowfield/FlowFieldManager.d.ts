import { Direction, MoveType } from "Enums";
import { IFlowField } from "flowfield/IFlowField";
import { DebugRendererDelegate } from "flowfield/IFlowFieldDebugRenderer";
import IFlowFieldManager from "flowfield/IFlowFieldManager";
import { IPlayer } from "player/IPlayer";
import { IVector3 } from "utilities/math/IVector";
export default class FlowFieldManager implements IFlowFieldManager {
    private readonly size;
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
    isInFlowField(point: IVector3): boolean;
    isPlayerInFlowField(player: IPlayer): boolean;
    getMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    getOpposingMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    setPlayers(plys: IPlayer[]): void;
    update(): void;
    reset(): void;
    private getDirection;
    private getFlowField;
    private getFlowFields;
}
