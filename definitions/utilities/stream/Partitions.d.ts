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
export default class Partitions<T, K, V = T> implements IPartitions<K, V> {
    private readonly stream;
    private readonly sorter;
    private readonly mapper;
    private readonly streamMapper;
    private readonly _partitions;
    private readonly partitionKeys;
    private partitionKeyIndex;
    private _value;
    private _done;
    private index;
    readonly value: [K, Stream<V>];
    readonly done: boolean;
    constructor(stream: IStreamable<T>, sorter: (val: T, index: number) => K, mapper: (val: T, index: number) => V, streamMapper: <S>(val: IStreamable<S>) => Stream<S>);
    get(key: K): Stream<V>;
    partitions(): Stream<[K, Stream<V>]>;
    toMap<I extends Iterable<V> = V[]>(mapper?: (value: Stream<V>, key: K) => I): Map<K, I>;
    next(): void;
    private getPartition;
    private getFunctionForRetrievingNextInPartition;
}
