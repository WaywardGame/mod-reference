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
export default class DefaultMap<K, V> extends Map<K, V> {
    readonly defaultValue: V;
    constructor(defaultValue: V, entries?: ReadonlyArray<readonly [K, V]>);
    initialize(key: K): V;
}