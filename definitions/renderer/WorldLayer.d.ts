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
import { TerrainMask, TerrainType } from "Enums";
import { IByteGrid } from "renderer/fieldofview/IByteGrid";
import IExploreMap from "renderer/IExploreMap";
import { TerrainData } from "renderer/IWorld";
import { IWorldLayer, onDoodadUpdateDelegate, onTileUpdateDelegate } from "renderer/IWorldLayer";
import { ITile } from "tile/ITerrain";
export default class WorldLayer implements IWorldLayer {
    readonly width: number;
    readonly height: number;
    readonly level: number;
    readonly lightLevelMap: IByteGrid;
    readonly lightBlockMap: IByteGrid;
    exploredMap: IExploreMap;
    onTileUpdate: onTileUpdateDelegate;
    onDoodadUpdate: onDoodadUpdateDelegate;
    private readonly terrainMap;
    private readonly instance;
    constructor(width: number, height: number, level: number);
    delete(): void;
    resetExploredMap(): void;
    getTileType(x: number, y: number): TerrainType;
    getTile(x: number, y: number): TerrainData;
    getType(terrain: TerrainData): TerrainType;
    isWall(terrain: TerrainData): boolean;
    isFence(terrain: TerrainData): boolean;
    isTilled(terrain: TerrainData): boolean;
    setTile(x: number, y: number, terrainType: TerrainType, terrainMasks?: TerrainMask): void;
    updateAll(): void;
    updateTile(x: number, y: number, tile: ITile, shouldUpdate?: boolean): void;
    private mapIndex;
    private setTileInternal;
}
