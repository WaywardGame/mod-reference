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
 * Used for ordering a list of items by "priority". Higher priorities come before lower priorities.
 */
export declare class PriorityMap<T> {
    static streamAll<T extends Iterable<any>>(...lists: Array<PriorityMap<T>>): import("./stream/Stream").default<T>;
    private readonly priorities;
    private readonly map;
    getOrDefault(priority: number): T | undefined;
    getOrDefault(priority: number, orDefault: (priority: number) => T, assign?: boolean): T;
    getOrDefault(priority: number, orDefault?: (priority: number) => T, assign?: boolean): T | undefined;
    /**
     * Returns an iterator of the items in this list.
     */
    stream(direction?: PriorityListStreamDirection): import("./stream/Stream").default<T>;
}
export declare const enum PriorityListStreamDirection {
    HighestToLowest = -1,
    LowestToHighest = 1
}
