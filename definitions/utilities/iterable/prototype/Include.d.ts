/*!
 * Copyright Unlok, Vaughn Royko 2011-2018
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
         * Returns an iterable that will first loop over the entries in itself, then the entries given
         * @param items The other items to loop over
         */
        include<X = T>(...items: Array<IterableOf<X>>): IterableIterator<T | X>;
    }
}
export declare function include(this: IterableIterator<any>, ...iterables: Array<IterableOf<any>>): IterableIterator<any>;
