import IWorldLayer from "renderer/IWorldLayer";
import { ISerializable } from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export interface IWorld extends ISerializable {
    width: number;
    height: number;
    layers: IWorldLayer[];
    delete(): void;
    toLocal(world: number, local: number): number;
    addLayer(level: number): void;
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    setupExploredMap(): void;
    resetExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile): void;
}
export declare type TerrainData = number;
export default IWorld;
