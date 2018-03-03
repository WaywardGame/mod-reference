import Emitter from "utilities/Emitter";
export declare enum EnumCursorEvent {
    /**
     * Triggered when the cursor position is changed, for any reason
     */
    Change = 0,
}
declare class EnumCursor<T extends number> extends Emitter {
    protected enumObject: any;
    protected values: T[];
    protected cursor: number;
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
     * If the cursor has been set previously, it will likely be moved to a differnet entry.
     * @param filter A function that takes a name and enum value and returns whether the entry should be included.
     */
    filter(filter: (name: string, value: T) => boolean): this;
    /**
     * Sets the cursor position.
     */
    moveTo(n: number): this;
    /**
     * Returns the entry at the cursor position.
     */
    get(): T;
    /**
     * If the given amount is positive, moves forward that many entries.
     * If the given amount is negative, moves backward that many entries.
     * @returns The entry at the new cursor position.
     */
    move(amt: number): T;
    /**
     * Moves the cursor forward one entry, and returns the new entry.
     */
    next(): T;
    /**
     * Moves the cursor backward one entry, and returns the new entry.
     */
    previous(): T;
    /**
     * Moves the cursor to a random entry, then returns that entry.
     */
    moveToRandom(): T;
}
export default EnumCursor;
