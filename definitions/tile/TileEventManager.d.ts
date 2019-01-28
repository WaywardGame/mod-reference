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
import { InspectionResult } from "game/inspection/IInspection";
import Inspection from "game/inspection/Inspect";
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
    inspect(inspection: Inspection, ...events: ITileEvent[]): InspectionResult;
    is(thing: any): thing is ITileEvent;
    private _addToTile;
    private _removeFromTile;
}
