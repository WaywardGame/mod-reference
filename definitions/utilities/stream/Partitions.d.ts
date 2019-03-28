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
import { IStreamable } from "utilities/stream/IStream";
import Stream, { IPartitions } from "utilities/stream/Stream";
export default class Partitions<T, K> implements IPartitions<K, T> {
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
    constructor(stream: IStreamable<T>, sorter: (val: T, index: number) => K, streamMapper: <V>(val: IStreamable<V>) => Stream<V>);
    get(key: K): Stream<T>;
    partitions(): Stream<[K, Stream<T>]>;
    toMap<I extends Iterable<T> = T[]>(mapper?: (value: Stream<T>, key: K) => I): Map<K, I>;
    next(): void;
    private getPartition;
    private getFunctionForRetrievingNextInPartition;
}
