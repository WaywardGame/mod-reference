import { MoveType } from "Enums";
import IFlowField from "IFlowField";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class FlowField implements IFlowField {
    private z;
    private moveType;
    private instance;
    private flowField;
    private penaltyField;
    constructor(size: number, z: number, moveType: MoveType);
    getZ(): number;
    delete(): void;
    getHashCodes(): string[];
    getFieldValue(x: number, y: number): number;
    updateField(plys: IPlayer[]): void;
    updateTile(gridIndex: number, tile: ITile): void;
    reset(): void;
}
