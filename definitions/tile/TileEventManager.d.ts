import { ITileEvent, TileEventType } from "tile/ITileEvent";
import ITileEventManager from "tile/ITileEventManager";
export default class TileEventManager implements ITileEventManager {
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEventId: number): void;
    updateAll(): void;
    private update(tileEvent);
}
