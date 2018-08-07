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
import { DoodadType, TerrainMask, TerrainType } from "Enums";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IExploreMap from "renderer/IExploreMap";
import { TerrainData } from "renderer/IWorld";
import { ITile } from "tile/ITerrain";
export declare type onTileUpdateDelegate = (x: number, y: number, flushImmediate: boolean) => void;
export declare type onDoodadUpdateDelegate = (x: number, y: number, doodadType: DoodadType | undefined, doodadInfo: DoodadInfo | undefined, doodadVariation: number, hasGraphicVariation: boolean, flushImmediate: boolean) => void;
export interface IWorldLayer {
    width: number;
    height: number;
    level: number;
    lightLevelMap: IByteGrid;
    lightBlockMap: IByteGrid;
    exploredMap: IExploreMap;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    getTile(x: number, y: number): TerrainData;
    getTileType(x: number, y: number): TerrainType;
    getType(terrain: TerrainData): TerrainType;
    isFence(terrain: TerrainData): boolean;
    isTilled(terrain: TerrainData): boolean;
    isWall(terrain: TerrainData): boolean;
    resetExploredMap(): void;
    setTile(x: number, y: number, terrainType: TerrainType | undefined, terrainMasks?: TerrainMask): void;
    updateAll(): void;
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean): void;
    delete(): void;
}
export default IWorldLayer;
