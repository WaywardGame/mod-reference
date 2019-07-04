/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import IDataStorage from "save/datastorage/IDataStorage";
import { ISaveObject } from "save/ISaveManager";
export default class LocalStorageDataStorage implements IDataStorage {
    isEnabled(): boolean;
    isReady(): boolean;
    isSlotUsed(slot: number, interval?: number): boolean;
    saveToSlot(slot: number, saveObject: ISaveObject): number;
    loadFromSlot(slot: number): ISaveObject;
    deleteSlot(slot: number): boolean;
    deleteAllSlots(): boolean;
    deleteAllData(): void;
    /**
     * Enumerates all the keys in local storage for the given slot
     * @param slot Slot number
     */
    private getLocalStorageSlotKeys;
}
