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
import { IModdable, TerrainType } from "Enums";
import IWorldLayer from "renderer/IWorldLayer";
import { ITileAdaptation } from "renderer/TileAdaptors";
export declare enum TerrainDecoration {
    Grass = 0,
    BeachSand = 1,
    DesertSand = 2,
    Dirt = 3
}
export interface ITerrainDecorationBase {
    terrainTypes: TerrainType[];
    animated?: boolean;
    adapt: AdaptionFunction | ITerrainDecorationVariationAdaption;
}
export interface ITerrainDecorationVariationAdaption {
    /**
     * The number of different sprites that could be used for this decoration. For instance, if your image is 3-tiles wide (48x16)
     * and you set this number to 3, it would choose between any of the three tiles randomly for each decorated tile.
     */
    variationCount: number;
    /**
     * Decorations can't be made less rare, but they can be made more rare with this property.
     * When not provided, decorated tiles use a rarity of 1.0 (always). 0.0 means never. It's linear.
     */
    rarity?: number;
}
/**
 * Takes an x, y, and z coordinate and a randomly-generated "variation index", and returns an `ITileAdaptation`
 * object for the tile. How the variation index is used to generate the `ITileAdaptation` will be implementation-specific.
 * @param variationIndex A random integer between 1 (inclusive) and 65536 (exclusive)
 */
export declare type AdaptionFunction = (world: IWorldLayer, x: number, y: number, terrain: TerrainType, adaptation: ITileAdaptation, variationIndex: number) => ITileAdaptation | undefined;
export interface ITerrainDecoration extends ITerrainDecorationBase, IModdable {
    type: TerrainDecoration;
}
export declare const terrainDecorations: Descriptions<TerrainDecoration, ITerrainDecorationBase>;
declare module TerrainDecorations {
    function initialize(): void;
    function has(terrain: TerrainType): boolean;
    function adapt(world: IWorldLayer, tileX: number, tileY: number, terrain: TerrainType, adaptation: ITileAdaptation, variation: number): ITileAdaptation | undefined;
}
export default TerrainDecorations;
