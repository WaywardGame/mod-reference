import IByteGrid from "renderer/fieldofview/IByteGrid";
export default class ByteGrid implements IByteGrid {
    width: number;
    height: number;
    size: number;
    data: Uint8Array;
    constructor(width: number, height?: number);
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    rawSet(i: number, value: number): void;
    clear(): void;
}
