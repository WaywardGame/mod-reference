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
declare global {
    interface Array<T> {
        /**
         * Returns an iterator for the values of this array.
         * @param step By default, `1`, meaning it will iterate through each value in order.
         * Example, `-1` iterates through the array in reverse, while `2` iterates through every other value in the array.
         */
        values(step?: number): IterableIterator<T>;
    }
}
export declare function values(this: any[], step?: number): IterableIterator<any>;
