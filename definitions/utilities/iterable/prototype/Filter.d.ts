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
         * Returns an iterable that will loop only over the entries that match the given filter
         * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
         *
         * Note: The only difference between this method and `filter2` is the type argument: This method excludes the type argument,
         * while the other returns it.
         */
        filter<X = never>(filter: (val: T) => any): IterableIterator<Exclude<T, X>>;
        /**
         * Returns an iterable that will loop only over the entries that match the given filter
         * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
         *
         * Note: The only difference between this method and `filter` is the type argument: This method returns the type argument,
         * while the other excludes it.
         */
        filter2<X = T>(filter: (val: T) => any): IterableIterator<X>;
    }
}
export declare function filter(this: IterableIterator<any>, filterer: (val: any) => boolean): IterableIterator<any>;
export declare function filter2(this: IterableIterator<any>, filterer: (val: any) => boolean): IterableIterator<any>;
