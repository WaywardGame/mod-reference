import { ITile } from "tile/ITerrain";
import { ITileEvent, TileEventType } from "tile/ITileEvent";
export interface ITileEventManager {
    initialize(): void;
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEvent: ITileEvent): void;
    get(tile: ITile, type: TileEventType): ITileEvent | undefined;
    canHarvest(tile: ITile): boolean;
    updateAll(): void;
}
export default ITileEventManager;
