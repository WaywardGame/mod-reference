import { SaveObject } from "save/ISaveManager";
export default interface IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: SaveObject, fakeSave?: boolean): number;
    loadFromSlot(slot: number, saveObject: SaveObject): void;
    deleteSlot(slot: number): boolean;
    deleteAllSlots(): boolean;
    deleteAllData(): void;
}
