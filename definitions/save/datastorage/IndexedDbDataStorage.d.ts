import IAsyncDataStorage from "save/datastorage/IAsyncDataStorage";
import { SaveObject } from "save/ISaveManager";
export default class IndexedDbDataStorage implements IAsyncDataStorage {
    private database;
    private readonly databaseName;
    private readonly objectStoreNameSaves;
    private ready;
    private readonly dataStorageLocalStorage;
    constructor();
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number): Promise<boolean>;
    saveToSlot(slot: number, saveObject: SaveObject, unloading?: boolean): Promise<number>;
    loadFromSlot(slot: number, saveObject: SaveObject): Promise<void>;
    deleteSlot(slot: number): Promise<boolean>;
    deleteAllSlots(): Promise<boolean>;
    deleteAllData(): Promise<any>;
    private openIndexedDb;
    private transferSaves;
    private transferFromLocalStorageToIndexedDb;
    private waitForDatabase;
}
