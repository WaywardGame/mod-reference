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
declare function Merge<T>(...objs: Array<RecursivePartial<T>>): T;
declare function Merge<T>(...objs: T[]): T;
declare function Merge<O extends any[]>(...objs: O): O[number] & O[number];
declare class Mergeable<T> {
    readonly merge: (value: T | undefined) => T;
    constructor(merge: (value: T | undefined) => T);
    mask(): this & T;
}
declare module Merge {
    function REPLACE<T>(value: T): Mergeable<T> & T;
    function ADD(amt: number): Mergeable<number> & number;
    function SUBTRACT(amt: number): Mergeable<number> & number;
    function MULTIPLY(amt: number): Mergeable<number> & number;
    function DIVIDE(amt: number): Mergeable<number> & number;
    function CONCAT(str: string): Mergeable<string> & string;
    /**
     * Note: "PUSH" is used by default for merging array values.
     */
    function PUSH<T>(...values: T[]): Mergeable<T[]> & T[];
    /**
     * Every value in the existing array is merged with the value in new array by index.
     *
     * Note: Tuples (created with `Tuple()`) use "MERGE_ARRAY" by default.
     */
    function MERGE_ARRAY<A extends any[]>(...values: A): Mergeable<A>;
}
export default Merge;
