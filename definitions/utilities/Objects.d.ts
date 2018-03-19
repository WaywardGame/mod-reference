declare module Objects {
    /**
     * Uses a `for .. in` loop to check if an object has no keys.
     */
    function isEmpty(object: any): boolean;
    /**
     * Returns an iterator for an object's keys. Does not check if the key is prototypal!
     */
    function keys<K extends string>(object: any): IterableIterator<K>;
    /**
     * Returns an iterator for an object's values. Does not check if the values are prototypal!
     */
    function values<V = any>(object: {
        [key: string]: V;
    }): IterableIterator<V>;
    /**
     * Returns an iterator for the entries of an object, given in a tuple of `[key, value]`.
     * Does not check if the entries are prototypal!
     */
    function entries<V = any>(object: {
        [key: string]: V;
    }): IterableIterator<[string, V]>;
    /**
     * Returns an iterator for an object's keys.
     */
    function ownKeys(object: any): IterableIterator<string>;
    /**
     * Returns an iterator for an object's values.
     */
    function ownValues<V = any>(object: {
        [key: string]: V;
    }): IterableIterator<V>;
    /**
     * Returns an iterator for the entries of an object, given in a tuple of `[key, value]`.
     */
    function ownEntries<V = any>(object: {
        [key: string]: V;
    }): IterableIterator<[string, V]>;
    /**
     * Creates an object from an iterable of entries, given in a tuple of `[key, value]`.
     */
    function create<K extends string, V>(entriesIterable: IterableOf<[K, V]>): {
        [key in K]: V;
    };
    function windowKeysToObject(windowKeys: string[]): any;
    function windowKeysToParentObject(windowKeys: string[]): any;
    function objectDeepClone<T>(obj: T): T;
}
export default Objects;
