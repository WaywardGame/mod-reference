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
         * Loops through the values of this iterable until the predicate returns `true` for an entry.
         * @param predicate A function that will return `true` or `false` for an entry in this iterable.
         * @returns Whether the predicate ever returned `true`.
         */
        any(predicate: (val: T, index: number) => boolean): boolean;
        /**
         * Loops through the values of this iterable until the predicate returns `false` for an entry.
         * @param predicate A function that will return `true` or `false` for an entry in this iterable.
         * @returns Whether the predicate ever returned `false`.
         */
        nevery(predicate: (val: T, index: number) => boolean): boolean;
        /**
         * Loops through the values of this iterable until the predicate returns `false` for an entry.
         * @param predicate A function that will return `true` or `false` for an entry in this iterable.
         * @returns Whether the predicate always returned `true`.
         */
        every(predicate: (val: T, index: number) => boolean): boolean;
        /**
         * Loops through the values of this iterable until the predicate returns `true` for an entry.
         * @param predicate A function that will return `true` or `false` for an entry in this iterable.
         * @returns Whether the predicate always returned `false`.
         */
        none(predicate: (val: T, index: number) => boolean): boolean;
    }
}
export declare function any(this: IterableIterator<any>, predicate: (val: any, index: number) => boolean): boolean;
export declare function nevery(this: IterableIterator<any>, predicate: (val: any, index: number) => boolean): boolean;
export declare function every(this: IterableIterator<any>, predicate: (val: any, index: number) => boolean): boolean;
export declare function none(this: IterableIterator<any>, predicate: (val: any, index: number) => boolean): boolean;
