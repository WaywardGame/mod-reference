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
import IStream from "utilities/stream/IStream";
import Partitions from "utilities/stream/Partitions";
export interface IUnzippedPartitions<K, V> {
    get(partition: "key"): Stream<K>;
    get(partition: "value"): Stream<V>;
    partitions(): Stream<["key", Stream<K>] | ["value", Stream<V>]>;
}
export default class Stream<T> implements Iterable<T>, IStream<T> {
    static fromIterable<T>(iterable: Iterable<T>): Stream<T>;
    static of<A extends any[]>(...args: A): Stream<A[number]>;
    /**
     * Returns a Stream that iterates over the entries of a map, in key-value tuples.
     */
    static entries<K, V>(map?: Map<K, V>): Stream<[K, V]>;
    /**
     * Returns a Stream that iterates over the entries of an object, in key-value tuples.
     */
    static entries<T extends object>(obj?: T): Stream<[Extract<keyof T, string>, T[Extract<keyof T, string>]]>;
    /**
     * Returns a Stream that iterates over the entries of an object, in key-value tuples.
     */
    static entries<K, V>(obj?: any): Stream<[K, V]>;
    /**
     * Returns a Stream that iterates over the entries of a Descriptions object, in key-value tuples.
     */
    static descriptions<E extends number, T>(obj?: Descriptions<E, T>): Stream<[E, T]>;
    /**
     * Returns a Stream that iterates over the keys of a map.
     */
    static keys<K>(map: Map<K, any>): Stream<K>;
    /**
     * Returns a Stream that iterates over the keys of an object.
     */
    static keys<T extends object>(obj: T): Stream<keyof T>;
    /**
     * Returns a Stream that iterates over the entries of an object, in key-value tuples.
     */
    static keys<E extends number, T>(obj?: Descriptions<E, T>): Stream<E>;
    /**
     * Returns a Stream that iterates over the keys of an object.
     */
    static keys<K extends string | number>(obj: {
        [key in K]: any;
    }): Stream<K>;
    /**
     * Returns a Stream that iterates over the values of a map.
     */
    static values<V>(map: Map<any, V>): Stream<V>;
    /**
     * Returns a Stream that iterates over the keys of an object.
     */
    static values<E extends number, T>(obj?: Descriptions<E, T>): Stream<T>;
    /**
     * Returns a Stream that iterates over the values of an object.
     */
    static values<T extends object>(obj: T): Stream<keyof T>;
    /**
     * Takes two iterables representing "keys" and "values", and turns them into a Stream of 2-value tuples. The resulting
     * Stream will end when either of the iterables runs out of items. (Its size will be that of the smaller of the two
     * input iterables/streams).
     */
    static zip<K, V>(keysIterable: Iterable<K> | Stream<K>, valuesIterable: Iterable<V> | Stream<V>): Stream<[K, V]>;
    private readonly iterators;
    private iteratorIndex;
    private readonly actions;
    private _value;
    private _done;
    private doneNext;
    readonly value: T;
    readonly done: boolean;
    private constructor();
    [Symbol.iterator](): {
        next: () => {
            done: boolean;
            value: T;
        };
    };
    /**
     * Returns a Stream that will loop only over the entries that match the given filter
     * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
     *
     * Note: The only difference between this method and `filter2` is the type argument: This method excludes the type argument,
     * while the other returns it.
     */
    filter<X = never>(filter: (val: T) => any): Stream<Exclude<T, X>>;
    /**
     * Returns a Stream that will loop only over the entries that match the given filter
     * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
     *
     * Note: The only difference between this method and `filter` is the type argument: This method returns the type argument,
     * while the other excludes it.
     */
    filter2<X = T>(filter: (val: T) => any): Stream<X>;
    /**
     * Returns a Stream of type X, using the given mapper function
     * @param mapper A function that maps an entry of type T to its corresponding type X
     */
    map<X>(mapper: (val: T) => X): Stream<X>;
    /**
     * Returns a new Stream iterating over each value of the current iterator, first run through the given mapper function.
     *
     * For example:
     * ```ts
     * [[1, 2, 3], [4, 5, 6]]
     * 	.flatMap(numberArray => numberArray
     * 		.map(num => num + 1))
     * // result: [2, 3, 4, 5, 6, 7]
     * ```
     */
    flatMap<X>(mapper: (value: T) => IterableOf<X>): Stream<X>;
    /**
     * Returns a new Stream iterating over every value of each value of this iterator. The values in this
     * Stream must be iterable.
     */
    flatMap(): T extends IterableOf<infer X> ? Stream<X> : never;
    /**
     * Returns a new Stream iterating over every value of each value of this Stream. The values in this
     * Stream must be iterable.
     */
    flatMap<X>(): Stream<X>;
    /**
     * Returns a Stream which will only go through the first X items, where X is the given argument.
     */
    take(amount: number): this;
    /**
     * Returns a Stream which will only iterate through the items in this Stream until the predicate doesn't match.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    takeWhile(predicate: (val: T) => boolean): this;
    /**
     * Returns a Stream which will skip the first X items, where X is the given argument.
     */
    drop(amount: number): this;
    /**
     * Returns a Stream which will skip the items in this Stream until the predicate doesn't match.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    dropWhile(predicate: (val: T) => boolean): this;
    /**
     * Returns a new Stream which contains the sorted contents of this stream. The values are sorted in ascending ASCII order.
     */
    sorted(): Stream<T>;
    /**
     * Returns a new Stream which contains the sorted contents of this Stream.
     * @param comparator A function that returns a "difference" between `a` and `b`, for sorting by.
     */
    sorted(comparator: (a: T, b: T) => number): Stream<T>;
    /**
     * Returns a new Stream which contains the contents of this Stream, in reverse order.
     */
    reverse(): Stream<T>;
    /**
     * Returns a new Stream which contains only unique items in this Stream.
     *
     * Note: Alias of `Stream.fromIterable(stream.toSet())`
     */
    distinct(): Stream<T>;
    /**
     * Returns a `Partitions` instance which allows sorting items of this Stream into separate sub-streams, or "partitions".
     * @param sorter A function which takes an item in this Stream and maps it to the "key" of its partition.
     *
     * Example:
     * ```ts
     * Stream.of("dog", "horse", "cat", "pig", "goat", "chicken", "cow")
     * 	.partition(animal => animal.length) // splits the animal list into partitions by the length of their names
     * 	.get(3) // gets the partition of animals with 3 letter long names
     * 	.toArray(); // ["dog", "cat", "pig", "cow"]
     * ```
     */
    partition<K>(sorter: (val: T) => K): Partitions<T, K>;
    /**
     * Returns a `Partitions` instance where the T items (should be 2-value Tuples) of this Stream are split into two
     * partition Streams: "key" and "value".
     */
    unzip(): T extends [infer K, infer V] ? IUnzippedPartitions<K, V> : never;
    /**
     * Returns a new Stream containing the items in this Stream and then the items provided.
     */
    add<N>(...items: N[]): Stream<T | N>;
    /**
     * Returns a new Stream containing the items in this Stream and then the items in all provided Streams or Iterables.
     */
    merge<N>(...iterables: Array<Stream<N> | Iterable<N>>): Stream<T | N>;
    /**
     * Returns a new Stream of the same type, after first collecting this Stream into an array.
     *
     * This method is an alias of `Stream.fromIterable(stream.toArray())`.
     */
    collectStream(): Stream<T>;
    /**
     * Returns the item at the given index.
     *
     * Note: An alias for `drop(index - 1).first()`.
     */
    at(index: number, orElse?: T): T;
    /**
     * Returns true if the predicate returns true for any of the items in this Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    any(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns true for any of the items in this Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `any()`
     */
    some(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns true for every item in the Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    every(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns true for every item in the Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `every()`
     */
    all(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns false for every item in the Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    none(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns whether the Stream includes any of the the given values. Uses strict equality comparison. `===`
     */
    includes(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes any of the the given values. Uses strict equality comparison. `===`
     *
     * Note: Alias of `includes()`
     */
    contains(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes any of the the given values. Uses strict equality comparison. `===`
     *
     * Note: Alias of `includes()`
     */
    has(...values: T[]): boolean;
    /**
     * Returns the number of items in this Stream.
     */
    count(): number;
    /**
     * Returns a new value by combining the items in this Stream using the given reducer function.
     * @param reducer A function which takes the current value and the next value and returns a new value.
     */
    fold<R>(initial: R, folder: (current: R, newValue: T, index: number) => R): R;
    /**
     * **This method does not work like JS reduce.**
     *
     * Returns a single `T` by combining the items in this Stream using the given reducer function.
     * @param reducer A function which takes the current value and the next value and returns a new value of the same type.
     */
    reduce(reducer: (current: T, newValue: T, index: number) => T): T;
    /**
     * Returns the first item in this Stream.
     */
    first(): T;
    /**
     * Returns the first item in this Stream that matches a predicate.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    first(predicate?: (val: T, index: number) => boolean, orElse?: T): T;
    /**
     * Returns the first item in this Stream.
     *
     * Note: Alias of `first()`
     */
    find(): T;
    /**
     * Returns the first item in this Stream that matches a predicate.
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `first()`
     */
    find(predicate?: (val: T, index: number) => boolean, orElse?: T): T;
    /**
     * Returns the last item in this Stream.
     */
    last(): T;
    /**
     * Returns the last item in this Stream that matches a predicate.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    last(predicate: (val: T, index: number) => boolean, orElse?: T): T;
    /**
     * Returns a value of type X, generated with the given collector function.
     * @param collector A function that takes the iterable, and returns type X
     */
    collect<R>(collector: (stream: Stream<T>) => R): R;
    /**
     * Collects the items in this Stream to an array.
     */
    toArray(): T[];
    /**
     * Appends the items in this Stream to the end of the given array.
     */
    toArray<N>(array: N[]): Array<T | N>;
    /**
     * Collects the items in this Stream to a Set.
     */
    toSet(): Set<T>;
    /**
     * Appends the items in this Stream to the end of the given Set.
     */
    toSet<N>(set: Set<N>): Set<T | N>;
    /**
     * Constructs a Map instance from the key-value pairs in this Stream.
     */
    toMap(): T extends [infer K, infer V] ? Map<K, V> : never;
    /**
     * Puts the key-value pairs in this Stream into the given Map.
     */
    toMap<KN, VN>(map: Map<KN, VN>): T extends [infer K, infer V] ? Map<K | KN, V | VN> : never;
    /**
     * Constructs a Map instance from the items in this Stream, using a mapping function.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    toMap<K, V>(mapper: (value: T, index: number) => [K, V]): Map<K, V>;
    /**
     * Puts the key-value pairs in this Stream into the given Map, using a mapping function.
     * @param map The map to put key-value pairs into.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    toMap<K, V, KN, VN>(map: Map<KN, VN>, mapper: (value: T, index: number) => [K, V]): Map<K, V>;
    /**
     * Constructs an object from the key-value pairs in this Stream.
     */
    toObject(): T extends [infer K, infer V] ? {
        [key in Extract<K, string | number | symbol>]: V;
    } : never;
    /**
     * Puts the key-value pairs in this Stream into the given object.
     */
    toObject<O>(obj: O): T extends [infer K, infer V] ? O & {
        [key in Extract<K, string | number | symbol>]: V;
    } : never;
    /**
     * Constructs an object from the items in this Stream, using a mapping function.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    toObject<K extends string | number | symbol, V>(mapper: (value: T, index: number) => [K, V]): {
        [key in K]: V;
    };
    /**
     * Puts the key-value pairs in this Stream into the given object, using a mapping function.
     * @param map The map to put key-value pairs into.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    toObject<K extends string | number | symbol, V, O>(obj: O, mapper: (value: T, index: number) => [K, V]): O & {
        [key in K]: V;
    };
    /**
     * Combines the items in this Stream into a string.
     * @param concatenator A substring to be placed between every item in this Stream. If not provided, uses `""`
     */
    toString(concatenator?: string): string;
    /**
     * Combines the items in this Stream into a string, via a reducer function.
     * @param concatenator Takes the current string and the next value and returns the new string.
     */
    toString(concatenator: (current: string, value: T) => string): string;
    /**
     * Runs a function on each item in this Stream.
     * @param user The function to call for each item
     */
    forEach(user: (val: T, index: number) => any): void;
    /**
     * Resolves the next item in this Stream. Updates `done` and `value`.
     */
    next(): void;
}
