declare module Enums {
    /**
     * Returns whether this enum entry is modded.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param entry The entry in the enum. Usually its index.
     */
    function isModded<Enum extends number | string = number>(enumObject: any, entry: Enum): boolean;
    /**
     * Returns an enum entry by its name, case-insensitive.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param name The name of the enum entry. Case-insensitive.
     * @returns The enum entry, if found; otherwise `undefined`.
     */
    function findByName<Enum extends number | string = number>(enumObject: any, name: string): Enum | undefined;
    /**
     * Returns an enum entry by its index. The order is not guaranteed.
     * @param enumObject The full enumeration. EG: ItemType, CreatureType, DoodadType, etc
     * @param n The index of the enum entry.
     * @returns The enum entry, or if out of bounds, `undefined`.
     *
     * This is used internally for getting random enum entries. @see `Enums.getRandom()`
     */
    function getNth<Enum extends number | string = number>(enumObject: any, n: number): Enum | undefined;
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
     *
     * Each call to this method requires a loop on the full enum until reaching the
     * index of the randomly chosen entry. Do not call this often.
     *
     * Uses seeded random. Using this method on non-game methods may cause seed desyncs.
     */
    function getRandom<Enum extends number | string = number>(enumObject: any): Enum;
    /**
     * Iterate over the names of the entries in an enum.
     */
    function keys<K extends string>(enumObject: any): IterableIterator<K>;
    /**
     * Iterate over the values in an enum.
     */
    function values<Enum extends number | string = number>(enumObject: any): IterableIterator<Enum>;
    /**
     * Iterate over the entries in an enum. Yields a tuple containing the name and value of each entry.
     */
    function entries<Enum extends number | string = number>(enumObject: any): IterableIterator<[string, Enum]>;
    function toString(enumObject: any, n: number): string;
}
export default Enums;
