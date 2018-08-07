/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
import DoodadInfo from "doodad/DoodadInfo";
import { TerrainType } from "Enums";
import { TerrainTileInfo } from "renderer/TerrainTileInfo";
export interface ITileAtlas {
    terrain: {
        [index: number]: TerrainTileInfo;
    };
    terrainTilled: {
        [index: number]: TerrainTileInfo | undefined;
    };
    doodads: {
        [index: number]: DoodadInfo;
    };
    doodadItems: {
        [index: number]: DoodadInfo;
    };
    mounds: {
        [index: number]: DoodadInfo;
    };
    isMountain(type: TerrainType): boolean;
    isOre(type: TerrainType): boolean;
    isLava(type: TerrainType): boolean;
    isWater(type: TerrainType): boolean;
    isFloor(type: TerrainType): boolean;
}
export default ITileAtlas;
