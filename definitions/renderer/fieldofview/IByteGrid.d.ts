export interface IByteGrid {
    width: number;
    height: number;
    size: number;
    data: Uint8Array;
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    rawSet(i: number, value: number): void;
    clear(): void;
}
export default IByteGrid;
