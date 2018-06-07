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
export declare function setDefaultBackground(tileInfo: TerrainTileInfo): void;
export declare class Default implements ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    protected getTerrainBeneathTile(x: number, y: number): TerrainType;
}
export declare class Till implements ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
}
export declare class Mountain extends Default {
    private mountainTopFlag;
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
    private getTileType;
}
export declare function getWaterType(terrainType: TerrainType): number;
export declare class Water extends Default {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
}
export declare class Lava extends Default {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
}
export declare class Dirt implements ITileAdaptor {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
}
export declare class Fence implements IDoodadAdaptor {
    adaptGate(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
    adapt(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
export declare class Wall implements IDoodadAdaptor {
    adaptDoor(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, vertical: boolean, result: ITileAdaptation): void;
    adapt(world: IWorldLayer, x: number, y: number, doodadType: DoodadType, result: ITileAdaptation): void;
}
export declare class Floor extends Default {
    adapt(world: IWorldLayer, x: number, y: number, terrainType: TerrainType, result: ITileAdaptation): void;
}
