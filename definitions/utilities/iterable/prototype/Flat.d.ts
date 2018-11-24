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
         * Returns a new iterator iterating over every value of the result of calling the mapper function on each value
         * in the current iterator.
         *
         * For example:
         * ```ts
         * [[1, 2, 3], [4, 5, 6]]
         * 	.flatMap(numberArray => numberArray
         * 		.map(num => num + 1))
         * // result: [2, 3, 4, 5, 6, 7]
         * ```
         */
        flatMap<X>(mapper: (value: T) => IterableOf<X>): IterableIterator<X>;
        /**
         * Returns a new iterator iterating over every value of each value of this iterator. The values in this
         * iterator must be iterable.
         */
        flatMap(): T extends IterableOf<infer X> ? IterableIterator<X> : never;
        /**
         * Returns a new iterator iterating over every value of each value of this iterator. The values in this
         * iterator must be iterable.
         */
        flatMap<X>(): IterableIterator<X>;
    }
}
export declare function flatMap(this: IterableOf<any>, mapper?: (value: any) => any): IterableIterator<any>;
