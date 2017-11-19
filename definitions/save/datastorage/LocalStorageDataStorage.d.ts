import { IDataStorage, SaveObject } from "save/ISaveManager";
export default class LocalStorageDataStorage implements IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    transferSaves(): void;
    isSlotUsed(slot: number, interval?: number): Promise<boolean>;
    saveToSlot(slot: number, saveObject: SaveObject): Promise<number>;
    loadFromSlot(slot: number, saveObject: SaveObject): Promise<void>;
    deleteSlot(slot: number): Promise<boolean>;
    deleteAllSlots(): Promise<boolean>;
    deleteAllData(): Promise<void>;
}
