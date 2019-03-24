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
import { Random } from "utilities/Random";
import { IStreamable } from "utilities/stream/IStream";
declare type Flat1<T> = T extends Iterable<infer X> ? X | Extract<T, string> | Exclude<T, Iterable<any>> : never;
export interface IUnzippedPartitions<K, V> {
    get(partition: "key"): Stream<K>;
    get(partition: "value"): Stream<V>;
    partitions(): Stream<["key", Stream<K>] | ["value", Stream<V>]>;
}
export interface IPartitions<K, V> extends IStreamable<[K, Stream<V>]> {
    /**
     * Returns a single partitioned Stream by the given key.
     * @param key The key of the partitioned Stream.
     *
     * Note: The partition Streams returned from this method are the same as returned by `partitions()`. Iterating through
     * a stream in either location will also empty it in the other.
     */
    get(key: K): Stream<V>;
    /**
     * Returns a Stream of tuples for all the partitioned Streams.
     *
     * Note: The partition Streams returned from this method are the same as returned by `partitions()`. Iterating through
     * a stream in either location will also empty it in the other.
     */
    partitions(): Stream<[K, Stream<V>]>;
}
/**
 * Note: When "splatting" a stream, it's actually faster (but not by much) to first collect it into an array:
 * ```ts
 * // slower
 * [...Stream.range(10)]
 *
 * // faster
 * [...Stream.range(10).toArray()]
 * ```
 */
