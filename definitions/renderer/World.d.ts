import IWorld from "renderer/IWorld";
import IWorldLayer from "renderer/IWorldLayer";
import ISerializer from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export default class World implements IWorld {
    width: number;
    height: number;
    layers: IWorldLayer[];
    private loaded;
    constructor(width: number, height: number);
    delete(): void;
    toLocal(world: number, local: number): number;
    addLayer(level: number): void;
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    setupExploredMap(): void;
    resetExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile): void;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
