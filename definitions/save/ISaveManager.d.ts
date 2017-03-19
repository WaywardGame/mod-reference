export interface ISaveManager {
    compressSave(slot: number, saveObject: SaveObject, exporting?: boolean): void;
    decompressSave(slot: number, saveObject: SaveObject, importing?: boolean): void;
    deleteAll(callback: () => void): void;
    deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    exportSave(slot: number, callback: (slot: number, success: boolean, json: string) => void): void;
    getFirstFreeSlot(callback: (slot: number | null) => void): void;
    getSaveCount(callback: (usedCount: number, usedSlots: number[]) => void, callbackPerSlot?: (slot: number, isUsed: boolean) => void): void;
    getSaveSlots(callback: (slot: number, isUsed: boolean) => void): void;
    importSave(slot: number, data: string, callback: (slot: number | null, bytes: number | null) => void): void;
    initialize(): void;
    isEnabled(): boolean;
    isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void): void;
    load(slot: number, callback: (slot: number, success: boolean) => void): void;
    loadPartial(slot: number, callback: (slot: number, success: boolean, saveObject: SaveObject) => void): void;
    loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean): void;
    loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string | undefined): any;
    save(slot: number, callback: (slot: number, bytes: number, saveObject?: SaveObject) => void): void;
    savePartialData(slot: number, object: any, key: string, saveObjectKey: string, callback: (slot: number, bytes: number) => void): void;
    savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any, callback: (slot: number, bytes: number) => void): void;
    transferSaves(): void;
    useLocalStorage(): void;
}
export default ISaveManager;
export declare let dailyChallengeSlot: number;
export declare let globalSlot: number;
export declare let multiplayerSlot: number;
export declare let maxSlots: number;
export declare let propertiesToSerialize: ISerializeProperty[];
export declare let propertiesToSerializeGlobal: ISerializeProperty[];
export declare class SaveObject {
    version: string;
    data: any;
}
export interface ISerializeProperty {
    key: string;
    property: string[];
    skipCompression?: boolean;
}
export interface IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    transferSaves(): void;
    isSlotUsed(slot: number, callback: (slot: number, isUsed: boolean) => void, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: SaveObject, callback: (slot: number, bytes: number) => void, fakeSave?: boolean): void;
    loadFromSlot(slot: number, saveObject: SaveObject, callback: (slot: number, success: boolean) => void): void;
    deleteSlot(slot: number, callback: (slot: number, success: boolean) => void): void;
    deleteAll(callback: () => void): void;
}
