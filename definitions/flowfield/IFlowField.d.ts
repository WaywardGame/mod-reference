import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export interface IFlowField {
    getZ(): number;
    delete(): void;
    getFieldValue(x: number, y: number): number;
    getHashCodes(): string[];
    reset(): void;
    updateField(plys: IPlayer[]): void;
    updateTile(gridIndex: number, tile: ITile): void;
}
export default IFlowField;
