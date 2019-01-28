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
    interface IterableIterator<T> {
        /**
         * Returns an iterator returning only the values between `startIndex` and `endIndex`.
         * @param startIndex Inclusive
         * @param endIndex Exclusive, defaults to `Infinity` (entire iterator)
         *
         * Note: When passed negative indices, it works, but it's slower as it has to loop through
         * the entire iterable first.
         */
        slice(startIndex: number, endIndex?: number): IterableIterator<T>;
    }
}
export declare function slice(this: IterableIterator<any>, startIndex: number, endIndex?: number): IterableIterator<any>;
