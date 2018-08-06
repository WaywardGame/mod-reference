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
/**
 * Used for ordering a list of items by "priority". Higher priorities come before lower priorities.
 */
export declare class PriorityList<T> {
    private priorities;
    private readonly map;
    /**
     * Takes any number of `[priority, T]` tuples and creates a list of them. The order of items with the
     * same priority is the same as the argument order.
     */
    constructor(...list: Array<[number, T]>);
    /**
     * Takes any number of `[priority, T]` tuples and creates a list of them. The order of items with the
     * same priority is the same as the argument order.
     */
    add(...list: Array<[number, T]>): this;
    /**
     * Returns an iterator of the items in this list.
     */
    values(): IterableIterator<T>;
    /**
     * Returns an iterator of the items in this list, ordered in reverse.
     */
    reverse(): IterableIterator<T>;
}
