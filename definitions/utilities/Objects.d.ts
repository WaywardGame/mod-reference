declare module Objects {
    /**
     * Uses a `for .. in` loop to check if an object has no keys.
     */
    function isEmpty(object: any): boolean;
    /**
     * Returns an iterator for an object's keys. Does not check if the key is prototypal!
     */
    function keys<T>(object: T): IterableIterator<keyof T>;
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
    function entries<T extends {
        [key in K]: V;
    }, K extends Extract<keyof T, string>, V = any>(object: T): IterableIterator<[K, V]>;
    function entries<K, V>(object: any): IterableIterator<[K, V]>;
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
    function followDirections<T>(target: any, directions: string[]): T | undefined;
}
export declare function Bound<T extends (...args: any[]) => any>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export default Objects;
