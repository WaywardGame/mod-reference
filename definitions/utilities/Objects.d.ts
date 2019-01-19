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
declare module Objects {
    /**
     * Uses a `for .. in` loop to check if an object has no keys.
     */
    function isEmpty(object: any): boolean;
    /**
     * Returns an iterator for an object's keys. Does not check if the key is prototypal!
     */
    function keys<T extends {
        [key in K]?: any;
    }, K extends keyof T>(object: T): IterableIterator<Extract<K, string>>;
    function keys<K>(object: any): IterableIterator<K>;
    /**
     * Returns an iterator for an object's values. Does not check if the values are prototypal!
     */
    function values<T extends {
        [key in K]: any;
    }, K extends keyof T>(object: T): IterableIterator<T extends {
        [key in K]: infer V;
    } ? V : never>;
    function values<V>(object: any): IterableIterator<V>;
    /**
     * Returns an iterator for the entries of an object, given in a tuple of `[key, value]`.
     * Does not check if the entries are prototypal!
     */
    function entries<T extends {
        [key in K]: any;
    }, K extends keyof T>(object: T): IterableIterator<[Extract<K, string>, T extends {
        [key in K]: infer V;
    } ? V : never]>;
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
    function create<K extends string | number | symbol, V>(entriesIterable: IterableOf<[K, V]>): {
        [key in K]: V;
    };
    function windowKeysToObject(windowKeys: string[]): any;
    function windowKeysToParentObject(windowKeys: string[]): any;
    function deepClone<T>(obj: T): T;
    function addProperty(property: string, value: any): (object: any) => any;
    function followDirections<T>(target: any, directions: string[]): T | undefined;
    function stringify(object: any, space?: number | undefined, noDepth?: boolean): string;
}
export default Objects;
export declare function Bound<T extends (...args: any[]) => any>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export declare function Final<T extends (...args: any[]) => any>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void;
export interface IPrivateStore<T> {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T>(key: K): T[K];
}
export declare function initializePrivateStore(target: any, initializer?: Array<[symbol, any]>): void;
