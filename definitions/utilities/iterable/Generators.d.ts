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
/**
 * A generator for numbers from `0` through `end` (exclusive)
 */
export declare function range(end: number): IterableIterator<number>;
/**
 * A generator for numbers from `start` (inclusive) through `end` (exclusive)
 */
export declare function range(start: number, end: number): IterableIterator<number>;
export declare function tuple<T extends any[]>(...items: T): T;
export declare function pipe<A extends any[]>(...args: A): IterableIterator<A[number]>;
