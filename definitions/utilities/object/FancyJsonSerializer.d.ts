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
declare module FancyJsonSerializer {
    function serialize(obj: any, pretty?: boolean): string;
    function deserialize(json: string): any;
    interface IClassSerializer<T, S> {
        serialize(instance: T): S;
        deserialize(obj: S): T;
    }
    function registerClassSerializer<T, S>(cls: Class<T>, classSerializer: IClassSerializer<T, S>): void;
}
export default FancyJsonSerializer;
