import { FacingDirection, MoveType } from "Enums";
import { IFlowField } from "flowfield/IFlowField";
import { DebugRendererDelegate } from "flowfield/IFlowFieldDebugRenderer";
import IFlowFieldManager from "flowfield/IFlowFieldManager";
import IPlayer from "player/IPlayer";
export default class FlowFieldManager implements IFlowFieldManager {
    delegate: DebugRendererDelegate;
    flowFields: {
        [index: number]: IFlowField;
    };
    private player;
    private size;
    private tileX;
    private tileY;
    private offsetX;
    private offsetY;
    constructor(player: IPlayer, radius: number);
    delete(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(worldX: number, worldY: number, worldZ: number): boolean;
    getMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    getOpposingMoveDirection(worldX: number, worldY: number, worldZ: number, moveType: MoveType): FacingDirection;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    update(): void;
    updateCenter(): boolean;
    private setCenter(worldX, worldY, worldZ);
    private fullUpdate();
    private updateTileInternal(gridIndex, tile);
    private getDirection(moveType, worldX, worldY, toward);
    private getFlowField(moveType);
    private getFlowFields();
}
