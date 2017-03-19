import { ITileEvent, TileEventType } from "ITileEvent";
export interface ITileEventManager {
    create(type: TileEventType, x: number, y: number, z: number): ITileEvent | undefined;
    remove(tileEventId: number): void;
    updateAll(): void;
}
export default ITileEventManager;
