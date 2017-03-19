import { IPointZ } from "Enums";
import { IObjectDescription } from "item/IItem";
export interface ITileEventDescription extends IObjectDescription {
    spreadMax: number;
    decayMax: number;
}
export interface ITileEvent extends IPointZ {
    type: TileEventType;
    spread: number;
    decay: number;
}
export declare enum TileEventType {
    None = 0,
    Fire = 1,
}
