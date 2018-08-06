/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 *
 *
 */
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
