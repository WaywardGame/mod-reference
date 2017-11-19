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
    isSlotUsed(slot: number): Promise<boolean>;
    saveToSlot(slot: number, saveObject: SaveObject, fakeSave?: boolean): Promise<number>;
    loadFromSlot(slot: number, saveObject: SaveObject): Promise<void>;
    deleteSlot(slot: number): Promise<boolean>;
    deleteAllSlots(): Promise<boolean>;
    deleteAllData(): Promise<any>;
    private transferFromLocalStorageToIndexedDb(slot);
    private waitForDatabase();
}
