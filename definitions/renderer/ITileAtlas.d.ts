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
import DoodadInfo from "doodad/DoodadInfo";
import { DoodadType } from "doodad/IDoodad";
import { ItemType } from "item/IItem";
import { TerrainDecoration } from "renderer/Decorations";
import { TerrainTileInfo } from "renderer/TerrainTileInfo";
import { TerrainType } from "tile/ITerrain";
export interface ITileAtlas {
    terrain: OptionalDescriptions<TerrainType, TerrainTileInfo>;
    terrainTilled: OptionalDescriptions<TerrainType, TerrainTileInfo>;
    terrainDecoration: OptionalDescriptions<TerrainDecoration, DoodadInfo>;
    doodads: OptionalDescriptions<DoodadType, DoodadInfo>;
    doodadItems: OptionalDescriptions<ItemType, DoodadInfo>;
    mounds: OptionalDescriptions<TerrainType, DoodadInfo>;
    generateLookups(): void;
    isMountain(type: TerrainType): boolean;
    isMountainGround(type: TerrainType): boolean;
    isOre(type: TerrainType): boolean;
    isLava(type: TerrainType): boolean;
    isWater(type: TerrainType): boolean;
    isFloor(type: TerrainType): boolean;
}
export default ITileAtlas;
