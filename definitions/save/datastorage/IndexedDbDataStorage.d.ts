import { IDataStorage, SaveObject } from "save/ISaveManager";
export default class IndexedDbDataStorage implements IDataStorage {
    private database;
    private databaseName;
    private objectStoreNameSaves;
    private ready;
    private criticalError;
    private dataStorageLocalStorage;
    constructor();
    isEnabled(): boolean;
    isReady(): boolean;
    transferSaves(): void;
    isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: SaveObject, callback: (slot: number, bytes: number) => void, fakeSave?: boolean): void;
    loadFromSlot(slot: number, saveObject: SaveObject, callback: (slot: number, success: boolean) => void, interval?: number): boolean;
    deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    deleteAll(callback: () => void): void;
    private transferFromLocalStorageToIndexedDb(slot);
    private waitForDatabase(callback, interval?);
}
