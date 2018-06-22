import { ITile } from "tile/ITerrain";
import { ITileEvent, TileEventType } from "tile/ITileEvent";
export interface ITileEventManager {
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEvent: ITileEvent): void;
    moveTo(tileEvent: ITileEvent, x: number, y: number, z: number): void;
    getMovementProgress(tileEvent: ITileEvent): number;
    get(tile: ITile, type: TileEventType): ITileEvent | undefined;
    canGather(tile: ITile): ITileEvent | undefined;
    updateAll(): void;
    fireOverflow(x: number, y: number, z: number): void;
}
export default ITileEventManager;
