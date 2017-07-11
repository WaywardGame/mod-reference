import { MoveType } from "Enums";
import IFlowField from "IFlowField";
import { ITile } from "tile/ITerrain";
export default class FlowField implements IFlowField {
    private size;
    private tileZ;
    private moveType;
    private instance;
    private flowField;
    private penaltyField;
    constructor(size: number, tileX: number, tileY: number, tileZ: number, moveType: MoveType);
    delete(): void;
    getFieldValue(x: number, y: number): number;
    updateField(tileX: number, tileY: number, offsetX: number, offsetY: number): void;
    updateTile(gridIndex: number, tile: ITile): void;
    updatePenaltyField(): void;
}
