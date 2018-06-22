import { MoveType } from "Enums";
import IFlowField from "flowfield/IFlowField";
import { IPlayer } from "player/IPlayer";
import { ITile } from "tile/ITerrain";
export default class FlowField implements IFlowField {
    private readonly z;
    private readonly moveType;
    private instance;
    private readonly flowField;
    private readonly penaltyField;
    constructor(size: number, z: number, moveType: MoveType);
    getZ(): number;
    delete(): void;
    getHashCodes(): string[];
    getFieldValue(x: number, y: number): number;
    updateField(plys: IPlayer[]): void;
    updateTile(gridIndex: number, tile: ITile): void;
    reset(): void;
}
