import { TerrainType } from "Enums";
import { ITile } from "tile/ITerrain";
import { IVector3 } from "utilities/math/IVector";
declare module TileHelpers {
    const maskGfx = 31;
    const maskType = 4064;
    const maskTilled = 4096;
    function getGfx(tile: ITile): number;
    function getGfxRaw(data: number): number;
    function setGfx(tile: ITile, value: number): void;
    function setGfxRaw(data: number, value: number): number;
    function getType(tile: ITile): TerrainType;
    function getTypeRaw(data: number): TerrainType;
    function setType(tile: ITile, value: TerrainType): void;
    function setTypeRaw(data: number, value: TerrainType): number;
    function isTilled(tile: ITile): boolean;
    function isTilledRaw(data: number): boolean;
    function setTilled(tile: ITile, value: boolean): void;
    function setTilledRaw(data: number, value: number): number;
    function getTileVariation(x: number, y: number): number;
    function findMatchingTile(start: IVector3, isMatchingTile?: (point: IVector3, tile: ITile) => boolean, maxTilesChecked?: number, canVisitTile?: (point: IVector3, tile: ITile) => boolean): IVector3 | undefined;
    /**
     * Check is a tile is open
     */
    function isOpenTile(point: IVector3, tile: ITile): boolean;
    /**
     * Check if a tile is a suitable spawn point
     */
    function isSuitableSpawnPointTile(point: IVector3, tile: ITile): boolean;
    function getAdjacentTiles(point: IVector3, includePoint?: boolean): ITile[];
    function getSuitableSpawnPoint(): IVector3;
}
export default TileHelpers;
