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

type NullaryClass<T> = new () => T;
type Class<T, A extends any[] = any[]> = new (...args: A) => T;
// tslint:disable-next-line ban-types No other type will work here except "Function" 
type AnyClass<T> = (Function & { prototype: T });

type InstanceOf<T extends Class<any> | AnyClass<any>> = T extends Class<any> ? InstanceType<T> : T extends { prototype: infer P } ? P : never;
