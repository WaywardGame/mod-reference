/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IDoodad } from "doodad/IDoodad";
import { DoodadType, TerrainType } from "Enums";
import IWorldLayer from "renderer/IWorldLayer";
import { TerrainTileInfo } from "renderer/TerrainTileInfo";
import Vec2 from "utilities/math/Vector2";
export interface ITileAdaptation {
    TLFG: Vec2;
    TRFG: Vec2;
    BLFG: Vec2;
    BRFG: Vec2;
    TLBG: Vec2;
    TRBG: Vec2;
    BLBG: Vec2;
    BRBG: Vec2;
    overLayerFGTall?: true;
    TLFO: Vec2;
    TRFO: Vec2;
    BLFO: Vec2;
    BRFO: Vec2;
    overLayerBGTall?: true;
    TLBO: Vec2;
    TRBO: Vec2;
    BLBO: Vec2;
    BRBO: Vec2;
}
export interface ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
}
export interface IDoodadAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
export declare let defaultBackground: TerrainTileInfo;
export declare function setDefaultBackground(tileInfo: TerrainTileInfo): void;
export declare function isDoor(doodad?: IDoodad): boolean;
export declare function getWaterType(terrainType: TerrainType): number;
