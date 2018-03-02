import { IObject, IObjectDescription, IResourceItem, IRGB } from "Enums";
import { IPointZ } from "utilities/math/IPoint";
export interface ITileEventDescription extends IObjectDescription {
    spreadMax: number;
    decayMax?: number;
    animated?: boolean;
    items?: IResourceItem[];
    particles?: IRGB;
}
export interface ITileEvent extends IObject<TileEventType>, IPointZ {
    spread: number;
    decay?: number;
    gfx?: number;
}
export declare enum TileEventType {
    None = 0,
    Fire = 1,
    HoneyFungus = 2,
}
export interface ITileEventInfo {
    create(tileEvent: ITileEvent): void;
    remove(tileEvent: ITileEvent): void;
    update(tileEvent: ITileEvent): void;
}
