import Emitter from "utilities/Emitter";
export declare enum EnumCursorEvent {
    /**
     * Triggered when the cursor position is changed, for any reason
     */
    Change = 0
}
export declare enum EnumCursorDefaultGenerator {
    Random = "Random"
}
declare class EnumCursor<T extends number> extends Emitter {
    protected enumObject: any;
    protected values: T[];
    protected cursor: number;
    protected default: number | (() => number);
    private _filter;
    /**
     * @param enumObject The full enumeration.
     * @param n The starting position of the cursor. Defaults to `0`.
     */
    constructor(enumObject: any, n?: number);
    /**
     * Refreshes the internal list of enum entries. If the full enumeration has changed,
     * the cursor may be moved to a different entry.
     */
    refresh(): this;
    /**
     * Filters the valid enum entries. This causes the internal list of enum entries to be refreshed.
     * If the cursor has been set previously, it will likely be moved to a different entry.
     * @param filter A function that takes a name and enum value and returns whether the entry should be included.
     */
    filter(filter: (name: string, value: T) => boolean): this;
    /**
     * Returns the entry at the cursor position.
     */
    get(): T;
    /**
     * Sets the cursor position.
     */
    moveTo(n: number): this;
    /**
     * Sets the cursor position to the position of this enum entry in the filtered list.
     * @returns The entry at the new cursor position.
     */
    moveToEnumEntry(entry: T): T;
    /**
     * If the given amount is positive, moves forward that many entries.
     * If the given amount is negative, moves backward that many entries.
     * @returns The entry at the new cursor position.
     */
    move(amt: number): T;
    /**
     * Moves the cursor to a random entry, then returns that entry.
     */
    moveToRandom(): T;
    /**
     * Moves to the default cursor position.
     */
    moveToDefault(): T;
    /**
     * Moves the cursor forward one entry, and returns the new entry.
     */
    next(): T;
    /**
     * Moves the cursor backward one entry, and returns the new entry.
     */
    previous(): T;
    /**
     * Sets the default cursor position.
     */
    setDefault(n: number): this;
    /**
     * Sets a handler for retrieving the default cursor position.
     */
    setDefault(generator: () => number): this;
    /**
     * Sets a handler for retrieving the default cursor position to a pre-implemented method by
     * `EnumCursorDefaultGenerator` entry.
     */
    setDefault(defaultGenerator: EnumCursorDefaultGenerator): this;
    /**
     * Sets the default cursor position to the position of the given entry in this cursor.
     */
    setDefaultToEntry(entry: T): this;
    /**
     * Retrieves a random cursor position
     */
    getRandomPosition(): number;
    private getDefaultGenerator;
}
export default EnumCursor;
