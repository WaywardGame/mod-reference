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
         * Returns an iterable of type X, using the given map function
         * @param mapper A function that maps an entry of type T to its corresponding type X
         */
        map<X>(mapper: (val: T, index: number) => X): IterableIterator<X>;
    }
}
export declare function map<T, X>(this: IterableIterator<T>, mapper: (val: T, index: number) => X): IterableIterator<X>;
