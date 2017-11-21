import IAsyncDataStorage from "save/datastorage/IAsyncDataStorage";
import { SaveObject } from "save/ISaveManager";
export default class IndexedDbDataStorage implements IAsyncDataStorage {
    private database;
    private databaseName;
    private objectStoreNameSaves;
    private ready;
    private criticalError;
    private dataStorageLocalStorage;
    constructor();
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number): Promise<boolean>;
    saveToSlot(slot: number, saveObject: SaveObject, unloading?: boolean): Promise<number>;
    loadFromSlot(slot: number, saveObject: SaveObject): Promise<void>;
    deleteSlot(slot: number): Promise<boolean>;
    deleteAllSlots(): Promise<boolean>;
    deleteAllData(): Promise<any>;
    private transferSaves();
    private transferFromLocalStorageToIndexedDb(slot);
    private waitForDatabase();
}
