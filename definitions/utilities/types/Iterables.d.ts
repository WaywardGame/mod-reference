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

type SaferArray<T> = Array<T | undefined>;

type ArrayOr<T> = T | T[];
type IterableOr<T> = T | Iterable<T>;
type ArrayOfIterablesOr<T> = Array<T | Iterable<T>>;

type GeneratorOf<T> = () => Iterable<T>;

type Head<T extends any[]> = T[0];
type Tail<A extends any[]> = ((...args: A) => any) extends ((_: any, ...args: infer A2) => any) ? A2 : never;

type AddHead<H, A extends any[]> = ArgumentsOf<(arg1: H, ...args: A) => any>;