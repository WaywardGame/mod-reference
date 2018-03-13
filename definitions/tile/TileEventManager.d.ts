import { ITile } from "tile/ITerrain";
import { ITileEvent, TileEventType } from "tile/ITileEvent";
import ITileEventManager from "tile/ITileEventManager";
export default class TileEventManager implements ITileEventManager {
    private tileEvents;
    initialize(): void;
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEvent: ITileEvent): void;
    get(tile: ITile, type: TileEventType): ITileEvent | undefined;
    canGather(tile: ITile): ITileEvent | undefined;
    updateAll(): void;
    fireOverflow(x: number, y: number, z: number): void;
}
