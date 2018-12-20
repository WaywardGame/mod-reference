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
import Spliterables from "utilities/iterable/Spliterables";
declare module Collectors {
    function toArray<T>(iterable: IterableOf<T>): T[];
    function toMap<K, V>(iterable: IterableOf<[K, V]>): Map<any, any>;
    function toString(join: string): (iterable: IterableOf<any>) => string;
    function addTo<T>(set: Set<T>): (iterable: IterableOf<T>) => Set<T>;
    function pushTo<T>(arr: T[]): (iterable: IterableOf<T>) => T[];
    function setTo<K, V>(map: Map<K, V>): (iterable: IterableOf<[K, V]>) => Map<K, V>;
    /**
     * Returns the first value in this iterator, or `undefined` if there are no values.
     */
    function first(): <X>(iterable: IterableOf<X>) => X | undefined;
    /**
     * Returns the first value in this iterator.
     * @param orElse Returns this if there are no values.
     */
    function first<T>(orElse?: T): <X>(iterable: IterableOf<X>) => X | T;
    /**
     * Returns the last value in this iterator, or `undefined` if there are no values.
     *
     * Note: Requires looping through every entry in this iterator.
     */
    function last(): <X>(iterable: IterableOf<X>) => X | undefined;
    /**
     * Returns the last value in this iterator.
     * @param orElse Returns this if there are no values.
     *
     * Note: Requires looping through every entry in this iterator.
     */
    function last<T>(orElse?: T): <X>(iterable: IterableOf<X>) => X | T;
    /**
     * Returns a random value in this iterator, or `undefined` if there are no values.
     *
     * Note: Requires looping through every entry in this iterator.
     */
    function random(): <X>(iterable: IterableOf<X>) => X | undefined;
    /**
     * Returns a random value in this iterator.
     * @param orElse Returns this if there are no values.
     *
     * Note: Requires looping through every entry in this iterator.
     */
    function random<T>(orElse?: T): <X>(iterable: IterableOf<X>) => X | T;
    /**
     * Returns a value in this iterator at the specified index, or `undefined` if there is no value there.
     *
     * Note: Requires looping through every entry in this iterator up until the index.
     */
    function at(index: number): <X>(iterable: IterableOf<X>) => X;
    /**
     * Returns a value in this iterator at the specified index.
     * @param orElse Returns this if there is no value at the specified index.
     *
     * Note: Requires looping through every entry in this iterator up until the index.
     */
    function at<T>(index: number, orElse?: T): <X>(iterable: IterableOf<X>) => X | T;
    /**
     * Returns an object of iterators mapped by a splitter function.
     * @param splitter Takes a value from the iterator and returns which resulting iterator it should be part of.
     */
    function split<T, K>(splitter: (value: T) => K): (iterable: IterableOf<T>) => Spliterables<K, T>;
    /**
     * Returns a tuple containing whether the iterable has any values, and a replacement iterable (since the original
     * will no longer have its first value)
     */
    function hasAny<T>(iterable: IterableIterator<T>): [boolean, IterableIterator<T>];
    /**
     * Creates a collector function where all the values in the iterable are passed to the given function,
     * and returns the result of that function.
     * @param fn The function that takes any number of `T`.
     * @param strategy `PassStrategy.Splat`
     */
    function passTo<T, X>(fn: (...args: T[]) => X, strategy: PassStrategy.Splat): (iterable: IterableOf<T>) => X;
    /**
     * Creates a collector function where a value in the iterable is passed to the given function,
     * and returns the result of that function.
     * @param fn The function that takes the type of `T`.
     * @param strategy The strategy with which to choose which value in the iterable to return.
     * Defaults to `PassStrategy.First`
     */
    function passTo<T, X>(fn: (arg: T) => X, strategy?: PassStrategy): (iterable: IterableOf<T>) => X;
}
export declare enum PassStrategy {
    First = 0,
    Last = 1,
    Random = 2,
    Splat = 3
}
export default Collectors;
