import IDataStorage from "save/datastorage/IDataStorage";
import { SaveObject } from "save/ISaveManager";
export default class LocalStorageDataStorage implements IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: SaveObject): number;
    loadFromSlot(slot: number, saveObject: SaveObject): void;
    deleteSlot(slot: number): boolean;
    deleteAllSlots(): boolean;
    deleteAllData(): void;
}
