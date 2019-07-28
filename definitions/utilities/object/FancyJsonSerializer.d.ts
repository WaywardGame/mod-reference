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
interface IClassSerializer<T, S> {
    serialize(instance: T): S;
    deserialize(obj: S): T;
}
export default class FancyJsonSerializer {
    private static _log;
    private static readonly log;
    private static serializedObjects;
    private static currentPath;
    private static resultObj;
    private static readonly serializationRegistry;
    private static readonly classMap;
    static registerClassSerializer<T, S>(cls: NullaryClass<T>, classSerializer: IClassSerializer<T, S>): void;
    static hasClassSerializer(cls: NullaryClass<any>): boolean;
    static serialize(obj: any, pretty?: boolean): string;
    static deserialize(json: string): any;
    private static serializeValue;
    private static deserializeValue;
    private static fakeBigInt;
}
export {};
