import { ITile } from "tile/ITerrain";
export interface IFlowField {
    delete(): void;
    getFieldValue(x: number, y: number): number;
    updateField(tileX: number, tileY: number, offsetX: number, offsetY: number): void;
    updatePenaltyField(): void;
    updateTile(gridIndex: number, tile: ITile): void;
}
export default IFlowField;
