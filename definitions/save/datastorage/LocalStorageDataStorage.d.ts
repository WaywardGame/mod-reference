import { IDataStorage, SaveObject } from "save/ISaveManager";
export default class LocalStorageDataStorage implements IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    transferSaves(): void;
    isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: SaveObject, callback: (slot: number, bytes: number) => void): void;
    loadFromSlot(slot: number, saveObject: SaveObject, callback: (slot: number, success: boolean) => void): void;
    deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    deleteAll(callback: () => void): void;
}