export default abstract class Stream<T> implements IStreamable<T>, Iterable<T> {
    static readonly empty: Stream<any>;
    static from<T>(iterable: Iterable<T> | IStreamable<T>): Stream<T>;
    static of<A extends any[]>(...args: A): Stream<A[number]>;
    static range(end: number): Stream<number>;
    static range(start: number, end?: number, step?: number): Stream<number>;
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
    done: boolean;
    value: T;
    abstract [Symbol.iterator](): Iterator<T>;
    abstract [Symbol.asyncIterator](): AsyncIterator<T extends Promise<infer R> ? R : never>;
    /**
     * Returns a Stream that will loop only over the entries that match the given filter
     * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
     *
     * Note: The only difference between this method and `filter2` is the type argument: This method excludes the type argument,
     * while the other returns it.
     */
    abstract filter<X = never>(filter: (val: T) => any): Stream<Exclude<T, X>>;
    /**
     * Returns a Stream that will loop only over the entries that match the given filter
     * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
     *
     * Note: The only difference between this method and `filter` is the type argument: This method returns the type argument,
     * while the other excludes it.
     */
    abstract filter2<X = T>(filter: (val: T) => any): Stream<X>;
    /**
     * Returns a Stream that will loop only over the entries that match the given filter
     * @param filter A function that returns a truthy value if the entry should be included and a falsey value if it shouldn't
     *
     * Note: The only difference between this method and `filter2` is the type argument: This method excludes the type argument,
     * while the other returns it.
     */
    abstract filterNot<X = never>(filter: (val: T) => any): Stream<Exclude<T, X>>;
    /**
     * Returns a Stream of type X, using the given mapper function
     * @param mapper A function that maps an entry of type T to its corresponding type X
     */
    abstract map<X>(mapper: (val: T) => X): Stream<X>;
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
    abstract flatMap<X>(mapper: (value: T) => Iterable<X>): Stream<X>;
    /**
     * Returns a new Stream iterating over every value of each value of this iterator. The values in this
     * Stream don't have to be iterable.
     */
    abstract flatMap(): Stream<Flat1<T>>;
    /**
     * Returns a new Stream iterating over every value of each value of this Stream. The values in this
     * Stream don't have to be iterable.
     */
    abstract flatMap<X>(): Stream<X>;
    /**
     * Returns a Stream which will only go through the first X items, where X is the given argument.
     */
    abstract take(amount: number): Stream<T>;
    /**
     * Returns a Stream which will only iterate through the items in this Stream until the predicate doesn't match.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract takeWhile(predicate: (val: T) => boolean): Stream<T>;
    /**
     * Returns a Stream which will skip the first X items, where X is the given argument.
     */
    abstract drop(amount: number): Stream<T>;
    /**
     * Returns a Stream which will skip the items in this Stream until the predicate doesn't match.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract dropWhile(predicate: (val: T) => boolean): Stream<T>;
    /**
     * Returns a Stream which steps through the items in the current Stream using the provided step amount.
     * @param step A non-zero integer. Positive integers will step forwards through the Stream, negative integers
     * will step backwards.
     *
     * Note: Stepping backwards will require iteration through this entire Stream.
     */
    abstract step(step: number): Stream<T>;
    /**
     * Returns a new Stream which contains the sorted contents of this stream. The values are sorted in ascending ASCII order.
     */
    abstract sorted(): Stream<T>;
    /**
     * Returns a new Stream which contains the sorted contents of this Stream.
     * @param comparator A function that returns a "difference" between `a` and `b`, for sorting by.
     */
    abstract sorted(comparator: (a: T, b: T) => number): Stream<T>;
    /**
     * Returns a new Stream which contains the contents of this Stream, in reverse order.
     */
    abstract reverse(): Stream<T>;
    /**
     * Returns a new Stream which contains only unique items in this Stream.
     *
     * Note: Alias of `stream.toSet().stream()`
     */
    abstract distinct(): Stream<T>;
    /**
     * Returns a new Stream of the shuffled items in this Stream.
     *
     * Note: This method is an alias of `stream.toArray().shuffle(random).stream()`
     */
    abstract shuffle(random?: Random): Stream<T>;
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
    abstract partition<K>(sorter: (val: T) => K): IPartitions<K, T>;
    /**
     * Returns a `Partitions` instance where the T items (should be 2-value Tuples) of this Stream are split into two
     * partition Streams: "key" and "value".
     */
    abstract unzip(): T extends [infer K, infer V] ? IUnzippedPartitions<K, V> : never;
    /**
     * Returns a new Stream containing the items in this Stream and then the items provided.
     */
    abstract add<N>(...items: N[]): Stream<T | N>;
    /**
     * Returns a new Stream containing the items in this Stream and then the items in all provided Streams or Iterables.
     */
    abstract merge<N>(...iterables: Array<Stream<N> | Iterable<N>>): Stream<T | N>;
    /**
     * Returns a new Stream of the same type, after first collecting this Stream into an array.
     *
     * Why is this useful? It can be used, for example, to prevent concurrent modification errors. Since it collects
     * everything into an array before streaming the values, it allows doing things such as deletion from the source object.
     *
     * Note: This method is an alias of `stream.toArray().stream()`.
     */
    abstract collectStream(): Stream<T>;
    /**
     * Returns the item at the given index, or `undefined` if it does not exist.
     *
     * Note: An alias for `drop(index - 1).first()`.
     */
    abstract at(index: number): T | undefined;
    /**
     * Returns the item at the given index, or `orElse` if it does not exist.
     *
     * Note: An alias for `drop(index - 1).first(orElse)`.
     */
    abstract at(index: number, orElse: T): T;
    /**
     * Returns the item at the given index, or, if it does not exist, `orElse`, or `undefined` if `orElse` is not provided.
     *
     * Note: An alias for `drop(index - 1).first(orElse)`.
     */
    abstract at(index: number, orElse?: T): T | undefined;
    /**
     * Returns true if the predicate returns true for any of the items in this Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract any(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns true for any of the items in this Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `any()`
     */
    abstract some(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns true for every item in the Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract every(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns true for every item in the Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `every()`
     */
    abstract all(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns true if the predicate returns false for every item in the Stream
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract none(predicate: (val: T, index: number) => boolean): boolean;
    /**
     * Returns whether the Stream includes any of the the given values. Uses strict equality comparison. `===`
     */
    abstract includes(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes any of the the given values. Uses strict equality comparison. `===`
     *
     * Note: Alias of `includes()`
     */
    abstract contains(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes any of the the given values. Uses strict equality comparison. `===`
     *
     * Note: Alias of `includes()`
     */
    abstract has(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes all of the the given values. Uses strict equality comparison. `===`
     */
    abstract includesAll(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes all of the the given values. Uses strict equality comparison. `===`
     *
     * Note: Alias of `includesAll()`
     */
    abstract containsAll(...values: T[]): boolean;
    /**
     * Returns whether the Stream includes all of the the given values. Uses strict equality comparison. `===`
     *
     * Note: Alias of `includesAll()`
     */
    abstract hasAll(...values: T[]): boolean;
    /**
     * Returns whether this Stream has any items in common with items in the given iterables.
     */
    abstract intersects(...iterables: Array<Iterable<T>>): boolean;
    /**
     * Returns the number of items in this Stream.
     */
    abstract count(): number;
    /**
     * Returns the number of items in this Stream.
     *
     * Note: Alias of `count`
     */
    abstract length(): number;
    /**
     * Returns the number of items in this Stream.
     *
     * Note: Alias of `count`
     */
    abstract size(): number;
    /**
     * Returns a new value by combining the items in this Stream using the given reducer function.
     * @param reducer A function which takes the current value and the next value and returns a new value.
     */
    abstract fold<R>(initial: R, folder: (current: R, newValue: T, index: number) => R): R;
    /**
     * **This method does not work like array reduce. If that's what you're looking for, see `fold`**
     *
     * Returns a single `T` by combining the items in this Stream using the given reducer function. Returns `undefined`
     * if there are no items in this Stream.
     * @param reducer A function which takes the current value and the next value and returns a new value of the same type.
     */
    abstract reduce(reducer: (current: T, newValue: T, index: number) => T): T | undefined;
    /**
     * Returns the first item in this Stream, or `undefined` if there are no items.
     */
    abstract first(): T | undefined;
    /**
     * Returns the first item in this Stream that matches a predicate, or `orElse` if there are none.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract first(predicate: undefined | ((val: T, index: number) => boolean), orElse: T): T;
    /**
     * Returns the first item in this Stream that matches a predicate, or `orElse` if there are none.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract first(predicate?: (val: T, index: number) => boolean, orElse?: T): T | undefined;
    /**
     * Returns the first item in this Stream, or `undefined` if there are no items.
     *
     * Note: Alias of `first()`
     */
    abstract find(): T | undefined;
    /**
     * Returns the first item in this Stream that matches a predicate, or `orElse` if there are none.
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `first()`
     */
    abstract find(predicate: undefined | ((val: T, index: number) => boolean), orElse: T): T;
    /**
     * Returns the first item in this Stream that matches a predicate, or `orElse` if there are none.
     * @param predicate A predicate function that takes a Stream value and its index.
     *
     * Note: Alias of `first()`
     */
    abstract find(predicate?: (val: T, index: number) => boolean, orElse?: T): T | undefined;
    /**
     * Returns the last item in this Stream, or `undefined` if there are no items.
     */
    abstract last(): T | undefined;
    /**
     * Returns the last item in this Stream that matches a predicate, or `orElse` if there are none.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract last(predicate: undefined | ((val: T, index: number) => boolean), orElse: T): T;
    /**
     * Returns the last item in this Stream that matches a predicate, or `orElse` if there are none.
     * @param predicate A predicate function that takes a Stream value and its index.
     */
    abstract last(predicate?: (val: T, index: number) => boolean, orElse?: T): T | undefined;
    /**
     * Returns a random item in this Stream, or `undefined` if there are none.
     */
    abstract random(): T | undefined;
    /**
     * Returns a random item in this Stream, or `orElse` if there are none.
     */
    abstract random(orElse: T, random?: Random): T;
    /**
     * Returns a random item in this Stream, or `orElse` if there are none.
     */
    abstract random(orElse?: T): T | undefined;
    /**
     * Returns a random item in this Stream, or `orElse` if there are none.
     */
    abstract random(orElse?: T, random?: Random): T | undefined;
    /**
     * Returns a value of type R, generated with the given collector function.
     * @param collector A function that takes the iterable, and returns type R
     */
    abstract collect<R>(collector: (stream: Stream<T>) => R): R;
    /**
     * Returns a value of type R, generated with the given collector function.
     * @param collector A function that takes the iterable, and returns type R
     */
    abstract collect<R, A extends any[]>(collector: (stream: Stream<T>, ...args: A) => R, ...args: A): R;
    /**
     * Returns a value of type R, generated with the given collector function.
     * @param collector A function that takes the splatted values in this iterable, and returns type R
     */
    abstract splat<R>(collector: (...args: T[]) => R): R;
    /**
     * Returns a promise that will return the value of the first completed promise in this stream.
     *
     * Note: Alias of `Promise.race(stream.toArray())`
     */
    abstract race(): Promise<T extends Promise<infer R> ? R : never>;
    /**
     * Returns a promise of a stream with all items await-ed.
     *
     * Note: Alias of `Promise.all(stream.toArray()).stream()`
     */
    abstract rest(): Promise<T extends Promise<infer R> ? Stream<R> : never>;
    /**
     * Collects the items in this Stream to an array.
     */
    abstract toArray(): T[];
    /**
     * Appends the items in this Stream to the end of the given array.
     */
    abstract toArray<N>(array: N[]): Array<T | N>;
    /**
     * Collects the items in this Stream to a Set.
     */
    abstract toSet(): Set<T>;
    /**
     * Appends the items in this Stream to the end of the given Set.
     */
    abstract toSet<N>(set: Set<N>): Set<T | N>;
    /**
     * Constructs a Map instance from the key-value pairs in this Stream.
     */
    abstract toMap(): T extends [infer K, infer V] ? Map<K, V> : never;
    /**
     * Puts the key-value pairs in this Stream into the given Map.
     */
    abstract toMap<KN, VN>(map: Map<KN, VN>): T extends [infer K, infer V] ? Map<K | KN, V | VN> : never;
    /**
     * Constructs a Map instance from the items in this Stream, using a mapping function.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    abstract toMap<K, V>(mapper: (value: T, index: number) => [K, V]): Map<K, V>;
    /**
     * Puts the key-value pairs in this Stream into the given Map, using a mapping function.
     * @param map The map to put key-value pairs into.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    abstract toMap<K, V, KN, VN>(map: Map<KN, VN>, mapper: (value: T, index: number) => [K, V]): Map<K, V>;
    /**
     * Constructs an object from the key-value pairs in this Stream.
     */
    abstract toObject(): T extends [infer K, infer V] ? {
        [key in Extract<K, string | number | symbol>]: V;
    } : never;
    /**
     * Puts the key-value pairs in this Stream into the given object.
     */
    abstract toObject<O>(obj: O): T extends [infer K, infer V] ? O & {
        [key in Extract<K, string | number | symbol>]: V;
    } : never;
    /**
     * Constructs an object from the items in this Stream, using a mapping function.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    abstract toObject<K extends string | number | symbol, V>(mapper: (value: T, index: number) => [K, V]): {
        [key in K]: V;
    };
    /**
     * Puts the key-value pairs in this Stream into the given object, using a mapping function.
     * @param map The map to put key-value pairs into.
     * @param mapper A mapping function which takes an item in this Stream and returns a key-value pair.
     */
    abstract toObject<K extends string | number | symbol, V, O>(obj: O, mapper: (value: T, index: number) => [K, V]): O & {
        [key in K]: V;
    };
    /**
     * Combines the items in this Stream into a string.
     * @param concatenator A substring to be placed between every item in this Stream. If not provided, uses `""`
     */
    abstract toString(concatenator?: string): string;
    /**
     * Combines the items in this Stream into a string, via a reducer function.
     * @param concatenator Takes the current string and the next value and returns the new string.
     */
    abstract toString(concatenator: (current: string, value: T) => string): string;
    /**
     * Iterates through the entire stream.
     */
    abstract iterateToEnd(): void;
    /**
     * Iterates through the entire stream.
     *
     * Note: Alias of `iterateToEnd()`
     */
    abstract finish(): void;
    /**
     * Iterates through the entire stream.
     *
     * Note: Alias of `iterateToEnd()`
     */
    abstract end(): void;
    /**
     * Iterates through the entire stream.
     *
     * Note: Alias of `iterateToEnd()`
     */
    abstract complete(): void;
    /**
     * Iterates through the entire stream.
     *
     * Note: Alias of `iterateToEnd()`
     */
    abstract flush(): void;
    /**
     * Runs a function on each item in this Stream.
     * @param user The function to call for each item
     */
    abstract forEach(user: (val: T, index: number) => any): void;
    abstract next(): void;
    /**
     * Returns whether the Stream has a next entry.
     */
    abstract hasNext(): boolean;
}
export {};
