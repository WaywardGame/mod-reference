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
import { ItemType } from "item/IItem";
import { TerrainType } from "tile/ITerrain";
export interface ITerrainLootItem extends ILootItem {
    tileChange?: TerrainType;
    tileChangeChance?: number;
}
export interface ITerrainLoot {
    items: ITerrainLootItem[];
    defaultItem?: ItemType;
    disableWaterRouting?: boolean;
}
export declare const resource: OptionalDescriptions<TerrainType, ITerrainLoot>;
export default resource;
