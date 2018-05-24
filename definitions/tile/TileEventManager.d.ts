import { ITile } from "tile/ITerrain";
import { ITileEvent, TileEventType } from "tile/ITileEvent";
import ITileEventManager from "tile/ITileEventManager";
export default class TileEventManager implements ITileEventManager {
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEvent: ITileEvent): void;
    moveTo(tileEvent: ITileEvent, x: number, y: number, z: number): void;
    get(tile: ITile, type: TileEventType): ITileEvent | undefined;
    canGather(tile: ITile): ITileEvent | undefined;
    updateAll(): void;
    fireOverflow(x: number, y: number, z: number): void;
    getMovementProgress(tileEvent: ITileEvent): number;
    private _addToTile(tileEvent, x, y, z, tile);
    private _removeFromTile(tileEvent, x, y, z, updateTile);
}
