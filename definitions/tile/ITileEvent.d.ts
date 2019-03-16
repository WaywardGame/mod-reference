/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { ILootItem } from "game/ILoot";
import { IObject, IObjectDescription } from "game/IObject";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export interface ITileEventDescription extends IObjectDescription, IModdable {
    spreadMax?: number;
    decayMax?: number;
    animated?: boolean;
    items?: ILootItem[];
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
