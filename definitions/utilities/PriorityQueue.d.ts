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
export declare enum PriorityQueueType {
    LowestToHighest = 0,
    HighestToLowest = 1
}
export default class PriorityQueue<T> {
    readonly type: PriorityQueueType;
    private head;
    private length;
    constructor(type: PriorityQueueType);
    getLength(): number;
    isEmpty(): boolean;
    push(data: T, priority: number): void;
    pop(): T | undefined;
    entries(): IterableIterator<T>;
}
