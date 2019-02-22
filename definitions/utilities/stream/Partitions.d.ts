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
import Stream from "utilities/stream/Stream";
export default class Partitions<T, K> implements IStream<[K, Stream<T>]> {
    private readonly stream;
    private readonly sorter;
    private readonly streamMapper;
    private readonly _partitions;
    private readonly partitionKeys;
    private partitionKeyIndex;
    private _value;
    private _done;
    private index;
    readonly value: [K, Stream<T>];
    readonly done: boolean;
    constructor(stream: IStream<T>, sorter: (val: T, index: number) => K, streamMapper: <V>(val: IStream<V>) => Stream<V>);
    /**
     * Returns a single partitioned Stream by the given key.
     * @param key The key of the partitioned Stream.
     *
     * Note: The partition Streams returned from this method are the same as returned by `partitions()`. Iterating through
     * a stream in either location will also empty it in the other.
     */
    get(key: K): Stream<T>;
    /**
     * Returns a Stream of tuples for all the partitioned Streams.
     *
     * Note: The partition Streams returned from this method are the same as returned by `partitions()`. Iterating through
     * a stream in either location will also empty it in the other.
     */
    partitions(): Stream<[K, Stream<T>]>;
    next(): void;
    private getPartition;
    private getFunctionForRetrievingNextInPartition;
}
export declare class Partition<T> implements IStream<T> {
    private readonly getNext;
    private readonly items;
    private index;
    private _value;
    private _done;
    readonly value: T;
    readonly done: boolean;
    constructor(getNext: () => {
        done: boolean;
        value?: T;
    });
    next(): void;
    add(...items: T[]): void;
}
