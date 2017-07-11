import { ITileEvent } from "tile/ITileEvent";
export default class FireTileEvent {
    static create(tileEvent: ITileEvent): void;
    static remove(tileEvent: ITileEvent): void;
    static update(tileEvent: ITileEvent): void;
}
