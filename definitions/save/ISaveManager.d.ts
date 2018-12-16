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
import IPlayer from "player/IPlayer";
import IClientStore from "save/clientStore/IClientStore";
import { ISerializer } from "save/ISerializer";
export interface ISaveManager {
    compressSave(slot: number, saveObject: SaveObject, exporting?: boolean): void;
    decompressSave(slot: number, saveObject: SaveObject, importing?: boolean): void;
    deleteAllData(): Promise<void>;
    deleteAllSlots(): Promise<boolean | undefined>;
    deleteSlot(slot: number): Promise<boolean | undefined>;
    exportSave(slot: number): Promise<SaveObject>;
    getClientStore(player?: IPlayer): IClientStore;
    getFirstFreeSlot(): Promise<number | undefined>;
    getGameStateAsJson(cleanup?: boolean): string;
    getMostRecentSlot(): Promise<number>;
    getSaveCount(): Promise<number>;
    getSlots(): Promise<boolean[]>;
    getUsedSlots(): Promise<number[]>;
    getUsedSlotsSorted(sortBy: SaveSort, direction?: SortDirection): Promise<number[]>;
    importSave(slot: number, data: SaveObject | string): Promise<number | undefined>;
    initialize(): void;
    isEnabled(): boolean;
    isSlotUsed(slot: number): Promise<boolean>;
    load(slot: number): Promise<boolean>;
    loadPartial(slot: number): Promise<SaveObject>;
    loadPartialData(saveObject: SaveObject, object: any, key: string, saveObjectKey?: string, skipCompression?: boolean, importing?: boolean): void;
    loadPartialDataInside(saveObject: SaveObject, saveObjectKey: string, key?: string | undefined): any;
    save(slot: number, unloading?: boolean): Promise<ISaveInfo>;
    savePartialData(slot: number, object: any, key: string, saveObjectKey: string): Promise<number>;
    savePartialDataInside(slot: number, saveObjectKey: string, key: string, value: any): Promise<number>;
    getSerializer(): ISerializer;
}
export default ISaveManager;
export interface ISaveInfo {
    slot: number;
    bytes?: number;
    saveObject?: SaveObject;
}
export declare enum SaveSort {
    SaveTime = 0,
    Name = 1,
    TurnCount = 2,
    CreatedTime = 3
}
export declare enum SortDirection {
    More = 1,
    Less = -1
}
export declare let SLOT_CHALLENGE: number;
export declare let SLOT_GLOBAL: number;
export declare let SLOT_MULTIPLAYER: number;
export declare let SLOT_COUNT_MAX: number;
export declare let propertiesToSerialize: ISerializeProperty[];
export declare let propertiesToSerializeGlobal: ISerializeProperty[];
export declare class SaveObject {
    version: string;
    data: any;
    isCompressed: boolean;
}
export interface ISerializeProperty {
    key: string;
    property: string[];
    skipCompression?: boolean;
}
