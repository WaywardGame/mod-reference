/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
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
import { DoodadType, TerrainType } from "Enums";
import * as Terrain from "tile/ITerrain";
export declare function hasFinishedLoading(): boolean;
export declare function setFinishedLoading(): void;
export declare function clearFinishedLoading(): void;
export declare function spawnHouseItem(x: number, y: number, z: number): void;
export declare function spawnShoreItem(x: number, y: number, z: number): void;
export declare function spawnDoodad(tileType: TerrainType, x: number, y: number, z: number, afterMapGen?: boolean): void;
export declare function spawnTileEvent(x: number, y: number, z: number): void;
export interface ITemplateOptions {
    /**
     * If not provided, randomly decides whether to mirror the template vertically.
     */
    mirrorVertically?: boolean;
    /**
     * If not provided, randomly decides whether to mirror the template horizontally.
     */
    mirrorHorizontally?: boolean;
    /**
     * If not provided, randomly decides the rotation of the template.
     */
    rotate?: 0 | 90 | 180 | 270;
    /**
     * If not provided, uses the degradation value in the template itself.
     */
    degrade?: number;
    /**
     * The exact template to use.
     */
    which?: string;
}
export declare function manipulateTemplates<T extends Array<string[] | undefined>>(options: ITemplateOptions, ...templates: T): T;
export declare function spawnTemplate(templateType: Terrain.TileTemplateType, x: number, y: number, z: number, options?: ITemplateOptions): void;
export declare function setTileUnderDoodad(tile: Terrain.ITile, x: number, y: number, doodadType: DoodadType, addTileData?: boolean): void;
export declare function setupTiles(tileGenArray: Uint16Array): void;
export declare function loadDifferences(): void;
