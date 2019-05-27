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
export interface ISafeFn<T, O = never> {
    <K extends keyof T>(key: K): ISafeFn<Exclude<T[K], undefined | null>, Extract<T[K], undefined | null> | O>;
    get(): T | O;
    get<K extends keyof T>(key: K): T[K] | O;
    get<K extends keyof T, E>(key: K, orElse: () => E): Exclude<T[K] | O, undefined | null> | E;
}
export default function safe<T, K extends keyof T>(description: T): ISafeFn<Exclude<T, undefined | null>, Extract<T, undefined | null>>;
export default function safe<T, K extends keyof T>(description: T, key: K): ISafeFn<Exclude<(Exclude<T, undefined | null>)[K], undefined | null>, Extract<T, undefined | null> | Extract<T[K], undefined | null>>;
