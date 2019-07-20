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
import { ICausesStatusEffect } from "entity/IEntity";
import { ILootItem } from "game/ILoot";
import { IObject, IObjectDescription } from "game/IObject";
import { ItemType } from "item/IItem";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
import { IVector3 } from "utilities/math/IVector";
export interface ITileEventDescription extends IObjectDescription, IModdable, ICausesStatusEffect {
    spreadMax?: number;
    decayMax?: number;
    animated?: boolean;
    items?: ILootItem[];
    particles?: IRGB;
    graphicVariation?: boolean;
    isFlammable?: boolean;
    pickUp?: ItemType;
    lightSource?: boolean;
    lightColor?: IRGB;
    damage?: number;
    durability?: number;
    isWaste?: boolean;
    /**
     * Whether the tile event prevents things such as carving, digging, movement, etc.
     */
    blocksTile?: boolean;
    /**
     * Whether this is a "minor" tile event. Minor tile events are rendered as faded, small text in tooltips rather than large headings.
     */
    isMinor?: boolean;
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
    minDur?: number;
    maxDur?: number;
}
export declare enum TileEventType {
    None = 0,
    Fire = 1,
    HoneyFungus = 2,
    TumblingTumbleweed = 3,
    AnimalDroppings = 4,
    AnimalDung = 5,
    Guano = 6,
    WispDust = 7,
    Blood = 8,
    BloodWater = 9,
    Acid = 10
}
