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
import { IModInfo } from "mod/IModInfo";
declare module Enums {
    function isModdable(enumObject: any): boolean;
    function getModStart(enumObject: any): number;
    /**
     * Returns whether this enum entry is modded.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param entry The entry in the enum. Usually its index.
     */
    function isModded<E, K extends string>(enumObject: {
        [key in K]: E;
    }, entry: E): boolean;
    function getMod<O>(enumObject: O, enumName: keyof O, isGlobalEnum: boolean): IModInfo | undefined;
    /**
     * Returns an enum entry by its name, case-insensitive.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param name The name of the enum entry. Case-insensitive.
     * @returns The enum entry, if found; otherwise `undefined`.
     */
    function findByName<E, K extends string>(enumObject: {
        [key in K]: E;
    }, name: K): E;
    /**
     * Returns an enum entry by its index. The order is not guaranteed.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param n The index of the enum entry.
     * @returns The enum entry, or if out of bounds, `undefined`.
     *
     * This is used internally for getting random enum entries. @see `Enums.getRandom()`
     */
    function getNth<E, K extends string>(enumObject: {
        [key in K]: E;
    }, n: number): E | undefined;
    /**
     * Returns the number of entries in this enum.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     *
     * This data is cached. Only changes caused by `EnumManager.allocate` and `EnumManager.unallocate`
     * will cause the length to be regenerated, and it will only be generated in the first place if
     * this method is called. The length is stored internally in the @param enumObject via `EnumProperty.LENGTH`
     */
    function getLength(enumObject: any): any;
    /**
     * Returns a random enum entry.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param filter Repeats the choice until the random value matches the filter
     *
     * Note: Each call to this method requires a loop on the full enum until reaching the
     * index of the randomly chosen entry. Do not call this often.
     *
     * Note: Uses seeded random. Using this method on non-game methods may cause seed desyncs.
     *
     * Note: When provided with a filter & most values in the enum don't match, this method can
     * take a very long time. *Use the filter with caution.*
     */
    function getRandom<T>(enumObject: T, filter?: (value: T[keyof T]) => boolean): T[keyof T];
    /**
     * Iterate over the names of the entries in an enum.
     */
    function keys<E, K extends string>(enumObject: {
        [key in K]: E;
    }): IterableIterator<K>;
    /**
     * Iterate over the values in an enum.
     */
    function values<T>(enumObject: T): IterableIterator<T[keyof T]>;
    /**
     * Iterate over the entries in an enum. Yields a tuple containing the name and value of each entry.
     */
    function entries<T>(enumObject: T): IterableIterator<[keyof T, T[keyof T]]>;
    /**
     * Returns whether the given number is a valid entry in an enum.
     * @param enumObject The enum object to check for the entry.
     * @param entry The value to check.
     * @param isBasicEnum Whether the enum is a "basic" enum; IE, every entry is a number between 0 and Infinity
     */
    function isValid<E, K extends string>(enumObject: {
        [key in K]: E;
    }, entry: unknown, isBasicEnum?: boolean): entry is E;
    function toString(enumObject: any, n: number): string;
}
export default Enums;
