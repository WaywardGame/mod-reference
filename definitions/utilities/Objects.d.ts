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
declare module Objects {
    function windowKeysToObject(windowKeys: string[]): any;
    function windowKeysToParentObject(windowKeys: string[]): any;
    function deepClone<T>(obj: T): T;
    function deepMerge<T>(...objs: T[]): T;
    function deepMerge<O extends any[]>(...objs: O): O[number] & O[number];
    module deepMerge {
        function ADD(amt: number): {
            merge(value: number): number;
            mask(): any & number;
        } & number;
        function SUBTRACT(amt: number): {
            merge(value: number): number;
            mask(): any & number;
        } & number;
        function MULTIPLY(amt: number): {
            merge(value: number): number;
            mask(): any & number;
        } & number;
        function DIVIDE(amt: number): {
            merge(value: number): number;
            mask(): any & number;
        } & number;
        function CONCAT(str: string): {
            merge(value: string): string;
            mask(): any & string;
        } & string;
    }
    function addProperty(property: string, value: any): (object: any) => any;
    function followDirections<T>(target: any, directions: string[]): T | undefined;
    function stringify(object: any, space?: number | undefined, noDepth?: boolean): string;
    function mutable<T>(object: T): Mutable<T>;
}
export default Objects;
export interface IPrivateStore<T> {
    set<K extends keyof T>(key: K, value: T[K]): void;
    get<K extends keyof T>(key: K): T[K];
}
export declare function initializePrivateStore(target: any, key: string | number | symbol, initializer?: Array<[symbol, any]>): void;
