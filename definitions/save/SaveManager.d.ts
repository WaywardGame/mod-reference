import { ISaveInfo, ISaveManager, SaveObject, SaveSort, SortDirection } from "save/ISaveManager";
export default class SaveManager implements ISaveManager {
    private loadedGlobalSlot;
    private readonly dataStorage;
    private multiplayerSlotData;
    isEnabled(): boolean;
    initialize(): Promise<void>;
    /**
     * Returns an array where the index is the slot number, and the value is whether or not the slot is filled
     */
    getSlots(): Promise<boolean[]>;
    /**
     * Returns the indices of the used slots
     */
    getUsedSlots(): Promise<number[]>;
    /**
     * Returns whether or not the slot is used
     */
    isSlotUsed(slot: number): Promise<boolean>;
    /**
     * Returns the number of filled slots
     */
    getSaveCount(): Promise<number>;
    /**
     * Returns the index of the first free slot
     */
    getFirstFreeSlot(): Promise<number | undefined>;
    /**
     * Gets the used slots, ordered by one of a few properties of the saveData in that slot
     */
    getUsedSlotsSorted(sortBy: SaveSort, direction?: SortDirection): Promise<number[]>;
    /**
     * Gets the most recently saved slot
     */
    getMostRecentSlot(): Promise<number>;
    /**
     * Returns a tuple [bytes: number, saveObject: SaveObject]
     */
    save(slot: number, unloading?: boolean): Promise<ISaveInfo>;
    /**
     * Returns whether or not it succeeded
     */
    load(slot: number): Promise<boolean>;
    loadPartial(slot: number): Promise<SaveObject>;
    loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean, importing?: boolean): void;
    loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string | undefined): any;
    /**
     * Returns the number of bytes the save takes up
     */
    savePartialData(slot: number, object: any, key: string, saveObjectKey: string): Promise<number>;
    /**
     *  Returns the number of bytes the save takes up
     */
    savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any): Promise<number>;
    exportSave(slot: number): Promise<SaveObject>;
    /**
     * Returns the number of bytes the save takes up, or undefined, if an error occurs
     */
    importSave(slot: number, saveObject: SaveObject | string): Promise<number | undefined>;
    deleteSlot(slot: number): Promise<boolean | undefined>;
    deleteAllSlots(): Promise<boolean | undefined>;
    deleteAllData(): Promise<void>;
    compressSave(slot: number, saveObject: SaveObject, exporting?: boolean): void;
    decompressSave(slot: number, saveObject: SaveObject, importing?: boolean): void;
    getGameStateAsJson(): string;
    private getPropertiesToSerialize;
    private compressString;
    private decompressString;
    private createSaveObject;
    private saveSlot;
    /**
     * Returns the number of bytes the save takes up
     */
    private saveObjectToSlot;
}
