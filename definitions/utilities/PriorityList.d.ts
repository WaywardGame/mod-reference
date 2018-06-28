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
