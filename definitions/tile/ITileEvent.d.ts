import { IModdable, IObject, IObjectDescription, IResourceItem, IRGB } from "Enums";
import { IVector3 } from "utilities/math/IVector";
export interface ITileEventDescription extends IObjectDescription, IModdable {
    spreadMax?: number;
    decayMax?: number;
    animated?: boolean;
    items?: IResourceItem[];
    particles?: IRGB;
    graphicVariation?: boolean;
    isFlammable?: boolean;
    create?(tileEvent: ITileEvent): void;
    remove?(tileEvent: ITileEvent): void;
    update?(tileEvent: ITileEvent): void;
}
export interface ITileEvent extends IObject<TileEventType>, IVector3 {
    spread?: number;
    decay?: number;
    gfx?: number;
    fromX: number;
    fromY: number;
    movementFinishTime?: number;
    step?: number;
}
export declare enum TileEventType {
    None = 0,
    Fire = 1,
    HoneyFungus = 2,
    TumblingTumbleweed = 3
}
