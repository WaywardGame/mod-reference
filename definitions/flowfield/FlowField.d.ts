import { MoveType } from "Enums";
import IFlowField from "IFlowField";
import ByteGrid from "renderer/fieldofview/ByteGrid";
import { ITile } from "tile/ITerrain";
export default class FlowField implements IFlowField {
    readonly flowField: ByteGrid;
    private penaltyField;
    private size;
    private tileX;
    private tileY;
    private tileZ;
    private offsetX;
    private offsetY;
    private moveType;
    private updateQueue;
    constructor(size: number, tileX: number, tileY: number, tileZ: number, moveType: MoveType);
    updateField(tileX: number, tileY: number, offsetX: number, offsetY: number): void;
    updateTile(gridIndex: number, tile: ITile): void;
    updatePenaltyField(): void;
}
