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
