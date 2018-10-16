/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import IDataStorage from "save/datastorage/IDataStorage";
import { SaveObject } from "save/ISaveManager";
export default class LocalStorageDataStorage implements IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: SaveObject): number;
    loadFromSlot(slot: number, saveObject: SaveObject): void;
    deleteSlot(slot: number): boolean;
    deleteAllSlots(): boolean;
    deleteAllData(): void;
}
