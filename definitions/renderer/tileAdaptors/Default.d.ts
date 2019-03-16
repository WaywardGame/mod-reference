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
import IWorldLayer from "renderer/IWorldLayer";
import { ITileAdaptation, ITileAdaptor } from "renderer/TileAdaptors";
import { TerrainType } from "tile/ITerrain";
export default class Default implements ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    protected getTerrainBeneathTile(x: number, y: number): TerrainType;
}
