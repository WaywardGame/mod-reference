import IByteGrid from "renderer/fieldofview/IByteGrid";
import { ITile } from "tile/ITerrain";
export interface IFlowField {
    flowField: IByteGrid;
    updateField(tileX: number, tileY: number, offsetX: number, offsetY: number): void;
    updateTile(gridIndex: number, tile: ITile): void;
    updatePenaltyField(): void;
}
export default IFlowField;
